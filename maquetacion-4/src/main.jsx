
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelMaquetacion from './pages/PanelMaquetacion'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelMaquetacion></PanelMaquetacion>
  </StrictMode>,
)
