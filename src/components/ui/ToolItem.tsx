import type { ReactNode } from 'react'

interface ToolItemProps {
  label: string
  description?: string
  active?: boolean
  onClick: () => void
  icon?: ReactNode
  previewColor?: string
}

export function ToolItem({
  label,
  description,
  active,
  onClick,
  icon,
  previewColor,
}: ToolItemProps) {
  return (
    <button
      type="button"
      className={`tool-item${active ? ' tool-item--active' : ''}`}
      onClick={onClick}
    >
      {previewColor ? (
        <span className="tool-item__preview" style={{ background: previewColor }} />
      ) : (
        icon && <span className="tool-item__icon">{icon}</span>
      )}
      <span className="tool-item__text">
        <span className="tool-item__label">{label}</span>
        {description && <span className="tool-item__description">{description}</span>}
      </span>
    </button>
  )
}
