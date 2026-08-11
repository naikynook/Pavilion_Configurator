/**
 * Lets React UI call into the live Three.js viewport without prop drilling.
 */

export interface ViewportExportApi {
  /** True when at least one primitive is in the scene. */
  hasDesign: () => boolean
  /** Download an untextured Draco GLB (Rhino / Blender compatible). */
  exportDesignGlb: () => Promise<{
    filename: string
    meshCount: number
    byteSize: number
    rawByteSize: number
  }>
  /** Download a Quick Look–optimized USDZ for iPhone AR (Files app). */
  exportDesignUsdz: () => Promise<{
    filename: string
    meshCount: number
    byteSize: number
    triangleCount: number
  }>
}

let api: ViewportExportApi | null = null

export function registerViewportExport(next: ViewportExportApi | null) {
  api = next
}

export function getViewportExport() {
  return api
}
