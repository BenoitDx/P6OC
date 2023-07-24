import React, { useState } from "react";
import leftArrow from '../images/arrow-left.svg';
import rightArrow from '../images/arrow-right.svg';
import '../styles/styles.css';

// Définition du composant Slideshow qui prend une prop "images"
const Slideshow = ({ images }) => {
  // Déclaration d'un état local "currentImageIndex" à l'aide du hook useState, initialement défini sur 0
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

  // Calcul du compteur de l'image actuelle sur le total des images
  const imageCount = `${currentImageIndex + 1}/${images.length}`;

  // Rendu du composant Slideshow
  return (
    <div className="slideshow">
      <div className="image-container">
        {/* Flèche gauche pour afficher l'image précédente, avec un onClick qui appelle la fonction previousSlide */}
        <img
          className="arrow left-arrow"
          src={leftArrow}
          alt="Previous"
          onClick={previousSlide}
        />

        {/* Affichage de l'image actuelle à l'index "currentImageIndex" */}
        <img className='img-show' src={images[currentImageIndex]} alt="Slideshow" />

        {/* Flèche droite pour afficher l'image suivante, avec un onClick qui appelle la fonction nextSlide */}
        <img
          className="arrow right-arrow"
          src={rightArrow}
          alt="Next"
          onClick={nextSlide}
        />

        {/* Affichage du compteur de l'image actuelle */}
        <div className="image-count">{imageCount}</div>
      </div>
    </div>
  );
};


export default Slideshow;