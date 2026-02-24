import type { Metadata } from "next";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Schedule Appointment",
  description:
    "Schedule an appointment or contact Bilski Dental & CARE Esthetics. Located at 6527 Brecksville Road, Suite B, Independence, OH. Call (216) 524-4410.",
};

const nearbyAreas = [
  "Brecksville",
  "Broadview Heights",
  "North Royalton",
  "Seven Hills",
  "Parma",
  "Macedonia",
];

export default function ContactPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Passionate · Dedicated · Professional"
        title="Schedule Your Appointment"
        description="New and returning patients welcome. Fill out the form below and our team will reach out within one business day to confirm your appointment."
        backgroundImage="contact.jpg"
      />

      {/* Form + Info */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">
            {/* Contact Form */}
            <ContactForm />

            {/* Side info */}
            <div className="space-y-6">
              {/* Address card */}
              <div className="p-6 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
                <div className="flex gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">Address</p>
                    <p className="font-body text-sm text-[var(--color-muted)] mt-1 leading-relaxed">
                      {SITE.address.street}<br />
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                    </p>
                    <p className="font-body text-xs text-[var(--color-muted)] mt-1.5">
                      On Route 21, south of Rockside Rd · Next to the US Post Office
                    </p>
                  </div>
                </div>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-secondary font-600 text-[var(--color-navy)] hover:gap-2.5 transition-all"
                >
                  <Navigation size={12} /> Get Directions
                </a>
              </div>

              {/* Phone card */}
              <div className="p-6 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">Call Us</p>
                    <a
                      href={`tel:${SITE.phonePlain}`}
                      className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors block mt-1"
                    >
                      {SITE.phone}
                    </a>
                    <a
                      href="tel:+12163696403"
                      className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors block"
                    >
                      {SITE.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div className="p-6 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
                <div className="flex gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-white" />
                  </div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] self-center">Office Hours</p>
                </div>
                <div className="space-y-2">
                  {SITE.hours.map((h) => (
                    <div key={h.days} className="flex justify-between items-center text-sm font-body">
                      <span className="text-[var(--color-muted)]">{h.days}</span>
                      <span className="text-[var(--color-navy)] font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby areas */}
              <div className="p-6 rounded-2xl border border-[var(--color-beige)]">
                <p className="text-xs font-secondary font-600 uppercase tracking-wider text-[var(--color-muted)] mb-3">
                  Serving — Less than 15 min from
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((a) => (
                    <span key={a} className="text-xs font-body text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="p-5 rounded-2xl bg-[var(--color-navy)] text-white">
                <p className="font-secondary font-600 text-sm mb-1">Hablamos Español</p>
                <p className="font-body text-xs text-white/60">
                  Bilingual staff available — estamos encantados de atenderlos.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
