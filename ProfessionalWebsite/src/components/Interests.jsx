import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Interests.css'
import MAL from '/src/assets/MAL.png'
import Nevin from '/src/assets/Nevin.jpg'

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const interestsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once it is visible
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (interestsRef.current) {
      observer.observe(interestsRef.current);
    }

    return () => {
      if (observer && interestsRef.current) {
        observer.unobserve(interestsRef.current);
      }
    };
  }, []);

  return (
    <div className={`Interests-Body ${isVisible ? 'visible' : ''}`} ref={interestsRef}>
      <h2>Extracurriculars/Interests</h2>
      <div className="Volunteering">
        <div className="School">
          <p>I volunteered to be an Assistant Teacher for a week at my Elementary School in Los Angeles</p>
          <a href="https://nevinavees.lausd.org/">
            <img src={Nevin} alt="Nevin Elementary School front building photo" />
          </a>
        </div>
      </div>
      <div className="Anime">
        <p>I discovered Anime for what it is in 6th grade, and have become invested in the medium ever since.</p>
        <a href="https://myanimelist.net/profile/Maker424">
          <img src={MAL} alt="My Anime List website logo" />
        </a>
      </div>
      <div className="Sports">
        {/* Add sports-related content here */}
      </div>
    </div>
  );
};

export default Interests;