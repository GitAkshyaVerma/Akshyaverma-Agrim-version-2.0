import React, { useState, useEffect, useCallback, useRef } from 'react';

// ─── Desktop slides (16:9 landscape) ──────────────────────────────────────
const desktopSlides = [
  {
    src: '/assets/mainHeroSection/TOBO-16-9.jpeg',
    alt: 'TOBO Product Range',
  },
  {
    src: '/assets/mainHeroSection/TOMBO-ALL-16x9.jpeg',
    alt: 'TOMBO Product Range',
  },
];

// ─── Mobile slides (9:16 portrait) — add more images here later ───────────
const mobileSlides = [
  {
    src: '/assets/mainHeroSection/mobile/TOBO-9-16.jpeg',
    alt: 'TOBO Product Range',
  },
  // Add more mobile slides here when ready
];

/** Returns true when viewport width is < 768 px */
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
  const slides = isMobile ? mobileSlides : desktopSlides;

  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);
  const timerRef = useRef(null);

  // Reset to first slide on orientation switch
  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  const goTo = useCallback(
    (index) => {
      if (isAnimating.current || index === current) return;
      isAnimating.current = true;
      setCurrent(index);
      // unblock after transition duration (700ms)
      setTimeout(() => { isAnimating.current = false; }, 700);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo, slides.length]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo, slides.length]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  return (
    <section id="home" className="hero hero-carousel">

      {/*
        ── Sliding strip ──
        All slides sit side-by-side in one flex row.
        We shift the whole track left with translateX.
        Only ONE element animates → butter-smooth.
      */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={`${isMobile ? 'm' : 'd'}-${i}`}
            className="carousel-slide"
            aria-hidden={i !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-img"
              draggable="false"
            />
          </div>
        ))}
      </div>

      {/* Top gradient — navbar readability */}
      <div className="carousel-overlay" />

      {/* Arrows — only when multiple slides */}
      {slides.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow--prev"
            onClick={prev}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="carousel-arrow carousel-arrow--next"
            onClick={next}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      {/* Scroll indicator — visible in the gap below the image on tall screens */}
      <div className="hero-scroll-hint">
        <span className="hero-scroll-label">Scroll to explore</span>
        <div className="hero-scroll-chevron" />
      </div>
    </section>
  );
};

export default Hero;
