import React from 'react';
import '../Styles/Services.css';

const Services = () => {
  const servicesList = [
    {
      id: "01",
      title: "THE MASTER CUT",
      price: "$50",
      duration: "45 MINS",
      tagline: "Tailored Precision",
      description: "A comprehensive consultation, custom-engineered haircut matching your facial structure, therapeutic hot towel wrap, and a premium style execution."
    },
    {
      id: "02",
      title: "BEARD ARCHITECTURE",
      price: "$35",
      duration: "30 MINS",
      tagline: "Sculpt & Razor Line",
      description: "Detailed beard sculpting, hot essential oil therapy, and razor-sharp perimeter lining using a traditional straight razor."
    },
    {
      id: "03",
      title: "ROYAL HOT SHAVE",
      price: "$65",
      duration: "60 MINS",
      tagline: "The Ultimate Ritual",
      description: "A 10-step traditional shaving ritual. Includes pre-shave steam, application of warm rich lather, dual straight-razor glide, and cold compress therapy."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="ambient-spotlight"></div>
      
      <div className="services-header">
        <span className="services-tag">CURATED EXPERIENCES</span>
        <h2 className="services-title">
          THE MENU OF <span className="gold-text">DISTINCTION</span>
        </h2>
        <p className="services-intro">
          We don’t just cut hair; we sculpt confidence. Select your treatment and claim your chair.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
           
            <span className="card-number">{service.id}</span>
            
            <div className="card-content">
              <span className="card-tagline">{service.tagline}</span>
              
              <div className="card-title-row">
                <h3 className="card-title">{service.title}</h3>
                <span className="card-price">{service.price}</span>
              </div>
              
              <div className="card-duration">
                <span className="clock-icon">⚡</span> {service.duration}
              </div>
              
              <p className="card-description">{service.description}</p>
              
              <a href="#book" className="card-action-btn">
                <span>RESERVE CHAIR</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
            
            
            <div className="card-glow-edge"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;