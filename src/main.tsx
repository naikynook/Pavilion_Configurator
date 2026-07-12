const rootElement = document.getElementById('root')

function showFatalError(message: string) {
  if (!rootElement) return
  rootElement.innerHTML = `
    <div style="padding:32px;font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;">
      <h1 style="margin:0 0 12px;">Failed to start Pavilion Configurator</h1>
      <p style="color:#6e6e73;line-height:1.5;">${message}</p>
      <p style="color:#6e6e73;line-height:1.5;">Run <code>start.bat</code> or <code>npm run dev</code> in the project folder.</p>
    </div>
  `
}

if (!rootElement) {
  throw new Error('Root element #root not found')
}

const root = rootElement

async function boot() {
  try {
    const [{ StrictMode }, { createRoot }, { default: App }, { ErrorBoundary }] =
      await Promise.all([
        import('react'),
        import('react-dom/client'),
        import('./App'),
        import('./components/ui/ErrorBoundary'),
      ])

    await import('./index.css')

    createRoot(root).render(
      <StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StrictMode>,
    )
  } catch (error) {
    console.error('Failed to mount app:', error)
    const message = error instanceof Error ? error.message : 'Unknown startup error'
    showFatalError(message)
  }
}

void boot()
