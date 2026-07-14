import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, ShieldCheck, Check } from 'lucide-react';
import './DiapersPage.css';

const DIAPER_FEATURES = [
  {
    title: 'Soft Inner Comfort Layer',
    desc: 'Cloud-soft inner lining that cushions and prevents friction, protecting baby’s delicate skin.',
    color: '#10b981'
  },
  {
    title: 'High Absorbency',
    desc: 'Advanced locks-fluid channel technology for rapid absorption and continuous dryness.',
    color: '#3498db'
  },
  {
    title: 'Leakage Protection',
    desc: '3D leak guard barriers and elastic side borders to prevent messy side leakage.',
    color: '#e74c3c'
  },
  {
    title: 'Comfortable Fit',
    desc: 'Highly flexible waistband and side tabs that stretch comfortably to baby waist contour.',
    color: '#f1c40f'
  },
  {
    title: 'Skin-Friendly Material',
    desc: 'Dermatologically safe, hypoallergenic fabrics designed to stay rash-free and pure.',
    color: '#9b59b6'
  },
  {
    title: 'Day and Night Use',
    desc: 'Perfect for active daytime crawling and overnight protection for dry sleep.',
    color: '#e67e22'
  }
];

const CATEGORIES = [
  {
    name: 'Open Diapers',
    image: '/assets/hygiene/diapers-open.png',
    desc: 'Standard adjustable diapers designed with custom flexi-tabs for easy changing.',
    sizes: [
      { label: 'Size 2 (S)', detail: 'Small size for growing infants' },
      { label: 'Size 3 (M)', detail: 'Medium size for active crawlers' },
      { label: 'Size 4 (L)', detail: 'Large size for standing toddlers' }
    ],
    packs: ['Standard packs (Carry Pack)', 'Eco packs', 'Jumbo packs']
  },
  {
    name: 'Pull-Up Diapers',
    image: '/assets/hygiene/diaper-pull-up.png',
    desc: 'Easy-on, easy-off pants designed for active toddlers and potty-training convenience.',
    sizes: [
      { label: 'Medium (M)', detail: 'Comfort stretch for mobile babies' },
      { label: 'Large (L)', detail: 'Max absorbency for busy walkers' }
    ],
    packs: ['Standard packs (Carry Pack)']
  }
];

const DiapersPage = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (idx) => {
    setFlippedCards(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="diapers-page-wrapper">
      {/* Navigation */}
      <div className="diapers-nav">
        <Link to="/products" className="back-btn">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>
        <img
          src="/assets/hygiene/image-diapers-logo.png"
          alt="4D Babyeezz"
          className="diapers-nav-logo"
        />
        <Link to="/hygiene" className="back-btn secondary">
          <span>Hygiene Division</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="diapers-hero-section-container">
        <div className="diapers-hero">
          <div className="hero-grid">
            {/* Left text column */}
            <div className="hero-text">
              <span className="section-label">Gentle Baby Care</span>
              <h1 className="hero-title">Babyeezz Diapers</h1>
              <p className="hero-tagline">“Comfort, care, and confidence for every baby.”</p>
              
              <div className="hero-desc-block">
                <p className="hero-desc">
                  Babyeezz is a trusted baby care brand dedicated to providing comfort, protection, and superior hygiene solutions for babies.
                </p>
                <p className="hero-desc secondary-desc">
                  Designed with softness, absorbency, and comfort in mind, Babyeezz products are made to help babies stay dry, comfortable, and protected throughout the day and night.
                </p>
              </div>

              <div className="diapers-badges">
                <div className="badge">
                  <Heart size={18} />
                  <span>Premium Softness</span>
                </div>
                <div className="badge">
                  <ShieldCheck size={18} />
                  <span>Dermatologically Safe</span>
                </div>
              </div>

              <div className="cta-group">
                <Link to="/hygiene/contact" className="btn-primary">
                  Order Samples / Enquire
                </Link>
                <a href="#features" className="btn-secondary">
                  View Benefits
                </a>
              </div>
            </div>

            {/* Right image display */}
            <div className="hero-media">
              <div className="mockup-container">
                <div className="mockup-glowing-back"></div>
                
                {/* Background Cloud (cloud-1) */}
                <img 
                  src="/assets/hygiene/cloud-1.png" 
                  alt="Background Cloud" 
                  className="diapers-cloud cloud-bg" 
                />

                {/* Additional Small Background Cloud */}
                <img 
                  src="/assets/hygiene/cloud-1.png" 
                  alt="Background Cloud Small" 
                  className="diapers-cloud cloud-bg-small" 
                />

                <motion.img 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="/assets/hygiene/diapers_hero.png" 
                  alt="Babyeezz Diapers Package" 
                  className="main-product-image float-anim-soft"
                />

                {/* Foreground Cloud (cloud-2) */}
                <img 
                  src="/assets/hygiene/cloud-2.png" 
                  alt="Foreground Cloud" 
                  className="diapers-cloud cloud-fg" 
                />

                <div className="mockup-reflection"></div>
                <div className="mockup-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Benefits</h2>
            <p>Every Babyeezz diaper is built around safety, dryness, and premium ergonomics to nurture your baby's skin.</p>
          </div>

          <div className="features-grid">
            {DIAPER_FEATURES.map((feat, idx) => (
              <motion.div 
                key={idx} 
                className="feature-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon-wrapper" style={{ '--icon-color': feat.color }}>
                  <Sparkles size={20} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="diapers-categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Categories</h2>
            <p>Our brand focuses on combining affordability with quality, making premium baby care more accessible to families.</p>
          </div>

          <div className="diapers-categories-grid">
            {CATEGORIES.map((cat, idx) => {
              const isFlipped = !!flippedCards[idx];
              return (
                <div key={idx} className={`diaper-card-container ${isFlipped ? 'is-flipped' : ''}`}>
                  <div className="diaper-card-inner">
                    {/* Front side */}
                    <div 
                      className="diaper-category-card diaper-category-card-front"
                      style={{ backgroundImage: `url(${cat.image})` }}
                    >
                      <div className="card-front-overlay"></div>
                      <div className="card-front-content">
                        <h3>{cat.name}</h3>
                        <button className="card-flip-btn" onClick={() => toggleFlip(idx)}>
                          Show Details &rarr;
                        </button>
                      </div>
                    </div>

                    {/* Back side */}
                    <div className="diaper-category-card diaper-category-card-back">
                      <div>
                        <div className="diaper-category-header">
                          <h3>{cat.name}</h3>
                          <p>{cat.desc}</p>
                        </div>
                        
                        <div className="diaper-category-body">
                          <div className="sizes-block">
                            <h4>Available Sizes:</h4>
                            <div className="sizes-tags">
                              {cat.sizes.map((s, i) => (
                                <div key={i} className="size-tag-item">
                                  <span className="size-tag-name">{s.label}</span>
                                  <span className="size-tag-desc">{s.detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="packs-block">
                            <h4>Packaging Options:</h4>
                            <ul className="packs-list">
                              {cat.packs.map((p, i) => (
                                <li key={i}>
                                  <Check size={16} />
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <button className="card-flip-btn back" onClick={() => toggleFlip(idx)}>
                        &larr; Show Image
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="diapers-cta">
        <div className="cta-card">
          <h2>Distribute Babyeezz Diapers</h2>
          <p>Partner with Agrim International Nigeria to make quality, affordable diapers available to families in your trade region. Contact our team to explore bulk purchasing terms.</p>
          <Link to="/hygiene/contact" className="cta-btn">
            Connect With Sales
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DiapersPage;
