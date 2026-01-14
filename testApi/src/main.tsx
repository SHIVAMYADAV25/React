import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import FetchContext from './context/FetchContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <FetchContext>
    <App />
  </FetchContext>
  </BrowserRouter>
)
