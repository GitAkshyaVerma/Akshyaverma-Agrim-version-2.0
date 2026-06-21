import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './index.css';

// Hooks
import useScrollToHash from './hooks/useScrollToHash';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BottomNav from './components/layout/BottomNav';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import SocialImpactPage from './pages/SocialImpactPage';
import ContactPage from './pages/ContactPage';
import MaintenancePage from './pages/MaintenancePage';
import TopistoPage from './pages/mohan_topisto/TopistoPage';
import TomboPage from './pages/tombo/TomboPage';
import HygieneHubPage from './pages/hygiene/HygieneHubPage';
import CondomsPage from './pages/hygiene/CondomsPage';
import PadsPage from './pages/hygiene/PadsPage';
import DiapersPage from './pages/hygiene/DiapersPage';

// Helper component to run hook inside Router
const ScrollManager = () => {
  useScrollToHash();
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isTopisto = location.pathname === '/topisto';
  const isTombo = location.pathname === '/tombo';
  const isHygiene = location.pathname.startsWith('/hygiene');
  const hideHeaderFooter = isTopisto || isTombo || isHygiene;

  useEffect(() => {
    if (hideHeaderFooter) {
      document.body.classList.add('no-navbar');
    } else {
      document.body.classList.remove('no-navbar');
    }
    return () => {
      document.body.classList.remove('no-navbar');
    };
  }, [hideHeaderFooter]);

  return (
    <>
      <ScrollManager />
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/social-impact" element={<SocialImpactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/topisto" element={<TopistoPage />} />
        <Route path="/tombo" element={<TomboPage />} />
        <Route path="/hygiene" element={<HygieneHubPage />} />
        <Route path="/hygiene/condoms" element={<CondomsPage />} />
        <Route path="/hygiene/pads" element={<PadsPage />} />
        <Route path="/hygiene/diapers" element={<DiapersPage />} />
      </Routes>
      {!hideHeaderFooter && <BottomNav />}
      {!hideHeaderFooter && <Footer />}
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
