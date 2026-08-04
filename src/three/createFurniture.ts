import * as THREE from 'three'
import type { PrimitiveTypeId } from '../types'
import {
  PANEL_EDGE_CLEARANCE_FT,
  PANEL_THICKNESS_FT,
  STEEL_EDGE_INSET_FT,
  STEEL_HEIGHT_FT,
} from '../constants/primitives'
import { createPlywoodMaterial } from './moduleMaterials'

const PLY_T = 0.1 // ~1.2″ plywood thickness for furniture

/** Seat height ~16″ — keep in sync with wallAttach */
export const BENCH_SEAT_HEIGHT_FT = 1.33
export const BENCH_DEPTH_FT = 1.5
/** Nominal bay size (ft) — how many benches fit along a wall */
export const BENCH_BAY_FT = 4
/** Same seam as tiled plywood bases (~1½″ — no connectors between benches) */
export const BENCH_SEAM_GAP_FT = 0.125
/** One tiled plywood base cell — corner L spans this full base */
export const BASE_CELL_FT = 4

/**
 * Clearance from the steel outer face into the bay so benches sit
 * in front of the tube, not through it (~2½″).
 */
export const BENCH_FROM_STEEL_FT = 0.2

/** Distance from footprint outer edge to the bench back face */
export function benchBackSetbackFt() {
  return STEEL_EDGE_INSET_FT + BENCH_FROM_STEEL_FT
}

/** @deprecated alias */
export const CORNER_ARM_FT = BASE_CELL_FT

/** How many 4 ft bench bays fit on a wall. */
export function benchBayCount(wallWidth: number) {
  return Math.max(0, Math.floor((wallWidth + 1e-6) / BENCH_BAY_FT))
}

/**
 * Actual bench length for a wall — slightly under 4 ft when multiple bays
 * share a face, so adjacent pieces leave the same gap as the base boxes.
 */
export function benchLengthForWall(wallWidth: number) {
  const count = Math.max(1, benchBayCount(wallWidth))
  const outerInset = BENCH_SEAM_GAP_FT / 2
  const usable = Math.max(wallWidth - 2 * outerInset, BENCH_BAY_FT * 0.85)
  const internalGaps = BENCH_SEAM_GAP_FT * (count - 1)
  return (usable - internalGaps) / count
}

/**
 * Arm length on one 4×4 base: from steel setback to where the inter-base
 * gap begins (does not spill onto the neighboring cell).
 */
export function cornerArmLengthFt() {
  const setback = benchBackSetbackFt()
  const gapHalf = BENCH_SEAM_GAP_FT / 2
  return Math.max(BASE_CELL_FT - gapHalf - setback, BENCH_DEPTH_FT + 0.75)
}

/** Centers of bench bays along a wall, with base-matching seams between them. */
export function benchSlotsAlong(wallWidth: number): number[] {
  const count = benchBayCount(wallWidth)
  if (count <= 0) return []
  const length = benchLengthForWall(wallWidth)
  const outerInset = BENCH_SEAM_GAP_FT / 2
  const slots: number[] = []
  for (let i = 0; i < count; i++) {
    slots.push(outerInset + length / 2 + i * (length + BENCH_SEAM_GAP_FT))
  }
  return slots
}

/**
 * Plywood wall panel (procedural fallback when GLB isn’t loaded yet).
 * Local: width X, height Y, thickness Z.
 */
export function createWallPanelMesh(wallWidth: number): THREE.Group {
  const group = new THREE.Group()
  const w = wallWidth - 2 * STEEL_EDGE_INSET_FT - PANEL_EDGE_CLEARANCE_FT
  const h = STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT
  const t = PANEL_THICKNESS_FT
  const mat = createPlywoodMaterial()

  const sheet = new THREE.Mesh(new THREE.BoxGeometry(w, h, t), mat)
  sheet.name = 'wall-panel-sheet'
  group.add(sheet)
  group.userData.panelLocalSize = [w, h, t]
  return group
}

