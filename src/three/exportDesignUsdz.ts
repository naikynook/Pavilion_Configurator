import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'
import { MeshoptSimplifier } from 'meshoptimizer'
import type { PlacedPrimitive } from '../types'

/** Configurator units are feet; AR Quick Look uses meters. */
const FT_TO_M = 0.3048

/**
 * Quick Look budget: high enough to keep tube frames readable, low enough
 * to avoid the ~1.8M-tri / hundreds-of-MB crash. Target ~10–20 MB USDZ.
 */
const AR_TARGET_TRIANGLES = 280_000
/** Per unique source mesh before instancing (steel frames need most of this). */
const AR_SOURCE_TRIANGLES = 160_000
const MISSING = 0xffffffff

export interface DesignUsdzExportResult {
  blob: Blob
  filename: string
  meshCount: number
  byteSize: number
  triangleCount: number
}

type ArBucket = 'steel' | 'wood' | 'other'

const AR_MATERIALS: Record<ArBucket, THREE.MeshStandardMaterial> = {
  steel: new THREE.MeshStandardMaterial({
    color: 0xc5cad1,
    roughness: 0.35,
    metalness: 0.85,
    name: 'AR_Steel',
  }),
  wood: new THREE.MeshStandardMaterial({
    color: 0xe8dcc8,
    roughness: 0.9,
    metalness: 0.02,
    name: 'AR_Wood',
  }),
  other: new THREE.MeshStandardMaterial({
    color: 0xd4d4d8,
    roughness: 0.7,
    metalness: 0.15,
    name: 'AR_Other',
  }),
}

function shouldSkipForAr(object: THREE.Object3D) {
  const n = (object.name || '').toLowerCase()
  return (
    n.includes('bolt') ||
    n.includes('preview') ||
    n.includes('helper') ||
    n.includes('grid') ||
    n.includes('bounding')
  )
}

function classifyMesh(mesh: THREE.Mesh, material: THREE.Material): ArBucket {
  const n = (mesh.name || '').toLowerCase()
  if (
    n.includes('base') ||
    n.includes('panel') ||
    n.includes('plywood') ||
    n.includes('stool')
  ) {
    return 'wood'
  }
  if (
    n.includes('steel') ||
    n.includes('foot') ||
    n.includes('connection') ||
    n.includes('module-xyz') ||
    n.includes('module-connector')
  ) {
    return 'steel'
  }

  const std = material as THREE.MeshStandardMaterial
  if (std.isMeshStandardMaterial && std.metalness >= 0.45) return 'steel'
  if (std.isMeshStandardMaterial && std.metalness <= 0.15) return 'wood'
  return 'other'
}

function triangleCountOf(geometry: THREE.BufferGeometry): number {
  if (geometry.index) return Math.floor(geometry.index.count / 3)
  const pos = geometry.getAttribute('position')
  return pos ? Math.floor(pos.count / 3) : 0
}

/** Pull tightly packed xyz — safe for InterleavedBufferAttribute / Draco. */
function extractPositions(geometry: THREE.BufferGeometry): Float32Array {
  const pos = geometry.getAttribute('position')
  if (!pos || pos.count <= 0) return new Float32Array(0)
  const out = new Float32Array(pos.count * 3)
  for (let i = 0; i < pos.count; i++) {
    out[i * 3] = pos.getX(i)
    out[i * 3 + 1] = pos.getY(i)
    out[i * 3 + 2] = pos.getZ(i)
  }
  return out
}

/** Triangle list indices only (length always divisible by 3). */
function extractIndices(geometry: THREE.BufferGeometry): Uint32Array {
  const pos = geometry.getAttribute('position')
  if (!pos || pos.count <= 0) return new Uint32Array(0)

  const rangeStart = geometry.drawRange.start || 0
  const rangeCount =
    geometry.drawRange.count === Infinity || geometry.drawRange.count < 0
      ? Number.POSITIVE_INFINITY
      : geometry.drawRange.count

  if (geometry.index) {
    const available = Math.max(0, geometry.index.count - rangeStart)
    const count = Math.min(available, rangeCount)
    const triVerts = Math.floor(count / 3) * 3
    const out = new Uint32Array(triVerts)
    for (let i = 0; i < triVerts; i++) {
      out[i] = geometry.index.getX(rangeStart + i)
    }
    return out
  }

  const available = Math.max(0, pos.count - rangeStart)
  const count = Math.min(available, rangeCount)
  const triVerts = Math.floor(count / 3) * 3
  const out = new Uint32Array(triVerts)
  for (let i = 0; i < triVerts; i++) out[i] = rangeStart + i
  return out
}

/** Clone into a non-interleaved, position-only geometry for safe simplify/merge. */
function toCleanGeometry(source: THREE.BufferGeometry): THREE.BufferGeometry {
  const positions = extractPositions(source)
  const indices = extractIndices(source)
  const geometry = new THREE.BufferGeometry()
  if (positions.length === 0 || indices.length < 3) return geometry
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setIndex(new THREE.BufferAttribute(indices, 1))
  return geometry
}

