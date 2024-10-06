// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>GET EVERY SINGLE SOLUTIONS</h2>
        <h1>I'm Software Engineer Tunga Eswar</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultricies gravida.</p>
        <div className="hero-buttons">
          <button className="learn-more">Learn More</button>
          <button className="hire-me">Hire Me</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="path-to-image" alt="Haris F. Watson" />
      </div>
    </section>
  );
};

export default Hero;
