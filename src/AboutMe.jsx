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
                <p>Hello! my name is Pratyansh Pathak a 4th year B.Tech student aspiring to be a Software Engineer in top tech firms. Driven by a passion for problem-solving
and armed with solid computer science fundamentals, I aim to deliver innovative and scalable solutions.</p>
                <p>I am currently looking for full time opportunity in top tech companies. I am also into competetitive programming, currently I am a specialist in codeforces.</p>
                <p>My hobbies include reading books, playing chess and watching movies.</p>
            </div>
            
         </section>
        </>
    )
}