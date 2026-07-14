import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, CheckCircle2, X, Users, Activity, ShieldCheck, BookOpen, Building2, HeartHandshake, Factory, TrendingUp } from 'lucide-react';
import './CondomsPage.css';

const BRANDS_DATA = {
  tango: {
    title: 'Tango',
    tagline: '“Protection you can trust.”',
    desc: "Tango is a premium protection brand focused on promoting safety, confidence, and responsible relationships.\n\nManufactured to high quality standards, Tango products are designed to provide reliability, comfort, and confidence.",
    logo: '/assets/hygiene/image-condoms-logo.png',
    logoAlt: 'Tango Condoms',
    image: '/assets/hygiene/tango-condom.png',
    variantsTitle: 'Product Range',
    variants: [
      { name: 'Premium condoms' },
      { name: 'Lubricated variants' },
      { name: 'Textured variants' },
      { name: 'Flavoured options' },
      { name: 'Extra safety variants' }
    ],
    detailsTitle: 'Superior Pleasure, Uncompromising Safety',
    detailsDesc: 'Every batch undergoes strict safety checks, electronic testing, and dermatological reviews to ensure your peace of mind.',
    color: '#e11d48',
    accentColor: '#dc2626'
  },
  kuchi: {
    title: 'KUCHI KUCHI',
    tagline: '“Protection you can trust.”',
    desc: "Kuchi Kuchi is an accessible and affordable condom brand designed for mass-market consumers without compromising on quality and reliability.\n\nThe brand is positioned to offer trusted protection at affordable price points across pharmacies, supermarkets, and open markets.",
    logo: '/assets/hygiene/image-kkcondoms-logo.png',
    logoAlt: 'Kuchi Kuchi Condoms',
    image: '/assets/hygiene/kuchi-kuchi-condom.png',
    variantsTitle: 'Product Benefits',
    variants: [
      { name: 'Affordable pricing' },
      { name: 'Comfortable use' },
      { name: 'Reliable protection' },
      { name: 'Widely accessible' }
    ],
    detailsTitle: 'Affordable Protection, Trusted Quality',
    detailsDesc: 'Designed for mass-market availability, Kuchi Kuchi delivers high-reliability protection at price points that fit every budget without compromise.',
    color: '#f472b6',
    accentColor: '#ec4899'
  }
};

