"use client";

import Link from "next/link";
import { ChevronRight, Sparkles, Shield, Smile, Zap, Star, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const services = [
  {
    icon: Sparkles,
    label: "Clear Aligners",
    description: "Virtually invisible, custom-made aligners for mild to moderate orthodontic needs. Invisalign® and OrthoFX NiTime available.",
    href: "/cosmetic-dentistry/clear-aligners",
    tag: "Cosmetic",
  },
  {
    icon: Smile,
    label: "Dental Veneers",
    description: "Same-Day Provánce®, Porcelain, and Snap-On Smile® veneers. Enhance color, shape, and length — stain resistant, lasting 15+ years.",
    href: "/cosmetic-dentistry/dental-veneers",
    tag: "Cosmetic",
  },
  {
    icon: Shield,
    label: "Dental Implants",
    description: "Titanium implants that look, feel, and function like natural teeth. Single tooth, multiple, or All-on-4™ full-arch solutions.",
    href: "/general-dentistry/general-implants",
    tag: "General",
  },
  {
    icon: Zap,
    label: "Teeth Whitening",
    description: "Professional in-office and custom at-home whitening treatments. Safely brighten your smile multiple shades in one visit.",
    href: "/cosmetic-dentistry/teeth-whitening",
    tag: "Cosmetic",
  },
  {
    icon: Star,
    label: "Dental Crowns",
    description: "90-minute same-day crowns available. Porcelain, ceramic, and metal alloy options matched to your natural teeth.",
    href: "/cosmetic-dentistry/crowns",
    tag: "General",
  },
  {
    icon: Layers,
    label: "Root Canal",
    description: "Comfortable, effective root canal therapy to save your natural tooth. Removes infection and relieves pain with precision.",
    href: "/general-dentistry/root-canal",
    tag: "General",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HomeServices() {
  return (
    <section className="py-24 bg-white" aria-label="Featured Services">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-[var(--color-navy)] mb-4">
            Comprehensive care, under one roof
          </h2>
          <p className="font-body text-[var(--color-muted)] leading-relaxed">
            From routine cleanings to full smile transformations — every service
            delivered with advanced technology and a personal touch.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} variants={cardVariants}>
                <Link
                  href={s.href}
                  className="group flex flex-col h-full p-7 rounded-2xl border border-[var(--color-beige)] hover:border-[var(--color-navy)] hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-beige-light)] flex items-center justify-center group-hover:bg-[var(--color-navy)] transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[var(--color-navy)] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <span className="text-[10px] font-secondary font-600 uppercase tracking-wider text-[var(--color-muted)] border border-[var(--color-beige)] rounded-full px-2.5 py-1">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-[var(--color-navy)] mb-2">
                    {s.label}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-5">
                    {s.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-secondary font-600 text-[var(--color-navy)] group-hover:gap-2 transition-all">
                    Learn more <ChevronRight size={14} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/general-dentistry"
            className="inline-flex items-center gap-2 text-sm font-secondary font-600 text-[var(--color-navy)] hover:gap-3 transition-all border-b border-[var(--color-navy)] pb-0.5"
          >
            View all services <ChevronRight size={14} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
