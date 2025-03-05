import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl'
import PanelClientes from './PanelClientes'
import PanelEnvios from './PanelEnvios'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl></PanelControl>
    {/* <PanelClientes></PanelClientes> */}
    {/* <PanelEnvios></PanelEnvios> */}
  </StrictMode>,
)
