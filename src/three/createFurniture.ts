import * as THREE from 'three'
import type { ModuleCorner, PrimitiveTypeId } from '../types'
import {
  getPanelDisplaySize,
  STEEL_EDGE_INSET_FT,
} from '../constants/primitives'
import { applyPanelFinish, applyPlywoodToObject, createPlywoodMaterial } from './moduleMaterials'
import { addPanelBolts } from './createPanelHardware'
import { STEEL_TUBE_FT } from './createModuleConnections'

/** One tiled plywood base cell (ft) */
export const BASE_CELL_FT = 4
/** Inter-base / inter-cell seam (ft) — stools must not cross this */
export const BASE_SEAM_GAP_FT = 0.125

/** Authored stool footprint / height from Stool.obj (18×18×18.75″) */
export const STOOL_WIDTH_FT = 18 / 12
export const STOOL_DEPTH_FT = 18 / 12
export const STOOL_HEIGHT_FT = 18.75 / 12

/**
 * Clearance from a cell edge to the stool silhouette.
 * - Seam edges (between base tiles): stay on the plywood, off the gap.
 * - Module perimeter: clear steel tube + foot base plates.
 *   (About 4½″ past the tube; on a lone 4×4 both sides are perimeter so
 *   positions are clamped so neighboring stools don’t overlap.)
 */
export const STOOL_SEAM_CLEAR_FT = BASE_SEAM_GAP_FT / 2 + 0.5 / 12
export const STOOL_STEEL_CLEAR_FT =
  STEEL_EDGE_INSET_FT + STEEL_TUBE_FT + 5 / 12

export interface StoolCellEdgeFlags {
  /** True when this cell edge is on the host module perimeter (steel + feet). */
  west: boolean
  east: boolean
  south: boolean
  north: boolean
}

/** Center inset from one cell edge for an 18″ stool. */
export function stoolEdgeCenterInsetFt(isPerimeter: boolean) {
  const clear = isPerimeter ? STOOL_STEEL_CLEAR_FT : STOOL_SEAM_CLEAR_FT
  return clear + STOOL_WIDTH_FT / 2
}

/**
 * Spread two center coordinates so stools stay at least one stool-width apart.
 * Biases toward the side that requested more inset (usually the perimeter).
 */
function separateCenters(lo: number, hi: number): { lo: number; hi: number } {
  const minSpan = STOOL_WIDTH_FT // stools may touch; never overlap
  if (hi - lo >= minSpan) return { lo, hi }

  const mid = (lo + hi) / 2
  const half = minSpan / 2
  let nextLo = mid - half
  let nextHi = mid + half

  const minCenter = STOOL_SEAM_CLEAR_FT + STOOL_WIDTH_FT / 2
  const maxCenter = BASE_CELL_FT - minCenter
  if (nextLo < minCenter) {
    nextLo = minCenter
    nextHi = nextLo + minSpan
  }
  if (nextHi > maxCenter) {
    nextHi = maxCenter
    nextLo = nextHi - minSpan
  }
  return { lo: nextLo, hi: nextHi }
}

/**
 * Local XZ of a quadrant center inside a 4×4 cell (cell origin at SW).
 * Perimeter edges use a deeper inset so stools clear corner foot plates;
 * interior seams only need a small offset so stools never span the gap.
 */
export function stoolQuadrantCenterLocal(
  quadrant: ModuleCorner,
  edges: StoolCellEdgeFlags = {
    west: true,
    east: true,
    south: true,
    north: true,
  },
): { x: number; z: number } {
  let xWest = stoolEdgeCenterInsetFt(edges.west)
  let xEast = BASE_CELL_FT - stoolEdgeCenterInsetFt(edges.east)
  let zSouth = stoolEdgeCenterInsetFt(edges.south)
  let zNorth = BASE_CELL_FT - stoolEdgeCenterInsetFt(edges.north)

  ;({ lo: xWest, hi: xEast } = separateCenters(xWest, xEast))
  ;({ lo: zSouth, hi: zNorth } = separateCenters(zSouth, zNorth))

  switch (quadrant) {
    case 'sw':
      return { x: xWest, z: zSouth }
    case 'se':
      return { x: xEast, z: zSouth }
    case 'nw':
      return { x: xWest, z: zNorth }
    case 'ne':
      return { x: xEast, z: zNorth }
  }
}

/** @deprecated use stoolEdgeCenterInsetFt */
export function stoolCenterInsetFt() {
  return stoolEdgeCenterInsetFt(true)
}

/**
 * Procedural fallback: two stacked ¾″ sheets matching the authored panel.
 * Local: bottom y=0, back z=0, +Z into bay. Sized to fitted steel.
 */
export function createWallPanelMesh(
  wallWidth = 8,
  color?: string | null,
): THREE.Group {
  const group = new THREE.Group()
  const [w, h, t] = getPanelDisplaySize(wallWidth)
  const seamGap = 0.1 / 12
  const seam = (h - seamGap) / 2

  const lower = new THREE.Mesh(new THREE.BoxGeometry(w, seam, t))
  lower.name = 'wall-panel-sheet-lower'
  lower.position.set(0, seam / 2, t / 2)
  group.add(lower)

  const upper = new THREE.Mesh(new THREE.BoxGeometry(w, seam, t))
  upper.name = 'wall-panel-sheet-upper'
  upper.position.set(0, seam + seamGap + seam / 2, t / 2)
  group.add(upper)

  applyPanelFinish(group, color)
  addPanelBolts(group, { sx: 1, sy: 1 })
  group.userData.panelSize = [w, h, t]
  return group
}

/**
 * Simple box proxy for the 18″ stool (used until / if the GLB fails to load).
 * Origin at bottom center — same as the optimized stool GLB.
 */
export function createStoolMesh(): THREE.Group {
  const group = new THREE.Group()
  group.name = 'stool'
  const mat = createPlywoodMaterial()
  const w = STOOL_WIDTH_FT
  const d = STOOL_DEPTH_FT
  const h = STOOL_HEIGHT_FT
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  mesh.name = 'stool-proxy'
  mesh.position.set(0, h / 2, 0)
  group.add(mesh)
  applyPlywoodToObject(group)
  group.userData.stoolSize = [w, h, d]
  return group
}

/** Build a furniture / panel mesh for the given type (and wall width when needed). */
export function createAccessoryMesh(
  typeId: PrimitiveTypeId,
  _wallWidth = 8,
  color?: string | null,
): THREE.Group {
  switch (typeId) {
    case 'panel8x8':
      return createWallPanelMesh(8, color)
    case 'stool':
      return createStoolMesh()
    default:
      return new THREE.Group()
  }
}

/** @deprecated kept for any leftover imports during migration */
export const BENCH_SEAT_HEIGHT_FT = STOOL_HEIGHT_FT
export const BENCH_DEPTH_FT = STOOL_DEPTH_FT
export function benchBackSetbackFt() {
  return STOOL_STEEL_CLEAR_FT
}
