import React from "react";
import {Link} from "react-router-dom"
import '../styles/styles.css'
import data from '../data/logementData.json'

const Cards = () => {
    return (
      <div className='general-container'>
        <div className='card-container'>
            <div className='card-box'>
              {data.map((item) => ( // Parcourt le tableau de données 
              <Link to={`/Logement/${item.id}`} key={item.id} className='card-box'> {/* Crée un lien vers le détail du logement en utilisant l'ID de l'élément */}
                  <div className='card'>
                    <img className='card-cover' src={item.cover} alt={item.title} />
                    <div className='card-overlay'></div>
                    <span className='card-title'>{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default Cards; 