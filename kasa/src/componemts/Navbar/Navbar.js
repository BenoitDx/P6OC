import React from 'react'
import {Link} from 'react-router-dom'
import logo from "./logo.png"
import style from "./Navbar.css"

export default function Navbar() {
    return (
        <div className='Navigation'>
            <h1>
                <img src={logo}></img>
            </h1>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
        </div>
    

    )
}