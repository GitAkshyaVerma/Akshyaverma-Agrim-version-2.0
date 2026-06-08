import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './index.css';

// Hooks
import useScrollToHash from './hooks/useScrollToHash';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MaintenancePage from './pages/MaintenancePage';
import TopistoPage from './pages/mohan_topisto/TopistoPage';
import TomboPage from './pages/tombo/TomboPage';

// Helper component to run hook inside Router
const ScrollManager = () => {
  useScrollToHash();
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isTopisto = location.pathname === '/topisto';
  const isTombo = location.pathname === '/tombo';

  useEffect(() => {
    if (isTopisto || isTombo) {
      document.body.classList.add('no-navbar');
    } else {
      document.body.classList.remove('no-navbar');
    }
    return () => {
      document.body.classList.remove('no-navbar');
    };
  }, [isTopisto, isTombo]);

  return (
    <>
      <ScrollManager />
      {!isTopisto && !isTombo && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/topisto" element={<TopistoPage />} />
        <Route path="/tombo" element={<TomboPage />} />
      </Routes>
      {!isTopisto && !isTombo && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