function weldPositions(
  positions: Float32Array,
  indices: Uint32Array,
): { positions: Float32Array; indices: Uint32Array } {
  if (positions.length < 9 || indices.length < 3) {
    return { positions, indices }
  }

  const posRemap = MeshoptSimplifier.generatePositionRemap(positions, 3)
  const weldedIndices = new Uint32Array(indices.length)
  for (let i = 0; i < indices.length; i++) {
    weldedIndices[i] = posRemap[indices[i]]
  }

  const [vertexRemap, uniqueVertexCount] =
    MeshoptSimplifier.compactMesh(weldedIndices)
  const densePositions = new Float32Array(uniqueVertexCount * 3)
  for (let i = 0; i < positions.length / 3; i++) {
    const dst = vertexRemap[i]
    if (dst === MISSING) continue
    densePositions[dst * 3] = positions[i * 3]
    densePositions[dst * 3 + 1] = positions[i * 3 + 1]
    densePositions[dst * 3 + 2] = positions[i * 3 + 2]
  }
  return { positions: densePositions, indices: weldedIndices }
}

function finishGeometry(
  positions: Float32Array,
  indices: Uint32Array,
): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry()
  if (positions.length >= 9 && indices.length >= 3) {
    out.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    out.setIndex(new THREE.BufferAttribute(indices, 1))
    out.computeVertexNormals()
  }
  return out
}

/**
 * Weld coincident verts, then decimate toward targetTris.
 * Falls back to sloppy simplify / original mesh if meshopt asserts.
 */
function simplifyGeometry(
  geometry: THREE.BufferGeometry,
  targetTris: number,
): THREE.BufferGeometry {
  const current = triangleCountOf(geometry)
  if (current <= 0) return geometry

  if (current <= targetTris) {
    if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
    return geometry
  }

  try {
    const welded = weldPositions(extractPositions(geometry), extractIndices(geometry))
    const positions = welded.positions
    const indices = welded.indices

    if (indices.length < 3 || positions.length < 9) {
      if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
      return geometry
    }

    // meshopt asserts: 0 <= target <= indices.length and target % 3 === 0
    let targetIndices = Math.min(indices.length, Math.max(3, Math.floor(targetTris) * 3))
    targetIndices -= targetIndices % 3
    if (targetIndices < 3) {
      if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
      return geometry
    }

    // Prefer topology-preserving simplify (keeps frame tubes sharper).
    let [dstIndices] = MeshoptSimplifier.simplify(
      indices,
      positions,
      3,
      targetIndices,
      0.005,
      ['Prune'],
    )

    // Only use sloppy as a last resort — it blurs structural detail.
    if (dstIndices.length > targetIndices * 1.8) {
      ;[dstIndices] = MeshoptSimplifier.simplifySloppy(
        indices,
        positions,
        3,
        null,
        targetIndices,
        0.05,
      )
    }

    if (dstIndices.length < 3 || dstIndices.length % 3 !== 0) {
      if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
      return geometry
    }

    const [finalRemap, finalUnique] = MeshoptSimplifier.compactMesh(dstIndices)
    const finalPositions = new Float32Array(finalUnique * 3)
    for (let i = 0; i < positions.length / 3; i++) {
      const dst = finalRemap[i]
      if (dst === MISSING) continue
      finalPositions[dst * 3] = positions[i * 3]
      finalPositions[dst * 3 + 1] = positions[i * 3 + 1]
      finalPositions[dst * 3 + 2] = positions[i * 3 + 2]
    }

    geometry.dispose()
    return finishGeometry(finalPositions, dstIndices)
  } catch (error) {
    console.warn('AR simplify skipped for a mesh:', error)
    if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
    return geometry
  }
}

function budgetForBuckets(present: ArBucket[]): Record<ArBucket, number> {
  const weights: Record<ArBucket, number> = {
    steel: 0.82,
    wood: 0.14,
    other: 0.04,
  }
  let weightSum = 0
  for (const b of present) weightSum += weights[b]
  const out: Record<ArBucket, number> = { steel: 0, wood: 0, other: 0 }
  for (const b of present) {
    out[b] = Math.max(
      500,
      Math.floor((AR_TARGET_TRIANGLES * weights[b]) / weightSum),
    )
  }
  return out
}

interface ArInstance {
  bucket: ArBucket
  geometryUuid: string
  matrixWorld: THREE.Matrix4
}

/**
 * Build a Quick Look–safe AR scene: simplify shared sources once, instance,
 * merge by material, flat colors. Does not mutate the live viewport.
 */
