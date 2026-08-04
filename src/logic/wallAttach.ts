import type {
  PlacedPrimitive,
  PrimitiveTypeId,
  WallAttachmentTarget,
  WallFace,
} from '../types'
import {
  PANEL_EDGE_CLEARANCE_FT,
  PANEL_THICKNESS_FT,
  STEEL_EDGE_INSET_FT,
  STEEL_HEIGHT_FT,
  getPrimitiveDefinition,
  isModuleType,
} from '../constants/primitives'
import {
  BENCH_BAY_FT,
  BENCH_DEPTH_FT,
  BENCH_SEAT_HEIGHT_FT,
  benchBackSetbackFt,
  benchLengthForWall,
  benchSlotsAlong,
} from '../three/createFurniture'

const FACE_ORDER: WallFace[] = ['south', 'east', 'north', 'west']

/** @deprecated use benchBackSetbackFt() — kept for call sites */
export const BENCH_STEEL_SETBACK_FT = STEEL_EDGE_INSET_FT + 0.2

export {
  BENCH_BAY_FT,
  BENCH_DEPTH_FT,
  BENCH_SEAT_HEIGHT_FT,
  benchLengthForWall,
}
export const BENCH_TOTAL_HEIGHT_FT = BENCH_SEAT_HEIGHT_FT

/** How far past a wall the pointer can be and still snap (ft). */
const PANEL_SNAP_FT = 4.5
const BENCH_CAPTURE_MARGIN_FT = 1.75
/** Keep current wall until another is this much closer (normalized 0–1). */
const FACE_STICKY_RATIO = 1.2

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
 * Panels: one per face. Benches: checked separately by 4 ft bay slots.
 */
function faceAlreadyOccupied(
  primitives: PlacedPrimitive[],
  hostId: string,
  face: WallFace,
  typeId: PrimitiveTypeId,
  excludeId?: string,
) {
  if (typeId === 'bench') return false
  return primitives.some((p) => {
    if (p.id === excludeId || p.hostId !== hostId || p.face !== face) return false
    if (isPanelType(typeId)) return isPanelType(p.typeId)
    return p.typeId === typeId
  })
}

function benchSlotTaken(
  primitives: PlacedPrimitive[],
  hostId: string,
  face: WallFace,
  slotAlong: number,
  excludeId?: string,
) {
  return primitives.some((p) => {
    if (
      p.id === excludeId ||
      p.typeId !== 'bench' ||
      p.hostId !== hostId ||
      p.face !== face ||
      p.attachAlong == null
    ) {
      return false
    }
    return Math.abs(p.attachAlong - slotAlong) < 0.05
  })
}

function pickBenchSlot(
  wallWidth: number,
  preferredAlong: number,
  primitives: PlacedPrimitive[],
  hostId: string,
  face: WallFace,
  excludeId?: string,
): number | null {
  const slots = benchSlotsAlong(wallWidth)
  if (slots.length === 0) return null

  const ranked = [...slots].sort(
    (a, b) => Math.abs(a - preferredAlong) - Math.abs(b - preferredAlong),
  )
  for (const slot of ranked) {
    if (!benchSlotTaken(primitives, hostId, face, slot, excludeId)) {
      return slot
    }
  }
  return null
}

function cursorAlongWall(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
  face: WallFace,
) {
  const hx = host.gridX
  const hz = host.gridZ
  if (face === 'north' || face === 'south') return worldX - hx
  return worldZ - hz
}

/** Nearest wall from a point inside the module (normalized distances). */
function faceDistancesInside(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
): Record<WallFace, number> {
  const nx = (worldX - host.gridX) / Math.max(host.size[0], 1e-6)
  const nz = (worldZ - host.gridZ) / Math.max(host.size[2], 1e-6)
  return {
    south: nz,
    north: 1 - nz,
    west: nx,
    east: 1 - nx,
  }
}

function nearestFaceInside(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
  stickyFace?: WallFace | null,
): WallFace {
  const dists = faceDistancesInside(worldX, worldZ, host)
  let best: WallFace = 'south'
  let bestDist = Infinity
  for (const face of FACE_ORDER) {
    if (dists[face] < bestDist) {
      bestDist = dists[face]
      best = face
    }
  }
  if (stickyFace && dists[stickyFace] <= bestDist * FACE_STICKY_RATIO) {
    return stickyFace
  }
  return best
}

