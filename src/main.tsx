import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import App from './App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element #root not found')
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  )
} catch (error) {
  console.error('Failed to mount app:', error)
  rootElement.innerHTML = `
    <div style="padding:32px;font-family:system-ui,sans-serif;">
      <h1>Failed to start Pavilion Configurator</h1>
      <p>${error instanceof Error ? error.message : 'Unknown error'}</p>
      <p>Make sure you run <code>npm install</code> then <code>npm run dev</code>.</p>
    </div>
  `
}
