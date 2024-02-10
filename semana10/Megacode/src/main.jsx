import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// hat que dejar este import para que funcione Tailwind
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
