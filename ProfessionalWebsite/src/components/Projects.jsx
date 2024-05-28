import React from 'react'
import './Projects.css'

const Projects = () => {    
  return (
    <div className="Projects-Body">
        <h2>Projects</h2>
        <div className="CS100">
          <h3>Text-Based RPG</h3>
          <p> Developed a Text-Based RPG as my first project writing in C++</p>
          <p>Tools: C++, GitHub</p>
          <p>Version Control: Git</p>
        </div>
        <div className="CS152">
          <h3>Programming Language</h3>
          <p> Developed a basic programming language, called Wing-L, 
            that includes a basic Lexer, Parser, and code generation to compile my programming language.
          </p>
          <label> Tools: C, Bison </label>
        </div>
        <div className="CS165">
          <h3>Cracking Password</h3>
          <p>Developed a python program to crack a 6 character length password that only contains lowercase letters
            given a md5 hash and salt. 
          </p>
          <label> Tools: Python </label>
        </div>
    </div>                
  )
}

export default Projects;