import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Result from './result.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <bmi_stats/>
  </StrictMode>,
)
