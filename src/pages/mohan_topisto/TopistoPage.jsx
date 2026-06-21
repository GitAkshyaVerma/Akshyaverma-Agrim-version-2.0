import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TopistoPage.css';
const MARQUEE_TEXTS = [
  "Rich Taste With Radiant Colour",
  "Rooted In Nigerian Flavours",
  "Reliable Flavour Every Time",
  "Reasonably Priced For Families",
  "Ready To Use Easily",
  "Right For Every Kitchen"
];

const TopistoPage = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCommunityCareOpen, setIsCommunityCareOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [activeFlavourIndex, setActiveFlavourIndex] = useState(0);

  useEffect(() => {
    const closeOpenModal = (event) => {
      if (event.key !== 'Escape') return;
      setIsAboutOpen(false);
      setIsCommunityCareOpen(false);
      setIsEnquireOpen(false);
    };

    window.addEventListener('keydown', closeOpenModal);
    return () => window.removeEventListener('keydown', closeOpenModal);
  }, []);

  // --- Scroll Parallax ---
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.165) {
      setActiveFlavourIndex(0);
    } else if (latest < 0.5) {
      setActiveFlavourIndex(1);
    } else if (latest < 0.835) {
      setActiveFlavourIndex(2);
    } else {
      setActiveFlavourIndex(3);
    }
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

  return (
    <div className="topisto-wrapper">
      {/* Scroll container gives us the scrollbar */}
      <div className="topisto-scroll-area"></div>

      {/* Fixed container holds the actual visual content */}
      <div className="topisto-fixed-container">

        {/* Background Layers */}
        <motion.div
          className="topisto-bg-layers"
          style={{ scale: backgroundScale }}
        >
          <motion.div className="topisto-bg-layer topisto-bg-layer-1" style={{ opacity: opacity1 }} />
          <motion.div className="topisto-bg-layer topisto-bg-layer-2" style={{ opacity: opacity2 }} />
          <motion.div className="topisto-bg-layer topisto-bg-layer-3" style={{ opacity: opacity3 }} />
          <motion.div className="topisto-bg-layer topisto-bg-layer-4" style={{ opacity: opacity4 }} />
        </motion.div>

        {/* Header */}
        <header className="topisto-header">
          <div className="header-back">
            <Link to="/products" className="btn-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <span className="back-text">Back to Portfolio</span>
            </Link>
          </div>
          <div className="header-left">
            <Link to="/topisto">
              <img src="/assets/topisto/mohan_logo.png" alt="Mohan Topisto Logo" className="brand-logo" />
            </Link>
          </div>
          <div className="header-right">
            <button className="btn-about" onClick={() => setIsAboutOpen(true)} aria-label="About Us">
              <span className="btn-text">About Us</span>
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </button>
            <button className="btn-pill btn-enquire" onClick={() => setIsEnquireOpen(true)} aria-label="Enquire now">
              <span className="btn-text">Enquire now</span>
              <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="topisto-body">
          {/* Giant Text */}
          <div className="hero-bg-text-container">
            <h1 className="hero-bg-text">TOPISTO</h1>
          </div>

          {/* Foreground Subjects */}
          <div className="subject-layers">
            <motion.div className="subject-layer" style={{ opacity: opacity1, x: x1, scale: scale1 }}>
              <div className="subject-container">
                <img src="/assets/topisto/1_subject.png" className="hero-subject float-anim" alt="Classic Tomato Mix" />
              </div>
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity2, x: x2, scale: scale2 }}>
              <div className="subject-container">
                <img src="/assets/topisto/2_subject.png" className="hero-subject float-anim" alt="Goat Meat Flavour" />
              </div>
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity3, x: x3, scale: scale3 }}>
              <div className="subject-container">
                <img src="/assets/topisto/3_subject.png" className="hero-subject float-anim" alt="Chicken Flavour" />
              </div>
            </motion.div>
            <motion.div className="subject-layer" style={{ opacity: opacity4, x: x4, scale: scale4 }}>
              <div className="subject-container">
                <img src="/assets/topisto/4_subject.png" className="hero-subject float-anim" alt="Fish Flavour" />
              </div>
            </motion.div>
          </div>



          {/* Left Column - Now a running marquee */}
          <div className="hero-left-col marquee-container">
            <div className="marquee-track">
              <div className="marquee-content">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={`marquee-1-${i}`}>
                    {MARQUEE_TEXTS.map((text, idx) => (
                      <React.Fragment key={idx}>
                        <h2 className="marquee-heading">{text}</h2>
                        <span className="marquee-separator">✦</span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={`marquee-2-${i}`}>
                    {MARQUEE_TEXTS.map((text, idx) => (
                      <React.Fragment key={idx}>
                        <h2 className="marquee-heading">{text}</h2>
                        <span className="marquee-separator">✦</span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="topisto-footer">
          <div className="footer-left">
            <a href="https://www.instagram.com/topistotomatomix/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/Topistonigeria" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <button
              className="social-icon community-care-icon"
              onClick={() => setIsCommunityCareOpen(true)}
              aria-label="Open Topisto Community Care Program"
              title="Community Care"
            >
              <svg className="community-heart-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          <div className="footer-center">
            {/* Fixed Flavour Badge */}
            <div className="fixed-flavour-badge">
              <div className="flavour-badge-track" style={{ transform: `translateY(-${activeFlavourIndex * 25}%)` }}>
                <div className="flavour-badge-item">Classic Tomato Mix</div>
                <div className="flavour-badge-item">Goat Meat Flavour</div>
                <div className="flavour-badge-item">Chicken Flavour</div>
                <div className="flavour-badge-item">Fish Flavour</div>
              </div>
            </div>
          </div>

          <div className="footer-right">
            <div className="sizes-footer-wrapper">
              <span className="sizes-title">Available Sizes</span>
              <div className="sizes-circles-list">
                <div className="size-circle">
                  <span>400</span>
                  <small>g</small>
                </div>
                <div className="size-circle">
                  <span>210</span>
                  <small>g</small>
                </div>
                <div className="size-circle">
                  <span>70</span>
                  <small>g</small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal Popup for About Us */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAboutOpen(false)}
          >
            <motion.div
              className="about-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="about-modal-close" onClick={() => setIsAboutOpen(false)} aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="about-modal-scrollable">
                <h2 className="about-modal-title">About Us</h2>
                <div className="about-modal-body">
                  <p className="highlight-text">"Bringing richer flavour to every kitchen."</p>

                  <p>Topisto is a fast-growing food brand by Mohan Agro Foods Fze, created to provide rich, flavourful, and convenient cooking solutions for modern African kitchens.</p>

                  <p>With a strong understanding of Nigerian cooking preferences, Topisto products are carefully developed to enhance taste, improve meal consistency, and make food preparation easier for households, restaurants, caterers, and food service operators.</p>

                  <p>Our product range includes flavourful tomato mixes and cooking blends designed for everyday meals, festive dishes, and traditional recipes. Whether used in jollof rice, stews, soups, sauces, or local delicacies, Topisto helps bring depth, colour, and reliable taste to every dish.</p>

                  <p>At Topisto, we believe good food brings families and communities together. That is why our products are made to be affordable, easy to use, and suitable for both home and commercial cooking.</p>

                  <p>We are committed to supporting kitchens with dependable products that deliver rich flavour, consistent quality, and everyday convenience.</p>

                  <div className="purpose-promise-container">
                    <div className="modal-info-card">
                      <h3>Our Purpose</h3>
                      <ul>
                        <li><strong>Simpler Cooking:</strong> Making food preparation effortless and efficient.</li>
                        <li><strong>Tastier Meals:</strong> Elevating flavor profiles with rich, authentic tastes.</li>
                        <li><strong>More Enjoyable:</strong> Turning daily kitchen tasks into joyful culinary experiences.</li>
                        <li><strong>African Heritage:</strong> Tailoring specific food solutions for traditional African meals.</li>
                      </ul>
                    </div>

                    <div className="modal-info-card">
                      <h3>Our Promise</h3>
                      <ul>
                        <li><strong>Convenient Solutions:</strong> Providing easy-to-use products that save busy kitchens time.</li>
                        <li><strong>Affordable Premium:</strong> High-quality ingredients priced reasonably for every family.</li>
                        <li><strong>Taste-Enhancing:</strong> Ensuring rich color, depth, and flavor in every single dish.</li>
                        <li><strong>Cooking Confidence:</strong> Empowering you to prepare everyday meals with absolute pride.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Popup for Community Care */}
      <AnimatePresence>
        {isCommunityCareOpen && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCommunityCareOpen(false)}
          >
            <motion.div
              className="about-modal-content community-care-modal-content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="community-care-title"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="about-modal-close" onClick={() => setIsCommunityCareOpen(false)} aria-label="Close Community Care popup">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="about-modal-scrollable">
                <div className="community-care-heading">
                  <span className="community-care-heart" aria-hidden="true">♥</span>
                  <div>
                    <span className="community-care-eyebrow">TOPISTO COMMUNITY CARE PROGRAM</span>
                    <h2 id="community-care-title" className="about-modal-title">Nourishing Communities Together</h2>
                  </div>
                </div>

                <div className="about-modal-body community-care-body">
                  <p className="highlight-text">At Agrim International Nigeria, food represents care, dignity, and community.</p>
                  <p>Through Topisto Community Care, we support food assistance efforts and outreach programs for vulnerable communities, orphanages, and underserved groups.</p>

                  <div className="community-care-card">
                    <h3>Orphanage Support Program</h3>
                    <p>Topisto periodically supports orphanages and community welfare initiatives through:</p>
                    <ul>
                      <li>Food donations</li>
                      <li>Cooking support</li>
                      <li>Meal sponsorships</li>
                      <li>Community feeding initiatives</li>
                      <li>Family care outreach</li>
                    </ul>
                  </div>

                  <p>We believe every child deserves warmth, care, nutrition, and hope.</p>
                  <blockquote>“Sharing Meals. Sharing Hope.”</blockquote>
                  <p className="community-care-note">Many Nigerian companies support orphanages through food and welfare donations as part of community responsibility programs, helping vulnerable children with meals and essential supplies.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Popup for Enquire Now */}
      <AnimatePresence>
        {isEnquireOpen && (
          <motion.div
            className="about-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEnquireOpen(false)}
          >
            <motion.div
              className="enquire-modal-content"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="about-modal-close" onClick={() => setIsEnquireOpen(false)} aria-label="Close modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="about-modal-scrollable">
                <h2 className="about-modal-title">Enquire Now</h2>
                <p className="enquire-subtitle">Interested in Topisto for your home or business? Send us a message and our team will get back to you shortly.</p>

                <form className="enquire-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your enquiry! Our team will get back to you soon.'); setIsEnquireOpen(false); }}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" required placeholder="Enter your full name" />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input type="email" id="email" required placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" required placeholder="e.g. +234..." />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">Interested In</label>
                    <select id="interest" required defaultValue="tomato-paste">
                      <option value="tomato-paste">Topisto Tomato Paste / Mix</option>
                      <option value="distribution">Distribution / Partnership</option>
                      <option value="bulk-order">Bulk / Commercial Order</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="4" required placeholder="Describe your requirement in detail..."></textarea>
                  </div>

                  <button type="submit" className="btn-submit-enquiry">
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopistoPage;