function addBenchShell(
  group: THREE.Group,
  mat: THREE.Material,
  length: number,
  depth: number,
  seatH: number,
  cx: number,
  cz: number,
) {
  const t = PLY_T

  const seat = new THREE.Mesh(new THREE.BoxGeometry(length, t, depth), mat)
  seat.position.set(cx, seatH - t / 2, cz)
  group.add(seat)

  const front = new THREE.Mesh(
    new THREE.BoxGeometry(length, seatH - t, t),
    mat,
  )
  front.position.set(cx, (seatH - t) / 2, cz + depth / 2 - t / 2)
  group.add(front)

  const back = new THREE.Mesh(
    new THREE.BoxGeometry(length, seatH - t, t),
    mat,
  )
  back.position.set(cx, (seatH - t) / 2, cz - depth / 2 + t / 2)
  group.add(back)

  for (const side of [-1, 1] as const) {
    const end = new THREE.Mesh(
      new THREE.BoxGeometry(t, seatH - t, depth - 2 * t),
      mat,
    )
    end.position.set(cx + side * (length / 2 - t / 2), (seatH - t) / 2, cz)
    group.add(end)
  }
}

/**
 * Low boxy plywood bench (no backrest). Origin at bottom center;
 * length on X; depth on +Z into the bay; back face at −Z (toward the steel).
 * Length matches bay sizing so pieces leave a base-sized seam.
 */
export function createBenchMesh(wallWidth = BENCH_BAY_FT): THREE.Group {
  const group = new THREE.Group()
  const mat = createPlywoodMaterial()

  const length = benchLengthForWall(wallWidth)
  const depth = BENCH_DEPTH_FT
  const seatH = BENCH_SEAT_HEIGHT_FT

  addBenchShell(group, mat, length, depth, seatH, 0, 0)

  group.userData.benchHeight = seatH
  group.userData.benchDepth = depth
  group.userData.benchLength = length
  return group
}

/**
 * Clean L-shaped corner bench for one 4×4 base.
 * Local origin at the outer corner; arms along +X and +Z stop before the
 * inter-base gap. Mirror via scale for SE / NW / NE.
 */
export function createCornerBenchMesh(): THREE.Group {
  const group = new THREE.Group()
  const mat = createPlywoodMaterial()
  const arm = cornerArmLengthFt()
  const depth = BENCH_DEPTH_FT
  const seatH = BENCH_SEAT_HEIGHT_FT
  const t = PLY_T
  const ext = Math.max(arm - depth, 0.05)
  const apronH = seatH - t

  // —— Seat (L) ——
  const seatX = new THREE.Mesh(new THREE.BoxGeometry(arm, t, depth), mat)
  seatX.position.set(arm / 2, seatH - t / 2, depth / 2)
  group.add(seatX)

  const seatZ = new THREE.Mesh(new THREE.BoxGeometry(depth, t, ext), mat)
  seatZ.position.set(depth / 2, seatH - t / 2, depth + ext / 2)
  group.add(seatZ)

  // —— Outer aprons (full L perimeter toward steel) ——
  // Along +X arm (south back)
  const apronOuterX = new THREE.Mesh(
    new THREE.BoxGeometry(arm, apronH, t),
    mat,
  )
  apronOuterX.position.set(arm / 2, apronH / 2, t / 2)
  group.add(apronOuterX)

  // Along +Z arm (west back) — full arm length, including the corner square
  const apronOuterZ = new THREE.Mesh(
    new THREE.BoxGeometry(t, apronH, arm),
    mat,
  )
  apronOuterZ.position.set(t / 2, apronH / 2, arm / 2)
  group.add(apronOuterZ)

  // —— Inner aprons (L notch into the bay) ——
  const apronInnerX = new THREE.Mesh(
    new THREE.BoxGeometry(ext, apronH, t),
    mat,
  )
  apronInnerX.position.set(depth + ext / 2, apronH / 2, depth - t / 2)
  group.add(apronInnerX)

  const apronInnerZ = new THREE.Mesh(
    new THREE.BoxGeometry(t, apronH, ext),
    mat,
  )
  apronInnerZ.position.set(depth - t / 2, apronH / 2, depth + ext / 2)
  group.add(apronInnerZ)

  // —— Free ends (where the L meets the base gap) ——
  const endX = new THREE.Mesh(
    new THREE.BoxGeometry(t, apronH, depth - 2 * t),
    mat,
  )
  endX.position.set(arm - t / 2, apronH / 2, depth / 2)
  group.add(endX)

  const endZ = new THREE.Mesh(
    new THREE.BoxGeometry(depth - 2 * t, apronH, t),
    mat,
  )
  endZ.position.set(depth / 2, apronH / 2, arm - t / 2)
  group.add(endZ)

  group.userData.benchHeight = seatH
  group.userData.cornerArm = arm
  group.userData.benchDepth = depth
  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const mats = Array.isArray(child.material)
        ? child.material
        : [child.material]
      for (const m of mats) {
        if (m instanceof THREE.Material) m.side = THREE.DoubleSide
      }
    }
  })
  return group
}

