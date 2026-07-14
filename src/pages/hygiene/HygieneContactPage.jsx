import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Baby, Heart, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import './HygieneContactPage.css';

const hygieneLines = [
  {
    icon: <Baby size={22} />,
    title: 'Baby care',
    text: 'Babyeezz diaper enquiries, bulk orders and regional retail supply.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Feminine care',
    text: 'Womaneezz pads, menstrual hygiene support and trade availability.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'Protection',
    text: 'Tango and Kuchi Kuchi condom distribution and product enquiries.',
  },
];

const HygieneContactPage = () => {
  return (
    <div className="hygiene-contact-page">
      <nav className="hygiene-contact-nav">
        <Link to="/hygiene" className="hygiene-contact-back">
          <ArrowLeft size={18} />
          <span>Hygiene Division</span>
        </Link>
        <span className="hygiene-contact-brand">Agrim Health & Hygiene</span>
      </nav>

      <main className="hygiene-contact-main">
        <section className="hygiene-contact-hero">
          <div className="hygiene-contact-copy">
            <span className="hygiene-contact-eyebrow">Contact Hygiene</span>
            <h1>Care support for families, women and retail partners.</h1>
            <p>
              Reach Agrim International Nigeria for hygiene product enquiries,
              wholesale requests, distribution support, product availability and
              brand partnership conversations.
            </p>
          </div>

          <aside className="hygiene-contact-panel">
            <span>Business support</span>
            <h2>How can we help?</h2>
            <div className="hygiene-contact-info">
              <a href="mailto:info@agriminternational.com">
                <Mail size={20} />
                info@agriminternational.com
              </a>
              <a href="tel:+2340000000000">
                <Phone size={20} />
                +234 000 000 0000
              </a>
              <p>
                <MapPin size={20} />
                Agrim International Nigeria
              </p>
            </div>
          </aside>
        </section>

        <section className="hygiene-contact-lines" aria-label="Hygiene enquiry categories">
          {hygieneLines.map((item) => (
            <article key={item.title}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="hygiene-contact-form-wrap">
          <div className="hygiene-contact-form-intro">
            <span>Send a message</span>
            <h2>Tell us which product line you’re asking about.</h2>
            <p>
              Include your location, product interest and whether you need retail,
              wholesale or distribution support.
            </p>
          </div>

          <form className="hygiene-contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="hygiene-contact-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Product line
                <select name="product">
                  <option>Babyeezz Diapers</option>
                  <option>Womaneezz Pads</option>
                  <option>Tango Condoms</option>
                  <option>Kuchi Kuchi Condoms</option>
                  <option>General hygiene enquiry</option>
                </select>
              </label>
            </div>
            <div className="hygiene-contact-row">
              <label>
                Email or phone
                <input type="text" name="contact" placeholder="Your contact details" />
              </label>
              <label>
                City / Region
                <input type="text" name="location" placeholder="Where are you located?" />
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Share quantity, retail channel, partnership interest or product question." />
            </label>
            <button type="submit">
              Send hygiene enquiry <ArrowRight size={18} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default HygieneContactPage;
