import React from 'react';
import './jewellery.css';
import Jumkas from '../assets/jhumka.png'; 
import Necklaces from '../assets/necklace.png'; 
import Kangans from '../assets/kangan.png';

const products = [
  {
    id: 1,
    name: "Jhumkas",
    image: Jumkas,          
    price: "$100",
  },
  {
    id: 2,
    name: "Necklaces",
    image: Necklaces, 
    price: "$100",
  },
  {
    id: 3,
    name: "Kangans",
    image: Kangans, 
    price: "$100",
  }
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>Jewellery Accessories</h2>
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
