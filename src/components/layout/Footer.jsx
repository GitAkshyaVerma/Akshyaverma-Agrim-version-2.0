import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, HeartHandshake, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-redesigned">
      <div className="container">
        <div className="footer-main-grid">
          <div className="footer-brand-section">
            <span className="footer-eyebrow">Agrim International Nigeria</span>
            <h3 className="footer-brand-title">Quality products. Meaningful everyday impact.</h3>
            <p className="footer-brand-desc">
              Building trusted FMCG and healthcare brands for families, businesses, and communities across Africa.
            </p>
          </div>

          <Link to="/social-impact" className="footer-impact-button">
            <HeartHandshake size={20} />
            <span>Social Impact</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="footer-contact-grid">
          <div className="footer-contact-card">
            <div className="footer-contact-icon"><Mail size={20} /></div>
            <div>
              <span className="footer-contact-label">Email</span>
              <a href="mailto:info@agrim.africa">info@agrim.africa</a>
            </div>
          </div>

          <div className="footer-contact-card">
            <div className="footer-contact-icon"><Phone size={20} /></div>
            <div>
              <span className="footer-contact-label">Phone</span>
              <a href="tel:+2347035786300">+234-7035786300</a>
            </div>
          </div>

          <div className="footer-contact-card">
            <div className="footer-contact-icon"><MapPin size={20} /></div>
            <div>
              <span className="footer-contact-label">Registered Office & Works</span>
              <address>Agrim Int' free trade Zone Calabar Cross River state Nigeria, West Africa</address>
            </div>
          </div>
        </div>

        <div className="footer-copyright-row">
          <p>© {new Date().getFullYear()} Agrim International Nigeria. All rights reserved.</p>
          <span>Trusted brands for everyday life.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
