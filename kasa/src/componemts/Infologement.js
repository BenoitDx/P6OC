import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementData.json';

const Infologement = () => {
  const { id } = useParams();
   // Recherche des données de la carte correspondant à l'ID dans les données
  const cardData = data.find((item) => item.id === id);

  return (
    <div className='info-section'>
      <div className='first-part'>
        <h1 className='title-logement'>{cardData.title}</h1>
        <span className='location'>{cardData.location}</span>
        <ul className='tag-list'>
          {cardData.tags.map((tag, index) => (
            <li className='tags' key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className='second-part'>
        <div className='host'>
          <div className='host-name'>{cardData.host.name}</div>
          <img className='host-pic' src={cardData.host.picture} alt={'gallerie'} />
        </div>
      </div>
    </div>
  );
};

export default Infologement;