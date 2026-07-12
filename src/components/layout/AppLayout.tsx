import { useEffect } from 'react'
import { Scene3D } from '../canvas/Scene3D'
import { LeftSidebar } from '../sidebar/LeftSidebar'
import { RightSidebar } from '../sidebar/RightSidebar'
import { useDesignStore } from '../../store/designStore'

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
        <Scene3D />
      </main>
      <RightSidebar />
    </div>
  )
}
