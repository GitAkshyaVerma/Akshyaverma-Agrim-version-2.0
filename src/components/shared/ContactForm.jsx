import React from 'react';
import { Mail, Phone, MapPin, Camera, ArrowRight, Building2, MessageSquareText } from 'lucide-react';

const contactHighlights = [
  'Distribution partnerships',
  'Bulk supply enquiries',
  'Retail and institutional channels'
];

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-page-header">
          <span className="contact-eyebrow">Contact</span>
          <h1 className="contact-page-title">Start a Conversation With Agrim</h1>
          <p className="contact-page-intro">
            Tell us what you are building, sourcing, or distributing. Our team will help route your enquiry to the right brand or business channel.
          </p>
        </div>

        <div className="contact-b2b-grid">

          <div className="contact-info-col">
            <div>
              <span className="contact-panel-kicker">Business support</span>
              <h2>Let’s Build Reliable Market Access</h2>
              <p>Partner with Agrim International for brand distribution, wholesale supply, and category-focused FMCG opportunities across growing markets.</p>
            </div>

            <div className="contact-highlight-list">
              {contactHighlights.map((item) => (
                <div className="contact-highlight-item" key={item}>
                  <Building2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail className="contact-info-icon" size={22} />
                <div>
                  <span>Email</span>
                  <a href="mailto:info@agriminternationals.com">info@agriminternationals.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <Phone className="contact-info-icon" size={22} />
                <div>
                  <span>Phone</span>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-info-icon" size={22} />
                <div>
                  <span>Office</span>
                  <a href="https://maps.google.com/?q=123+Global+Trade+Avenue+Business+District" target="_blank" rel="noopener noreferrer">
                    123 Global Trade Avenue, Business District
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-socials-block">
              <div className="contact-socials-header">Follow Our Brands</div>
              <div className="contact-socials">
                <a href="https://www.instagram.com/agrim.tombo" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Agrim Tombo">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/tangocondoms" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Tango Condoms">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/kuchikuchicondoms" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Kuchi Kuchi Condoms">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/womaneezzpads" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Womaneezz Pads">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/babyeezzdiapers" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Babyeezz Diapers">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/tobocandy" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Tobo Candy">
                  <Camera size={18} />
                </a>
                <a href="https://www.instagram.com/topistotomatomix" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Topisto Tomato Mix">
                  <Camera size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="contact-form-header">
              <MessageSquareText size={22} />
              <div>
                <span>Send an enquiry</span>
                <h2>How can we help?</h2>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" className="form-input" placeholder="Your company" required />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-input" placeholder="Your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="region">Region</label>
                  <select id="region" className="form-input" required>
                    <option value="">Select region</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="north-america">North America</option>
                    <option value="south-america">South America</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-input" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-b2b-submit">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
