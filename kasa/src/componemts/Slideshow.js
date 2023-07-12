import React, { useState } from "react";
import leftArrow from '../images/arrow-left.svg';
import rightArrow from '../images/arrow-right.svg';
import '../styles/Slideshow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour afficher la prochaine image
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fonction pour afficher l'image précédente
  const previousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
     
      <img
        className="arrow left-arrow"
        src={leftArrow}
        alt="Previous"
        onClick={previousSlide}
      />
      <img className='img-show' src={images[currentImageIndex]} alt="Slideshow" />
      <img
        className="arrow right-arrow"
        src={rightArrow}
        alt="Next"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slideshow;