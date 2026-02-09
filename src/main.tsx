import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { WebContainerProvider } from './contexts/WebContainerContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <WebContainerProvider>
        <App />
      </WebContainerProvider>
    </AuthProvider>
  </React.StrictMode>,
)
