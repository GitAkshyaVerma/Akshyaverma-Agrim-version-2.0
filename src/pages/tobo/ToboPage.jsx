import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import './ToboPage.css';

const lollipopItems = [
  {
    name: 'Strawberry',
    note: 'Berry flavour',
    image: '/assets/tobo/lollipop/strawberry.png',
    kicker: 'Strawberry lollipop',
    title: 'Pop into',
    highlight: 'berry bliss.',
    description: 'A bright strawberry lollipop with a juicy berry taste, made for playful breaks, cheerful treats, and smiles on a stick.',
    badge: <>Berry<br />bright!</>,
  },
  {
    name: 'Mix Fruit',
    note: 'Fruity mix',
    image: '/assets/tobo/lollipop/mix_fruit.png',
    kicker: 'Mixed fruit lollipop',
    title: 'Taste the',
    highlight: 'fruit parade.',
    description: 'A colourful mix of fruity flavours packed into one joyful lollipop. Every lick brings another sweet little surprise.',
    badge: <>Fruity<br />fun!</>,
  },
  {
    name: 'Choco Milk',
    note: 'Creamy cocoa',
    image: '/assets/tobo/lollipop/choco_milk.png',
    kicker: 'Choco milk lollipop',
    title: 'Swirl into',
    highlight: 'choco joy.',
    description: 'Creamy milk and chocolate flavour come together in a smooth lollipop made for cosy cravings and delicious little pauses.',
    badge: <>Choco<br />smooth!</>,
  },
  {
    name: 'Coffee',
    note: 'Coffee flavour',
    image: '/assets/tobo/lollipop/coffee.png',
    kicker: 'Coffee lollipop',
    title: 'Lick up the',
    highlight: 'good mood.',
    description: 'A rich coffee-flavoured lollipop with a smooth, grown-up twist—the sweet pick-me-up that stays with you a little longer.',
    badge: <>Coffee<br />kick!</>,
  },
];

const candyItems = [
  {
    name: 'Eclairs',
    note: 'Cream & coffee',
    image: '/assets/tobo/candy/eclairs.png',
    kicker: 'Cream and coffee flavoured',
    title: 'Smooth into',
    highlight: 'delight.',
    description: 'A creamy coffee-centred eclair wrapped in rich chocolate flavour—smooth, mellow, and made for slow little moments of joy.',
    badge: <>Creamy<br />classic!</>,
  },
  {
    name: 'Orange',
    note: 'Orange flavour',
    image: '/assets/tobo/candy/orange.png',
    kicker: 'Orange flavoured',
    title: 'Unwrap the',
    highlight: 'zest.',
    description: 'A bright burst of juicy orange flavour with a playful citrus finish. Fresh, fruity, and impossible to keep to yourself.',
    badge: <>Citrus<br />spark!</>,
  },
  {
    name: 'Mint',
    note: 'Cool mint',
    image: '/assets/tobo/candy/mint.png',
    kicker: 'Cool mint flavoured',
    title: 'Freshen the',
    highlight: 'moment.',
    description: 'A crisp mint candy with a clean, cooling finish. The pocket-sized pick-me-up for whenever your day needs a fresh start.',
    badge: <>Cool &<br />crisp!</>,
  },
  {
    name: 'Pineapple',
    note: 'Tropical flavour',
    image: '/assets/tobo/candy/pineapple.png',
    kicker: 'Pineapple flavoured',
    title: 'Taste the',
    highlight: 'sunshine.',
    description: 'Juicy pineapple flavour in a smooth, pocket-sized treat. One unwrap and your day gets a little more golden.',
    badge: <>Tropical<br />zing!</>,
  },
  {
    name: 'Coffee',
    note: 'Coffee flavour',
    image: '/assets/tobo/candy/coffee.png',
    kicker: 'Coffee flavoured',
    title: 'Wake up your',
    highlight: 'sweet side.',
    description: 'Deep coffee flavour in a smooth candy made for tiny breaks and big cravings. A café-style treat that travels anywhere.',
    badge: <>Bold<br />brew!</>,
  },
];

