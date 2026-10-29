import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const categories = {
  chudi: { title: 'Chudi Edit', description: 'Graceful silhouettes for every celebration.', image: '/image/category-chudi.png' },
  'short-tops': { title: 'Short Tops', description: 'A modern edit of easy separates and polished looks.', image: '/image/category-short-tops.png' },
  'full-frocks': { title: 'Full Frocks', description: 'Discover flowing silhouettes made for special moments.', image: '/image/category-full-frocks.png' },
  'kurti-sets': { title: 'Kurti Sets', description: 'Coordinated sets with thoughtful details for every day and celebration.', image: '/image/category-kurti-sets.png' },
  sarees: { title: 'Sarees', description: 'Find timeless drapes and refined looks for every occasion.', image: '/image/category-sarees.png' },
  'salwar-suits': { title: 'Salwar Suits', description: 'Shop elegant suit sets in rich colours and fluid silhouettes.', image: '/image/category-salwar-suits.png' },
  'anarkali-suits': { title: 'Anarkali Suits', description: 'Explore beautifully flared Anarkali looks from the Kyraa edit.', image: '/image/category-anarkali-suits.png' }
};

const products = [
  { name: 'Midnight Garden Embroidered Suit', designer: 'KYRAA EDIT', image: '/image/newarrival1.jpg', hoverImage: '/image/newarrival1-cloth.jpg', price: 8490, color: 'other', occasion: 'festive', tags: ['new', 'ready', 'sale'], category: 'kurti-sets' },
  { name: 'Ruby Heirloom Evening Gown', designer: 'KYRAA EDIT', image: '/image/newarrival2.jpg', hoverImage: '/image/newarrival2-cloth.jpg', price: 12990, color: 'red', occasion: 'evening', tags: ['new', 'try-on'], category: 'full-frocks' },
  { name: 'Emerald Garden Anarkali', designer: 'KYRAA EDIT', image: '/image/newarrival3.jpg', hoverImage: '/image/newarrival3-cloth.jpg', price: 11490, color: 'green', occasion: 'celebration', tags: ['try-on', 'custom'], category: 'anarkali-suits' },
  { name: 'Sapphire Embroidered Gown', designer: 'KYRAA EDIT', image: '/image/newarrival4.jpg', hoverImage: '/image/newarrival4-cloth.jpg', price: 13990, color: 'blue', occasion: 'evening', tags: ['new', 'try-on'], category: 'full-frocks' },
  { name: 'Golden Hour Celebration Suit', designer: 'KYRAA EDIT', image: '/image/newarrival5.jpg', hoverImage: '/image/newarrival5-cloth.webp', price: 9990, color: 'other', occasion: 'festive', tags: ['ready', 'sale'], category: 'salwar-suits' },
  { name: 'Teal Blossom Anarkali', designer: 'KYRAA EDIT', image: '/image/newarrival6.jpg', hoverImage: '/image/newarrival6-cloth.jpg', price: 10990, color: 'green', occasion: 'celebration', tags: ['new', 'custom'], category: 'anarkali-suits' },
  { name: 'Lavender Dream Gown', designer: 'KYRAA EDIT', image: '/image/newarrival7.jpg', hoverImage: '/image/newarrival7-cloth.jpg', price: 12490, color: 'other', occasion: 'evening', tags: ['try-on'], category: 'full-frocks' },
  { name: 'Coral Garden Occasionwear', designer: 'KYRAA EDIT', image: '/image/newarrival8.jpg', hoverImage: '/image/newarrival8-cloth.jpg', price: 11990, color: 'red', occasion: 'celebration', tags: ['new', 'ready'], category: 'full-frocks' },
  { name: 'Ivory Lumière Embroidered Set', designer: 'KYRAA EDIT', image: '/image/newarrival9.jpg', hoverImage: '/image/newarrival9-cloth.jpg', price: 14990, color: 'light', occasion: 'evening', tags: ['try-on', 'custom'], category: 'kurti-sets' },
  { name: 'Plum Royale Anarkali', designer: 'KYRAA EDIT', image: '/image/newarrival10.jpg', hoverImage: '/image/newarrival10-cloth.jpg', price: 13490, color: 'other', occasion: 'festive', tags: ['new', 'sale'], category: 'anarkali-suits' }
];

