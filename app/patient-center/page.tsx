import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, FileText, CreditCard, Star, Quote, ChevronRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Patient Center",
  description:
    "Everything new and returning patients need at Bilski Dental — online forms, post-op instructions, insurance & financing info, and easy scheduling.",
};

const steps = [
  {
    n: "01",
    title: "Thorough Consultation",
    description: "We review your dental history, concerns, and goals in a relaxed, judgment-free conversation.",
  },
  {
    n: "02",
    title: "Comprehensive Exam",
    description: "Teeth, gums, bones, and bite assessed with digital X-rays and AI-assisted diagnostics.",
  },
  {
    n: "03",
    title: "Personalized Treatment Plan",
    description: "Findings reviewed together — every question answered before any work begins.",
  },
  {
    n: "04",
    title: "Ongoing Partnership",
    description: "Each visit is designed to be informative, comfortable, and consistently positive.",
  },
];

const quickLinks = [
  {
    icon: ClipboardList,
    title: "New Patient Forms",
    description: "Complete your forms online before arriving — saves time and ensures a smooth first visit.",
    action: "Complete Forms Online",
    href: "https://app.modento.io/bilskidental/sign-up",
    external: true,
  },
  {
    icon: CreditCard,
    title: "Insurance & Financing",
    description: "We work with most major insurance plans and offer flexible payment solutions for all budgets.",
    action: "View Options",
    href: "/patient-center/insurance-financing",
    external: false,
  },
  {
    icon: FileText,
    title: "Post-Op Instructions",
    description: "Download post-operative care guides for surgery, pain control, and recovery procedures.",
    action: "Download PDFs",
    href: "/patient-center/forms",
    external: false,
  },
];

const testimonials = [
  {
    name: "Linda S.",
    text: "Everything was explained in layman terms. Great to have someone explain insurance better than our own benefits manager. I finally understand my coverage.",
    stars: 5,
  },
  {
    name: "Gayle S.",
    text: "Very friendly, PAIN FREE!! Dr. Bilski was thorough and completed everything in one appointment. I couldn't believe how quickly it was done.",
    stars: 5,
  },
  {
    name: "Tom E.",
    text: "High quality service. Got two fillings replaced and didn't feel a single thing. Great experience with a very friendly, professional staff.",
    stars: 5,
  },
];

export default function PatientCenterPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Exceptional · Personalized · Refreshing"
        title="Patient Center"
        description="Your comfort, safety, and satisfaction are our top priorities. Everything you need — before, during, and after your visit — in one place."
        backgroundImage="patient-center.jpg"
        primaryButtonText="Schedule an Appointment"
        primaryButtonHref="/contact"
      />

      {/* Quick links */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Patient Resources</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              Everything you need for a seamless experience — forms, insurance
              info, and post-op guidance at your fingertips.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {quickLinks.map((q) => {
              const Icon = q.icon;
              return (
                <div key={q.title} className="flex flex-col p-7 rounded-2xl border border-[var(--color-beige)] bg-white">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-[var(--color-navy)] mb-2">{q.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-6">{q.description}</p>
                  {q.external ? (
                    <a
                      href={q.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-secondary font-600 text-white hover:gap-2.5 transition-all !text-white"
                    >
                      {q.action} <ExternalLink size={13} />
                    </a>
                  ) : (
                    <Link
                      href={q.href}
                      className="inline-flex items-center gap-1.5 text-sm font-secondary font-600 text-[var(--color-navy)] hover:gap-2.5 transition-all"
                    >
                      {q.action} <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* New patient note */}
          <div className="mt-8 p-6 bg-[var(--color-beige-light)] rounded-2xl border border-[var(--color-beige)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
              <ClipboardList size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">
                Can't complete forms online?
              </p>
              <p className="font-body text-xs text-[var(--color-muted)]">
                Arrive 15 minutes early and our team will assist you. You can
                also call us at{" "}
                <a href="tel:+12165244410" className="text-[var(--color-navy)] font-medium">(216) 524-4410</a>{" "}
                for help.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24 bg-[var(--color-navy)]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-3">Our Philosophy</p>
            <h2 className="font-heading text-white">Every visit, thoughtfully designed</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="bg-white/8 border border-white/10 rounded-2xl p-6">
                <p className="font-heading text-4xl text-white/10 mb-3">{s.n}</p>
                <h3 className="font-secondary font-600 text-sm text-white mb-2">{s.title}</h3>
                <p className="font-body text-xs text-white/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--color-navy)] text-[var(--color-navy)]" />
              ))}
            </div>
            <h2 className="font-heading text-[var(--color-navy)]">What our patients say</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col p-6 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
                <Quote size={18} className="text-[var(--color-beige)] mb-4" />
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-5">{t.text}</p>
                <div className="flex items-center justify-between">
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">{t.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={11} className="fill-[var(--color-navy)] text-[var(--color-navy)]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
