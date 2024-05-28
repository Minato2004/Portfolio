import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './Hero.jsx'
import './index.css'
import App from './Particles.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Sayhi from './Sayhi.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    <Sayhi></Sayhi>
  </React.StrictMode>,
)
