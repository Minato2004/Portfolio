import "./AboutMe.css";
import React from "react";
import MyPic from "./assets/mypic.jpg";
export default function AboutMe() {
    return (
        <>
         <section id="aboutme">
            <div>
                <div id="tint"></div>
                <img src={MyPic} alt="A picture of me" /></div>
            <div>
                <h1>About me:-</h1>
                <p>Hello! my name is Pratyansh Pathak a 2nd year B.Tech student aspiring to be a Software Engineer in top tech firms. Driven by a passion for problem-solving
and armed with solid computer science fundamentals, I aim to deliver innovative solutions.</p>
                <p>I am currently looking for an internship in top tech companies . I am also currently learning competetitive programming and participating in Codeforces competitions.</p>
                <p>My hobbies include reading books, playing chess and watching movies.</p>
            </div>
            
         </section>
        </>
    )
}