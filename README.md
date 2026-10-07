# Heena Ladies Tailor

A modern, responsive multipage website for **Heena Ladies Tailor** — a women's custom tailoring and fashion-designing studio.

Designed to feel like a **modern Indian women's fashion boutique + professional tailoring studio**, focusing on custom stitching, proper fitting, and direct customer engagement via WhatsApp and Phone.

---

## 🌟 Highlights

- **Modern Indian Boutique Aesthetic**: Warm ivory, soft cream, and elegant wine accents with clean typography (`Playfair Display` & `Plus Jakarta Sans`).
- **4 Dedicated Pages**:
  1. `index.html` — **Home**: Visual hero showcase, services preview, process workflow, customer testimonials, and direct WhatsApp CTAs.
  2. `services.html` — **Services**: In-depth details for 8 tailoring categories (Blouse, Kurti, Salwar Suit, Dress, Gown, Lehenga, Alterations, Custom Design) and personalization options.
  3. `gallery.html` — **Gallery**: Responsive portfolio grid with live category filters and interactive modal lightbox.
  4. `about-contact.html` — **About & Contact**: Boutique story, 3-pillar approach, contact details, Google Maps integration, and one-tap WhatsApp inquiry helper.
- **Mobile-First UX**: Clean hamburger menu and sticky bottom CTA bar (`WhatsApp | Call`) for effortless conversions on smartphones.
- **Single-Source Configuration**: Easily update phone numbers, WhatsApp, address, timings, and social links in [`assets/js/config.js`](file:///d:/DEV/Tailwind/New%20folder/assets/js/config.js).
- **SEO Ready**: Semantic HTML5 tags and LocalBusiness JSON-LD structured data.

---

## 📁 Project Structure

```text
├── index.html              # Home Page
├── services.html           # Services Page
├── gallery.html            # Gallery Portfolio Page
├── about-contact.html      # About & Contact Page
├── assets/
│   ├── css/
│   │   └── style.css       # Complete design system & responsive styling
│   ├── js/
│   │   ├── config.js       # Centralized business information & placeholders
│   │   └── main.js         # Navigation, lightbox, gallery filters, WhatsApp triggers
│   └── images/             # High-quality photography assets
└── README.md               # Project documentation
```

---

## 🚀 How to Run Locally

You can run this website on any local HTTP server:

### Using Python:
```bash
python -m http.server 5000
```
Then visit: [http://localhost:5000](http://localhost:5000)

### Using Node / npx:
```bash
npx serve -l 5000 .
```

---

## ⚙️ Customizing Business Details

Open [`assets/js/config.js`](file:///d:/DEV/Tailwind/New%20folder/assets/js/config.js) to replace the placeholders with actual shop information:
- Phone number
- WhatsApp number
- Shop address
- Opening timings
- Google Maps link
- Instagram link
