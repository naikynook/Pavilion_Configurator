import type {
  PlacedPrimitive,
  PrimitiveTypeId,
  WallAttachmentTarget,
  WallFace,
} from '../types'
import {
  PANEL_BASE_LIFT_FT,
  STEEL_EDGE_INSET_FT,
  STEEL_FOOT_LIFT_FT,
  STEEL_HEIGHT_FT,
  getPanelDisplaySize,
  getPrimitiveDefinition,
  isModuleType,
  steelOuterFaceOffsetFt,
} from '../constants/primitives'

/** Vertical wall faces (side panels). */
type SideFace = 'north' | 'south' | 'east' | 'west'
const FACE_ORDER: SideFace[] = ['south', 'east', 'north', 'west']
/** Panels can also snap to the roof. */
const PANEL_FACE_ORDER: WallFace[] = [...FACE_ORDER, 'top']

/** How far past a wall the pointer can be and still snap (ft). */
const PANEL_SNAP_FT = 4.5

function wallWidthForFace(host: PlacedPrimitive, face: WallFace) {
  if (face === 'top') {
    // Roof uses the same 8×8 panel sizing as a full-width wall
    return Math.min(host.size[0], host.size[2])
  }
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
  return typeId === 'panel8x8'
}

/**
 * Only block another item of the same role on that face.
 * Panels: one per face.
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
    if (isPanelType(typeId)) return isPanelType(p.typeId)
    return p.typeId === typeId
  })
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
 * Side panels sit on the outer face; roof panels lie flat on top of the frame;
 *  */
