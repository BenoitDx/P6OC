import React from 'react';
import starEmpty from '../../images/star-empty.svg';
import starPlain from '../../images/star-plain.svg';

const Rating = ({ rating }) => {
  const MAX_RATING = 5;// Nombre maximum d'étoiles possibles
  const fullStars = Math.floor(rating); // Nombre d'étoiles pleines
  const hasHalfStar = rating - fullStars >= 0.5;// Indique si une demi-étoile doit être affichée
  const emptyStars = MAX_RATING - fullStars - hasHalfStar; // Nombre d'étoiles vides


  const renderStar = (type, key) => (
    <img key={key} className='star-icon' src={type} alt={`star-${type}`} /> // Renvoie le code HTML représentant une étoile
  );

  return (
    <div className='rating-stars'>
      {[...Array(fullStars)].map((_, index) => renderStar(starPlain, index))} {/* Boucle pour générer le code HTML des étoiles pleines */}
      {hasHalfStar && renderStar(starPlain, fullStars)}
      {[...Array(emptyStars)].map((_, index) => renderStar(starEmpty, index + fullStars + hasHalfStar))} {/* Boucle pour générer le code HTML des étoiles vides */}
    </div>
  );
};

export default Rating;