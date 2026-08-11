/**
 * Convert Downloads/Wall Panel 8x8.obj → public/3d-models/wall-panel-8x8-opt.glb
 *
 * Preserves the authored two plywood sheets (lower + upper, seam at mid-height).
 * Inches → feet. Local: centered X, bottom at y=0, back at z=0, +Z outward
 * (into the bay when mounted against the inner face of the steel).
 */
import {
  createReadStream,
  createWriteStream,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs'
import path from 'path'
import readline from 'readline'
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
const cacheDir = path.join(root, 'asset-pipeline/temp')
mkdirSync(cacheDir, { recursive: true })

const inputPath = path.join(
  process.env.USERPROFILE || '',
  'Downloads',
  'Wall Panel 8x8.obj',
)
const cleanPath = path.join(cacheDir, 'wall-panel-8x8-clean.obj')
const outputPath = path.join(root, 'public/3d-models/wall-panel-8x8-opt.glb')

/** Seam between the two authored sheets (inches, from OBJ). */
const SEAM_Y_IN = 44.875
/** Visible kerf between the two plywood sheets (inches). */
const SEAM_GAP_IN = 0.1

async function stripRhinoCurves(srcPath, dstPath) {
  console.log('  stripping Rhino curves…')
  const rl = readline.createInterface({
    input: createReadStream(srcPath),
    crlfDelay: Infinity,
  })
  const out = createWriteStream(dstPath)
  const skipPrefixes = [
    'cstype',
    'deg ',
    'curv ',
    'parm ',
    'end',
    'surf ',
    'trim ',
    'hole ',
    'scrv ',
    'sp ',
  ]
  let kept = 0
  let skipped = 0
  for await (const line of rl) {
    const t = line.trimStart()
    if (skipPrefixes.some((p) => t.startsWith(p))) {
      skipped++
      continue
    }
    out.write(`${line}\n`)
    kept++
  }
  await new Promise((resolve) => out.end(resolve))
  console.log(`  kept ${kept} lines, skipped ${skipped}`)
}

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
  return geometry
}

/** Split one indexed/non-indexed mesh into lower / upper sheet by face centroid Y. */
function splitBySeamY(geometry, seamY) {
  const pos = geometry.getAttribute('position')
  const index = geometry.index
  const lower = []
  const upper = []
  const triCount = index ? index.count / 3 : pos.count / 3

  const read = (i, target) => {
    target.fromBufferAttribute(pos, i)
  }
  const a = new THREE.Vector3()
  const b = new THREE.Vector3()
  const c = new THREE.Vector3()

  for (let t = 0; t < triCount; t++) {
    const i0 = index ? index.getX(t * 3) : t * 3
    const i1 = index ? index.getX(t * 3 + 1) : t * 3 + 1
    const i2 = index ? index.getX(t * 3 + 2) : t * 3 + 2
    read(i0, a)
    read(i1, b)
    read(i2, c)
    const cy = (a.y + b.y + c.y) / 3
    const dest = cy < seamY - 1e-6 ? lower : upper
    dest.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z)
  }

  const toGeom = (flat) => {
    if (!flat.length) return null
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(flat, 3))
    g.computeVertexNormals()
    return g
  }

  return { lower: toGeom(lower), upper: toGeom(upper) }
}

async function exportGlb(object, filePath) {
  const exporter = new GLTFExporter()
  const result = await exporter.parseAsync(object, {
    binary: true,
    onlyVisible: true,
  })
  const out =
    result instanceof ArrayBuffer
      ? Buffer.from(result)
      : Buffer.from(JSON.stringify(result))
  writeFileSync(filePath, out)
  return out.length
}

