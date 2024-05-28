import React from 'react'
import { useState, useEffect, useRef } from 'react';
import './Interests.css'
import MAL from '/src/assets/MAL.png'
import Nevin from '/src/assets/Nevin.jpg'
import Soccer from '/src/assets/soccer.png'
import Basketball from '/src/assets/basketball.jpg'
import Baseball from '/src/assets/baseball.jpg'
import Football from '/src/assets/Pigskin.jpg'
import Puck from '/src/assets/HockeyPuck.png'

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const interestsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the section is visible
          }
        });
      },
      {
        threshold: 0.1,
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
      <div className="Volunteering">
        <h2>Extracurriculars</h2>
        <div className="School">
          <p>I volunteered as an Assistant Teacher for a 4th grade class for a week at my Elementary School in Los Angeles</p>
          <figure>
            <a href="https://nevinavees.lausd.org/">
              <img src={Nevin} alt="Nevin Elementary School front building photo" />
            </a>
            <figcaption>Photo of the front view of my Elementary School. Click Image that leads to the school website</figcaption>
          </figure>
        </div>
      </div>
      <div className="Interests">
        <h2 className="InterestsHeader">Interests</h2>
        <div className="Anime">
          <h3>Anime/Manga: </h3>
          <p>I discovered Anime in 6th grade, and have become invested in the medium ever since. In highschool</p>
          <p>I discovered Manga and became more of a manga reader than an anime watcher.</p>
          <p>You can check out my MyAnimeList page(by clicking the logo below) for Anime I watched and Manga I have read.</p>
          <a href="https://myanimelist.net/profile/Maker424">
            <img src={MAL} alt="My Anime List website logo" />
          </a>
        </div>
        <div className="Sports">
          <h3>Sports</h3>
          <p>I Love watching and playing sports for as long As I can remember. I enjoy the 5 Major sports that we have in the United States: Soccer, Basketball, Baseball, American Football, and Hockey.</p>
          <p id="rank">Here is my top 5 sports ranking list: </p>
          <ol>
            <li>Soccer</li>
            <li>American Football</li>
            <li>Baseball</li>
            <li>Basketball</li>
            <li>Hockey</li>
          </ol>
          <div className="SportsImages">
            <img src={Soccer} alt="A Soccer Ball" id="SBall"/>
            <img src={Football} alt="American Football Ball" id="FBall"/>
            <img src={Baseball} alt="A BaseBall" id="BBall"/>
            <img src={Basketball} alt="A Basketball" id="HoopBall"/>
            <img src={Puck} alt="A Hockey Puck" id="Puck"/>
          </div>
          <div className="SportsTeams">
            <label> My Top 5 teams from one team in each sport: </label>
            <ol>
              <li>Cruz Azul (Soccer Team)</li>
              <li>Los Angeles Chargers (American Football Team)</li>
              <li>Los Angeles Lakers (Basketball Team)</li>
              <li>Los Angeles Angels (Baseball Team)</li>
              <li>Los Angeles Kings(Hockey Team)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;