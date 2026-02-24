import type { Metadata } from "next";
import Link from "next/link";
import { Check, AlertTriangle, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Root Canal Therapy",
  description:
    "Comfortable, effective root canal therapy in Independence, OH. Save your natural tooth, eliminate infection, and restore your oral health.",
};

const reasons = [
  { title: "Infection Removal", desc: "Eliminates infected pulp caused by deep decay, cracks, or chips — stopping the source of pain." },
  { title: "Tooth Preservation", desc: "Saves your natural tooth, avoiding extraction and the need for implants or bridges." },
  { title: "Comfortable Procedure", desc: "Performed under local anesthesia — modern root canals are no more uncomfortable than a filling." },
  { title: "Prevents Spread", desc: "Stops infection from reaching neighboring teeth, gums, or jawbone." },
  { title: "Restores Oral Health", desc: "Leads to a healthier smile and improved overall well-being." },
];

const symptoms = [
  "Persistent toothache or pressure",
  "Prolonged sensitivity to hot or cold",
  "Darkening or discoloration of the tooth",
  "Swelling or tenderness in nearby gums",
  "Persistent bad taste or drainage",
  "Visible chip or crack in the tooth",
];

const sedation = [
  { name: "Local Anesthesia", desc: "Targeted numbness ensures a completely pain-free procedure." },
  { name: "Oral Sedation", desc: "Pill-based relaxation for anxious patients — arrive calm, leave comfortable." },
  { name: "IV Conscious Sedation", desc: "Deeper sedation with rapid onset and amnesic effects for total peace of mind." },
];

export default function RootCanalPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Natural · Restorative · Comfortable"
        title="Root Canal Therapy"
        description="Root canal therapy treats infection in the innermost part of your tooth — removing damaged pulp, cleaning the canal system, and sealing the tooth. It relieves pain and saves your natural tooth."
        backgroundImage="root-canal.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      {/* Why + Symptoms */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Root Canal</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-8">5 reasons to choose root canal therapy</h2>
              <div className="space-y-4">
                {reasons.map((r) => (
                  <div key={r.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Warning Signs</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">You may need a root canal if you have</h2>
              <div className="space-y-3 mb-6">
                {symptoms.map((s) => (
                  <div key={s} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-beige-light)] border border-[var(--color-beige)] flex items-center justify-center shrink-0">
                      <Check size={10} className="text-[var(--color-navy)]" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{s}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-secondary font-600 text-sm text-amber-800 mb-1">Don't wait</p>
                  <p className="font-body text-xs text-amber-700 leading-relaxed">
                    Untreated tooth infections can lead to abscesses, severe pain,
                    bone damage, and potentially life-threatening complications.
                    Early treatment saves teeth and protects your health.
                  </p>
                </div>
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
            <h2 className="font-heading text-[var(--color-navy)]">Sedation options for your comfort</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {sedation.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-[var(--color-beige)]">
                <h3 className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-2">{s.name}</h3>
                <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="primary" size="lg" shadow={true} asChild>
              <Link href="/contact">Schedule Your Visit <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
