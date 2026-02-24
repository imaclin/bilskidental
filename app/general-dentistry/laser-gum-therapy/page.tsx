import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Check, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Laser Gum Therapy",
  description:
    "First of its kind in Northeast Ohio — high-intensity laser periodontal therapy at Bilski Dental. Removes diseased tissue, eliminates bacteria, and promotes regeneration.",
};

const advantages = [
  { title: "First in the Region", desc: "Dr. Bilski pioneered high-intensity laser gum therapy in Northeast Ohio and co-authored the leading textbook on the procedure." },
  { title: "Precision Targeting", desc: "Lasers target only diseased tissue, leaving healthy gum tissue completely intact." },
  { title: "Eliminates Bacteria", desc: "The laser kills bacteria at the source — far more effectively than traditional scaling and root planing." },
  { title: "Promotes Regeneration", desc: "Stimulates healthy gum tissue growth rather than simply removing diseased areas." },
  { title: "Faster Recovery", desc: "Significantly shorter healing time compared to traditional periodontal surgery with scalpels." },
  { title: "Minimal Discomfort", desc: "Gentle enough that most patients report minimal pain during and after the procedure." },
];

const vsTraditional = [
  { attr: "Precision", laser: "Targets only diseased tissue", traditional: "Broad removal of tissue" },
  { attr: "Bleeding", laser: "Minimal to none", traditional: "Significant" },
  { attr: "Recovery", laser: "Days", traditional: "Weeks" },
  { attr: "Discomfort", laser: "Minimal", traditional: "Moderate to significant" },
  { attr: "Bone regeneration", laser: "Stimulated", traditional: "Not addressed" },
];

export default function LaserGumTherapyPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Precise · Effective · Regenerative"
        title="Laser Gum Therapy"
        description="High-intensity laser periodontal therapy removes diseased gum tissue, eliminates harmful bacteria, and promotes healthy regeneration — all with minimal discomfort and recovery time."
        backgroundImage="laser-gum-therapy.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All General Services"
        secondaryButtonHref="/general-dentistry"
      />

      {/* Advantages */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Choose Laser</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">The advantages of laser gum therapy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4 p-5 rounded-2xl border border-[var(--color-beige)]">
                <div className="w-7 h-7 rounded-lg bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={13} className="text-white" />
                </div>
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{a.title}</p>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">How It Compares</p>
              <h2 className="font-heading text-[var(--color-navy)]">Laser vs. traditional gum surgery</h2>
            </div>
            <div className="rounded-2xl border border-[var(--color-beige)] overflow-hidden">
              <div className="grid grid-cols-3 bg-[var(--color-navy)] text-white text-xs font-secondary font-600 uppercase tracking-wider">
                <div className="p-4 border-r border-white/10"></div>
                <div className="p-4 border-r border-white/10 flex items-center gap-2">
                  <Zap size={12} /> Laser
                </div>
                <div className="p-4">Traditional Surgery</div>
              </div>
              {vsTraditional.map((row, i) => (
                <div
                  key={row.attr}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F5F2]"}`}
                >
                  <div className="p-4 font-secondary font-600 text-xs text-[var(--color-navy)] border-r border-[var(--color-beige)]">{row.attr}</div>
                  <div className="p-4 text-xs font-body text-[var(--color-navy)] font-medium border-r border-[var(--color-beige)] flex items-center gap-1.5">
                    <Check size={10} className="text-[var(--color-navy)] shrink-0" /> {row.laser}
                  </div>
                  <div className="p-4 text-xs font-body text-[var(--color-muted)]">{row.traditional}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="primary" size="lg" shadow={true} asChild>
                <Link href="/contact">Book a Laser Gum Consultation <ChevronRight size={14} /></Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
