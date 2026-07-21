import type { BaseHeightFt, PlacedPrimitive, PrimitiveTypeId } from '../types'
import { isModuleType } from '../constants/primitives'

/** Legacy: beams on a lone 4×4 (perimeter posts + top ring). */
export const BEAMS_PER_4X4 = 8
export const VERTICAL_BEAMS_PER_4X4 = 4
export const HORIZONTAL_BEAMS_PER_4X4 = 4
export const BEAM_VERTICAL_FT = 8
export const BEAM_HORIZONTAL_FT = 4

/** Nominal plywood sheet used for exterior box panels (ft). */
export const PLYWOOD_SHEET_FT = 4
export const PLYWOOD_SHEET_AREA_SQ_FT = PLYWOOD_SHEET_FT * PLYWOOD_SHEET_FT

export const MCMASTER = {
  ordersUrl: 'https://www.mcmaster.com/orders/',
  steel: {
    sku: '6535K392',
    name: '2" perforated square tubing',
    productUrl: 'https://www.mcmaster.com/products/6535k392/',
    catalogUrl: 'https://www.mcmaster.com/products/perforated-square-tubing/',
  },
  plywood: {
    sku: '1125T614',
    name: '3/4" plywood sheet (4×4 ft)',
    productUrl: 'https://www.mcmaster.com/products/1125t614/',
    catalogUrl:
      'https://www.mcmaster.com/products/plywood/width~48/length~96/thickness~3-4/length~48/',
  },
} as const

export interface BaseBoxGroup {
  baseHeight: BaseHeightFt
  /** Number of discrete 4×4 plywood boxes (even after merges). */
  boxCount: number
  /** Estimated 4×4 sheets for exterior (4 walls + top) of these boxes. */
  plywoodSheets: number
}

export interface SteelFrameGroup {
  /** Footprint label, e.g. "4×4", "4×8", "8×8" */
  label: string
  typeId: PrimitiveTypeId
  count: number
}

export interface BillOfMaterials {
  /** Total 4×4 footprint units across the design. */
  fourByFourCount: number
  baseBoxes: BaseBoxGroup[]
  /** Placed steel frames after merges (one 8×8 counts as 1). */
  steelFrameCount: number
  /** Breakdown of steel frames by size. */
  steelFrames: SteelFrameGroup[]
  /** 8 ft members (corner posts + long top-ring sides). */
  steelBeams8ft: number
  /** 4 ft top-ring sides only. */
  steelBeams4ft: number
  /** Total steel pieces. */
  steelBeamTotal: number
  /** Total 4×4 plywood sheets to order. */
  plywoodSheets: number
  orderLines: McMasterOrderLine[]
}

export interface McMasterOrderLine {
  id: string
  sku: string
  name: string
  detail: string
  quantity: number
  productUrl: string
}

/** How many 4×4 cells a placed (possibly merged) module covers. */
export function countFourByFourUnits(primitive: PlacedPrimitive): number {
  const [w, , d] = primitive.size
  if (w < 4 || d < 4) return 0
  return Math.max(1, Math.round((w * d) / 16))
}

/**
 * Steel for one placed frame after merges.
 * Corner posts only (8 ft) + full-length top-ring members (4 ft or 8 ft per side).
 *   4×4 → 4 × 8 ft posts + 4 × 4 ft top
 *   4×8 → 4 × 8 ft posts + 2 × 8 ft + 2 × 4 ft top
 *   8×8 → 4 × 8 ft posts + 4 × 8 ft top  (= 8 × 8 ft, no 4 ft)
 */
export function countSteelForModule(primitive: PlacedPrimitive): {
  posts8ft: number
  beams8ft: number
  beams4ft: number
} {
  if (!isModuleType(primitive.typeId)) {
    return { posts8ft: 0, beams8ft: 0, beams4ft: 0 }
  }
  const [w, , d] = primitive.size
  const sideW = Math.round(w)
  const sideD = Math.round(d)

  // Four corner posts
  const posts8ft = 4

  // Top ring: one member per side at that side's full length
  let beams8ft = 0
  let beams4ft = 0
  for (const len of [sideW, sideW, sideD, sideD]) {
    if (len >= 8) beams8ft += 1
    else if (len >= 4) beams4ft += 1
  }

  return { posts8ft, beams8ft, beams4ft }
}

/**
 * Exterior plywood for one 4×4 box: four walls + top (no floor).
 * Area = 4 × (4 × H) + 16 = 16 × (H + 1) sq ft → H + 1 sheets of 4×4.
 */
export function plywoodSheetsForBox(baseHeight: BaseHeightFt): number {
  return baseHeight + 1
}

function frameLabelForModule(primitive: PlacedPrimitive): string {
  const [w, , d] = primitive.size
  const a = Math.round(Math.min(w, d))
  const b = Math.round(Math.max(w, d))
  return `${a}×${b}`
}

