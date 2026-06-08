import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  Soup, 
  Cookie, 
  HeartPulse, 
  GlassWater, 
  Award, 
  TrendingUp, 
  Users, 
  Factory, 
  Activity, 
  CheckCircle,
  MapPin,
  ChevronRight
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-page-hero">
        <div className="container">
          <h1 className="about-page-title">About Agrim International Nigeria</h1>
          <p className="about-page-subtitle">Building Trusted Brands for Everyday Life</p>
        </div>
      </section>

      {/* Intro Overview */}
      <section className="about-page-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-text">
              <p className="lead-paragraph">
                Agrim International Nigeria is a diversified manufacturing, import, distribution, and consumer goods company committed to delivering quality products across the food, healthcare, hygiene, beverage, and lifestyle sectors in Nigeria and beyond.
              </p>
              <p>
                Built on a strong foundation of quality, innovation, affordability, and consumer trust, Agrim International Nigeria has developed a growing portfolio of brands that serve the everyday needs of consumers, families, retailers, distributors, wholesalers, pharmacies, supermarkets, open markets, and institutional channels.
              </p>
              <p>
                With a strong understanding of African consumer needs, we focus on providing products that are practical, reliable, accessible, and value-driven. Our operations span multiple consumer categories, allowing us to support households, businesses, and communities with products designed for daily use and long-term trust.
              </p>
            </div>
            <div className="about-intro-brand-box">
              <h3>Our Core Promise</h3>
              <p>"Every product we introduce is guided by a clear purpose: to meet everyday needs with quality, accessibility, and reliability."</p>
              <div className="brand-box-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-who-we-are">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="about-content-block">
            <p>
              Agrim International Nigeria operates across a broad value chain that includes manufacturing, sourcing, imports, nationwide distribution, market activation, retail penetration, and brand building.
            </p>
            <p>
              Our strength lies in our ability to identify consumer needs, develop relevant products, and ensure those products reach the right markets through efficient distribution and strong retail partnerships. From food products and confectionery to healthcare, hygiene, baby care, beverages, and household consumer brands, we are committed to making quality products available to a wide range of consumers.
            </p>
            <p>
              As a multi-category FMCG and healthcare company, we continue to expand our presence by combining international standards with local market understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision-mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="vision-icon-wrapper">
                <Target size={36} />
              </div>
              <h3>Our Vision</h3>
              <p>To become a leading African FMCG and healthcare company delivering trusted products that improve everyday life.</p>
            </div>
            <div className="mission-card">
              <div className="vision-icon-wrapper">
                <Compass size={36} />
              </div>
              <h3>Our Mission</h3>
              <p>To manufacture, source, and distribute high-quality, affordable, and innovative products that meet the evolving needs of consumers while building strong partnerships with distributors, retailers, institutions, and communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-what-we-do">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">Agrim International Nigeria serves multiple consumer sectors through a growing and diverse product portfolio.</p>
          
          <div className="what-we-do-grid">
            <div className="what-card">
              <div className="what-icon">
                <Soup size={28} />
              </div>
              <h4>Food & Cooking Solutions</h4>
              <p>We provide food products designed to support everyday cooking, meal preparation, and traditional African food preferences. Our food brands are created to deliver taste, convenience, consistency, and value for households, caterers, restaurants, and food service operators.</p>
            </div>
            
            <div className="what-card">
              <div className="what-icon">
                <Cookie size={28} />
              </div>
              <h4>Confectionery & Lifestyle Products</h4>
              <p>We develop fun, flavourful, and attractive confectionery products made for children, teenagers, families, and impulse retail channels. Our confectionery range is designed to bring enjoyment, excitement, and memorable experiences to consumers.</p>
            </div>
            
            <div className="what-card">
              <div className="what-icon">
                <HeartPulse size={28} />
              </div>
              <h4>Healthcare & Hygiene Products</h4>
              <p>We are committed to supporting health, wellness, hygiene, and personal care needs through accessible and trusted consumer products. Our healthcare and hygiene categories are developed with a focus on quality, affordability, safety, and reliability.</p>
            </div>
            
            <div className="what-card">
              <div className="what-icon">
                <GlassWater size={28} />
              </div>
              <h4>Beverage & Consumer Brands</h4>
              <p>Our beverage and lifestyle product categories are built to meet evolving consumer preferences, strengthen retail presence, and offer quality choices across modern and traditional trade channels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Strengths */}
      <section className="about-strengths">
        <div className="container">
          <h2 className="section-title">Our Core Strengths</h2>
          <div className="strengths-grid">
            <div className="strength-item">
              <div className="strength-icon"><Award size={24} /></div>
              <div>
                <h5>Multi-Category FMCG Expertise</h5>
                <p>Agrim International Nigeria operates across several high-demand consumer categories, giving us the ability to serve different market segments with a broad and balanced product portfolio.</p>
              </div>
            </div>
            <div className="strength-item">
              <div className="strength-icon"><TrendingUp size={24} /></div>
              <div>
                <h5>Nationwide Distribution Capability</h5>
                <p>Our distribution strength allows us to reach modern trade, open markets, supermarkets, pharmacies, wholesalers, distributors, kiosks, schools, and institutional buyers across Nigeria.</p>
              </div>
            </div>
            <div className="strength-item">
              <div className="strength-icon"><Users size={24} /></div>
              <div>
                <h5>Consumer-Focused Product Development</h5>
                <p>We develop products around real consumer needs, market behaviour, affordability, convenience, taste, quality, and everyday usability.</p>
              </div>
            </div>
            <div className="strength-item">
              <div className="strength-icon"><Factory size={24} /></div>
              <div>
                <h5>Manufacturing and Sourcing Excellence</h5>
                <p>Through strong manufacturing, sourcing, and import capabilities, we are able to maintain product availability, quality consistency, and competitive value.</p>
              </div>
            </div>
            <div className="strength-item">
              <div className="strength-icon"><Activity size={24} /></div>
              <div>
                <h5>Strong Market Activation</h5>
                <p>We focus on brand visibility, retail penetration, distributor engagement, and market activation to ensure our products remain relevant and accessible.</p>
              </div>
            </div>
            <div className="strength-item">
              <div className="strength-icon"><CheckCircle size={24} /></div>
              <div>
                <h5>Commitment to Quality and Affordability</h5>
                <p>Quality and affordability are central to our business. We aim to provide products that meet trusted standards while remaining accessible to everyday consumers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reach & Philosophy */}
      <section className="about-reach-philosophy">
        <div className="container">
          <div className="reach-philosophy-grid">
            <div className="reach-box">
              <div className="reach-header">
                <MapPin size={28} />
                <h3>Our Market Reach</h3>
              </div>
              <p>Agrim International Nigeria serves a wide and diverse customer base through multiple trade and distribution channels, including:</p>
              <ul className="reach-list">
                <li><span>Distributors and wholesalers</span></li>
                <li><span>Supermarkets and modern trade outlets</span></li>
                <li><span>Pharmacies and healthcare channels</span></li>
                <li><span>Open markets and retail stores</span></li>
                <li><span>Schools, kiosks, and impulse retail points</span></li>
                <li><span>Restaurants, caterers, and food service operators</span></li>
                <li><span>Institutional and commercial buyers</span></li>
              </ul>
            </div>
            <div className="philosophy-box">
              <h3>Our Brand Philosophy</h3>
              <p>
                At Agrim International Nigeria, we believe strong brands are built through trust, consistency, and consumer value. Every product we introduce is guided by a clear purpose: to meet everyday needs with quality, accessibility, and reliability.
              </p>
              <p>
                We are focused on building brands that are not only visible in the market but also meaningful in the lives of consumers. Whether it is helping families prepare better meals, supporting personal hygiene, offering enjoyable confectionery, or delivering trusted healthcare products, our goal is to create positive everyday experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="about-commitment">
        <div className="container">
          <h2 className="section-title">Our Commitment</h2>
          <div className="commitment-list-grid">
            <div className="commitment-item">
              <span className="commitment-number">01</span>
              <p>Delivering high-quality and affordable products</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">02</span>
              <p>Understanding and serving African consumer needs</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">03</span>
              <p>Building long-term distributor and retail partnerships</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">04</span>
              <p>Maintaining strong quality assurance practices</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">05</span>
              <p>Expanding access through reliable distribution</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">06</span>
              <p>Investing in innovation and brand development</p>
            </div>
            <div className="commitment-item">
              <span className="commitment-number">07</span>
              <p>Creating products that improve everyday life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Ahead / Conclusion */}
      <section className="about-page-footer-block">
        <div className="container">
          <div className="conclusion-card">
            <h2>Looking Ahead</h2>
            <p>
              Agrim International Nigeria continues to grow with a clear focus on innovation, operational excellence, consumer trust, and market expansion. As consumer needs evolve, we remain committed to developing stronger brands, improving product accessibility, and expanding our reach across Nigeria and beyond.
            </p>
            <p>
              Our ambition is to become one of Africa’s most trusted FMCG and healthcare companies by consistently delivering products that consumers value, partners trust, and communities rely on.
            </p>
            <div className="closing-statement">
              <h4>Agrim International Nigeria</h4>
              <p>Building trusted brands, strong partnerships, and everyday solutions designed to serve people, businesses, and communities with quality, affordability, and care.</p>
            </div>
            <div className="conclusion-btn-wrap">
              <Link to="/contact" className="btn btn-primary">
                Partner With Us <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
