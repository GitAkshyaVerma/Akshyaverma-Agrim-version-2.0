import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TopistoPage.css';

const TopistoPage = () => {
  // --- Scroll Parallax ---
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate opacities for 4 slides (Continuous crossfade)
  const opacity1 = useTransform(smoothProgress, [0, 0.33], [1, 0]);
  const opacity2 = useTransform(smoothProgress, [0, 0.33, 0.66], [0, 1, 0]);
  const opacity3 = useTransform(smoothProgress, [0.33, 0.66, 1], [0, 1, 0]);
  const opacity4 = useTransform(smoothProgress, [0.66, 1], [0, 1]);

  // Carousel X Positions (Incoming from left, Outgoing to right)
  const x1 = useTransform(smoothProgress, [0, 0.33], ["0vw", "50vw"]);
  const x2 = useTransform(smoothProgress, [0, 0.33, 0.66], ["-50vw", "0vw", "50vw"]);
  const x3 = useTransform(smoothProgress, [0.33, 0.66, 1], ["-50vw", "0vw", "50vw"]);
  const x4 = useTransform(smoothProgress, [0.66, 1], ["-50vw", "0vw"]);

  // Carousel Scales (Shrink to 0.6 when off-center)
  const scale1 = useTransform(smoothProgress, [0, 0.33], [1, 0.6]);
  const scale2 = useTransform(smoothProgress, [0, 0.33, 0.66], [0.6, 1, 0.6]);
  const scale3 = useTransform(smoothProgress, [0.33, 0.66, 1], [0.6, 1, 0.6]);
  const scale4 = useTransform(smoothProgress, [0.66, 1], [0.6, 1]);

  // Cinematic Scale: scales from 1 to 1.15 over the whole scroll
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  // --- Mouse Parallax ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse values
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Foreground: moves towards mouse (more intensely)
  const fgX = useTransform(smoothMouseX, [-1, 1], [-40, 40]);
  const fgY = useTransform(smoothMouseY, [-1, 1], [-40, 40]);

  // Midground (Text): moves away from mouse
  const mgX = useTransform(smoothMouseX, [-1, 1], [20, -20]);
  const mgY = useTransform(smoothMouseY, [-1, 1], [20, -20]);

  // Background: moves slightly away from mouse
  const bgX = useTransform(smoothMouseX, [-1, 1], [10, -10]);
  const bgY = useTransform(smoothMouseY, [-1, 1], [10, -10]);

  return (
    <div className="topisto-wrapper">
      {/* Scroll container gives us the scrollbar */}
      <div className="topisto-scroll-area"></div>

      {/* Fixed container holds the actual visual content */}
      <div className="topisto-fixed-container">

        {/* Background Layers */}
        <motion.div
          className="topisto-bg-layers"
          style={{ x: bgX, y: bgY, scale: backgroundScale }}
        >
          <motion.div className="topisto-bg-layer" style={{ opacity: opacity1, backgroundImage: "url('/assets/topisto/1_background.jpeg')" }} />
          <motion.div className="topisto-bg-layer" style={{ opacity: opacity2, backgroundImage: "url('/assets/topisto/2_background.jpeg')" }} />
          <motion.div className="topisto-bg-layer" style={{ opacity: opacity3, backgroundImage: "url('/assets/topisto/3_background.jpeg')" }} />
          <motion.div className="topisto-bg-layer" style={{ opacity: opacity4, backgroundImage: "url('/assets/topisto/4_background.jpeg')" }} />
        </motion.div>

        {/* Header */}
        <header className="topisto-header">
          <div className="header-back">
            <Link to="/" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <span className="back-text">Back to Portfolio</span>
            </Link>
          </div>
          <div className="header-left">
            <Link to="/">
              <img src="/assets/topisto/mohan_logo.png" alt="Mohan Topisto Logo" className="brand-logo" />
            </Link>
          </div>
          <div className="header-right">
            <a href="#" className="btn-pill btn-enquire" aria-label="Enquire now">
              <span className="btn-text">Enquire now</span>
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="topisto-body">
          {/* Giant Text */}
          <motion.div
            className="hero-bg-text-container"
            style={{ x: mgX, y: mgY }}
          >
            <h1 className="hero-bg-text">TOPISTO</h1>
          </motion.div>

          {/* Foreground Subjects */}
          <motion.div
            className="subject-layers"
            style={{ x: fgX, y: fgY }}
          >
            <motion.div className="subject-layer" style={{ opacity: opacity1, x: x1, scale: scale1 }}>
              <img src="/assets/topisto/1_subject.png" className="hero-subject float-anim" alt="Topisto Product 1" />
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity2, x: x2, scale: scale2 }}>
              <img src="/assets/topisto/2_subject.png" className="hero-subject float-anim" alt="Topisto Product 2" />
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity3, x: x3, scale: scale3 }}>
              <img src="/assets/topisto/3_subject.png" className="hero-subject float-anim" alt="Topisto Product 3" />
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity4, x: x4, scale: scale4 }}>
              <img src="/assets/topisto/4_subject.png" className="hero-subject float-anim" alt="Topisto Product 4" />
            </motion.div>
          </motion.div>

          {/* Left Column - Now a running marquee */}
          <div className="hero-left-col marquee-container">
            <div className="marquee-track">
              <div className="marquee-content">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={`marquee-1-${i}`}>
                    <h2 className="marquee-heading">Favourite of Every Kitchen</h2>
                    <span className="marquee-separator">✦</span>
                    <h2 className="marquee-heading">Freshness of Tomatoes</h2>
                    <span className="marquee-separator">✦</span>
                    <h2 className="marquee-heading">Flavour Meets Fun</h2>
                    <span className="marquee-separator">✦</span>
                  </React.Fragment>
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <React.Fragment key={`marquee-2-${i}`}>
                    <h2 className="marquee-heading">Favourite of Every Kitchen</h2>
                    <span className="marquee-separator">✦</span>
                    <h2 className="marquee-heading">Freshness of Tomatoes</h2>
                    <span className="marquee-separator">✦</span>
                    <h2 className="marquee-heading">Flavour Meets Fun</h2>
                    <span className="marquee-separator">✦</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hero-right-col">
            <p className="flavor-text">AVAILABLE SIZES</p>
            <div className="size-selectors">
              <div className="size-circle">
                <span>1</span>
                <small>kg</small>
              </div>
              <div className="size-circle">
                <span>500</span>
                <small>g</small>
              </div>
              <div className="size-circle">
                <span>200</span>
                <small>g</small>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="topisto-footer">
          <div className="footer-left">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>

          <div className="footer-center">
            <div className="line"></div>
            <span className="choose-size-text">Flavours You Love, Sizes You Need</span>
            <div className="line"></div>
          </div>

          <div className="footer-right">
            {/* Shop Now button removed */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TopistoPage;
