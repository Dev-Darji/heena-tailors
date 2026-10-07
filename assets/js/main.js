/**
 * Heena Ladies Tailor - Main Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNavDrawer = document.querySelector('.mobile-nav-drawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on navigation link click
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. WhatsApp & Phone Link Auto-Configuration from SITE_CONFIG
  if (window.SITE_CONFIG) {
    const config = window.SITE_CONFIG;

    // Helper to build WhatsApp URL
    const buildWhatsAppUrl = (customMsg) => {
      const msg = encodeURIComponent(customMsg || config.defaultWhatsAppMessage);
      return `https://wa.me/${config.whatsappRaw}?text=${msg}`;
    };

    // Update WhatsApp links with specific data-msg or fallback
    document.querySelectorAll('.js-whatsapp-link').forEach(link => {
      const msgType = link.getAttribute('data-msg-type');
      let msg = config.defaultWhatsAppMessage;
      if (msgType === 'design') msg = config.designWhatsAppMessage;
      if (msgType === 'blouse') msg = config.blouseWhatsAppMessage;
      if (link.getAttribute('data-custom-msg')) {
        msg = link.getAttribute('data-custom-msg');
      }
      link.href = buildWhatsAppUrl(msg);
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    // Update Phone links
    document.querySelectorAll('.js-phone-link').forEach(link => {
      link.href = `tel:${config.phoneRaw}`;
    });

    // Update Map links
    document.querySelectorAll('.js-map-link').forEach(link => {
      link.href = config.googleMapsUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    // Update Instagram links
    document.querySelectorAll('.js-instagram-link').forEach(link => {
      link.href = config.instagram;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });

    // Replace static text placeholders if elements have specific class
    document.querySelectorAll('.js-config-phone').forEach(el => el.textContent = config.phone);
    document.querySelectorAll('.js-config-whatsapp').forEach(el => el.textContent = config.whatsapp);
    document.querySelectorAll('.js-config-address').forEach(el => el.textContent = config.address);
    document.querySelectorAll('.js-config-timings').forEach(el => el.textContent = config.timings);
  }

  // 3. Gallery Filtering
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-grid .gallery-card');

  if (filterBtns.length > 0 && galleryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        galleryCards.forEach(card => {
          const cardCategories = card.getAttribute('data-category') || '';
          if (category === 'all' || cardCategories.includes(category)) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Lightbox Modal Functionality
  const lightboxModal = document.getElementById('lightboxModal');
  if (lightboxModal) {
    const lightboxImg = lightboxModal.querySelector('.lightbox-img-wrap img');
    const lightboxTitle = lightboxModal.querySelector('.lightbox-title');
    const lightboxSubtext = lightboxModal.querySelector('.lightbox-subtext');
    const lightboxWhatsAppBtn = lightboxModal.querySelector('.js-lightbox-whatsapp');
    const closeBtn = lightboxModal.querySelector('.lightbox-close-btn');

    const openLightbox = (imgSrc, title, category) => {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = title;
      lightboxTitle.textContent = title;
      lightboxSubtext.textContent = `Category: ${category}`;

      if (lightboxWhatsAppBtn && window.SITE_CONFIG) {
        const msg = `Hi, I saw "${title}" on your website gallery and would like to inquire about custom stitching for this style.`;
        lightboxWhatsAppBtn.href = `https://wa.me/${window.SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(msg)}`;
      }

      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Attach click to gallery cards and showcase items
    document.querySelectorAll('[data-lightbox]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const img = item.querySelector('img');
        const title = item.getAttribute('data-title') || img.alt || 'Heena Ladies Tailor Design';
        const category = item.getAttribute('data-tag') || 'Custom Work';
        if (img) {
          openLightbox(img.src, title, category);
        }
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 5. Quick WhatsApp Message Composer (on About & Contact page)
  const quickForm = document.getElementById('quickInquireForm');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const outfitSelect = document.getElementById('outfitType');
      const noteInput = document.getElementById('customerNote');
      const outfit = outfitSelect ? outfitSelect.value : 'women wear stitching';
      const note = noteInput ? noteInput.value.trim() : '';

      let text = `Hi, I want to inquire about custom stitching for: ${outfit}.`;
      if (note) {
        text += ` Note: ${note}`;
      }

      const whatsappNumber = (window.SITE_CONFIG && window.SITE_CONFIG.whatsappRaw) ? window.SITE_CONFIG.whatsappRaw : '919876543210';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
});
