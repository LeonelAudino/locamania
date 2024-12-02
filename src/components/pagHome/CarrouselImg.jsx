import React, { useState, useEffect } from 'react';
import './CarrouselImg.css';

const CarrouselImg = ({ images, autoSlide = true, slideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        goToNext();
      }, slideInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, autoSlide, slideInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel-container">
      <div
        className="image-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen Info ${index + 1}`} />
        ))}
      </div>

      <button className="carrousel-button left" onClick={goToPrev}>
        ❮
      </button>
      <button className="carrousel-button right" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default CarrouselImg;
