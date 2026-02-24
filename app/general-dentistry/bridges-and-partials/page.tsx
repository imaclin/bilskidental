import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Dental Bridges & Partial Dentures",
  description:
    "Dental bridges and partial dentures in Independence, OH. Fill gaps, prevent tooth migration, and restore your smile, bite, and facial structure.",
};

const bridgeBenefits = [
  { title: "Aesthetic Restoration", desc: "Natural-looking prosthetics crafted to blend seamlessly with your existing teeth." },
  { title: "Enhanced Functionality", desc: "Restore unimpeded speech and comfortable eating after tooth loss." },
  { title: "Facial Structure Maintenance", desc: "Prevents the sagging of facial muscles that occurs with missing teeth." },
  { title: "Prevention of Tooth Migration", desc: "Stops surrounding teeth from shifting into the gap and causing misalignment." },
];

const bridgeSteps = [
  { n: "1", t: "Preparation Phase", d: "Abutment teeth reshaped to anchor the bridge. Impressions taken and temporary bridge placed while permanent one is fabricated." },
  { n: "2", t: "Health Evaluation", d: "Gum health assessed and the bridge framework tried in for proper fit before final fabrication." },
  { n: "3", t: "Bridge Finalization", d: "Precise adjustments made, permanent bridge cemented, and home care guidance provided." },
];

const partialSteps = [
  { n: "1", t: "Initial Consultation", d: "Detailed impressions of both dental arches taken to create accurate models." },
  { n: "2", t: "Fabrication", d: "Models sent to the dental lab for custom partial denture construction — typically 2–3 weeks." },
  { n: "3", t: "Fitting Session", d: "Partial fitted and adjusted for comfort and aesthetics. Lifespan: 5–7 years with proper care." },
];

export default function BridgesPartialsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Functional · Affordable · Natural"
        title="Bridges & Partial Dentures"
        description="Missing teeth affect more than your smile — they shift adjacent teeth, alter your bite, and change your facial structure. Bridges and partial dentures restore both function and aesthetics."
        backgroundImage="bridges-partials.jpg"
        primaryButtonText="Schedule a Free Appointment"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      {/* Bridge section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-14">
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              Dental bridges and partial dentures provide reliable solutions for adults facing the challenges of missing teeth. Unaddressed, gaps left by missing teeth can lead to adjacent teeth shifting, negatively affecting your mouth's aesthetics and function. This shifting can potentially lead to bite misalignment and difficulty with chewing or speaking. Dental bridges and partial dentures fill these gaps, preventing the neighboring teeth from moving and maintaining the natural alignment of your jaw and bite.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Dental Bridges</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Bridge the gap permanently</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                A dental bridge spans the gap left by one or more missing teeth,
                anchored to adjacent teeth (abutments) on either side. Custom
                crafted to match your natural tooth color and shape.
              </p>
              <div className="space-y-4 mb-8">
                {bridgeBenefits.map((b) => (
                  <div key={b.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-0.5">{b.title}</p>
                      <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-5">Bridge Procedure</p>
              <div className="space-y-4">
                {bridgeSteps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-xs font-secondary font-600">{s.n}</div>
                    <div className="bg-[var(--color-beige-light)] rounded-2xl p-4 border border-[var(--color-beige)] flex-1">
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{s.t}</p>
                      <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Partial dentures */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Removable Partial Dentures</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">A versatile, cost-effective solution</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Removable Partial Dentures are a versatile and cost-effective solution for those looking to restore their smile and functionality after tooth loss. Whether you're missing a few teeth due to injury, decay, or age, our custom-designed partial dentures offer a comfortable and aesthetic option.
              </p>
              <div className="p-5 bg-white rounded-2xl border border-[var(--color-beige)]">
                <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">Expected Lifespan</p>
                <p className="font-body text-xs text-[var(--color-muted)]">5–7 years with proper care and periodic adjustments for optimal comfort.</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-5">Partial Denture Procedure</p>
              <div className="space-y-4">
                {partialSteps.map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-xs font-secondary font-600">{s.n}</div>
                    <div className="bg-white rounded-2xl p-4 border border-[var(--color-beige)] flex-1">
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{s.t}</p>
                      <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-beige)] mb-8">
              <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">Reliable, Personalized Care</p>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                By choosing Bilski Dental for your dental bridge or partial denture needs, you're opting for a blend of professional expertise, personalized care, and innovative dental solutions designed to restore not only your smile but also your confidence and oral health.
              </p>
            </div>
            <div className="text-center">
              <Button variant="primary" size="lg" shadow={true} asChild>
                <Link href="/contact">Schedule a Free Consultation <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
