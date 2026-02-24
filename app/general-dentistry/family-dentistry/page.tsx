import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Heart, Layers, Zap, Stethoscope, Smile, Baby, Users, UserCheck, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Family Dentistry",
  description:
    "Comprehensive family dentistry in Independence, OH — dental care for all ages, from children to seniors. Cleanings, exams, preventive care, and education.",
};

const ageGroups = [
  {
    icon: Baby,
    title: "Children",
    desc: "We make first dental visits fun and stress-free. Preventive sealants, fluoride treatments, and early orthodontic monitoring as children grow.",
  },
  {
    icon: Users,
    title: "Teens & Young Adults",
    desc: "Monitoring wisdom teeth, sports mouthguards, and cosmetic options like clear aligners for teens who want a confident smile.",
  },
  {
    icon: Heart,
    title: "Adults",
    desc: "Full range of general and cosmetic services. Regular hygiene visits, restorations, and long-term oral health management.",
  },
  {
    icon: UserCheck,
    title: "Seniors",
    desc: "Specialized care for age-related concerns including dry mouth, gum recession, implants, and dentures — maintaining quality of life at every age.",
  },
];

const visitIncludes = [
  "Professional teeth cleaning (prophylaxis)",
  "Comprehensive oral exam — teeth, gums, bite, TMJ",
  "Digital X-rays with AI-assisted analysis",
  "Oral cancer screening",
  "Personalized oral hygiene instruction",
  "Treatment planning and preventive recommendations",
];

export default function FamilyDentistryPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Comprehensive · Caring · For All Ages"
        title="Family Dentistry"
        description="One practice for the whole family — from a child's first dental visit to senior care. Routine cleanings, exams, and preventive education tailored to every stage of life."
        backgroundImage="family-dentistry.jpg"
        primaryButtonText="Schedule for Your Family"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      {/* Age groups */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Care for Everyone</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Dental care at every stage of life</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              We understand that dental needs change over time. Our team provides
              age-appropriate care for every member of your family under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ageGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.title} className="p-6 rounded-2xl border border-[var(--color-beige)] flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-[var(--color-navy)] mb-2">{g.title}</h3>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed flex-1">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">At Your Visit</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">What a routine visit includes</h2>
              <div className="space-y-3">
                {visitIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[var(--color-navy)] rounded-3xl p-8 text-white">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-4">Our Recommendation</p>
              <h3 className="font-heading text-white text-2xl mb-4">Visit us every 6 months</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Regular check-ups catch small issues before they become big
                (and expensive) problems. Most insurance plans cover two
                preventive visits per year at 100%.
              </p>
              <p className="font-body text-xs text-white/50 mb-6">
                Not sure about your coverage? Call us — we'll help you understand
                your benefits.
              </p>
              <Button variant="beige" size="md" asChild>
                <Link href="/contact">Book a Family Appointment <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
