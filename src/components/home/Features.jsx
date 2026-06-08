import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe2, Lightbulb, Check } from 'lucide-react';
import FadeInSection from '../shared/FadeInSection';

const Features = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <FadeInSection>
          <div className="about-hero">
            <h2>Building Brands That Touch Everyday Life</h2>
            <p>
              Agrim International Nigeria is a diversified FMCG and healthcare company delivering trusted, 
              affordable, and quality products across food, hygiene, healthcare, beverage, and lifestyle sectors.
            </p>
            <div className="about-divider">⸻</div>
          </div>

          <div className="about-row-cards">
            <div className="about-row-card">
              <div className="about-row-card-left">
                <div className="about-feature-icon">
                  <ShieldCheck size={36} />
                </div>
                <h3>Quality Products, Trusted Standards</h3>
              </div>
              <div className="about-row-card-right">
                <ul className="about-card-list">
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Consumer-focused product development</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Reliable manufacturing and sourcing</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Strong quality assurance practices</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Products tailored for African needs</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="about-row-card">
              <div className="about-row-card-left">
                <div className="about-feature-icon">
                  <Globe2 size={36} />
                </div>
                <h3>Nationwide Market Reach</h3>
              </div>
              <div className="about-row-card-right">
                <ul className="about-card-list">
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Wide distribution network</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Presence across retail channels</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Strong wholesale and trade support</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Scalable route-to-market systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="about-row-card">
              <div className="about-row-card-left">
                <div className="about-feature-icon">
                  <Lightbulb size={36} />
                </div>
                <h3>Innovation for Everyday Value</h3>
              </div>
              <div className="about-row-card-right">
                <ul className="about-card-list">
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Affordable solutions for families</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Multi-category brand portfolio</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Continuous product improvement</span>
                  </li>
                  <li>
                    <Check size={16} className="bullet-check-icon" />
                    <span>Built for long-term consumer trust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-cta-container">
            <Link to="/about" className="btn btn-primary btn-about-cta">Dive In</Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Features;
