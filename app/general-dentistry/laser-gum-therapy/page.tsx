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

      {/* Description */}
      <section className="py-16 bg-white">
        <Container size="md">
          <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Laser Gum Therapy</p>
          <p className="font-body text-[var(--color-muted)] leading-relaxed">
            Laser Gum Therapy, also known as laser periodontal therapy, is a modern dental procedure that utilizes a high-intensity laser — the first of its kind in our region — to target and remove inflamed gum tissue around the tooth's root. This technique effectively eliminates bacteria and promotes the regeneration of healthy gums. The precision of the laser ensures that only diseased tissue is treated, preserving healthy gum areas and accelerating the healing process.
          </p>
        </Container>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-white pt-8">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Choose Laser</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-3">The advantages of laser gum therapy</h2>
            <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
              Opting for Laser Gum Therapy at Bilski Dental provides several key benefits:
            </p>
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

      {/* Laser Usage + Technology */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Laser Usage</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-4">Therapeutic & aesthetic applications</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                Lasers in dentistry are used for therapeutic purposes, treating conditions like gum disease by targeting bacteria and promoting gum tissue regeneration. They're also employed in gum reshaping (gum lifting) procedures for aesthetic enhancement, offering precise sculpting of the gum line with minimal discomfort and faster healing compared to traditional methods.
              </p>
            </div>
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Laser Technology</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-4">Maintain gum health</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                Laser Gum Therapy is not just about treating gum disease; it's also about improving the overall aesthetics of your gums.
              </p>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                At Bilski Dental, we believe in staying ahead of the curve by investing in new technologies that bring significant improvements to dental care. Our recent acquisition of this unique laser exemplifies our commitment to providing the most advanced and effective treatments available.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
