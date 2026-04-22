import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" className="form-input" required>
                <option value="">Select a subject...</option>
                <option value="inquiry">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="sales">Sales & Partnerships</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-input" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
