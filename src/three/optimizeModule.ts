import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const BASE_HEIGHT_RATIO = 0.12

function collectWorldGeometry(mesh: THREE.Mesh) {
  const geometry = mesh.geometry.clone()
  mesh.updateWorldMatrix(true, false)
  geometry.applyMatrix4(mesh.matrixWorld)

  // Merging requires consistent attributes — keep position (+ normal if present)
  const position = geometry.getAttribute('position')
  if (!position) return null

  if (!geometry.getAttribute('normal')) {
    geometry.computeVertexNormals()
  }

  // Drop UVs/colors/etc. that may be missing on some meshes and block merge
  for (const key of Object.keys(geometry.attributes)) {
    if (key !== 'position' && key !== 'normal') {
      geometry.deleteAttribute(key)
    }
  }
  geometry.morphAttributes = {}

  return geometry
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
