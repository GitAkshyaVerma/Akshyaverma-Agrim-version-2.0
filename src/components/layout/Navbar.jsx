import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || location.pathname !== '/';

  return (
    <nav className={`navbar ${isSolid ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo">
          <img src="/assets/newLogo.png" alt="Agrim Internationals Logo" className="nav-logo-img" />
          Agrim International Fze
        </Link>
        <ul className="nav-links">
          <li><Link to="/#home">Home</Link></li>
          <li><Link to="/#products">Products</Link></li>
          <li><Link to="/#about">About</Link></li>
        </ul>
        <Link to="/contact" className="nav-cta">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
