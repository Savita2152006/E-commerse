import React from 'react';
import './ProductCard.css';

export default function ProductCard({ image, title, price, oldPrice }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">
          <span>${price}</span>
          {oldPrice && <span className="old-price">${oldPrice}</span>}
        </div>
        <span className="lock-icon">🔒</span>
      </div>
    </div>
  );
}
