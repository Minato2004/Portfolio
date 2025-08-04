import React from 'react';
import './Skills.css';
export default function Skills() {
    return(
        <>
            <section id='skills'>
                <div className="card">
                    <h1>Languages</h1>
                    <div className="images">
                        <img src="https://img.icons8.com/color/48/000000/c-programming.png" alt="C"/>
                        <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++"/>
                        <img src="https://img.icons8.com/color/48/000000/python.png" alt="Python"/>
                        <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript"/>
                    </div>
                    <div className="p">
                        My favourite languages for competitive programming, web development and data science. 
                    </div>
                </div>
                <div className="card">
                    <h1>Front-End</h1>
                    <div className="images">
                        <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML"/>
                        <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS"/>
                        <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
                    </div>
                    <div className="p">My preferred technologies for front-end web development and component design.</div>
                </div>
                <div className="card">
                    <h1>AI</h1>
                    <div className="images">
                        <img src="https://img.icons8.com/color/48/000000/numpy.png" alt="Numpy"/>
                        <img src="/pytorch_logo.png" alt="PyTorch" class="skillsIcon"/>
                        <img src="https://img.icons8.com/color/48/000000/tensorflow.png" alt="TensorFlow"/>
                    </div>
                    <div className="p">
                        Libraries I use for AI and machine learning projects, including deep learning frameworks.
                    </div>
                </div>
                <div className="card">
                    <h1>Tools</h1>
                    <div className="images">
                        <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git"/>
                        <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub"/>
                        <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code"/>
                    </div>
                    <div className="p">
                        Tools I use for version control, code hosting and development.
                    </div>
                </div>
            </section>
        </>
    )
}