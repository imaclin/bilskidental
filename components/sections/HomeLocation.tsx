import Link from "next/link";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const nearbyAreas = [
  "Brecksville",
  "Broadview Heights",
  "North Royalton",
  "Seven Hills",
  "Parma",
  "Macedonia",
];

export function HomeLocation() {
  return (
    <section className="py-24 bg-white" aria-label="Location and Hours">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
              Find Us
            </p>
            <h2 className="font-heading text-[var(--color-navy)] mb-8">
              Conveniently located in Independence, OH
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[var(--color-navy)]" />
                </div>
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">
                    Address
                  </p>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state}{" "}
                    {SITE.address.zip}
                  </p>
                  <p className="font-body text-xs text-[var(--color-muted)] mt-1">
                    On Route 21, south of Rockside Road · Next to the US Post Office
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[var(--color-navy)]" />
                </div>
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">
                    Office Hours
                  </p>
                  <div className="space-y-1">
                    {SITE.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex items-center justify-between gap-8 text-sm font-body"
                      >
                        <span className="text-[var(--color-muted)]">{h.days}</span>
                        <span className="text-[var(--color-navy)] font-medium">
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[var(--color-navy)]" />
                </div>
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE.phonePlain}`}
                    className="font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-navy)] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Nearby areas */}
            <div className="mt-8 pt-8 border-t border-[var(--color-beige)]">
              <p className="text-xs font-secondary font-600 text-[var(--color-muted)] uppercase tracking-wider mb-3">
                Less than 15 minutes from
              </p>
              <div className="flex flex-wrap gap-2">
                {nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-body text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" shadow={true} asChild>
                <Link href="/contact">Schedule Appointment</Link>
              </Button>
              <Button variant="secondary" size="md" asChild>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions <ChevronRight size={14} />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Map placeholder */}
          <div className="relative">
            <div className="w-full h-[420px] rounded-3xl bg-[var(--color-beige-light)] border border-[var(--color-beige)] overflow-hidden flex items-center justify-center">
              <div className="text-center px-8">
                <MapPin size={40} className="text-[var(--color-navy)]/30 mx-auto mb-3" />
                <p className="font-body text-sm text-[var(--color-muted)]">
                  Google Maps embed
                </p>
                <p className="font-body text-xs text-[var(--color-muted)]/70 mt-1">
                  Add <code className="bg-[var(--color-beige)] px-1 rounded text-[10px]">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to enable
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
