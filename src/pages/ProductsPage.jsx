import React from 'react';
import { productsData } from '../data/products';

const ProductsPage = () => {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '6rem', backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <h1 className="section-title">Explore Our Brands</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
          {productsData.map((prod) => (
            <div key={prod.id} style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              gap: '2.5rem', 
              alignItems: window.innerWidth < 768 ? 'flex-start' : 'center', 
              backgroundColor: 'var(--color-white)', 
              padding: '3rem', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(92, 58, 33, 0.05)' 
            }}>
              <div style={{ flexShrink: 0, backgroundColor: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '50%' }}>
                {prod.largeIcon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>{prod.title}</h3>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{prod.desc}</p>
                <a href={prod.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '1rem' }}>Visit Website</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
