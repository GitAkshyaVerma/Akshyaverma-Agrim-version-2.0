import React from 'react';
import { ShieldCheck, Globe2, Lightbulb } from 'lucide-react';
import FadeInSection from '../shared/FadeInSection';

const Features = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <FadeInSection>
          <div className="about-hero">
            <h2>Nourishing Lives, Defining Excellence.</h2>
            <p>
              Our mission is to provide essential, high-quality goods globally. From premium beverages 
              and reliable hygiene products to delicious confectionery and flavorful food staples, 
              we are dedicated to enriching your everyday life through uncompromised excellence.
            </p>
          </div>

          <div className="feature-grid">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <ShieldCheck size={40} />
              </div>
              <h3>Uncompromised Quality</h3>
              <p>Every product undergoes rigorous testing to meet global standards before reaching your home.</p>
            </div>
            
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Globe2 size={40} />
              </div>
              <h3>Global Reach</h3>
              <p>We leverage a strong distribution network across 20+ countries, ensuring consistent availability.</p>
            </div>
            
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Lightbulb size={40} />
              </div>
              <h3>Purpose-Led Innovation</h3>
              <p>Committed to sustainable sourcing and advanced R&D to continuously improve our offerings.</p>
            </div>
          </div>

          <div className="impact-banner">
            <div className="impact-grid">
              <div className="impact-stat">
                <span className="impact-number">20+</span>
                <span className="impact-label">Countries Served Across Borders</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">4</span>
                <span className="impact-label">Diverse Verticals</span>
              </div>
              <div className="impact-stat">
                <span className="impact-number">100%</span>
                <span className="impact-label">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Features;
