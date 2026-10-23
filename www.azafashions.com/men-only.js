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

  const curatedTrendingLooks = [
    { title: 'Black Kurta Set', caption: 'A timeless statement in deep black, made for evenings that call for understated impact.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068555339Black%20Kurta%20Set.jpg', href: 'collection/men/kurta-sets' },
    { title: 'Gold Bandhgala Set', caption: 'A refined bandhgala brings a polished finish to celebrations after sundown.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068439819Gold%20Bandhgala%20Set.jpg', href: 'collection/men/bandhgalas' },
    { title: 'Ivory Jacket Kurta Set', caption: 'Soft ivory layers create an easy statement for the season’s special occasions.', image: '../static3.azafashions.com/tr_w-450/uploads/instagram_style/1790068293238Ivory%20Jacket%20Kurta%20Set.jpg', href: 'collection/men/nehru-jacket-and-sets' },
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
        if (heading === 'In High Demand') {
          section.sectionHeadingText = 'Curated Trending Looks';
          section.sectionDescription = 'A considered edit of the looks trending now.';
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

  const cleanImageSearch = () => {
    document.querySelectorAll('#imageSearchIO_deskNav').forEach((input) => {
      const section = input.closest('section');
      (section || input.closest('label') || input).remove();
    });
  };

  const setupHeroCarousel = () => {
    const hero = Array.from(document.querySelectorAll('.slick-slider'))
      .find((slider) => slider.querySelector('img[src*="banner-desktop.jpg"]'));
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
    const imagePath = '../images/Inclusive%20Comfort%20Fashion%20Collection%20(1).png';
    if (image) {
      image.src = imagePath;
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

  const setupShopByOccasionSection = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => item.textContent.replace(/\s+/g, ' ').trim() === 'Shop By Occasion');
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

  const setupCuratedTrendingLooks = () => {
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, [role="heading"]'))
      .find((item) => item.textContent.replace(/\s+/g, ' ').trim() === 'In High Demand' || item.textContent.replace(/\s+/g, ' ').trim() === 'Curated Trending Looks');
    if (!heading) return;

    const label = heading.textContent.replace(/\s+/g, ' ').trim();
    if (label === 'In High Demand') heading.textContent = 'Curated Trending Looks';

    let host = heading.closest('section') || heading.parentElement?.parentElement;
    for (let depth = 0; host && depth < 4 && !host.querySelector('.slick-slider'); depth += 1) {
      host = host.parentElement;
    }
    const originalSlider = host?.querySelector('.slick-slider');
    if (!host || !originalSlider) return;

    let carousel = host.querySelector('.curated-trending-looks');
    if (!carousel) {
      carousel = document.createElement('div');
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
      const arrows = Array.from(carousel.querySelectorAll('.curated-trending-looks__arrow'));
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
        button.addEventListener('click', () => {
          const direction = Number(button.dataset.direction || 1);
          setSlide(currentSlide + direction);
        });
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
    }
  };

  const cleanPageLinks = () => {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (!unwantedPage.test(href) || /(^|\/)men\//i.test(href)) return;

      const item = link.closest('li') || link;
      item.remove();
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
    cleanImageSearch();
    renameNewArrivalsSection();
    replaceFirstNewArrivalImage();
    setupNewArrivalsMobileCarousel();
    setupShopByOccasionSection();
    setupCuratedTrendingLooks();
    cleanPageLinks();
    cleanEditorialSection();
  };

  cleanNextData();
  cleanMenPage();

  const observer = new MutationObserver(cleanMenPage);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
