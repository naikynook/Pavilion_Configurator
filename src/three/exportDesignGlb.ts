import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { WebIO } from '@gltf-transform/core'
import {
  KHRDracoMeshCompression,
  KHRMeshQuantization,
} from '@gltf-transform/extensions'
import { dedup, dequantize, draco, prune, weld } from '@gltf-transform/functions'
import type { PlacedPrimitive, PrimitiveTypeId } from '../types'
import { getPlacementKind, isModuleType } from '../constants/primitives'
import { createDracoEncoder } from './createDracoEncoder'

/** Configurator units are feet; Blender prefers meters. */
const FT_TO_M = 0.3048
/** Yield to the browser every N baked meshes so the UI can paint. */
const BAKE_YIELD_EVERY = 8

export type ExportCategory = 'Frames' | 'Bases' | 'Wall_Panels' | 'Furniture'

export interface DesignExportResult {
  blob: Blob
  filename: string
  meshCount: number
  /** Uncompressed GLB size before Draco (bytes). */
  rawByteSize: number
  /** Final download size (bytes). */
  byteSize: number
}

/** One shared material — avoids embedding hundreds of identical PBR blocks. */
const EXPORT_MATERIAL = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 1,
  metalness: 0,
  flatShading: false,
  name: 'Export_Plain',
})

function sanitizeName(name: string) {
  return name.replace(/[^\w.\-]+/g, '_').replace(/_+/g, '_')
}

/** Let the browser paint / handle input between heavy sync chunks. */
function yieldToMain(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof requestAnimationFrame === 'function') {
      requestAnimationFrame(() => setTimeout(resolve, 0))
    } else {
      setTimeout(resolve, 0)
    }
  })
}

function categoryForMesh(
  meshName: string,
  typeId: PrimitiveTypeId | undefined,
): ExportCategory | 'skip' {
  const n = meshName.toLowerCase()

  if (
    n.includes('bolt') ||
    n.includes('preview') ||
    n.includes('helper') ||
    n.includes('grid')
  ) {
    return 'skip'
  }

  if (
    n.startsWith('wall-panel') ||
    n.includes('wall-panel-sheet') ||
    n.includes('wall-panel-seam')
  ) {
    return 'Wall_Panels'
  }

  if (n.includes('module-base') || n === 'module-base') {
    return 'Bases'
  }

  if (n.includes('module-connector')) {
    return 'Bases'
  }

  if (
    n.includes('module-steel') ||
    n.includes('module-connection') ||
    n.includes('module-foot') ||
    n.includes('module-xyz')
  ) {
    return 'Frames'
  }

  if (typeId === 'panel8x8') {
    return 'Wall_Panels'
  }

  if (typeId === 'stool') {
    return 'Furniture'
  }

  if (typeId && isModuleType(typeId)) {
    if (n.includes('steel') || n.startsWith('mesh_')) {
      return 'Frames'
    }
    return 'Frames'
  }

  const kind = typeId ? getPlacementKind(typeId) : null
  if (kind === 'wallAttach' || kind === 'baseAttach' || kind === 'free') {
    return 'Furniture'
  }

  return 'skip'
}

/**
 * Copy positions/normals via getters so Meshopt / quantized / interleaved
 * attributes become plain Float32 data before matrix baking.
 */
function geometryToFloatBake(source: THREE.BufferGeometry): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()
  const pos = source.getAttribute('position')
  if (!pos || pos.count <= 0) return geometry

  const positions = new Float32Array(pos.count * 3)
  for (let i = 0; i < pos.count; i++) {
    positions[i * 3] = pos.getX(i)
    positions[i * 3 + 1] = pos.getY(i)
    positions[i * 3 + 2] = pos.getZ(i)
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const nrm = source.getAttribute('normal')
  if (nrm && nrm.count === pos.count) {
    const normals = new Float32Array(nrm.count * 3)
    for (let i = 0; i < nrm.count; i++) {
      normals[i * 3] = nrm.getX(i)
      normals[i * 3 + 1] = nrm.getY(i)
      normals[i * 3 + 2] = nrm.getZ(i)
    }
    geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3))
  }

  if (source.index) {
    const rangeStart = source.drawRange.start || 0
    const rangeCount =
      source.drawRange.count === Infinity || source.drawRange.count < 0
        ? source.index.count - rangeStart
        : source.drawRange.count
    const triVerts = Math.max(0, Math.floor(rangeCount / 3) * 3)
    const indices = new Uint32Array(triVerts)
    for (let i = 0; i < triVerts; i++) {
      indices[i] = source.index.getX(rangeStart + i)
    }
    geometry.setIndex(new THREE.BufferAttribute(indices, 1))
  }

  return geometry
}

