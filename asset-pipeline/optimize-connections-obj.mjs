/**
 * Convert Rhino OBJ (with connections) → optimized GLB.
 *
 * Splits into:
 *   module-base, module-steel, module-foot (template), module-xyz (template)
 * so larger frames can reuse fixed-size connection hardware.
 *
 * Usage: node asset-pipeline/optimize-connections-obj.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

if (typeof globalThis.FileReader === 'undefined') {
  globalThis.FileReader = class FileReader {
    result = null
    onloadend = null
    onerror = null
    readAsArrayBuffer(blob) {
      Promise.resolve(blob.arrayBuffer())
        .then((buffer) => {
          this.result = buffer
          this.onloadend?.({ target: this })
        })
        .catch((error) => this.onerror?.(error))
    }
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const cleanObj = path.join(root, 'asset-pipeline/temp/4x4withconnections-clean.obj')
const rawObj = 'c:/Users/codyn/Downloads/4x4withconnections.obj'
const inputPath = existsSync(cleanObj) ? cleanObj : rawObj
const outFull = path.join(root, 'asset-pipeline/temp/4x4-connections-opt.glb')
const outFoot = path.join(root, 'public/3d-models/connection-foot-opt.glb')
const outXyz = path.join(root, 'public/3d-models/connection-xyz-opt.glb')

function collectWorldGeometry(mesh) {
  const geometry = mesh.geometry.clone()
  mesh.updateWorldMatrix(true, false)
  geometry.applyMatrix4(mesh.matrixWorld)
  if (!geometry.getAttribute('position')) return null
  if (!geometry.getAttribute('normal')) geometry.computeVertexNormals()
  for (const key of Object.keys(geometry.attributes)) {
    if (key !== 'position' && key !== 'normal') geometry.deleteAttribute(key)
  }
  geometry.morphAttributes = {}
  if (geometry.index) {
    // keep index
  } else {
    // non-indexed — fine for merge
  }
  return geometry
}

/** Split one BufferGeometry into pieces by classifying each triangle. */
function splitGeometryByClassifier(geometry, classify) {
  geometry = geometry.index ? geometry.toNonIndexed() : geometry
  const pos = geometry.getAttribute('position')
  const buckets = new Map()

  const ensure = (key) => {
    if (!buckets.has(key)) buckets.set(key, [])
    return buckets.get(key)
  }

  for (let i = 0; i < pos.count; i += 3) {
    const ax = pos.getX(i), ay = pos.getY(i), az = pos.getZ(i)
    const bx = pos.getX(i + 1), by = pos.getY(i + 1), bz = pos.getZ(i + 1)
    const cx = pos.getX(i + 2), cy = pos.getY(i + 2), cz = pos.getZ(i + 2)
    const mx = (ax + bx + cx) / 3
    const my = (ay + by + cy) / 3
    const mz = (az + bz + cz) / 3
    const key = classify(mx, my, mz)
    const arr = ensure(key)
    arr.push(ax, ay, az, bx, by, bz, cx, cy, cz)
  }

  const result = new Map()
  for (const [key, flat] of buckets) {
    if (!flat.length) continue
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(flat, 3))
    g.computeVertexNormals()
    result.set(key, g)
  }
  return result
}

function makeMetalMesh(geometry, name) {
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: 0x9aa0a8,
      roughness: 0.35,
      metalness: 0.95,
      name: 'steel',
    }),
  )
  mesh.name = name
  return mesh
}

function makePlywoodMesh(geometry, name) {
  const mesh = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: 0xc9a36a,
      roughness: 0.85,
      metalness: 0.02,
      name: 'plywood',
    }),
  )
  mesh.name = name
  return mesh
}

async function exportGlb(object, filePath) {
  const exporter = new GLTFExporter()
  const result = await exporter.parseAsync(object, {
    binary: true,
    onlyVisible: true,
  })
  const out =
    result instanceof ArrayBuffer ? Buffer.from(result) : Buffer.from(JSON.stringify(result))
  writeFileSync(filePath, out)
  return out.length
}

function dracoCompress(filePath) {
  const localCli = path.join(root, 'node_modules/@gltf-transform/cli/bin/cli.js')
  let res = spawnSync(
    process.execPath,
    [localCli, 'optimize', filePath, filePath, '--compress', 'draco'],
    { cwd: root, stdio: 'inherit' },
  )
  if (res.status !== 0) {
    res = spawnSync(
      'npx',
      ['--yes', '@gltf-transform/cli@4.1.1', 'optimize', filePath, filePath, '--compress', 'draco'],
      { cwd: root, stdio: 'inherit', env: process.env },
    )
  }
  return res.status === 0
}

console.log('Loading', inputPath)
const text = readFileSync(inputPath, 'utf8')
console.log(`OBJ text ${(text.length / 1e6).toFixed(1)} MB`)
const source = new OBJLoader().parse(text)
source.updateMatrixWorld(true)

const geoms = []
source.traverse((child) => {
  if (!child.isMesh || !child.geometry) return
  const g = collectWorldGeometry(child)
  if (g) geoms.push(g)
})
console.log('Source meshes collected:', geoms.length)
if (!geoms.length) {
  console.error('No mesh geometry found in OBJ')
  process.exit(1)
}

