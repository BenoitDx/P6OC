import React from "react"
import { Link } from 'react-router-dom';
import "../styles/Error.css"
const Error = () =>  {
  return (
    <div>
      <div className='erreur'>
        <div className='erreur_infos'>
          <h1 className='erreur_infos_title'>404</h1>
          <p className='erreur_infos_content'>Oups! La Page que vous recherchez n'existe pas!</p>
        </div>
        <Link className='erreur_infos_return' to='/'> Retournez à la page d'Accueil</Link>
      </div>
    </div>
  );
};

export default Error;