/**
 * Bake world transform into geometry, convert feet → meters, strip textures.
 */
function bakeMesh(
  source: THREE.Mesh,
  name: string,
  meters: THREE.Matrix4,
): THREE.Mesh {
  const geometry = geometryToFloatBake(source.geometry)
  if (!geometry.getAttribute('position')) {
    return new THREE.Mesh(geometry, EXPORT_MATERIAL)
  }

  source.updateWorldMatrix(true, false)
  const matrix = meters.clone().multiply(source.matrixWorld)
  geometry.applyMatrix4(matrix)

  geometry.morphAttributes = {}
  geometry.morphTargetsRelative = false

  if (!geometry.getAttribute('normal')) {
    geometry.computeVertexNormals()
  }

  const mesh = new THREE.Mesh(geometry, EXPORT_MATERIAL)
  mesh.name = sanitizeName(name)
  mesh.castShadow = false
  mesh.receiveShadow = false
  return mesh
}

function typeIdForObject(
  object: THREE.Object3D,
  byId: Map<string, PlacedPrimitive>,
): PrimitiveTypeId | undefined {
  const id = object.userData.primitiveId as string | undefined
  if (id && byId.has(id)) return byId.get(id)!.typeId

  let current: THREE.Object3D | null = object
  while (current) {
    const pid = current.userData.primitiveId as string | undefined
    if (pid && byId.has(pid)) return byId.get(pid)!.typeId
    current = current.parent
  }
  return undefined
}

/**
 * Build a Blender-ready scene: Frames / Bases / Wall_Panels / Furniture,
 * separate meshes, no textures, units in meters.
 * Yields periodically so the page stays responsive on large designs.
 */
export async function buildDesignExportScene(
  primitivesRoot: THREE.Object3D,
  primitives: PlacedPrimitive[],
): Promise<{ root: THREE.Group; meshCount: number }> {
  const byId = new Map(primitives.map((p) => [p.id, p]))
  const meters = new THREE.Matrix4().makeScale(FT_TO_M, FT_TO_M, FT_TO_M)

  const root = new THREE.Group()
  root.name = 'Pavilion_Design'

  const groups: Record<ExportCategory, THREE.Group> = {
    Frames: new THREE.Group(),
    Bases: new THREE.Group(),
    Wall_Panels: new THREE.Group(),
    Furniture: new THREE.Group(),
  }
  for (const [name, group] of Object.entries(groups)) {
    group.name = name
    root.add(group)
  }

  const counters: Record<ExportCategory, number> = {
    Frames: 0,
    Bases: 0,
    Wall_Panels: 0,
    Furniture: 0,
  }

  primitivesRoot.updateWorldMatrix(true, true)

  const sources: THREE.Mesh[] = []
  primitivesRoot.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !child.geometry) return
    const typeId = typeIdForObject(child, byId)
    const category = categoryForMesh(child.name || '', typeId)
    if (category === 'skip') return
    sources.push(child)
  })

  for (let i = 0; i < sources.length; i++) {
    const child = sources[i]
    const typeId = typeIdForObject(child, byId)
    const category = categoryForMesh(child.name || '', typeId)
    if (category === 'skip') continue

    counters[category] += 1
    const index = counters[category]
    const baseName =
      child.name && child.name !== ''
        ? child.name
        : category === 'Frames'
          ? 'steel'
          : category === 'Bases'
            ? 'base'
            : category === 'Wall_Panels'
              ? 'panel'
              : 'furniture'

    const primId = (child.userData.primitiveId as string | undefined)?.slice(
      0,
      8,
    )
    const name = primId
      ? `${category}_${baseName}_${primId}_${index}`
      : `${category}_${baseName}_${index}`

    groups[category].add(bakeMesh(child, name, meters))

    if ((i + 1) % BAKE_YIELD_EVERY === 0) {
      await yieldToMain()
    }
  }

  const meshCount = Object.values(counters).reduce((a, b) => a + b, 0)
  return { root, meshCount }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

let glbIo: WebIO | null = null
let compressWorker: Worker | null = null

