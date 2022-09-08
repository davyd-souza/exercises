// DEPENDENCY
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// COMPONENT
import App from './App'
import ColorRenderer from './routes/ColorRenderer/ColorRenderer'

// STYLE
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="color-renderer" element={<ColorRenderer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
