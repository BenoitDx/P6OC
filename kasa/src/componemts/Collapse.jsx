import React, { useState } from 'react';
import '../styles/styles.css';
import up from '../images/up.svg';

// Définition du composant Collapse qui prend trois props : "id", "title" et "text"
function Collapse({ id, title, text }) {
  // Déclaration d'un état local "show" à l'aide du hook useState, initialement défini sur "false"
  const [show, setShow] = useState(false);

  // Fonction handleToggle pour inverser la valeur de l'état "show" lorsqu'on clique sur le composant
  const handleToggle = () => {
    setShow(!show);
  };

  // Rendu du composant Collapse
  return (
    <div id={id} onClick={handleToggle}>
      <div className='collapse-header'>
        {/* Affichage du titre et d'une icône de flèche vers le haut ou vers le bas en fonction de la valeur de "show" */}
        <span className='collapse-title'>{title}</span>
        <img
          className={`direction-vector ${show ? 'rotate' : ''}`}
          src={up}
          alt="close collapse"
          aria-label='close collapse'
        />
      </div>

      {/* Affichage du contenu du collapsible (pliable) en fonction de la valeur de "show" */}
      {title === 'Équipements' ? (
        show ? ( // Si "show" est vrai, affiche la liste d'équipements
          <ul className='collapse-list'>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null // Sinon, ne rien afficher
      ) : (
        show ? <p className='collapse-text'>{text}</p> : null // Si "show" est vrai, affiche le texte
      )}
    </div>
  );
}


export default Collapse;