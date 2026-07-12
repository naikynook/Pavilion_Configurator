import { useEffect, useRef, useState } from 'react'
import { useDesignStore } from '../../store/designStore'
import { createViewport } from '../../three/createViewport'

export function Viewport3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let viewport: ReturnType<typeof createViewport> | null = null

    try {
      viewport = createViewport(container)
      viewport.sync(useDesignStore.getState())
      requestAnimationFrame(() => viewport?.resize())
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to initialize 3D view'
      console.error('Viewport init error:', err)
      setError(message)
      return
    }

    const unsubscribe = useDesignStore.subscribe((state) => {
      viewport?.sync(state)
    })

    const resizeObserver = new ResizeObserver(() => {
      viewport?.resize()
    })
    resizeObserver.observe(container)

    return () => {
      resizeObserver.disconnect()
      unsubscribe()
      viewport?.dispose()
    }
  }, [])

  if (error) {
    return (
      <div className="canvas-error">
        <h3>3D view failed to load</h3>
        <p>{error}</p>
        <p className="canvas-error__hint">
          Try refreshing the page. Make sure you are running via <code>npm run dev</code>, not
          opening the HTML file directly.
        </p>
      </div>
    )
  }

  return <div ref={containerRef} className="canvas-mount" />
}

export function Viewport3DPanel() {
  return (
    <div className="canvas-container">
      <Viewport3D />
      <div className="canvas-hint">
        <span>Drag to orbit</span>
        <span className="canvas-hint__dot">·</span>
        <span>Scroll to zoom</span>
        <span className="canvas-hint__dot">·</span>
        <span>Right-drag to pan</span>
      </div>
    </div>
  )
}
