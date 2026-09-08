import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import { ArrowRight, Boxes, Globe2, ShieldCheck } from 'lucide-react';

const categoryImages = {
  'beverages': '/assets/spirits.png',
  'pharma': '/assets/pharma.jpeg',
  'candies': '/assets/candy.jpeg',
  'sauces': '/assets/tomato-paste.png'
};

const productMeta = {
  beverages: {
    eyebrow: 'Tombo Beverages',
    stat: 'RTD & spirits',
    tone: 'Warm evenings, retail shelves, and social occasions'
  },
  pharma: {
    eyebrow: 'Everyday Care',
    stat: 'Hygiene range',
    tone: 'Comfort, protection, and household confidence'
  },
  candies: {
    eyebrow: 'Tobo Treats',
    stat: 'Sweet retail',
    tone: 'Colorful treats built for quick joyful moments'
  },
  sauces: {
    eyebrow: 'Topisto Foods',
    stat: 'Cooking blends',
    tone: 'Rich pantry staples for bold everyday meals'
  }
};

const portfolioStats = [
  { icon: <Boxes size={18} />, label: 'Diverse FMCG categories' },
  { icon: <Globe2 size={18} />, label: 'African market focus' },
  { icon: <ShieldCheck size={18} />, label: 'Quality-led brand standards' }
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="container">
        <section className="products-hero-panel">
          <div className="products-hero-copy">
            <span className="products-eyebrow">Portfolio</span>
            <h1 className="products-title">Brands Built for Everyday Demand</h1>
            <p className="products-intro">
              Agrim International brings together food, beverage, hygiene, healthcare, and confectionery brands designed for accessible quality and reliable distribution.
            </p>
          </div>
          <div className="products-hero-stats">
            {portfolioStats.map((item) => (
              <div key={item.label} className="products-stat-pill">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="products-page-container">
          {productsData.map((prod) => (
            <article key={prod.id} className="product-card-horizontal">
              <div className="product-card-image-wrapper">
                <Link to={prod.link || '/maintenance'} aria-label={`Explore ${prod.title}`}>
                  <img 
                    src={categoryImages[prod.id] || '/assets/tomato-paste.png'} 
                    alt={prod.title} 
                    className="product-card-image"
                  />
                </Link>
              </div>
              <div className="product-card-content">
                <span className="product-card-eyebrow">{productMeta[prod.id]?.eyebrow}</span>
                <h3 className="product-card-title">{prod.title}</h3>
                <p className="product-card-desc">{prod.shortDesc}</p>
                <div className="product-card-meta">
                  <span>{productMeta[prod.id]?.stat}</span>
                  <span>{productMeta[prod.id]?.tone}</span>
                </div>
                <Link to={prod.link || '/maintenance'} className="btn-product-explore">
                  Explore <span><ArrowRight size={18} /></span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
