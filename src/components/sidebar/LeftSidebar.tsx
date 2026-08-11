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
  const activePanelColor = useDesignStore((s) => s.activePanelColor)
  const selectedPrimitiveId = useDesignStore((s) => s.selectedPrimitiveId)
  const primitives = useDesignStore((s) => s.primitives)
  const setBoundingBox = useDesignStore((s) => s.setBoundingBox)
  const setActiveTool = useDesignStore((s) => s.setActiveTool)
  const setActivePrimitiveType = useDesignStore((s) => s.setActivePrimitiveType)
  const setActiveBaseHeight = useDesignStore((s) => s.setActiveBaseHeight)
  const setActivePanelColor = useDesignStore((s) => s.setActivePanelColor)
  const setPrimitiveColor = useDesignStore((s) => s.setPrimitiveColor)
  const removeSelected = useDesignStore((s) => s.removeSelected)
  const clearPrimitives = useDesignStore((s) => s.clearPrimitives)

  const selected = primitives.find((p) => p.id === selectedPrimitiveId)
  const selectedIsPanel = selected?.typeId === 'panel8x8'
  const editingPanelColor = selectedIsPanel
  const panelColorValue = selectedIsPanel
    ? selected?.color ?? null
    : activePanelColor
  const pickerColor = panelColorValue ?? '#d4c4a8'

  const applyPanelColor = (color: string | null) => {
    if (editingPanelColor && selectedPrimitiveId) {
      setPrimitiveColor(selectedPrimitiveId, color)
    } else {
      setActivePanelColor(color)
    }
  }

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
                max={100}
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
                max={100}
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
          Bases stay as separate 4×4 boxes joined with furniture slider connectors.
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
          Adjacent frames combine steel into a 4×8 or 8×8, but the plywood bases
          stay as individual 4×4 boxes with slider connectors. Same base height
          required to join.
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
          Two-sheet ~90″ for an 8×8 bay — snaps to an exterior wall, or flat on
          the roof. Use plywood texture, or pick a solid paint color.
        </p>
        <div className="tool-list">
          {PANEL_DEFINITIONS.map((def) => (
            <ToolItem
              key={def.id}
              label={def.name}
              description={def.description}
              active={activePrimitiveType === def.id}
              previewColor={panelColorValue ?? def.color}
              onClick={() =>
                setActivePrimitiveType(
                  activePrimitiveType === def.id ? null : def.id,
                )
              }
            />
          ))}
        </div>

        <div className="panel-color">
          <div className="panel-color__label">
            {editingPanelColor ? 'Selected panel finish' : 'Panel finish'}
          </div>
          <div className="panel-color__row">
            <button
              type="button"
              className={
                panelColorValue == null
                  ? 'panel-color__plywood panel-color__plywood--active'
                  : 'panel-color__plywood'
              }
              onClick={() => applyPanelColor(null)}
            >
              Plywood
            </button>
            <label className="panel-color__picker" title="Solid color">
              <input
                type="color"
                value={pickerColor}
                onChange={(e) => applyPanelColor(e.target.value)}
                aria-label="Panel color"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="sidebar__section">
        <h2 className="sidebar__section-title">Furniture</h2>
        <p className="sidebar__hint">
          Stools are 18″ square and snap to free quadrants on each 4×4 plywood
          base — clear of steel tubes, foot plates, and the gaps between boxes.
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
