import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Heart, Layers, Zap, Stethoscope, Smile, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "General Dentistry",
  description:
    "Comprehensive general dentistry in Independence, OH — family care, root canals, implants, bridges, laser gum therapy, wisdom teeth, and more.",
};

const services = [
  {
    icon: Heart,
    title: "Family Dentistry",
    description: "Comprehensive dental care for all ages — from children to seniors. Routine cleanings, exams, and oral health education tailored to each life stage.",
    href: "/general-dentistry/family-dentistry",
  },
  {
    icon: Stethoscope,
    title: "Root Canal",
    description: "Comfortable, effective root canal therapy to save your natural tooth. Removes infection, relieves pain, and prevents further damage.",
    href: "/general-dentistry/root-canal",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Titanium implants that look, feel, and function like natural teeth. Single tooth, multiple teeth, or All-on-4™ full-arch solutions with PRGF technology.",
    href: "/general-dentistry/general-implants",
  },
  {
    icon: Layers,
    title: "Bridges & Partials",
    description: "Fill gaps from missing teeth, prevent shifting, and maintain proper jaw alignment. Custom crafted to blend seamlessly with your natural smile.",
    href: "/general-dentistry/bridges-and-partials",
  },
  {
    icon: Zap,
    title: "Laser Gum Therapy",
    description: "First of its kind in Northeast Ohio. High-intensity laser periodontal therapy removes diseased tissue and promotes healthy gum regeneration with precision.",
    href: "/general-dentistry/laser-gum-therapy",
    badge: "First in Region",
  },
  {
    icon: Smile,
    title: "Wisdom Teeth",
    description: "Expert extractions for impacted, crowded, or problematic third molars. Gentle procedure with sedation options for maximum comfort.",
    href: "/general-dentistry/wisdom-teeth",
  },
];

const processSteps = [
  { step: "01", title: "Consultation", description: "We review your dental history, concerns, and goals in a relaxed, judgment-free conversation." },
  { step: "02", title: "Examination", description: "Comprehensive oral exam — teeth, gums, bones, and bite. Digital X-rays analyzed with AI for enhanced accuracy." },
  { step: "03", title: "Treatment Plan", description: "We present your personalized plan, answer every question, and ensure you feel confident before any work begins." },
  { step: "04", title: "Ongoing Care", description: "Each visit is designed to be informative, comfortable, and positive — a true long-term partnership." },
];

export default function GeneralDentistryPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Passionate · Dedicated · Professional"
        title="General Dentistry"
        description="Preventive care, early detection, and comprehensive treatment — all delivered with state-of-the-art technology and a personal touch. Healthy teeth begin here."
        backgroundImage="general-dentistry.jpg"
        primaryButtonText="Schedule an Appointment"
        primaryButtonHref="/contact"
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Our General Dentistry Services</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              From routine cleanings to complex restorations, we offer the full
              spectrum of general dental care under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group flex flex-col h-full p-7 rounded-2xl border border-[var(--color-beige)] hover:border-[var(--color-navy)] hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-beige-light)] flex items-center justify-center group-hover:bg-[var(--color-navy)] transition-colors duration-300">
                      <Icon size={20} className="text-[var(--color-navy)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    {"badge" in s && s.badge && (
                      <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] border border-[var(--color-beige)] rounded-full px-2.5 py-1">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl text-[var(--color-navy)] mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-5">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-secondary font-600 text-[var(--color-navy)] group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">How It Works</p>
            <h2 className="font-heading text-[var(--color-navy)]">What to expect at your visit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-[var(--color-beige)]">
                <p className="font-heading text-5xl text-[var(--color-navy)]/10 mb-3">{p.step}</p>
                <h3 className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">{p.title}</h3>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
