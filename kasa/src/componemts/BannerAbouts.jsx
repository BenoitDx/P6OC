import React from 'react';
import '../styles/styles.css';
import bannerImage from '../images/bannerabouts.png';


const BannerAbouts = () => {
    return (
      <div className='banner-container'>
        <img className='banner-image banner-abouts' src={bannerImage} alt="Paysage" />
      </div>
    );
  };
  
  export default BannerAbouts;
  