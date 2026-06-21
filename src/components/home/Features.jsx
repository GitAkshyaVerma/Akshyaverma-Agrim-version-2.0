import React from 'react';
import FadeInSection from '../shared/FadeInSection';

const Features = () => {
  return (
    <section id="about" className="heritage-section">
      <div className="container">
        <FadeInSection>
          <div className="heritage-grid">
            {/* Left side: Original About Us tagline, title and description */}
            <div className="heritage-content">
              <span className="heritage-subtitle">About Us</span>
              <h2 className="heritage-title">Building Brands That Touch Everyday Life</h2>
              
              <p className="heritage-text">
                Agrim International Nigeria is a diversified FMCG and healthcare company delivering trusted, affordable, and quality products across food, hygiene, healthcare, beverage, and lifestyle sectors.
              </p>
              
              <p className="heritage-text">
                Our operations focus on local value creation, reliable supply networks, and continuous product improvement to ensure that premium quality is accessible to every household across West Africa.
              </p>
            </div>

            {/* Right side: Vision and Mission */}
            <div className="heritage-principles">
              <div className="heritage-principle-card">
                <h3 className="principle-title">Vision</h3>
                <p className="principle-text">
                  To become a leading African FMCG and healthcare company delivering trusted products that improve everyday life.
                </p>
              </div>
              
              <div className="heritage-principle-divider" />

              <div className="heritage-principle-card">
                <h3 className="principle-title">Mission</h3>
                <p className="principle-text">
                  To manufacture and distribute high-quality, affordable, and innovative products that meet the evolving needs of consumers while building strong partnerships with distributors, retailers, and communities.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Features;
