/**
 * Bake a lightweight module GLB (merge meshes + Draco).
 *
 * Usage:
 *   npm run optimize:model
 *   npm run optimize:model -- 8x8
 *   npm run optimize:model -- 4x4
 */
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
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
const name = (process.argv[2] || '4x4').replace(/\.glb$/i, '')
const inputPath = path.join(root, `public/models/${name}.glb`)
const outputPath = path.join(root, `public/models/${name}-opt.glb`)

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

function optimizeModuleScene(source) {
  source.updateMatrixWorld(true)
  const fullBox = new THREE.Box3().setFromObject(source)
  const fullHeight = Math.max(fullBox.max.y - fullBox.min.y, 1e-6)
  const baseTop = fullBox.min.y + fullHeight * 0.12

  const baseGeoms = []
  const steelGeoms = []
  let meshCount = 0

  source.traverse((child) => {
    if (!child.isMesh || !child.geometry) return
    meshCount++
    const meshBox = new THREE.Box3().setFromObject(child)
    const isBase =
      child.name === 'mesh_8' ||
      child.name === 'module-base' ||
      meshBox.max.y <= baseTop + fullHeight * 0.01
    const worldGeom = collectWorldGeometry(child)
    if (!worldGeom) return
    if (isBase) baseGeoms.push(worldGeom)
    else steelGeoms.push(worldGeom)
  })

  const group = new THREE.Group()
  group.name = `optimized-${name}-module`

  if (baseGeoms.length) {
    const merged = mergeGeometries(baseGeoms, false)
    baseGeoms.forEach((g) => g.dispose())
    if (merged) {
      const mesh = new THREE.Mesh(
        merged,
        new THREE.MeshStandardMaterial({
          color: 0xc9a36a,
          roughness: 0.85,
          metalness: 0.02,
          name: 'plywood',
        }),
      )
      mesh.name = 'module-base'
      group.add(mesh)
    }
  }

  if (steelGeoms.length) {
    const merged = mergeGeometries(steelGeoms, false)
    steelGeoms.forEach((g) => g.dispose())
    if (merged) {
      const mesh = new THREE.Mesh(
        merged,
        new THREE.MeshStandardMaterial({
          color: 0x9aa0a8,
          roughness: 0.35,
          metalness: 0.95,
          name: 'steel',
        }),
      )
      mesh.name = 'module-steel'
      group.add(mesh)
    }
  }

  return { group, meshCount }
}

const buffer = readFileSync(inputPath)
const loader = new GLTFLoader()

loader.parse(
  buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength),
  '',
  async (gltf) => {
    const { group, meshCount } = optimizeModuleScene(gltf.scene)
    console.log(`[${name}] Input meshes: ${meshCount}`)
    console.log(`[${name}] Output meshes: ${group.children.length}`)

    const exporter = new GLTFExporter()
    const result = await exporter.parseAsync(group, {
      binary: true,
      onlyVisible: true,
    })

    const out =
      result instanceof ArrayBuffer ? Buffer.from(result) : Buffer.from(JSON.stringify(result))
    writeFileSync(outputPath, out)

    const inMb = (buffer.length / 1024 / 1024).toFixed(1)
    const outMb = (out.length / 1024 / 1024).toFixed(1)
    console.log(`[${name}] Merged size: ${inMb} MB → ${outMb} MB`)

    console.log(`[${name}] Running Draco compression...`)
    const draco = spawnSync(
      process.execPath,
      [
        path.join(root, 'node_modules/@gltf-transform/cli/bin/cli.js'),
        'optimize',
        outputPath,
        outputPath,
        '--compress',
        'draco',
      ],
      { cwd: root, stdio: 'inherit' },
    )
    if (draco.status !== 0) {
      // Fallback via npx if local cli isn't installed
      const viaNpx = spawnSync(
        'npx',
        ['--yes', '@gltf-transform/cli@4.1.1', 'optimize', outputPath, outputPath, '--compress', 'draco'],
        { cwd: root, stdio: 'inherit', env: process.env },
      )
      if (viaNpx.status !== 0) {
        console.warn(`[${name}] Draco step failed; keeping merged (uncompressed) file.`)
        process.exit(viaNpx.status ?? 1)
      }
    }

    const finalSize = (readFileSync(outputPath).length / 1024).toFixed(0)
    console.log(`[${name}] Wrote ${outputPath} (${finalSize} KB)`)
  },
  (err) => {
    console.error(err)
    process.exit(1)
  },
)
