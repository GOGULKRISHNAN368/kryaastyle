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

  const cleanImageSearch = () => {
    document.querySelectorAll('#imageSearchIO_deskNav').forEach((input) => {
      const section = input.closest('section');
      (section || input.closest('label') || input).remove();
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

  const cleanPageLinks = () => {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (/(^|\/)collection\/women\//i.test(href)) return;
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
    injectNewArrivalsMobileStyles();
    cleanHeader();
    cleanImageSearch();
    renameNewArrivalsSection();
    replaceFirstNewArrivalImage();
    setupNewArrivalsMobileCarousel();
    setupShopByOccasionSection();
    cleanPageLinks();
    cleanEditorialSection();
  };

  cleanNextData();
  cleanMenPage();

  const observer = new MutationObserver(cleanMenPage);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
