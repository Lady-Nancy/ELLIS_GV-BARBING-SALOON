import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <div className="frame-border gold-border-1"></div>
            <div className="frame-border gold-border-2"></div>
            <img 
              src="/barber1.jpg" 
              alt="Ellis G V Barber Shop Interior" 
              className="about-img" 
            />
          </div>
        </div>

      
        <div className="about-content-column">
          <h3 className="about-subtitle">THE LEGACY</h3>
          <h2 className="about-title">
            REDEFINING THE <br />
            <span className="highlight-text">ART OF GROOMING</span>
          </h2>
          <div className="about-divider"></div>
          
          <p className="about-text">
            At <strong>Ellis G V</strong>, we believe grooming is more than a routine—it's an experience of refinement. Founded on the principles of classic Italian and traditional barbering techniques, we blend timeless styling with contemporary, precision details.
          </p>
          
          <p className="about-text secondary-text">
            Every chair at Ellis G V is staffed by an elite master craftsman dedicated to understanding your personal style and delivering unparalleled confidence. Step out looking sharp, clean, and perfectly sculpted.
          </p>

        
          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Mastery</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">8</span>
              <span className="stat-label">Master Barbers</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">12k+</span>
              <span className="stat-label">Sharp Cuts</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;