async function getGlbIo() {
  if (glbIo) return glbIo
  const encoder = await createDracoEncoder()
  glbIo = new WebIO()
    .registerExtensions([KHRDracoMeshCompression, KHRMeshQuantization])
    .registerDependencies({ 'draco3d.encoder': encoder })
  return glbIo
}

/** Main-thread fallback if the worker fails to start. */
async function optimizeGlbMain(raw: ArrayBuffer): Promise<Uint8Array> {
  const io = await getGlbIo()
  await yieldToMain()
  const document = await io.readBinary(new Uint8Array(raw))
  await yieldToMain()
  await document.transform(
    dequantize(),
    dedup(),
    weld(),
    draco({ method: 'edgebreaker' }),
    prune(),
  )
  await yieldToMain()
  return io.writeBinary(document)
}

function optimizeGlbInWorker(raw: ArrayBuffer): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    try {
      if (!compressWorker) {
        compressWorker = new Worker(
          new URL('./compressGlb.worker.ts', import.meta.url),
          { type: 'module' },
        )
      }
      const worker = compressWorker

      const onMessage = (event: MessageEvent) => {
        worker.removeEventListener('message', onMessage)
        worker.removeEventListener('error', onError)
        if (event.data?.ok && event.data.buffer) {
          // Copy so we own a non-transferred buffer for Blob/download.
          resolve(new Uint8Array(event.data.buffer as ArrayBuffer).slice())
        } else {
          reject(
            new Error(
              typeof event.data?.message === 'string'
                ? event.data.message
                : 'GLB optimization failed in worker.',
            ),
          )
        }
      }
      const onError = (err: ErrorEvent) => {
        worker.removeEventListener('message', onMessage)
        worker.removeEventListener('error', onError)
        // Dead worker — force a fresh one next time.
        try {
          worker.terminate()
        } catch {
          /* ignore */
        }
        compressWorker = null
        reject(err.error ?? new Error(err.message || 'Worker error'))
      }

      worker.addEventListener('message', onMessage)
      worker.addEventListener('error', onError)
      // Transfer ownership to the worker (detaches this ArrayBuffer only).
      worker.postMessage(raw, [raw])
    } catch (error) {
      reject(error instanceof Error ? error : new Error(String(error)))
    }
  })
}

async function optimizeGlb(raw: ArrayBuffer): Promise<Uint8Array> {
  // postMessage(..., [buf]) detaches the buffer. Always send a copy so
  // main-thread fallback can still read `raw` if the worker fails.
  try {
    return await optimizeGlbInWorker(raw.slice(0))
  } catch (error) {
    console.warn('GLB worker failed; falling back to main thread.', error)
    return optimizeGlbMain(raw)
  }
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Export the live design as an untextured, Draco-compressed GLB
 * (Rhino + Blender compatible).
 */
export async function exportDesignGlb(
  primitivesRoot: THREE.Object3D,
  primitives: PlacedPrimitive[],
): Promise<DesignExportResult> {
  if (primitives.length === 0) {
    throw new Error('Place at least one module or panel before exporting.')
  }

  // Let React paint “Exporting…” before heavy work
  await yieldToMain()

  const { root, meshCount } = await buildDesignExportScene(
    primitivesRoot,
    primitives,
  )
  if (meshCount === 0) {
    throw new Error('Nothing to export yet — wait for models to finish loading.')
  }

  await yieldToMain()

  const exporter = new GLTFExporter()
  const rawBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    setTimeout(() => {
      exporter.parse(
        root,
        (result) => {
          if (result instanceof ArrayBuffer) resolve(result)
          else reject(new Error('Expected binary GLB export.'))
        },
        (error) => {
          reject(error instanceof Error ? error : new Error(String(error)))
        },
        {
          binary: true,
          onlyVisible: true,
          truncateDrawRange: true,
        },
      )
    }, 0)
  })

  const rawByteSize = rawBuffer.byteLength

  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry.dispose()
    }
  })

  await yieldToMain()

  const optimized = await optimizeGlb(rawBuffer)
  const outBuffer = optimized.buffer.slice(
    optimized.byteOffset,
    optimized.byteOffset + optimized.byteLength,
  ) as ArrayBuffer

  const stamp = new Date().toISOString().slice(0, 10)
  const filename = `pavilion-design-${stamp}.glb`
  const blob = new Blob([outBuffer], { type: 'model/gltf-binary' })
  downloadBlob(blob, filename)

  return {
    blob,
    filename,
    meshCount,
    rawByteSize,
    byteSize: optimized.byteLength,
  }
}
