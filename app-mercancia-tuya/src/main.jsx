import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './pages/PanelControl'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/auth/Login'
let router = createBrowserRouter([
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/panel",
    element:<PanelControl></PanelControl>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <PanelControl></PanelControl> */}
    {/* <PanelClientes></PanelClientes> */}
    {/* <PanelEnvios></PanelEnvios> */}
    
  </StrictMode>,
)
