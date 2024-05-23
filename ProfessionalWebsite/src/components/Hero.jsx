import React from 'react'
import './Hero.css'
import UCR from '/src/assets/UCR-Logo.jpg'
import UCRBook from '/src/assets/UCR-Book.png'
import UCRBear from '/src/assets/UCR-Bear.png'

const Hero = () => {    
  return (
    <div className="Hero-Body">
        <p>My name is Jimmy Delgado-Hernandez</p>
        <p>Currently I am almost complete in pursuing my Bachelor's Degree in Computer Science at the University of California Riverside.</p>
        <img src={UCRBear} alt="UCR Logo with a Bear instead" id="UCRBear" />
        <img src={UCR} alt="UCR Logo"/>
        <img src={UCRBook} alt="UCR Logo with Book in the middle" id="UCRBook"/>
    </div>                
  )
}

export default Hero;