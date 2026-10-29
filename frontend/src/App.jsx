import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import Footer from './components/Footer.jsx';
import { arrivals, categories, occasions } from './data/storefront.js';
import brandLogo from '../logo.png';
import desktopHero from '../image/banner-desktop-clean.jpg';
import mobileHero from '../image/banner-mobile-photo.jpg';
import storyImage from '../images/Designed for Every Story.png';

function Intro({ onEnter }) {
  return (
    <section className="intro" aria-label="Kyraa Style welcome">
      <div className="intro-silk" />
      <div className="intro-content">
        <img src={brandLogo} alt="Kyraa Style" />
        <p>CURATED FOR EVERY CELEBRATION</p>
        <button onClick={onEnter}>
          Enter the boutique <span>→</span>
        </button>
      </div>
    </section>
  );
}

function Bag({ items, onClose }) {
  return (
    <aside className="bag-drawer" aria-label="Shopping bag">
      <div className="bag-heading">
        <h2>Your bag</h2>
        <button onClick={onClose} aria-label="Close bag">×</button>
      </div>
      {items.length ? (
        <>
          <div className="bag-items">
            {items.map((item, index) => (
              <div className="bag-item" key={`${item.name}-${index}`}>
                <img src={item.image} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="checkout-button">Checkout</button>
        </>
      ) : (
        <p className="empty-bag">Your bag is waiting for something beautiful.</p>
      )}
    </aside>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [bag, setBag] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 3200);
    return () => window.clearTimeout(timer);
  }, []);

  const addToBag = (product) => {
    setBag((items) => [...items, product]);
    setBagOpen(true);
  };

  const subscribe = (event) => {
    event.preventDefault();
    if (email.trim()) setSignedUp(true);
  };

  return (
    <>
      {showIntro && <Intro onEnter={() => setShowIntro(false)} />}

      <div id="top" className="app-shell">
        <Header bagCount={bag.length} onOpenBag={() => setBagOpen(true)} />

        <main>
          {/* ── Hero ── */}
          <section className="hero" aria-labelledby="hero-title">
            <picture>
              <source media="(max-width: 700px)" srcSet={mobileHero} />
              <img src={desktopHero} alt="Kyraa Style celebration collection" />
            </picture>
            <div className="hero-copy">
              <p>THE FESTIVE EDIT</p>
              <h1 id="hero-title">
                Dressed for<br />
                <i>the moment</i>
              </h1>
              <a href="#new">Discover the collection <span>→</span></a>
            </div>
          </section>

          {/* ── New Arrivals ── */}
          <section id="new" className="section products-section">
            <div className="section-heading">
              <div>
                <p>JUST IN</p>
                <h2>New arrivals</h2>
              </div>
              <a href="#collections">View all <span>→</span></a>
            </div>
            <div className="product-grid">
              {arrivals.map((product) => (
                <ProductCard key={product.name} product={product} onAdd={addToBag} />
              ))}
            </div>
          </section>

          {/* ── Curated Collections ── */}
          <section id="collections" className="section collection-section">
            <div className="section-heading centered">
              <p>DISCOVER YOUR STYLE</p>
              <h2>Curated collections</h2>
              <span>Made to move with your life, and shine in your moments.</span>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <a href="#new" className="category-card" key={category.name}>
                  <img src={category.image} alt="" loading="lazy" />
                  <span>{category.name}</span>
                </a>
              ))}
            </div>
          </section>

          {/* ── Occasions ── */}
          <section id="occasions" className="occasion-feature">
            <div className="occasion-copy">
              <p>FOR EVERY CELEBRATION</p>
              <h2>
                Find your<br />
                <i>occasion look</i>
              </h2>
              <a href="#new">Explore all occasions <span>→</span></a>
            </div>
            <div className="occasion-grid">
              {occasions.map((occasion) => (
                <a href="#new" key={occasion.name}>
                  <img src={occasion.image} alt={occasion.name} loading="lazy" />
                  <span>{occasion.name}</span>
                </a>
              ))}
            </div>
          </section>

          {/* ── Editorial / Story ── */}
          <section id="story" className="editorial">
            <div className="editorial-image">
              <img src={storyImage} alt="A celebration outfit from Kyraa Style" loading="lazy" />
            </div>
            <div className="editorial-copy">
              <p>OUR POINT OF VIEW</p>
              <h2>
                Designed for<br />
                <i>every story</i>
              </h2>
              <p>
                From quiet rituals to the grandest celebrations, our edit brings together
                silhouettes that feel unmistakably yours.
              </p>
              <a href="#journal">Read our story <span>→</span></a>
            </div>
          </section>

          {/* ── Newsletter ── */}
          <section className="newsletter">
            <p>THE KYRAA LETTER</p>
            <h2>
              A little style inspiration,<br />
              <i>delivered to you.</i>
            </h2>
            {signedUp ? (
              <p className="signup-confirmation">
                Thank you — your next style note is on its way.
              </p>
            ) : (
              <form onSubmit={subscribe}>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                />
                <button>Subscribe <span>→</span></button>
              </form>
            )}
          </section>
        </main>

        <Footer />
      </div>

      {bagOpen && (
        <>
          <button
            className="drawer-backdrop"
            aria-label="Close bag"
            onClick={() => setBagOpen(false)}
          />
          <Bag items={bag} onClose={() => setBagOpen(false)} />
        </>
      )}
    </>
  );
}
