import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ScanLine, Target, Eye, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Advanced AI Dentistry",
  description:
    "AI-powered dental diagnostics and treatment planning at Bilski Dental. Enhanced X-ray analysis, predictive outcomes, and precision implant placement in Independence, OH.",
};

const diagnostics = [
  {
    icon: ScanLine,
    title: "Enhanced X-Ray Analysis",
    description: "AI algorithms analyze density variations in teeth to detect cavities, fractures, and anomalies that the human eye may miss — catching problems earlier for less invasive treatment.",
  },
  {
    icon: Eye,
    title: "Visual Markings",
    description: "AI marks problem areas on X-rays in distinct colors, making it immediately clear to both dentist and patient exactly where issues exist and why treatment is recommended.",
  },
  {
    icon: Brain,
    title: "Imaging Integration",
    description: "Seamlessly enhances the clarity and interpretation of all dental imaging systems — providing a more complete picture of your oral health.",
  },
];

const treatment = [
  {
    title: "Implant Dentistry",
    description: "AI analyzes jawbone structure and density to plan the exact location, angle, and depth for each implant post — maximizing stability and minimizing surgical risk.",
  },
  {
    title: "Invisalign & Clear Aligners",
    description: "AI designs the precise placement of aligner attachment buttons to ensure each movement is biomechanically optimized — fewer refinements, faster results.",
  },
  {
    title: "Outcome Forecasting",
    description: "See potential results before treatment begins. AI models let you visualize your post-treatment smile, helping you feel confident in your decision.",
  },
];

export default function AdvancedAIDentistryPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      {/* Header - Navy themed hero with background image */}
      <section className="py-20 bg-[var(--color-navy)] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-images/ai-dentistry.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[var(--color-navy)] opacity-80"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-white mb-3">
            Precision · Accuracy · Transparency
          </p>
          <h1 className="font-heading text-white max-w-2xl mb-5">
            Advanced AI Dentistry
          </h1>
          <p className="font-body text-white/80 max-w-xl leading-relaxed mb-8">
            Bilski Dental integrates artificial intelligence into diagnostics and
            treatment planning — delivering greater accuracy, improved patient
            understanding, and better long-term outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="beige" size="md" shadow={true} asChild>
              <Link href="/contact">Schedule a Consultation <ChevronRight size={14} /></Link>
            </Button>
            <Button variant="ctaSecondary" size="md" asChild>
              <Link href="/meet-us">Meet Dr. Bilski</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* AI Diagnostics */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">AI in Diagnostics</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-4">See more. Catch more. Treat less.</h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed">
              Our AI diagnostic tools analyze your X-rays with machine precision,
              identifying issues earlier when treatment is simpler, less invasive,
              and less costly.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {diagnostics.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="p-7 rounded-2xl border border-[var(--color-beige)] bg-white">
                  <div className="w-11 h-11 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg text-[var(--color-navy)] mb-2">{d.title}</h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* AI Treatment Planning */}
      <section className="py-24 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">AI in Treatment Planning</p>
              <h2 className="font-heading text-[var(--color-navy)] mb-5">Precision from plan to procedure</h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-8">
                AI doesn't just find problems — it helps solve them with greater
                accuracy. From implant placement to orthodontic planning, every
                step is guided by data.
              </p>
              <div className="space-y-5">
                {treatment.map((t) => (
                  <div key={t.title} className="bg-white rounded-2xl p-5 border border-[var(--color-beige)]">
                    <div className="flex gap-3 mb-2">
                      <Target size={16} className="text-[var(--color-navy)] shrink-0 mt-0.5" />
                      <p className="font-secondary font-600 text-sm text-[var(--color-navy)]">{t.title}</p>
                    </div>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed pl-7">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantage summary */}
            <div className="bg-[var(--color-navy)] rounded-3xl p-8 text-white">
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-4">The Bilski AI Advantage</p>
              <h3 className="font-heading text-white text-2xl mb-6">What this means for you</h3>
              <div className="space-y-4">
                {[
                  { n: "1", t: "More Accurate Diagnosis", d: "Conditions caught earlier, when they're easier and cheaper to treat." },
                  { n: "2", t: "You Stay Informed", d: "Visual AI explanations help you understand exactly what's happening in your mouth." },
                  { n: "3", t: "Fewer Surprises", d: "AI forecasting shows potential outcomes before treatment begins." },
                  { n: "4", t: "Better Long-Term Results", d: "Precision planning leads to longer-lasting, more predictable outcomes." },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-secondary font-600 text-white">{item.n}</div>
                    <div>
                      <p className="font-secondary font-600 text-sm text-white mb-0.5">{item.t}</p>
                      <p className="font-body text-xs text-white/60 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Button variant="beige" size="md" asChild>
                  <Link href="/contact">Experience AI Dentistry <ChevronRight size={14} /></Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
