import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { pageview } from './analytics.js'

function GAListener() {
  const location = useLocation()
  useEffect(() => {
    pageview(location.pathname + location.search)
  }, [location])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GAListener />
    <App />
  </BrowserRouter>
)
