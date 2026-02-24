import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white" aria-label="Site footer">
      {/* Main footer */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" aria-label="Bilski Dental home">
              <span className="font-heading text-2xl text-white leading-none block">
                Bilski Dental
              </span>
              <span className="text-xs font-body text-white/60 mt-1 block">
                & CARE Esthetics
              </span>
            </Link>
            <p className="text-sm font-body text-white/70 leading-relaxed mb-5">
              Home of the Bilski Smile. Comprehensive cosmetic and general
              dentistry serving Northeast Ohio for 100+ years.
            </p>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-[var(--color-beige)] text-[var(--color-beige)]"
                />
              ))}
              <span className="text-sm font-body text-white/70 ml-1">
                {SITE.rating.value} ({SITE.rating.count}+ reviews)
              </span>
            </div>
          </div>

          {/* General Dentistry links */}
          <div>
            <h3 className="font-secondary font-600 text-sm uppercase tracking-wider !text-white mb-4">
              General Dentistry
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.dentistry.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-white/70 hover:text-white transition-colors"
                   
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cosmetic Dentistry links */}
          <div>
            <h3 className="font-secondary font-600 text-sm uppercase tracking-wider !text-white mb-4">
              Cosmetic Dentistry
            </h3>
            <ul className="space-y-2.5" role="list">
              {FOOTER_LINKS.cosmetic.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-white/70 hover:text-white transition-colors"
                   
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-secondary font-600 text-sm uppercase tracking-wider !text-white mb-4">
              Visit Us
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-sm font-body text-white/70 hover:text-white transition-colors group"
                 
                >
                  <MapPin
                    size={16}
                    className="shrink-0 mt-0.5 text-[var(--color-beige)] group-hover:text-white transition-colors"
                  />
                  <span>
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state}{" "}
                    {SITE.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="flex items-center gap-3 text-sm font-body text-white/70 hover:text-white transition-colors group"
                 
                >
                  <Phone
                    size={16}
                    className="shrink-0 text-[var(--color-beige)] group-hover:text-white transition-colors"
                  />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <div className="flex gap-3">
                  <Clock
                    size={16}
                    className="shrink-0 mt-0.5 text-[var(--color-beige)]"
                  />
                  <div className="text-sm font-body text-white/70 space-y-1">
                    {SITE.hours.map((h) => (
                      <div key={h.days}>
                        <span className="text-white/50">{h.days}:</span>{" "}
                        {h.time}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-body text-white/50 mb-2">
                Languages
              </p>
              <div className="flex gap-2 text-xs font-body text-white/70">
                <span className="border border-white/20 rounded px-2 py-1">
                  English
                </span>
                <span className="border border-white/20 rounded px-2 py-1">
                  Español
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-white/50">
            <p>
              © {currentYear} {SITE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
