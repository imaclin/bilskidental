import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ChevronRight, ExternalLink, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "New Patients",
  description:
    "New to Bilski Dental? Learn what to expect on your first visit, how to prepare, and how to complete your patient forms online.",
};

const firstVisitSteps = [
  { n: "1", t: "Complete Your Forms", d: "Fill out new patient forms online before your appointment using our secure patient portal — saves time and ensures a smooth check-in." },
  { n: "2", t: "Arrive & Check In", d: "Arrive a few minutes early. Our front desk team will greet you, verify your information, and answer any questions." },
  { n: "3", t: "Meet Your Care Team", d: "You'll meet your hygienist and Dr. Bilski. We'll review your dental history, goals, and any concerns you have." },
  { n: "4", t: "Comprehensive Exam", d: "Digital X-rays, AI-assisted analysis, full oral exam — teeth, gums, bite, and smile all assessed." },
  { n: "5", t: "Treatment Planning", d: "Findings reviewed together. Your personalized treatment plan is explained in full — no surprises, no pressure." },
];

const whatToBring = [
  "Dental insurance card (if applicable)",
  "Photo ID",
  "List of current medications",
  "Previous dental X-rays (if available)",
  "Completed new patient forms (or arrive 15 min early)",
  "Any questions or concerns you'd like to discuss",
];

export default function NewPatientsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Welcome · Comfortable · Judgment-Free"
        title="New Patients"
        description="We love welcoming new patients to our practice. Whether you’re coming in for a routine cleaning or a complex consultation, we’ll make sure you feel informed, comfortable, and cared for."
        backgroundImage="new-patients.jpg"
        primaryButtonText="Schedule Your First Visit"
        primaryButtonHref="/contact"
      />

      {/* First visit steps */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Your First Visit</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">What to expect, step by step</h2>
          </div>
          <div className="space-y-4 max-w-3xl">
            {firstVisitSteps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-sm font-secondary font-600">{s.n}</div>
                <div className="bg-[var(--color-beige-light)] rounded-2xl p-5 border border-[var(--color-beige)] flex-1">
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{s.t}</p>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What to bring + Forms */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Checklist</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">What to bring to your first visit</h2>
              <div className="space-y-3">
                {whatToBring.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[var(--color-beige)]">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                <ClipboardList size={20} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">Complete forms online</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Save time on the day of your visit by completing your new
                patient paperwork online through our secure patient portal.
                Takes about 10 minutes.
              </p>
              <Button variant="primary" size="md" className="mb-4" asChild>
                <a
                  href="https://app.modento.io/bilskidental/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complete Forms Online <ExternalLink size={13} />
                </a>
              </Button>
              <p className="font-body text-xs text-[var(--color-muted)]">
                Can't complete online? Arrive 15 minutes early and our team will assist you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
