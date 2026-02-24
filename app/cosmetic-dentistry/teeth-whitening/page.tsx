import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Home, ChevronRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Teeth Whitening",
  description:
    "Professional teeth whitening in Independence, OH. In-office and customized at-home treatments. Safely brighten your smile multiple shades.",
};

const whyProfessional = [
  { title: "Supervised Safety", desc: "Professional oversight ensures no damage to enamel or gum sensitivity during treatment." },
  { title: "Superior Results", desc: "Professional-grade whitening agents are significantly stronger than over-the-counter products." },
  { title: "Customized Trays", desc: "At-home kits use custom-fitted trays for even coverage — no strips that shift or miss spots." },
  { title: "Lasting Results", desc: "With proper care and touch-ups, professional whitening results last significantly longer." },
];

export default function TeethWhiteningPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Bright · Safe · Professional"
        title="Teeth Whitening"
        description="Professional whitening under dental supervision achieves dramatically better results than store-bought products — safely brightening your smile multiple shades in a single visit or with a custom at-home kit."
        backgroundImage="teeth-whitening.jpg"
        primaryButtonText="Schedule a Whitening Appointment"
        primaryButtonHref="/contact"
        secondaryButtonText="All Cosmetic Services"
        secondaryButtonHref="/cosmetic-dentistry"
      />

      {/* Options */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Two Options</p>
            <h2 className="font-heading text-[var(--color-navy)]">Choose the whitening approach that fits your life</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            <div className="p-8 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                <Sun size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-white border border-[var(--color-beige)] rounded-full px-3 py-1 mb-4 inline-block">
                Fastest Results
              </span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">In-Office Whitening</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Professional-grade whitening performed chair-side. Results
                visible immediately — brighten up to 8 shades in a single
                appointment. Perfect before special events.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                <Home size={20} className="text-white" />
              </div>
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-white border border-[var(--color-beige)] rounded-full px-3 py-1 mb-4 inline-block">
                Most Flexible
              </span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">Custom At-Home Kit</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Custom-fitted trays and professional whitening gel — used on
                your schedule, typically 30–60 minutes per day for 2 weeks.
                Results equivalent to in-office treatment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why professional */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Go Professional</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-8">Professional whitening vs. store-bought</h2>
              <div className="space-y-5">
                {whyProfessional.map((w) => (
                  <div key={w.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-0.5">{w.title}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-navy)] rounded-3xl p-8">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-4">Ready to brighten your smile?</p>
              <h3 className="font-heading text-white text-3xl mb-4">Book your whitening appointment</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                Our team will assess your current shade and recommend the
                treatment that will give you the best, safest results.
              </p>
              <Button variant="beige" size="lg" shadow={true} asChild>
                <Link href="/contact">Schedule Now <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
