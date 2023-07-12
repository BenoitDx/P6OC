import React from "react";
import { useParams, Route } from "react-router-dom";
import data from "../data/logementData.json"
import Error from "../pages/Error";
import Cards from "./Cards";

const AccommodationContainer = () => {
    const { id } = useParams();
    const cardData = data.find((item) => item.id === id);
  
    if (!cardData) {
      return 
      <Route path="/*" element={!cardData && <Error />} />
    }
  
    return (
      <div>
        <Cards/>
        
        
      </div>
    );
  };
  
  export default AccommodationContainer;