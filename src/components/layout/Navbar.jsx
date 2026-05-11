import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Info, Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src="/assets/newLogo.png" alt="Agrim Internationals Logo" className="nav-logo-img" />
            <span className="nav-brand-text">Agrim International Fze</span>
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li><Link to="/#home">Home</Link></li>
            <li><Link to="/#products">Products</Link></li>
            <li><Link to="/#about">About</Link></li>
          </ul>
          <Link to="/contact" className="nav-cta nav-cta--desktop">Contact Us</Link>

          {/* Burger button — mobile only */}
          <button
            className={`burger-btn ${menuOpen ? 'burger-btn--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-drawer-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        ref={menuRef}
        className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="drawer-header">
          <span className="drawer-brand">Agrim International Fze</span>
          <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">✕</button>
        </div>

        {/* Nav links */}
        <nav className="drawer-nav">
          <Link to="/#home" className="drawer-link" onClick={closeMenu}>
            <Home size={18} strokeWidth={1.75} />
            Home
          </Link>
          <Link to="/#products" className="drawer-link" onClick={closeMenu}>
            <Package size={18} strokeWidth={1.75} />
            Products
          </Link>
          <Link to="/#about" className="drawer-link" onClick={closeMenu}>
            <Info size={18} strokeWidth={1.75} />
            About
          </Link>
        </nav>

        {/* Contact Us pinned at bottom */}
        <div className="drawer-footer">
          <Link to="/contact" className="drawer-contact-btn" onClick={closeMenu}>
            <Phone size={16} strokeWidth={1.75} />
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
