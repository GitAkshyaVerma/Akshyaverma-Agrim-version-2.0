import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../shared/FadeInSection';
import { productsData } from '../../data/products';

const Categories = () => {
  return (
    <section id="products" className="categories">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Our Diverse Portfolio</h2>
          <div className="category-grid">
            {productsData.map((product) => (
              <div className="category-card" key={product.id}>
                <div className="category-img-wrapper">
                  {product.icon}
                </div>
                <div className="category-content">
                  <h3 className="category-title">{product.title}</h3>
                  <p className="category-desc">{product.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/products" className="btn btn-primary">Know More</Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Categories;
