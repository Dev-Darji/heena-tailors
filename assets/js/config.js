/**
 * Heena Ladies Tailor - Website Configuration
 * Update business details here to automatically reflect across interactive links.
 */
const SITE_CONFIG = {
  shopName: "Heena Ladies Tailor",
  tagline: "Custom stitching, beautiful designs and a fitting made for you.",
  phone: "[ADD PHONE NUMBER]", // Example: "+91 98765 43210"
  phoneRaw: "+919876543210",    // Tel link format without spaces
  whatsapp: "[ADD WHATSAPP NUMBER]", // Example: "+91 98765 43210"
  whatsappRaw: "919876543210",   // Numbers only for api.whatsapp.com
  address: "[ADD ACTUAL ADDRESS]", // Example: "Shop No. 4, Opposite Bank of Baroda, Main Market, [City, State - PIN]"
  timings: "[ADD ACTUAL TIMINGS]", // Example: "Mon - Sat: 10:30 AM - 8:30 PM | Sunday: 11:00 AM - 4:00 PM"
  instagram: "[ADD INSTAGRAM LINK]", // Example: "https://instagram.com/heenaladiestailor"
  googleMapsUrl: "https://maps.google.com/?q=[ADD+SHOP+LOCATION+HERE]",
  defaultWhatsAppMessage: "Hi, I would like to know about your ladies tailoring services.",
  designWhatsAppMessage: "Hi, I have a design reference and would like to discuss custom stitching.",
  blouseWhatsAppMessage: "Hi, I would like to inquire about blouse stitching and fitting.",
};

// Export or assign to window
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}
