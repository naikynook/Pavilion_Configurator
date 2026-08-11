import * as THREE from 'three'
import { PANEL_THICKNESS_FT } from '../constants/primitives'
import { STEEL_TUBE_FT } from './createModuleConnections'
import { createMetalMaterial } from './moduleMaterials'

/**
 * Through-bolt length: 2″ tube + ¾″ plywood (ft).
 * Corner bolts from adjacent panels share the post and overlap inside it.
 */
export const PANEL_BOLT_LENGTH_FT = STEEL_TUBE_FT + PANEL_THICKNESS_FT

/**
 * Recess from the tube’s exterior face into the steel so heads sit in the
 * tube, not proud of it. Same on every panel / edge.
 */
export const PANEL_BOLT_PUSH_IN_FT = 0.75 / 12

const SHANK_R = 7 / 16 / 2 / 12
const HEAD_R = SHANK_R * 1.85
const HEAD_H = 0.35 / 12
const NUT_R = SHANK_R * 1.7
const NUT_H = 0.4 / 12

/**
 * Exact bolt-hole centers from Wall Panel 8x8.obj hole meshes
 * (inches → feet, origin at bottom-center after optimize-wall-panel.mjs).
 */
export const PANEL_BOLT_HOLES_FT: Array<{ x: number; y: number }> = (() => {
  const W = 90.5
  const SEAM_Y = 44.875
  const SEAM_GAP = 0.1
  const holesIn = [
    { x: 0.815, y: 5.245 },
    { x: 0.815, y: 43.236 },
    { x: 0.815, y: 46.243 },
    { x: 0.815, y: 88.245 },
    { x: 89.685, y: 5.245 },
    { x: 89.685, y: 43.236 },
    { x: 89.685, y: 46.243 },
    { x: 89.685, y: 88.245 },
  ]
  return holesIn.map((h) => {
    const seamShift = h.y < SEAM_Y ? -SEAM_GAP / 2 : SEAM_GAP / 2
    return {
      x: (h.x - W / 2) / 12,
      y: (h.y + seamShift) / 12,
    }
  })
})()

function hexPrism(radius: number, height: number) {
  const shape = new THREE.Shape()
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + Math.PI / 6
    const x = Math.cos(a) * radius
    const y = Math.sin(a) * radius
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: false,
  })
}

/**
 * Hex-head bolt + hex nut.
 * Local: head at z≤0, shaft along +Z (through steel, then into the panel).
 */
export function createPanelBoltAssembly(): THREE.Group {
  const group = new THREE.Group()
  group.name = 'module-bolt'
  const mat = createMetalMaterial()
  const L = PANEL_BOLT_LENGTH_FT

  const head = new THREE.Mesh(hexPrism(HEAD_R, HEAD_H), mat)
  head.name = 'module-bolt-head'
  head.position.z = -HEAD_H
  group.add(head)

  const shank = new THREE.Mesh(
    new THREE.CylinderGeometry(SHANK_R, SHANK_R, L, 10),
    mat,
  )
  shank.name = 'module-bolt-shank'
  shank.rotation.x = Math.PI / 2
  shank.position.z = L / 2
  group.add(shank)

  const nut = new THREE.Mesh(hexPrism(NUT_R, NUT_H), mat)
  nut.name = 'module-bolt-nut'
  nut.position.z = L - NUT_H
  group.add(nut)

  return group
}

export interface PanelBoltOptions {
  sx?: number
  sy?: number
}

/**
 * Bolts start on the tube exterior (recessed), pass through the steel, then
 * the plywood. Identical on every edge — adjacent corner bolts overlap in the post.
 */
export function addPanelBolts(
  panelRoot: THREE.Object3D,
  sxOrOpts: number | PanelBoltOptions = 1,
  syArg = 1,
) {
  const opts: PanelBoltOptions =
    typeof sxOrOpts === 'number'
      ? { sx: sxOrOpts, sy: syArg }
      : sxOrOpts
  const sx = opts.sx ?? 1
  const sy = opts.sy ?? 1

  const hardware = new THREE.Group()
  hardware.name = 'module-bolt-root'

  // Panel back is z=0 (tube outer face). Tube occupies [-STEEL_TUBE, 0]
  // toward the bay; panel thickness is along +Z (outward).
  const boltZ = -STEEL_TUBE_FT + PANEL_BOLT_PUSH_IN_FT

  for (const hole of PANEL_BOLT_HOLES_FT) {
    const bolt = createPanelBoltAssembly()
    bolt.position.set(hole.x * sx, hole.y * sy, boltZ)
    hardware.add(bolt)
  }

  panelRoot.add(hardware)
  return hardware
}
