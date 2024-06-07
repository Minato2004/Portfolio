import React from 'react';
import './Projects.css';
import Project from './Project.jsx';
import weatherApp from './assets/wether-app.png';
import etchASketch from './assets/etch-a-sketch.png';
import adminDashboard from './assets/admin-dashboard.png';
//Project has title, description, github, demo, img
export default function Projects() {
    return(
        <>
            <section id='projects'>
                <h1>My Projects</h1>
                <div className="projects-container">
                    <Project
                        title="Weather App"
                        description="A react app that shows the current weather of a location"
                        github="https://github.com/Minato2004/Weather-api-project" 
                        demo={"https://stellular-cactus-f3918b.netlify.app/"}
                        img={weatherApp}/>
                    <Project
                        title="Etch-a-Sketch"
                        description="A simple etch-a-sketch app made with HTML, CSS, and JS"
                        github="https://github.com/Minato2004/etch-a-sketch" 
                        demo={"https://minato2004.github.io/etch-a-sketch/"}
                        img={etchASketch}/>
                    <Project
                        title="Admin Dashboard"
                        description="A dashboard for managing users and data"
                        github="https://github.com/Minato2004/Admin-dashboard" 
                        demo={"https://minato2004.github.io/Admin-dashboard/"}
                        img={adminDashboard}/>
                </div>
            </section>
        </>
    )
}