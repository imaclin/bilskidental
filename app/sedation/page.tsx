import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Pill, Zap, ChevronRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Sedation Dentistry",
  description:
    "Sedation dentistry at Bilski Dental — oral sedation, IV conscious sedation, and local anesthesia for anxiety-free dental care in Independence, OH.",
};

const options = [
  {
    icon: Pill,
    name: "Oral Sedation",
    tagline: "Pill-Based Comfort",
    desc: "A prescription pill taken before your appointment produces a relaxed, drowsy state. You remain conscious and responsive but feel calm and at ease throughout the entire visit.",
    best: "Mild to moderate dental anxiety",
    details: ["Taken 1 hour before appointment", "Effects last several hours", "Driver required", "Most patients remember little of the visit"],
  },
  {
    icon: Zap,
    name: "IV Conscious Sedation",
    tagline: "Deepest Relaxation",
    desc: "Delivered directly into the bloodstream for rapid onset. You remain in a semi-conscious, deeply relaxed state. Strong amnesic effect means most patients have no memory of the procedure.",
    best: "Severe anxiety or complex/lengthy procedures",
    details: ["Rapid onset — takes effect within minutes", "Depth easily adjusted throughout procedure", "Strong amnesic effects", "Driver required"],
  },
  {
    icon: Shield,
    name: "Local Anesthesia",
    tagline: "Targeted Numbness",
    desc: "Precisely administered to numb only the specific area being treated. The standard option for most procedures — ensures a completely pain-free experience without affecting consciousness.",
    best: "Routine procedures, mild discomfort concerns",
    details: ["No systemic effects", "No recovery time required", "Can drive yourself home", "Often combined with other sedation options"],
  },
];

const goodFor = [
  "Dental anxiety or phobia",
  "Sensitive gag reflex",
  "Difficulty getting numb with local anesthesia alone",
  "Complex or lengthy procedures",
  "Multiple treatments completed in one visit",
  "Previous traumatic dental experiences",
];

export default function SedationPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Calm · Safe · Comfortable"
        title="Sedation Dentistry"
        description="Dental anxiety shouldn’t stand between you and a healthy smile. We offer three levels of sedation so every patient — from mildly nervous to deeply anxious — can receive care comfortably."
        backgroundImage="sedation.jpg"
        primaryButtonText="Schedule with Sedation"
        primaryButtonHref="/contact"
      />

      {/* Sedation options */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">3 Options</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Choose your level of comfort</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              During your consultation, we'll recommend the sedation approach
              best suited to your anxiety level, procedure length, and medical history.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {options.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.name} className="flex flex-col p-7 rounded-2xl border border-[var(--color-beige)] bg-white">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] rounded-full px-3 py-1 mb-4 self-start">
                    {o.tagline}
                  </span>
                  <h3 className="font-heading text-xl text-[var(--color-navy)] mb-2">{o.name}</h3>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed mb-5 flex-1">{o.desc}</p>
                  <div className="pt-4 border-t border-[var(--color-beige)]">
                    <p className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] mb-3">
                      Best for: {o.best}
                    </p>
                    <div className="space-y-2">
                      {o.details.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-[var(--color-beige-light)] flex items-center justify-center shrink-0">
                            <Check size={9} className="text-[var(--color-navy)]" />
                          </div>
                          <span className="font-body text-xs text-[var(--color-muted)]">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Is Sedation Right for You?</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Sedation dentistry may be right for you if you have</h2>
              <div className="space-y-3">
                {goodFor.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-navy)] rounded-3xl p-8 text-white">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-4">Our Promise</p>
              <h3 className="font-heading text-white text-2xl mb-4">You deserve comfortable dental care</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Dental anxiety is real and common — and it prevents many people
                from getting the care they need. At Bilski Dental, we take your
                comfort seriously. There's no judgment here.
              </p>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-8">
                Tell us your concerns when you call or submit a request. We'll
                plan a visit specifically around your comfort level.
              </p>
              <Button variant="beige" size="md" asChild>
                <Link href="/contact">Book with Sedation Options <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
