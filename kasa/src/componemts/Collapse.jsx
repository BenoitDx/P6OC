import React, { useState } from 'react';
import '../styles/styles.css'
import up from '../images/up.svg'

function Collapse ({ id, title, text}) {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div id={id} onClick={handleToggle}>
      <div className='collapse-header'>
        <span className='collapse-title'>{title}</span>
        <img
          className={`direction-vector ${show ? 'rotate' : ''}`}
          src={up}
          alt="close collapse"
          aria-label='close collapse'
        />
      </div>

      {title === 'Équipements' ? (
        show ? (
          <ul className='collapse-list'>
            {text.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null
      ) : (
        show ? <p className='collapse-text'>{text}</p> : null
      )}
    </div>
  );
}

export default Collapse;

