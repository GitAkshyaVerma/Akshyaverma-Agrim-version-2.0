import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-wrapper">
        <img
          src="/assets/heroSectionNew.jpeg"
          className="hero-bg"
          alt="Agrim Internationals Hero"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <span className="hero-subtitle">Premium Quality, Everyday</span>
        <h1 className="hero-title">Nourishing Lives With Excellence</h1>
        <p className="hero-desc">
          Agrim Internationals is a leading producer of diverse, high quality Fast Moving Consumer Goods. From premium beverages to essential care, we bring the best to your everyday life.
        </p>
        <div>
          <Link to="/#products" className="btn btn-primary">Explore Products</Link>
          <Link to="/#about" className="btn btn-outline">Our Story</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