export function computeWallAttachment(
  host: PlacedPrimitive,
  face: WallFace,
  typeId: PrimitiveTypeId,
  _options: WallAttachPoseOptions = {},
): WallAttachmentTarget | null {
  const def = getPrimitiveDefinition(typeId)
  if (!def || def.kind !== 'wallAttach') return null

  const baseY = host.baseHeight ?? 1
  const hx = host.gridX
  const hz = host.gridZ
  const [hw, , hd] = host.size

  // —— Roof panel (flat on top of the steel) ——
  if (face === 'top') {
    if (typeId !== 'panel8x8') return null
    // 8×8 panel needs a full 8×8 bay
    if (hw + 1e-6 < 8 || hd + 1e-6 < 8) return null
    if (def.requiredWallWidth != null && def.requiredWallWidth !== 8) {
      return null
    }

    const wallWidth = 8
    const [panelW, panelH, t] = getPanelDisplaySize(wallWidth)
    const steelTop = baseY + STEEL_FOOT_LIFT_FT + STEEL_HEIGHT_FT
    const cx = hx + hw / 2
    const cz = hz + hd / 2

    // Roof: lay flat on the steel, then spin 90° around vertical (left↔right).
    // Viewport applies yaw on a parent group so it does not flip up/down.
    return {
      hostId: host.id,
      face: 'top',
      center: {
        x: cx,
        y: steelTop,
        z: cz,
      },
      rotationY: Math.PI / 2,
      rotationX: -Math.PI / 2,
      size: [panelH, t, panelW],
      wallWidth,
    }
  }

  const wallWidth = wallWidthForFace(host, face)
  if (def.requiredWallWidth != null && def.requiredWallWidth !== wallWidth) {
    return null
  }

  // Side wall panels: on the OUTSIDE of the frame — back flush to the tube’s
  // outer face, thickness pointing out. (AABB includes foot plates outboard
  // of the tube, so seat uses the measured outer-face offset.)
  const [panelW, panelH, t] = getPanelDisplaySize(wallWidth)
  const inset = STEEL_EDGE_INSET_FT
  const seat = steelOuterFaceOffsetFt(wallWidth)
  let centerX = hx + hw / 2
  let centerZ = hz + hd / 2
  let rotationY = 0
  let size: [number, number, number] = [panelW, panelH, t]

  switch (face) {
    case 'south':
      // Outer face of south posts; +Z out of bay
      centerZ = hz + inset + seat
      rotationY = Math.PI
      size = [panelW, panelH, t]
      break
    case 'north':
      centerZ = hz + hd - inset - seat
      rotationY = 0
      size = [panelW, panelH, t]
      break
    case 'west':
      centerX = hx + inset + seat
      rotationY = -Math.PI / 2
      size = [t, panelH, panelW]
      break
    case 'east':
      centerX = hx + hw - inset - seat
      rotationY = Math.PI / 2
      size = [t, panelH, panelW]
      break
  }

  return {
    hostId: host.id,
    face,
    center: {
      x: centerX,
      // Bottom of panel 1½″ above plywood lid (mesh is bottom-origin)
      y: baseY + PANEL_BASE_LIFT_FT,
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
    case 'top':
      // Horizontal roof — use distance from footprint center in XZ
      return Math.hypot(
        worldX - (hx + hw / 2),
        worldZ - (hz + hd / 2),
      )
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
  if (face === 'top') {
    if (pointInsideHost(worldX, worldZ, host)) return 0
    const dx =
      worldX < hx
        ? hx - worldX
        : worldX > hx + hw
          ? worldX - (hx + hw)
          : 0
    const dz =
      worldZ < hz
        ? hz - worldZ
        : worldZ > hz + hd
          ? worldZ - (hz + hd)
          : 0
    return Math.hypot(dx, dz)
  }
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
 * Intersect a camera ray with a module wall / roof plane and return the hit
 * if it lands on (or near) that face rectangle.
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
  const steelTopY = baseY + STEEL_FOOT_LIFT_FT + STEEL_HEIGHT_FT
  const yMin = baseY - 0.5
  // Keep side-wall hits below the roof so aiming at the top doesn’t
  // register as a vertical face first.
  const yMax = steelTopY - 0.6

  if (face === 'top') {
    if (Math.abs(direction.y) < 1e-6) return null
    const t = (steelTopY - origin.y) / direction.y
    if (t < 0.05 || t > 80) return null
    const x = origin.x + direction.x * t
    const z = origin.z + direction.z * t
    // Tighter pad — must actually be over / near the footprint
    const topPad = 0.35
    if (
      x < hx - topPad ||
      x > hx + hw + topPad ||
      z < hz - topPad ||
      z > hz + hd + topPad
    ) {
      return null
    }
    return { x, y: steelTopY, z, t }
  }

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
 * Panels: exterior face or roof near the cursor / ray.
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
  const isPanel = isPanelType(typeId)
  const faceOrder = isPanel ? PANEL_FACE_ORDER : FACE_ORDER
  const { stickyFace = null, ray = null } = options

  // Prefer aiming directly at a wall / roof in the 3D view
  if (ray) {
    let bestRay: {
      target: WallAttachmentTarget
      score: number
    } | null = null

    const lookingDown = ray.direction.y < -0.08

    for (const host of hosts) {
      for (const face of faceOrder) {
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

        let score = hit.t
        if (face === 'top') {
          // Looking down onto the bay → strongly prefer the roof
          const overBay = pointInsideHost(hit.x, hit.z, host)
          if (lookingDown && overBay) score -= 8
          else if (lookingDown) score -= 2
          else if (overBay) score -= 1
          if (stickyFace === 'top') score -= 0.5
        } else if (lookingDown && isPanel) {
          // Soft-penalize side walls while aiming at the roof
          score += 1.25
        }

        if (!bestRay || score < bestRay.score) {
          bestRay = { target, score }
        }
      }
    }

    if (bestRay) return bestRay.target
  }

  // Panels — exterior / roof snap from ground cursor
  let best: WallAttachmentTarget | null = null
  let bestScore = Infinity

  for (const host of hosts) {
    for (const face of faceOrder) {
      if (faceAlreadyOccupied(primitives, host.id, face, typeId, excludeId)) {
        continue
      }
      const target = computeWallAttachment(host, face, typeId)
      if (!target) continue

      if (face === 'top') {
        if (!pointInsideHost(worldX, worldZ, host)) continue
        const cx = host.gridX + host.size[0] / 2
        const cz = host.gridZ + host.size[2] / 2
        const nx =
          (worldX - host.gridX) / Math.max(host.size[0], 1e-6)
        const nz =
          (worldZ - host.gridZ) / Math.max(host.size[2], 1e-6)
        const edgeProx = Math.min(nx, 1 - nx, nz, 1 - nz)
        // Anywhere inside the bay can be the roof; only the outer ~10%
        // of the footprint stays reserved for side-wall snaps.
        if (edgeProx < 0.1 && stickyFace !== 'top') continue
        const score =
          (0.5 - edgeProx) * 2 +
          Math.hypot(worldX - cx, worldZ - cz) * 0.05 +
          (stickyFace === 'top' ? -1 : 0)
        if (score < bestScore) {
          bestScore = score
          best = target
        }
        continue
      }

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
