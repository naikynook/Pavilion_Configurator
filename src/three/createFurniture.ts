import * as THREE from 'three'
import type { PrimitiveTypeId } from '../types'
import {
  PANEL_EDGE_CLEARANCE_FT,
  PANEL_THICKNESS_FT,
  STEEL_HEIGHT_FT,
} from '../constants/primitives'
import { createPlywoodMaterial } from './moduleMaterials'

const PLY_T = 0.1 // ~1.2″ plywood thickness for furniture

/** Seat height ~16″ — keep in sync with wallAttach */
export const BENCH_SEAT_HEIGHT_FT = 1.33
export const BENCH_DEPTH_FT = 1.5

/**
 * Plywood wall panel (procedural fallback when GLB isn’t loaded yet).
 * Local: width X, height Y, thickness Z.
 */
export function createWallPanelMesh(wallWidth: number): THREE.Group {
  const group = new THREE.Group()
  const w = wallWidth - PANEL_EDGE_CLEARANCE_FT
  const h = STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT
  const t = PANEL_THICKNESS_FT
  const mat = createPlywoodMaterial()

  const sheet = new THREE.Mesh(new THREE.BoxGeometry(w, h, t), mat)
  sheet.name = 'wall-panel-sheet'
  group.add(sheet)
  group.userData.panelLocalSize = [w, h, t]
  return group
}

/**
 * Low boxy plywood bench (no backrest). Origin at bottom center;
 * length on X; depth on +Z into the bay; back face at −Z (toward the steel).
 */
export function createBenchMesh(wallWidth: number): THREE.Group {
  const group = new THREE.Group()
  const mat = createPlywoodMaterial()

  const length = Math.max(wallWidth - PANEL_EDGE_CLEARANCE_FT, 2)
  const depth = BENCH_DEPTH_FT
  const seatH = BENCH_SEAT_HEIGHT_FT
  const t = PLY_T

  const seat = new THREE.Mesh(new THREE.BoxGeometry(length, t, depth), mat)
  seat.position.set(0, seatH - t / 2, 0)
  group.add(seat)

  const front = new THREE.Mesh(
    new THREE.BoxGeometry(length, seatH - t, t),
    mat,
  )
  front.position.set(0, (seatH - t) / 2, depth / 2 - t / 2)
  group.add(front)

  const back = new THREE.Mesh(
    new THREE.BoxGeometry(length, seatH - t, t),
    mat,
  )
  back.position.set(0, (seatH - t) / 2, -depth / 2 + t / 2)
  group.add(back)

  for (const side of [-1, 1] as const) {
    const end = new THREE.Mesh(
      new THREE.BoxGeometry(t, seatH - t, depth - 2 * t),
      mat,
    )
    end.position.set(side * (length / 2 - t / 2), (seatH - t) / 2, 0)
    group.add(end)
  }

  group.userData.benchHeight = seatH
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
    case 'podium':
      return createPodiumMesh()
    default:
      return new THREE.Group()
  }
}
