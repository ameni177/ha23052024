import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import products from './products';
import Product from './product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="App">
  <h1>Mein Shop</h1>
  <div className="product-list">
    {products.map((product, index) => (
      <Product 
        key={index}
        name={product.name}
        preis={product.preis}
        imageURL={product.imageURL}
        menge={product.menge}
      />
    ))}
  </div>
</div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
