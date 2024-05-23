import React from 'react'
import GithubLogo from '/src/assets/Github-Icon.png'
import LinkedInLogo from '/src/assets/LinkedIn-Icon.png'
import './Contact.css'

const Contact = () => {    
  return (
    <div className="Contact-Body">
        <h2>Contact</h2>
        <p>You can contact me through my Personal email: <i>jimmydelgado0812@gmail.com</i></p>
        <p>You can also see my GitHub and LinkedIn page by clicking the icons below</p>
        <a href="https://github.com/Maker424"> <img src={GithubLogo} alt="The Github Logo that leads to my personal Github Profile"/> </a>
        <a href="https://www.linkedin.com/in/jimmy-delgado-hernandez-5889911ba"> <img src={LinkedInLogo} alt="The LinkedIn Logo That leads to LinkedIn homepage"/> </a>
    </div>                
  )
}

export default Contact;