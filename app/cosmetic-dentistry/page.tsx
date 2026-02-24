import type { Metadata } from "next";
import Link from "next/link";
import { Star, Heart, Sparkles, Zap, ChevronRight, Smile, Sun, Scissors, Crown, Layers, Shield, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry",
  description:
    "Transform your smile at Bilski Dental. Veneers, clear aligners, teeth whitening, crowns, dentures, cosmetic implants, and gum lifts in Independence, OH.",
};

const services = [
  {
    icon: Smile,
    title: "Dental Veneers",
    description: "Same-Day Provánce®, Porcelain, and Snap-On Smile® options. Enhance color, shape, size, and length — stain resistant, lasting 15+ years.",
    href: "/cosmetic-dentistry/dental-veneers",
    tag: "Most Popular",
  },
  {
    icon: Sparkles,
    title: "Clear Aligners",
    description: "Virtually invisible custom aligners for mild to moderate orthodontic needs. Invisalign® and OrthoFX NiTime available. Night-time wear program offered.",
    href: "/cosmetic-dentistry/clear-aligners",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional in-office and custom at-home treatments. Safely brighten multiple shades in one visit with professional-grade results.",
    href: "/cosmetic-dentistry/teeth-whitening",
  },
  {
    icon: Scissors,
    title: "Gum Lift",
    description: "Precision laser gum contouring corrects uneven gum lines and excessive gum visibility. Minimal recovery, maximum aesthetic impact.",
    href: "/cosmetic-dentistry/gum-lift",
  },
  {
    icon: Crown,
    title: "Dental Crowns",
    description: "90-minute same-day crowns available. Porcelain, ceramic, and metal alloy options precisely matched to your natural teeth.",
    href: "/cosmetic-dentistry/crowns",
    tag: "Same-Day",
  },
  {
    icon: Layers,
    title: "Dentures",
    description: "Full and partial dentures — traditional and digital — restore beauty, functionality, and self-confidence after tooth loss.",
    href: "/cosmetic-dentistry/dentures",
  },
  {
    icon: Shield,
    title: "Cosmetic Implants",
    description: "Permanent, natural-looking prosthetics for missing teeth. Smile restoration, bone grafting, full mouth reconstruction, and gum regeneration.",
    href: "/cosmetic-dentistry/cosmetic-implants",
  },
];

const testimonials = [
  {
    name: "Linda S.",
    text: "Everything was explained in layman terms. Great to have someone explain insurance better than our own benefits manager.",
  },
  {
    name: "Gayle S.",
    text: "Very friendly, PAIN FREE! Dr. Bilski was thorough and completed everything in one appointment.",
  },
  {
    name: "Tom E.",
    text: "High quality service. Got two fillings replaced and didn't feel a single thing. Great experience with a friendly staff.",
  },
];

export default function CosmeticDentistryPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      {/* Header - Navy themed hero with background image */}
      <section className="py-20 bg-[var(--color-navy)] relative overflow-hidden">
        {/* Background image with low opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-images/cosmetic-dentistry.jpg')" }}
          aria-hidden="true"
        />
        
        {/* Navy overlay for better text readability */}
        <div 
          className="absolute inset-0 bg-[var(--color-navy)] opacity-80"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        />
        
        <Container className="relative z-10">
          <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-white mb-3">
            Functional · Seamless · Natural-Looking
          </p>
          <h1 className="font-heading text-white max-w-2xl mb-5">
            Cosmetic Dentistry
          </h1>
          <p className="font-body text-white/80 max-w-xl leading-relaxed mb-8">
            A confident smile changes everything. We combine artistry and
            advanced technology to create results that look completely natural
            and last for years.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="beige" size="md" shadow={true} asChild>
              <Link href="/contact">Schedule a Consultation <ChevronRight size={14} /></Link>
            </Button>
            <Button variant="ghost" size="md" className="text-white hover:bg-white/10" asChild>
              <Link href="/patient-center">New Patient Info</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Our Cosmetic Services</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              From subtle enhancements to complete smile transformations, every
              treatment is tailored to your unique goals and anatomy.
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
                    {"tag" in s && s.tag && (
                      <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-[var(--color-beige-light)] border border-[var(--color-beige)] rounded-full px-2.5 py-1">
                        {s.tag}
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

      {/* First Visit */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Your First Visit</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-5">What to expect</h2>
              <div className="space-y-5">
                {[
                  { n: "1", t: "Thorough Consultation", d: "We review your dental history, concerns, and smile goals in a relaxed, pressure-free environment." },
                  { n: "2", t: "Comprehensive Exam", d: "Teeth, gums, and bite assessed with digital X-rays and AI-assisted diagnostics for complete accuracy." },
                  { n: "3", t: "Personalized Plan", d: "We walk through every option, answer your questions, and build a plan around your goals and budget." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-xs font-secondary font-600">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{step.t}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white rounded-2xl border border-[var(--color-beige)]">
                <p className="font-secondary font-600 text-xs text-[var(--color-navy)] mb-1">New Patient Forms</p>
                <p className="font-body text-xs text-[var(--color-muted)]">
                  Complete forms online before your visit at{" "}
                  <a href="https://app.modento.io/bilskidental/sign-up" target="_blank" rel="noopener noreferrer" className="text-[var(--color-navy)] underline">
                    app.modento.io
                  </a>{" "}
                  — or arrive 15 minutes early.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-5">Patient Stories</p>
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-5 border border-[var(--color-beige)]">
                  <Quote size={16} className="text-[var(--color-beige)] mb-3" />
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-3">{t.text}</p>
                  <p className="font-secondary font-600 text-xs text-[var(--color-navy)]">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
