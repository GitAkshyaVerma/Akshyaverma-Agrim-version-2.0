import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Info, Mail } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Render bottom nav only on routes that are not sub-branded pages (hygiene, topisto, tombo)
  const isTopisto = currentPath === '/topisto';
  const isTombo = currentPath === '/tombo';
  const isHygiene = currentPath.startsWith('/hygiene');
  if (isTopisto || isTombo || isHygiene) {
    return null;
  }

  return (
    <nav className="bottom-nav">
      <Link 
        to="/" 
        className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}
      >
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link 
        to="/products" 
        className={`bottom-nav-item ${currentPath === '/products' ? 'active' : ''}`}
      >
        <Package size={20} />
        <span>Portfolio</span>
      </Link>
      <Link 
        to="/about" 
        className={`bottom-nav-item ${currentPath === '/about' ? 'active' : ''}`}
      >
        <Info size={20} />
        <span>About</span>
      </Link>
      <Link 
        to="/contact" 
        className={`bottom-nav-item ${currentPath === '/contact' ? 'active' : ''}`}
      >
        <Mail size={20} />
        <span>Contact</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
