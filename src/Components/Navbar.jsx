import React, { useState } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        ELLIS <span>G V</span>
      </div>
      
      
      <div className={`nav-hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
        <li>
          <a href="#booking" className="nav-cta" onClick={toggleMenu}>
            BOOK NOW
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;