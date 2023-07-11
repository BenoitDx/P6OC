import React from "react";
import { useParams, Navigate, Route } from "react-router-dom";
import data from "../data/logementData.json"

const AccommodationContainer = () => {
    const { id } = useParams();
    const cardData = data.find((item) => item.id === id);
  
    if (!cardData) {
      return <h1>Test</h1>;
    }
  
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  };
  
  export default AccommodationContainer;