import React from "react";
import bannerImage from "../images/bannerimg.png"
import "../styles/styles.css"

const Banner = () => {
    return (
      <div className='banner-container'>
        <img className='banner-image' src={bannerImage} alt="Paysage" />
        <h2 className='title-banner'>Chez vous, partout et ailleurs</h2>
      </div>
    );
  };
  
  export default Banner;
  