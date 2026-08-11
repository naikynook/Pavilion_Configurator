/**
 * Convert hand-modeled pavilion OBJs (with connections) → optimized steel GLBs.
 *
 * - Strips Rhino curve leftovers that break OBJLoader
 * - Drops the plywood plinth (website uses procedural tiled 4×4 bases)
 * - Keeps steel frame + foot mounts + XYZ joints
 * - Draco-compresses for the web
 *
 * Usage:
 *   node --max-old-space-size=8192 asset-pipeline/optimize-connected-modules.mjs
 *   node --max-old-space-size=8192 asset-pipeline/optimize-connected-modules.mjs 4x4
 *   node --max-old-space-size=8192 asset-pipeline/optimize-connected-modules.mjs 4x8
 *   node --max-old-space-size=8192 asset-pipeline/optimize-connected-modules.mjs 8x8
 */
import {
  createReadStream,
  createWriteStream,
  existsSync,
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

const JOBS = {
  '4x4': {
    src: 'c:/Users/codyn/Downloads/4x4withconnections.obj',
    out: path.join(root, 'public/3d-models/4x4-opt.glb'),
    targetFootprint: [4, 4],
  },
  '4x8': {
    src: 'c:/Users/codyn/Downloads/4x8 connections.obj',
    out: path.join(root, 'public/3d-models/4x8-opt.glb'),
    targetFootprint: [4, 8],
  },
  '8x8': {
    src: 'c:/Users/codyn/Downloads/8x8.obj',
    out: path.join(root, 'public/3d-models/8x8-opt.glb'),
    targetFootprint: [8, 8],
  },
}

async function stripRhinoCurves(srcPath, dstPath) {
  if (existsSync(dstPath)) {
    console.log('  clean cache hit', path.basename(dstPath))
    return dstPath
  }
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
  return dstPath
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

function splitByHeight(geometry, baseTop) {
  geometry = geometry.index ? geometry.toNonIndexed() : geometry
  const pos = geometry.getAttribute('position')
  const baseFlat = []
  const steelFlat = []
  for (let i = 0; i < pos.count; i += 3) {
    const ax = pos.getX(i),
      ay = pos.getY(i),
      az = pos.getZ(i)
    const bx = pos.getX(i + 1),
      by = pos.getY(i + 1),
      bz = pos.getZ(i + 1)
    const cx = pos.getX(i + 2),
      cy = pos.getY(i + 2),
      cz = pos.getZ(i + 2)
    const my = (ay + by + cy) / 3
    const dest = my <= baseTop ? baseFlat : steelFlat
    dest.push(ax, ay, az, bx, by, bz, cx, cy, cz)
  }
  const make = (flat) => {
    if (!flat.length) return null
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(flat, 3))
    g.computeVertexNormals()
    return g
  }
  return { base: make(baseFlat), steel: make(steelFlat) }
}

/**
 * Remove mis-split plywood deck (often many small tris) while keeping corner
 * foot plates + lag screws.
 */
function stripFloatingDeckLid(geometry) {
  geometry = geometry.index ? geometry.toNonIndexed() : geometry
  geometry.computeBoundingBox()
  const box = geometry.boundingBox
  const minY = box.min.y
  const height = box.max.y - minY
  const lidBand = minY + Math.min(height * 0.1, 0.55)
  const halfW = Math.max(Math.abs(box.min.x), Math.abs(box.max.x))
  const halfD = Math.max(Math.abs(box.min.z), Math.abs(box.max.z))
  const cornerR = Math.min(halfW, halfD) * 0.42

  const nearCorner = (x, z) => {
    const cx = x < 0 ? -halfW * 0.88 : halfW * 0.88
    const cz = z < 0 ? -halfD * 0.88 : halfD * 0.88
    return Math.hypot(x - cx, z - cz) < cornerR
  }

  const pos = geometry.getAttribute('position')
  const kept = []
  let dropped = 0
  for (let i = 0; i < pos.count; i += 3) {
    const ax = pos.getX(i),
      ay = pos.getY(i),
      az = pos.getZ(i)
    const bx = pos.getX(i + 1),
      by = pos.getY(i + 1),
      bz = pos.getZ(i + 1)
    const cx = pos.getX(i + 2),
      cy = pos.getY(i + 2),
      cz = pos.getZ(i + 2)
    const mx = (ax + bx + cx) / 3
    const my = (ay + by + cy) / 3
    const mz = (az + bz + cz) / 3
    const abx = bx - ax,
      aby = by - ay,
      abz = bz - az
    const acx = cx - ax,
      acy = cy - ay,
      acz = cz - az
    const nx = aby * acz - abz * acy
    const ny = abz * acx - abx * acz
    const nz = abx * acy - aby * acx
    const nlen = Math.hypot(nx, ny, nz) || 1
    const horizontal = Math.abs(ny / nlen) > 0.72

    // Floating plywood lid: horizontal faces in the bottom band away from corners
    if (my <= lidBand && horizontal && !nearCorner(mx, mz)) {
      dropped++
      continue
    }
    kept.push(ax, ay, az, bx, by, bz, cx, cy, cz)
  }
  console.log('  deck-lid tris dropped', dropped)
  if (!kept.length) return geometry
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(kept, 3))
  g.computeVertexNormals()
  geometry.dispose()
  return g
}

