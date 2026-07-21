import type {
  PlacedPrimitive,
  PrimitiveTypeId,
  WallAttachmentTarget,
  WallFace,
} from '../types'
import {
  PANEL_EDGE_CLEARANCE_FT,
  PANEL_THICKNESS_FT,
  STEEL_HEIGHT_FT,
  getPrimitiveDefinition,
  isModuleType,
} from '../constants/primitives'
import {
  BENCH_DEPTH_FT,
  BENCH_SEAT_HEIGHT_FT,
} from '../three/createFurniture'

const FACE_ORDER: WallFace[] = ['south', 'east', 'north', 'west']

/** Clearance from steel tube face so the bench sits in front (bolt-on), not through it */
export const BENCH_STEEL_SETBACK_FT = 0.35

export { BENCH_DEPTH_FT, BENCH_SEAT_HEIGHT_FT }
export const BENCH_TOTAL_HEIGHT_FT = BENCH_SEAT_HEIGHT_FT

function wallWidthForFace(host: PlacedPrimitive, face: WallFace) {
  return face === 'north' || face === 'south' ? host.size[0] : host.size[2]
}

function pointInsideHost(worldX: number, worldZ: number, host: PlacedPrimitive) {
  return (
    worldX >= host.gridX &&
    worldX <= host.gridX + host.size[0] &&
    worldZ >= host.gridZ &&
    worldZ <= host.gridZ + host.size[2]
  )
}

function isPanelType(typeId: PrimitiveTypeId) {
  return typeId === 'panel4x8' || typeId === 'panel8x8'
}

/**
 * Only block another item of the same role on that face.
 * Benches and panels may share a wall (panel outside, bench inside).
 */
function faceAlreadyOccupied(
  primitives: PlacedPrimitive[],
  hostId: string,
  face: WallFace,
  typeId: PrimitiveTypeId,
  excludeId?: string,
) {
  return primitives.some((p) => {
    if (p.id === excludeId || p.hostId !== hostId || p.face !== face) return false
    if (typeId === 'bench') return p.typeId === 'bench'
    if (isPanelType(typeId)) return isPanelType(p.typeId)
    return p.typeId === typeId
  })
}

/** Nearest wall from a point inside the module (normalized distances). */
function nearestFaceInside(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
): WallFace {
  const nx = (worldX - host.gridX) / Math.max(host.size[0], 1e-6)
  const nz = (worldZ - host.gridZ) / Math.max(host.size[2], 1e-6)
  const distSouth = nz
  const distNorth = 1 - nz
  const distWest = nx
  const distEast = 1 - nx
  const min = Math.min(distSouth, distNorth, distWest, distEast)
  if (min === distSouth) return 'south'
  if (min === distNorth) return 'north'
  if (min === distWest) return 'west'
  return 'east'
}

/**
 * World pose for a wall-attached item on a host module face.
 * Panels sit on the outer face; benches sit inside, set back from the steel.
 */
export function computeWallAttachment(
  host: PlacedPrimitive,
  face: WallFace,
  typeId: PrimitiveTypeId,
): WallAttachmentTarget | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def || def.kind !== 'wallAttach') return null

  const wallWidth = wallWidthForFace(host, face)
  if (def.requiredWallWidth != null && def.requiredWallWidth !== wallWidth) {
    return null
  }

  const baseY = host.baseHeight ?? 1
  const hx = host.gridX
  const hz = host.gridZ
  const [hw, , hd] = host.size

  if (typeId === 'bench') {
    const depth = BENCH_DEPTH_FT
    const height = BENCH_TOTAL_HEIGHT_FT
    const length = wallWidth - PANEL_EDGE_CLEARANCE_FT
    const setback = BENCH_STEEL_SETBACK_FT
    let centerX = hx + hw / 2
    let centerZ = hz + hd / 2
    let rotationY = 0
    let size: [number, number, number] = [length, height, depth]

    switch (face) {
      case 'south':
        // Back faces south steel; sit in front (inward) of the tube
        centerZ = hz + setback + depth / 2
        rotationY = 0
        size = [length, height, depth]
        break
      case 'north':
        centerZ = hz + hd - setback - depth / 2
        rotationY = Math.PI
        size = [length, height, depth]
        break
      case 'west':
        centerX = hx + setback + depth / 2
        rotationY = Math.PI / 2
        size = [depth, height, length]
        break
      case 'east':
        centerX = hx + hw - setback - depth / 2
        rotationY = -Math.PI / 2
        size = [depth, height, length]
        break
    }

    return {
      hostId: host.id,
      face,
      center: { x: centerX, y: baseY, z: centerZ },
      rotationY,
      size,
      wallWidth,
    }
  }

  // Wall panels: outer face of the steel bay
  const panelW = wallWidth - PANEL_EDGE_CLEARANCE_FT
  const panelH = STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT
  const t = PANEL_THICKNESS_FT
  let centerX = hx + hw / 2
  let centerZ = hz + hd / 2
  let rotationY = 0
  let size: [number, number, number] = [panelW, panelH, t]

  switch (face) {
    case 'south':
      centerZ = hz - t / 2
      rotationY = 0
      size = [panelW, panelH, t]
      break
    case 'north':
      centerZ = hz + hd + t / 2
      rotationY = Math.PI
      size = [panelW, panelH, t]
      break
    case 'west':
      centerX = hx - t / 2
      rotationY = Math.PI / 2
      size = [t, panelH, panelW]
      break
    case 'east':
      centerX = hx + hw + t / 2
      rotationY = -Math.PI / 2
      size = [t, panelH, panelW]
      break
  }

  return {
    hostId: host.id,
    face,
    center: {
      x: centerX,
      y: baseY + PANEL_EDGE_CLEARANCE_FT / 2 + panelH / 2,
      z: centerZ,
    },
    rotationY,
    size,
    wallWidth,
  }
}

