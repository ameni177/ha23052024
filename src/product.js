// src/Product.js
import React from 'react';
import './products.css';

const Product = ({ name, preis, imageURL, menge }) => {
  return (
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>Preis: €{preis}</p>
      <p>{menge > 0 ? `Auf Lager: ${menge}` : 'Nicht verfügbar'}</p>
    </div>
  );
};

export default Product;
