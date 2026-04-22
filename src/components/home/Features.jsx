import React from 'react';
import { ShieldCheck, Leaf, Globe2 } from 'lucide-react';
import FadeInSection from '../shared/FadeInSection';

const Features = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <FadeInSection>
          <h2 className="section-title">Why Choose Agrim Internationals?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <ShieldCheck size={32} />
              </div>
              <div className="feature-info">
                <h3>Uncompromised Quality</h3>
                <p>Every product undergoes rigorous testing to meet global standards before reaching your home.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Leaf size={32} />
              </div>
              <div className="feature-info">
                <h3>Sustainable Sourcing</h3>
                <p>We are committed to environmentally responsible practices across our entire supply chain.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <Globe2 size={32} />
              </div>
              <div className="feature-info">
                <h3>Global Reach</h3>
                <p>Delivering excellence across borders, ensuring consistent availability and reliability.</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Features;
