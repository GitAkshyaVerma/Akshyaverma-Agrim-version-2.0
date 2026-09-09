import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award, Building2, Mail, MapPin, Phone, Send, Wine } from 'lucide-react';
import './TomboContactPage.css';

const tomboSupport = [
  {
    icon: <Wine size={22} />,
    title: 'Premium spirits',
    text: 'Enquire about Brandy, Whiskey, Tombo Crimica, Chocolate Vodka and Herbal Bitters.',
  },
  {
    icon: <Building2 size={22} />,
    title: 'Trade partners',
    text: 'Distribution, wholesale, hospitality, boutique retail and bulk-order support.',
  },
  {
    icon: <Award size={22} />,
    title: 'Brand service',
    text: 'Get guidance on product range, availability, partnership fit and ordering details.',
  },
];

const TomboContactPage = () => {
  return (
    <div className="tombo-contact-page">
      <header className="tombo-contact-header">
        <Link to="/tombo" className="tombo-contact-back">
          <ArrowLeft size={18} />
          <span>Back to Tombo</span>
        </Link>

        <Link to="/tombo" className="tombo-contact-logo" aria-label="Tombo home">
          <img src="/assets/newLogo.png" alt="Tombo" />
        </Link>
      </header>

      <main className="tombo-contact-main">
        <section className="tombo-contact-hero">
          <div className="tombo-contact-copy">
            <span className="tombo-contact-eyebrow">Tombo Premium Range</span>
            <h1>Start a refined spirits conversation.</h1>
            <p>
              Connect with Agrim International Nigeria for Tombo premium spirits,
              distribution opportunities, bulk purchasing, hospitality supply and
              partnership enquiries.
            </p>
          </div>

          <aside className="tombo-contact-panel">
            <span>Distribution desk</span>
            <h2>Contact our spirits team</h2>
            <div className="tombo-contact-info">
              <a href="mailto:info@agrim.africa">
                <Mail size={20} />
                info@agrim.africa
              </a>
              <a href="tel:+2347035786300">
                <Phone size={20} />
                +234-7035786300
              </a>
              <p>
                <MapPin size={20} />
                Agrim International Nigeria
              </p>
            </div>
          </aside>
        </section>

        <section className="tombo-contact-support" aria-label="Tombo contact support">
          {tomboSupport.map((item) => (
            <article key={item.title}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="tombo-contact-form-section">
          <div className="tombo-contact-form-intro">
            <span><Send size={17} /> Send enquiry</span>
            <h2>Tell us what you are looking for.</h2>
            <p>
              Share your product interest, location, order size and business type
              so our team can respond with the right Tombo support.
            </p>
          </div>

          <form className="tombo-contact-form" onSubmit={(event) => event.preventDefault()}>
            <div className="tombo-contact-row">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Business type
                <select name="businessType">
                  <option>Distributor</option>
                  <option>Wholesaler</option>
                  <option>Retailer</option>
                  <option>Hotel / Bar / Restaurant</option>
                  <option>General enquiry</option>
                </select>
              </label>
            </div>
            <div className="tombo-contact-row">
              <label>
                Email or phone
                <input type="text" name="contact" placeholder="Your contact details" />
              </label>
              <label>
                Product interest
                <select name="product">
                  <option>Tombo Brandy</option>
                  <option>Tombo Whiskey</option>
                  <option>Tombo Tombo Crimica </option>
                  <option>Tombo Chocolate Vodka</option>
                  <option>Tombo Herbal Bitters</option>
                  <option>Full premium range</option>
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Tell us your city, quantity, distribution interest or partnership request." />
            </label>
            <button type="submit">
              Send Tombo enquiry <ArrowRight size={18} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TomboContactPage;
