import React from 'react'
import './AboutMe.css'
import LACity from '/src/assets/Central_Los_Angeles_WV_map.png'
import Resume from '/src/assets/Resume.pdf'
import Mexico from '/src/assets/Mexico.png'

const AboutMe = () => {    
  return (
    <div className="AboutMe-Body">
        <h2>About Me</h2>
        <img src={LACity} alt="Map of the city of Los Angeles" id="LAID"/>
        <label className="Arrow">{String.fromCharCode(8595)}</label>
        <a href={Resume} without rel="noopener noreferrer" target="_blank">
          <button> Resume </button>
        </a>
        <div className="Content">
          I was born in Los Angeles and Raised in South Central. 
          I am a second generation immigrant whose parents came from Mexico.
          I am currently pursuing my computer science degree, because I initially wanted to
          become a video game programmer. Now that I am closer to graduation, I have career 
          interests with anything relating to programming new content with the internet. As far my interests go, 
          I watch anime, read manga, watch a lot of youtube, play video games, and an avid sports fan. I also
          shared my resume below by clicking the resume button to view my resume.
        </div>
        <img src={Mexico} alt="Flag of Mexico" id="MexicoFlag"/>
    </div>                
  )
}

export default AboutMe;