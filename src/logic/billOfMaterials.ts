import type { BaseHeightFt, PlacedPrimitive, PrimitiveTypeId } from '../types'
import { isModuleType } from '../constants/primitives'

/** Legacy: beams on a lone 4×4 (perimeter posts + top ring). */
export const BEAMS_PER_4X4 = 8
export const VERTICAL_BEAMS_PER_4X4 = 4
export const HORIZONTAL_BEAMS_PER_4X4 = 4
export const BEAM_VERTICAL_FT = 8
export const BEAM_HORIZONTAL_FT = 4

/**
 * Nominal 4×4 sheet area used by the original base formula (walls + top).
 * Ordered as 4×8 sheets (same McMaster plywood SKU): two 4×4 units = one 4×8.
 */
export const PLYWOOD_SHEET_FT = 4
export const PLYWOOD_SHEET_AREA_SQ_FT = PLYWOOD_SHEET_FT * PLYWOOD_SHEET_FT
export const PLYWOOD_4X8_AREA_SQ_FT = 4 * 8
/** Wall panel cut files use two full 4×8 sheets stacked. */
export const PLYWOOD_SHEETS_4X8_PER_PANEL = 2
/** One stool’s five panels fit on a single 4×4 sheet (~11 sq ft). */
export const PLYWOOD_SHEETS_4X4_PER_STOOL = 1

/** Hardware per steel frame (4 corners). */
export const FEET_PER_FRAME = 4
export const WOOD_SCREWS_PER_FOOT = 4
export const WOOD_SCREWS_PER_FRAME = FEET_PER_FRAME * WOOD_SCREWS_PER_FOOT // 16
export const XYZ_BOLTS_PER_CORNER = 3
export const XYZ_BOLTS_PER_FRAME = FEET_PER_FRAME * XYZ_BOLTS_PER_CORNER // 12
export const XYZ_NUTS_PER_FRAME = XYZ_BOLTS_PER_FRAME // 12

/**
 * 2×4 framing for one 4×4 plywood base (from User Instruction Manual).
 * Horizontal layers: perimeter (4) + internal braces (4) = 8 sticks / layer.
 * 1 ft & 2 ft → top + bottom; 3 ft → top + middle + bottom.
 * Verticals: 3×3 post grid (9); 3 ft uses two stud tiers (18).
 * All sticks ordered as 48″ pieces (SKU length choice).
 */
export const LUMBER_2X4_LENGTH_IN = 48
export const LUMBER_HORIZONTAL_PIECES_PER_LAYER = 8
export const LUMBER_POSTS_PER_TIER = 9

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
    name: '3/4" plywood sheet (4×8 ft)',
    productUrl: 'https://www.mcmaster.com/products/1125t614/',
    catalogUrl:
      'https://www.mcmaster.com/products/plywood/width~48/length~96/thickness~3-4/',
  },
  lumber2x4: {
    sku: '3577N134',
    name: 'Grade 2 softwood board, 2×4 trade size',
    productUrl: 'https://www.mcmaster.com/3577N134/',
    lengthIn: LUMBER_2X4_LENGTH_IN,
  },
  /** Foot for 1-7/8" high rail — drop-in mounting foot at each post. */
  foot: {
    sku: '4931T193',
    name: 'Foot for 1-7/8" high rail (bolt-together framing)',
    productUrl: 'https://www.mcmaster.com/4931T193/',
    packSize: 1,
  },
  /** Hex wood screws anchoring each foot into the plywood box (4 per foot). */
  woodScrew: {
    sku: '91478A842',
    name: 'Zinc-plated hex head wood screw, 3/4" × 4"',
    productUrl: 'https://www.mcmaster.com/91478A842/',
    packSize: 5,
  },
  /** ~5" through-bolts for XYZ corner joints (3 per corner). */
  throughBolt: {
    sku: '91247A689',
    name: 'Grade 5 hex head screw, 7/16"-14 × 5"',
    productUrl: 'https://www.mcmaster.com/91247A689/',
    packSize: 10,
  },
  /** Nuts for the XYZ through-bolts. */
  hexNut: {
    sku: '95462A032',
    name: 'Grade 5 hex nut, 7/16"-14',
    productUrl: 'https://www.mcmaster.com/95462A032/',
    packSize: 100,
  },
} as const

