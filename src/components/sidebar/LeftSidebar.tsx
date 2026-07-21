import { useDesignStore } from '../../store/designStore'
import {
  BASE_HEIGHT_OPTIONS,
  FRAME_DEFINITIONS,
  FURNITURE_DEFINITIONS,
  PANEL_DEFINITIONS,
} from '../../constants/primitives'
import { ToolItem } from '../ui/ToolItem'

function SelectIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 13l6 6" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

export function LeftSidebar() {
  const boundingBox = useDesignStore((s) => s.boundingBox)
  const activeTool = useDesignStore((s) => s.activeTool)
  const activePrimitiveType = useDesignStore((s) => s.activePrimitiveType)
  const activeBaseHeight = useDesignStore((s) => s.activeBaseHeight)
  const selectedPrimitiveId = useDesignStore((s) => s.selectedPrimitiveId)
  const setBoundingBox = useDesignStore((s) => s.setBoundingBox)
  const setActiveTool = useDesignStore((s) => s.setActiveTool)
  const setActivePrimitiveType = useDesignStore((s) => s.setActivePrimitiveType)
  const setActiveBaseHeight = useDesignStore((s) => s.setActiveBaseHeight)
  const removeSelected = useDesignStore((s) => s.removeSelected)
  const clearPrimitives = useDesignStore((s) => s.clearPrimitives)

  return (
    <aside className="sidebar sidebar--left">
      <header className="sidebar__header">
        <h1 className="sidebar__title">Pavilion</h1>
        <p className="sidebar__subtitle">Configurator</p>
      </header>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Tools</h2>
        <ToolItem
          label="Select"
          description="Click to select primitives"
          active={activeTool === 'select'}
          onClick={() => setActiveTool('select')}
          icon={<SelectIcon />}
        />
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Site setup</h2>
        <div className="bounding-box-controls">
          <div className="bounding-box-controls__header">
            <BoxIcon />
            <span>Bounding box</span>
          </div>
          <div className="input-row">
            <label>
              Width
              <input
                type="number"
                min={4}
                max={30}
                value={boundingBox.width}
                onChange={(e) =>
                  setBoundingBox({ width: Math.max(4, Number(e.target.value)) })
                }
              />
            </label>
            <label>
              Depth
              <input
                type="number"
                min={4}
                max={30}
                value={boundingBox.depth}
                onChange={(e) =>
                  setBoundingBox({ depth: Math.max(4, Number(e.target.value)) })
                }
              />
            </label>
            <label>
              Height
              <input
                type="number"
                min={2}
                max={20}
                value={boundingBox.height}
                onChange={(e) =>
                  setBoundingBox({ height: Math.max(2, Number(e.target.value)) })
                }
              />
            </label>
          </div>
        </div>
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Base height</h2>
        <p className="sidebar__hint">
          Choose the plywood plinth height, then pick a steel frame to place on top.
        </p>
        <div className="segmented" role="group" aria-label="Base height">
          {BASE_HEIGHT_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              className={
                activeBaseHeight === option.value
                  ? 'segmented__btn segmented__btn--active'
                  : 'segmented__btn'
              }
              onClick={() => setActiveBaseHeight(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Steel frame</h2>
        <p className="sidebar__hint">
          Two 4×4s connect into a 4×8; a full square becomes an 8×8. Modules only
          merge when they share the same base height.
        </p>
        <div className="tool-list">
          {FRAME_DEFINITIONS.map((def) => (
            <ToolItem
              key={def.id}
              label={def.name}
              description={def.description}
              active={activePrimitiveType === def.id}
              previewColor={def.color}
              onClick={() =>
                setActivePrimitiveType(
                  activePrimitiveType === def.id ? null : def.id,
                )
              }
            />
          ))}
        </div>
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Wall panels</h2>
        <p className="sidebar__hint">
          Aim at a matching wall in the 3D view (4 ft or 8 ft bay) — the panel
          snaps when you point at or near that face.
        </p>
        <div className="tool-list">
          {PANEL_DEFINITIONS.map((def) => (
            <ToolItem
              key={def.id}
              label={def.name}
              description={def.description}
              active={activePrimitiveType === def.id}
              previewColor={def.color}
              onClick={() =>
                setActivePrimitiveType(
                  activePrimitiveType === def.id ? null : def.id,
                )
              }
            />
          ))}
        </div>
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Furniture</h2>
        <p className="sidebar__hint">
          Aim at a wall or hover inside a module — the bench turns to that wall
          and sits clear of the steel so a panel can still go on that face.
        </p>
        <div className="tool-list">
          {FURNITURE_DEFINITIONS.map((def) => (
            <ToolItem
              key={def.id}
              label={def.name}
              description={def.description}
              active={activePrimitiveType === def.id}
              previewColor={def.color}
              onClick={() =>
                setActivePrimitiveType(
                  activePrimitiveType === def.id ? null : def.id,
                )
              }
            />
          ))}
        </div>
      </section>

      <section className="sidebar__section sidebar__section--footer">
        {selectedPrimitiveId && (
          <button type="button" className="btn btn--secondary" onClick={removeSelected}>
            Remove selected
          </button>
        )}
        <button type="button" className="btn btn--ghost" onClick={clearPrimitives}>
          Clear all
        </button>
      </section>
    </aside>
  )
}
