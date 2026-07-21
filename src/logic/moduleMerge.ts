import type { BaseHeightFt, PlacedPrimitive } from '../types'
import {
  MODULE_4_SIZE,
  STEEL_HEIGHT_FT,
  getModuleSize,
  getPrimitiveDefinition,
  isModuleType,
} from '../constants/primitives'

interface MergeMatch {
  originX: number
  originZ: number
  moduleIds: string[]
  typeId: 'block4x8' | 'block8'
  size: [number, number, number]
  baseHeight: BaseHeightFt
  rotationY?: number
}

function key(x: number, z: number) {
  return `${x},${z}`
}

function sameBase(a: PlacedPrimitive, b: PlacedPrimitive) {
  return (a.baseHeight ?? 1) === (b.baseHeight ?? 1)
}

function moduleBase(p: PlacedPrimitive): BaseHeightFt {
  return p.baseHeight ?? 1
}

function replaceMatch(
  primitives: PlacedPrimitive[],
  match: MergeMatch,
): PlacedPrimitive[] {
  const ids = new Set(match.moduleIds)
  const remaining = primitives.filter((p) => !ids.has(p.id))
  const combined: PlacedPrimitive = {
    id: crypto.randomUUID(),
    typeId: match.typeId,
    gridX: match.originX,
    gridZ: match.originZ,
    size: match.size,
    baseHeight: match.baseHeight,
    rotationY: match.rotationY ?? 0,
  }
  return [...remaining, combined]
}

/** Four 4×4s in a 2×2 square → 8×8 */
function findFour4x4Square(primitives: PlacedPrimitive[]): MergeMatch | null {
  const blocks = primitives.filter((p) => p.typeId === 'block' && isModuleType(p.typeId))
  if (blocks.length < 4) return null
  const byOrigin = new Map(blocks.map((b) => [key(b.gridX, b.gridZ), b]))
  const def8 = getPrimitiveDefinition('block8')
  if (!def8) return null

  for (const block of blocks) {
    const x = block.gridX
    const z = block.gridZ
    const corners = [
      byOrigin.get(key(x, z)),
      byOrigin.get(key(x + MODULE_4_SIZE, z)),
      byOrigin.get(key(x, z + MODULE_4_SIZE)),
      byOrigin.get(key(x + MODULE_4_SIZE, z + MODULE_4_SIZE)),
    ]
    if (
      corners.every(Boolean) &&
      corners.every((c) => sameBase(c!, block))
    ) {
      const size = getModuleSize('block8', moduleBase(block))!
      return {
        originX: x,
        originZ: z,
        moduleIds: corners.map((c) => c!.id),
        typeId: 'block8',
        size,
        baseHeight: moduleBase(block),
      }
    }
  }
  return null
}

/** Two 4×8s that together make an 8×8 square */
function findTwo4x8Square(primitives: PlacedPrimitive[]): MergeMatch | null {
  const mods = primitives.filter((p) => p.typeId === 'block4x8')
  if (mods.length < 2) return null

  // Vertical 4×8 (footprint 4×8): pair side-by-side → 8×8
  for (const a of mods) {
    if (a.size[0] !== 4 || a.size[2] !== 8) continue
    const b = mods.find(
      (m) =>
        m.id !== a.id &&
        sameBase(m, a) &&
        m.size[0] === 4 &&
        m.size[2] === 8 &&
        m.gridX === a.gridX + MODULE_4_SIZE &&
        m.gridZ === a.gridZ,
    )
    if (b) {
      return {
        originX: a.gridX,
        originZ: a.gridZ,
        moduleIds: [a.id, b.id],
        typeId: 'block8',
        size: getModuleSize('block8', moduleBase(a))!,
        baseHeight: moduleBase(a),
      }
    }
  }

  // Horizontal 4×8 (footprint 8×4): pair stacked in Z → 8×8
  for (const a of mods) {
    if (a.size[0] !== 8 || a.size[2] !== 4) continue
    const b = mods.find(
      (m) =>
        m.id !== a.id &&
        sameBase(m, a) &&
        m.size[0] === 8 &&
        m.size[2] === 4 &&
        m.gridX === a.gridX &&
        m.gridZ === a.gridZ + MODULE_4_SIZE,
    )
    if (b) {
      return {
        originX: a.gridX,
        originZ: a.gridZ,
        moduleIds: [a.id, b.id],
        typeId: 'block8',
        size: getModuleSize('block8', moduleBase(a))!,
        baseHeight: moduleBase(a),
      }
    }
  }

  return null
}

/**
 * One 4×8 + two 4×4s completing an 8×8 square.
 */
