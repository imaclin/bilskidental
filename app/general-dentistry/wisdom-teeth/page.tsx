import type { Metadata } from "next";
import Link from "next/link";
import { Check, AlertTriangle, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Wisdom Teeth Extraction",
  description: "Expert wisdom teeth extraction in Independence, OH. Gentle, precise removal with sedation options for maximum comfort.",
};

const reasons = [
  "Impacted wisdom teeth unable to fully emerge",
  "Crowding or damage to adjacent teeth",
  "Recurring pain, swelling, or infection",
  "Partial eruption creating a bacterial trap",
  "Cysts or damage to surrounding bone",
  "Preventive removal before problems develop",
];

const sedation = [
  { name: "Local Anesthesia", desc: "Targeted numbness — the standard option for most extractions." },
  { name: "Oral Sedation", desc: "Pill-based relaxation so you arrive calm and comfortable." },
  { name: "IV Conscious Sedation", desc: "Deeper sedation with amnesic effects — little to no memory of the procedure." },
];

export default function WisdomTeethPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Gentle · Precise · Comfortable"
        title="Wisdom Teeth Extraction"
        description="Third molars typically appear between ages 17–25. When they become impacted, crowd existing teeth, or cause recurring problems, removal is the safest long-term solution."
        backgroundImage="wisdom-teeth.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="font-body text-[var(--color-muted)] leading-relaxed mb-3">
              Wisdom teeth, commonly referred to as third molars, usually make their appearance between the ages of 17 and 25. While not everyone requires their wisdom teeth to be removed, extraction is often recommended in specific circumstances to prevent potential complications.
            </p>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              These complications include impaction, where the teeth do not fully erupt through the gum line, leading to pain, infection, or damage to adjacent teeth. Additionally, crowded wisdom teeth can disrupt the alignment of other teeth, necessitating orthodontic treatment.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">When Removal Is Needed</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Common reasons for extraction</h2>
              <div className="space-y-3 mb-8">
                {reasons.map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="font-body text-sm text-[var(--color-muted)]">{r}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-secondary font-600 text-sm text-amber-800 mb-1">Don't wait for pain</p>
                  <p className="font-body text-xs text-amber-700 leading-relaxed">
                    Wisdom teeth can cause damage before symptoms appear. A
                    dental X-ray at your routine exam will show whether removal
                    is advisable.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">What to Expect</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-6">Your extraction, step by step</h2>
              <div className="space-y-4">
                {[
                  { n: "1", t: "Pre-Surgery Consultation", d: "Before your procedure, you'll have a detailed discussion with Dr. Bilski about what to anticipate before, during, and after your wisdom tooth extraction to ensure you're fully informed and prepared." },
                  { n: "2", t: "Anesthesia for Comfort", d: "A local anesthetic is administered to numb the area around your wisdom teeth. For the removal of multiple wisdom teeth at once, a general anesthetic may be used, allowing you to sleep through the procedure." },
                  { n: "3", t: "The Extraction", d: "Gum tissue is carefully opened over the affected tooth, any obstructing bone is removed, and then the wisdom tooth is extracted. Stitches may be applied post-extraction to aid in healing." },
                  { n: "4", t: "Tailored Approach", d: "The complexity of extraction varies based on whether the tooth is fully erupted, partially erupted, or impacted. A tailored approach ensures the best possible outcome with minimal discomfort." },
                ].map((s) => (
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

      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Comfort First</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">Sedation options available</h2>
            <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
              Sedation dentistry at our clinic offers a stress-free dental experience tailored to each patient's anxiety level and comfort needs. Our diverse sedation options include oral sedation, which uses a simple pill for ease and comfort, IV conscious sedation for a deeper sedation level with rapid onset and amnesic effects, and local anesthesia for targeted numbness during specific treatments.
            </p>
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
              <Link href="/contact">Schedule Your Consultation <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
