import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Formulario from './Formulario'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Formulario/>
  </StrictMode>,
)
