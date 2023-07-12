import React from 'react';
import starEmpty from '../images/star-empty.svg';
import starPlain from '../images/star-plain.svg';

const Rating = ({ rating }) => {
  const MAX_RATING = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = MAX_RATING - fullStars - hasHalfStar;

  const renderStar = (type, key) => (
    <img key={key} className='star-icon' src={type} alt={`star-${type}`} />
  );

  return (
    <div className='rating-stars'>
      {[...Array(fullStars)].map((_, index) => renderStar(starPlain, index))}
      {hasHalfStar && renderStar(starPlain, fullStars)}
      {[...Array(emptyStars)].map((_, index) => renderStar(starEmpty, index + fullStars + hasHalfStar))}
    </div>
  );
};

export default Rating;