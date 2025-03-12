import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './pages/PanelControl'
import Login from './pages/auth/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl></PanelControl>
    {/* <PanelClientes></PanelClientes> */}
    {/* <PanelEnvios></PanelEnvios> */}
    <Login></Login>
  </StrictMode>,
)