const editTitles = {
  'new-arrivals': 'New Arrivals',
  women: 'Women',
  men: 'Men',
  kids: 'Kids',
  jewellery: 'Jewellery',
  accessories: 'Accessories',
  wedding: 'Wedding',
  sangeet: 'Sangeet',
  reception: 'Reception',
  festival: 'Festival',
  casual: 'Casual',
  'office-wear': 'Office Wear'
};

const editHeroImages = { 
  'new-arrivals': '/image/newarrival2.jpg', 
  wedding: '/image/category-anarkali-suits.png', 
  sangeet: '/image/category-full-frocks.png', 
  reception: '/image/category-sarees.png', 
  festival: '/image/category-kurti-sets.png', 
  casual: '/image/category-short-tops.png', 
  'office-wear': '/image/category-chudi.png' 
};

function QuickViewModal({ product, isOpen, onClose, onAddToBag }) {
  if (!isOpen || !product) return null;
  
  return (
    <>
      <div className="quick-view-backdrop" onClick={onClose}></div>
      <dialog className="quick-view-dialog" open aria-labelledby="quick-view-title">
        <button className="dialog-close" onClick={onClose} aria-label="Close quick view">×</button>
        <img className="quick-view-image" src={product.image} alt={product.name} />
        <div className="quick-view-details">
          <p className="eyebrow">KYRAA EDIT</p>
          <h2 className="quick-view-title" id="quick-view-title">{product.name}</h2>
          <p className="quick-view-price">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="dialog-note">A considered look for your occasionwear wardrobe.</p>
          <button className="bag-button" onClick={() => onAddToBag(product)}>ADD TO BAG</button>
        </div>
      </dialog>
    </>
  );
}

function ProductCard({ product, onQuickView }) {
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <article className="product-card">
      <div className="product-image-wrap" 
           onMouseEnter={() => setHovered(true)} 
           onMouseLeave={() => setHovered(false)}>
        <img 
          className="product-image" 
          src={hovered && product.hoverImage ? product.hoverImage : product.image} 
          alt={product.name} 
          loading="lazy"
          onClick={() => onQuickView(product)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onQuickView(product);
            }
          }}
        />
        <span className="product-badge">
          {product.tags.includes('new') ? 'NEW ARRIVAL' : product.tags.includes('sale') ? 'ON SALE' : 'KYRAA EDIT'}
        </span>
        <button 
          className="wishlist" 
          type="button" 
          aria-label={`Add ${product.name} to wishlist`} 
          aria-pressed={saved}
          onClick={() => setSaved(!saved)}
        >
          {saved ? '♥' : '♡'}
        </button>
        <button className="quick-view" type="button" onClick={() => onQuickView(product)}>
          Quick view
        </button>
      </div>
      <div className="product-info">
        <p className="designer-name">{product.designer}</p>
        <h2>{product.name}</h2>
        <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </article>
  );
}

