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
  const bom = useBillOfMaterials()
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle')
  const [orderStatus, setOrderStatus] = useState<'idle' | 'ready'>('idle')

  const hasMaterials = bom.fourByFourCount > 0
  const pasteList = hasMaterials ? formatMcMasterPasteList(bom) : ''
  const ordersUrl = getMcMasterOrdersUrl()

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

            <div className="material-card">
              <div className="material-card__header">
                <span className="material-card__name">Plywood sheets · 4×4 ft</span>
                <span className="material-card__count">×{bom.plywoodSheets}</span>
              </div>
              <p className="material-card__dimensions">
                Total for all base exteriors (walls + top)
              </p>
              <p className="material-card__material">SKU {MCMASTER.plywood.sku}</p>
            </div>
          </div>
        )}
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__section-title">Downloads</h3>
        <div className="action-list">
          <button type="button" className="action-item" disabled>
            <DownloadIcon />
            <span>Instruction file</span>
            <span className="action-item__badge">Soon</span>
          </button>
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
            </div>
          </>
        )}
      </section>
    </aside>
  )
}