function dracoCompress(filePath) {
  // Use `draco` only — `optimize` runs join/flatten and would merge the two sheets.
  const localCli = path.join(root, 'node_modules/@gltf-transform/cli/bin/cli.js')
  let res = spawnSync(
    process.execPath,
    [localCli, 'draco', filePath, filePath],
    { cwd: root, stdio: 'inherit' },
  )
  if (res.status !== 0) {
    res = spawnSync(
      'npx',
      ['--yes', '@gltf-transform/cli@4.1.1', 'draco', filePath, filePath],
      { cwd: root, stdio: 'inherit', env: process.env },
    )
  }
  return res.status === 0
}

await stripRhinoCurves(inputPath, cleanPath)
console.log('Loading cleaned OBJ…')
const text = readFileSync(cleanPath, 'utf8')
const source = new OBJLoader().parse(text)
source.updateMatrixWorld(true)

const geoms = []
source.traverse((child) => {
  if (!child.isMesh || !child.geometry) return
  const g = collectWorldGeometry(child)
  if (g) geoms.push(g)
})
if (!geoms.length) {
  console.error('No mesh geometry found')
  process.exit(1)
}

let merged = mergeGeometries(geoms, false)
geoms.forEach((g) => g.dispose())
if (!merged) {
  console.error('Merge failed')
  process.exit(1)
}

const { lower, upper } = splitBySeamY(merged, SEAM_Y_IN)
merged.dispose()
if (!lower || !upper) {
  console.error('Failed to split into two sheets at seam', SEAM_Y_IN)
  process.exit(1)
}

const mat = () =>
  new THREE.MeshStandardMaterial({
    color: 0xf0e6d4,
    roughness: 0.88,
    metalness: 0.02,
  })

const group = new THREE.Group()
group.name = 'wall-panel-8x8'

for (const [geom, name] of [
  [lower, 'wall-panel-sheet-lower'],
  [upper, 'wall-panel-sheet-upper'],
]) {
  // Inches → feet
  geom.scale(1 / 12, 1 / 12, 1 / 12)
  geom.computeBoundingBox()
  const mesh = new THREE.Mesh(geom, mat())
  mesh.name = name
  group.add(mesh)
}

// Open a thin kerf between the two sheets (matches the visible joint in the OBJ)
const seamGapFt = SEAM_GAP_IN / 12
const lowerMesh = group.getObjectByName('wall-panel-sheet-lower')
const upperMesh = group.getObjectByName('wall-panel-sheet-upper')
if (lowerMesh?.geometry && upperMesh?.geometry) {
  lowerMesh.geometry.translate(0, -seamGapFt / 2, 0)
  upperMesh.geometry.translate(0, seamGapFt / 2, 0)
}

// Shared transform: center X on full assembly, sit on y=0, back at z=0
group.updateMatrixWorld(true)
const box = new THREE.Box3().setFromObject(group)
const size = new THREE.Vector3()
box.getSize(size)
console.log(
  'assembly size ft',
  size.toArray().map((n) => +n.toFixed(4)),
  `(${(size.y * 12).toFixed(2)}" tall)`,
)

for (const child of group.children) {
  if (!(child instanceof THREE.Mesh)) continue
  child.geometry.translate(
    -(box.min.x + box.max.x) / 2,
    -box.min.y,
    -box.min.z,
  )
  child.geometry.computeBoundingBox()
  child.geometry.computeVertexNormals()
}

group.updateMatrixWorld(true)
const finalBox = new THREE.Box3().setFromObject(group)
console.log(
  'final min',
  finalBox.min.toArray().map((n) => +n.toFixed(4)),
)
console.log(
  'final max',
  finalBox.max.toArray().map((n) => +n.toFixed(4)),
)
console.log('meshes', group.children.map((c) => c.name))

group.userData.panelNativeSizeFt = [size.x, size.y, size.z]
group.userData.panelPieces = 2

mkdirSync(path.dirname(outputPath), { recursive: true })
const bytes = await exportGlb(group, outputPath)
console.log(`Wrote ${(bytes / 1024).toFixed(0)} KB → ${outputPath}`)
if (!dracoCompress(outputPath)) {
  console.warn('Draco compress skipped / failed')
} else {
  console.log('Draco compress OK')
}
