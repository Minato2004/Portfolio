import React from 'react';
import './Hero.css';
import headerLogo from './assets/header_logo.svg';
import Logo from './assets/logo.webp';

export default function Hero() {
    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1FOomWEnDgUlS30EvlRmcjMgEQku62buI/view?usp=sharing');
    }
    return (
        <>
          <section id='hero'>
            <nav>
              <img src={headerLogo} alt="" />
              <ul>
              <li><a href="#aboutme">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#sayhi">Say hi!</a></li>
              <li><button onClick={handleClick}>Resume</button></li>
              </ul>
            </nav>
            <div className="hero-container">
              <div>
                <h1>Aspiring software engineer & competetitive programmer</h1>
              </div>
              <div><img src={Logo} alt="" /></div>
              <div><div>Hi , I am <strong>Pratyansh Pathak</strong> a 4th year Computer Science B.Tech student who wants to build software that can reach millions of users.</div></div>
              
            </div>
          </section>
        </>
    )
}