export interface BaseBoxGroup {
  baseHeight: BaseHeightFt
  /** Number of discrete 4×4 plywood boxes (even after merges). */
  boxCount: number
  /** Estimated 4×4 sheet-units for exterior (4 walls + top) of these boxes. */
  plywoodSheets: number
  /** 48″ 2×4 sticks for the internal lumber frame of these boxes. */
  lumber2x4: number
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
  /** Placed wall panels. */
  wallPanelCount: number
  /** Placed stools. */
  stoolCount: number
  /** Base exteriors only, in original 4×4 sheet-units (H+1 per box). */
  plywoodBaseSheets4x4: number
  /** 4×4 sheet-units for stools (1 per stool). */
  plywoodStoolSheets4x4: number
  /** Full 4×8 sheets for wall panels (2 per panel). */
  plywoodPanelSheets4x8: number
  /**
   * Total 4×8 plywood sheets to order (same SKU).
   * Bases + stools convert 4×4 units → ceil(n/2); panels add 2 each.
   */
  plywoodSheets: number
  /** Total 48″ 2×4 sticks for all base boxes. */
  lumber2x4: number
  /** Mounting feet (1 per corner post). */
  mountingFeet: number
  /** Individual wood screws (4 per foot). */
  woodScrews: number
  /** Packs of wood screws to order. */
  woodScrewPacks: number
  /** Individual 5" XYZ through-bolts. */
  throughBolts: number
  /** Packs of through-bolts to order. */
  throughBoltPacks: number
  /** Individual hex nuts for XYZ joints. */
  hexNuts: number
  /** Packs of hex nuts to order. */
  hexNutPacks: number
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

function packsNeeded(pieces: number, packSize: number) {
  if (pieces <= 0) return 0
  return Math.ceil(pieces / packSize)
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

/**
 * Stud clear height between plates (inches), from the instruction manual:
 * 1 ft flat plates → 9"; 2 ft on-edge plates → 17"; 3 ft two tiers → 12.75" each.
 */
export function lumberStudLengthIn(baseHeight: BaseHeightFt): number {
  if (baseHeight === 1) return 9
  if (baseHeight === 2) return 17
  return 12.75
}

export function lumberHorizontalLayers(baseHeight: BaseHeightFt): number {
  return baseHeight === 3 ? 3 : 2
}

export function lumberVerticalPostCount(baseHeight: BaseHeightFt): number {
  return baseHeight === 3 ? LUMBER_POSTS_PER_TIER * 2 : LUMBER_POSTS_PER_TIER
}

/** 48″ 2×4 sticks needed for one 4×4 base box at the given height. */
export function lumber2x4ForBox(baseHeight: BaseHeightFt): number {
  const horizontal =
    lumberHorizontalLayers(baseHeight) * LUMBER_HORIZONTAL_PIECES_PER_LAYER
  const studIn = lumberStudLengthIn(baseHeight)
  const postsPerBoard = Math.max(1, Math.floor(LUMBER_2X4_LENGTH_IN / studIn))
  const vertical = Math.ceil(lumberVerticalPostCount(baseHeight) / postsPerBoard)
  return horizontal + vertical
}

/** Convert accumulated 4×4 sheet-units into 4×8 order quantity. */
export function fourByFourUnitsToFourByEightSheets(units4x4: number): number {
  if (units4x4 <= 0) return 0
  return Math.ceil(units4x4 / 2)
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
  let wallPanelCount = 0
  let stoolCount = 0

  for (const primitive of primitives) {
    if (primitive.typeId === 'panel8x8') {
      wallPanelCount += 1
      continue
    }
    if (primitive.typeId === 'stool') {
      stoolCount += 1
      continue
    }

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
        lumber2x4: boxCount * lumber2x4ForBox(baseHeight),
      }
    })
    .filter((group) => group.boxCount > 0)

  const fourByFourCount = baseBoxes.reduce((sum, g) => sum + g.boxCount, 0)
  const plywoodBaseSheets4x4 = baseBoxes.reduce((sum, g) => sum + g.plywoodSheets, 0)
  const plywoodStoolSheets4x4 = stoolCount * PLYWOOD_SHEETS_4X4_PER_STOOL
  const plywoodPanelSheets4x8 = wallPanelCount * PLYWOOD_SHEETS_4X8_PER_PANEL
  const plywoodSheets =
    fourByFourUnitsToFourByEightSheets(
      plywoodBaseSheets4x4 + plywoodStoolSheets4x4,
    ) + plywoodPanelSheets4x8
  const lumber2x4 = baseBoxes.reduce((sum, g) => sum + g.lumber2x4, 0)

