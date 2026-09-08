import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../shared/FadeInSection';
import { productsData } from '../../data/products';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const categoryImages = {
  'beverages': '/assets/spirits.png',
  'pharma': '/assets/pharma.jpeg',
  'candies': '/assets/candy.jpeg',
  'sauces': '/assets/tomato-paste.png'
};

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % productsData.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const goTo = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  // Helper to determine active/inactive class and offsets
  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    let offset = diff;
    
    // Circular calculations for 4 slides
    if (diff < -1) offset += productsData.length;
    if (diff > 1) offset -= productsData.length;

    return offset;
  };

  return (
    <section id="products" className="collections-section">
      <div className="container">
        <FadeInSection>
          <div className="collections-header">
            <span className="collections-subtitle">Collections</span>
            <h2 className="collections-title">Our Diverse Portfolio</h2>
          </div>

          <div className="portfolio-slider-outer">
            {/* Left navigation arrow */}
            <button 
              className="portfolio-arrow left" 
              onClick={prev} 
              aria-label="Previous category"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slider track container */}
            <div 
              className="portfolio-slider-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {productsData.map((product, idx) => {
                const offset = getCardStyle(idx);
                let positionClass = 'hidden';
                if (offset === 0) positionClass = 'active';
                else if (offset === 1) positionClass = 'next';
                else if (offset === -1) positionClass = 'prev';

                return (
                  <article
                    className={`collection-card portfolio-card ${positionClass}`}
                    key={product.id}
                  >
                    <div className="collection-image-wrapper">
                      <Link to={product.link || '/maintenance'} aria-label={`Explore ${product.title}`}>
                        <img
                          src={categoryImages[product.id] || '/assets/tomato-paste.png'}
                          alt={product.title}
                          className="collection-category-img"
                        />
                      </Link>
                    </div>
                    <h3 className="collection-card-title">{product.title}</h3>
                    <p className="collection-card-desc">{product.shortDesc}</p>
                    <Link
                      to={product.link || '/maintenance'}
                      className="portfolio-explore-button"
                      aria-label={`Explore ${product.title}`}
                    >
                      Explore
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* Right navigation arrow */}
            <button 
              className="portfolio-arrow right" 
              onClick={next} 
              aria-label="Next category"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slider pagination dots */}
          <div className="portfolio-dots">
            {productsData.map((_, idx) => (
              <button
                key={idx}
                className={`portfolio-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Categories;