const ProductTray = ({ flavour, items, selectedItem, onSelect, productType }) => {
  return (
    <div className={`tobo-candy-tray tobo-candy-tray--${flavour}`}>
      <div className="tobo-tray-heading">
        <span>Choose your {productType}</span>
        <ArrowRight size={15} />
      </div>
      <div className="tobo-tray-scroll" tabIndex="0" aria-label={`Tobo ${productType} selection`}>
        {items.map((item) => (
          <button
            className={`tobo-mini-candy${selectedItem.name === item.name ? ' is-selected' : ''}`}
            key={item.name}
            type="button"
            onClick={() => onSelect(item)}
            aria-pressed={selectedItem.name === item.name}
            aria-label={`Show ${item.name} ${productType}`}
          >
            <img
              src={item.image}
              alt={`Tobo ${item.name} ${productType}`}
              loading="lazy"
            />
            <div><strong>{item.name}</strong><small>{item.note}</small></div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ToboPage = () => {
  const [selectedLollipop, setSelectedLollipop] = useState(lollipopItems[0]);
  const [sunnyCandy, setSunnyCandy] = useState(candyItems[3]);

  return (
    <div className="tobo-page">
      <header className="tobo-header">
        <Link to="/products" className="tobo-back" aria-label="Back to products">
          <ArrowLeft size={18} />
          <span>Our products</span>
        </Link>

        <a className="tobo-logo" href="#top" aria-label="Tobo candy home">
          <img src="/assets/tobo/tobo_logo.png" alt="Tobo" />
        </a>

        <nav className="tobo-nav" aria-label="Tobo navigation">
          <a href="#story">Our story</a>
          <Link to="/tobo/contact">Contact</Link>
        </nav>

        <a className="tobo-cta tobo-cta--nav" href="#treats">
          Taste the fun <ArrowRight size={17} />
        </a>
      </header>

      <main id="top">
        <section className="tobo-panel tobo-panel--berry" aria-labelledby="pop-up-title">
          <div className="tobo-copy tobo-copy--left">
            <p className="tobo-kicker"><Sparkles size={16} /> {selectedLollipop.kicker}</p>
            <h1 id="pop-up-title">
              <span>{selectedLollipop.title}</span>
              <em>{selectedLollipop.highlight}</em>
            </h1>
            <p className="tobo-description">{selectedLollipop.description}</p>
            <ProductTray
              flavour="berry"
              items={lollipopItems}
              selectedItem={selectedLollipop}
              onSelect={setSelectedLollipop}
              productType="lollipop"
            />
          </div>

          <div className="tobo-product-visual tobo-product-visual--pop">
            <span className="tobo-bubble tobo-bubble--one" />
            <span className="tobo-bubble tobo-bubble--two" />
            <span className="tobo-bubble tobo-bubble--three" />
            <div className="tobo-image-card">
              <img
                key={selectedLollipop.image}
                src={selectedLollipop.image}
                alt={`Tobo ${selectedLollipop.name} lollipop`}
              />
            </div>
            <span className="tobo-flavour-tag">{selectedLollipop.badge}</span>
          </div>

          <svg className="tobo-mobile-wave" viewBox="0 0 1000 170" preserveAspectRatio="none" aria-hidden="true">
            <path
              className="tobo-wave-ribbon"
              d="M-20 112 C 145 30, 300 14, 455 60 C 625 111, 744 164, 1020 66 L 1020 170 L -20 170 Z"
            />
            <path
              className="tobo-wave-fill"
              d="M-20 130 C 150 46, 302 31, 457 76 C 627 126, 754 181, 1020 83 L 1020 170 L -20 170 Z"
            />
          </svg>

          <a className="tobo-scroll-cue" href="#candy">Scroll to unwrap <ArrowDown size={15} /></a>
        </section>

        <section className="tobo-panel tobo-panel--pineapple" id="candy" aria-labelledby="candy-title">
          <div className="tobo-product-visual tobo-product-visual--pine">
            <span className="tobo-sunburst" />
            <span className="tobo-bubble tobo-bubble--four" />
            <span className="tobo-bubble tobo-bubble--five" />
            <div className="tobo-image-card">
              <img key={sunnyCandy.image} src={sunnyCandy.image} alt={`Tobo ${sunnyCandy.name} candy`} />
            </div>
            <span className="tobo-flavour-tag tobo-flavour-tag--pine">{sunnyCandy.badge}</span>
          </div>

          <div className="tobo-copy tobo-copy--right" id="treats">
            <p className="tobo-kicker"><Sparkles size={16} /> {sunnyCandy.kicker}</p>
            <h2 id="candy-title">
              <span>{sunnyCandy.title}</span>
              <em>{sunnyCandy.highlight}</em>
            </h2>
            <p className="tobo-description">{sunnyCandy.description}</p>
            <ProductTray
              flavour="pineapple"
              items={candyItems}
              selectedItem={sunnyCandy}
              onSelect={setSunnyCandy}
              productType="candy"
            />
          </div>
        </section>

        <section className="tobo-story" id="story">
          <div className="tobo-story-copy">
            <p className="tobo-story-kicker"><Sparkles size={17} /> About Tobo</p>
            <h2>Fun, flavour and <em>happiness</em> in every pack.</h2>
            <p>
              Tobo is Agrim International Nigeria&apos;s confectionery brand, created
              to bring fun, taste, excitement and memorable experiences to children,
              teenagers and families.
            </p>
            <p>
              We combine attractive packaging, exciting flavours and high-quality
              confectionery to create treats that are enjoyable, affordable and
              widely accessible.
            </p>
          </div>

          <aside className="tobo-story-card" aria-label="Tobo brand philosophy">
            <span>Our brand philosophy</span>
            <blockquote>“Taste, fun, and happiness in every pack.”</blockquote>
            <p>Made for every sweet moment, wherever people shop.</p>
            <div className="tobo-story-pills" aria-label="Where Tobo products are available">
              <span>Supermarkets</span>
              <span>Schools</span>
              <span>Kiosks</span>
              <span>Open markets</span>
              <span>Wholesalers</span>
              <span>Impulse retail</span>
            </div>
          </aside>
        </section>

        <section className="tobo-values" aria-label="Tobo brand values">
          <div>
            <strong>Exciting flavours</strong>
            <span>Playful tastes made for joyful moments.</span>
          </div>
          <div>
            <strong>Quality treats</strong>
            <span>Confectionery families can enjoy and trust.</span>
          </div>
          <div>
            <strong>Made accessible</strong>
            <span>Affordable products available across everyday retail.</span>
          </div>
        </section>
      </main>

      <footer className="tobo-footer" id="contact">
        <div className="tobo-logo tobo-logo--footer">
          <img src="/assets/tobo/tobo_logo.png" alt="Tobo" />
        </div>
        <p>Sweetening everyday moments.</p>
        <Link to="/tobo/contact">Talk to us <ArrowRight size={16} /></Link>
      </footer>
    </div>
  );
};

export default ToboPage;
