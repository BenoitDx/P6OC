import React, { useState } from 'react';
import '../styles/Collapse.css'
import up from '../images/up.svg'

function Collapse({ title, text }) {// Définit le composant Collapse qui prend les propriétés title et text
  const [show, setShow] = useState(false);// Déclare un état local show à l'aide du hook useState, initialement défini sur false

  const handleToggle = () => {// Définit une fonction handleToggle qui inverse la valeur de show lorsqu'elle est appelée
    setShow(!show);
  };

  return (
    <div className='collapse-about' onClick={handleToggle}> { /*Ajoute un gestionnaire d'événements onClick pour basculer l'affichage du contenuu */}
      <div className='collapse-header-about'>
        <span className='collapse-title-about'>{title}</span> { /* Rend le titre */}
        <img
          className={`direction-vector ${show ? 'rotate' : ''}`} // Ajoute une classe 'rotate' si show est true pour faire pivoter la flèche
          src={up}
          alt="close collapse"
          aria-label='close collapse'
        />
      </div>

      {show ? <p className='collapse-text-about'>{text}</p> : null} {/* Rend le texte si show est true, sinon ne rend rien */}
    </div>
  );
}

export default Collapse;