import React from 'react';
import { Mail, Phone, MapPin, Camera } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-b2b-grid">

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" className="form-input" placeholder="Your company" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-input" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="region">Region</label>
                <select id="region" className="form-input" required>
                  <option value="">Select your region...</option>
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="north-america">North America</option>
                  <option value="south-america">South America</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-input" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn-b2b-submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info-col">
            <h3>Get In Touch</h3>
            <p>Partner with Agrim Internationals. Whether you're looking for distribution rights or bulk supply, our global team is ready to assist.</p>

            <div className="contact-info-item">
              <Mail className="contact-info-icon" size={24} />
              <a href="mailto:info@agriminternationals.com">info@agriminternationals.com</a>
            </div>

            <div className="contact-info-item">
              <Phone className="contact-info-icon" size={24} />
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>

            <div className="contact-info-item">
              <MapPin className="contact-info-icon" size={24} />
              <a href="https://maps.google.com/?q=123+Global+Trade+Avenue+Business+District" target="_blank" rel="noopener noreferrer">
                123 Global Trade Avenue,<br />Business District
              </a>
            </div>

            <div className="contact-socials-header">Follow Our Brands</div>
            <div className="contact-socials">
              <a href="https://www.instagram.com/agrim.tombo" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Agrim Tombo">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/tangocondoms" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Tango Condoms">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/kuchikuchicondoms" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Kuchi Kuchi Condoms">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/womaneezzpads" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Womaneezz Pads">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/babyeezzdiapers" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Babyeezz Diapers">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/tobocandy" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Tobo Candy">
                <Camera size={20} />
              </a>
              <a href="https://www.instagram.com/topistotomatomix" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Topisto Tomato Mix">
                <Camera size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
