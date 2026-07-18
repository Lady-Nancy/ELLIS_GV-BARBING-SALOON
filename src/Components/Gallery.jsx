import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const categories = ['ALL', 'CUTS', 'BEARDS', 'STUDIO'];

  const galleryItems = [
    {
      id: 1,
      category: 'CUTS',
      title: 'THE CLASSIC TAPER',
      barber: 'E.G.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5KIupeaewfFYhN0Ue6HAvMY4FQ-3uLuvFhafzW3myA&s=10'
    },
    {
      id: 2,
      category: 'BEARDS',
      title: 'RAZOR SHARP PERIMETER',
      barber: 'V.V.',
      imgSrc: 'https://tse4.mm.bing.net/th/id/OIP.tsGk9obZVJT6BoGcFTUQeAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 3,
      category: 'STUDIO',
      title: 'THE ROYAL SUITE',
      barber: 'ELLIS G V',
      imgSrc: '/barbing1.jpg'
    },
    {
      id: 4,
      category: 'CUTS',
      title: 'MODERN TEXTURED CROP',
      barber: 'E.G.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkwxULp6vRMSh0gR8VmNv8YEvJz1W9MvpOVrFJ4EMrx3LL-l5HN2xOx5p&s=10'
    },
    {
      id: 5,
      category: 'BEARDS',
      title: 'SCULPTED BEARD & HOT TOWEL',
      barber: 'V.V.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVBB8I8qIgyKATse4yu0XCw2xbpYhPGIDlU_v4WJNHQ&s=10'
    },
    {
      id: 6,
      category: 'STUDIO',
      title: 'THE DETAILS DRAWER',
      barber: 'ELLIS G V',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMY9aL6S1Wts7BPgjcm0iXMuB1QxwfjWVNtf3tmznCWg&s=10'
    }
  ];

  
  const filteredItems = activeFilter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

 
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  
  useEffect(() => {
    resetTimeout();
    if (filteredItems.length <= 1) return; 

    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
        ),
      3500 
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, filteredItems]);

  
  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <span className="gallery-tag">VISUAL PROOF</span>
        <h2 className="gallery-title">THE LOOKBOOK</h2>
        <div className="gallery-line"></div>
      </div>

     
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      
      <div className="gallery-carousel-container">
        
       
        <button className="carousel-control-btn prev" onClick={handlePrev} aria-label="Previous image">
          ⟨
        </button>

        
        <div className="carousel-viewport">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {filteredItems.map((item) => (
              <div key={item.id} className="carousel-slide">
                <div className="image-container">
                  <img src={item.imgSrc} alt={item.title} className="gallery-img" />
                  
                 
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="overlay-category">{item.category}</span>
                      <h3 className="overlay-item-title">{item.title}</h3>
                      <p className="overlay-barber">Crafted by {item.barber}</p>
                    </div>
                    <div className="overlay-gold-accent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <button className="carousel-control-btn next" onClick={handleNext} aria-label="Next image">
          ⟩
        </button>

      </div>

     
      <div className="carousel-dots">
        {filteredItems.map((_, idx) => (
          <button
            key={idx}
            className={`dot-btn ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => {
              resetTimeout();
              setCurrentIndex(idx);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;