export interface WallAttachPoseOptions {
  /** World cursor / ray hit used to choose a 4 ft bay along the wall */
  cursor?: { x: number; z: number } | null
  /** Explicit along-wall center (ft from face min edge) — used when rebuilding */
  along?: number | null
  /** Needed to pick a free bay when placing from a cursor */
  primitives?: PlacedPrimitive[]
  excludeId?: string
}

/**
 * World pose for a wall-attached item on a host module face.
 * Panels sit on the outer face; benches sit inside, set back from the steel.
 */
export function computeWallAttachment(
  host: PlacedPrimitive,
  face: WallFace,
  typeId: PrimitiveTypeId,
  options: WallAttachPoseOptions = {},
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
    if (wallWidth + 1e-6 < BENCH_BAY_FT) return null

    const depth = BENCH_DEPTH_FT
    const height = BENCH_TOTAL_HEIGHT_FT
    const length = benchLengthForWall(wallWidth)
    const setback = benchBackSetbackFt()
    const primitives = options.primitives ?? []

    let along = options.along ?? null
    if (along == null) {
      const preferred = options.cursor
        ? cursorAlongWall(options.cursor.x, options.cursor.z, host, face)
        : wallWidth / 2
      along = pickBenchSlot(
        wallWidth,
        preferred,
        primitives,
        host.id,
        face,
        options.excludeId,
      )
    }
    if (along == null) return null

    let centerX = hx + hw / 2
    let centerZ = hz + hd / 2
    let rotationY = 0
    let size: [number, number, number] = [length, height, depth]

    switch (face) {
      case 'south':
        centerX = hx + along
        centerZ = hz + setback + depth / 2
        rotationY = 0
        size = [length, height, depth]
        break
      case 'north':
        centerX = hx + along
        centerZ = hz + hd - setback - depth / 2
        rotationY = Math.PI
        size = [length, height, depth]
        break
      case 'west':
        centerX = hx + setback + depth / 2
        centerZ = hz + along
        rotationY = Math.PI / 2
        size = [depth, height, length]
        break
      case 'east':
        centerX = hx + hw - setback - depth / 2
        centerZ = hz + along
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
      attachAlong: along,
    }
  }

  // Wall panels: outer face of the inset steel bay
  const panelW =
    wallWidth - 2 * STEEL_EDGE_INSET_FT - PANEL_EDGE_CLEARANCE_FT
  const panelH = STEEL_HEIGHT_FT - PANEL_EDGE_CLEARANCE_FT
  const t = PANEL_THICKNESS_FT
  const inset = STEEL_EDGE_INSET_FT
  let centerX = hx + hw / 2
  let centerZ = hz + hd / 2
  let rotationY = 0
  let size: [number, number, number] = [panelW, panelH, t]

  switch (face) {
    case 'south':
      centerZ = hz + inset - t / 2
      rotationY = 0
      size = [panelW, panelH, t]
      break
    case 'north':
      centerZ = hz + hd - inset + t / 2
      rotationY = Math.PI
      size = [panelW, panelH, t]
      break
    case 'west':
      centerX = hx + inset - t / 2
      rotationY = Math.PI / 2
      size = [t, panelH, panelW]
      break
    case 'east':
      centerX = hx + hw - inset + t / 2
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

/** Lateral distance past the wall segment ends (0 = on the wall). */
function lateralOverhang(
  worldX: number,
  worldZ: number,
  host: PlacedPrimitive,
  face: WallFace,
) {
  const hx = host.gridX
  const hz = host.gridZ
  const [hw, , hd] = host.size
  if (face === 'north' || face === 'south') {
    if (worldX < hx) return hx - worldX
    if (worldX > hx + hw) return worldX - (hx + hw)
    return 0
  }
  if (worldZ < hz) return hz - worldZ
  if (worldZ > hz + hd) return worldZ - (hz + hd)
  return 0
}

/**
 * Intersect a camera ray with a module wall plane and return the hit if it
 * lands on (or near) that wall rectangle.
 */
function rayHitWallFace(
  origin: { x: number; y: number; z: number },
  direction: { x: number; y: number; z: number },
  host: PlacedPrimitive,
  face: WallFace,
  padFt = 1.25,
): { x: number; y: number; z: number; t: number } | null {
  const hx = host.gridX
  const hz = host.gridZ
  const [hw, , hd] = host.size
  const baseY = host.baseHeight ?? 1
  const yMin = baseY - 0.5
  const yMax = baseY + STEEL_HEIGHT_FT + 1.5

  let planeX = 0
  let planeZ = 0
  let nx = 0
  let nz = 0
  switch (face) {
    case 'south':
      planeZ = hz + STEEL_EDGE_INSET_FT
      nz = -1
      break
    case 'north':
      planeZ = hz + hd - STEEL_EDGE_INSET_FT
      nz = 1
      break
    case 'west':
      planeX = hx + STEEL_EDGE_INSET_FT
      nx = -1
      break
    case 'east':
      planeX = hx + hw - STEEL_EDGE_INSET_FT
      nx = 1
      break
  }

  const denom = nx * direction.x + nz * direction.z
  if (Math.abs(denom) < 1e-6) return null

  const t =
    face === 'south' || face === 'north'
      ? (planeZ - origin.z) / direction.z
      : (planeX - origin.x) / direction.x
  if (t < 0.05 || t > 80) return null

  const x = origin.x + direction.x * t
  const y = origin.y + direction.y * t
  const z = origin.z + direction.z * t
  if (y < yMin || y > yMax) return null

  if (face === 'south' || face === 'north') {
    if (x < hx - padFt || x > hx + hw + padFt) return null
  } else if (z < hz - padFt || z > hz + hd + padFt) {
    return null
  }

  return { x, y, z, t }
}

export interface WallAttachPickOptions {
  /** Previous face — reduces flicker near corners while dragging. */
  stickyFace?: WallFace | null
  /** Camera ray for aiming at walls in 3D (preferred over ground alone). */
  ray?: {
    origin: { x: number; y: number; z: number }
    direction: { x: number; y: number; z: number }
  } | null
}

/**
 * Pick the closest valid wall face near a world XZ point (and optional camera ray).
 * Benches: nearest wall from inside the module (auto-orients as you move).
 * Panels: exterior face near the cursor / ray.
 */
export function findWallAttachmentNear(
  worldX: number,
  worldZ: number,
  typeId: PrimitiveTypeId,
  primitives: PlacedPrimitive[],
  excludeId?: string,
  options: WallAttachPickOptions = {},
): WallAttachmentTarget | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def || def.kind !== 'wallAttach') return null

  const hosts = primitives.filter((p) => isModuleType(p.typeId))
  const isBench = typeId === 'bench'
  const { stickyFace = null, ray = null } = options

  // Prefer aiming directly at a wall in the 3D view
  if (ray) {
    let bestRay: {
      target: WallAttachmentTarget
      t: number
    } | null = null

    for (const host of hosts) {
      for (const face of FACE_ORDER) {
        if (faceAlreadyOccupied(primitives, host.id, face, typeId, excludeId)) {
          continue
        }
        const hit = rayHitWallFace(ray.origin, ray.direction, host, face)
        if (!hit) continue
        const target = computeWallAttachment(host, face, typeId, {
          cursor: { x: hit.x, z: hit.z },
          primitives,
          excludeId,
        })
        if (!target) continue
        if (!bestRay || hit.t < bestRay.t) {
          bestRay = { target, t: hit.t }
        }
      }
    }

    if (bestRay) return bestRay.target
  }

  if (isBench) {
    let containing: PlacedPrimitive | null = null
    let containingDist = Infinity

    for (const host of hosts) {
      const margin = BENCH_CAPTURE_MARGIN_FT
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
      const score = inside ? dist : dist + 50
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

    const preferred = nearestFaceInside(clampedX, clampedZ, host, stickyFace)
    const ordered = [
      preferred,
      ...FACE_ORDER.filter((f) => f !== preferred),
    ]

    for (const face of ordered) {
      const target = computeWallAttachment(host, face, typeId, {
        cursor: { x: clampedX, z: clampedZ },
        primitives,
        excludeId,
      })
      if (!target) continue
      return target
    }

    return null
  }

  // Panels — exterior snap from ground cursor
  let best: WallAttachmentTarget | null = null
  let bestScore = Infinity

  for (const host of hosts) {
    for (const face of FACE_ORDER) {
      if (faceAlreadyOccupied(primitives, host.id, face, typeId, excludeId)) {
        continue
      }
      const target = computeWallAttachment(host, face, typeId)
      if (!target) continue

      const planeDist = distToFacePlane(worldX, worldZ, host, face)
      const absPlane = Math.abs(planeDist)
      if (absPlane > PANEL_SNAP_FT) continue

      const lateral = lateralOverhang(worldX, worldZ, host, face)
      if (lateral > 2) continue

      // Prefer near the wall plane; slight bias to exterior side
      const sideBias = planeDist >= -0.35 ? 0 : 0.75
      const score = absPlane + lateral * 0.5 + sideBias
      if (score < bestScore) {
        bestScore = score
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
