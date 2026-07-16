import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h3 className="hero-subtitle">ESTABLISHED GROOMING</h3>
        <h1 className="hero-title">
          ELLIS G V <br />
          <span className="highlight-text">BARBER SALON</span>
        </h1>
        <p className="hero-description">
          Where master craftsmanship meets modern luxury. Step in for an elite grooming experience tailored specifically for the refined gentleman.
        </p>
        
        <div className="hero-buttons">
          <a href="#book" className="btn btn-primary">BOOK CHAIR</a>
          <a href="#services" className="btn btn-secondary">OUR SERVICES</a>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="glowing-orb"></div>
        <div className="geometric-box"></div>
      </div>
    </section>
  );
};

export default Hero;