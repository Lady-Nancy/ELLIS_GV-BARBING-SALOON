import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
       
        <div className="contact-info-column">
          <span className="contact-tag">SAY HELLO</span>
          <h2 className="contact-title">THE HAVEN OF <br /><span className="gold-text">REFINEMENT</span></h2>
          <div className="contact-line"></div>
          
          <p className="contact-intro">
            Have questions about group bookings, private buyouts, or specialized treatments? Reach out, and our concierge team will assist you.
          </p>

          <div className="info-details-grid">
            <div className="info-block">
              <h4 className="info-block-title">THE LOUNGE</h4>
              <p className="info-block-text">104 Luxury Lane, Suite B</p>
              <p className="info-block-text">Soho, New York</p>
            </div>

            <div className="info-block">
              <h4 className="info-block-title">DIRECT LINE</h4>
              <p className="info-block-text">+1 (212) 555-0199</p>
              <p className="info-block-text">concierge@ellisgv.com</p>
            </div>

            <div className="info-block full-width">
              <h4 className="info-block-title">CHAIR HOURS</h4>
              <div className="hours-row">
                <span>Tue — Fri:</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row closed">
                <span>Sun — Mon:</span>
                <span>RESERVED / CLOSED</span>
              </div>
            </div>
          </div>
        </div>


        <div className="contact-form-column">
          <form className="cinematic-form" onSubmit={(e) => e.preventDefault()}>
            
            <div className="input-group">
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">YOUR NAME</label>
              <div className="input-glow-line"></div>
            </div>

            <div className="input-group">
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">EMAIL ADDRESS</label>
              <div className="input-glow-line"></div>
            </div>

            <div className="input-group">
              <textarea id="message" required rows="5" placeholder=" "></textarea>
              <label htmlFor="message">YOUR INQUIRY</label>
              <div className="input-glow-line"></div>
            </div>

            <button type="submit" className="form-submit-btn">
              <span>SEND INQUIRY</span>
              <span className="btn-arrow">→</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;