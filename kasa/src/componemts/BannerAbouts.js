import React from 'react';
import '../styles/Banner.css';
import bannerImage from '../images/bannerabouts.png';


const BannerAbouts = () => {
    return (
      <div className='banner-container'>
        <img className='banner-image' src={bannerImage} alt="Paysage" />
      </div>
    );
  };
  
  export default BannerAbouts;
  