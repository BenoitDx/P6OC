import React from "react";
import {Link} from "react-router-dom"
import '../styles/Cards.css'
import data from '../data/logementData.json'

const Cards = () => {
    return (
      <div className='general-container'>
        <div className='card-container'>
            <div className='card-box'>
              {data.map((item) => (
              <Link to={`/Logement/${item.id}`} key={item.id} className='card-box'>
                  <div className='card'>
                    <img className='card-cover' src={item.cover} alt='Image appartement' />
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