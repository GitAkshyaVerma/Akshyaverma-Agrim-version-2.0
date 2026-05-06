import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <img src="/assets/newLogo.png" alt="Agrim Internationals Logo" className="footer-logo-inverted" />
            <p>Your trusted partner in Fast-Moving Consumer Goods. Quality you can taste, feel, and rely on.</p>
          </div>
          
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/#home">Home</Link></li>
              <li><Link to="/#products">Products</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <Mail className="footer-icon" size={20} />
              <span>info@agriminternationals.com</span>
            </div>
            <div className="footer-contact-item">
              <Phone className="footer-icon" size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="footer-contact-item">
              <MapPin className="footer-icon" size={20} />
              <span>123 Global Trade Avenue,<br/>Business District</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agrim Internationals. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
