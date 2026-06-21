import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const desktopHeroImages = [
  '/assets/mainHeroSection/web/image1.jpeg',
  '/assets/mainHeroSection/web/image2.jpeg',
  '/assets/mainHeroSection/web/image2.png',
  '/assets/mainHeroSection/web/image3.png',
  '/assets/mainHeroSection/web/image4.png',
  '/assets/mainHeroSection/web/image5.png',
  '/assets/mainHeroSection/web/image6.jpeg',
  '/assets/mainHeroSection/web/image7.png'
];

const getDesktopHeroImage = (index) => desktopHeroImages[Math.min(index, desktopHeroImages.length - 1)];

const slidesData = [
  {
    desktopSrc: getDesktopHeroImage(0),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-tombo-1.png',
    tagline: 'TOMBO BEVERAGES',
    title: 'Bold Taste Experiences',
    desc: 'Ready-to-drink options bringing quality and flavour to your social moments.',
    link: '/tombo'
  },
  {
    desktopSrc: getDesktopHeroImage(1),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-all-2.png',
    tagline: 'GLOBAL DISTRIBUTION',
    title: 'Excellence in Distribution',
    desc: 'Bridging global markets with premium products and logistics standards.',
    link: '/products'
  },
  {
    desktopSrc: getDesktopHeroImage(2),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-topisto-3.png',
    tagline: 'TOPISTO TOMATO MIX',
    title: 'Richer Cooking Blends',
    desc: 'Rich tomato blends crafted for bold, flavourful African cooking.',
    link: '/topisto'
  },
  {
    desktopSrc: getDesktopHeroImage(3),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-popup-4.png',
    tagline: 'TOBO CONFECTIONERY',
    title: 'Fun & Sweet Moments',
    desc: 'Colourful candies, lollipops, and bubble gums designed to bring smiles.',
    link: '/maintenance'
  },
  {
    desktopSrc: getDesktopHeroImage(4),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-tobo-candy-5.png',
    tagline: 'TOBO CONFECTIONERY',
    title: 'Sweetness in Every Bite',
    desc: 'Fun, flavourful treats crafted to bring smiles to families across West Africa.',
    link: '/maintenance'
  },
  {
    desktopSrc: getDesktopHeroImage(5),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-womaneez-6.png',
    tagline: 'WOMANEEZZ SANITARY PADS',
    title: 'Cotton Soft Care',
    desc: 'Ultra-thin, dry-feel technology for uncompromised comfort and protection.',
    link: '/hygiene/pads'
  },
  {
    desktopSrc: getDesktopHeroImage(6),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-condom-7.png',
    tagline: 'INTIMATE PROTECTION',
    title: 'Tango & Kuchi Kuchi',
    desc: 'Advanced safety and heightened sensitivity condoms engineered for absolute confidence.',
    link: '/hygiene/condoms'
  },
  {
    desktopSrc: getDesktopHeroImage(7),
    mobileSrc: '/assets/mainHeroSection/mobile/mobile-babeez-8.png',
    tagline: 'BABYEEZZ DIAPERS',
    title: 'Gentle Baby Care',
    desc: 'Hypoallergenic diapering with high-capacity absorbency for active days and dry nights.',
    link: '/hygiene/diapers'
  }
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
};

const Hero = () => {
  const isMobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slidesData.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slidesData.length) % slidesData.length);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 6000);
    return () => clearInterval(timerRef.current);
  }, [current, next]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-slides-wrapper">
        {slidesData.map((slide, i) => {
          const bgImage = isMobile ? slide.mobileSrc : slide.desktopSrc;
          const showSlideText = isMobile || i === 0;

          return (
            <div 
              key={i} 
              className={`hero-slide-item ${i === current ? 'active' : ''}`}
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <div className="hero-slide-overlay" />
              {showSlideText && (
                <div className="hero-slide-content container">
                  <span className="hero-slide-tagline">{slide.tagline}</span>
                  <h1 className="hero-slide-title">{slide.title}</h1>
                  <p className="hero-slide-desc">{slide.desc}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sleek, industry-standard slider navigation */}
      <div className="hero-slide-nav-container container">
        <div className="hero-slide-nav">
          <button className="hero-nav-btn prev" onClick={prev} aria-label="Previous slide">
            <ChevronLeft size={16} />
          </button>
          <div className="hero-nav-dots">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                className={`hero-nav-dot ${idx === current ? 'active' : ''}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button className="hero-nav-btn next" onClick={next} aria-label="Next slide">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
