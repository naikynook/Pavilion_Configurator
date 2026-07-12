import { useDesignStore } from '../../store/designStore'
import { PRIMITIVE_DEFINITIONS } from '../../constants/primitives'
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
  const selectedPrimitiveId = useDesignStore((s) => s.selectedPrimitiveId)
  const setBoundingBox = useDesignStore((s) => s.setBoundingBox)
  const setActiveTool = useDesignStore((s) => s.setActiveTool)
  const setActivePrimitiveType = useDesignStore((s) => s.setActivePrimitiveType)
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
        <h2 className="sidebar__section-title">Primitives</h2>
        <p className="sidebar__hint">Select a primitive, then click the grid to place it.</p>
        <div className="tool-list">
          {PRIMITIVE_DEFINITIONS.map((def) => (
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
