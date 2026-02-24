"use client";

import { Brain, Zap, Heart, Globe, Award, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const items = [
  {
    icon: Brain,
    title: "Advanced AI Dentistry",
    description:
      "AI-powered X-ray diagnostics and precision treatment planning. See potential results before treatment begins.",
  },
  {
    icon: Zap,
    title: "Same-Day Crowns",
    description:
      "90-minute same-day crowns — no second visits, no temporaries. Complete restorations in a single appointment.",
  },
  {
    icon: Heart,
    title: "CARE Esthetics",
    description:
      "Dental care and facial aesthetics under one roof — Botox, micro-needling, PRF, and laser skin resurfacing.",
  },
  {
    icon: Award,
    title: "First in the Region",
    description:
      "First laser gum therapy of its kind in Northeast Ohio. Co-authored the leading laser dentistry textbook.",
  },
  {
    icon: Globe,
    title: "Bilingual Team",
    description:
      "English and Spanish-speaking staff. Hablamos español y estamos encantados de atenderlos.",
  },
  {
    icon: Clock,
    title: "100+ Year Legacy",
    description:
      "Rooted in Independence, OH since the early 1900s. A trusted community practice across generations.",
  },
];

export function HomeDifferentiators() {
  return (
    <section className="py-24 bg-[var(--color-beige-light)]" aria-label="Why Bilski Dental">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-[var(--color-navy)] mb-5">
              Dentistry unlike anything else in Northeast Ohio
            </h2>
            <p className="font-body text-[var(--color-muted)] leading-relaxed mb-6">
              Dr. Thomas Bilski has spent 38+ years pushing the boundaries of
              what dental care can be — blending medical precision with artistic
              vision to transform smiles and lives.
            </p>
            <blockquote className="border-l-4 border-[var(--color-navy)] pl-5 py-1">
              <p className="font-heading text-lg text-[var(--color-navy)] italic leading-snug">
                "Dentistry is a blend of medicine and artistry, coming together
                to enhance and develop self-esteem."
              </p>
              <cite className="text-xs font-body text-[var(--color-muted)] not-italic mt-2 block">
                — Dr. Thomas Bilski, Owner & Lead Dentist
              </cite>
            </blockquote>
          </motion.div>

          {/* Right: grid of differentiators */}
          <motion.div
            className="grid sm:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-[var(--color-beige)]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[var(--color-navy)] flex items-center justify-center mb-3">
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
