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
      <h1 className='WebTitle'>Jimmy Delgado-Hernandez Website</h1>
        <div className="NavBar">
          NavBar Section
          <nav>
            <button>Hero</button>
            <button>About Me</button>
            <button>Education</button>
            <button>Projects</button>
            <button>Interests</button>
            <button>Contact</button>
          </nav>
        </div>
      </header>
      
      <div className="Website-Body">
        <div className="Hero-Section">
          <Hero></Hero>
        </div>
        <div className="AboutMe-Section">
          <AboutMe></AboutMe>
        </div>
        <div className="Education-Section">
          <Education></Education>
        </div>
        <div className="Projects-Section">
          <Projects></Projects>
        </div>
        <div className="Interests-Section">
          <Interests></Interests>
        </div>
        <div className="Contact-Section">
          <Contact></Contact>  
        </div>
      </div>
    </>
  )
}

export default App
