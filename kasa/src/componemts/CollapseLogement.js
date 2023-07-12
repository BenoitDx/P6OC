import React, { useState } from 'react';
import '../styles/CollapseLogement.css';
import upVector from '../images/up.svg';
import { useParams } from 'react-router-dom';
import data from '../data/logementData.json';


const CollapseRow = () => {
  const { id } = useParams();
  const cardData = data.find((item) => item.id === id);

  const CollapseLogement = ({ title, content }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
      setShow(!show);
    };

    const renderContent = () => {
      if (Array.isArray(content)) {
        return (
          <ul className='collapse-list'>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      } else {
        return <p className='collapse-text'>{content}</p>;
      }
    };

    return (
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

  return (
    <div className='collapse-row'>
      <CollapseLogement title="Description" content={cardData.description} />
      <CollapseLogement title="Équipements" content={cardData.equipments} />
    </div>
  );
};

export default CollapseRow;
