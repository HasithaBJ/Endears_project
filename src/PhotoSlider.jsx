import React, { useState, useEffect, useRef } from 'react';
import './PhotoSlider.css'; // Import CSS file
// import image1 from './assets/image1.png';
import image2 from './assets/image2.webp';
import image3 from './assets/image3.webp';
import image4 from './assets/image4.webp';
import image5 from './assets/image5.webp';
import image6 from './assets/image6.webp';
import image7 from './assets/image7.webp';


const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  // Sample images
  const images = [
    image2,image3,image4,image5,image6,image7
  ];

  // Refs for slider container and images
  const sliderContainerRef = useRef(null);
  const imageRefs = useRef([]);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    // Calculate image width based on slider container width
    const handleResize = () => {
      setImageWidth(sliderContainerRef.current.offsetWidth);
    };

    // Call handleResize initially and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clear the interval and resize listener on component unmount
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="photo-slider-container" ref={sliderContainerRef} id="home">

      <div
        className="photo-slider"
        style={{
          transform: `translateX(-${currentIndex * imageWidth}px)`,
          width: `${images.length * imageWidth}px`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-wrapper" style={{ width: `${imageWidth}px` }}>
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            ref={(el) => (imageRefs.current[index] = el)}
            style={{ width: `${imageWidth}px` }}
          />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="prev-slide" onClick={prevSlide}>
      &#x27A4;
      </button>
      <button className="next-slide" onClick={nextSlide}>
      &#x27A4;
      </button>

      {/* Navigation Dots */}
      <div className="navigation-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;