import type {
  ModuleCorner,
  PlacedPrimitive,
  PrimitiveTypeId,
  WallAttachmentTarget,
} from '../types'
import { isModuleType } from '../constants/primitives'
import {
  BASE_CELL_FT,
  STOOL_DEPTH_FT,
  STOOL_HEIGHT_FT,
  STOOL_WIDTH_FT,
  type StoolCellEdgeFlags,
  stoolQuadrantCenterLocal,
} from '../three/createFurniture'

/** Cursor must be near a free quadrant center to snap. */
const SNAP_FT = 1.35

function quadrantTaken(
  primitives: PlacedPrimitive[],
  hostId: string,
  cellIx: number,
  cellIz: number,
  quadrant: ModuleCorner,
  excludeId?: string,
) {
  return primitives.some(
    (p) =>
      p.id !== excludeId &&
      p.typeId === 'stool' &&
      p.hostId === hostId &&
      p.cellIx === cellIx &&
      p.cellIz === cellIz &&
      p.corner === quadrant,
  )
}

function cellEdgeFlags(
  host: PlacedPrimitive,
  cellIx: number,
  cellIz: number,
): StoolCellEdgeFlags {
  const cellsX = Math.max(1, Math.round(host.size[0] / BASE_CELL_FT))
  const cellsZ = Math.max(1, Math.round(host.size[2] / BASE_CELL_FT))
  return {
    west: cellIx === 0,
    east: cellIx === cellsX - 1,
    south: cellIz === 0,
    north: cellIz === cellsZ - 1,
  }
}

/**
 * World pose for an 18″ stool on one quadrant of a 4×4 base cell.
 * Outer (perimeter) edges clear steel + foot plates; interior edges only
 * clear the plywood seam so stools never span a gap.
 */
export function computeStoolAttachment(
  host: PlacedPrimitive,
  cellIx: number,
  cellIz: number,
  quadrant: ModuleCorner,
): WallAttachmentTarget {
  const baseY = host.baseHeight ?? 1
  const cellX = host.gridX + cellIx * BASE_CELL_FT
  const cellZ = host.gridZ + cellIz * BASE_CELL_FT
  const local = stoolQuadrantCenterLocal(
    quadrant,
    cellEdgeFlags(host, cellIx, cellIz),
  )

  return {
    hostId: host.id,
    corner: quadrant,
    cellIx,
    cellIz,
    center: {
      x: cellX + local.x,
      y: baseY,
      z: cellZ + local.z,
    },
    rotationY: 0,
    size: [STOOL_WIDTH_FT, STOOL_HEIGHT_FT, STOOL_DEPTH_FT],
    wallWidth: BASE_CELL_FT,
  }
}

/**
 * Snap stools to the nearest free base-cell quadrant under the cursor.
 */
export function findStoolAttachmentNear(
  worldX: number,
  worldZ: number,
  typeId: PrimitiveTypeId,
  primitives: PlacedPrimitive[],
  excludeId?: string,
): WallAttachmentTarget | null {
  if (typeId !== 'stool') return null

  const hosts = primitives.filter((p) => isModuleType(p.typeId))
  let best: WallAttachmentTarget | null = null
  let bestDist = Infinity

  const quadrants: ModuleCorner[] = ['sw', 'se', 'nw', 'ne']

  for (const host of hosts) {
    const cellsX = Math.max(1, Math.round(host.size[0] / BASE_CELL_FT))
    const cellsZ = Math.max(1, Math.round(host.size[2] / BASE_CELL_FT))

    for (let ix = 0; ix < cellsX; ix++) {
      for (let iz = 0; iz < cellsZ; iz++) {
        const cellX = host.gridX + ix * BASE_CELL_FT
        const cellZ = host.gridZ + iz * BASE_CELL_FT
        const edges = cellEdgeFlags(host, ix, iz)

        for (const quadrant of quadrants) {
          if (quadrantTaken(primitives, host.id, ix, iz, quadrant, excludeId)) {
            continue
          }
          const local = stoolQuadrantCenterLocal(quadrant, edges)
          const cx = cellX + local.x
          const cz = cellZ + local.z
          const dist = Math.hypot(worldX - cx, worldZ - cz)
          if (dist > SNAP_FT) continue
          if (dist < bestDist) {
            bestDist = dist
            best = computeStoolAttachment(host, ix, iz, quadrant)
          }
        }
      }
    }
  }

  return best
}
