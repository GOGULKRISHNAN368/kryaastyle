(() => {
  'use strict';

  const newArrivalImages = [
    '../image/newarrival1.jpg',
    '../image/newarrival2.jpg',
    '../image/newarrival3.jpg',
    '../image/newarrival4.jpg',
    '../image/newarrival5.jpg',
    '../image/newarrival6.jpg',
    '../image/newarrival7.jpg',
    '../image/newarrival8.jpg',
    '../image/newarrival9.jpg',
    '../image/newarrival10.jpg'
  ];

  const shopByOccasionCards = [
    {
      title: 'Wedding',
      image: '../images/Wedding.png',
      href: 'aza-curates/sunkissed-summer-weddings/3401.html?category_uFilter=Men'
    },
    {
      title: 'Sangeet',
      image: '../images/sangeet.png',
      href: 'aza-curates/sangeet/3748.html'
    },
    {
      title: 'Reception & Cocktail',
      image: '../images/Reception.png',
      href: 'aza-curates/reception/3750.html'
    },
    {
      title: 'Festive',
      image: '../images/festival.png',
      href: 'aza-curates/mehendi/3747.html'
    },
    {
      title: 'Casuals',
      image: '../images/Casuals.png',
      href: 'aza-curates/roka/3746.html'
    },
    {
      title: 'Office Wear',
      image: '../images/Office_Wear.png',
      href: 'aza-curates/haldi-classics/3615.html'
    }
  ];

  const shopByCategoryCards = [
    { title: 'Chudi', image: '../image/chudi.png', href: 'collection/women/chudi.html' },
    { title: 'Short Tops', image: '../image/Short%20Tops.png', href: 'collection/women/short-tops.html' },
    { title: 'Full Frocks', image: '../image/FUll%20frocks.png', href: 'collection/women/full-frocks.html' },
    { title: 'Kurti Sets', image: '../image/Kurti%20Sets.png', href: 'collection/women/kurti-sets.html' },
    { title: 'Sarees', image: '../image/saree.png', href: 'collection/women/sarees.html' },
    { title: 'Salwar Suits', image: '../image/Salwar%20Suits.png', href: 'collection/women/salwar-suits.html' },
    { title: 'Anarkali Suits', image: '../image/Anarkali%20Suits.png', href: 'collection/women/anarkali-suits.html' }
  ];

  const kryaaLuxeSlides = [
    {
      image: '../image/kryaa-luxe-red.png',
      alt: 'Original fashion editorial portrait of a woman wearing a ruby red embroidered lehenga'
    },
    {
      image: '../image/kryaa-luxe-blue.png',
      alt: 'Original fashion editorial portrait of a woman wearing a midnight blue couture gown'
    },
    {
      image: '../image/kryaa-luxe-green.png',
      alt: 'Original fashion editorial portrait of a woman wearing an emerald green embroidered saree'
    }
  ];

  const curatedTrendingLooks = [
    { title: 'Black Kurta Set', caption: 'A timeless statement in deep black, made for evenings that call for understated impact.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068555339Black%20Kurta%20Set.jpg', href: 'collection/men/kurta-sets' },
    { title: 'Gold Bandhgala Set', caption: 'A refined bandhgala brings a polished finish to celebrations after sundown.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068439819Gold%20Bandhgala%20Set.jpg', href: 'collection/men/bandhgalas' },
    { title: 'Ivory Jacket Kurta Set', caption: 'Soft ivory layers create an easy statement for the season\'s special occasions.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068293238Ivory%20Jacket%20Kurta%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Cream Nehru Jacket Set', caption: 'A clean, modern take on occasion dressing with a quietly dressed-up feel.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068141747Cream%20Nehru%20Jacket%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Beige Kurta Set', caption: 'Warm neutrals and relaxed tailoring make this an effortless celebration look.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790067993159Beige%20Kurta%20Set.jpg', href: 'collection/men/kurta-sets' },
    { title: 'Ivory Embroidered Bundi Set', caption: 'Intricate embroidery adds just the right note of detail to a classic silhouette.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790067901613Ivory%20Embroidered%20Bundi%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Green Jacket Kurta Set', caption: 'A fresh shade of green gives traditional layers a confident new mood.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790067765481Green%20Jacket%20Kurta%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Green Silk Bundi Set', caption: 'Lustrous silk and rich colour bring a little occasion-ready drama.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790067591654Green%20Silk%20Bundi%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Green Bundi Set', caption: 'A versatile layered look that moves easily from daytime gatherings to dinner.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790067448148Green%20Bundi%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
    { title: 'Olive Green Sherwani Set', caption: 'A distinctive olive sherwani for moments worth dressing up for.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790061621555Olive%20Green%20Sherwani%20Set.jpg', href: 'collection/men/sherwanis' }
  ];

  const unwantedLabels = new Set([
    'Women',
    'Kids',
    'Jewellery',
    'Accessories',
    'Kryaa Editorials',
    "What's Next?"
  ]);

  const unwantedPage = /(^|\/)(women|kids|jewellery|accessories|whats-next)(?:\.html)?(?:[?#]|$)/i;

  const cleanNextData = () => {
    const nextData = document.getElementById('__NEXT_DATA__');
    if (!nextData?.textContent) return;

    try {
      const data = JSON.parse(nextData.textContent);
      const sections = data.props?.pageProps?.sections;
      if (!Array.isArray(sections)) return;

      const filteredSections = sections.filter((section) => {
        const title = String(section.title || '').toLowerCase();
        const heading = String(section.sectionHeadingText || '').replace(/\s+/g, ' ').trim();
        return title !== 'magazine' && heading !== 'Kryaa Editorials' && heading !== "What's Next?";
      });

      let dataChanged = filteredSections.length !== sections.length;
      filteredSections.forEach((section) => {
        const heading = String(section.sectionHeadingText || '').replace(/\s+/g, ' ').trim();
        if (heading === 'Designers In The Spotlight') {
          section.sectionHeadingText = 'New Arrivals';
          section.list?.slice(0, newArrivalImages.length).forEach((item, index) => {
            if (item?.bannerData) item.bannerData.image = newArrivalImages[index];
          });
          dataChanged = true;
        }
      });

      if (!dataChanged) return;

      data.props.pageProps.sections = filteredSections;
      nextData.textContent = JSON.stringify(data);
      if (window.__NEXT_DATA__) window.__NEXT_DATA__ = data;
    } catch (_) {
      // Leave the original page data untouched if the snapshot format changes.
    }
  };

  const cleanHeader = () => {
    document.querySelectorAll('header li').forEach((item) => {
      const label = item.textContent.replace(/\s+/g, ' ').trim();
      if (unwantedLabels.has(label)) item.remove();
    });
  };

  const syncHeaderToCategories = () => {
    document.querySelectorAll('header ul').forEach((list) => {
      const items = Array.from(list.querySelectorAll(':scope > li'));
      const hasMenNavigation = items.some((item) => {
        const href = item.querySelector('a')?.getAttribute('href') || '';
        return /collection\/men\//i.test(href) || /men\/category\/accessories\/footwear/i.test(href);
      });
      if (!hasMenNavigation) return;

      list.classList.add('kryaa-category-header-list');

      shopByCategoryCards.forEach((category, index) => {
        const item = items[index];
        const link = item?.querySelector('a');
        if (!item || !link) return;

        link.setAttribute('href', category.href);
        const label = link.querySelector('div, span') || link;
        label.textContent = category.title;
      });

      items.slice(shopByCategoryCards.length).forEach((item) => item.remove());
    });
  };

  const cleanImageSearch = () => {
    document.querySelectorAll('#imageSearchIO_deskNav').forEach((input) => {
      const section = input.closest('section');
      (section || input.closest('label') || input).remove();
    });
  };

  const setupHeroCarousel = () => {
    const hero = Array.from(document.querySelectorAll('.slick-slider'))
      .find((slider) => slider.querySelector('img[src*="banner-desktop"]'));
    const track = hero?.querySelector('.slick-track');
    const firstSlide = track?.querySelector('.slick-slide');
    if (!hero || !track || !firstSlide || hero.classList.contains('kryaa-hero-carousel')) return;

    const secondSlide = firstSlide.cloneNode(true);
    secondSlide.classList.remove('slick-active', 'slick-current');
    secondSlide.classList.add('kryaa-inclusive-slide');
    secondSlide.dataset.index = '1';
    secondSlide.setAttribute('aria-hidden', 'true');

    const image = secondSlide.querySelector('img');
    const source = secondSlide.querySelector('source');
    if (image) {
      image.src = '../images/Inclusive%20Comfort%20Fashion%20Collection%20(1).png';
      image.alt = 'Inclusive Comfort Fashion Collection';
      image.removeAttribute('srcset');
      image.removeAttribute('fetchpriority');
    }
    if (source) source.srcset = '../images/Designed%20for%20Every%20Story.png';

    const link = secondSlide.querySelector('a');
    if (link) {
      link.href = 'collection/men';
      link.setAttribute('aria-label', 'Shop the Inclusive Comfort Fashion collection');
    }

    track.appendChild(secondSlide);
    hero.classList.add('kryaa-hero-carousel');
    track.dataset.kryaaSlide = '0';

    const slides = [firstSlide, secondSlide];
    const update = (index) => {
      const active = (index + slides.length) % slides.length;
      track.dataset.kryaaSlide = String(active);
      track.style.setProperty('--kryaa-hero-slide', String(active));
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === active;
        slide.classList.toggle('slick-active', isActive);
        slide.classList.toggle('slick-current', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
    };

    hero.querySelectorAll('.slick-arrow').forEach((arrow) => {
      arrow.addEventListener('click', () => {
        update(Number(track.dataset.kryaaSlide || 0) + (arrow.classList.contains('slick-prev') ? -1 : 1));
      });
    });

    let timer = window.setInterval(() => update(Number(track.dataset.kryaaSlide || 0) + 1), 3000);
    hero.addEventListener('mouseenter', () => window.clearInterval(timer));
    hero.addEventListener('mouseleave', () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => update(Number(track.dataset.kryaaSlide || 0) + 1), 3000);
    });
  };

  const renameNewArrivalsSection = () => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]').forEach((heading) => {
      if (heading.textContent.replace(/\s+/g, ' ').trim() === 'Designers In The Spotlight') {
        heading.textContent = 'New Arrivals';
      }
    });
  };

  const replaceFirstNewArrivalImage = () => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]').forEach((heading) => {
      const label = heading.textContent.replace(/\s+/g, ' ').trim();
      if (label !== 'New Arrivals' && label !== 'Designers In The Spotlight') return;

      const section = heading.closest('section') || heading.parentElement?.parentElement;
      const images = Array.from(section?.querySelectorAll('img') || []);
      images.slice(0, newArrivalImages.length).forEach((image, index) => {
        image.src = newArrivalImages[index];
        image.removeAttribute('srcset');
      });
    });
  };

  const injectNewArrivalsMobileStyles = () => {
    if (document.getElementById('new-arrivals-mobile-styles')) return;

    const style = document.createElement('style');
    style.id = 'new-arrivals-mobile-styles';
    style.textContent = `
      .new-arrivals-mobile-section {
        margin-inline: auto;
      }

      .new-arrivals-centered-heading {
        display: flex !important;
        width: 100% !important;
        justify-content: center !important;
        text-align: center !important;
      }

      .new-arrivals-centered-heading > * {
        text-align: center !important;
      }

      .new-arrivals-mobile-section .new-arrivals-mobile-original,
      .new-arrivals-mobile-section .new-arrivals-mobile-grid-carousel {
        margin-inline: auto;
      }

      .new-arrivals-mobile-controls {
        display: none;
      }

      .new-arrivals-mobile-grid-carousel {
        display: none;
      }

      @media screen and (max-width: 767px) {
        .new-arrivals-mobile-section .new-arrivals-mobile-original {
          display: none !important;
        }

        .new-arrivals-mobile-grid-carousel {
          display: block !important;
          width: calc(100% - 24px);
          box-sizing: border-box;
          margin: 0 12px;
          overflow: hidden;
        }

        .new-arrivals-mobile-grid-viewport {
          width: 100%;
          overflow: hidden;
        }

        .new-arrivals-mobile-grid-track {
          display: flex;
          width: 100%;
          transition: transform .3s ease;
          will-change: transform;
        }

        .new-arrivals-mobile-grid-page {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          flex: 0 0 100%;
          box-sizing: border-box;
          padding: 0 18px;
        }

        .new-arrivals-mobile-grid-card {
          display: block !important;
          width: auto !important;
          min-width: 0 !important;
          padding: 0 !important;
        }

        .new-arrivals-mobile-grid-card > div {
          display: block !important;
          width: 100% !important;
        }

        .new-arrivals-mobile-grid-card .overflow-hidden {
          border-radius: 16px !important;
        }

        .new-arrivals-mobile-grid-card .relative[style*="aspect-ratio"] {
          aspect-ratio: 437 / 524 !important;
        }

        .new-arrivals-mobile-grid-card h3 {
          font-size: 17px !important;
          line-height: 1.15 !important;
        }

        .new-arrivals-mobile-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: calc(100% - 24px);
          margin: 10px 12px 0;
        }

        .new-arrivals-mobile-controls button {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 28px;
          width: 28px;
          height: 28px;
          border: 1px solid #d6d6d6;
          border-radius: 999px;
          background: #fff;
          color: #3c4242;
          font-size: 21px;
          line-height: 1;
        }

        .new-arrivals-mobile-controls button:disabled {
          opacity: .35;
        }

        .new-arrivals-mobile-progress {
          position: relative;
          width: min(150px, 42vw);
          height: 4px;
          overflow: hidden;
          border-radius: 999px;
          background: #ededed;
        }

        .new-arrivals-mobile-progress-thumb {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: inherit;
          background: #6c6c6c;
          transition: left .25s ease, width .25s ease;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const setupNewArrivalsMobileCarousel = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => {
        const label = item.textContent.replace(/\s+/g, ' ').trim();
        return label === 'New Arrivals' || label === 'Designers In The Spotlight';
      });
    const section = heading?.closest('section') || heading?.parentElement?.parentElement;
    const slider = section?.querySelector('.slick-slider');
    if (!section || !slider) return;

    section.classList.add('new-arrivals-mobile-section');
    heading.parentElement?.classList.add('new-arrivals-centered-heading');
    slider.classList.add('new-arrivals-mobile-original');

    const host = slider.parentElement;
    if (!host) return;

    let carousel = host.querySelector('.new-arrivals-mobile-grid-carousel');
    if (!carousel) {
      carousel = document.createElement('div');
      carousel.className = 'new-arrivals-mobile-grid-carousel';
      carousel.innerHTML = `
        <div class="new-arrivals-mobile-grid-viewport">
          <div class="new-arrivals-mobile-grid-track"></div>
        </div>
      `;
      host.appendChild(carousel);
    }

    const sourceSlides = Array.from(slider.querySelectorAll('.slick-slide'))
      .filter((slide) => !slide.classList.contains('slick-cloned'));
    const track = carousel.querySelector('.new-arrivals-mobile-grid-track');
    if (!track || !sourceSlides.length) return;

    if (carousel.dataset.cardCount !== String(sourceSlides.length)) {
      while (track.firstChild) track.removeChild(track.firstChild);

      for (let start = 0; start < sourceSlides.length; start += 4) {
        const page = document.createElement('div');
        page.className = 'new-arrivals-mobile-grid-page';

        sourceSlides.slice(start, start + 4).forEach((slide) => {
          const card = slide.querySelector('.px-3')?.cloneNode(true);
          if (!card) return;
          card.classList.add('new-arrivals-mobile-grid-card');
          page.appendChild(card);
        });

        track.appendChild(page);
      }

      carousel.dataset.cardCount = String(sourceSlides.length);
      carousel.dataset.pageCount = String(track.children.length);
      carousel.dataset.currentPage = '0';
    }

    const mobileImages = Array.from(track.querySelectorAll('img'));
    sourceSlides.forEach((slide, index) => {
      const sourceImage = slide.querySelector('img');
      const mobileImage = mobileImages[index];
      if (sourceImage && mobileImage && mobileImage.src !== sourceImage.src) {
        mobileImage.src = sourceImage.src;
      }
    });

    let controls = host.querySelector('.new-arrivals-mobile-controls');
    if (!controls) {
      controls = document.createElement('div');
      controls.className = 'new-arrivals-mobile-controls';
      controls.innerHTML = `
        <button type="button" class="new-arrivals-mobile-prev" aria-label="Previous new arrivals">‹</button>
        <div class="new-arrivals-mobile-progress" aria-hidden="true">
          <span class="new-arrivals-mobile-progress-thumb"></span>
        </div>
        <button type="button" class="new-arrivals-mobile-next" aria-label="Next new arrivals">›</button>
      `;
      host.appendChild(controls);
    }

    const previous = controls.querySelector('.new-arrivals-mobile-prev');
    const next = controls.querySelector('.new-arrivals-mobile-next');
    const progressThumb = controls.querySelector('.new-arrivals-mobile-progress-thumb');

    const pageCount = Number(carousel.dataset.pageCount) || 1;
    const setPage = (pageNumber) => {
      const page = Math.max(0, Math.min(pageCount - 1, pageNumber));
      carousel.dataset.currentPage = String(page);
      track.style.transform = `translate3d(-${page * 100}%, 0, 0)`;
      const thumbWidth = Math.min(100, Math.max(18, 100 / pageCount));
      const position = pageCount > 1 ? page / (pageCount - 1) : 0;

      if (progressThumb) {
        progressThumb.style.width = `${thumbWidth}%`;
        progressThumb.style.left = `${position * (100 - thumbWidth)}%`;
      }

      previous.disabled = page <= 0;
      next.disabled = page >= pageCount - 1;
    };

    previous.onclick = () => setPage(Number(carousel.dataset.currentPage || 0) - 1);
    next.onclick = () => setPage(Number(carousel.dataset.currentPage || 0) + 1);

    const viewport = carousel.querySelector('.new-arrivals-mobile-grid-viewport');
    if (viewport && !carousel.dataset.touchReady) {
      let touchStartX = 0;
      viewport.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0]?.clientX || 0;
      }, { passive: true });
      viewport.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0]?.clientX || 0;
        const distance = touchEndX - touchStartX;
        if (Math.abs(distance) < 40) return;
        setPage(Number(carousel.dataset.currentPage || 0) + (distance < 0 ? 1 : -1));
      }, { passive: true });
      carousel.dataset.touchReady = 'true';
    }

    carousel.__setNewArrivalsPage = setPage;
    setPage(Number(carousel.dataset.currentPage || 0));
  };

  const setupNewArrivalsDesktopCarousel = () => {
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => item.textContent.replace(/\s+/g, ' ').trim() === 'New Arrivals');
    const section = heading?.closest('section') || heading?.parentElement?.parentElement;
    const slider = section?.querySelector('.slick-slider');
    const track = slider?.querySelector('.slick-track');
    if (!section || !slider || !track || slider.dataset.newArrivalsDesktopReady === 'true') return;

    const slides = Array.from(slider.querySelectorAll('.slick-slide'))
      .filter((slide) => !slide.classList.contains('slick-cloned'));
    const previous = slider.querySelector('.slick-prev');
    const next = slider.querySelector('.slick-next');
    const list = slider.querySelector('.slick-list');
    const firstSlide = slides[0];
    if (!slides.length || !previous || !next || !list || !firstSlide) return;

    const listWidth = list.getBoundingClientRect().width;
    const slideWidth = firstSlide.getBoundingClientRect().width;
    const visibleSlides = Math.max(1, Math.round(listWidth / slideWidth));
    const lastSlideIndex = Math.max(0, slides.length - visibleSlides);
    let currentSlide = 0;

    const setSlide = (slideIndex) => {
      currentSlide = Math.max(0, Math.min(lastSlideIndex, slideIndex));
      track.style.transition = 'left .45s ease';
      track.style.left = `${-currentSlide * (100 / visibleSlides)}%`;
      previous.classList.toggle('slick-disabled', currentSlide === 0);
      next.classList.toggle('slick-disabled', currentSlide === lastSlideIndex);
    };

    const move = (direction) => (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      setSlide(currentSlide + direction);
    };

    previous.addEventListener('click', move(-1), true);
    next.addEventListener('click', move(1), true);
    slider.dataset.newArrivalsDesktopReady = 'true';
    setSlide(0);
  };

  const setupShopByOccasionSection = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => item.textContent.replace(/\s+/g, ' ').trim() === 'Shop by Occasion');
    const section = heading?.parentElement?.parentElement;
    const grid = section?.querySelector('.grid');
    if (!section || !grid || grid.dataset.localOccasionsReady === 'true') return;

    const cards = Array.from(grid.children).slice(0, shopByOccasionCards.length);
    if (cards.length !== shopByOccasionCards.length) return;

    cards.forEach((card, index) => {
      const item = shopByOccasionCards[index];
      card.classList.add('shop-by-occasion-card');
      card.innerHTML = `
        <a href="${item.href}" aria-label="Shop ${item.title}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
          <span>${item.title}</span>
        </a>
      `;
    });

    grid.dataset.localOccasionsReady = 'true';

    if (!document.getElementById('shop-by-occasion-styles')) {
      const style = document.createElement('style');
      style.id = 'shop-by-occasion-styles';
      style.textContent = `
        .shop-by-occasion-card {
          overflow: hidden;
          border-radius: 16px;
          background: #f1eee9;
        }

        .shop-by-occasion-card > a {
          position: absolute;
          inset: 0;
          display: block;
          overflow: hidden;
        }

        .shop-by-occasion-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .35s ease;
        }

        .shop-by-occasion-card:hover img {
          transform: scale(1.03);
        }

        .shop-by-occasion-card span {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 28px 14px 14px;
          color: #fff;
          font-size: 18px;
          line-height: 1.15;
          text-align: center;
          text-shadow: 0 1px 5px rgba(0, 0, 0, .55);
          background: linear-gradient(transparent, rgba(0, 0, 0, .55));
        }

        @media screen and (max-width: 767px) {
          .shop-by-occasion-card {
            border-radius: 12px;
          }

          .shop-by-occasion-card span {
            padding: 20px 5px 7px;
            font-size: 10px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  const setupShopByCategorySection = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => item.textContent.replace(/\s+/g, ' ').trim() === 'Shop By Category');
    const section = heading?.closest('.kryaa-category-section') || heading?.parentElement?.parentElement;
    if (!section || section.dataset.womenCategoriesReady === 'true') return;

    section.dataset.womenCategoriesReady = 'true';
    section.classList.add('women-category-section');

    const makeCard = (item) => `
      <a class="women-category-card" href="${item.href}">
        <span class="women-category-circle">
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
        </span>
        <span class="women-category-title">${item.title}</span>
      </a>
    `;

    section.innerHTML = `
      <div class="flex items-center gap-x-3 lg:gap-x-7 px-4 lg:px-0 justify-center">
        <h2 class="lg:text-[32px] lg:leading-9 text-xl flex items-center text-azaBlackShade3 __className_f37194 font-normal">Shop By Category</h2>
      </div>
      <div class="women-category-desktop">${shopByCategoryCards.map(makeCard).join('')}</div>
      <div class="women-category-mobile" aria-label="Women categories">
        <div class="women-category-mobile-track">
          <div class="women-category-mobile-page">${shopByCategoryCards.slice(0, 6).map(makeCard).join('')}</div>
          <div class="women-category-mobile-page">${shopByCategoryCards.slice(6).map(makeCard).join('')}</div>
        </div>
        <div class="women-category-dots" aria-label="Category pages">
          <button type="button" class="women-category-dot is-active" aria-label="Show first category page"></button>
          <button type="button" class="women-category-dot" aria-label="Show second category page"></button>
        </div>
      </div>
    `;

    if (!document.getElementById('women-category-styles')) {
      const style = document.createElement('style');
      style.id = 'women-category-styles';
      style.textContent = `
        .women-category-desktop {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 14px;
          padding: 0 8px;
        }

        .women-category-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          color: #3c4242;
          text-decoration: none;
        }

        .women-category-circle {
          display: block;
          width: min(160px, 100%);
          aspect-ratio: 1;
          overflow: hidden;
          border: 1px solid #b8b8b8;
          border-radius: 999px;
          background: #f7f7f7;
          box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        }

        .women-category-circle img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform .3s ease;
        }

        .women-category-card:hover .women-category-circle img {
          transform: scale(1.06);
        }

        .women-category-title {
          margin-top: 12px;
          color: #3c4242;
          font-size: 15px;
          line-height: 1.3;
          text-align: center;
        }

        .women-category-mobile {
          display: none;
        }

        @media screen and (max-width: 768px) {
          .women-category-desktop {
            display: none;
          }

          .women-category-mobile {
            display: block;
            width: 100%;
            overflow: hidden;
            padding: 0 4px;
            touch-action: pan-y;
          }

          .women-category-mobile-track {
            display: flex;
            width: 200%;
            transition: transform .35s cubic-bezier(.25, 1, .5, 1);
          }

          .women-category-mobile-page {
            display: grid;
            width: 50%;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px 8px;
            padding: 0 8px;
            box-sizing: border-box;
          }

          .women-category-mobile-page .women-category-card {
            width: 100%;
          }

          .women-category-mobile .women-category-circle {
            width: 92px;
            max-width: 100%;
          }

          .women-category-mobile .women-category-title {
            margin-top: 8px;
            font-size: 13px;
          }

          .women-category-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin: 14px 0 4px;
          }

          .women-category-dot {
            width: 7px;
            height: 7px;
            padding: 0;
            border: 0;
            border-radius: 999px;
            background: #d1d5db;
          }

          .women-category-dot.is-active {
            width: 9px;
            height: 9px;
            background: #1f2937;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const track = section.querySelector('.women-category-mobile-track');
    const dots = Array.from(section.querySelectorAll('.women-category-dot'));
    const setPage = (page) => {
      const nextPage = Math.max(0, Math.min(1, page));
      track.style.transform = `translateX(-${nextPage * 50}%)`;
      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === nextPage));
    };

    dots.forEach((dot, index) => { dot.onclick = () => setPage(index); });

    let startX = 0;
    let distance = 0;
    const mobile = section.querySelector('.women-category-mobile');
    mobile.addEventListener('touchstart', (event) => {
      startX = event.changedTouches[0]?.clientX || 0;
      distance = 0;
    }, { passive: true });
    mobile.addEventListener('touchmove', (event) => {
      distance = (event.changedTouches[0]?.clientX || 0) - startX;
    }, { passive: true });
    mobile.addEventListener('touchend', () => {
      const activePage = track.style.transform.includes('-50%') ? 1 : 0;
      if (Math.abs(distance) < 40) return;
      setPage(activePage + (distance < 0 ? 1 : -1));
    }, { passive: true });
  };

  const setupKryaaLuxeBanner = () => {
    const categorySection = document.querySelector('.women-category-section');
    if (!categorySection || document.getElementById('kryaa-luxe-banner')) return;

    const section = document.createElement('section');
    section.id = 'kryaa-luxe-banner';
    section.className = 'kryaa-luxe-section';
    section.setAttribute('aria-label', 'Kryaa Luxe collection');
    section.innerHTML = `
      <div class="kryaa-luxe-banner">
        <div class="kryaa-luxe-copy">
          <p class="kryaa-luxe-eyebrow">THE KRYAA EDIT</p>
          <h2>KRYAA LUXE</h2>
          <span class="kryaa-luxe-rule" aria-hidden="true"></span>
          <p class="kryaa-luxe-description">Elegance curated,<br>luxury redefined</p>
          <a class="kryaa-luxe-cta" href="collection/women/sarees.html">SHOP NOW</a>
        </div>
        <div class="kryaa-luxe-media">
          <a class="kryaa-luxe-image-link" href="collection/women/sarees.html" aria-label="Shop the Kryaa Luxe collection">
            <span class="kryaa-luxe-image-track">
              ${kryaaLuxeSlides.map((slide, index) => `
                <img class="kryaa-luxe-slide" src="${slide.image}" alt="${slide.alt}" width="900" height="1350" decoding="async" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} draggable="false">
              `).join('')}
            </span>
          </a>
          <div class="kryaa-luxe-dots" aria-label="Kryaa Luxe slides">
            ${kryaaLuxeSlides.map((_, index) => `<button type="button" class="kryaa-luxe-dot${index === 0 ? ' is-active' : ''}" aria-label="Show Kryaa Luxe image ${index + 1}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`).join('')}
          </div>
        </div>
      </div>
    `;

    categorySection.insertAdjacentElement('afterend', section);

    const imageTrack = section.querySelector('.kryaa-luxe-image-track');
    const imageLink = section.querySelector('.kryaa-luxe-image-link');
    const dots = Array.from(section.querySelectorAll('.kryaa-luxe-dot'));
    let currentSlide = 0;
    let timer;

    const setSlide = (index) => {
      currentSlide = (index + kryaaLuxeSlides.length) % kryaaLuxeSlides.length;

      imageTrack.style.transform = `translate3d(-${currentSlide * (100 / kryaaLuxeSlides.length)}%, 0, 0)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentSlide;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-current', active ? 'true' : 'false');
      });
    };

    const startRotation = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => setSlide(currentSlide + 1), 3000);
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setSlide(index);
        startRotation();
      });
    });

    section.addEventListener('mouseenter', () => window.clearInterval(timer));
    section.addEventListener('mouseleave', startRotation);
    section.addEventListener('focusin', () => window.clearInterval(timer));
    section.addEventListener('focusout', startRotation);

    let touchStartX = 0;
    let mouseStartX = 0;
    let suppressClick = false;
    imageLink.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });
    imageLink.addEventListener('touchend', (event) => {
      const distance = (event.changedTouches[0]?.clientX || 0) - touchStartX;
      if (Math.abs(distance) < 40) return;
      suppressClick = true;
      setSlide(currentSlide + (distance < 0 ? 1 : -1));
      startRotation();
    }, { passive: true });

    imageLink.addEventListener('mousedown', (event) => {
      mouseStartX = event.clientX;
    });
    imageLink.addEventListener('mouseup', (event) => {
      const distance = event.clientX - mouseStartX;
      if (Math.abs(distance) < 40) return;
      suppressClick = true;
      setSlide(currentSlide + (distance < 0 ? 1 : -1));
      startRotation();
    });
    imageLink.addEventListener('click', (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      suppressClick = false;
    });

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startRotation();
  };

  const setupCuratedTrendingLooks = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => {
        const label = item.textContent.replace(/\s+/g, ' ').trim();
        return label === 'In High Demand' || label === 'Curated Trending Looks';
      });
    if (!heading) return;

    if (heading.textContent.replace(/\s+/g, ' ').trim() === 'In High Demand') {
      heading.textContent = 'Curated Trending Looks';
    }

    let host = heading.closest('section') || heading.parentElement?.parentElement;
    for (let depth = 0; host && depth < 4 && !host.querySelector('.slick-slider'); depth += 1) {
      host = host.parentElement;
    }

    const originalSlider = host?.querySelector('.slick-slider');
    if (!host || !originalSlider || host.querySelector('.curated-trending-looks')) return;

    const carousel = document.createElement('div');
    carousel.className = 'curated-trending-looks';
    carousel.innerHTML = `
      <div class="curated-trending-looks__eyebrow">THE LOOKBOOK</div>
      <div class="curated-trending-looks__viewport" role="region" aria-label="Curated trending looks carousel" aria-roledescription="carousel">
        <div class="curated-trending-looks__track"></div>
      </div>
      <div class="curated-trending-looks__footer">
        <div class="curated-trending-looks__progress" aria-hidden="true"><span></span></div>
        <div class="curated-trending-looks__navigation">
          <button type="button" class="curated-trending-looks__arrow" data-direction="-1" aria-label="Previous look">&lsaquo;</button>
          <span class="curated-trending-looks__count" aria-live="polite">01 / 10</span>
          <button type="button" class="curated-trending-looks__arrow" data-direction="1" aria-label="Next look">&rsaquo;</button>
        </div>
      </div>
    `;

    const track = carousel.querySelector('.curated-trending-looks__track');
    curatedTrendingLooks.forEach((look, index) => {
      const slide = document.createElement('article');
      slide.className = 'curated-trending-looks__slide';
      slide.setAttribute('aria-roledescription', 'slide');
      slide.innerHTML = `
        <a class="curated-trending-looks__visual" href="${look.href}" tabindex="${index === 0 ? '0' : '-1'}" aria-label="Shop ${look.title}">
          <img src="${look.image}" alt="${look.title}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
          <span class="curated-trending-looks__image-label">LOOK ${String(index + 1).padStart(2, '0')}</span>
        </a>
        <div class="curated-trending-looks__details">
          <span class="curated-trending-looks__number">${String(index + 1).padStart(2, '0')} <i></i> ${String(curatedTrendingLooks.length).padStart(2, '0')}</span>
          <h3>${look.title}</h3>
          <p>${look.caption}</p>
          <a class="curated-trending-looks__shop" href="${look.href}">Shop the look <span aria-hidden="true">&rarr;</span></a>
        </div>
      `;
      track.appendChild(slide);
    });

    const count = carousel.querySelector('.curated-trending-looks__count');
    const progress = carousel.querySelector('.curated-trending-looks__progress span');
    let currentSlide = 0;
    const setSlide = (slideNumber) => {
      currentSlide = (slideNumber + curatedTrendingLooks.length) % curatedTrendingLooks.length;
      track.style.transform = `translate3d(-${currentSlide * 100}%, 0, 0)`;
      track.querySelectorAll('.curated-trending-looks__slide').forEach((slide, index) => {
        const active = index === currentSlide;
        slide.setAttribute('aria-hidden', String(!active));
        slide.querySelectorAll('a').forEach((link) => { link.tabIndex = active ? 0 : -1; });
      });
      count.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(curatedTrendingLooks.length).padStart(2, '0')}`;
      progress.style.transform = `scaleX(${(currentSlide + 1) / curatedTrendingLooks.length})`;
    };

    carousel.querySelectorAll('.curated-trending-looks__arrow').forEach((button) => {
      button.addEventListener('click', () => setSlide(currentSlide + Number(button.dataset.direction || 1)));
    });

    const viewport = carousel.querySelector('.curated-trending-looks__viewport');
    let touchStartX = 0;
    viewport.addEventListener('touchstart', (event) => {
      touchStartX = event.changedTouches[0]?.clientX || 0;
    }, { passive: true });
    viewport.addEventListener('touchend', (event) => {
      const distance = (event.changedTouches[0]?.clientX || 0) - touchStartX;
      if (Math.abs(distance) > 45) setSlide(currentSlide + (distance < 0 ? 1 : -1));
    }, { passive: true });
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') setSlide(currentSlide - 1);
      if (event.key === 'ArrowRight') setSlide(currentSlide + 1);
    });

    setSlide(0);
    originalSlider.insertAdjacentElement('afterend', carousel);
    originalSlider.classList.add('curated-trending-looks__original');
  };

  const cleanPageLinks = () => {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (/(^|\/)collection\/women\//i.test(href)) return;
      if (!unwantedPage.test(href) || /(^|\/)men\//i.test(href)) return;

      const item = link.closest('li') || link;
      item.remove();
    });
  };

  const setupKryaaLookbook = () => {
    const posts = [
      {
        name: 'Kavya Lakshmi',
        initials: 'KL',
        followers: '3,084 followers',
        imageFile: 'Ethnic1.avif',
        alt: 'Ethnic wear look by Kavya Lakshmi',
        title: 'Festive Glow | Ethnic Wear',
        description: 'Comfortable for festive evenings and family functions.',
        likes: 1248, comments: 48, timestamp: '2 HOURS AGO', categoryHref: '#'
      },
      {
        name: 'Meenakshi Sundaram',
        initials: 'MS',
        followers: '2,716 followers',
        imageFile: 'Kurta1.avif',
        alt: 'Kurta set look by Meenakshi Sundaram',
        title: 'Everyday Chic | Kurta Sets',
        description: 'Light, easy outfits for office and casual days.',
        likes: 986, comments: 31, timestamp: '5 HOURS AGO', categoryHref: '#'
      },
      {
        name: 'Thenmozhi Rajan',
        initials: 'TR',
        followers: '4,152 followers',
        imageFile: 'salwar1.avif',
        alt: 'Salwar suit look by Thenmozhi Rajan',
        title: 'Evening Elegance | Salwar Suits',
        description: 'Statement sets for receptions and festive nights.',
        likes: 2031, comments: 72, timestamp: '1 DAY AGO', categoryHref: '#'
      },
      {
        name: 'Aarthi Karthik',
        initials: 'AK',
        followers: '1,978 followers',
        imageFile: 'Saree_Img1.avif',
        alt: 'Saree look by Aarthi Karthik',
        title: 'Sparkle in Style | Saree',
        description: 'Rich drapes for weddings, cocktails and evening receptions.',
        likes: 1574, comments: 56, timestamp: '2 DAYS AGO', categoryHref: '#'
      },
      {
        name: 'Priya Dharshini',
        initials: 'PD',
        followers: '3,645 followers',
        imageFile: 'top1.avif',
        alt: 'Casual top look by Priya Dharshini',
        title: 'Chic Tops | Casual Wear',
        description: 'Fresh, easy tops for brunch, college and city days.',
        likes: 1812, comments: 64, timestamp: '3 DAYS AGO', categoryHref: '#'
      }
    ];
    const imageAspect = 591 / 625;
    const desktopScales = { '-2': 0.54, '-1': 0.76, 0: 1, 1: 0.76, 2: 0.54 };
    const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[character]);
    const arrowIcon = (direction) => direction === 'prev'
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"></path></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"></path></svg>';
    const heartIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.7 4.7 0 0 1 12 6.5a4.7 4.7 0 0 1 8.8 2.3Z"></path></svg>';
    const shareIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.7 10.6 6.6-4.2m-6.6 7 6.6 4.1"></path></svg>';
    const commentIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5a7.5 7.5 0 1 1 17-3Z"></path></svg>';
    const bookmarkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h12v17l-6-4-6 4v-17Z"></path></svg>';
    const verifiedIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.2 9.8 2l1.9-.1.8 1.7 1.6 1-.3 1.9.6 1.8-1.3 1.4-.5 1.9-1.9.4-1.5 1.2-1.7-.8-1.9.1-.8-1.7-1.6-1 .3-1.9-.6-1.8 1.3-1.4.5-1.9 1.9-.4L8 1.2Z"/><path d="m5.3 8 1.7 1.7 3.7-3.8" fill="none" stroke="#fff" stroke-width="1.3"/></svg>';
    const moreIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>';
    document.querySelectorAll('.kr-lookbook').forEach((section) => {
      if (section.dataset.krLookbookReady === 'true') return;
      const slider = section.querySelector('.kr-lookbook__slider');
      const viewport = section.querySelector('.kr-lookbook__viewport');
      const track = section.querySelector('.kr-lookbook__track');
      const dots = section.querySelector('.kr-lookbook__dots');
      const toast = section.querySelector('.kr-lookbook__toast');
      if (!slider || !viewport || !track || !dots || !toast) return;

      const desktopQuery = window.matchMedia('(min-width: 768px)');
      let desktopMode = null;
      let activeIndex = 0;
      let toastTimer = 0;
      let pointerStart = null;
      let pointerDragged = false;
      let suppressClickUntil = 0;
      let resizeObserver = null;

      const createInstagramCard = (post, index, desktop) => {
        const loading = index === 0 ? '' : ' loading="lazy"';
        const name = escapeHtml(post.name);
        const initials = escapeHtml(post.initials);
        const followers = escapeHtml(post.followers);
        const title = escapeHtml(post.title);
        const description = escapeHtml(post.description);
        const category = escapeHtml(post.categoryHref);
        const cardClass = desktop ? 'kr-lookbook__desktop-card' : 'kr-lookbook__post';
        const indexAttribute = desktop ? 'data-desktop-index' : 'data-post-index';
        const image = desktop
          ? '<a class="kr-lookbook__desktop-image-link" data-desktop-card-link href="#" aria-label="Open ' + title + '"><img data-desktop-image src="../images/Insta_Img/' + escapeHtml(post.imageFile) + '" alt="' + escapeHtml(post.alt) + '"' + loading + '></a>'
          : '<img class="kr-lookbook__mobile-image" data-lookbook-image src="../images/Insta_Img/' + escapeHtml(post.imageFile) + '" alt="' + escapeHtml(post.alt) + '"' + loading + '>';
        const mobileControls = desktop ? '' : '<button type="button" class="kr-lookbook__arrow kr-lookbook__arrow--prev" data-post-action="prev" aria-label="Previous post">' + arrowIcon('prev') + '</button>' +
          '<button type="button" class="kr-lookbook__arrow kr-lookbook__arrow--next" data-post-action="next" aria-label="Next post">' + arrowIcon('next') + '</button>';
        return '<article class="' + cardClass + ' kr-lookbook__ig-card" ' + indexAttribute + '="' + index + '" role="group" aria-roledescription="slide" aria-label="' +
          (index + 1) + ' of ' + posts.length + ': ' + name + '"><header class="kr-lookbook__ig-header"><span class="kr-lookbook__ig-avatar"><span class="kr-lookbook__initials" aria-hidden="true">' + initials + '</span></span>' +
          '<span class="kr-lookbook__ig-identity"><span class="kr-lookbook__ig-name">' + name + verifiedIcon + '</span><span class="kr-lookbook__ig-followers">' + followers + '</span></span>' +
          '<a class="kr-lookbook__ig-follow" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Follow">Follow</a><a class="kr-lookbook__ig-more" href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="More options">' + moreIcon + '</a></header>' +
          '<div class="kr-lookbook__ig-image">' + image + mobileControls + '</div>' +
          '<div class="kr-lookbook__ig-actions"><span class="kr-lookbook__ig-action-group"><button type="button" class="kr-lookbook__ig-icon kr-lookbook__ig-like" data-like aria-label="Like" aria-pressed="false">' + heartIcon + '</button><a class="kr-lookbook__ig-icon" data-comment href="' + category + '" aria-label="Comment">' + commentIcon + '</a><button type="button" class="kr-lookbook__ig-icon" data-share aria-label="Share">' + shareIcon + '</button></span><button type="button" class="kr-lookbook__ig-icon kr-lookbook__ig-save" data-save aria-label="Save" aria-pressed="false">' + bookmarkIcon + '</button></div>' +
          '<div class="kr-lookbook__ig-details"><p class="kr-lookbook__ig-likes" data-like-count>' + Number(post.likes).toLocaleString('en-US') + ' likes</p><p class="kr-lookbook__ig-caption"><strong>' + name + '</strong> ' + title + ' ' + description + '</p><a class="kr-lookbook__ig-comments" data-comment href="' + category + '">View all ' + post.comments + ' comments</a><p class="kr-lookbook__ig-time">' + escapeHtml(post.timestamp) + '</p></div></article>';
      };

      const createMobileSlide = (post, index) => createInstagramCard(post, index, false);
      const createDesktopSlide = (post, index) => createInstagramCard(post, index, true);

      const renderDots = () => {
        dots.innerHTML = posts.map((post, index) =>
        '<button type="button" class="kr-lookbook__dot" data-dot-index="' + index +
        '" aria-label="Go to post ' + (index + 1) + '" aria-current="' + (index === 0 ? 'true' : 'false') + '"></button>'
        ).join('');
      };

      const layoutDesktop = (direction = 0, previousIndex = activeIndex) => {
        if (!desktopMode) return;
        const cards = Array.from(track.querySelectorAll('.kr-lookbook__desktop-card'));
        if (!cards.length) return;
        const rowWidth = track.clientWidth;
        const availableForCards = rowWidth;
        const gap = 14;
        const scaleTotal = 0.54 * 2 + 0.76 * 2 + 1;
        const totalGaps = gap * 4;
        const centerImageHeight = Math.min(430, Math.max(120, (availableForCards - totalGaps) / (imageAspect * scaleTotal)));
        const cardChromeHeight = 187;
        const centerHeight = centerImageHeight + cardChromeHeight;
        slider.style.setProperty('--kr-lookbook-center-height', centerHeight + 'px');
        const totalWidth = imageAspect * centerImageHeight * scaleTotal + totalGaps;
        let cursor = (rowWidth - totalWidth) / 2;
        const orderedPositions = [];
        for (let relative = -2; relative <= 2; relative += 1) {
          const index = (activeIndex + relative + posts.length) % posts.length;
          orderedPositions.push({ relative, index, scale: desktopScales[relative] });
        }

        if (direction === 1 || direction === -1) {
          const outgoingRelative = direction === 1 ? -2 : 2;
          const outgoingIndex = (previousIndex + outgoingRelative + posts.length) % posts.length;
          const outgoing = cards.find((card) => Number(card.dataset.desktopIndex) === outgoingIndex);
          if (outgoing) outgoing.classList.add('kr-lookbook__desktop-card--teleport');
          window.requestAnimationFrame(() => {
            if (outgoing) outgoing.classList.remove('kr-lookbook__desktop-card--teleport');
          });
        }

        orderedPositions.forEach(({ relative, index, scale }) => {
          const card = cards.find((item) => Number(item.dataset.desktopIndex) === index);
          if (!card) return;
          const height = centerHeight * scale;
          const width = centerImageHeight * imageAspect * scale;
          card.style.left = (cursor + width / 2) + 'px';
          card.style.top = ((centerHeight - height) / 2) + 'px';
          card.style.width = width + 'px';
          card.style.height = height + 'px';
          card.style.opacity = relative === 0 ? '1' : '0.92';
          card.style.zIndex = String(3 - Math.abs(relative));
          card.dataset.position = String(relative);
          card.style.fontSize = (14 * scale) + 'px';
          card.setAttribute('aria-hidden', 'false');
          const image = card.querySelector('[data-desktop-image]');
          if (image) {
            if (Math.abs(relative) <= 1) image.loading = 'eager';
            else image.loading = 'lazy';
          }
          cursor += width + gap;
        });

        const centerCard = cards.find((card) => Number(card.dataset.desktopIndex) === activeIndex);
        if (centerCard) {
          const image = centerCard.querySelector('.kr-lookbook__ig-image');
          const previousArrow = slider.querySelector('.kr-lookbook__desktop-arrow--prev');
          const nextArrow = slider.querySelector('.kr-lookbook__desktop-arrow--next');
          if (image && previousArrow) image.appendChild(previousArrow);
          if (image && nextArrow) image.appendChild(nextArrow);
        }

      };

      const setActive = (requestedIndex, direction = 0) => {
        const previousIndex = activeIndex;
        activeIndex = (requestedIndex + posts.length) % posts.length;
        if (desktopMode) {
          layoutDesktop(direction, previousIndex);
        } else {
          track.style.transform = 'translate3d(-' + (activeIndex * 100 / posts.length) + '%, 0, 0)';
          Array.from(track.children).forEach((slide, index) => {
            const isActive = index === activeIndex;
            slide.setAttribute('aria-hidden', String(!isActive));
            if ('inert' in slide) slide.inert = !isActive;
          });
        }
        dots.querySelectorAll('.kr-lookbook__dot').forEach((dot, index) => {
          dot.setAttribute('aria-current', String(index === activeIndex));
        });
      };

      const showImageFallbacks = () => {
        section.querySelectorAll('[data-lookbook-image], [data-desktop-image]').forEach((image) => {
          image.addEventListener('error', () => {
            image.hidden = true;
            const frame = image.closest('.kr-lookbook__ig-image');
            if (frame) frame.classList.add('kr-lookbook__ig-image--missing');
          }, { once: true });
        });
      };

      const renderMode = () => {
        const nextDesktopMode = desktopQuery.matches;
        if (desktopMode === nextDesktopMode) {
          if (desktopMode) layoutDesktop();
          return;
        }
        desktopMode = nextDesktopMode;
        slider.querySelectorAll('.kr-lookbook__desktop-arrow, .kr-lookbook__desktop-caption').forEach((element) => element.remove());
        if (desktopMode) {
          slider.classList.add('kr-lookbook__slider--desktop');
          viewport.classList.add('kr-lookbook__viewport--desktop');
          track.classList.add('kr-lookbook__track--desktop');
          dots.hidden = true;
          track.style.transform = 'none';
          track.innerHTML = posts.map(createDesktopSlide).join('');
          slider.insertAdjacentHTML('afterbegin', '<button type="button" class="kr-lookbook__desktop-arrow kr-lookbook__desktop-arrow--prev" data-desktop-nav="prev" aria-label="Previous look">' + arrowIcon('prev') + '</button>' +
            '<button type="button" class="kr-lookbook__desktop-arrow kr-lookbook__desktop-arrow--next" data-desktop-nav="next" aria-label="Next look">' + arrowIcon('next') + '</button>');
          showImageFallbacks();
          layoutDesktop();
        } else {
          slider.classList.remove('kr-lookbook__slider--desktop');
          viewport.classList.remove('kr-lookbook__viewport--desktop');
          track.classList.remove('kr-lookbook__track--desktop');
          track.style.cssText = '';
          dots.hidden = false;
          track.innerHTML = posts.map(createMobileSlide).join('');
          renderDots();
          showImageFallbacks();
          setActive(activeIndex);
        }
      };
      const showToast = (message) => {
        window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.dataset.visible = 'true';
        toastTimer = window.setTimeout(() => {
          delete toast.dataset.visible;
        }, 1500);
      };
      const copyFallback = (value) => {
        const input = document.createElement('textarea');
        input.value = value;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        let copied = false;
        try { copied = document.execCommand('copy'); } catch (_) {}
        input.remove();
        return copied;
      };

      section.addEventListener('click', async (event) => {
        const navButton = event.target.closest('[data-desktop-nav], [data-post-action]');
        if (navButton) {
          const isNext = (navButton.dataset.desktopNav || navButton.dataset.postAction) === 'next';
          setActive(activeIndex + (isNext ? 1 : -1), isNext ? 1 : -1);
          return;
        }
        const dot = event.target.closest('[data-dot-index]');
        if (dot) {
          setActive(Number(dot.dataset.dotIndex));
          return;
        }
        const desktopLink = event.target.closest('[data-desktop-card-link]');
        if (desktopMode && desktopLink) {
          event.preventDefault();
          const index = Number(desktopLink.closest('[data-desktop-index]').dataset.desktopIndex);
          if (index !== activeIndex) {
            const delta = (index - activeIndex + posts.length) % posts.length;
            setActive(index, delta === 1 ? 1 : delta === posts.length - 1 ? -1 : 0);
          }
          return;
        }
        const likeButton = event.target.closest('[data-like]');
        if (likeButton) {
          const isLiked = likeButton.getAttribute('aria-pressed') !== 'true';
          likeButton.setAttribute('aria-pressed', String(isLiked));
          likeButton.classList.toggle('kr-lookbook__like--active', isLiked);
          const card = likeButton.closest('.kr-lookbook__ig-card');
          if (card) {
            const cardIndex = Number(card.dataset.desktopIndex ?? card.dataset.postIndex);
            const post = posts[cardIndex];
            const count = card.querySelector('[data-like-count]');
            const updatedLikes = post.likes + (isLiked ? 1 : -1);
            count.textContent = updatedLikes.toLocaleString('en-US') + ' likes';
          }
          return;
        }
        const saveButton = event.target.closest('[data-save]');
        if (saveButton) {
          const saved = saveButton.getAttribute('aria-pressed') !== 'true';
          saveButton.setAttribute('aria-pressed', String(saved));
          saveButton.classList.toggle('kr-lookbook__save--active', saved);
          return;
        }
        const shareButton = event.target.closest('[data-share]');
        if (!shareButton) return;
        const shareCard = shareButton.closest('[data-desktop-index], [data-post-index]');
        const shareIndex = shareCard ? Number(shareCard.dataset.desktopIndex ?? shareCard.dataset.postIndex) : activeIndex;
        const shareData = { title: posts[shareIndex].title, url: window.location.href };
        if (navigator.share) {
          try {
            await navigator.share(shareData);
            return;
          } catch (error) {
            if (error && error.name === 'AbortError') return;
          }
        }
        let copied = false;
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(shareData.url);
            copied = true;
          }
        } catch (_) {}
        if (!copied) copied = copyFallback(shareData.url);
        if (copied) showToast('Link copied');
      });

      slider.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
          const direction = event.key === 'ArrowRight' ? 1 : -1;
          setActive(activeIndex + direction, direction);
        }
      });
      viewport.addEventListener('pointerdown', (event) => {
        if (desktopMode) {
          if (event.target.closest('[data-desktop-nav], .kr-lookbook__ig-follow, .kr-lookbook__ig-more, [data-comment], [data-share], [data-like], [data-save]') || (event.pointerType === 'mouse' && event.button !== 0)) return;
          pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
          pointerDragged = false;
          if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
          return;
        }
        if (event.target.closest('button, a') || (event.pointerType === 'mouse' && event.button !== 0)) return;
        pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
        pointerDragged = false;
        if (viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
      });
      viewport.addEventListener('pointermove', (event) => {
        if (!pointerStart || pointerStart.id !== event.pointerId) return;
        if (Math.abs(event.clientX - pointerStart.x) > 8 && Math.abs(event.clientX - pointerStart.x) > Math.abs(event.clientY - pointerStart.y)) {
          pointerDragged = true;
          event.preventDefault();
        }
      }, { passive: false });
      const finishPointer = (event) => {
        if (!pointerStart || pointerStart.id !== event.pointerId) return;
        const deltaX = event.clientX - pointerStart.x;
        const deltaY = event.clientY - pointerStart.y;
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          const direction = deltaX < 0 ? 1 : -1;
          setActive(activeIndex + direction, desktopMode ? direction : 0);
        }
        if (pointerDragged) suppressClickUntil = performance.now() + 250;
        pointerStart = null;
        pointerDragged = false;
      };
      viewport.addEventListener('pointerup', finishPointer);
      viewport.addEventListener('pointercancel', finishPointer);
      viewport.addEventListener('click', (event) => {
        if (performance.now() >= suppressClickUntil) return;
        event.preventDefault();
        event.stopPropagation();
      }, true);

      renderDots();
      renderMode();
      const handleModeChange = () => renderMode();
      if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleModeChange);
      else desktopQuery.addListener(handleModeChange);
      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(() => { if (desktopMode) layoutDesktop(); });
        resizeObserver.observe(slider);
      } else {
        window.addEventListener('resize', () => { if (desktopMode) layoutDesktop(); });
      }
      section.dataset.krLookbookReady = 'true';
    });
  };

  const setupKryaaReviews = () => {
    document.querySelectorAll('.kr-reviews').forEach((section) => {
      if (section.dataset.krReviewsReady === 'true') return;

      const viewport = section.querySelector('.kr-reviews__viewport');
      const track = section.querySelector('.kr-reviews__track');
      if (!viewport || !track) return;

      const originals = Array.from(track.querySelectorAll('.kr-reviews__card'));
      if (!originals.length) return;

      const desktopQuery = window.matchMedia('(min-width: 768px)');
      const cloneSets = [];
      const appendCloneSet = () => {
        const cloneGroup = document.createDocumentFragment();
        originals.forEach((card) => {
          const clone = card.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          clone.querySelectorAll('a, button, input, select, textarea, [tabindex]').forEach((item) => {
            item.setAttribute('tabindex', '-1');
          });
          clone.setAttribute('tabindex', '-1');
          cloneGroup.appendChild(clone);
        });
        const firstClone = cloneGroup.firstElementChild;
        track.appendChild(cloneGroup);
        cloneSets.push(firstClone);
      };
      appendCloneSet();

      let setWidth = 0;
      let position = 0;
      let previousScrollLeft = 0;
      let animationFrame = 0;
      let lastFrameTime = 0;
      let resumeAt = 0;
      let resumeTimer = 0;
      let pointerDown = false;
      let dragged = false;
      let suppressClick = false;
      let pointerStartX = 0;
      let pointerStartPosition = 0;
      let keyboardFocus = false;
      let keyboardMode = false;
      let inViewport = (() => {
        const bounds = section.getBoundingClientRect();
        return bounds.bottom > 0 && bounds.top < window.innerHeight;
      })();
      let desktopMode = desktopQuery.matches;
      let marqueeReady = !desktopMode;

      const measure = () => {
        track.style.transform = 'none';
        const first = originals[0];
        const firstClone = track.children[originals.length];
        if (!first || !firstClone) return;
        const measuredWidth = firstClone.getBoundingClientRect().left - first.getBoundingClientRect().left;
        if (measuredWidth <= 0) return;
        const oldWidth = setWidth;
        setWidth = measuredWidth;
        if (desktopMode) {
          while (track.scrollWidth < viewport.clientWidth * 2) appendCloneSet();
          const maxOffset = setWidth;
          position = maxOffset ? ((position % maxOffset) + maxOffset) % maxOffset : 0;
          track.style.transform = `translate3d(-${position}px, 0, 0)`;
        } else {
          while (cloneSets.length > 1) {
            const extraSet = cloneSets.pop();
            let node = extraSet;
            for (let index = 0; index < originals.length && node; index += 1) {
              const next = node.nextElementSibling;
              node.remove();
              node = next;
            }
          }
          if (oldWidth === 0) {
            position = setWidth;
            viewport.scrollLeft = position;
          } else if (Math.abs(oldWidth - setWidth) > 0.5) {
            position = setWidth + ((position - oldWidth) % setWidth + setWidth) % setWidth;
            viewport.scrollLeft = position;
          }
          previousScrollLeft = viewport.scrollLeft;
        }
      };

      const normalize = (value) => {
        if (!setWidth) return Math.max(0, value);
        if (desktopMode) return ((value % setWidth) + setWidth) % setWidth;
        while (value < 0) value += setWidth;
        while (value >= setWidth * 2) value -= setWidth;
        return value;
      };

      const setPosition = (value) => {
        position = normalize(value);
        if (desktopMode) {
          track.style.transform = `translate3d(-${position}px, 0, 0)`;
          return;
        }
        viewport.scrollLeft = position;
        position = viewport.scrollLeft;
        previousScrollLeft = viewport.scrollLeft;
      };

      const canAnimate = () => inViewport && !document.hidden && marqueeReady &&
        !pointerDown && !keyboardFocus && performance.now() >= resumeAt;

      const stopAnimation = () => {
        if (!animationFrame) return;
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        lastFrameTime = 0;
      };

      const animate = (time) => {
        animationFrame = 0;
        if (!canAnimate()) {
          lastFrameTime = 0;
          return;
        }
        if (lastFrameTime) {
          const speed = desktopMode ? 40 : 0.035;
          setPosition(position + (desktopMode ? (time - lastFrameTime) / 1000 * speed : Math.min(time - lastFrameTime, 50) * speed));
        }
        lastFrameTime = time;
        animationFrame = requestAnimationFrame(animate);
      };

      const updateAnimation = () => {
        if (canAnimate()) {
          if (!animationFrame) animationFrame = requestAnimationFrame(animate);
        } else {
          stopAnimation();
        }
      };

      const resumeAfterInteraction = () => {
        window.clearTimeout(resumeTimer);
        resumeAt = performance.now() + 1500;
        resumeTimer = window.setTimeout(updateAnimation, 1510);
        updateAnimation();
      };

      const pauseForInteraction = () => {
        window.clearTimeout(resumeTimer);
        resumeAt = Number.POSITIVE_INFINITY;
        updateAnimation();
      };

      const setMode = () => {
        desktopMode = desktopQuery.matches;
        marqueeReady = !desktopMode;
        if (desktopMode) {
          measure();
          const pageLoaded = document.readyState === 'complete'
            ? Promise.resolve()
            : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
          const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
          Promise.all([pageLoaded, fontsReady]).then(() => {
            if (!desktopMode) return;
            measure();
            marqueeReady = true;
            updateAnimation();
          });
        } else {
          track.style.transform = '';
          position = viewport.scrollLeft || setWidth;
          measure();
          viewport.scrollLeft = position;
          previousScrollLeft = viewport.scrollLeft;
          marqueeReady = true;
        }
        updateAnimation();
      };

      setMode();

      viewport.addEventListener('scroll', () => {
        if (desktopMode) return;
        const current = viewport.scrollLeft;
        if (setWidth && !pointerDown && current <= 0 && current < previousScrollLeft) {
          setPosition(setWidth + current);
          return;
        }
        if (setWidth && !pointerDown && current >= viewport.scrollWidth - viewport.clientWidth - 1 && current > previousScrollLeft) {
          setPosition(current - setWidth);
          return;
        }
        position = current;
        previousScrollLeft = current;
      }, { passive: true });

      viewport.addEventListener('wheel', (event) => {
        const delta = event.shiftKey && Math.abs(event.deltaX) < 0.5 ? event.deltaY : event.deltaX;
        if (Math.abs(delta) < 0.5) return;
        event.preventDefault();
        setPosition(position + delta);
        resumeAfterInteraction();
      }, { passive: false });

      viewport.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        pointerDown = true;
        pointerStartX = event.clientX;
        pointerStartPosition = position;
        dragged = false;
        keyboardMode = false;
        keyboardFocus = false;
        pauseForInteraction();
        if (desktopMode && viewport.setPointerCapture) viewport.setPointerCapture(event.pointerId);
        viewport.classList.toggle('kr-reviews__dragging', desktopMode);
      });

      viewport.addEventListener('pointermove', (event) => {
        if (!pointerDown) return;
        if (Math.abs(event.clientX - pointerStartX) > 4) dragged = true;
        if (!dragged) return;
        event.preventDefault();
        setPosition(pointerStartPosition - (event.clientX - pointerStartX));
      });

      const endPointerInteraction = () => {
        if (!pointerDown) return;
        pointerDown = false;
        viewport.classList.remove('kr-reviews__dragging');
        if (dragged) {
          suppressClick = true;
          window.setTimeout(() => { suppressClick = false; }, 200);
        }
        dragged = false;
        resumeAfterInteraction();
      };

      viewport.addEventListener('pointerup', endPointerInteraction);
      viewport.addEventListener('pointercancel', endPointerInteraction);
      window.addEventListener('pointerup', endPointerInteraction);
      window.addEventListener('pointercancel', endPointerInteraction);
      viewport.addEventListener('click', (event) => {
        if (!suppressClick) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }, true);

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') keyboardMode = true;
      });
      section.addEventListener('pointerdown', () => {
        keyboardMode = false;
        keyboardFocus = false;
        updateAnimation();
      });
      section.addEventListener('keydown', (event) => {
        keyboardMode = true;
        if (event.target.closest('.kr-reviews__viewport') && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
          event.preventDefault();
          setPosition(position + (event.key === 'ArrowRight' ? 80 : -80));
          resumeAfterInteraction();
        }
      });
      section.addEventListener('focusin', () => {
        if (!keyboardMode) return;
        keyboardFocus = true;
        pauseForInteraction();
      });
      section.addEventListener('focusout', (event) => {
        if (!section.contains(event.relatedTarget)) {
          keyboardFocus = false;
          resumeAfterInteraction();
        }
      });

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          inViewport = entries.some((entry) => entry.isIntersecting);
          updateAnimation();
        });
        section.__krReviewsIntersectionObserver = observer;
        observer.observe(section);
      } else {
        inViewport = true;
      }

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          updateAnimation();
          return;
        }
        pointerDown = false;
        viewport.classList.remove('kr-reviews__dragging');
        resumeAfterInteraction();
      });
      window.addEventListener('blur', () => {
        pointerDown = false;
        viewport.classList.remove('kr-reviews__dragging');
        keyboardFocus = false;
        resumeAfterInteraction();
      });
      window.addEventListener('focus', () => {
        updateAnimation();
      });
      if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', setMode);
      else desktopQuery.addListener(setMode);
      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(() => {
          measure();
          updateAnimation();
        });
        resizeObserver.observe(viewport);
      }
      window.addEventListener('resize', () => {
        measure();
        updateAnimation();
      });
      section.dataset.krReviewsReady = 'true';
      updateAnimation();
    });
  };

  const cleanEditorialSection = () => {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]').forEach((heading) => {
      if (heading.textContent.replace(/\s+/g, ' ').trim() !== 'Kryaa Editorials') return;

      const section = heading.closest('section') || heading.parentElement?.parentElement;
      if (section) section.remove();
    });
  };

  const cleanMenPage = () => {
    setupHeroCarousel();
    injectNewArrivalsMobileStyles();
    cleanHeader();
    syncHeaderToCategories();
    cleanImageSearch();
    renameNewArrivalsSection();
    replaceFirstNewArrivalImage();
    setupNewArrivalsMobileCarousel();
    setupNewArrivalsDesktopCarousel();
    setupShopByCategorySection();
    setupKryaaLuxeBanner();
    setupShopByOccasionSection();
    setupCuratedTrendingLooks();
    cleanPageLinks();
    cleanEditorialSection();
  };

  cleanNextData();
  cleanMenPage();

  const initializeKryaaSections = () => window.setTimeout(() => {
    setupKryaaReviews();
    setupKryaaLookbook();
  }, 0);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeKryaaSections, { once: true });
  } else {
    initializeKryaaSections();
  }

  const observer = new MutationObserver(cleanMenPage);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
