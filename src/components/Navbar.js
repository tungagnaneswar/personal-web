// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>
      <div className="hero-links">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
      <button className="cta-button"><b>Call Eswar</b></button>
    </nav>
  );
};

export default Navbar;