const CondomsPage = () => {
  const [activeBrand, setActiveBrand] = useState('tango');
  const [showImpactModal, setShowImpactModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = BRANDS_DATA[activeBrand];

  return (
    <div className="condoms-page-wrapper" style={{ '--page-brand-color': data.color, '--page-accent-color': data.accentColor }}>
      {/* Top Navigation */}
      <div className="condoms-nav">
        <Link to="/products" className="back-btn">
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </Link>
        <img
          src={data.logo}
          alt={data.logoAlt}
          className="condoms-nav-logo"
        />
        <Link to="/hygiene" className="back-btn secondary">
          <span>Hygiene Division</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="condoms-hero">
        <div className="hero-grid">
          {/* Left: Product Info */}
          <div className="hero-text">
            <span className="section-label">Intimate Protection</span>
            <div className="brand-selector-tabs">
              <button 
                className={`tab-btn ${activeBrand === 'tango' ? 'active' : ''}`}
                onClick={() => setActiveBrand('tango')}
              >
                Tango
              </button>
              <button 
                className={`tab-btn ${activeBrand === 'kuchi' ? 'active' : ''}`}
                onClick={() => setActiveBrand('kuchi')}
              >
                Kuchi Kuchi
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="hero-title">{data.title}</h1>
                <p className="hero-tagline">{data.tagline}</p>
                <p className="hero-desc">{data.desc}</p>

                <div className="cta-group">
                  <Link to="/hygiene/contact" className="btn-primary">
                    Enquire Now
                  </Link>
                  <a href="#details" className="btn-secondary">
                    View Details
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Render 3D style mockup display */}
          <div className="hero-media">
            <div className="mockup-container">
              <div className="mockup-glowing-back"></div>
              
              {/* Cupid 1 Decoration */}
              <img 
                src="/assets/hygiene/cupid-1.png" 
                alt="Cupid Illustration Left" 
                className="cupid-decor cupid-left"
              />

              <motion.img 
                key={activeBrand}
                initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                src={data.image} 
                alt={`${data.title} Packaging Box`} 
                className="main-product-image"
              />

              {/* Cupid 2 Decoration */}
              <img 
                src="/assets/hygiene/cupid-2.png" 
                alt="Cupid Illustration Right" 
                className="cupid-decor cupid-right"
              />

              <div className="mockup-reflection"></div>
              <div className="mockup-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section id="details" className="details-section">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBrand}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-header">
                <span className="section-badge">Quality Guarantee</span>
                <h2>{data.detailsTitle}</h2>
                <p>{data.detailsDesc}</p>
              </div>

              {/* Symmetrical Centered Range/Benefits Layout */}
              <div className="condoms-range-container">
                <div className="details-card range-only-card">
                  <h3>{data.variantsTitle}</h3>
                  <div className="condoms-range-grid">
                    {data.variants.map((v, i) => (
                      <motion.div 
                        key={i} 
                        className="condoms-range-item"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 12 }}
                      >
                        <div className="variant-icon">
                          <CheckCircle2 size={22} />
                        </div>
                        <h4>{v.name}</h4>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="manufacturing-section">
        <div className="container">
          <div className="manufacturing-grid">
            
            {/* Left Column: Details & Stats */}
            <div className="manufacturing-left">
              <span className="manufacturing-badge">
                <Factory size={14} />
                <span>Local Manufacturing</span>
              </span>
              <h2>Nigeria’s First Condom Manufacturing Facility</h2>
              <h3>Advancing Local Manufacturing in Healthcare</h3>
              
              <p className="mfg-text">
                Agrim International Nigeria, through <strong>Agrim Pharmaceutical & Health Care FZE</strong>, proudly operates Nigeria’s first condom manufacturing facility, located in the Calabar Export Processing Zone (EPZ), Cross River State.
              </p>
              <p className="mfg-text">
                As one of the very few condom manufacturing facilities in Africa, the plant represents a major step toward increasing local production capacity while supporting employment generation, healthcare accessibility, and public health initiatives. Public reports describe the facility as the first condom factory in Nigeria and only the second of its kind in Africa.
              </p>

              {/* Glassmorphic Production Stat Display */}
              <div className="mfg-stat-card">
                <div className="stat-glow"></div>
                <div className="stat-number">300,000+</div>
                <div className="stat-label">Packs Daily Production Capacity</div>
                <p className="stat-subtext">Manufactured under strict quality and safety standards when operating at full capacity.</p>
              </div>
            </div>

            {/* Right Column: Pillars Grid */}
            <div className="manufacturing-right">
              <div className="mfg-pillars-header">
                <h4>Empowering Local Growth</h4>
                <p>The facility was established to support key national healthcare and industrial objectives:</p>
              </div>

              <div className="mfg-pillars-grid">
                <div className="mfg-pillar-item">
                  <div className="mfg-pillar-icon green">
                    <Factory size={22} />
                  </div>
                  <div className="mfg-pillar-content">
                    <h5>Local Capability</h5>
                    <p>Increased local manufacturing capability to strengthen domestic healthcare output.</p>
                  </div>
                </div>

                <div className="mfg-pillar-item">
                  <div className="mfg-pillar-icon blue">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="mfg-pillar-content">
                    <h5>Product Accessibility</h5>
                    <p>Improved access to high-quality protection products across pharmacies and open markets.</p>
                  </div>
                </div>

                <div className="mfg-pillar-item">
                  <div className="mfg-pillar-icon purple">
                    <TrendingUp size={22} />
                  </div>
                  <div className="mfg-pillar-content">
                    <h5>Reduced Reliance</h5>
                    <p>Substantial reduction in import dependency for condoms and preventive items.</p>
                  </div>
                </div>

                <div className="mfg-pillar-item">
                  <div className="mfg-pillar-icon pink">
                    <Users size={22} />
                  </div>
                  <div className="mfg-pillar-content">
                    <h5>Employment & Skills</h5>
                    <p>Job creation, skill building, and long-term industrial growth in Nigeria's healthcare sector.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Impact / Public Health Partnerships Section */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-card-wrapper">
            <div className="impact-badge">
              <HeartHandshake size={16} />
              <span>Social Impact</span>
            </div>

            <div className="impact-grid">
              <div className="impact-left">
                <h2>NGO & Institutional Partnerships for Public Health</h2>
                <h3>Condom Access & Public Health Support</h3>
                <p className="impact-lead">
                  Through our healthcare and protection portfolio, Agrim International Nigeria works with institutions, NGOs, healthcare stakeholders, pharmacies, and community organisations to improve accessibility to quality products.
                </p>
                <div className="tagline-box">
                  <p className="tagline-text">“Promoting safety, protection awareness, and health equity.”</p>
                </div>
              </div>

              <div className="impact-right">
                <blockquote className="impact-quote">
                  “Through Tango and Kuchi Kuchi, we support supply partnerships aimed at promoting responsible protection awareness.”
                </blockquote>
                <p className="impact-desc">
                  Research and health programs in Nigeria continue to highlight the importance of condom accessibility and education in preventive healthcare outcomes. We welcome collaborations with public health networks and educators to drive positive change.
                </p>
                <button
                  onClick={() => setShowImpactModal(true)}
                  className="impact-btn"
                >
                  View Collaboration Areas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      {showImpactModal && (
        <div className="impact-modal-overlay" onClick={() => setShowImpactModal(false)}>
          <div className="impact-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setShowImpactModal(false)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <HeartHandshake className="modal-icon" size={32} />
              <h2>Public Health Collaboration Areas</h2>
              <p>Agrim International Nigeria welcomes collaborations with partners across these critical healthcare areas:</p>
            </div>

            <div className="modal-grid">
              <div className="focus-card">
                <div className="focus-icon-box pink">
                  <Users size={24} />
                </div>
                <h4>NGOs</h4>
                <p>Supporting local and international NGO supply chains to extend protection access to high-need and underserved areas.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box red">
                  <Activity size={24} />
                </div>
                <h4>Public Health Organisations</h4>
                <p>Coordinating with public health bodies to support regional awareness programs and community-wide safety campaigns.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box rose">
                  <ShieldCheck size={24} />
                </div>
                <h4>HIV/AIDS Awareness Programs</h4>
                <p>Partnering with advocacy groups and clinics to provide reliable preventive barriers and essential education resources.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box purple">
                  <BookOpen size={24} />
                </div>
                <h4>Youth Education Initiatives</h4>
                <p>Supporting programs that promote safety awareness, youth-led workshops, and responsible relationship guidelines.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box blue">
                  <Heart size={24} />
                </div>
                <h4>Family Planning Organisations</h4>
                <p>Enhancing access to reproductive choices and health-focused counseling to support healthy family structures.</p>
              </div>

              <div className="focus-card">
                <div className="focus-icon-box emerald">
                  <Building2 size={24} />
                </div>
                <h4>Institutional Healthcare Partners</h4>
                <p>Partnering with hospital systems, pharmacy networks, and medical centers for structured supply distribution.</p>
              </div>

              <div className="focus-card quote-focus-card">
                <div className="quote-badge">Our Objective</div>
                <p className="focus-belief">“To support programs that improve access, awareness, education, and responsible preventive healthcare practices.”</p>
                <p className="focus-tagline">Protection You Can Trust.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="condoms-cta">
        <div className="cta-card">
          <h2>Partner With Agrim Distribution</h2>
          <p>Become a distributor, retail partner, or pharmacy vendor for Tango & Kuchi Kuchi Condoms in West Africa. We support our partners with scalable supply chains and marketing assets.</p>
          <Link to="/hygiene/contact" className="cta-btn">
            Become a Partner
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CondomsPage;
