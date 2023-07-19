import React, { useState } from 'react';
import '../styles/styles.css';
import upVector from '../images/up.svg';
import { useParams } from 'react-router-dom';
import data from '../data/logementData.json';


const CollapseRow = () => {
  const { id } = useParams(); // Récupère la valeur de l'ID du logement à partir des paramètres d'URL à l'aide du hook useParams
  const cardData = data.find((item) => item.id === id); // Recherche l'objet de logement correspondant à l'ID récupéré précédemment

  const CollapseLogement = ({ title, content }) => {// Définit le composant CollapseLogement qui prend les propriétés title et content
    const [show, setShow] = useState(false);// Déclare un état local show à l'aide du hook useState, initialement défini sur false

    const handleToggle = () => { // Définit une fonction handleToggle qui inverse la valeur de show lorsqu'elle est appelée
      setShow(!show);
    };

    const renderContent = () => { // Définit une fonction renderContent qui rend le contenu du collapsible en fonction du type de données content fourni
      if (Array.isArray(content)) {// Si le contenu est un tableau
        return (
          <ul className='collapse-list'>
            {content.map((item, index) => (// Rend chaque élément du tableau comme un élément de liste <li>
              <li key={index} className={`collapse-item ${show ? 'show' : ''}`}>
              {item}</li>
            ))}
          </ul>
        );
      } else { // Si le contenu n'est pas un tableau
        return <p className={`collapse-text-about ${show ? 'show' : ''}`}>
        {content}</p>;// Rend le contenu comme un paragraphe <p>
      
      }
    };

    return ( // Rend la structure d'une section pliable 'collapsible' avec son en-tête et son contenu
      <div className='collapse'>
        <div className='collapse-header' onClick={handleToggle}>
          <span className='collapse-title'>{title}</span>
          <img
            className={`direction-vector ${show ? 'rotate' : ''}`}
            src={upVector}
            alt="close collapse"
            aria-label='close collapse'
          />
        </div>

        {show && <div className='collapse-content'>{renderContent()}</div>}
      </div>
    );
  };

  return ( // Rend le composant CollapseRow avec deux collapsibles pour la description et les équipements du logement
    <div className='collapse-row'>
      <CollapseLogement title="Description" content={cardData.description} />
      <CollapseLogement title="Équipements" content={cardData.equipments} />
    </div>
  );
};

export default CollapseRow;
