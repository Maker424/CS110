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
import GithubLogo from './assets/Github-Icon.png'
import LinkedInLogo from './assets/LinkedIn-Icon.png'
import SelfImage from './assets/self-image.jpg'

function App() {
  

  return (
    <>
      <header>
        <div className="WebTitle">
          <h1>Jimmy Delgado-Hernandez Website</h1>
        </div>
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
          <img src={SelfImage} alt="Selfie photo of myself" />
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
          <a href="https://github.com/Maker424"> <img src={GithubLogo} alt="The Github Logo that leads to my personal Github Profile"/> </a>
          <a href="https://www.linkedin.com/in/jimmy-delgado-hernandez-5889911ba"> <img src={LinkedInLogo} alt="The LinkedIn Logo That leads to LinkedIn homepage"/> </a>
        </div>
      </div>
    </>
  )
}

export default App
