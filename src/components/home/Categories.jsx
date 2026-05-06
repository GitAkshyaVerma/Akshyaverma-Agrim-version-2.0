import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../shared/FadeInSection';
import { productsData } from '../../data/products';

const categoryImages = {
  'beverages': '/assets/spirits.png',
  'pharma': '/assets/pharma.jpeg',
  'candies': '/assets/candy.jpeg',
  'sauces': '/assets/tomato-paste.png'
};

const Categories = () => {
  return (
    <section id="products" className="categories">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Our Diverse Portfolio</h2>
          <div className="category-grid">
            {productsData.map((product) => (
              <div className="category-card" key={product.id}>
                <div className="category-img-wrapper" style={{ position: 'relative' }}>
                  <img
                    src={categoryImages[product.id] || '/assets/tomato-paste.png'}
                    alt={product.title}
                    className="category-image"
                  />
                </div>
                <div className="category-content">
                  <h3 className="category-title">{product.title}</h3>
                  <p className="category-desc">{product.shortDesc}</p>
                  <Link to="/products" className="category-cta">
                    View Range <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="btn btn-primary btn-portfolio-more">Know More</Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Categories;
