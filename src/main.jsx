import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.scss'
import App from './App.jsx'
import SidebarProvider from './contexts/sidebar.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <App />

    </SidebarProvider>
  </StrictMode>,
)