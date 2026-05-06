import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowRight } from 'lucide-react';

const categoryImages = {
  'beverages': '/assets/spirits.png',
  'pharma': '/assets/pharma.jpeg',
  'candies': '/assets/candy.jpeg',
  'sauces': '/assets/tomato-paste.png'
};

const bgPositions = [
  { top: '5%', left: '5%', size: 60, opacity: 0.15 },
  { top: '60%', left: '8%', size: 80, opacity: 0.1 },
  { top: '15%', right: '10%', size: 55, opacity: 0.12 },
  { bottom: '10%', right: '15%', size: 70, opacity: 0.15 },
  { top: '40%', right: '5%', size: 45, opacity: 0.1 }
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="container">
        <h1 className="section-title">Explore Our Brands</h1>
        <div className="products-page-container">
          {productsData.map((prod) => (
            <div key={prod.id} className="product-card-horizontal">
              <div className="product-card-image-wrapper">
                {bgPositions.map((pos, i) => (
                  <div key={i} className="product-bg-icon" style={{ ...pos, filter: 'blur(3px)' }}>
                    {React.cloneElement(prod.icon, { size: pos.size, color: 'var(--color-primary)' })}
                  </div>
                ))}
                <img 
                  src={categoryImages[prod.id] || '/assets/tomato-paste.png'} 
                  alt={prod.title} 
                  className="product-card-image"
                />
              </div>
              <div className="product-card-content">
                <h3 className="product-card-title">{prod.title}</h3>
                <p className="product-card-desc">{prod.desc}</p>
                <Link to="/maintenance" className="btn-product-explore">
                  Explore <span><ArrowRight size={18} /></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
