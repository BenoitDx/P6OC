import React from "react";
import Logo from "../images/LOGO.svg"
import "../styles/styles.css"


const Footer = () => {
    return (
      <div className='footer-container'>
        <img className='logo' src={Logo} alt="Logo" aria-label='Logo' />
        <p className='legals'>© 2023 Kasa. All rights reserved</p>
      </div>
    );
  };
  
  export default Footer;
  