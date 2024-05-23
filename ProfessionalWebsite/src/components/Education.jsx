import React from 'react'
import './Education.css'

const Education = () => {    
  return (
    <div className="Education-Body">
      <h2>Education</h2>
      <div className="Academic-History">
        <h3>Academic History</h3>
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
    </div>                
  )
}

export default Education;