export async function buildArExportScene(primitivesRoot: THREE.Object3D): Promise<{
  root: THREE.Group
  meshCount: number
  triangleCount: number
  ownedGeometries: THREE.BufferGeometry[]
}> {
  await MeshoptSimplifier.ready

  const instances: ArInstance[] = []
  const sourceByUuid = new Map<string, THREE.BufferGeometry>()

  primitivesRoot.updateMatrixWorld(true)

  primitivesRoot.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !child.geometry) return
    if (!child.visible) return
    if (shouldSkipForAr(child)) return

    let parent: THREE.Object3D | null = child.parent
    while (parent && parent !== primitivesRoot) {
      if (shouldSkipForAr(parent)) return
      parent = parent.parent
    }

    const material = Array.isArray(child.material)
      ? child.material[0]
      : child.material
    if (!material) return

    const uuid = child.geometry.uuid
    if (!sourceByUuid.has(uuid)) {
      sourceByUuid.set(uuid, child.geometry)
    }

    child.updateWorldMatrix(true, false)
    instances.push({
      bucket: classifyMesh(child, material),
      geometryUuid: uuid,
      matrixWorld: child.matrixWorld.clone(),
    })
  })

  const simplifiedSources = new Map<string, THREE.BufferGeometry>()
  for (const [uuid, source] of sourceByUuid) {
    const local = toCleanGeometry(source)
    if (triangleCountOf(local) <= 0) {
      local.dispose()
      continue
    }
    simplifiedSources.set(uuid, simplifyGeometry(local, AR_SOURCE_TRIANGLES))
  }

  const buckets: Record<ArBucket, THREE.BufferGeometry[]> = {
    steel: [],
    wood: [],
    other: [],
  }

  for (const instance of instances) {
    const simplified = simplifiedSources.get(instance.geometryUuid)
    if (!simplified) continue
    const baked = simplified.clone()
    baked.applyMatrix4(instance.matrixWorld)
    baked.deleteAttribute('normal')
    buckets[instance.bucket].push(baked)
  }

  for (const geom of simplifiedSources.values()) geom.dispose()

  const present = (Object.keys(buckets) as ArBucket[]).filter(
    (b) => buckets[b].length > 0,
  )
  const budgets = budgetForBuckets(present)

  const root = new THREE.Group()
  root.name = 'Pavilion_AR'
  const ownedGeometries: THREE.BufferGeometry[] = []
  let meshCount = 0
  let triangleCount = 0

  for (const bucket of present) {
    const parts = buckets[bucket]
    const merged =
      parts.length === 1 ? parts[0] : mergeGeometries(parts, false)
    for (const part of parts) {
      if (merged && part !== merged) part.dispose()
    }
    if (!merged || triangleCountOf(merged) <= 0) {
      merged?.dispose()
      continue
    }

    const simplified = simplifyGeometry(merged, budgets[bucket])
    ownedGeometries.push(simplified)

    const tris = triangleCountOf(simplified)
    if (tris <= 0) continue

    const mesh = new THREE.Mesh(simplified, AR_MATERIALS[bucket])
    mesh.name = `AR_${bucket}`
    mesh.castShadow = false
    mesh.receiveShadow = false
    root.add(mesh)
    meshCount += 1
    triangleCount += tris
  }

  root.scale.setScalar(FT_TO_M)
  root.updateMatrixWorld(true)

  const box = new THREE.Box3().setFromObject(root)
  if (!box.isEmpty()) {
    const center = box.getCenter(new THREE.Vector3())
    root.position.x -= center.x
    root.position.z -= center.z
    root.position.y -= box.min.y
    root.updateMatrixWorld(true)
  }

  return { root, meshCount, triangleCount, ownedGeometries }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  URL.revokeObjectURL(url)
}

/**
 * Export a Quick Look–optimized USDZ for iPhone AR (Files → Quick Look).
 * Geometry is merged + decimated; textures omitted for reliability/size.
 * Blender GLB export is unchanged.
 */
export async function exportDesignUsdz(
  primitivesRoot: THREE.Object3D,
  primitives: PlacedPrimitive[],
): Promise<DesignUsdzExportResult> {
  if (primitives.length === 0) {
    throw new Error('Place at least one module or panel before exporting AR.')
  }

  const { root, meshCount, triangleCount, ownedGeometries } =
    await buildArExportScene(primitivesRoot)
  if (meshCount === 0) {
    throw new Error('Nothing to export yet — wait for models to finish loading.')
  }

  const exporter = new USDZExporter()
  const bytes = await exporter.parseAsync(root, {
    quickLookCompatible: true,
    maxTextureSize: 256,
    includeAnchoringProperties: true,
    ar: {
      anchoring: { type: 'plane' },
      planeAnchoring: { alignment: 'horizontal' },
    },
  })

  for (const geometry of ownedGeometries) geometry.dispose()

  const stamp = new Date().toISOString().slice(0, 10)
  const filename = `pavilion-ar-${stamp}.usdz`
  const blob = new Blob([bytes], { type: 'model/vnd.usdz+zip' })
  downloadBlob(blob, filename)

  return {
    blob,
    filename,
    meshCount,
    byteSize: bytes.byteLength,
    triangleCount,
  }
}