function find4x8PlusTwo4x4(primitives: PlacedPrimitive[]): MergeMatch | null {
  const fours = primitives.filter((p) => p.typeId === 'block')
  const eights = primitives.filter((p) => p.typeId === 'block4x8')
  if (fours.length < 2 || eights.length < 1) return null

  const fourByOrigin = new Map(fours.map((b) => [key(b.gridX, b.gridZ), b]))

  for (const strip of eights) {
    // Vertical strip 4×8 on the west: need 4×4s at (x+4,z) and (x+4,z+4)
    if (strip.size[0] === 4 && strip.size[2] === 8) {
      const x = strip.gridX
      const z = strip.gridZ
      const a = fourByOrigin.get(key(x + MODULE_4_SIZE, z))
      const b = fourByOrigin.get(key(x + MODULE_4_SIZE, z + MODULE_4_SIZE))
      if (a && b && sameBase(a, strip) && sameBase(b, strip)) {
        return {
          originX: x,
          originZ: z,
          moduleIds: [strip.id, a.id, b.id],
          typeId: 'block8',
          size: getModuleSize('block8', moduleBase(strip))!,
          baseHeight: moduleBase(strip),
        }
      }
      // Vertical strip on the east: strip at (x+4,z), 4×4s at (x,z) and (x,z+4)
      const c = fourByOrigin.get(key(x - MODULE_4_SIZE, z))
      const d = fourByOrigin.get(key(x - MODULE_4_SIZE, z + MODULE_4_SIZE))
      if (c && d && sameBase(c, strip) && sameBase(d, strip)) {
        return {
          originX: x - MODULE_4_SIZE,
          originZ: z,
          moduleIds: [strip.id, c.id, d.id],
          typeId: 'block8',
          size: getModuleSize('block8', moduleBase(strip))!,
          baseHeight: moduleBase(strip),
        }
      }
    }

    // Horizontal strip 8×4 on the south: need 4×4s at (x,z+4) and (x+4,z+4)
    if (strip.size[0] === 8 && strip.size[2] === 4) {
      const x = strip.gridX
      const z = strip.gridZ
      const a = fourByOrigin.get(key(x, z + MODULE_4_SIZE))
      const b = fourByOrigin.get(key(x + MODULE_4_SIZE, z + MODULE_4_SIZE))
      if (a && b && sameBase(a, strip) && sameBase(b, strip)) {
        return {
          originX: x,
          originZ: z,
          moduleIds: [strip.id, a.id, b.id],
          typeId: 'block8',
          size: getModuleSize('block8', moduleBase(strip))!,
          baseHeight: moduleBase(strip),
        }
      }
      // Horizontal strip on the north: strip at (x,z+4), 4×4s at (x,z) and (x+4,z)
      const c = fourByOrigin.get(key(x, z - MODULE_4_SIZE))
      const d = fourByOrigin.get(key(x + MODULE_4_SIZE, z - MODULE_4_SIZE))
      if (c && d && sameBase(c, strip) && sameBase(d, strip)) {
        return {
          originX: x,
          originZ: z - MODULE_4_SIZE,
          moduleIds: [strip.id, c.id, d.id],
          typeId: 'block8',
          size: getModuleSize('block8', moduleBase(strip))!,
          baseHeight: moduleBase(strip),
        }
      }
    }
  }

  return null
}

/** Two adjacent 4×4s → one 4×8 (oriented to match the connection) */
function findTwo4x4Pair(primitives: PlacedPrimitive[]): MergeMatch | null {
  const blocks = primitives.filter((p) => p.typeId === 'block')
  if (blocks.length < 2) return null

  const byOrigin = new Map(blocks.map((b) => [key(b.gridX, b.gridZ), b]))

  for (const a of blocks) {
    // Connected along Z → footprint 4×8
    const north = byOrigin.get(key(a.gridX, a.gridZ + MODULE_4_SIZE))
    if (north && sameBase(north, a)) {
      return {
        originX: a.gridX,
        originZ: a.gridZ,
        moduleIds: [a.id, north.id],
        typeId: 'block4x8',
        size: [4, moduleBase(a) + STEEL_HEIGHT_FT, 8],
        baseHeight: moduleBase(a),
        rotationY: 0,
      }
    }
    // Connected along X → footprint 8×4 (rotated model)
    const east = byOrigin.get(key(a.gridX + MODULE_4_SIZE, a.gridZ))
    if (east && sameBase(east, a)) {
      return {
        originX: a.gridX,
        originZ: a.gridZ,
        moduleIds: [a.id, east.id],
        typeId: 'block4x8',
        size: [8, moduleBase(a) + STEEL_HEIGHT_FT, 4],
        baseHeight: moduleBase(a),
        rotationY: Math.PI / 2,
      }
    }
  }

  return null
}

/**
 * Apply pavilion module merges until stable:
 * 1) Any completed 8×8 (four 4×4s, two 4×8s, or 4×8+two 4×4s)
 * 2) Then pairs of 4×4s → 4×8
 * Only modules with the same base height merge together.
 */
export function mergeModules(primitives: PlacedPrimitive[]): PlacedPrimitive[] {
  let next = primitives

  for (;;) {
    const eight =
      findFour4x4Square(next) ??
      findTwo4x8Square(next) ??
      find4x8PlusTwo4x4(next)
    if (eight) {
      next = replaceMatch(next, eight)
      continue
    }

    const pair = findTwo4x4Pair(next)
    if (pair) {
      next = replaceMatch(next, pair)
      continue
    }

    break
  }

  return next
}

/** @deprecated use mergeModules */
export function mergeFourSquares(primitives: PlacedPrimitive[]) {
  return mergeModules(primitives)
}
