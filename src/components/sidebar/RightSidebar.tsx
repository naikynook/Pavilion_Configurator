import { useDesignStore, useMaterialSummary } from '../../store/designStore'

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

export function RightSidebar() {
  const boundingBox = useDesignStore((s) => s.boundingBox)
  const primitives = useDesignStore((s) => s.primitives)
  const materials = useMaterialSummary()

  const totalPieces = primitives.length

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
          <span className="stat-card__meta">W × D × H (units)</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__label">Total pieces</span>
          <span className="stat-card__value">{totalPieces}</span>
        </div>
      </section>

      <section className="sidebar__section">
        <h3 className="sidebar__section-title">Material list</h3>
        {materials.length === 0 ? (
          <p className="sidebar__empty">
            Place primitives in the canvas to see required materials.
          </p>
        ) : (
          <div className="material-list">
            {materials.map((item) => (
              <div key={item.typeId} className="material-card">
                <div className="material-card__header">
                  <span className="material-card__name">{item.name}</span>
                  <span className="material-card__count">×{item.count}</span>
                </div>
                <p className="material-card__dimensions">{item.dimensions}</p>
                <p className="material-card__material">{item.materialLabel}</p>
              </div>
            ))}
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
        <div className="action-list">
          <button type="button" className="action-item" disabled>
            <ExternalLinkIcon />
            <span>Browse lumber</span>
            <span className="action-item__badge">Soon</span>
          </button>
          <button type="button" className="action-item" disabled>
            <ExternalLinkIcon />
            <span>Hardware & fasteners</span>
            <span className="action-item__badge">Soon</span>
          </button>
        </div>
      </section>
    </aside>
  )
}
