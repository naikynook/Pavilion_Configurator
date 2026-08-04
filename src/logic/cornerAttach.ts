import type {
  ModuleCorner,
  PlacedPrimitive,
  PrimitiveTypeId,
  WallAttachmentTarget,
} from '../types'
import { isModuleType } from '../constants/primitives'
import {
  BASE_CELL_FT,
  BENCH_DEPTH_FT,
  BENCH_SEAT_HEIGHT_FT,
  benchBackSetbackFt,
  cornerArmLengthFt,
} from '../three/createFurniture'

/** Must be near the actual corner — not mid-edge (avoids dual snaps on one side). */
const SNAP_FT = 1.85

function cellTaken(
  primitives: PlacedPrimitive[],
  hostId: string,
  cellIx: number,
  cellIz: number,
  excludeId?: string,
) {
  return primitives.some(
    (p) =>
      p.id !== excludeId &&
      p.typeId === 'benchCorner' &&
      p.hostId === hostId &&
      p.cellIx === cellIx &&
      p.cellIz === cellIz,
  )
}

/**
 * World pose for an L on one corner of a 4×4 base cell.
 * Origin = outer corner of the L (backs clear of the steel); scale mirrors.
 */
export function computeCornerAttachment(
  host: PlacedPrimitive,
  cellIx: number,
  cellIz: number,
  corner: ModuleCorner,
): WallAttachmentTarget {
  const setback = benchBackSetbackFt()
  const arm = cornerArmLengthFt()
  const height = BENCH_SEAT_HEIGHT_FT
  const baseY = host.baseHeight ?? 1
  const cellX = host.gridX + cellIx * BASE_CELL_FT
  const cellZ = host.gridZ + cellIz * BASE_CELL_FT

  let originX = cellX + setback
  let originZ = cellZ + setback
  let scale: [number, number, number] = [1, 1, 1]

  switch (corner) {
    case 'sw':
      originX = cellX + setback
      originZ = cellZ + setback
      scale = [1, 1, 1]
      break
    case 'se':
      originX = cellX + BASE_CELL_FT - setback
      originZ = cellZ + setback
      scale = [-1, 1, 1]
      break
    case 'nw':
      originX = cellX + setback
      originZ = cellZ + BASE_CELL_FT - setback
      scale = [1, 1, -1]
      break
    case 'ne':
      originX = cellX + BASE_CELL_FT - setback
      originZ = cellZ + BASE_CELL_FT - setback
      scale = [-1, 1, -1]
      break
  }

  return {
    hostId: host.id,
    corner,
    cellIx,
    cellIz,
    center: { x: originX, y: baseY, z: originZ },
    rotationY: 0,
    scale,
    size: [arm, height, arm],
    wallWidth: BASE_CELL_FT,
  }
}

/**
 * Snap only when the cursor is close to a single base-cell corner
 * (one pose per corner — not multiple options along a side).
 */
export function findCornerAttachmentNear(
  worldX: number,
  worldZ: number,
  typeId: PrimitiveTypeId,
  primitives: PlacedPrimitive[],
  excludeId?: string,
): WallAttachmentTarget | null {
  if (typeId !== 'benchCorner') return null

  const hosts = primitives.filter((p) => isModuleType(p.typeId))
  let best: WallAttachmentTarget | null = null
  let bestDist = Infinity

  for (const host of hosts) {
    const cellsX = Math.max(1, Math.round(host.size[0] / BASE_CELL_FT))
    const cellsZ = Math.max(1, Math.round(host.size[2] / BASE_CELL_FT))
    const setback = benchBackSetbackFt()

    for (let ix = 0; ix < cellsX; ix++) {
      for (let iz = 0; iz < cellsZ; iz++) {
        if (cellTaken(primitives, host.id, ix, iz, excludeId)) continue

        const cellX = host.gridX + ix * BASE_CELL_FT
        const cellZ = host.gridZ + iz * BASE_CELL_FT

        const corners: Array<{ corner: ModuleCorner; x: number; z: number }> = [
          { corner: 'sw', x: cellX + setback, z: cellZ + setback },
          {
            corner: 'se',
            x: cellX + BASE_CELL_FT - setback,
            z: cellZ + setback,
          },
          {
            corner: 'nw',
            x: cellX + setback,
            z: cellZ + BASE_CELL_FT - setback,
          },
          {
            corner: 'ne',
            x: cellX + BASE_CELL_FT - setback,
            z: cellZ + BASE_CELL_FT - setback,
          },
        ]

        for (const c of corners) {
          const dist = Math.hypot(worldX - c.x, worldZ - c.z)
          if (dist > SNAP_FT) continue
          if (dist < bestDist) {
            bestDist = dist
            best = computeCornerAttachment(host, ix, iz, c.corner)
          }
        }
      }
    }
  }

  return best
}

/** Depth used when sizing previews / collision envelopes */
export { BENCH_DEPTH_FT }
