import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tabs from './components/Tabs.jsx'
import Menu_hover from './components/Menu_hover.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tabs></Tabs>
    <Menu_hover></Menu_hover>
  </StrictMode>,
)