export default function CategoryPage() {
  const [searchParams, setSearchParams] = useState(() => new URLSearchParams(window.location.search));
  const categoryKey = searchParams.get('category') || '';
  const editKey = searchParams.get('edit') || '';
  
  const [filters, setFilters] = useState({
    occasion: [],
    color: []
  });
  const [sortBy, setSortBy] = useState('recommended');
  const [viewMode, setViewMode] = useState('grid');
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });
  
  const category = categories[categoryKey];
  
  const pageTitle = useMemo(() => {
    if (category) return `${category.title} | Kyraa Style`;
    if (editTitles[editKey]) return `${editTitles[editKey]} | Kyraa Style`;
    return 'Curated Collections | Kyraa Style';
  }, [category, editKey]);
  
  const heroData = useMemo(() => {
    if (category) {
      return {
        title: category.title,
        description: category.description,
        image: category.image
      };
    }
    if (editTitles[editKey]) {
      const editTitle = editTitles[editKey];
      return {
        title: `${editTitle} Edit`,
        description: editKey === 'new-arrivals' 
          ? 'Explore the latest looks from the Kyraa Style edit.'
          : `Discover occasion-ready styles curated for ${editTitle.toLowerCase()}.`,
        image: editHeroImages[editKey] || '/image/newarrival2.jpg'
      };
    }
    return {
      title: 'Curated Collections',
      description: 'Discover thoughtfully selected Indian occasionwear and contemporary classics.',
      image: '/image/category-chudi.png'
    };
  }, [category, editKey]);
  
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
  
  const filteredProducts = useMemo(() => {
    let visible = products.filter((product) => {
      const occasionMatch = filters.occasion.length === 0 || filters.occasion.includes(product.occasion);
      const colorMatch = filters.color.length === 0 || filters.color.includes(product.color);
      
      // Filter by category if specified
      if (categoryKey && product.category !== categoryKey) return false;
      
      return occasionMatch && colorMatch;
    });
    
    if (sortBy === 'price-low') visible.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') visible.sort((a, b) => b.price - a.price);
    if (sortBy === 'name') visible.sort((a, b) => a.name.localeCompare(b.name));
    
    return visible;
  }, [filters, sortBy, categoryKey]);
  
  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };
  
  const clearFilters = () => {
    setFilters({ occasion: [], color: [] });
  };
  
  const handleAddToBag = (product) => {
    try {
      const bag = JSON.parse(window.localStorage.getItem('kyraa-category-bag') || '[]');
      bag.push({ category: category ? category.title : 'Curated', product: product.name, price: product.price });
      window.localStorage.setItem('kyraa-category-bag', JSON.stringify(bag));
    } catch (_) {}
    
    setQuickViewProduct(null);
    setToast({ visible: true, message: `${product.name} added to your bag.` });
    setTimeout(() => setToast({ visible: false, message: '' }), 2400);
  };
  
  return (
    <div className="catalog-app">
      <div className="announcement-bar">
        <span aria-hidden="true">✧</span> COMPLIMENTARY SHIPPING ON ORDERS ABOVE ₹2,999 <span aria-hidden="true">✧</span>
      </div>
      
      <header className="catalog-header">
        <a className="catalog-brand" href="/" aria-label="Kyraa Style home">
          <img src="/image/kyraastyle-logo.svg" alt="Kyraa Style" />
        </a>
        <div className="header-actions" aria-label="Shopping tools">
          <button type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8"></circle>
              <path d="m16 16 5 5"></path>
            </svg>
          </button>
          <button type="button" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="7" r="3.3"></circle>
              <path d="M5 21v-2.2a7 7 0 0 1 14 0V21z"></path>
            </svg>
          </button>
          <button type="button" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 8.7c0 5.3-8.8 11-8.8 11s-8.8-5.7-8.8-11a4.7 4.7 0 0 1 8.8-2.1 4.7 4.7 0 0 1 8.8 2.1Z"></path>
            </svg>
          </button>
          <button type="button" aria-label="Shopping bag">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 8h14l1 13H4L5 8Z"></path>
              <path d="M9 9V6a3 3 0 0 1 6 0v3"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="catalog-page" id="catalog-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/#shop-by-category">Shop by category</Link>
          <span aria-hidden="true">/</span>
          <span>{heroData.title}</span>
        </nav>

        <section className="collection-hero" aria-labelledby="collection-title">
          <div className="collection-hero-copy">
            <span className="hero-ornament" aria-hidden="true">✧</span>
            <h1 id="collection-title">{heroData.title}</h1>
            <p>{heroData.description}</p>
          </div>
          <img className="collection-hero-image" src={heroData.image} alt={`${heroData.title} occasionwear collection`} />
        </section>

        <div className="collection-toolbar">
          <p className="result-count">
            <strong>{filteredProducts.length}</strong> STYLES
          </p>
          <div className="toolbar-controls">
            <button 
              className="filter-toggle" 
              type="button" 
              aria-expanded={filterPanelOpen} 
              aria-controls="filter-panel"
              onClick={() => setFilterPanelOpen(!filterPanelOpen)}
            >
              <span aria-hidden="true">☷</span> Filters
            </button>
            <label className="sort-control">
              Sort by
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort products">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="name">Name</option>
              </select>
            </label>
            <div className="view-toggle" role="group" aria-label="Product layout">
              <button 
                className={viewMode === 'grid' ? 'is-active' : ''} 
                type="button" 
                aria-label="Grid view"
                onClick={() => setViewMode('grid')}
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 2h6v6H2zM12 2h6v6h-6zM2 12h6v6H2zM12 12h6v6h-6z"></path>
                </svg>
              </button>
              <button 
                className={viewMode === 'list' ? 'is-active' : ''} 
                type="button" 
                aria-label="List view"
                onClick={() => setViewMode('list')}
              >
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 4h2m3 0h11M2 10h2m3 0h11M2 16h2m3 0h11"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="catalog-layout">
          <aside className={`filter-panel ${filterPanelOpen ? 'is-open' : ''}`} id="filter-panel" aria-label="Product filters">
            <div className="filter-heading">
              <h2>Filters</h2>
              <button type="button" onClick={clearFilters}>Clear all</button>
            </div>
            <details open>
              <summary>Category</summary>
              {Object.entries(categories).map(([key, cat]) => (
                <Link 
                  key={key}
                  className="filter-link" 
                  to={`/category?category=${encodeURIComponent(key)}`}
                  aria-current={categoryKey === key ? 'page' : undefined}
                >
                  {cat.title}
                </Link>
              ))}
            </details>
            <details open>
              <summary>Occasion</summary>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.occasion.includes('festive')}
                  onChange={() => handleFilterChange('occasion', 'festive')}
                /> Festive
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.occasion.includes('celebration')}
                  onChange={() => handleFilterChange('occasion', 'celebration')}
                /> Celebration
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.occasion.includes('evening')}
                  onChange={() => handleFilterChange('occasion', 'evening')}
                /> Evening
              </label>
            </details>
            <details open>
              <summary>Colour</summary>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.color.includes('red')}
                  onChange={() => handleFilterChange('color', 'red')}
                /> Red &amp; pink
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.color.includes('green')}
                  onChange={() => handleFilterChange('color', 'green')}
                /> Green &amp; teal
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.color.includes('blue')}
                  onChange={() => handleFilterChange('color', 'blue')}
                /> Blue
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.color.includes('light')}
                  onChange={() => handleFilterChange('color', 'light')}
                /> Light neutrals
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={filters.color.includes('other')}
                  onChange={() => handleFilterChange('color', 'other')}
                /> Other colours
              </label>
            </details>
          </aside>

          <section className="results-area" aria-label="Collection products">
            <section className={`product-grid ${viewMode === 'list' ? 'is-list-view' : ''}`} aria-label="Collection products">
              {filteredProducts.length === 0 ? (
                <p className="empty-state">No styles match those filters. Try clearing a filter to see more.</p>
              ) : (
                filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.name} 
                    product={product} 
                    onQuickView={setQuickViewProduct}
                  />
                ))
              )}
            </section>
          </section>
        </div>

        <section className="more-categories" aria-labelledby="more-categories-title">
          <div>
            <p className="eyebrow">KEEP EXPLORING</p>
            <h2 id="more-categories-title">Shop by category</h2>
          </div>
          <div className="category-links">
            {Object.entries(categories).map(([key, cat]) => (
              <Link key={key} to={`/category?category=${encodeURIComponent(key)}`}>
                {cat.title}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <QuickViewModal 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)}
        onAddToBag={handleAddToBag}
      />

      <div className={`toast ${toast.visible ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {toast.message}
      </div>
    </div>
  );
}
