import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Dental Veneers",
  description:
    "Natural, durable dental veneers in Independence, OH. Same-Day Provánce®, Porcelain, and Snap-On Smile® options — lasting up to 15 years.",
};

const benefits = [
  { title: "Natural Appearance", desc: "Closely resemble natural teeth in color, translucency, and texture." },
  { title: "Stain Resistance", desc: "Withstand coffee, wine, and other staining substances better than natural enamel." },
  { title: "Versatility", desc: "Correct chips, gaps, severe discoloration, and misshapen teeth." },
  { title: "Durability", desc: "Last up to 15 years with proper care and regular check-ups." },
  { title: "Minimal Maintenance", desc: "Regular brushing, flossing, and routine dental visits are all that's needed." },
];

const types = [
  {
    name: "Same-Day Dental Veneers",
    brand: "Provánce®",
    desc: "Composite veneers completed in a single visit. Immediately improves tooth shape, size, and color with no waiting period.",
    highlight: "One Appointment",
  },
  {
    name: "Porcelain Dental Veneers",
    brand: "Traditional",
    desc: "The cornerstone of cosmetic dentistry. Precision-crafted with artistry for remarkable, long-lasting results in 3 steps.",
    highlight: "Most Durable",
  },
  {
    name: "Snap-On Smile®",
    brand: "Snap-On Smile",
    desc: "A cost-effective, removable Hollywood smile transformation — no drilling, no injections, no permanency required.",
    highlight: "Non-Invasive",
  },
];

const comparisonRows = [
  { attr: "Purpose", veneer: "Cosmetic improvements", crown: "Cosmetic & restorative" },
  { attr: "Coverage", veneer: "Front surface only", crown: "Entire tooth" },
  { attr: "Best for", veneer: "Stains, chips, gaps", crown: "Significant damage or decay" },
  { attr: "Materials", veneer: "Porcelain or composite", crown: "Porcelain, ceramic, or metal" },
];

export default function DentalVeneersPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Natural · Durable · Effortless"
        title="Dental Veneers"
        description="Thin porcelain or composite shells bonded to the front of your teeth — dramatically improving color, shape, size, and length. More stain-resistant than natural enamel and lasting up to 15 years."
        backgroundImage="dental-veneers.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All Cosmetic Services"
        secondaryButtonHref="/cosmetic-dentistry"
      />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Veneers</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-8">The benefits of dental veneers</h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-0.5">{b.title}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparison table */}
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-5">Veneers vs. Crowns</p>
              <div className="rounded-2xl border border-[var(--color-beige)] overflow-hidden">
                <div className="grid grid-cols-3 bg-[var(--color-navy)] text-white text-xs font-secondary font-600 uppercase tracking-wider">
                  <div className="p-3 border-r border-white/10"></div>
                  <div className="p-3 border-r border-white/10">Veneers</div>
                  <div className="p-3">Crowns</div>
                </div>
                {comparisonRows.map((row, i) => (
                  <div
                    key={row.attr}
                    className={`grid grid-cols-3 text-sm font-body ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-beige-light)]"}`}
                  >
                    <div className="p-3 font-secondary font-600 text-[var(--color-navy)] text-xs border-r border-[var(--color-beige)]">{row.attr}</div>
                    <div className="p-3 text-[var(--color-muted)] text-xs border-r border-[var(--color-beige)]">{row.veneer}</div>
                    <div className="p-3 text-[var(--color-muted)] text-xs">{row.crown}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Types */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">3 Options</p>
            <h2 className="font-heading text-[var(--color-navy)]">Choose the veneer that's right for you</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {types.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-[var(--color-beige)] flex flex-col">
                <span className="inline-block text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1 mb-5 self-start">
                  {t.highlight}
                </span>
                <h3 className="font-heading text-xl text-[var(--color-navy)] mb-1">{t.name}</h3>
                <p className="text-xs font-secondary text-[var(--color-muted)] mb-4">{t.brand}</p>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" shadow={true} asChild>
              <Link href="/contact">Book a Veneers Consultation <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
