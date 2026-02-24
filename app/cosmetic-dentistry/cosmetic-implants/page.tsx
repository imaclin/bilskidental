import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, Smile } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Cosmetic Dental Implants",
  description:
    "Permanent, natural-looking cosmetic implants in Independence, OH. Restore your smile with titanium implants, All-on-4™, and PRGF-enhanced healing.",
};

const cosmeticBenefits = [
  { title: "Natural Aesthetics", desc: "Custom-crafted crowns match your existing teeth in color, shape, and translucency — indistinguishable from natural teeth." },
  { title: "Permanent Solution", desc: "Unlike dentures or bridges, implants are permanently anchored — no removal, no adhesives, no compromises." },
  { title: "Preserves Facial Structure", desc: "Stimulates the jawbone to prevent the bone loss and facial sagging that follow tooth extraction." },
  { title: "Full Smile Restoration", desc: "Whether replacing one tooth or an entire arch, implants restore a complete, confident smile." },
  { title: "Longest Lasting Option", desc: "With proper care, dental implants can last a lifetime — the most cost-effective long-term solution." },
  { title: "PRGF-Enhanced Healing", desc: "Our PRGF technology uses your own plasma to accelerate healing and improve implant integration." },
];

export default function CosmeticImplantsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Natural · Permanent · Transformative"
        title="Cosmetic Dental Implants"
        description="The gold standard in smile restoration. Titanium implants topped with custom-crafted crowns replace missing teeth with a result so natural, even you’ll forget they’re not real."
        backgroundImage="cosmetic-implants.jpg"
        primaryButtonText="Schedule an Implant Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="All Cosmetic Services"
        secondaryButtonHref="/cosmetic-dentistry"
      />

      {/* Benefits */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Why Implants</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">The cosmetic case for dental implants</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              Beyond function, implants deliver an aesthetic result no other
              tooth replacement can match — permanent, natural, and beautiful.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cosmeticBenefits.map((b) => (
              <div key={b.title} className="flex gap-4 p-5 rounded-2xl border border-[var(--color-beige)]">
                <div className="w-6 h-6 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-white" />
                </div>
                <div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{b.title}</p>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full arch CTA */}
      <section className="py-16 bg-[var(--color-navy)]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Smile size={22} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-1">Full-Arch Option</p>
                <h3 className="font-heading text-white text-2xl mb-2">All-on-4™ Implant Dentures</h3>
                <p className="font-body text-white/60 text-sm max-w-lg">
                  Replace an entire arch of teeth with just 4 implants. Walk in
                  with missing teeth, leave with a permanent, beautiful smile
                  the same day.
                </p>
              </div>
            </div>
            <Button variant="beige" size="lg" shadow={true} asChild>
              <Link href="/general-dentistry/general-implants">Full Implant Details <ChevronRight size={14} /></Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
