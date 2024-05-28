import React from 'react';
import './Hero.css';
import headerLogo from './assets/header_logo.svg';
import Logo from './assets/logo.webp';

export default function Hero() {
    const handleClick = () => {
        //https://docs.google.com/document/d/1gLH9XR5kFoWJubwDs_v80idU_ZTNIBr6ftHpBUo_qhM/edit?usp=sharing
        window.open('https://docs.google.com/document/d/1gLH9XR5kFoWJubwDs_v80idU_ZTNIBr6ftHpBUo_qhM/edit?usp=sharing');
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
              <div><div>Hi , I am <strong>Pratyansh Pathak</strong> a 2nd year Computer Science B.Tech student who wants to build things that improve our society</div></div>
              
            </div>
          </section>
        </>
    )
}