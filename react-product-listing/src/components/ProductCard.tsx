import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <div className="product-price">
            <span className="price">${product.price.toFixed(2)}</span>
            {product.discountPercentage > 0 && (
              <span className="discount">-{product.discountPercentage.toFixed(1)}%</span>
            )}
          </div>
          <div className="product-meta">
            <span className="rating">⭐ {product.rating.toFixed(1)}</span>
            <span className="stock">Stock: {product.stock}</span>
          </div>
          <div className="product-info">
            <span className="brand">Brand: {product.brand}</span>
            <span className="category">Category: {product.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};