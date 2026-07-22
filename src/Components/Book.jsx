import React, { useState } from 'react';
import '../Styles/Book.css';

const Book = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    service: '',
    price: '',
    barber: '',
    date: '',
    time: ''
  });

  const services = [
    { id: 's1', name: 'THE CLASSIC TAPER', price: '$65', duration: '45 Mins' },
    { id: 's2', name: 'BEARD SCULPT & HOT TOWEL', price: '$50', duration: '30 Mins' },
    { id: 's3', name: 'THE ROYAL SUITE EXPERIENCE', price: '$110', duration: '75 Mins' }
  ];

  const barbers = [
    { id: 'b1', name: 'ELLIS G V', role: 'Master Barber' },
    { id: 'b2', name: 'V.V.', role: 'Senior Stylist' }
  ];

  const timeSlots = [
    '10:00 AM', '11:15 AM', '12:30 PM', '2:00 PM', '3:15 PM', '4:30 PM', '6:00 PM'
  ];

  const handleSelectService = (name, price) => {
    setBookingData({ ...bookingData, service: name, price });
    setStep(2);
  };

  const handleSelectBarber = (name) => {
    setBookingData({ ...bookingData, barber: name });
    setStep(3);
  };

  const handleSelectDateTime = (date, time) => {
    setBookingData({ ...bookingData, date, time });
    setStep(4);
  };

  const handleConfirmBooking = () => {
    // Here you would typically trigger an API call to save the booking
    setIsModalOpen(true);
  };

  const closeModalAndReset = () => {
    setIsModalOpen(false);
    setBookingData({ service: '', price: '', barber: '', date: '', time: '' });
    setStep(1);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        <div className="booking-header">
          <span className="booking-tag">SECURE YOUR CHAIR</span>
          <h2 className="booking-title">RESERVE AN APPOINTMENT</h2>
          <div className="booking-line"></div>
          
          <div className="booking-steps-nav">
            <span className={`step-node ${step >= 1 ? 'active' : ''}`}>1. SERVICE</span>
            <span className="step-arrow">→</span>
            <span className={`step-node ${step >= 2 ? 'active' : ''}`}>2. SPECIALIST</span>
            <span className="step-arrow">→</span>
            <span className={`step-node ${step >= 3 ? 'active' : ''}`}>3. SCHEDULE</span>
            <span className="step-arrow">→</span>
            <span className={`step-node ${step >= 4 ? 'active' : ''}`}>4. CONFIRM</span>
          </div>
        </div>

        <div className="booking-card">
          {/* STEP 1 */}
          {step === 1 && (
            <div className="booking-step-pane">
              <h3 className="pane-title">SELECT A SERVICE</h3>
              <div className="services-list">
                {services.map((s) => (
                  <button 
                    key={s.id} 
                    className="booking-option-card"
                    onClick={() => handleSelectService(s.name, s.price)}
                  >
                    <div className="option-info">
                      <span className="option-name">{s.name}</span>
                      <span className="option-duration">{s.duration}</span>
                    </div>
                    <span className="option-price">{s.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="booking-step-pane">
              <div className="pane-header-row">
                <button className="back-btn" onClick={() => setStep(1)}>← BACK</button>
                <h3 className="pane-title">SELECT A SPECIALIST</h3>
              </div>
              <div className="barbers-list">
                {barbers.map((b) => (
                  <button 
                    key={b.id} 
                    className="booking-option-card"
                    onClick={() => handleSelectBarber(b.name)}
                  >
                    <div className="option-info">
                      <span className="option-name">{b.name}</span>
                      <span className="option-role">{b.role}</span>
                    </div>
                    <span className="select-indicator">SELECT</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="booking-step-pane">
              <div className="pane-header-row">
                <button className="back-btn" onClick={() => setStep(2)}>← BACK</button>
                <h3 className="pane-title">CHOOSE DATE & TIME</h3>
              </div>
              
              <div className="scheduler-layout">
                <div className="date-input-wrapper">
                  <label htmlFor="booking-date">SELECT DATE</label>
                  <input 
                    type="date" 
                    id="booking-date" 
                    className="custom-date-picker"
                    min={new Date().toISOString().split('T')[0]} 
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    value={bookingData.date}
                  />
                </div>

                {bookingData.date && (
                  <div className="time-slots-container">
                    <label>AVAILABLE TIMES</label>
                    <div className="time-grid">
                      {timeSlots.map((time) => (
                        <button 
                          key={time} 
                          className="time-slot-btn"
                          onClick={() => handleSelectDateTime(bookingData.date, time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="booking-step-pane confirmation-pane">
              <h3 className="pane-title">VERIFY YOUR DETAILS</h3>
              
              <div className="summary-receipt">
                <div className="receipt-row">
                  <span>SERVICE</span>
                  <span className="receipt-val">{bookingData.service}</span>
                </div>
                <div className="receipt-row">
                  <span>SPECIALIST</span>
                  <span className="receipt-val">{bookingData.barber}</span>
                </div>
                <div className="receipt-row">
                  <span>DATE</span>
                  <span className="receipt-val">{bookingData.date}</span>
                </div>
                <div className="receipt-row">
                  <span>TIME</span>
                  <span className="receipt-val">{bookingData.time}</span>
                </div>
                <div className="receipt-divider"></div>
                <div className="receipt-row total">
                  <span>ESTIMATED TOTAL</span>
                  <span className="receipt-val price-highlight">{bookingData.price}</span>
                </div>
              </div>

              <div className="action-row">
                <button className="back-btn" onClick={() => setStep(3)}>CHANGE DETAILS</button>
                <button 
                  className="confirm-booking-btn" 
                  onClick={handleConfirmBooking}
                >
                  CONFIRM BOOKING
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SUCCESS MODAL POPUP */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon">✓</div>
            <h3>RESERVATION CONFIRMED</h3>
            <p className="modal-subtext">We look forward to seeing you!</p>
            
            <div className="modal-summary">
              <p><strong>{bookingData.service}</strong> with <strong>{bookingData.barber}</strong></p>
              <p>🗓️ {bookingData.date} at {bookingData.time}</p>
            </div>

            <button className="modal-close-btn" onClick={closeModalAndReset}>
              DONE & RETURN
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Book;