function distToFacePlane(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
  face: WallFace,
) {
  const hx = host.gridX
  const hz = host.gridZ
  const [hw, , hd] = host.size
  switch (face) {
    case 'south':
      return hz - worldZ
    case 'north':
      return worldZ - (hz + hd)
    case 'west':
      return hx - worldX
    case 'east':
      return worldX - (hx + hw)
  }
}

/**
 * Pick the closest valid wall face near a world XZ point.
 * Benches: nearest wall from inside the module (auto-orients as you move).
 * Panels: exterior face near the cursor.
 */
export function findWallAttachmentNear(
  worldX: number,
  worldZ: number,
  typeId: PrimitiveTypeId,
  primitives: PlacedPrimitive[],
  excludeId?: string,
): WallAttachmentTarget | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def || def.kind !== 'wallAttach') return null

  const hosts = primitives.filter((p) => isModuleType(p.typeId))
  const isBench = typeId === 'bench'

  if (isBench) {
    // Prefer the module that contains the cursor; orient to nearest wall inside it
    let containing: PlacedPrimitive | null = null
    let containingDist = Infinity

    for (const host of hosts) {
      const margin = 0.75
      const inOrNear =
        worldX >= host.gridX - margin &&
        worldX <= host.gridX + host.size[0] + margin &&
        worldZ >= host.gridZ - margin &&
        worldZ <= host.gridZ + host.size[2] + margin
      if (!inOrNear) continue

      const cx = host.gridX + host.size[0] / 2
      const cz = host.gridZ + host.size[2] / 2
      const dist = Math.hypot(worldX - cx, worldZ - cz)
      const inside = pointInsideHost(worldX, worldZ, host)
      const score = inside ? dist : dist + 100
      if (score < containingDist) {
        containingDist = score
        containing = host
      }
    }

    if (!containing) return null

    const host = containing
    const clampedX = Math.min(
      Math.max(worldX, host.gridX + 0.05),
      host.gridX + host.size[0] - 0.05,
    )
    const clampedZ = Math.min(
      Math.max(worldZ, host.gridZ + 0.05),
      host.gridZ + host.size[2] - 0.05,
    )

    const preferred = nearestFaceInside(clampedX, clampedZ, host)
    const ordered = [
      preferred,
      ...FACE_ORDER.filter((f) => f !== preferred),
    ]

    for (const face of ordered) {
      if (faceAlreadyOccupied(primitives, host.id, face, typeId, excludeId)) {
        continue
      }
      return computeWallAttachment(host, face, typeId)
    }

    return null
  }

  // Panels — exterior snap
  let best: WallAttachmentTarget | null = null
  let bestDist = Infinity

  for (const host of hosts) {
    for (const face of FACE_ORDER) {
      if (faceAlreadyOccupied(primitives, host.id, face, typeId, excludeId)) {
        continue
      }
      const target = computeWallAttachment(host, face, typeId)
      if (!target) continue

      const planeDist = distToFacePlane(worldX, worldZ, host, face)
      if (Math.abs(planeDist) > 2.5) continue

      const dist = Math.hypot(worldX - target.center.x, worldZ - target.center.z)
      if (dist < bestDist) {
        bestDist = dist
        best = target
      }
    }
  }

  return best
}

/** Drop wall attachments whose host module no longer exists (e.g. after merge). */
export function pruneOrphanAttachments(primitives: PlacedPrimitive[]) {
  const ids = new Set(primitives.map((p) => p.id))
  return primitives.filter((p) => {
    if (!p.hostId) return true
    return ids.has(p.hostId)
  })
}
