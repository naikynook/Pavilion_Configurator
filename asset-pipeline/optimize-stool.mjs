/**
 * Convert Downloads/Stool.obj → public/3d-models/stool-opt.glb
 *
 * 18×18×19″ stool. Inches → feet. Local: centered XZ, bottom at y=0.
 * Merge meshes, strip Rhino curves, Draco-compress.
 */
import {
  createReadStream,
  createWriteStream,
  mkdirSync,
  readFileSync,
  writeFileSync,
  copyFileSync,
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

const inputPath =
  process.argv[2] ||
  path.join(process.env.USERPROFILE || '', 'Downloads', 'Stool.obj')
const cleanPath = path.join(cacheDir, 'stool-clean.obj')
const outputPath = path.join(root, 'public/3d-models/stool-opt.glb')

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

function compressGlb(filePath) {
  // Prefer Meshopt (available as a dependency); fall back to Draco CLI if present.
  const script = `
    import { readFileSync, writeFileSync } from 'fs'
    import { NodeIO } from '@gltf-transform/core'
    import { EXTMeshoptCompression } from '@gltf-transform/extensions'
    import { dedup, meshopt, prune, weld } from '@gltf-transform/functions'
    import { MeshoptEncoder } from 'meshoptimizer'
    await MeshoptEncoder.ready
    const io = new NodeIO()
      .registerExtensions([EXTMeshoptCompression])
      .registerDependencies({ 'meshopt.encoder': MeshoptEncoder })
    const doc = await io.read(process.argv[1])
    await doc.transform(dedup(), weld(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }), prune())
    const out = await io.writeBinary(doc)
    writeFileSync(process.argv[1], out)
    console.log('Meshopt', (out.byteLength / 1024).toFixed(0), 'KB')
  `
  let res = spawnSync(process.execPath, ['--input-type=module', '-e', script, filePath], {
    cwd: root,
    stdio: 'inherit',
  })
  if (res.status === 0) return true
  res = spawnSync(
    'npx',
    ['--yes', '@gltf-transform/cli@4.1.1', 'draco', filePath, filePath],
    { cwd: root, stdio: 'inherit', env: process.env },
  )
  return res.status === 0
}

console.log('Input', inputPath)
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
console.log('source meshes', geoms.length)

let merged = mergeGeometries(geoms, false)
geoms.forEach((g) => g.dispose())
if (!merged) {
  console.error('Merge failed')
  process.exit(1)
}

// Inches → feet
merged.scale(1 / 12, 1 / 12, 1 / 12)
merged.computeBoundingBox()
const box = merged.boundingBox
const size = new THREE.Vector3()
box.getSize(size)
console.log(
  'size ft',
  size.toArray().map((n) => +n.toFixed(4)),
  `→ ${(size.x * 12).toFixed(2)}×${(size.z * 12).toFixed(2)}×${(size.y * 12).toFixed(2)} in (W×D×H)`,
)

// Center XZ, sit on y=0
merged.translate(
  -(box.min.x + box.max.x) / 2,
  -box.min.y,
  -(box.min.z + box.max.z) / 2,
)
merged.computeBoundingBox()
merged.computeVertexNormals()

const mat = new THREE.MeshStandardMaterial({
  color: 0xe8dcc8,
  roughness: 0.88,
  metalness: 0.02,
})
const mesh = new THREE.Mesh(merged, mat)
mesh.name = 'stool'

const group = new THREE.Group()
group.name = 'stool-18'
group.add(mesh)
group.userData.stoolNativeSizeFt = [size.x, size.y, size.z]

mkdirSync(path.dirname(outputPath), { recursive: true })
const bytes = await exportGlb(group, outputPath)
console.log(`Wrote ${(bytes / 1024).toFixed(0)} KB → ${outputPath}`)
if (!compressGlb(outputPath)) {
  console.warn('Compress skipped / failed')
} else {
  const final = readFileSync(outputPath)
  console.log(`Compressed OK → ${(final.length / 1024).toFixed(0)} KB`)
}

// Keep a copy of the cut-file reference if present (optional)
const cutSrc = path.join(path.dirname(inputPath), 'Stool Cut File.dwg')
const cutDst = path.join(root, 'public/cut-files/Stool-Cut-File.dwg')
try {
  copyFileSync(cutSrc, cutDst)
  console.log('Copied cut file →', cutDst)
} catch {
  /* optional */
}
