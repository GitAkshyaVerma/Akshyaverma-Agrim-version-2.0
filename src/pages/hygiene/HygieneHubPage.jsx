import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Activity, Smile, ArrowLeft, ArrowRight } from 'lucide-react';
import './HygieneHubPage.css';

const BRANDS = [
  {
    id: 'condoms',
    name: 'Intimate Protection',
    brandName: 'Tango & Kuchi Kuchi',
    desc: 'Advanced safety and heightened sensitivity. Premium condoms engineered for absolute confidence, protection, and sensory connection.',
    image: '/assets/hygiene/condoms.png',
    link: '/hygiene/condoms',
    icon: <Activity size={28} />,
    color: '#e11d48',
    bgGradient: 'linear-gradient(135deg, rgba(225, 29, 72, 0.04) 0%, #ffffff 100%)',
    tag: 'Premium Protection'
  },
  {
    id: 'pads',
    name: 'Feminine Comfort',
    brandName: 'Womaneezz Pads',
    desc: 'Ultra-thin, dry-feel technology for uncompromised comfort and protection. Designed to keep you fresh, secure, and confident all day.',
    image: '/assets/hygiene/pads.png',
    link: '/hygiene/pads',
    icon: <Heart size={28} />,
    color: '#0ea5e9',
    bgGradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.04) 0%, #ffffff 100%)',
    tag: 'Cotton Soft Care'
  },
  {
    id: 'diapers',
    name: 'Gentle Baby Care',
    brandName: 'Babyeezz Diapers',
    desc: 'Hypoallergenic diapering with high-capacity absorbency. Designed with ultra-soft materials for active days and worry-free, dry nights.',
    image: '/assets/hygiene/diapers.png',
    link: '/hygiene/diapers',
    icon: <Smile size={28} />,
    color: '#10b981',
    bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.04) 0%, #ffffff 100%)',
    tag: 'Ultra Dry Absorbency'
  }
];

const HygieneHubPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hygiene-hub-page">
      {/* Dynamic Background Elements */}
      <div className="hygiene-bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <Link to="/products" className="hygiene-hub-back">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>

        {/* Hero Section */}
        <header className="hygiene-hub-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header-content"
          >
            <span className="hub-subtitle">Agrim Health & Hygiene</span>
            <h1 className="hub-title">Care, Protection & Everyday Comfort</h1>
            <div className="title-divider"></div>
            <p className="hub-description">
              We deliver trusted, dermatologically safe, and premium care products designed to support health, wellbeing, and confidence for families, women, and babies across Nigeria.
            </p>
          </motion.div>
        </header>

        {/* Brand Grid */}
        <div className="hygiene-brand-grid">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              className="hygiene-brand-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              style={{ '--accent-color': brand.color, background: brand.bgGradient }}
            >
              <div className="brand-card-inner">
                <div className="brand-card-img-wrapper">
                  <img src={brand.image} alt={brand.brandName} className="brand-card-image" />
                  <div className="brand-card-overlay"></div>
                  <span className="brand-card-tag">{brand.tag}</span>
                </div>
                
                <div className="brand-card-content">
                  <div className="brand-card-icon-wrapper" style={{ color: brand.color }}>
                    {brand.icon}
                  </div>
                  <span className="brand-category-label">{brand.name}</span>
                  <h3 className="brand-name-heading">{brand.brandName}</h3>
                  <p className="brand-card-desc">{brand.desc}</p>
                  
                  <Link to={brand.link} className="brand-explore-btn">
                    <span>Explore Brand</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HygieneHubPage;
