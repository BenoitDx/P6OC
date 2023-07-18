import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png"
import "../styles/styles.css" 




const Header = () => {
    return (
        <div className='header-container'>
      
        <Link className='link-pages' to="/">
          <h1 className='header-tile'>
            <img className='letter-title' src={logo} alt="logo kasa"/>
          </h1>
        </Link>
      

      <nav className='nav-part'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <Link className='link-pages home-active' to="/">Accueil</Link>
          </li>
          <li className='nav-li'>
            <Link className='link-pages propos-active' to="/About">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
    

    )
}

export default Header;