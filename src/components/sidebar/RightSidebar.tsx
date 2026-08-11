import { useState } from 'react'
import { useBillOfMaterials, useDesignStore } from '../../store/designStore'
import {
  BEAM_HORIZONTAL_FT,
  BEAM_VERTICAL_FT,
  formatMcMasterOrderText,
  formatMcMasterPasteList,
  getMcMasterOrdersUrl,
  MCMASTER,
} from '../../logic/billOfMaterials'
import { getViewportExport } from '../../three/viewportBridge'
import { formatBytes } from '../../three/exportDesignGlb'

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export function RightSidebar() {
  const boundingBox = useDesignStore((s) => s.boundingBox)
  const primitives = useDesignStore((s) => s.primitives)
  const bom = useBillOfMaterials()
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle')
  const [orderStatus, setOrderStatus] = useState<'idle' | 'ready'>('idle')
  const [exportStatus, setExportStatus] = useState<
    'idle' | 'exporting' | 'done' | 'error'
  >('idle')
  const [exportMessage, setExportMessage] = useState('')
  const [arExportStatus, setArExportStatus] = useState<
    'idle' | 'exporting' | 'done' | 'error'
  >('idle')
  const [arExportMessage, setArExportMessage] = useState('')

  const hasMaterials = bom.orderLines.length > 0
  const pasteList = hasMaterials ? formatMcMasterPasteList(bom) : ''
  const ordersUrl = getMcMasterOrdersUrl()
  const canExportGlb = primitives.length > 0 && exportStatus !== 'exporting'
  const canExportAr = primitives.length > 0 && arExportStatus !== 'exporting'

  const handleExportGlb = async () => {
    const viewport = getViewportExport()
    if (!viewport) {
      setExportStatus('error')
      setExportMessage('3D view is not ready yet.')
      return
    }
    setExportStatus('exporting')
    setExportMessage('Building & compressing GLB… the page should stay responsive.')
    try {
      const result = await viewport.exportDesignGlb()
      setExportStatus('done')
      setExportMessage(
        `Saved ${result.filename} · ${formatBytes(result.byteSize)}` +
          ` (${result.meshCount} meshes, was ${formatBytes(result.rawByteSize)} uncompressed).`,
      )
      window.setTimeout(() => setExportStatus('idle'), 4000)
    } catch (error) {
      setExportStatus('error')
      setExportMessage(
        error instanceof Error ? error.message : 'Export failed.',
      )
    }
  }

  const handleExportUsdz = async () => {
    const viewport = getViewportExport()
    if (!viewport) {
      setArExportStatus('error')
      setArExportMessage('3D view is not ready yet.')
      return
    }
    setArExportStatus('exporting')
    setArExportMessage('')
    try {
      const result = await viewport.exportDesignUsdz()
      setArExportStatus('done')
      setArExportMessage(
        `Saved ${result.filename} · ${formatBytes(result.byteSize)}` +
          ` · ${result.triangleCount.toLocaleString()} tris` +
          ` (${result.meshCount} meshes). Open in Files on iPhone for AR.`,
      )
      window.setTimeout(() => setArExportStatus('idle'), 5000)
    } catch (error) {
      setArExportStatus('error')
      setArExportMessage(
        error instanceof Error ? error.message : 'AR export failed.',
      )
    }
  }

  const copyPasteList = async () => {
    if (!pasteList) return false
    try {
      await navigator.clipboard.writeText(pasteList)
      setCopyStatus('copied')
      window.setTimeout(() => setCopyStatus('idle'), 2500)
      return true
    } catch {
      try {
        await navigator.clipboard.writeText(formatMcMasterOrderText(bom))
        setCopyStatus('copied')
        window.setTimeout(() => setCopyStatus('idle'), 2500)
        return true
      } catch {
        setCopyStatus('idle')
        return false
      }
    }
  }

  const openMcMasterOrder = async () => {
    const copied = await copyPasteList()
    window.open(ordersUrl, '_blank', 'noopener,noreferrer')
    if (copied) {
      setOrderStatus('ready')
      window.setTimeout(() => setOrderStatus('idle'), 6000)
    }
  }

  return (
    <aside className="sidebar sidebar--right">
      <header className="sidebar__header">
        <h2 className="sidebar__heading">Materials</h2>
        <p className="sidebar__subtitle">Live bill of materials</p>
      </header>

      <section className="sidebar__section">
        <div className="stat-card">
          <span className="stat-card__label">Site dimensions</span>
          <span className="stat-card__value">
            {boundingBox.width} × {boundingBox.depth} × {boundingBox.height}
          </span>
          <span className="stat-card__meta">W × D × H (ft)</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">4×4 base boxes</span>
          <span className="stat-card__value">{bom.fourByFourCount}</span>
          <span className="stat-card__meta">
            {bom.baseBoxes.length > 0
              ? bom.baseBoxes
                  .map((g) => `${g.boxCount}× 4×4 × ${g.baseHeight} ft`)
                  .join(' · ')
              : 'Counted even after merges'}
          </span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Steel frames</span>
          <span className="stat-card__value">{bom.steelFrameCount}</span>
          <span className="stat-card__meta">
            {bom.steelFrames.length > 0
              ? bom.steelFrames.map((f) => `${f.count}× ${f.label} ft`).join(' · ')
              : 'After merges'}
          </span>
        </div>
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__section-title">Material list</h3>
        {!hasMaterials ? (
          <p className="sidebar__empty">
            Place modules in the canvas to see required materials.
          </p>
        ) : (
          <div className="material-list">
            {bom.steelBeams8ft > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">
                    Steel beams · {BEAM_VERTICAL_FT} ft
                  </span>
                  <span className="material-card__count">×{bom.steelBeams8ft}</span>
                </div>
                <p className="material-card__dimensions">
                  Corner posts + full-length top sides (8 ft) on each placed frame
                </p>
                <p className="material-card__material">
                  {MCMASTER.steel.name} · SKU {MCMASTER.steel.sku}
                </p>
              </div>
            )}

            {bom.steelBeams4ft > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">
                    Steel beams · {BEAM_HORIZONTAL_FT} ft
                  </span>
                  <span className="material-card__count">×{bom.steelBeams4ft}</span>
                </div>
                <p className="material-card__dimensions">
                  Short top-ring sides (4 ft) — not used on a pure 8×8 frame
                </p>
                <p className="material-card__material">
                  {MCMASTER.steel.name} · SKU {MCMASTER.steel.sku}
                </p>
              </div>
            )}

            {bom.plywoodSheets > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">Plywood sheets · 4×8 ft</span>
                  <span className="material-card__count">×{bom.plywoodSheets}</span>
                </div>
                <p className="material-card__dimensions">
                  Bases {bom.plywoodBaseSheets4x4}×4×4-eq
                  {bom.stoolCount > 0
                    ? ` · ${bom.stoolCount} stool${bom.stoolCount === 1 ? '' : 's'} (1×4×4-eq each)`
                    : ''}
                  {bom.wallPanelCount > 0
                    ? ` · ${bom.wallPanelCount} panel${bom.wallPanelCount === 1 ? '' : 's'} (2×4×8 each)`
                    : ''}
                </p>
                <p className="material-card__material">SKU {MCMASTER.plywood.sku}</p>
              </div>
            )}

            {bom.lumber2x4 > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">
                    2×4 lumber · {MCMASTER.lumber2x4.lengthIn}"
                  </span>
                  <span className="material-card__count">×{bom.lumber2x4}</span>
                </div>
                <p className="material-card__dimensions">
                  {bom.baseBoxes
                    .map(
                      (g) =>
                        `${g.boxCount}× ${g.baseHeight} ft base → ${g.lumber2x4} pcs`,
                    )
                    .join(' · ')}
                </p>
                <p className="material-card__material">
                  {MCMASTER.lumber2x4.name} · SKU {MCMASTER.lumber2x4.sku}
                </p>
              </div>
            )}

            {bom.mountingFeet > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">Mounting feet</span>
                  <span className="material-card__count">×{bom.mountingFeet}</span>
                </div>
                <p className="material-card__dimensions">
                  Drop-in post feet — 4 per steel frame
                </p>
                <p className="material-card__material">
                  {MCMASTER.foot.name} · SKU {MCMASTER.foot.sku}
                </p>
              </div>
            )}

            {bom.woodScrewPacks > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">Wood screws · 4″</span>
                  <span className="material-card__count">
                    ×{bom.woodScrewPacks} packs
                  </span>
                </div>
                <p className="material-card__dimensions">
                  {bom.woodScrews} screws (4 per foot) · pack of{' '}
                  {MCMASTER.woodScrew.packSize}
                </p>
                <p className="material-card__material">
                  {MCMASTER.woodScrew.name} · SKU {MCMASTER.woodScrew.sku}
                </p>
              </div>
            )}

            {bom.throughBoltPacks > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">Through-bolts · 5″</span>
                  <span className="material-card__count">
                    ×{bom.throughBoltPacks} packs
                  </span>
                </div>
                <p className="material-card__dimensions">
                  {bom.throughBolts} bolts (3 per XYZ corner) · pack of{' '}
                  {MCMASTER.throughBolt.packSize}
                </p>
                <p className="material-card__material">
                  {MCMASTER.throughBolt.name} · SKU {MCMASTER.throughBolt.sku}
                </p>
              </div>
            )}

            {bom.hexNutPacks > 0 && (
              <div className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">Hex nuts · 7/16″-14</span>
                  <span className="material-card__count">
                    ×{bom.hexNutPacks} packs
                  </span>
                </div>
                <p className="material-card__dimensions">
                  {bom.hexNuts} nuts (1 per through-bolt) · pack of{' '}
                  {MCMASTER.hexNut.packSize}
                </p>
                <p className="material-card__material">
                  {MCMASTER.hexNut.name} · SKU {MCMASTER.hexNut.sku}
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__section-title">Downloads</h3>
        <p className="sidebar__hint">
          Untextured GLB for Rhino or Blender — frames, bases, and wall panels as
          separate objects (meters, Draco-compressed for smaller files).
        </p>
        <div className="action-list">
          <button
            type="button"
            className="action-item"
            disabled={!canExportGlb}
            onClick={() => void handleExportGlb()}
          >
            <DownloadIcon />
            <span>
              {exportStatus === 'exporting'
                ? 'Exporting 3D…'
                : 'Download 3D (GLB)'}
            </span>
          </button>
          {exportMessage && (
            <p
              className={
                exportStatus === 'error'
                  ? 'sidebar__hint sidebar__hint--error'
                  : 'sidebar__hint'
              }
            >
              {exportMessage}
            </p>
          )}
        </div>
        <p className="sidebar__hint" style={{ marginTop: '12px' }}>
          iPhone AR — simplified USDZ for Quick Look. Download, AirDrop/open in
          Files, then tap to view in your space.
        </p>
        <div className="action-list">
          <button
            type="button"
            className="action-item"
            disabled={!canExportAr}
            onClick={() => void handleExportUsdz()}
          >
            <DownloadIcon />
            <span>
              {arExportStatus === 'exporting'
                ? 'Exporting AR…'
                : 'Download AR (USDZ)'}
            </span>
          </button>
          {arExportMessage && (
            <p
              className={
                arExportStatus === 'error'
                  ? 'sidebar__hint sidebar__hint--error'
                  : 'sidebar__hint'
              }
            >
              {arExportMessage}
            </p>
          )}
          <a
            className="action-item"
            href={`${import.meta.env.BASE_URL}instructions/Pavilion-Instructions.pdf`}
            download="Pavilion-Instructions.pdf"
          >
            <DownloadIcon />
            <span>Instruction file</span>
          </a>
          <button type="button" className="action-item" disabled>
            <DownloadIcon />
            <span>Cut list & dimensions</span>
            <span className="action-item__badge">Soon</span>
          </button>
        </div>
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__section-title">Purchase links</h3>
        <p className="sidebar__hint">
          McMaster cannot pre-fill the order form from a URL. This copies a paste-ready
          list, then opens{' '}
          <a href={ordersUrl} target="_blank" rel="noopener noreferrer">
            mcmaster.com/orders
          </a>
          . Use <strong>Paste products and quantities</strong>, then paste (Ctrl+V).
        </p>
        <div className="action-list">
          <button
            type="button"
            className="action-item action-item--primary"
            disabled={!hasMaterials}
            onClick={() => void openMcMasterOrder()}
          >
            <ExternalLinkIcon />
            <span>
              {orderStatus === 'ready'
                ? 'Orders opened — paste with Ctrl+V'
                : 'Open McMaster order (copy + link)'}
            </span>
          </button>
          <button
            type="button"
            className="action-item"
            disabled={!hasMaterials}
            onClick={() => void copyPasteList()}
          >
            <CopyIcon />
            <span>
              {copyStatus === 'copied' ? 'Paste list copied' : 'Copy paste list only'}
            </span>
          </button>
        </div>

        {hasMaterials && (
          <>
            <pre className="paste-preview" aria-label="McMaster paste list">
              {pasteList}
            </pre>
            <div className="purchase-list">
              {bom.orderLines.map((line) => (
                <a
                  key={line.id}
                  className="purchase-card"
                  href={ordersUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    event.preventDefault()
                    void openMcMasterOrder()
                  }}
                >
                  <div className="purchase-card__header">
                    <span className="purchase-card__sku">{line.sku}</span>
                    <span className="purchase-card__qty">×{line.quantity}</span>
                  </div>
                  <p className="purchase-card__name">{line.name}</p>
                  <p className="purchase-card__detail">{line.detail}</p>
                </a>
              ))}
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.steel.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">Steel product page</p>
                <p className="purchase-card__detail">
                  Confirm 4 ft / 8 ft length for {MCMASTER.steel.sku}
                </p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.plywood.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">Plywood product page</p>
                <p className="purchase-card__detail">SKU {MCMASTER.plywood.sku}</p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.lumber2x4.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">2×4 lumber</p>
                <p className="purchase-card__detail">
                  SKU {MCMASTER.lumber2x4.sku} · pick {MCMASTER.lumber2x4.lengthIn}" length
                </p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.foot.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">Mounting foot</p>
                <p className="purchase-card__detail">SKU {MCMASTER.foot.sku}</p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.woodScrew.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">Wood screws</p>
                <p className="purchase-card__detail">SKU {MCMASTER.woodScrew.sku}</p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.throughBolt.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">5″ through-bolts</p>
                <p className="purchase-card__detail">
                  SKU {MCMASTER.throughBolt.sku}
                </p>
              </a>
              <a
                className="purchase-card purchase-card--muted"
                href={MCMASTER.hexNut.productUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="purchase-card__name">Hex nuts</p>
                <p className="purchase-card__detail">SKU {MCMASTER.hexNut.sku}</p>
              </a>
            </div>
          </>
        )}
      </section>

      <section className="sidebar__section sidebar__section--footer">
        <h3 className="sidebar__section-title">Cut Files</h3>
        <p className="sidebar__hint">
          DWG cutouts for plywood parts (bolt holes included where applicable).
        </p>
        <div className="action-list">
          <a
            className="action-item"
            href={`${import.meta.env.BASE_URL}cut-files/Wall-Panel-Cut-File.dwg`}
            download="Wall-Panel-Cut-File.dwg"
          >
            <DownloadIcon />
            <span>Download Wall Panel Cut File</span>
          </a>
          <a
            className="action-item"
            href={`${import.meta.env.BASE_URL}cut-files/Stool-Cut-File.dwg`}
            download="Stool-Cut-File.dwg"
          >
            <DownloadIcon />
            <span>Download Stool Cut File</span>
          </a>
        </div>
      </section>
    </aside>
  )
}
