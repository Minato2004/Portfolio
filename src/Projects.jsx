import React from 'react';
import './Projects.css';
import Project from './Project.jsx';
//Project has title, description, github, demo, img
export default function Projects() {
    return(
        <>
            <section id='projects'>
                <h1>Projects</h1>
                <div className="projects-container">
                    <Project
                        title="Weather App"
                        description="A react app that shows the current weather of a location"
                        github="https://github.com/Minato2004/Weather-api-project" 
                        demo={"https://stellular-cactus-f3918b.netlify.app/"}
                        img={"https://via.placeholder.com/300"}/>
                    <Project
                        title="Etch-a-Sketch"
                        description="A simple etch-a-sketch app made with HTML, CSS, and JS"
                        github="https://github.com/Minato2004/etch-a-sketch" 
                        demo={"https://minato2004.github.io/etch-a-sketch/"}
                        img={"https://via.placeholder.com/300"}/>
                    <Project
                        title="Admin Dashboard"
                        description="A dashboard for managing users and data"
                        github="https://github.com/Minato2004/Admin-dashboard" 
                        demo={"https://minato2004.github.io/Admin-dashboard/"}
                        img={"https://via.placeholder.com/300"}/>
                </div>
            </section>
        </>
    )
}