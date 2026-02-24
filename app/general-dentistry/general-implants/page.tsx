import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Shield, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Dental Implants",
  description:
    "Permanent dental implants in Independence, OH. Titanium implants, All-on-4™, and PRGF technology. Single tooth to full-arch solutions.",
};

const benefits = [
  { title: "Superior Materials", desc: "Titanium is biocompatible and fuses with bone through osseointegration — the gold standard." },
  { title: "Unmatched Stability", desc: "Secure, fixed anchor unlike dentures that shift or require adhesives." },
  { title: "Versatile Solutions", desc: "Single tooth, multiple teeth, or full-arch reconstruction. Can also stabilize existing dentures." },
  { title: "Bone Health Preservation", desc: "Stimulates and maintains jawbone, preventing deterioration that follows tooth loss." },
];

const allOn4Steps = [
  { n: "1", t: "Implant Placement", d: "Four titanium posts precisely placed in the jaw using AI-guided planning for optimal position and angle." },
  { n: "2", t: "Temporary Dentures", d: "A full set of temporary teeth fitted the same day — you leave with a functional, beautiful smile." },
  { n: "3", t: "Osseointegration", d: "Over 3–6 months, the titanium posts bond with the jawbone, forming a permanent foundation." },
  { n: "4", t: "Permanent Dentures", d: "The temporary set is replaced with your final, custom-crafted permanent dentures." },
];

export default function GeneralImplantsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Durable · Functional · Natural"
        title="Dental Implants"
        description="Titanium artificial roots anchored into the jawbone, supporting crowns, bridges, or dentures. The most natural-feeling, longest-lasting tooth replacement available — enhanced with PRGF technology for faster healing and better outcomes."
        backgroundImage="dental-implants.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Implants</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-8">The gold standard for tooth replacement</h2>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-0.5">{b.title}</p>
                      <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PRGF */}
            <div className="space-y-5">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Advanced Technology</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-4">PRGF Technology</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Plasma Rich in Growth Factors — uses your own blood to dramatically
                enhance healing and bone regeneration around implants.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Safe & Natural", desc: "No rejection risk — uses your own biology." },
                  { icon: Zap, label: "Faster Healing", desc: "Significantly reduced recovery time." },
                  { icon: Check, label: "Enhanced Bone Growth", desc: "Increases predictability of new bone formation." },
                  { icon: Check, label: "Less Inflammation", desc: "Reduced swelling and discomfort post-surgery." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-[var(--color-beige-light)] rounded-xl p-4 border border-[var(--color-beige)]">
                      <div className="w-7 h-7 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-2">
                        <Icon size={13} className="text-white" />
                      </div>
                      <p className="font-secondary font-600 text-xs text-[var(--color-navy)] mb-1">{item.label}</p>
                      <p className="font-body text-xs text-[var(--color-muted)]">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* All-on-4 */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-white border border-[var(--color-beige)] rounded-full px-3 py-1 mb-4">
                Full-Arch Solution
              </span>
              <h2 className="font-heading text-[var(--color-navy)] mb-4">All-on-4™ Implant Supported Dentures</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                A complete arch of permanent teeth using just 4 titanium posts.
                Ideal for patients with limited bone density — often eliminating
                the need for bone grafting entirely.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Permanent, fixed teeth — feels and functions like natural",
                "Faster healing than traditional implants",
                "More cost-effective than replacing each tooth individually",
                "Minimal or no bone grafting required",
                "Prevents jawbone deterioration",
                "Same-day temporary teeth placed",
              ].map((point) => (
                <div key={point} className="flex gap-3 items-start bg-white rounded-xl p-4 border border-[var(--color-beige)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="font-body text-sm text-[var(--color-muted)]">{point}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-5 text-center">The All-on-4 Process</p>
              {allOn4Steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center shrink-0 text-xs font-secondary font-600">{s.n}</div>
                  <div className="bg-white rounded-2xl p-4 border border-[var(--color-beige)] flex-1">
                    <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{s.t}</p>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="primary" size="lg" shadow={true} asChild>
                <Link href="/contact">Book an Implant Consultation <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
