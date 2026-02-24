export const SITE = {
  name: "Bilski Dental & CARE Esthetics",
  shortName: "Bilski Dental",
  tagline: "Home of the Bilski Smile",
  url: "https://bilskidental.com",
  email: "info@bilskidental.com",
  phone: "(216) 524-4410",
  phonePlain: "+12165244410",
  phone2: "(216) 369-6403",
  address: {
    street: "6527 Brecksville Road, Suite B",
    city: "Independence",
    state: "OH",
    zip: "44131",
    full: "6527 Brecksville Road, Suite B, Independence, OH 44131",
    mapsUrl:
      "https://www.google.com/maps?daddr=6527+Brecksville+Rd+Suite+B,+Independence,+OH+44131",
  },
  hours: [
    { days: "Monday – Thursday", time: "8:00 AM – 5:00 PM" },
    { days: "Friday", time: "8:30 AM – 1:30 PM" },
    { days: "Saturday – Sunday", time: "Closed" },
  ],
  rating: { value: 4.9, count: 200 },
  bookingUrl: "https://app.modento.io/bilskidental/sign-up",
} as const;

export const NAV_LINKS = [
  {
    label: "About",
    href: "/meet-us",
  },
  {
    label: "General Dentistry",
    href: "/general-dentistry",
    children: [
      { label: "Family Dentistry", href: "/general-dentistry/family-dentistry" },
      { label: "Root Canal", href: "/general-dentistry/root-canal" },
      { label: "Wisdom Teeth", href: "/general-dentistry/wisdom-teeth" },
      { label: "Dental Implants", href: "/general-dentistry/general-implants" },
      { label: "Bridges & Partials", href: "/general-dentistry/bridges-and-partials" },
      { label: "Laser Gum Therapy", href: "/general-dentistry/laser-gum-therapy" },
      { label: "Sedation", href: "/sedation" },
    ],
  },
  {
    label: "Cosmetic Dentistry",
    href: "/cosmetic-dentistry",
    children: [
      { label: "Dental Veneers", href: "/cosmetic-dentistry/dental-veneers" },
      { label: "Clear Aligners", href: "/cosmetic-dentistry/clear-aligners" },
      { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
      { label: "Dental Crowns", href: "/cosmetic-dentistry/crowns" },
      { label: "Dentures", href: "/cosmetic-dentistry/dentures" },
      { label: "Cosmetic Implants", href: "/cosmetic-dentistry/cosmetic-implants" },
      { label: "Gum Lift", href: "/cosmetic-dentistry/gum-lift" },
    ],
  },
  {
    label: "Patient Center",
    href: "/patient-center",
    children: [
      { label: "New Patients", href: "/patient-center/new-patients" },
      { label: "Insurance & Financing", href: "/patient-center/insurance-financing" },
      { label: "Patient Forms", href: "/patient-center/forms" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

export const FOOTER_LINKS = {
  dentistry: [
    { label: "Family Dentistry", href: "/general-dentistry/family-dentistry" },
    { label: "Root Canal", href: "/general-dentistry/root-canal" },
    { label: "Dental Implants", href: "/general-dentistry/general-implants" },
    { label: "Bridges & Partials", href: "/general-dentistry/bridges-and-partials" },
    { label: "Wisdom Teeth", href: "/general-dentistry/wisdom-teeth" },
  ],
  cosmetic: [
    { label: "Dental Veneers", href: "/cosmetic-dentistry/dental-veneers" },
    { label: "Clear Aligners", href: "/cosmetic-dentistry/clear-aligners" },
    { label: "Teeth Whitening", href: "/cosmetic-dentistry/teeth-whitening" },
    { label: "Dental Crowns", href: "/cosmetic-dentistry/crowns" },
    { label: "Gum Lift", href: "/cosmetic-dentistry/gum-lift" },
    { label: "Dentures", href: "/cosmetic-dentistry/dentures" },
  ],
  practice: [
    { label: "About Dr. Bilski", href: "/meet-us" },
    { label: "Patient Center", href: "/patient-center" },
    { label: "Advanced AI Dentistry", href: "/advanced-ai-dentistry" },
    { label: "Schedule Appointment", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
} as const;
