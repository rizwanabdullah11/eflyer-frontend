import React from 'react';
import './product.css';
import Laptop from '../assets/laptop.png'; 
import Mobile from '../assets/mobile.png'; 
import Computer from '../assets/computer.png';

const products = [
  {
    id: 1,
    name: "Laptop",
    image: Laptop,          
    price: "$100",
  },
  {
    id: 2,
    name: "Mobile",
    image: Mobile, 
    price: "$100",
  },
  {
    id: 3,
    name: "Computers",
    image: Computer, 
    price: "$100",
  }
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>Electronic</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Start Price {product.price}</p>
            <img src={product.image} alt={product.name} />
            <div className="product-actions">
              <button className="buy-now">Buy Now</button>
              <button className="see-more">See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="nav-button">&#8249;</button>
        <button className="nav-button">&#8250;</button>
      </div>
    </div>
  );
};

export default ProductList;