export function buildBillOfMaterials(primitives: PlacedPrimitive[]): BillOfMaterials {
  const byHeight = new Map<BaseHeightFt, number>()
  const byFrame = new Map<string, SteelFrameGroup>()
  let steelBeams8ft = 0
  let steelBeams4ft = 0
  let steelFrameCount = 0

  for (const primitive of primitives) {
    if (isModuleType(primitive.typeId)) {
      steelFrameCount += 1
      const steel = countSteelForModule(primitive)
      steelBeams8ft += steel.posts8ft + steel.beams8ft
      steelBeams4ft += steel.beams4ft

      const label = frameLabelForModule(primitive)
      const existing = byFrame.get(label)
      if (existing) {
        existing.count += 1
      } else {
        byFrame.set(label, {
          label,
          typeId: primitive.typeId,
          count: 1,
        })
      }
    }

    if (primitive.baseHeight == null) continue
    const units = countFourByFourUnits(primitive)
    if (units <= 0) continue
    byHeight.set(
      primitive.baseHeight,
      (byHeight.get(primitive.baseHeight) ?? 0) + units,
    )
  }

  const steelFrames = [...byFrame.values()].sort((a, b) => {
    const order = (label: string) => {
      if (label === '4×4') return 0
      if (label === '4×8') return 1
      if (label === '8×8') return 2
      return 3
    }
    return order(a.label) - order(b.label) || a.label.localeCompare(b.label)
  })

  const baseBoxes: BaseBoxGroup[] = ([1, 2, 3] as BaseHeightFt[])
    .map((baseHeight) => {
      const boxCount = byHeight.get(baseHeight) ?? 0
      return {
        baseHeight,
        boxCount,
        plywoodSheets: boxCount * plywoodSheetsForBox(baseHeight),
      }
    })
    .filter((group) => group.boxCount > 0)

  const fourByFourCount = baseBoxes.reduce((sum, g) => sum + g.boxCount, 0)
  const plywoodSheets = baseBoxes.reduce((sum, g) => sum + g.plywoodSheets, 0)

  const orderLines: McMasterOrderLine[] = []

  if (steelBeams8ft > 0) {
    orderLines.push({
      id: 'steel-8',
      sku: MCMASTER.steel.sku,
      name: MCMASTER.steel.name,
      detail: `${BEAM_VERTICAL_FT} ft length (posts + long top-ring sides)`,
      quantity: steelBeams8ft,
      productUrl: MCMASTER.steel.productUrl,
    })
  }
  if (steelBeams4ft > 0) {
    orderLines.push({
      id: 'steel-4',
      sku: MCMASTER.steel.sku,
      name: MCMASTER.steel.name,
      detail: `${BEAM_HORIZONTAL_FT} ft length (top ring)`,
      quantity: steelBeams4ft,
      productUrl: MCMASTER.steel.productUrl,
    })
  }
  if (plywoodSheets > 0) {
    orderLines.push({
      id: 'plywood',
      sku: MCMASTER.plywood.sku,
      name: MCMASTER.plywood.name,
      detail: 'Exterior panels for 4×4 bases (walls + top)',
      quantity: plywoodSheets,
      productUrl: MCMASTER.plywood.productUrl,
    })
  }

  return {
    fourByFourCount,
    baseBoxes,
    steelFrameCount,
    steelFrames,
    steelBeams8ft,
    steelBeams4ft,
    steelBeamTotal: steelBeams8ft + steelBeams4ft,
    plywoodSheets,
    orderLines,
  }
}

/**
 * Format expected by McMaster Order → “Paste products and quantities”:
 * one line per item as `PartNumber, Qty`
 * @see https://www.mcmaster.com/orders/
 */
export function formatMcMasterPasteList(bom: BillOfMaterials): string {
  return bom.orderLines.map((line) => `${line.sku}, ${line.quantity}`).join('\n')
}

/** Annotated list for the clipboard / user reference. */
export function formatMcMasterOrderText(bom: BillOfMaterials): string {
  if (bom.orderLines.length === 0) return ''
  const paste = formatMcMasterPasteList(bom)
  const notes = bom.orderLines.map(
    (line) => `${line.sku}\t${line.quantity}\t# ${line.name} — ${line.detail}`,
  )
  return [
    'McMaster-Carr paste list (Order → Paste products and quantities)',
    paste,
    '',
    'Notes',
    ...notes,
    '',
    `Steel frames: ${bom.steelFrameCount}${
      bom.steelFrames.length
        ? ` (${bom.steelFrames.map((f) => `${f.count}× ${f.label}`).join(', ')})`
        : ''
    }`,
    `Steel lengths: ${bom.steelBeams8ft} × ${BEAM_VERTICAL_FT} ft + ${bom.steelBeams4ft} × ${BEAM_HORIZONTAL_FT} ft (${MCMASTER.steel.sku})`,
    `Plywood: ${bom.plywoodSheets} × 4×4 ft sheets (${MCMASTER.plywood.sku})`,
    `4×4 base boxes: ${bom.fourByFourCount}`,
    '',
    MCMASTER.ordersUrl,
  ].join('\n')
}

/** Opens the McMaster orders page (clipboard should already hold the paste list). */
export function getMcMasterOrdersUrl() {
  return MCMASTER.ordersUrl
}
