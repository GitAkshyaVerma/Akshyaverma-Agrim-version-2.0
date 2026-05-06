import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="maintenance-page">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="maintenance-video"
      >
        <source src="/assets/under-maintainance.mp4" type="video/mp4" />
      </video>
      <div className="maintenance-overlay"></div>
      <div className="maintenance-content">
        <h1 className="maintenance-title">Our Products Are Getting an Upgrade</h1>
        <p className="maintenance-desc">
          We're currently updating our product portfolio to bring you an even better and premium experience. 
          Please check back soon.
        </p>
        <Link to="/products" className="btn-product-explore" style={{ padding: '15px 30px', fontSize: '1.1rem' }}>
          Back to Products <span><ArrowRight size={18} /></span>
        </Link>
      </div>
    </div>
  );
};

export default MaintenancePage;
