import React from "react";
import { useParams } from "react-router-dom";
import data from '../data/logementData.json';
import Slideshow from "../componemts/Slideshow";
import Infologement from "../componemts/Infologement";

const LogementDetail = () => {
  const { id } = useParams(); // Récupère l'ID de l'appartement dans l'URL

  // Recherche de l'appartement correspondant à l'ID dans les données
  const logement = data.find(item => item.id === id);

  return (
    <div>
      
      {logement && (
        <div>
          <Slideshow images={logement.pictures} />
          <Infologement />
        </div>
      )}
    </div>
  );
};

export default LogementDetail;