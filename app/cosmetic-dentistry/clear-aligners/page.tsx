import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Clear Aligners & Invisalign",
  description:
    "Virtually invisible, custom-made clear aligners in Independence, OH. Invisalign® and OrthoFX NiTime AirShell Technology. Night-time wear available.",
};

const conditions = [
  "Gapped teeth",
  "Crowded / overcrowded teeth",
  "Overbite",
  "Underbite",
  "Open bite",
  "Crooked teeth",
  "Crossbite",
];

export default function ClearAlignersPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Transparent · Custom-Made · Seamless"
        title="Clear Aligners"
        description="Nearly invisible, custom-made plastic shells that gently reposition your teeth over time. Ideal for mild to moderate orthodontic needs — no brackets, no wires."
        backgroundImage="clear-aligners.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
      />

      {/* Why Clear Aligners */}
      <section className="py-16 bg-white">
        <Container size="md">
          <p className="font-body text-[var(--color-muted)] leading-relaxed mb-4">
            Recognizing that each journey to the perfect smile is unique, it's important to address how crooked or crowded teeth can undermine your confidence and complicate dental hygiene, potentially leading to tooth decay and gum disease.
          </p>
          <p className="font-body text-[var(--color-muted)] leading-relaxed">
            If traditional metal braces seem unappealing, consider clear aligners. These nearly invisible, custom-made plastic shells fit snugly over your teeth, exerting gentle pressure to comfortably reposition them. Designed for mild to moderate orthodontic needs, clear aligners could be the seamless solution you need to achieve your dream smile. Results may vary.
          </p>
        </Container>
      </section>

      {/* Conditions + How it works */}
      <section className="py-24 bg-white pt-8">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Conditions Treated</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Is clear aligner therapy right for you?</h2>
              <div className="grid grid-cols-2 gap-3">
                {conditions.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{c}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-[var(--color-beige-light)] rounded-2xl border border-[var(--color-beige)] flex gap-3">
                <Moon size={20} className="text-[var(--color-navy)] shrink-0 mt-0.5" />
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">Night-Time Wear Program</p>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">
                    Worn after dinner through sleeping hours — one week at a time.
                    Shortens overall treatment duration while fitting into your lifestyle.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">How It Works</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-4">Simple, effective, discreet</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                Clear aligners are transparent, thin trays made from a plastic-like material, tailored specifically to fit your mouth. They work by applying the necessary pressure to gradually shift your teeth. Each aligner is typically worn for two weeks at a time, for at least 22 hours a day, slightly guiding your teeth with each use.
              </p>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                The total number of aligners and the duration of treatment required depend upon your specific orthodontic needs and the extent of adjustment your teeth require.
              </p>
              <div className="space-y-5">
                {[
                  { n: "1", t: "Custom Fitting", d: "Digital scans create a precise 3D model of your teeth. AI maps the exact movement path to your ideal smile." },
                  { n: "2", t: "Wear Your Aligners", d: "Each aligner worn for approximately 2 weeks, minimum 22 hours per day. Progress checked every 6–8 weeks." },
                  { n: "3", t: "Reveal Your Smile", d: "Treatment complete — enjoy your new smile. Retainers provided to maintain results long-term." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-xs font-secondary font-600">{s.n}</div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{s.t}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 Brands */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">2 Brands Offered</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Industry-leading clear aligner systems</h2>
            <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
              Each of these options is engineered to ensure your comfort and convenience, allowing you to achieve the confident, radiant smile you desire with minimal intrusion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-beige)]">
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1 mb-5 inline-block">Most Popular</span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">Invisalign®</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Custom-fabricated, virtually invisible trays. Gently guides teeth
                into their ideal position without metal brackets or wires. The
                world's most trusted clear aligner system.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-beige)]">
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1 mb-5 inline-block">AirShell Technology</span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">OrthoFX NiTime</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Achieves 78% predictability in tooth movement — significantly
                reducing refinements vs. standard aligners. Worn after-hours for
                a more discreet, lifestyle-friendly option.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" shadow={true} asChild>
              <Link href="/contact">Start Your Aligner Journey <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
