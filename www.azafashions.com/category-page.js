(() => {
  'use strict';

  const categories = {
    chudi: { title: 'Chudi Edit', description: 'Graceful silhouettes for every celebration.', image: '../images/real-products/Black_Kuti_3PieceSet_1.webp' },
    'short-tops': { title: 'Short Tops', description: 'A modern edit of easy separates and polished looks.', image: '../images/real-products/Short_Tops_2.webp' },
    'full-frocks': { title: 'Full Frocks', description: 'Discover flowing silhouettes made for special moments.', image: 'category-full-frocks.png' },
    'kurti-sets': { title: 'Kurti Sets', description: 'Coordinated sets with thoughtful details for every day and celebration.', image: '../images/real-products/White_Kurti_1.webp' },
    sarees: { title: 'Sarees', description: 'Find timeless drapes and refined looks for every occasion.', image: 'category-sarees.png' },
    'salwar-suits': { title: 'Salwar Suits', description: 'Shop elegant suit sets in rich colours and fluid silhouettes.', image: '../images/real-products/Salwar_Suits_1.webp' },
    'anarkali-suits': { title: 'Anarkali Suits', description: 'Explore beautifully flared Anarkali looks from the Kryaa edit.', image: 'category-anarkali-suits.png' }
  };

  const products = [
    { name: 'Midnight Garden Embroidered Suit', designer: 'KRYAA EDIT', image: 'newarrival1.jpg', hoverImage: 'newarrival1-cloth.jpg', price: 8490, color: 'other', occasion: 'festive', tags: ['new', 'ready', 'sale'] },
    { name: 'Ruby Heirloom Evening Gown', designer: 'KRYAA EDIT', image: 'newarrival2.jpg', hoverImage: 'newarrival2-cloth.jpg', price: 12990, color: 'red', occasion: 'evening', tags: ['new', 'try-on'] },
    { name: 'Emerald Garden Anarkali', designer: 'KRYAA EDIT', image: 'newarrival3.jpg', hoverImage: 'newarrival3-cloth.jpg', price: 11490, color: 'green', occasion: 'celebration', tags: ['try-on', 'custom'] },
    { name: 'Sapphire Embroidered Gown', designer: 'KRYAA EDIT', image: 'newarrival4.jpg', hoverImage: 'newarrival4-cloth.jpg', price: 13990, color: 'blue', occasion: 'evening', tags: ['new', 'try-on'] },
    { name: 'Golden Hour Celebration Suit', designer: 'KRYAA EDIT', image: 'newarrival5.jpg', hoverImage: 'newarrival5-cloth.webp', price: 9990, color: 'other', occasion: 'festive', tags: ['ready', 'sale'] },
    { name: 'Teal Blossom Anarkali', designer: 'KRYAA EDIT', image: 'newarrival6.jpg', hoverImage: 'newarrival6-cloth.jpg', price: 10990, color: 'green', occasion: 'celebration', tags: ['new', 'custom'] },
    { name: 'Lavender Dream Gown', designer: 'KRYAA EDIT', image: 'newarrival7.jpg', hoverImage: 'newarrival7-cloth.jpg', price: 12490, color: 'other', occasion: 'evening', tags: ['try-on'] },
    { name: 'Coral Garden Occasionwear', designer: 'KRYAA EDIT', image: 'newarrival8.jpg', hoverImage: 'newarrival8-cloth.jpg', price: 11990, color: 'red', occasion: 'celebration', tags: ['new', 'ready'] },
    { name: 'Ivory Lumière Embroidered Set', designer: 'KRYAA EDIT', image: 'newarrival9.jpg', hoverImage: 'newarrival9-cloth.jpg', price: 14990, color: 'light', occasion: 'evening', tags: ['try-on', 'custom'] },
    { name: 'Plum Royale Anarkali', designer: 'KRYAA EDIT', image: 'newarrival10.jpg', hoverImage: 'newarrival10-cloth.jpg', price: 13490, color: 'other', occasion: 'festive', tags: ['new', 'sale'] }
  ];
  const realImage = (filename) => `../images/real-products/${filename}`;
  const realProduct = (name, filename, price, color, occasion = 'festive') => ({
    name, designer: 'KRYAA EDIT', image: realImage(filename), hoverImage: '', price, color, occasion, tags: ['new', 'ready']
  });
  const categoryProducts = {
    chudi: [
      realProduct('Black Embroidered Three-Piece Set', 'Black_Kuti_3PieceSet_1.webp', 8490, 'other'),
      realProduct('Midnight Floral Kurti Set', 'Black_Kurti_1.webp', 7990, 'other'),
      realProduct('Charcoal Embroidered Kurti Set', 'Black_Kurti_2.webp', 8290, 'other'),
      realProduct('Midnight Paisley Kurti Set', 'Curated_Midnight_Paisley_Black_Kurti_5.webp', 8490, 'other'),
      realProduct('Black Garden Kurti Set', 'Curated_Salwar_Black_Kurti_3.webp', 8190, 'other')
    ],
    'short-tops': [
      realProduct('Paisley Sleeveless Short Top', 'Short_Tops_1.webp', 2490, 'other', 'casual'),
      realProduct('Printed Sleeveless Short Top', 'Short_Tops_2.webp', 2590, 'other', 'casual'),
      realProduct('Everyday Printed Short Top', 'Casuals_Short_Tops_3.webp', 2390, 'other', 'casual')
    ],
    'kurti-sets': [
      realProduct('Ice Blue Embroidered Kurti Set', 'IceBlue_Kurti_1.webp', 4290, 'blue'),
      realProduct('Emerald Floral Kurti Set', 'Green_Kurti_1.webp', 4490, 'green'),
      realProduct('Ivory Floral Kurti Set', 'White_Kurti_1.webp', 4290, 'light'),
      realProduct('White Embroidered Kurti Set', 'White_Kurti_2.webp', 4390, 'light'),
      realProduct('Floral White Kurti Set', 'White_Kurti_4.webp', 4290, 'light'),
      realProduct('Soft Pink Salwar Suit', 'Salwar_Suits_1.webp', 4690, 'red')
    ],
    'salwar-suits': [
      realProduct('Soft Pink Embroidered Salwar Suit', 'Salwar_Suits_1.webp', 4690, 'red'),
      realProduct('Midnight Embroidered Salwar Set', 'Curated_Salwar_Black_Kurti_3.webp', 8190, 'other'),
      realProduct('Ice Blue Salwar Suit', 'IceBlue_Kurti_1.webp', 4290, 'blue'),
      realProduct('Emerald Floral Salwar Suit', 'Green_Kurti_1.webp', 4490, 'green'),
      realProduct('Ivory Floral Salwar Suit', 'White_Kurti_1.webp', 4290, 'light')
    ]
  };
  const categoryKey = new URLSearchParams(window.location.search).get('category') || '';
  const editKey = new URLSearchParams(window.location.search).get('edit') || '';
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
  const category = categories[categoryKey];
  const heroImage = document.getElementById('collection-hero-image');
  if (!category) {
    document.getElementById('collection-title').textContent = 'Curated Collections';
    document.title = 'Curated Collections | Kryaa Style';
  } else {
    document.title = `${category.title} | Kryaa Style`;
    document.getElementById('breadcrumb-category').textContent = category.title;
    document.getElementById('collection-title').textContent = category.title;
    document.getElementById('collection-description').textContent = category.description;
    heroImage.src = imageUrl(category.image);
    heroImage.alt = `${category.title} occasionwear collection`;
  }
  if (!category && editTitles[editKey]) {
    const editTitle = editTitles[editKey];
    document.title = `${editTitle} | Kryaa Style`;
    document.getElementById('breadcrumb-category').textContent = editTitle;
    document.getElementById('collection-title').textContent = `${editTitle} Edit`;
    document.getElementById('collection-description').textContent = editKey === 'new-arrivals'
      ? 'Explore the latest looks from the Kryaa Style edit.'
      : `Discover occasion-ready styles curated for ${editTitle.toLowerCase()}.`;
    const editHeroImages = { 'new-arrivals': 'newarrival2.jpg', wedding: 'category-anarkali-suits.png', sangeet: 'category-full-frocks.png', reception: 'category-sarees.png', festival: 'category-kurti-sets.png', casual: 'category-short-tops.png', 'office-wear': 'category-chudi.png' };
    heroImage.src = imageUrl(editHeroImages[editKey] || 'newarrival2.jpg');
    heroImage.alt = `${editTitle} occasionwear collection`;
  }
  document.querySelectorAll('.filter-link').forEach((link) => {
    if (new URL(link.href).searchParams.get('category') === categoryKey) link.setAttribute('aria-current', 'page');
  });

  const grid = document.getElementById('product-grid');
  const count = document.getElementById('result-count');
  const panel = document.getElementById('filter-panel');
  const toast = document.getElementById('catalog-toast');
  let toastTimer;

  function imageUrl(path) {
    return path.startsWith('../') ? path : `../image/${path}`;
  }

  function currentFilters() {
    return Array.from(document.querySelectorAll('.filter-panel input:checked')).reduce((result, input) => {
      (result[input.name] ||= []).push(input.value);
      return result;
    }, {});
  }

  function activeQuickFilters() {
    return Array.from(document.querySelectorAll('.filter-chip[aria-pressed="true"]')).map((button) => button.dataset.tag);
  }

  function renderProducts() {
    const filters = currentFilters();
    const quickFilters = activeQuickFilters();
    const sourceProducts = categoryProducts[categoryKey] || products;
    let visible = sourceProducts.filter((product) => {
      const occasionMatch = !filters.occasion || filters.occasion.includes(product.occasion);
      const colorMatch = !filters.color || filters.color.includes(product.color);
      const quickMatch = quickFilters.every((tag) => product.tags.includes(tag));
      return occasionMatch && colorMatch && quickMatch;
    });
    const sort = document.getElementById('sort-select').value;
    if (sort === 'price-low') visible.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') visible.sort((a, b) => b.price - a.price);
    if (sort === 'name') visible.sort((a, b) => a.name.localeCompare(b.name));
    count.textContent = String(visible.length);
    grid.replaceChildren();

    if (!visible.length) {
      grid.innerHTML = '<p class="empty-state">No styles match those filters. Try clearing a filter to see more.</p>';
      return;
    }
    visible.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image-wrap">
          <img class="product-image" src="${imageUrl(product.image)}" alt="${product.name}" loading="lazy" tabindex="0" role="button" aria-label="Quick view: ${product.name}">
          ${product.hoverImage ? `<img class="product-image product-image--hover" src="${imageUrl(product.hoverImage)}" alt="" loading="lazy" aria-hidden="true">` : ''}
          <span class="product-badge">${product.tags.includes('new') ? 'NEW ARRIVAL' : product.tags.includes('sale') ? 'ON SALE' : 'KRYAA EDIT'}</span>
          <button class="wishlist" type="button" aria-label="Add ${product.name} to wishlist" aria-pressed="false">♡</button>
          <button class="quick-view" type="button">Quick view</button>
        </div>
        <div class="product-info">
          <p class="designer-name">${product.designer}</p>
          <h2>${product.name}</h2>
          <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
        </div>`;
      card.querySelector('.wishlist').addEventListener('click', (event) => {
        const button = event.currentTarget;
        const active = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(active));
        button.textContent = active ? '♥' : '♡';
      });
      card.querySelector('.quick-view').addEventListener('click', () => showQuickView(product));
      const productImage = card.querySelector('.product-image');
      const hoverImage = card.querySelector('.product-image--hover');
      if (hoverImage) hoverImage.addEventListener('error', () => card.classList.add('product-card--without-hover-image'), { once: true });
      productImage.addEventListener('click', () => showQuickView(product));
      productImage.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        showQuickView(product);
      });
      grid.appendChild(card);
    });
  }

  function showQuickView(product) {
    const dialog = document.getElementById('quick-view-dialog');
    dialog.querySelector('.quick-view-image').src = imageUrl(product.image);
    dialog.querySelector('.quick-view-image').alt = product.name;
    dialog.querySelector('.quick-view-title').textContent = product.name;
    dialog.querySelector('.quick-view-price').textContent = `₹${product.price.toLocaleString('en-IN')}`;
    dialog.showModal();
  }

  document.getElementById('filter-toggle').addEventListener('click', (event) => {
    const button = event.currentTarget;
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    panel.classList.toggle('is-open', expanded);
  });
  document.getElementById('sort-select').addEventListener('change', renderProducts);
  document.querySelectorAll('.view-toggle button').forEach((button, index) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.view-toggle button').forEach((option) => option.classList.remove('is-active'));
      button.classList.add('is-active');
      grid.classList.toggle('is-list-view', index === 1);
    });
  });
  document.querySelectorAll('.filter-chip').forEach((button) => {
    button.addEventListener('click', () => {
      button.setAttribute('aria-pressed', String(button.getAttribute('aria-pressed') !== 'true'));
      renderProducts();
    });
  });
  panel.addEventListener('change', renderProducts);
  document.getElementById('clear-filters').addEventListener('click', () => {
    panel.querySelectorAll('input:checked').forEach((input) => { input.checked = false; });
    document.querySelectorAll('.filter-chip[aria-pressed="true"]').forEach((button) => button.setAttribute('aria-pressed', 'false'));
    renderProducts();
  });
  document.getElementById('close-quick-view').addEventListener('click', () => document.getElementById('quick-view-dialog').close());
  document.getElementById('quick-view-add').addEventListener('click', () => {
    const name = document.querySelector('.quick-view-title').textContent;
    let bag = [];
    try { bag = JSON.parse(window.localStorage.getItem('kryaa-category-bag') || '[]'); } catch (_) { bag = []; }
    bag.push({ category: category ? category.title : 'Curated', product: name });
    window.localStorage.setItem('kryaa-category-bag', JSON.stringify(bag));
    document.getElementById('quick-view-dialog').close();
    toast.textContent = `${name} added to your bag.`;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
  });

  const categoryLinks = document.getElementById('category-links');
  Object.entries(categories).forEach(([key, entry]) => {
    const link = document.createElement('a');
    link.href = `category.html?category=${encodeURIComponent(key)}`;
    link.textContent = entry.title;
    categoryLinks.appendChild(link);
  });
  renderProducts();
})();