/**
 * Translate so corner foot-plate bottoms sit at y=0. Lag screws may extend
 * slightly below (into the plywood) — that matches the real assembly.
 */
function sitSteelOnFootPlates(geometry) {
  geometry.computeBoundingBox()
  const box = geometry.boundingBox
  const minY = box.min.y
  const height = box.max.y - minY
  const bandTop = minY + Math.min(height * 0.12, 0.7)
  const halfW = Math.max(Math.abs(box.min.x), Math.abs(box.max.x))
  const halfD = Math.max(Math.abs(box.min.z), Math.abs(box.max.z))
  const cornerR = Math.min(halfW, halfD) * 0.42

  const nearCorner = (x, z) => {
    const cx = x < 0 ? -halfW * 0.88 : halfW * 0.88
    const cz = z < 0 ? -halfD * 0.88 : halfD * 0.88
    return Math.hypot(x - cx, z - cz) < cornerR
  }

  const pos = geometry.index
    ? geometry.toNonIndexed().getAttribute('position')
    : geometry.getAttribute('position')

  let plateY = null
  let plateSamples = 0
  for (let i = 0; i < pos.count; i += 3) {
    const ax = pos.getX(i),
      ay = pos.getY(i),
      az = pos.getZ(i)
    const bx = pos.getX(i + 1),
      by = pos.getY(i + 1),
      bz = pos.getZ(i + 1)
    const cx = pos.getX(i + 2),
      cy = pos.getY(i + 2),
      cz = pos.getZ(i + 2)
    const mx = (ax + bx + cx) / 3
    const my = (ay + by + cy) / 3
    const mz = (az + bz + cz) / 3
    if (my > bandTop || !nearCorner(mx, mz)) continue

    const abx = bx - ax,
      aby = by - ay,
      abz = bz - az
    const acx = cx - ax,
      acy = cy - ay,
      acz = cz - az
    const nx = aby * acz - abz * acy
    const ny = abz * acx - abx * acz
    const nz = abx * acy - aby * acx
    const nlen = Math.hypot(nx, ny, nz) || 1
    if (Math.abs(ny / nlen) < 0.72) continue // need horizontal plate faces

    const faceMinY = Math.min(ay, by, cy)
    if (plateY == null || faceMinY < plateY) plateY = faceMinY
    plateSamples++
  }

  if (plateY == null || plateSamples < 4) {
    console.log('  foot-plate sit fallback → mesh minY')
    geometry.translate(0, -minY, 0)
  } else {
    console.log(
      '  foot-plate sit Y',
      +plateY.toFixed(3),
      `(${plateSamples} faces)`,
    )
    geometry.translate(0, -plateY, 0)
  }
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

function dracoCompress(filePath) {
  const cli = path.join(root, 'node_modules/@gltf-transform/cli/bin/cli.js')
  const res = spawnSync(
    process.execPath,
    [cli, 'optimize', filePath, filePath, '--compress', 'draco'],
    { cwd: root, stdio: 'inherit' },
  )
  return res.status === 0
}

async function loadObjStreaming(cleanPath) {
  console.log('  streaming OBJ parse…')
  const verts = []
  const faces = [] // flat i0,i1,i2 (0-based)
  const rl = readline.createInterface({
    input: createReadStream(cleanPath),
    crlfDelay: Infinity,
  })
  let lineNo = 0
  for await (const line of rl) {
    lineNo++
    if (lineNo % 2_000_000 === 0) console.log(`  …line ${lineNo}`)
    const t = line.trim()
    if (!t || t[0] === '#') continue
    if (t.startsWith('v ')) {
      const parts = t.split(/\s+/)
      verts.push(Number(parts[1]), Number(parts[2]), Number(parts[3]))
    } else if (t.startsWith('f ')) {
      const parts = t.split(/\s+/).slice(1)
      const idx = parts.map((p) => {
        const a = p.split('/')[0]
        const n = Number(a)
        return n < 0 ? verts.length / 3 + n : n - 1
      })
      // triangulate fan
      for (let i = 1; i + 1 < idx.length; i++) {
        faces.push(idx[0], idx[i], idx[i + 1])
      }
    }
  }
  console.log(`  verts ${verts.length / 3}, tris ${faces.length / 3}`)
  const pos = new Float32Array(faces.length * 3)
  for (let i = 0; i < faces.length; i++) {
    const vi = faces[i] * 3
    const o = i * 3
    pos[o] = verts[vi]
    pos[o + 1] = verts[vi + 1]
    pos[o + 2] = verts[vi + 2]
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.computeVertexNormals()
  return g
}

async function processJob(id) {
  const job = JOBS[id]
  if (!job) throw new Error(`Unknown job ${id}`)
  if (!existsSync(job.src)) throw new Error(`Missing source ${job.src}`)

  console.log(`\n=== ${id} ===`)
  console.log('source', job.src)

  const cleanPath = path.join(cacheDir, `${id}-clean.obj`)
  await stripRhinoCurves(job.src, cleanPath)

  const srcSize = (await import('fs')).statSync(cleanPath).size
  let merged
  if (srcSize > 450_000_000) {
    // Node string limit — stream parse large OBJs
    merged = await loadObjStreaming(cleanPath)
  } else {
    console.log('  loading OBJ…')
    const text = readFileSync(cleanPath, 'utf8')
    console.log(`  OBJ text ${(text.length / 1e6).toFixed(1)} MB`)
    const source = new OBJLoader().parse(text)
    source.updateMatrixWorld(true)

    const geoms = []
    source.traverse((child) => {
      if (!child.isMesh || !child.geometry) return
      const g = collectWorldGeometry(child)
      if (g) geoms.push(g)
    })
    console.log('  meshes collected', geoms.length)
    if (!geoms.length) throw new Error('No mesh geometry')

    merged = mergeGeometries(geoms, false)
    geoms.forEach((g) => g.dispose())
    if (!merged) throw new Error('Merge failed')
  }

  merged.computeBoundingBox()
  const box = merged.boundingBox
  const size = new THREE.Vector3()
  box.getSize(size)
  console.log(
    '  bbox size',
    size.toArray().map((n) => +n.toFixed(3)),
  )

  // Center XZ, sit on y=0
  const center = new THREE.Vector3()
  box.getCenter(center)
  merged.translate(-center.x, -box.min.y, -center.z)
  merged.computeBoundingBox()
  const b2 = merged.boundingBox
  const height = b2.max.y - b2.min.y

  // Keep mounting feet + lag screws with the steel. Only the lower plywood
  // *body* is discarded — plates sit on the lid (~1.0–1.3 ft) and must stay.
  const baseTop = b2.min.y + Math.min(height * 0.095, 0.92)
  console.log('  baseTop', +baseTop.toFixed(3), 'height', +height.toFixed(3))

  const { steel: steelRaw } = splitByHeight(merged, baseTop)
  merged.dispose()
  if (!steelRaw) throw new Error('No steel geometry after split')

  // Drop leftover plywood top slab that floated above the site base
  let steel = stripFloatingDeckLid(steelRaw)

  // Sit on the FOOT PLATES (not lag-screw tips below them), so the frame
  // rests on the plywood lid instead of floating on the screw length.
  steel = sitSteelOnFootPlates(steel)
  steel.computeBoundingBox()
  const ss = new THREE.Vector3()
  steel.boundingBox.getSize(ss)
  console.log(
    '  steel size',
    ss.toArray().map((n) => +n.toFixed(3)),
    'minY',
    +steel.boundingBox.min.y.toFixed(3),
  )

  // Optional gentle footprint normalize (keep aspect; only if wildly off)
  const [tw, td] = job.targetFootprint
  const sx = tw / Math.max(ss.x, 1e-6)
  const sz = td / Math.max(ss.z, 1e-6)
  // Only normalize if within ~15% of expected — avoid destroying units
  if (Math.abs(sx - 1) < 0.2 && Math.abs(sz - 1) < 0.2) {
    steel.scale(sx, 1, sz)
    steel = sitSteelOnFootPlates(steel)
    steel.computeBoundingBox()
  }

  const group = new THREE.Group()
  group.name = `optimized-${id}`
  const mesh = new THREE.Mesh(
    steel,
    new THREE.MeshStandardMaterial({
      color: 0x9aa0a8,
      roughness: 0.35,
      metalness: 0.95,
      name: 'steel',
    }),
  )
  mesh.name = 'module-steel'
  group.add(mesh)

  const bytes = await exportGlb(group, job.out)
  console.log(`  wrote ${(bytes / 1024).toFixed(0)} KB pre-draco`)
  if (!dracoCompress(job.out)) {
    console.warn('  Draco compress failed — keeping uncompressed')
  }
  console.log(
    `  final ${(readFileSync(job.out).length / 1024).toFixed(0)} KB → ${job.out}`,
  )
}

const arg = process.argv[2]
const ids = arg ? [arg] : Object.keys(JOBS)
for (const id of ids) {
  await processJob(id)
}
console.log('\nDone')