/**
 * Solid L ghost for placement preview — one continuous mesh.
 * Caller should pass a clone of the wall-bench preview material so color /
 * opacity stay identical (do not use DoubleSide — it doubles opacity).
 */
export function createCornerBenchPreviewMesh(
  material: THREE.Material,
): THREE.Group {
  const group = new THREE.Group()
  const arm = cornerArmLengthFt()
  const depth = BENCH_DEPTH_FT
  const h = BENCH_SEAT_HEIGHT_FT

  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(arm, 0)
  shape.lineTo(arm, -depth)
  shape.lineTo(depth, -depth)
  shape.lineTo(depth, -arm)
  shape.lineTo(0, -arm)
  shape.closePath()

  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: h,
    bevelEnabled: false,
    curveSegments: 1,
    steps: 1,
  })
  geom.rotateX(-Math.PI / 2)
  geom.computeVertexNormals()

  const mesh = new THREE.Mesh(geom, material)
  group.add(mesh)
  group.userData.previewMesh = mesh

  group.userData.cornerArm = arm
  group.userData.benchDepth = depth
  return group
}

/**
 * Pedestal plywood table: top + central column + wider base plate.
 * Origin at bottom of base (sits on the ground).
 */
export function createPodiumMesh(): THREE.Group {
  const group = new THREE.Group()
  const mat = createPlywoodMaterial()
  const t = PLY_T

  const topW = 2.5
  const topD = 1.75
  const colW = 0.85
  const colD = 0.85
  const baseW = 1.35
  const baseD = 1.35
  const h = 3.0

  const base = new THREE.Mesh(new THREE.BoxGeometry(baseW, t, baseD), mat)
  base.position.set(0, t / 2, 0)
  group.add(base)

  const colH = h - 2 * t
  const col = new THREE.Mesh(new THREE.BoxGeometry(colW, colH, colD), mat)
  col.position.set(0, t + colH / 2, 0)
  group.add(col)

  const top = new THREE.Mesh(new THREE.BoxGeometry(topW, t, topD), mat)
  top.position.set(0, h - t / 2, 0)
  group.add(top)

  group.userData.podiumSize = [topW, h, topD]
  return group
}

/** Build a furniture / panel mesh for the given type (and wall width when needed). */
export function createAccessoryMesh(
  typeId: PrimitiveTypeId,
  wallWidth = 8,
): THREE.Group {
  switch (typeId) {
    case 'panel4x8':
      return createWallPanelMesh(4)
    case 'panel8x8':
      return createWallPanelMesh(8)
    case 'bench':
      return createBenchMesh(wallWidth)
    case 'benchCorner':
      return createCornerBenchMesh()
    case 'podium':
      return createPodiumMesh()
    default:
      return new THREE.Group()
  }
}
