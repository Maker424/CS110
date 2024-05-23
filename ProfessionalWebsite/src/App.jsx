import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      <header>
        <div className="WebTitle">
          <h1>Jimmy Delgado-Hernandez Website</h1>
        </div>
        <div className="NavBar">
          <nav>
            <a href="#HeroID"><button>Hero</button></a>
            <a href="#AboutMeID"><button>About Me</button></a>
            <a href="#EducationID"><button>Education</button></a>
            <a href="#ProjectsID"><button>Projects</button></a>
            <a href="#InterestsID"><button>Interests</button></a>
            <a href="#ContactID"><button>Contact</button></a>
          </nav>
        </div>
      </header>
      
      <div className="Website-Body">
        <div className="Hero-Section" id="HeroID">
          <Hero></Hero>
        </div>
        <div className="AboutMe-Section" id="AboutMeID">
          <AboutMe></AboutMe>
        </div>
        <div className="Education-Section" id="EducationID">
          <Education></Education>
        </div>
        <div className="Projects-Section" id="ProjectsID">
          <Projects></Projects>
        </div>
        <div className="Interests-Section" id="InterestsID">
          <Interests></Interests>
        </div>
        <div className="Contact-Section" id="ContactID">
          <Contact></Contact>  
        </div>
      </div>
    </>
  )
}

export default App;
