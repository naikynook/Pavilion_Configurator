import { lazy, Suspense, useEffect } from 'react'
import { LeftSidebar } from '../sidebar/LeftSidebar'
import { RightSidebar } from '../sidebar/RightSidebar'
import { useDesignStore } from '../../store/designStore'
import { ErrorBoundary } from '../ui/ErrorBoundary'

const Viewport3DPanel = lazy(() =>
  import('../canvas/Viewport3D').then((module) => ({ default: module.Viewport3DPanel })),
)

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
          <Suspense fallback={<div className="canvas-loading">Loading 3D view…</div>}>
            <Viewport3DPanel />
          </Suspense>
        </ErrorBoundary>
      </main>
      <RightSidebar />
    </div>
  )
}
