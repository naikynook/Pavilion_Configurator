import type { PlacedPrimitive } from '../types'
import { MODULE_4_SIZE, getPrimitiveDefinition } from '../constants/primitives'

interface FourSquareMatch {
  originX: number
  originZ: number
  moduleIds: string[]
}

/**
 * Find a 2×2 of adjacent 4×4 modules (SW / SE / NW / NE) that can become one 8×8.
 */
export function findFourSquareOf4x4(
  primitives: PlacedPrimitive[],
): FourSquareMatch | null {
  const blocks = primitives.filter((p) => p.typeId === 'block')
  if (blocks.length < 4) return null

  const byOrigin = new Map(blocks.map((b) => [`${b.gridX},${b.gridZ}`, b]))

  for (const block of blocks) {
    const x = block.gridX
    const z = block.gridZ
    const corners = [
      byOrigin.get(`${x},${z}`),
      byOrigin.get(`${x + MODULE_4_SIZE},${z}`),
      byOrigin.get(`${x},${z + MODULE_4_SIZE}`),
      byOrigin.get(`${x + MODULE_4_SIZE},${z + MODULE_4_SIZE}`),
    ]

    if (corners.every(Boolean)) {
      return {
        originX: x,
        originZ: z,
        moduleIds: corners.map((c) => c!.id),
      }
    }
  }

  return null
}

/** Replace every completed 2×2 of 4×4 modules with a single 8×8 module. */
export function mergeFourSquares(primitives: PlacedPrimitive[]): PlacedPrimitive[] {
  let next = primitives
  const def8 = getPrimitiveDefinition('block8')
  if (!def8) return primitives

  // Loop in case multiple disjoint 2×2 groups exist
  for (;;) {
    const match = findFourSquareOf4x4(next)
    if (!match) break

    const ids = new Set(match.moduleIds)
    const remaining = next.filter((p) => !ids.has(p.id))
    const combined: PlacedPrimitive = {
      id: crypto.randomUUID(),
      typeId: 'block8',
      gridX: match.originX,
      gridZ: match.originZ,
      size: def8.size,
    }
    next = [...remaining, combined]
  }

  return next
}
