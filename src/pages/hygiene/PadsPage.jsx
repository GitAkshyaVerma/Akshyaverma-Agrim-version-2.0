import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Feather, Shield, Smile, Check, Heart, X, Users, Gift, Award, BookOpen, ChevronUp, ChevronDown } from 'lucide-react';
import './PadsPage.css';

const PAD_BENEFITS = [
  {
    title: 'High Absorbency',
    desc: 'Advanced super-absorbent core locks fluid instantly, maintaining a dry and fresh surface.',
    color: '#0284c7'
  },
  {
    title: 'Comfortable Fit',
    desc: 'Ergonomic shape designed to adapt dynamically to body movement and contour.',
    color: '#10b981'
  },
  {
    title: 'Leak Protection',
    desc: 'Double barrier channels and flexible wings provide secure side leakage prevention.',
    color: '#e11d48'
  },
  {
    title: 'Soft-Touch Material',
    desc: 'Hypoallergenic, cottony-soft top sheet protects sensitive skin from irritation.',
    color: '#f59e0b'
  },
  {
    title: 'Designed for Everyday Confidence',
    desc: 'Combines ultra-thin profile with high-capacity performance for absolute peace of mind.',
    color: '#9b59b6'
  }
];

const PRODUCT_RANGE = [
  {
    name: 'Heavy Flow',
    size: '290MM',
    image: '/assets/hygiene/heavy-flow-pad-napkin.png',
    desc: 'Extended length designed for heavy flow days and secure overnight protection.',
    absorption: '★★★★★',
    features: ['Double-wing security', 'Locks moisture instantly', 'Breathable backing layer']
  },
  {
    name: 'Extra Heavy Flow',
    size: '320MM',
    image: '/assets/hygiene/extra-haevy-flow-pad-napkin.png',
    desc: 'Maximum length and ultra-absorbent core for heavy cycle peaks and absolute confidence.',
    absorption: '★★★★★★',
    features: ['Super wide rear guard', 'Maximum containment capacity', 'Rash-free safety fabric']
  }
];

