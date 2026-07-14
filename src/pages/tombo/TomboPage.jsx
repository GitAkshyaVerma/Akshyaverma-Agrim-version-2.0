import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Award, Compass, Zap, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Check } from 'lucide-react';
import './TomboPage.css';

const SLIDES = [
  {
    id: 'brandy',
    name: 'Crafted Brandy',
    title: 'Crafted Brandy',
    tag: 'Tombo Premium Range',
    desc: 'Our signature Brandy is crafted from select grapes, aged to perfection in oak casks, offering a warm, rich, and luxurious finish.',
    video: `${import.meta.env.BASE_URL}assets/tombo/Brandy.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/tombo/brandy.jpeg`,
    mobilePoster: `${import.meta.env.BASE_URL}assets/tombo/mobile/brnady.jpeg`,
    specs: { abv: '40%', aging: 'Double Distilled', character: 'Warm & Oaky' }
  },
  {
    id: 'whiskey',
    name: 'Blended Whiskey',
    title: 'Blended Whiskey',
    tag: 'Tombo Premium Range',
    desc: 'A masterfully blended scotch style whiskey, boasting deep oak notes, vanilla highlights, and an elegant, subtle smoky character.',
    video: `${import.meta.env.BASE_URL}assets/tombo/whiskey.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/tombo/whiskey.jpeg`,
    mobilePoster: `${import.meta.env.BASE_URL}assets/tombo/mobile/whiskey.jpeg`,
    specs: { abv: '42.8%', aging: 'Premium Matured', character: 'Smooth & Smoky' }
  },
  {
    id: 'chocolate',
    name: 'Chocolate Vodka',
    title: 'Chocolate Vodka',
    tag: 'Tombo Premium Range',
    desc: 'Indulge in the velvet-smooth blend of rich dark chocolate cocoa, premium spirit infusion, and decadent sweetness.',
    video: `${import.meta.env.BASE_URL}assets/tombo/vodka_choclate_final.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/tombo/Vodka_chocolate_bottle_final.jpeg`,
    mobilePoster: `${import.meta.env.BASE_URL}assets/tombo/mobile/vodka_choclate.jpeg`,
    specs: { abv: '42%', aging: 'Cocoa Infused', character: 'Rich & Velvety' }
  },
  {
    id: 'cream',
    name: 'Tombo Crimica',
    title: 'Tombo Crimica',
    tag: 'Tombo Premium Range',
    desc: 'A luscious harmony of fresh natural dairy cream, fine spirits, and hints of vanilla and cocoa for a smooth, velvety pour.',
    video: `${import.meta.env.BASE_URL}assets/tombo/cremica.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/tombo/cremica.jpeg`,
    mobilePoster: `${import.meta.env.BASE_URL}assets/tombo/mobile/cremica.jpeg`,
    specs: { abv: '15%', aging: 'Dairy Cream Blend', character: 'Silky & Creamy' }
  },
  {
    id: 'bitters',
    name: 'Herbal Bitters',
    title: 'Herbal Bitters',
    tag: 'Tombo Premium Range',
    desc: 'An aromatic, herb-infused blend crafted with 27 selected traditional botanicals and natural extracts for a bold, complex finish.',
    video: `${import.meta.env.BASE_URL}assets/tombo/Bitters.mp4`,
    poster: `${import.meta.env.BASE_URL}assets/tombo/bitters.jpeg`,
    mobilePoster: `${import.meta.env.BASE_URL}assets/tombo/mobile/bitters.jpeg`,
    specs: { aging: '27 Botanicals', character: 'Bold & Complex' }
  }
];

const TomboPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(0);
  const [loadedVideosMap, setLoadedVideosMap] = useState({});
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  const [slideProgress, setSlideProgress] = useState(0);
  const [trayExpanded, setTrayExpanded] = useState(false);
  const videoRefs = useRef([]);
  const sliderRef = useRef(null);

  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setPortfolioIndex((prev) => Math.min(SLIDES.length - 1, prev + 1));
    } else if (isRightSwipe) {
      setPortfolioIndex((prev) => Math.max(0, prev - 1));
    }
  };

  useEffect(() => {
    setTrayExpanded(false);
  }, [activeSlide]);

  const handleScroll = (direction) => {
    if (isMobile) {
      if (direction === 'left') {
        setPortfolioIndex((prev) => Math.max(0, prev - 1));
      } else {
        setPortfolioIndex((prev) => Math.min(SLIDES.length - 1, prev + 1));
      }
    } else {
      if (sliderRef.current) {
        const scrollAmount = 370; // card width + gap
        const targetScroll = sliderRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
        sliderRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Autoplay slide transition timer (8 seconds)
  useEffect(() => {
    if (!hasEntered) return;

    setSlideProgress(0);

    const intervalTime = 100;
    const totalDuration = 8000; // 8 seconds
    const increment = (intervalTime / totalDuration) * 100;

    const interval = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((current) => (current + 1) % SLIDES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [activeSlide, hasEntered]);

  useEffect(() => {
    if (!hasEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [hasEntered]);

  // Control video play/pause on slide change
  useEffect(() => {
    if (!hasEntered) return;
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeSlide) {
          video.play().catch(() => {});
        } else {
          setTimeout(() => {
            if (index !== activeSlide && videoRefs.current[index]) {
              videoRefs.current[index].pause();
            }
          }, 800);
        }
      }
    });
  }, [activeSlide, hasEntered]);

  const handleVideoLoad = () => {
    setVideosLoaded(prev => prev + 1);
  };

  // On mobile we skip video elements entirely — fast-complete the loader
  useEffect(() => {
    if (isMobile) {
      setVideosLoaded(SLIDES.length);
    }
  }, [isMobile]);

  // Safe loader timeout (shorter on mobile since no video to wait for)
  useEffect(() => {
    const delay = isMobile ? 800 : 3500;
    const timer = setTimeout(() => {
      if (videosLoaded < SLIDES.length) {
        setVideosLoaded(SLIDES.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [videosLoaded, isMobile]);

  const isLoaded = videosLoaded >= 2;
  const loadPercentage = Math.min(100, Math.round((videosLoaded / SLIDES.length) * 100));

  const handleExploreVariant = (index) => {
    setActiveSlide(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tombo-page">
      {/* Intro Curtain Screen */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            className="tombo-curtain"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <Link to="/products" className="tombo-curtain-back">
              <ArrowLeft size={18} />
              <span>Back to Products</span>
            </Link>

            <motion.div
              className="tombo-curtain-glass"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.img 
                src={`${import.meta.env.BASE_URL}assets/newLogo.png`} 
                alt="Tombo Logo" 
                className="tombo-curtain-logo"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              {!isLoaded ? (
                <div className="tombo-curtain-loader">
                  <div className="loading-spinner"></div>
                  <div className="tombo-curtain-progress-bar">
                    <div
                      className="tombo-curtain-progress-fill"
                      style={{ width: `${loadPercentage}%` }}
                    ></div>
                  </div>
                  <span className="tombo-curtain-loader-text">Loading Experience {loadPercentage}%</span>
                </div>
              ) : (
                <>
                  <motion.h1
                    className="tombo-curtain-title"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Tombo comes with every sip as magic
                  </motion.h1>
                  <motion.p
                    className="tombo-curtain-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Unleash the spirit
                  </motion.p>
                  <motion.button
                    className="tombo-curtain-btn"
                    onClick={() => setHasEntered(true)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Enter Experience
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section Container */}
      <div className="tombo-hero-section">
        {/* Fullscreen Video Background Container */}
        <div className="tombo-video-bg-container">
          {SLIDES.map((slide, index) => {
            // On mobile, pick the mobile-optimised poster if available
            const bgSrc = isMobile && slide.mobilePoster ? slide.mobilePoster : slide.poster;
            // On mobile, posters are always visible (no video to replace them)
            const posterClass = `tombo-bg-poster ${activeSlide === index ? 'active' : ''} ${!isMobile && loadedVideosMap[slide.id] ? 'fade-out' : ''}`;
            return (
              <React.Fragment key={slide.id}>
                <img
                  src={bgSrc}
                  alt={slide.name}
                  className={posterClass}
                />
                {/* Only render video on non-mobile to save bandwidth */}
                {!isMobile && (
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={slide.video}
                    onLoadedData={() => {
                      handleVideoLoad();
                      setLoadedVideosMap(prev => ({ ...prev, [slide.id]: true }));
                    }}
                    loop
                    muted
                    playsInline
                    className={`tombo-bg-video ${activeSlide === index ? 'active' : ''}`}
                  />
                )}
              </React.Fragment>
            );
          })}
          <div className="tombo-hero-overlay"></div>
        </div>

        {/* Global Nav Header */}
        {hasEntered && (
          <div className="tombo-top-header">
            <img 
              src={`${import.meta.env.BASE_URL}assets/newLogo.png`} 
              alt="Tombo Logo" 
              className="tombo-top-logo" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSlide(0);
              }}
            />
            <Link to="/products" className="tombo-back-link">
              <span className="back-text">Back to Products</span>
              <span className="arrow">→</span>
            </Link>
          </div>
        )}

        {/* Hero Interactive Elements */}
        {hasEntered && (
          <div className="tombo-hero-content-wrapper">
            {/* Left Content Column */}
            <div 
              className={`tombo-hero-text-panel ${trayExpanded ? 'expanded' : 'collapsed'}`}
              onClick={() => {
                if (isMobile) {
                  setTrayExpanded(!trayExpanded);
                }
              }}
            >
              {isMobile && (
                <div className="tray-handle-wrapper">
                  {trayExpanded ? (
                    <ChevronDown size={24} className="tray-handle-icon" />
                  ) : (
                    <ChevronUp size={24} className="tray-handle-icon" />
                  )}
                </div>
              )}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="tombo-hero-tag">{SLIDES[activeSlide].tag}</span>
                  <h2 className="tombo-hero-title">{SLIDES[activeSlide].title}</h2>
                  <div className="tombo-hero-divider"></div>
                  <p className="tombo-hero-desc">{SLIDES[activeSlide].desc}</p>
                  
                  {/* Specifications Badge list */}
                  <div className="tombo-hero-specs" onClick={(e) => isMobile && e.stopPropagation()}>
                    {SLIDES[activeSlide].specs.abv && (
                      <div className="spec-badge">
                        <span className="spec-val">{SLIDES[activeSlide].specs.abv}</span>
                        <span className="spec-lbl">ABV Strength</span>
                      </div>
                    )}
                    <div className="spec-badge">
                      <span className="spec-val">{SLIDES[activeSlide].specs.aging}</span>
                      <span className="spec-lbl">Distillation</span>
                    </div>
                    <div className="spec-badge">
                      <span className="spec-val">{SLIDES[activeSlide].specs.character}</span>
                      <span className="spec-lbl">Profile</span>
                    </div>
                  </div>

                  <div className="tombo-hero-actions" onClick={(e) => isMobile && e.stopPropagation()}>
                    <Link to="/tombo/contact" className="tombo-primary-cta">
                      Enquire Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Interactive Slide Switcher */}
            <div className={`tombo-vertical-nav ${trayExpanded ? 'expanded' : 'collapsed'}`}>
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  className={`tombo-nav-item ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                >
                  <div className="nav-bar-line">
                    <div 
                      className="nav-bar-progress-fill"
                      style={{
                        width: activeSlide === idx ? `${slideProgress}%` : '0%'
                      }}
                    ></div>
                  </div>
                  <div className="nav-item-content">
                    <span className="nav-name">{slide.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Scroll Indicator */}
        {hasEntered && (
          <div className="tombo-bottom-bar">
            <div className="scroll-indicator">
              <span>Scroll to Explore</span>
              <div className="mouse-icon">
                <div className="wheel"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scrollable Context (Craftsmanship & Collection Showcase) */}
      {hasEntered && (
        <div className="tombo-scrollable-content">
          {/* Section 1: Brand Philosophy & Craftsmanship */}
          <section className="tombo-craft-section">
            <div className="tombo-container">
              <motion.div
                className="tombo-section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="gold-subtitle">Our Spirit</span>
                <h2 className="section-title">Crafted for Bold Taste and Real Moments</h2>
                <div className="header-line"></div>
                <p className="section-desc">
                  Tombo is Agrim International Nigeria’s beverage brand created for modern consumers who enjoy bold flavour, quality, and memorable drinking experiences. From bitters and spirit-based beverages to ready-to-drink cans and cream liqueurs, Tombo blends innovation with local taste preferences to make every occasion more enjoyable.
                </p>
              </motion.div>

              <div className="craft-grid">
                <motion.div
                  className="craft-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="craft-icon-wrapper">
                    <Compass className="craft-icon" />
                  </div>
                  <h3>Bold Flavour Profile</h3>
                  <p className="craft-card-subdesc">
                    Crafted with distinctive taste combinations that suit celebrations, nightlife, relaxation, and social gatherings.
                  </p>
                  <ul className="craft-card-list">
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Rich and memorable taste</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Modern beverage experience</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Made for social occasions</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Inspired by local preferences</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="craft-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="craft-icon-wrapper">
                    <Award className="craft-icon" />
                  </div>
                  <h3>Quality You Can Trust</h3>
                  <p className="craft-card-subdesc">
                    Tombo products are developed with a focus on consistency, reliability, and enjoyable flavour across every pack and bottle.
                  </p>
                  <ul className="craft-card-list">
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Consistent product quality</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Carefully developed blends</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Reliable taste experience</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Consumer-focused standards</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="craft-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="craft-icon-wrapper">
                    <Zap className="craft-icon" />
                  </div>
                  <h3>Made for Every Moment</h3>
                  <p className="craft-card-subdesc">
                    Designed for today’s consumers, Tombo brings excitement and confidence to parties, casual hangouts, celebrations, and everyday relaxation.
                  </p>
                  <ul className="craft-card-list">
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Perfect for celebrations</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Great for nightlife</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Suitable for relaxation</span>
                    </li>
                    <li>
                      <Check className="craft-check-icon" size={14} />
                      <span>Built for modern lifestyles</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 2: Complete Collection Grid */}
          <section className="tombo-collection-section">
            <div className="tombo-container">
              <motion.div
                className="tombo-section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="gold-subtitle">Explore Blends</span>
                <h2 className="section-title">The Tombo Portfolio</h2>
                <div className="header-line"></div>
              </motion.div>

              <div className="collection-slider-wrapper">
                <button 
                  className="slider-arrow left" 
                  onClick={() => handleScroll('left')}
                  aria-label="Previous Blend"
                >
                  <ChevronLeft size={24} />
                </button>
                <div 
                  className="collection-grid" 
                  ref={sliderRef}
                  style={isMobile ? {
                    transform: `translateX(calc(50vw - (var(--mobile-card-width) / 2) - ${portfolioIndex} * (var(--mobile-card-width) + var(--mobile-card-gap))))`
                  } : {}}
                  onTouchStart={isMobile ? onTouchStart : undefined}
                  onTouchMove={isMobile ? onTouchMove : undefined}
                  onTouchEnd={isMobile ? onTouchEnd : undefined}
                >
                  {SLIDES.map((slide, idx) => (
                    <motion.div
                      key={slide.id}
                      className={`collection-card ${isMobile && portfolioIndex === idx ? 'active-card' : ''} ${flippedCards[idx] ? 'flipped' : ''}`}
                      initial={isMobile ? {} : { opacity: 0, y: 40 }}
                      whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={isMobile ? { duration: 0.4 } : { duration: 0.6, delay: idx * 0.1 }}
                      whileHover={isMobile ? {} : { y: -10 }}
                      onClick={() => {
                        if (isMobile) {
                          setPortfolioIndex(idx);
                        }
                      }}
                    >
                      <div className="collection-card-inner">
                        {/* Front Face */}
                        <div className="collection-card-front">
                          <div className="collection-video-preview">
                            <video poster={slide.poster} src={slide.video} muted loop playsInline autoPlay />
                            <div className="card-glass-overlay"></div>
                            {slide.specs.abv && <span className="abv-tag">{slide.specs.abv} ABV</span>}
                          </div>
                          <div className="collection-card-details">
                            <h3>{slide.name}</h3>
                            <p className="card-desc">{slide.desc}</p>
                            <div className="tasting-notes">
                              <span className="notes-label">Profile:</span>
                              <span className="notes-value">{slide.specs.character}</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setFlippedCards(prev => ({ ...prev, [idx]: true }));
                              }}
                              className="explore-variant-btn"
                        >
                              Explore Blend <ArrowRight size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Back Face */}
                        <div className="collection-card-back">
                          <div className="collection-card-back-content">
                            <h3>{slide.name}</h3>
                            <p className="card-desc-back">{slide.desc}</p>
                            
                            <div className="specs-grid-back">
                              {slide.specs.abv && (
                                <div className="spec-item-back">
                                  <span className="spec-label-back">ABV Strength:</span>
                                  <span className="spec-value-back">{slide.specs.abv}</span>
                                </div>
                              )}
                              <div className="spec-item-back">
                                <span className="spec-label-back">Distillation:</span>
                                <span className="spec-value-back">{slide.specs.aging}</span>
                              </div>
                              <div className="spec-item-back">
                                <span className="spec-label-back">Profile:</span>
                                <span className="spec-value-back">{slide.specs.character}</span>
                              </div>
                            </div>

                            <div className="back-card-actions">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleExploreVariant(idx);
                                }}
                                className="activate-blend-btn"
                              >
                                Select Blend
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFlippedCards(prev => ({ ...prev, [idx]: false }));
                                }}
                                className="flip-back-btn"
                              >
                                Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <button 
                  className="slider-arrow right" 
                  onClick={() => handleScroll('right')}
                  aria-label="Next Blend"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 3: Call to Action */}
          <section className="tombo-cta-section">
            <div className="cta-glass-panel">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="cta-content"
              >
                <h2>Ready to elevate your spirits collection?</h2>
                <p>Contact our global distribution team to enquire about partnership opportunities, bulk orders, or boutique offerings.</p>
                <div className="cta-actions">
                  <Link to="/tombo/contact" className="cta-gold-btn">
                    Get in Touch
                  </Link>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                    className="cta-outline-btn"
                  >
                    Back to Top
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default TomboPage;
