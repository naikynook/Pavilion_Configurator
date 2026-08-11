import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const BASE_HEIGHT_RATIO = 0.12

/** Expand quantized / interleaved attributes to plain Float32 before baking. */
function floatGeometryFrom(source: THREE.BufferGeometry): THREE.BufferGeometry {
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
    geometry.setIndex(source.index.clone())
  }
  return geometry
}

function collectWorldGeometry(mesh: THREE.Mesh) {
  const geometry = floatGeometryFrom(mesh.geometry)
  mesh.updateWorldMatrix(true, false)
  geometry.applyMatrix4(mesh.matrixWorld)

  const position = geometry.getAttribute('position')
  if (!position) return null

  if (!geometry.getAttribute('normal')) {
    geometry.computeVertexNormals()
  }

  for (const key of Object.keys(geometry.attributes)) {
    if (key !== 'position' && key !== 'normal') {
      geometry.deleteAttribute(key)
    }
  }
  geometry.morphAttributes = {}

  return geometry
}

/**
 * Bake node scales/translations into mesh geometry (identity transforms).
 * Needed for Meshopt-quantized assets like the stool, where size lives in
 * node.scale rather than vertex units.
 */
export function flattenAuthoredScene(source: THREE.Object3D): THREE.Group {
  source.updateMatrixWorld(true)
  const invRoot = source.matrixWorld.clone().invert()
  const group = new THREE.Group()
  group.name = source.name || 'authored'

  source.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !child.geometry) return
    const geometry = floatGeometryFrom(child.geometry)
    if (!geometry.getAttribute('position')) return

    const local = new THREE.Matrix4().multiplyMatrices(
      invRoot,
      child.matrixWorld,
    )
    geometry.applyMatrix4(local)
    if (!geometry.getAttribute('normal')) {
      geometry.computeVertexNormals()
    }

    const mesh = new THREE.Mesh(geometry, child.material)
    mesh.name = child.name && child.name !== '' ? child.name : 'stool'
    mesh.userData.sharedResource = true
    group.add(mesh)
  })

  return group
}

/**
 * Collapse thousands of tiny meshes into two: plywood base + steel frame.
 * This is the main fix for placement lag (draw calls drop from ~4700 to 2).
 */
export function optimizeModuleScene(source: THREE.Object3D): THREE.Group {
  source.updateMatrixWorld(true)
  const fullBox = new THREE.Box3().setFromObject(source)
  const fullHeight = Math.max(fullBox.max.y - fullBox.min.y, 1e-6)
  const baseTop = fullBox.min.y + fullHeight * BASE_HEIGHT_RATIO

  const baseGeoms: THREE.BufferGeometry[] = []
  const steelGeoms: THREE.BufferGeometry[] = []

  source.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !child.geometry) return

    const meshBox = new THREE.Box3().setFromObject(child)
    const isBase =
      child.name === 'mesh_8' || meshBox.max.y <= baseTop + fullHeight * 0.01

    const worldGeom = collectWorldGeometry(child)
    if (!worldGeom) return

    if (isBase) baseGeoms.push(worldGeom)
    else steelGeoms.push(worldGeom)
  })

  const group = new THREE.Group()
  group.name = 'optimized-4x4-module'

  if (baseGeoms.length > 0) {
    const merged = mergeGeometries(baseGeoms, false)
    baseGeoms.forEach((g) => g.dispose())
    if (merged) {
      merged.computeBoundingBox()
      merged.computeBoundingSphere()
      const mesh = new THREE.Mesh(merged)
      mesh.name = 'module-base'
      group.add(mesh)
    }
  }

  if (steelGeoms.length > 0) {
    const merged = mergeGeometries(steelGeoms, false)
    steelGeoms.forEach((g) => g.dispose())
    if (merged) {
      merged.computeBoundingBox()
      merged.computeBoundingSphere()
      const mesh = new THREE.Mesh(merged)
      mesh.name = 'module-steel'
      group.add(mesh)
    }
  }

  return group
}

/**
 * Collapse a multi-mesh wall panel GLB into a single mesh for fast draw calls.
 */
export function mergePanelScene(source: THREE.Object3D): THREE.Group {
  source.updateMatrixWorld(true)
  const geoms: THREE.BufferGeometry[] = []

  source.traverse((child) => {
    if (!(child instanceof THREE.Mesh) || !child.geometry) return
    const worldGeom = collectWorldGeometry(child)
    if (worldGeom) geoms.push(worldGeom)
  })

  const group = new THREE.Group()
  group.name = 'optimized-wall-panel'

  if (geoms.length > 0) {
    const merged = mergeGeometries(geoms, false)
    geoms.forEach((g) => g.dispose())
    if (merged) {
      merged.computeBoundingBox()
      merged.computeBoundingSphere()
      const mesh = new THREE.Mesh(merged)
      mesh.name = 'wall-panel'
      group.add(mesh)
    }
  }

  return group
}
