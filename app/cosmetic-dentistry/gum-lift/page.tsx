import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Gum Lift (Gingivectomy)",
  description:
    "Precision laser gum lift and contouring in Independence, OH. Correct uneven gum lines, reduce excessive gum visibility, and improve smile proportions.",
};

const benefits = [
  { title: "Enhanced Smile Aesthetics", desc: "Creates a more balanced, symmetrical smile by highlighting your teeth over your gums." },
  { title: "Increased Confidence", desc: "Patients consistently report feeling more confident in everyday life and social situations." },
  { title: "Minimal Recovery Time", desc: "Advanced laser technology means a short, comfortable recovery and quick return to daily activities." },
  { title: "Improved Gum Health", desc: "Removes overhanging tissue where bacteria accumulate, reducing periodontal risk long-term." },
];

const sedationOptions = [
  { name: "Local Anesthesia", desc: "Targeted numbness for the specific treatment area — the standard, comfortable option." },
  { name: "Oral Sedation", desc: "Pill-based relaxation for patients who prefer a calmer, more at-ease experience." },
  { name: "IV Conscious Sedation", desc: "Deeper sedation with rapid onset and amnesic effects for maximum comfort." },
];

export default function GumLiftPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Aesthetics · Confidence · Health"
        title="Gum Lift"
        description="A precise cosmetic procedure — also called gingivectomy or gum contouring — that sculpts gum tissue to create better proportion and a more confident smile. Performed with advanced laser technology for minimal discomfort and fast healing."
        backgroundImage="gum-lift.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All Cosmetic Services"
        secondaryButtonHref="/cosmetic-dentistry"
      />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Benefits</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-8">Why consider a gum lift?</h2>
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

            {/* Laser technology */}
            <div className="space-y-5">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Laser Technology</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Precision with every pass</h2>
              <div className="bg-[var(--color-beige-light)] rounded-2xl p-6 border border-[var(--color-beige)]">
                <div className="flex gap-3 mb-3">
                  <Zap size={18} className="text-[var(--color-navy)] shrink-0 mt-0.5" />
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">Aesthetic Gum Reshaping</p>
                </div>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  Laser precision sculpts gum tissue with minimal discomfort,
                  minimal bleeding, and faster healing compared to traditional
                  scalpel methods.
                </p>
              </div>
              <div className="bg-[var(--color-beige-light)] rounded-2xl p-6 border border-[var(--color-beige)]">
                <div className="flex gap-3 mb-3">
                  <Zap size={18} className="text-[var(--color-navy)] shrink-0 mt-0.5" />
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">Therapeutic Laser Treatment</p>
                </div>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  For patients with gum disease, lasers target bacteria precisely
                  and promote tissue regeneration — often eliminating the need for
                  traditional periodontal surgery.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sedation */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Comfort First</p>
            <h2 className="font-heading text-[var(--color-navy)]">Sedation options available</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sedationOptions.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-[var(--color-beige)]">
                <h3 className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">{s.name}</h3>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" shadow={true} asChild>
              <Link href="/contact">Book Your Gum Lift Consultation <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
