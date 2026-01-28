import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  {/* BrowserRouter는 현재 주소를 저장하고 감지함. */}
    <App />
  </BrowserRouter>,
)
