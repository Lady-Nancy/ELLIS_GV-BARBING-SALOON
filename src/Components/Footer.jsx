import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-brand-column">
          <h2 className="footer-logo">ELLIS G V</h2>
          <p className="footer-tagline">
            Crafting confidence through absolute precision. A sanctuary of modern grooming and timeless refinement.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="social-icon-link" aria-label="Instagram">IG</a>
            <a href="#facebook" className="social-icon-link" aria-label="Facebook">FB</a>
            <a href="#youtube" className="social-icon-link" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-column-title">NAVIGATION</h4>
          <ul className="footer-links-list">
            <li><a href="#about" className="footer-link">THE STORY</a></li>
            <li><a href="#services" className="footer-link">SERVICES</a></li>
            <li><a href="#gallery" className="footer-link">LOOKBOOK</a></li>
            <li><a href="#booking" className="footer-link">BOOK NOW</a></li>
            <li><a href="#contact" className="footer-link">CONTACT</a></li>
          </ul>
        </div>


        <div className="footer-info-column">
          <h4 className="footer-column-title">THE SHOP</h4>
          <address className="footer-address">
            Shop 2/157 Martin St, Brighton VIC 3186,<br />
            Victoria, Australia
          </address>
          
          <a 
            href="https://maps.google.com/?q=Shop+2/157+Martin+Street+Brighton+Victoria+Australia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="directions-link"
          >
            GET DIRECTIONS &rarr;
          </a>

          <div className="contact-details">
            <p className="footer-phone">+1 (212) 555-0199</p>
            <p className="footer-email">concierge@ellisgv.com</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright-text">
            &copy; {currentYear} ELLIS G V. ALL RIGHTS RESERVED.
          </p>
          
          <div className="credit-and-scroll">
            <p className="creator-credit">
              ELLIS GV <span className="gold-accent">BARBING SALOON</span>
            </p>
            <button 
              type="button" 
              className="scroll-top-symbol-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              &#8593;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;