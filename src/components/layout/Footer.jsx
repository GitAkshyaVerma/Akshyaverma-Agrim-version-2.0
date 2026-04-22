import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>Agrim Internationals</h4>
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
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>info@agriminternationals.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Global Trade Avenue,<br/>Business District</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agrim Internationals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