  const mountingFeet = steelFrameCount * FEET_PER_FRAME
  const woodScrews = steelFrameCount * WOOD_SCREWS_PER_FRAME
  const woodScrewPacks = packsNeeded(woodScrews, MCMASTER.woodScrew.packSize)
  const throughBolts = steelFrameCount * XYZ_BOLTS_PER_FRAME
  const throughBoltPacks = packsNeeded(throughBolts, MCMASTER.throughBolt.packSize)
  const hexNuts = steelFrameCount * XYZ_NUTS_PER_FRAME
  const hexNutPacks = packsNeeded(hexNuts, MCMASTER.hexNut.packSize)

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
    const parts: string[] = []
    if (plywoodBaseSheets4x4 > 0) {
      parts.push(
        `bases ${plywoodBaseSheets4x4}×4×4-eq → ${fourByFourUnitsToFourByEightSheets(plywoodBaseSheets4x4)}×4×8`,
      )
    }
    if (plywoodStoolSheets4x4 > 0) {
      parts.push(`${stoolCount} stool${stoolCount === 1 ? '' : 's'}`)
    }
    if (plywoodPanelSheets4x8 > 0) {
      parts.push(
        `${wallPanelCount} panel${wallPanelCount === 1 ? '' : 's'} × ${PLYWOOD_SHEETS_4X8_PER_PANEL} sheets`,
      )
    }
    orderLines.push({
      id: 'plywood',
      sku: MCMASTER.plywood.sku,
      name: MCMASTER.plywood.name,
      detail: parts.join(' · '),
      quantity: plywoodSheets,
      productUrl: MCMASTER.plywood.productUrl,
    })
  }
  if (lumber2x4 > 0) {
    const heightBits = baseBoxes
      .map((g) => `${g.boxCount}× ${g.baseHeight} ft → ${g.lumber2x4}`)
      .join('; ')
    orderLines.push({
      id: 'lumber-2x4',
      sku: MCMASTER.lumber2x4.sku,
      name: MCMASTER.lumber2x4.name,
      detail: `${LUMBER_2X4_LENGTH_IN}" length · ${heightBits}`,
      quantity: lumber2x4,
      productUrl: MCMASTER.lumber2x4.productUrl,
    })
  }
  if (mountingFeet > 0) {
    orderLines.push({
      id: 'foot',
      sku: MCMASTER.foot.sku,
      name: MCMASTER.foot.name,
      detail: `${FEET_PER_FRAME} per frame (1 at each corner post)`,
      quantity: mountingFeet,
      productUrl: MCMASTER.foot.productUrl,
    })
  }
  if (woodScrewPacks > 0) {
    orderLines.push({
      id: 'wood-screw',
      sku: MCMASTER.woodScrew.sku,
      name: MCMASTER.woodScrew.name,
      detail: `${woodScrews} screws · ${WOOD_SCREWS_PER_FOOT}/foot · pack of ${MCMASTER.woodScrew.packSize}`,
      quantity: woodScrewPacks,
      productUrl: MCMASTER.woodScrew.productUrl,
    })
  }
  if (throughBoltPacks > 0) {
    orderLines.push({
      id: 'through-bolt',
      sku: MCMASTER.throughBolt.sku,
      name: MCMASTER.throughBolt.name,
      detail: `${throughBolts} bolts · ${XYZ_BOLTS_PER_CORNER}/XYZ corner · pack of ${MCMASTER.throughBolt.packSize}`,
      quantity: throughBoltPacks,
      productUrl: MCMASTER.throughBolt.productUrl,
    })
  }
  if (hexNutPacks > 0) {
    orderLines.push({
      id: 'hex-nut',
      sku: MCMASTER.hexNut.sku,
      name: MCMASTER.hexNut.name,
      detail: `${hexNuts} nuts · 1 per through-bolt · pack of ${MCMASTER.hexNut.packSize}`,
      quantity: hexNutPacks,
      productUrl: MCMASTER.hexNut.productUrl,
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
    wallPanelCount,
    stoolCount,
    plywoodBaseSheets4x4,
    plywoodStoolSheets4x4,
    plywoodPanelSheets4x8,
    plywoodSheets,
    lumber2x4,
    mountingFeet,
    woodScrews,
    woodScrewPacks,
    throughBolts,
    throughBoltPacks,
    hexNuts,
    hexNutPacks,
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
    `Plywood: ${bom.plywoodSheets} × 4×8 ft sheets (${MCMASTER.plywood.sku}) — bases ${bom.plywoodBaseSheets4x4}×4×4-eq, stools ${bom.plywoodStoolSheets4x4}×4×4-eq, panels ${bom.plywoodPanelSheets4x8}×4×8`,
    `2×4 lumber: ${bom.lumber2x4} × ${LUMBER_2X4_LENGTH_IN}" (${MCMASTER.lumber2x4.sku})`,
    `Wall panels: ${bom.wallPanelCount} · stools: ${bom.stoolCount}`,
    `Mounting feet: ${bom.mountingFeet} (${MCMASTER.foot.sku})`,
    `Wood screws: ${bom.woodScrews} pcs → ${bom.woodScrewPacks} packs (${MCMASTER.woodScrew.sku})`,
    `Through-bolts: ${bom.throughBolts} pcs → ${bom.throughBoltPacks} packs (${MCMASTER.throughBolt.sku})`,
    `Hex nuts: ${bom.hexNuts} pcs → ${bom.hexNutPacks} packs (${MCMASTER.hexNut.sku})`,
    `4×4 base boxes: ${bom.fourByFourCount}`,
    '',
    MCMASTER.ordersUrl,
  ].join('\n')
}

/** Opens the McMaster orders page (clipboard should already hold the paste list). */
export function getMcMasterOrdersUrl() {
  return MCMASTER.ordersUrl
}
