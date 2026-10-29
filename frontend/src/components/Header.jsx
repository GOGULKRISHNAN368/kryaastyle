import { useState } from 'react';
import { navigation } from '../data/storefront.js';

export default function Header({ bagCount, onOpenBag }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar"><span>Complimentary shipping across India</span><span>Need styling advice? <a href="https://wa.me/919025799597">WhatsApp us</a></span></div>
      <div className="nav-shell">
        <button className="icon-button menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <a className="wordmark" href="#top" aria-label="Kyraa Style home">KYRAA <em>STYLE</em></a>
        <nav className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Main navigation">
          {navigation.map((item) => <a key={item} href="#collections" onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>⌕</button>
          <button className="icon-button bag-button" aria-label={`Shopping bag, ${bagCount} items`} onClick={onOpenBag}>Bag <span>{bagCount}</span></button>
        </div>
      </div>
      {searchOpen && <form className="search-panel" onSubmit={(event) => event.preventDefault()}><label htmlFor="site-search">Search Kyraa Style</label><input id="site-search" autoFocus placeholder="Search collections, silhouettes and more" /><button type="button" onClick={() => setSearchOpen(false)}>Close</button></form>}
    </header>
  );
}