const PadsPage = () => {
  const [showImpactModal, setShowImpactModal] = useState(false);
  const [activeDetails, setActiveDetails] = useState({});

  const toggleCard = (index) => {
    setActiveDetails(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pads-page-wrapper">
      {/* Navigation */}
      <div className="pads-nav">
        <Link to="/products" className="back-btn">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>
        <Link to="/hygiene" className="back-btn secondary">
          <span>Hygiene Division</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pads-hero">
        <div className="hero-grid">
          {/* Left info panel */}
          <div className="hero-text">
            <span className="section-label">Feminine Care Solutions</span>
            <h1 className="hero-title">Womaneezz Pads</h1>
            <p className="hero-tagline">“Confidence, comfort, and care for every woman.”</p>

            <div className="hero-desc-block">
              <p className="hero-desc">
                Womaneezz is a feminine hygiene brand committed to empowering women through comfort, hygiene, confidence, and protection.
              </p>
              <p className="hero-desc secondary-desc">
                The brand offers high-quality sanitary products designed to provide comfort, absorbency, and protection for women during every stage of their cycle. Developed to combine quality and affordability while maintaining high hygiene standards.
              </p>
            </div>

            <div className="features-checklist">
              <div className="check-item">
                <Feather size={18} />
                <span>Soft-touch organic surface layers</span>
              </div>
              <div className="check-item">
                <Shield size={18} />
                <span>Complete leak protection & double wings</span>
              </div>
              <div className="check-item">
                <Smile size={18} />
                <span>High absorbency, dermatologically tested</span>
              </div>
            </div>

            <div className="cta-group">
              <Link to="/contact" className="btn-primary">
                Order Samples / Enquire
              </Link>
              <a href="#benefits" className="btn-secondary">
                View Benefits
              </a>
            </div>
          </div>

          {/* Right Product Display */}
          <div className="hero-media">
            <div className="mockup-container">
              <div className="mockup-glowing-back"></div>

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pads-mockup-wrapper"
              >
                {/* Left Wing Decoration */}
                <img
                  src="/assets/hygiene/pad-left-wing.png"
                  alt="Pad Left Wing"
                  className="pad-wing wing-left"
                />

                <img
                  src="/assets/hygiene/pads-hero.png"
                  alt="Womaneezz Sanitary Pads Pack"
                  className="main-product-image"
                />

                {/* Right Wing Decoration */}
                <img
                  src="/assets/hygiene/pad-right-wing.png"
                  alt="Pad Right Wing"
                  className="pad-wing wing-right"
                />
              </motion.div>

              <div className="mockup-reflection"></div>
              <div className="mockup-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Benefits</h2>
            <p>Designed to provide comfort, protection, and fresh skin care during every stage of your cycle.</p>
          </div>

          <div className="benefits-grid">
            {PAD_BENEFITS.map((feat, idx) => (
              <motion.div
                key={idx}
                className="benefit-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="benefit-icon-wrapper" style={{ '--icon-color': feat.color }}>
                  <Sparkles size={20} />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="range-section">
        <div className="container">
          <div className="section-header">
            <h2>Product Range</h2>
            <p>Sanitary Pads available in custom absorption levels for heavy and extra heavy flows.</p>
          </div>

          <div className="range-grid">
            {PRODUCT_RANGE.map((range, idx) => (
              <div key={idx} className="range-card">
                <div className="range-header">
                  <h3>{range.name}</h3>
                  <span className="range-size">{range.size}</span>
                </div>
                
                <div className="range-body-wrapper">
                  {/* Description Layer (underneath) */}
                  <div className="card-desc-panel">
                    <p className="range-desc">{range.desc}</p>

                    <div className="range-info-row">
                      <span className="label">Absorbency:</span>
                      <span className="value stars">{range.absorption}</span>
                    </div>

                    <div className="range-info-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.8rem' }}>
                      <span className="label">Key Specs:</span>
                      <ul className="range-features">
                        {range.features.map((f, i) => (
                          <li key={i}>
                            <Check size={14} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="card-toggle-link secondary" onClick={() => toggleCard(idx)}>
                      <ChevronDown size={16} />
                      <span>Show Product Image</span>
                    </button>
                  </div>

                  {/* Image Layer (slides up) */}
                  <div 
                    className={`card-image-panel ${activeDetails[idx] ? 'slide-up' : ''}`}
                    style={{ backgroundImage: `url(${range.image})` }}
                  >
                    <button className="card-toggle-link" onClick={() => toggleCard(idx)}>
                      <span>View Details</span>
                      <ChevronUp size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pad A Girl Initiative Section */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-card-wrapper">
            <div className="impact-badge">
              <Heart size={16} fill="currentColor" />
              <span>Social Impact</span>
            </div>

            <div className="impact-grid">
              <div className="impact-left">
                <h2>Pad A Girl Initiative</h2>
                <h3>Keeping Girls in School, Protecting Dignity</h3>
                <p className="impact-lead">
                  Through Womaneezz, Agrim International Nigeria supports initiatives aligned with menstrual hygiene awareness and girl-child dignity.
                </p>
                <div className="tagline-box">
                  <p className="tagline-text">“One Pad. One Girl. One Future.”</p>
                </div>
              </div>

              <div className="impact-right">
                <blockquote className="impact-quote">
                  “Periods Should Never Stop Dreams.”
                </blockquote>
                <p className="impact-desc">
                  Studies and NGO programs across Nigeria continue to show that access to sanitary products helps improve school attendance, dignity, confidence, and menstrual health awareness among young girls. We believe no girl should miss school because of lack of access to menstrual hygiene products.
                </p>
                <button
                  onClick={() => setShowImpactModal(true)}
                  className="impact-btn"
                >
                  Learn More About Our Focus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pop Window / Modal */}
      {showImpactModal && (
        <div className="impact-modal-overlay" onClick={() => setShowImpactModal(false)}>
          <div className="impact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowImpactModal(false)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <Heart className="modal-icon" size={32} fill="currentColor" />
              <h2>Our Outreach Focus</h2>
              <p>We are dedicated to removing barriers to education and promoting menstrual hygiene awareness.</p>
            </div>

            <div className="modal-grid">
              <div className="focus-card">
                <div className="focus-icon-box pink">
                  <Smile size={24} />
                </div>
                <h4>Menstrual Hygiene</h4>
                <p>Awareness education that breaks stigmas, explains natural cycles, and teaches hygienic practices.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box rose">
                  <Users size={24} />
                </div>
                <h4>School Outreach</h4>
                <p>Collaborating with local schools in Nigeria to create safe spaces and direct support networks for young girls.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box red">
                  <Gift size={24} />
                </div>
                <h4>Product Donations</h4>
                <p>Distributing high-quality Womaneezz sanitary pads directly to girls in underserved communities.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box purple">
                  <Award size={24} />
                </div>
                <h4>Confidence Education</h4>
                <p>Empowering girls with confidence-building workshops to encourage self-esteem and ambition.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box blue">
                  <BookOpen size={24} />
                </div>
                <h4>Supporting Education</h4>
                <p>Encouraging regular school attendance and supporting local communities to protect girl-child dignity.</p>
              </div>

              <div className="focus-card quote-focus-card">
                <div className="quote-badge">Core Belief</div>
                <p className="focus-belief">“Periods Should Never Stop Dreams.”</p>
                <p className="focus-tagline">One Pad. One Girl. One Future.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="pads-cta">
        <div className="cta-card">
          <h2>Partner With Womaneezz</h2>
          <p>We supply supermarkets, pharmacies, retail stores, and wholesale distribution networks with bulk quantities and trade support. Join hands with us to bring trusted feminine care to every home.</p>
          <Link to="/contact" className="cta-btn">
            Inquire Bulk Rates
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PadsPage;