const merged = mergeGeometries(geoms, false)
geoms.forEach((g) => g.dispose())
if (!merged) {
  console.error('Merge failed')
  process.exit(1)
}

merged.computeBoundingBox()
const box = merged.boundingBox
const size = new THREE.Vector3()
box.getSize(size)
console.log('bbox min', box.min.toArray().map((n) => +n.toFixed(3)))
console.log('bbox max', box.max.toArray().map((n) => +n.toFixed(3)))
console.log('bbox size', size.toArray().map((n) => +n.toFixed(3)))

// Center XZ on origin, sit bottom on y=0
const center = new THREE.Vector3()
box.getCenter(center)
merged.translate(-center.x, -box.min.y, -center.z)
merged.computeBoundingBox()
const b2 = merged.boundingBox
const size2 = new THREE.Vector3()
b2.getSize(size2)
const minY = b2.min.y
const maxY = b2.max.y
const height = maxY - minY
const baseTop = minY + Math.min(height * 0.14, 3.2) // plywood plinth band
const footTop = baseTop + 0.85 // mounting foot sleeve height band
const topBand = maxY - 1.1 // XYZ joint near top

const halfW = Math.max(Math.abs(b2.min.x), Math.abs(b2.max.x))
const halfD = Math.max(Math.abs(b2.min.z), Math.abs(b2.max.z))
const cornerR = Math.min(halfW, halfD) * 0.45 // near-corner radius for hardware

function nearestCorner(x, z) {
  const cx = x < 0 ? -1 : 1
  const cz = z < 0 ? -1 : 1
  const ox = cx * halfW
  const oz = cz * halfD
  const dist = Math.hypot(x - ox * 0.85, z - oz * 0.85)
  return { cx, cz, dist, key: `${cx},${cz}` }
}

const parts = splitGeometryByClassifier(merged, (x, y, z) => {
  if (y <= baseTop + 0.02) return 'base'
  const { dist, key } = nearestCorner(x, z)
  const nearCorner = dist < cornerR
  if (nearCorner && y <= footTop) return `foot:${key}`
  if (nearCorner && y >= topBand) return `xyz:${key}`
  return 'steel'
})

merged.dispose()

const footGeoms = []
const xyzGeoms = []
const steelGeoms = []
let baseGeom = null

for (const [key, g] of parts) {
  if (key === 'base') baseGeom = g
  else if (key === 'steel') steelGeoms.push(g)
  else if (key.startsWith('foot:')) footGeoms.push(g)
  else if (key.startsWith('xyz:')) xyzGeoms.push(g)
}

console.log(
  'split:',
  'base',
  !!baseGeom,
  'steel',
  steelGeoms.length,
  'foot',
  footGeoms.length,
  'xyz',
  xyzGeoms.length,
)

// Full 4×4 module (base + steel + all hardware)
const full = new THREE.Group()
full.name = 'optimized-4x4-connections'
if (baseGeom) full.add(makePlywoodMesh(baseGeom, 'module-base'))
const steelAll = [...steelGeoms, ...footGeoms, ...xyzGeoms]
if (steelAll.length) {
  const s = mergeGeometries(steelAll, false)
  steelAll.forEach((g) => {
    if (g !== s) g.dispose()
  })
  if (s) full.add(makeMetalMesh(s, 'module-steel'))
}

// Foot template: merge one corner's foot, recenter to local origin at corner post
function extractCornerTemplate(geoms, namePrefix) {
  if (!geoms.length) return null
  // Use the SW-ish corner (cx=-1,cz=-1) if present, else first
  let chosen = geoms[0]
  for (const g of geoms) {
    g.computeBoundingBox()
  }
  geoms.sort((a, b) => {
    const ca = a.boundingBox.getCenter(new THREE.Vector3())
    const cb = b.boundingBox.getCenter(new THREE.Vector3())
    return ca.x + ca.z - (cb.x + cb.z)
  })
  chosen = geoms[0]
  const mergedOne = chosen.clone()
  mergedOne.computeBoundingBox()
  const c = mergedOne.boundingBox.getCenter(new THREE.Vector3())
  // Keep y relative to bottom of this piece sitting on y=0 of piece local
  const minY = mergedOne.boundingBox.min.y
  mergedOne.translate(-c.x, -minY, -c.z)
  const group = new THREE.Group()
  group.name = namePrefix
  group.add(makeMetalMesh(mergedOne, namePrefix))
  return group
}

const footTemplate = extractCornerTemplate(footGeoms, 'module-foot')
const xyzTemplate = extractCornerTemplate(xyzGeoms, 'module-xyz')

const fullBytes = await exportGlb(full, outFull)
console.log(`Wrote ${outFull} (${(fullBytes / 1024).toFixed(0)} KB pre-draco)`)
dracoCompress(outFull)
console.log(`Final ${(readFileSync(outFull).length / 1024).toFixed(0)} KB`)

if (footTemplate) {
  const n = await exportGlb(footTemplate, outFoot)
  console.log(`Wrote foot template ${(n / 1024).toFixed(0)} KB`)
  dracoCompress(outFoot)
}
if (xyzTemplate) {
  const n = await exportGlb(xyzTemplate, outXyz)
  console.log(`Wrote xyz template ${(n / 1024).toFixed(0)} KB`)
  dracoCompress(outXyz)
}

console.log('Done')
