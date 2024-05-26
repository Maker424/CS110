import React from 'react'
import './Education.css'
import Cplusplus from '/src/assets/C++.png'
import SQALogo from '/src/assets/SQA.png'
import Githublogo from '/src/assets/Github-Icon.png'
import CSSLogo from '/src/assets/CSS-Logo.png'
import SQLLogo from '/src/assets/SQL.png'

const Education = () => {    
  return (
    <div className="Education-Body">
      <h2>Education</h2>
      <div className="Academic-History">
        <h3>Academic History: </h3>
        <ul>
          <li><b>B.S. Computer Science</b> <i>- University of California, Riverside (2024)</i></li>
          <li><b>High School Diploma</b> <i>- Synergy Quantum Academy (2016 - 2020)</i></li>
        </ul>
      </div>
      <div className="Skills-Section">
        <h3>Skills:</h3>
        <ul>
          <li>Programming Languages
            <ul>
              <li>C++</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </li>
          <li>Technologies/Tools
            <ul>
              <li>Git</li>
            </ul>
          </li>
        </ul>
      </div>
      <img src={Cplusplus} alt="C++ logo" id="CplusplusID" />
      <a href="https://www.synergyquantumacademy.org/"> <img src={SQALogo} alt="My SQA highschool logo" id="SQAID"/> </a>
      <img src={Githublogo} alt="Github Logo" id="GitID" />
      <img src={CSSLogo} alt="CSS3 Logo" id="CSSID"/>
      <img src={SQLLogo} alt="SQL Logo" id="SQLID"/>

      <div className="Highschool-coursework">
        <h3>Highschool Relevant Coursework: </h3>
        <ul>
          <li>Graphic Design</li>
        </ul>
      </div>
      <div className="UCR-coursework">
        <h3>UCR Relevant Coursework: </h3>
        <ul>
          <li>CS180: <i>Introduction to software Engineering</i></li>
          <li>CS142: <i>Algorithm Engineering</i></li>
          <ul>
            <a href="https://www.cs.ucr.edu/~yihans/teaching/142/W24/index.html"> <li> <i>Course Homepage link</i></li> </a>
            
          </ul>
          <li>CS100: <i>Software Construction</i></li>
        </ul>
      </div>

    </div>                
  )
}

export default Education;