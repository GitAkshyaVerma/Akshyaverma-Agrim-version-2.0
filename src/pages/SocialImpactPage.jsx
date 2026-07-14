import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Users
} from 'lucide-react';

const partnershipGroups = [
  'NGOs',
  'Public health organisations',
  'HIV/AIDS awareness programs',
  'Youth education initiatives',
  'Family planning organisations',
  'Institutional healthcare partners'
];

const padAGirlFocus = [
  'Menstrual hygiene awareness',
  'School outreach programs',
  'Product donations',
  'Confidence-building education',
  'Supporting underserved communities',
  'Encouraging girls’ education'
];

const communityCareFocus = [
  'Food donations',
  'Cooking support',
  'Meal sponsorships',
  'Community feeding initiatives',
  'Family care outreach'
];

const manufacturingImpact = [
  'Increased local manufacturing capability',
  'Improved access to quality protection products',
  'Reduced reliance on imported condoms',
  'Public health support initiatives',
  'Employment creation and skills development',
  'Long-term industrial growth in Nigeria'
];

const SocialImpactPage = () => {
  return (
    <div className="social-impact-page">
      <section className="impact-page-hero">
        <div className="impact-hero-glow impact-hero-glow-one" />
        <div className="impact-hero-glow impact-hero-glow-two" />
        <div className="container impact-hero-content">
          <span className="impact-page-eyebrow"><HeartHandshake size={17} /> Social Impact</span>
          <h1>Building Healthier, Stronger Communities</h1>
          <p>
            Our responsibility extends beyond products. We support awareness, accessibility, dignity, local manufacturing, and partnerships that improve everyday wellbeing.
          </p>
          <div className="impact-hero-pillars">
            <span>Health Access</span>
            <span>Girls’ Dignity</span>
            <span>Community Care</span>
            <span>Local Manufacturing</span>
          </div>
        </div>
      </section>

      <section className="impact-intro-section">
        <div className="container impact-intro-grid">
          <div>
            <span className="impact-section-kicker">Our commitment</span>
            <h2>Supporting Responsible Health Awareness</h2>
          </div>
          <div className="impact-intro-copy">
            <p>At Agrim International Nigeria, we believe access to quality healthcare and preventive products contributes to healthier communities.</p>
            <p>Through our healthcare and hygiene brands, we actively support responsible awareness, accessibility, and partnerships that improve wellbeing across different communities.</p>
          </div>
        </div>
      </section>

      <section className="impact-program-section impact-program-section-light">
        <div className="container impact-program-grid">
          <div className="impact-program-heading">
            <div className="impact-program-icon"><ShieldCheck size={28} /></div>
            <span className="impact-section-kicker">Healthcare impact</span>
            <h2>NGO & Institutional Partnerships for Public Health</h2>
            <p>Through Tango and Kuchi Kuchi, we support institutional and NGO supply partnerships aimed at promoting responsible protection awareness and accessibility.</p>
          </div>
          <div className="impact-program-card">
            <h3>We welcome collaboration with</h3>
            <div className="impact-list-grid">
              {partnershipGroups.map((item) => (
                <div className="impact-list-item" key={item}><Users size={16} /><span>{item}</span></div>
              ))}
            </div>
            <p className="impact-card-note">Our objective is to improve access, awareness, education, and responsible preventive healthcare practices.</p>
          </div>
        </div>
      </section>

      <section className="impact-program-section impact-program-section-rose">
        <div className="container impact-program-grid impact-program-grid-reverse">
          <div className="impact-program-heading">
            <div className="impact-program-icon"><GraduationCap size={28} /></div>
            <span className="impact-section-kicker">Pad A Girl Initiative</span>
            <h2>Keeping Girls in School, Protecting Dignity</h2>
            <p>Through Womaneezz, we support initiatives aligned with menstrual hygiene awareness and girl-child dignity. We believe no girl should miss school because of a lack of access to menstrual hygiene products.</p>
            <blockquote>“Periods Should Never Stop Dreams.”</blockquote>
          </div>
          <div className="impact-program-card">
            <h3>Our initiative focuses on</h3>
            <div className="impact-list-grid">
              {padAGirlFocus.map((item) => (
                <div className="impact-list-item" key={item}><HandHeart size={16} /><span>{item}</span></div>
              ))}
            </div>
            <div className="impact-signature-line">One Pad. One Girl. One Future.</div>
          </div>
        </div>
      </section>

      <section className="impact-program-section impact-program-section-gold">
        <div className="container impact-program-grid">
          <div className="impact-program-heading">
            <div className="impact-program-icon"><HandHeart size={28} /></div>
            <span className="impact-section-kicker">Topisto Community Care</span>
            <h2>Nourishing Communities Together</h2>
            <p>Food represents care, dignity, and community. Through Topisto Community Care, we support food assistance efforts and outreach programs for vulnerable communities, orphanages, and underserved groups.</p>
            <blockquote>“Sharing Meals. Sharing Hope.”</blockquote>
          </div>
          <div className="impact-program-card">
            <h3>Orphanage Support Program</h3>
            <div className="impact-list-grid">
              {communityCareFocus.map((item) => (
                <div className="impact-list-item" key={item}><HeartHandshake size={16} /><span>{item}</span></div>
              ))}
            </div>
            <p className="impact-card-note">We believe every child deserves warmth, care, nutrition, and hope.</p>
          </div>
        </div>
      </section>

      <section className="impact-manufacturing-section">
        <div className="container">
          <div className="impact-manufacturing-header">
            <div className="impact-program-icon impact-program-icon-dark"><Factory size={30} /></div>
            <span className="impact-section-kicker">A healthcare manufacturing milestone</span>
            <h2>Nigeria’s First Condom Manufacturing Facility</h2>
            <p>Agrim International Nigeria, through Agrim Pharmaceutical & Health Care FZE, operates a condom manufacturing facility in the Calabar Export Processing Zone, Cross River State.</p>
          </div>

          <div className="impact-manufacturing-layout">
            <div className="impact-capacity-card">
              <Building2 size={28} />
              <strong>300,000+</strong>
              <span>Packs daily at reported full capacity</span>
            </div>
            <div className="impact-manufacturing-copy">
              <p>This milestone reflects our commitment to strengthening local manufacturing, reducing import dependency, improving healthcare-product accessibility, and contributing to Nigeria’s industrial growth.</p>
              <div className="impact-manufacturing-list">
                {manufacturingImpact.map((item) => (
                  <div key={item}><span>✓</span>{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="impact-sources">
            <span>Public reports and further reading</span>
            <div>
              <a href="https://news.crossriverstate.gov.ng/cr-saca-eyes-local-production-boost-during-calabar-condom-plant-inspection/" target="_blank" rel="noopener noreferrer">Cross River State News <ArrowUpRight size={14} /></a>
              <a href="https://theleaderng.com/tinubus-rubber-revolution-takes-root-in-cross-river-as-eba-partners-first-nigerian-condom-latex-products-factory/" target="_blank" rel="noopener noreferrer">The Leader Nigeria <ArrowUpRight size={14} /></a>
              <a href="https://punchng.com/local-condom-production-begins-soon-naca-dg/" target="_blank" rel="noopener noreferrer">Punch Nigeria <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-partner-cta">
        <div className="container impact-partner-cta-inner">
          <div>
            <span className="impact-section-kicker">Partner with purpose</span>
            <h2>Let’s create wider access and lasting community value.</h2>
          </div>
          <Link to="/contact" className="impact-contact-button">Start a conversation <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
};

export default SocialImpactPage;
