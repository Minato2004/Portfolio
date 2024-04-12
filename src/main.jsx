import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import './index.css'
import App from './Particles.jsx'
import AboutMe from './AboutMe.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <Hero></Hero>
    <AboutMe></AboutMe>
  </React.StrictMode>,
)
