import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/logementData.json';
import '../styles/styles.css';
import Rating from './Rating.jsx';
import Collapse from './Collapse.jsx';

// Définition du composant Infologement
const Infologement = () => {
  // Récupération de l'ID du logement depuis les paramètres de l'URL grâce à "useParams()"
  const { id } = useParams();

  // Recherche des données de la carte correspondant à l'ID dans les données "data"
  const cardData = data.find((item) => item.id === id);

  // Extraction des informations spécifiques à afficher depuis "cardData"
  const description = cardData.description;
  const equipments = cardData.equipments;

  // Rendu du composant Infologement
  return (
    <div className='info-section'>
      {/* Première partie : Affichage du titre, de la localisation et des tags */}
      <div className='first-part'>
        <h1 className='title-logement'>{cardData.title}</h1>
        <span className='location'>{cardData.location}</span>
        <ul className='tag-list'>
          {cardData.tags.map((tag, index) => (
            <li className='tags' key={index}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* Deuxième partie : Affichage du nom de l'hôte et de sa photo de profil, et de la note */}
      <div className='second-part'>
        <div className='host'>
          <div className='host-name'>{cardData.host.name}</div>
          <img className='host-pic' src={cardData.host.picture} alt="" />
        </div>
        <Rating rating={cardData.rating} />
      </div>

      {/* Troisième partie : Affichage des collapses pour la description et les équipements */}
      <div className='Third-part'>
        <div className="collapse-logement">
          <Collapse id="collapse-position1" title={'Description'} text={description} />
          <Collapse id="collapse-position1" title={'Équipements'} text={equipments} />
        </div>
      </div>
    </div>
  );
};


export default Infologement;