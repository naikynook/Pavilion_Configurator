import * as THREE from 'three'
import { STEEL_FOOT_LIFT_FT, STEEL_HEIGHT_FT } from '../constants/primitives'
import { createMetalMaterial } from './moduleMaterials'

/** 2″ square tube (ft) — matches the authored module GLB tube depth */
export const STEEL_TUBE_FT = 2 / 12

export const CONNECTION_FOOT_URL = '/3d-models/connection-foot-opt.glb'
export const CONNECTION_XYZ_URL = '/3d-models/connection-xyz-opt.glb'

export interface ModuleConnectionsOptions {
  footprintW: number
  footprintD: number
  steelHeight?: number
  steelInset: number
  baseHeight: number
}

function applyMetal(root: THREE.Object3D) {
  const mat = createMetalMaterial()
  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = mat
      if (!child.name) child.name = 'module-connection'
      child.userData.sharedResource = true
    }
  })
}

/**
 * Instance hand-modeled foot + XYZ joint templates at each steel corner.
 * Templates stay fixed size (not stretched with the frame footprint).
 */
export function addModuleConnections(
  moduleGroup: THREE.Group,
  options: ModuleConnectionsOptions,
  footTemplate: THREE.Object3D,
  xyzTemplate: THREE.Object3D,
) {
  const {
    footprintW: w,
    footprintD: d,
    steelHeight = STEEL_HEIGHT_FT,
    steelInset,
    baseHeight,
  } = options

  const tube = STEEL_TUBE_FT
  const half = tube / 2
  const hx = w / 2 - steelInset - half
  const hz = d / 2 - steelInset - half
  const steelY = baseHeight + STEEL_FOOT_LIFT_FT

  const hardware = new THREE.Group()
  hardware.name = 'module-hardware-root'

  const corners: Array<{ x: number; z: number; rotY: number }> = [
    { x: -hx, z: -hz, rotY: 0 },
    { x: hx, z: -hz, rotY: Math.PI / 2 },
    { x: hx, z: hz, rotY: Math.PI },
    { x: -hx, z: hz, rotY: -Math.PI / 2 },
  ]

  const xyzBox = new THREE.Box3().setFromObject(xyzTemplate)
  const xyzH = Math.max(xyzBox.max.y - xyzBox.min.y, 0.01)

  for (const c of corners) {
    const foot = footTemplate.clone(true)
    applyMetal(foot)
    foot.name = 'module-foot'
    // Plate on the plywood; steel is lifted so the flange stays visible
    foot.position.set(c.x, baseHeight + 0.002, c.z)
    foot.rotation.y = c.rotY
    hardware.add(foot)

    const xyz = xyzTemplate.clone(true)
    applyMetal(xyz)
    xyz.name = 'module-xyz'
    xyz.position.set(c.x, steelY + steelHeight - xyzH, c.z)
    xyz.rotation.y = c.rotY
    hardware.add(xyz)
  }

  moduleGroup.add(hardware)
}
