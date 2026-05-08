import React from 'react';
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
import ContactPage from './pages/ContactPage';
import MaintenancePage from './pages/MaintenancePage';
import TopistoPage from './pages/TopistoPage';

// Helper component to run hook inside Router
const ScrollManager = () => {
  useScrollToHash();
  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isTopisto = location.pathname === '/topisto';

  return (
    <>
      <ScrollManager />
      {!isTopisto && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="/topisto" element={<TopistoPage />} />
      </Routes>
      {!isTopisto && <Footer />}
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
