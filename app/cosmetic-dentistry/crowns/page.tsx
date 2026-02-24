import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Dental Crowns",
  description:
    "Comfortable, transformative dental crowns in Independence, OH. 90-minute same-day crowns available. Porcelain, ceramic, and metal alloy options.",
};

const indications = [
  "Weak teeth vulnerable to decay or breakage",
  "Teeth at risk of breaking or already broken",
  "Severely worn-down teeth",
  "Large fillings requiring full coverage",
  "Misshapen or discolored teeth",
  "Teeth restored after root canal treatment",
];

const benefits = [
  { title: "Improves Appearance", desc: "Covers discolored, misshapen, or damaged teeth with a natural-looking cap." },
  { title: "Restorative Function", desc: "Supports dental bridges and holds cracked or weak teeth together." },
  { title: "Long-Term Protection", desc: "Shields vulnerable teeth from further decay or fracture." },
  { title: "Strength & Restoration", desc: "Fully restores natural shape, size, and biting function." },
];

const steps = [
  { n: "1", t: "Initial Examination", d: "Thorough evaluation with digital X-rays to assess root health and surrounding bone structure." },
  { n: "2", t: "Tooth Preparation", d: "Tooth numbed and carefully reshaped. Impression taken; a temporary crown placed while your permanent crown is crafted." },
  { n: "3", t: "Fitting & Fine-Tuning", d: "Permanent crown fitted and adjusted for a perfect bite, natural feel, and lasting comfort." },
];

export default function CrownsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Comfortable · Transformative · Effective"
        title="Dental Crowns"
        description="Tooth-shaped caps that restore the size, shape, strength, and appearance of damaged teeth. Crafted in porcelain, ceramic, or metal alloys — matched precisely to your natural teeth. 90-Minute Same-Day Crowns available."
        backgroundImage="crowns.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All Cosmetic Services"
        secondaryButtonHref="/cosmetic-dentistry"
      />

      {/* When + Benefits */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">When to Consider</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Do you need a crown?</h2>
              <div className="space-y-3">
                {indications.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Benefits</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Why choose a crown?</h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-[var(--color-beige-light)] rounded-2xl p-4 border border-[var(--color-beige)]">
                    <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{b.title}</p>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Procedure */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">The Process</p>
            <h2 className="font-heading text-[var(--color-navy)]">Your crown procedure, step by step</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 border border-[var(--color-beige)]">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-secondary font-600">{s.n}</span>
                </div>
                <h3 className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">{s.t}</h3>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-[var(--color-navy)] rounded-2xl max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex gap-3 items-center">
              <Zap size={22} className="text-[var(--color-beige)] shrink-0" />
              <div>
                <p className="font-secondary font-600 text-sm text-white">90-Minute Same-Day Crown</p>
                <p className="font-body text-xs text-white/60">Complete restoration in a single appointment — no temporaries, no second visit.</p>
              </div>
            </div>
            <Button variant="beige" size="md" asChild>
              <Link href="/contact">Book Now <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
