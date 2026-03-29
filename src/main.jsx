import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './utils/VisualModes.css'
import { VisualModeProvider } from './utils/VisualModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <VisualModeProvider>
        <App />
      </VisualModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
