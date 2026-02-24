import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Dentures",
  description:
    "Traditional and digital full and partial dentures in Independence, OH. Natural-looking, comfortable tooth replacement that restores your smile and confidence.",
};

export default function DenturesPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Traditional · Functional · Restorative"
        title="Dentures"
        description="Modern dentures are more natural-looking and comfortable than ever. Whether you need to replace a few teeth or all of them, we craft custom solutions that restore your smile, speech, and confidence."
        backgroundImage="dentures.jpg"
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
      />

      {/* Types */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Types Available</p>
            <h2 className="font-heading text-[var(--color-navy)]">Full & partial dentures tailored to you</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Full Dentures */}
            <div className="p-8 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-white border border-[var(--color-beige)] rounded-full px-3 py-1 mb-5 inline-block">Complete Replacement</span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-4">Full Dentures</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Ideal for patients requiring complete tooth replacement in the upper
                or lower arch. Crafted for natural appearance, restored speech, and
                comfortable eating.
              </p>
              <div className="space-y-3">
                {[
                  { name: "Conventional Dentures", desc: "Placed after the healing period following extractions — the traditional, well-proven approach." },
                  { name: "Immediate Dentures", desc: "Placed directly after extraction so you're never without teeth during healing." },
                ].map((d) => (
                  <div key={d.name} className="bg-white rounded-xl p-4 border border-[var(--color-beige)]">
                    <p className="font-secondary font-600 text-xs text-[var(--color-navy)] mb-1">{d.name}</p>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Partial Dentures */}
            <div className="p-8 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)]">
              <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] bg-white border border-[var(--color-beige)] rounded-full px-3 py-1 mb-5 inline-block">Partial Replacement</span>
              <h3 className="font-heading text-2xl text-[var(--color-navy)] mb-4">Partial Dentures</h3>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                Perfect when some natural teeth remain. Custom-designed to blend
                seamlessly with your existing teeth while restoring full function
                and aesthetics.
              </p>
              <div className="space-y-3">
                {[
                  { name: "Removable Partials", desc: "Versatile and cost-effective. Custom clasps blend with natural teeth; easily removed for cleaning." },
                  { name: "Fixed Bridges", desc: "Permanently anchored to adjacent teeth for a stable, natural-feeling restoration." },
                ].map((d) => (
                  <div key={d.name} className="bg-white rounded-xl p-4 border border-[var(--color-beige)]">
                    <p className="font-secondary font-600 text-xs text-[var(--color-navy)] mb-1">{d.name}</p>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Implant alternative */}
      <section className="py-16 bg-[var(--color-navy)]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-2">Also Consider</p>
              <h3 className="font-heading text-white text-3xl mb-2">Implant-Supported Dentures</h3>
              <p className="font-body text-white/60 text-sm max-w-lg">
                For patients seeking a permanent solution, implant-supported dentures
                provide superior stability, bone preservation, and a completely
                natural feel. Ask us about All-on-4™ options.
              </p>
            </div>
            <Button variant="beige" size="lg" shadow={true} asChild>
              <Link href="/general-dentistry/general-implants">Explore Implants <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
