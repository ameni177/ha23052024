// src/Product.js
import React, { useEffect } from 'react';
import './products.css';
import { useState } from 'react';

const Product = ({ name, preis, imageURL, menge }) => {
  const [timer,settimer] = useState(60);
  
 useEffect( ()=>{

setInterval(()=>{settimer(prevtimer=>prevtimer-1)},1000);
//return () => clearInterval(interval);

  },[])
  return (
    
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>Preis: €{preis}</p>
      <p>{menge > 0 ? `Auf Lager: ${menge}` : 'Nicht verfügbar'}</p>
      <p>Verbleibende Zeit : {timer} Seconds</p>

    </div>
  );
};

export default Product;
