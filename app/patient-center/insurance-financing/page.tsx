import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, Shield, Phone, ChevronRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Insurance & Financing",
  description:
    "Dental insurance and flexible financing at Bilski Dental Independence, OH. We work with most major PPO plans and offer multiple payment solutions.",
};

const insurancePoints = [
  "We work with most major PPO dental insurance plans",
  "Our team verifies your benefits before your appointment",
  "We file claims on your behalf — no paperwork for you",
  "Explanations of benefits reviewed together so you understand your coverage",
  "Two preventive visits per year typically covered at 100%",
  "Questions about your plan? Call us — we'll explain it clearly",
];

const financingOptions = [
  {
    icon: CreditCard,
    title: "CareCredit",
    desc: "Healthcare credit card with promotional 0% APR financing periods. Apply online in minutes and use approved credit immediately.",
  },
  {
    icon: CreditCard,
    title: "Lending Club Patient Solutions",
    desc: "Flexible payment plans designed specifically for healthcare. Fixed monthly payments with no prepayment penalties.",
  },
  {
    icon: Shield,
    title: "In-Office Payment Plans",
    desc: "We offer direct payment arrangements for qualifying patients. Ask our team about options during your consultation.",
  },
];

export default function InsuranceFinancingPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Transparent · Flexible · Accessible"
        title="Insurance & Financing"
        description="Quality dental care should be accessible. We work with most major insurance plans and offer flexible financing so cost is never a barrier to the smile you deserve."
        backgroundImage="insurance-financing.jpg"
        primaryButtonText="Ask About Your Coverage"
        primaryButtonHref="/contact"
      />

      {/* Insurance */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Dental Insurance</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">We make insurance simple</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                Navigating dental benefits can be confusing. Our team handles
                the details so you can focus on your care — not the paperwork.
              </p>
              <div className="space-y-3">
                {insurancePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--color-beige-light)] rounded-3xl p-8 border border-[var(--color-beige)]">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-3">Not sure about your coverage?</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Call us before your appointment and our team will verify your
                benefits and give you a clear picture of what's covered —
                before any work begins.
              </p>
              <Button variant="primary" size="md" asChild>
                <a href="tel:+12165244410">
                  <Phone size={14} /> (216) 524-4410
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Financing */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Financing Options</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Flexible payment solutions for every budget</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              Don't let cost delay your dental care. We offer multiple financing
              options to spread the cost of treatment into manageable monthly payments.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {financingOptions.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-2xl p-7 border border-[var(--color-beige)] flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl text-[var(--color-navy)] mb-2">{f.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1">{f.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" shadow={true} asChild>
              <Link href="/contact">Discuss Payment Options <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
