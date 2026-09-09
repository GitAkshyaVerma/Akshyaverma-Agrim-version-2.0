import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone, Send, Sparkles, Store } from 'lucide-react';
import './ToboContactPage.css';

const toboContactCards = [
  {
    icon: <Store size={22} />,
    label: 'Trade channels',
    text: 'Supermarkets, schools, kiosks, open markets, wholesalers and impulse retail.',
  },
  {
    icon: <Sparkles size={22} />,
    label: 'Product enquiries',
    text: 'Ask about Tobo candies, lollipops, flavours, availability and distribution support.',
  },
  {
    icon: <Send size={22} />,
    label: 'Fast response',
    text: 'Share your city, business type and order interest so our team can guide you.',
  },
];

const ToboContactPage = () => {
  return (
    <div className="tobo-contact-page">
      <header className="tobo-contact-header">
        <Link to="/tobo" className="tobo-contact-back" aria-label="Back to Tobo page">
          <ArrowLeft size={18} />
          <span>Back to Tobo</span>
        </Link>

        <Link to="/tobo" className="tobo-contact-logo" aria-label="Tobo home">
          <img src="/assets/tobo/tobo_logo.png" alt="Tobo" />
        </Link>
      </header>

      <main className="tobo-contact-main">
        <section className="tobo-contact-hero">
          <div className="tobo-contact-copy">
            <p className="tobo-contact-kicker"><Sparkles size={17} /> Tobo Candy Co.</p>
            <h1>Let’s make sweet moments <em>easy to find.</em></h1>
            <p>
              Contact Agrim International Nigeria for Tobo confectionery enquiries,
              wholesale supply, retail distribution, school-channel orders and
              product availability.
            </p>
          </div>

          <div className="tobo-contact-card">
            <div className="tobo-contact-card-badge">Taste, fun & happiness</div>
            <h2>Talk to our Tobo team</h2>
            <div className="tobo-contact-info">
              <a href="mailto:info@agrim.africa">
                <Mail size={20} />
                <span>info@agrim.africa</span>
              </a>
              <a href="tel:+2347035786300">
                <Phone size={20} />
                <span>+234-7035786300</span>
              </a>
              <p>
                <MapPin size={20} />
                <span>Agrim International Nigeria</span>
              </p>
            </div>
          </div>
        </section>

        <section className="tobo-contact-grid" aria-label="Tobo contact support">
          {toboContactCards.map((item) => (
            <article className="tobo-contact-mini-card" key={item.label}>
              <div>{item.icon}</div>
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="tobo-contact-form-section">
          <div>
            <span>Send enquiry</span>
            <h2>Tell us what you need.</h2>
            <p>
              Use this form for Tobo supply, wholesale, distribution and product
              questions. The more specific the details, the smoother the follow-up.
            </p>
          </div>

          <form className="tobo-contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" />
            </label>
            <label>
              Business / Organisation
              <input type="text" name="business" placeholder="Company, school, kiosk, store..." />
            </label>
            <label>
              Email or phone
              <input type="text" name="contact" placeholder="How should we reach you?" />
            </label>
            <label>
              Enquiry
              <textarea name="message" rows="5" placeholder="Tell us about products, quantity, city or distribution interest." />
            </label>
            <button type="submit">
              Send Tobo enquiry <ArrowRight size={18} />
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ToboContactPage;
