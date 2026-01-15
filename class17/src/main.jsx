import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecotext from './context/Themecotext.jsx'
createRoot(document.getElementById('root')).render(
  <Themecotext>
    <App />
 </Themecotext>
)
