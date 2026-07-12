import { useEffect } from 'react'
import { LeftSidebar } from '../sidebar/LeftSidebar'
import { RightSidebar } from '../sidebar/RightSidebar'
import { Viewport3DPanel } from '../canvas/Viewport3D'
import { useDesignStore } from '../../store/designStore'
import { ErrorBoundary } from '../ui/ErrorBoundary'

export function AppLayout() {
  const removeSelected = useDesignStore((s) => s.removeSelected)
  const selectedPrimitiveId = useDesignStore((s) => s.selectedPrimitiveId)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && selectedPrimitiveId) {
        e.preventDefault()
        removeSelected()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [removeSelected, selectedPrimitiveId])

  return (
    <div className="app-layout">
      <LeftSidebar />
      <main className="app-main">
        <ErrorBoundary>
          <Viewport3DPanel />
        </ErrorBoundary>
      </main>
      <RightSidebar />
    </div>
  )
}
