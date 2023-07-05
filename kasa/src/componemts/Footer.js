import React from "react";
import Logo from "../images/LOGO.svg"
import "../styles/Footer.css"


const Footer = () => {
    return (
      <div className='footer-container'>
        <img className='logo' src={Logo} alt="Logo" aria-label='Logo' />
        <p className='legals'>© 2020 Kasa. All rights reserved</p>
      </div>
    );
  };
  
  export default Footer;
  