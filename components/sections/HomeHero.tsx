"use client";

import Link from "next/link";
import { Phone, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function HomeHero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white"
      aria-label="Hero"
    >
      {/* Background beige shape */}
      <div
        className="absolute right-0 top-0 h-full w-[45%] bg-[var(--color-beige)] rounded-l-[80px] hidden lg:block"
        aria-hidden="true"
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-navy) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-0">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-beige-light)] rounded-full px-4 py-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-[var(--color-navy)] text-[var(--color-navy)]"
                  />
                ))}
              </div>
              <span className="text-xs font-secondary font-600 text-[var(--color-navy)] tracking-wide">
                4.9 · Trusted by 200+ patients
              </span>
            </div>

            <h1 className="font-heading text-[var(--color-navy)] mb-6 leading-[1.1]">
              Home of the famous
              <br />
              <span className="italic text-[var(--color-navy)]" style={{ textDecoration: "underline", textUnderlineOffset: "4px", textDecorationColor: "var(--color-blue-accent)", textDecorationThickness: "2px" }}>Bilski Smile</span>
            </h1>

            <p className="font-body text-base text-[var(--color-muted)] leading-relaxed mb-8 max-w-lg">
              Comprehensive cosmetic and general dentistry in Independence, OH.
              State-of-the-art care, personalized to you — for over{" "}
              <strong className="text-[var(--color-navy)] font-semibold">
                100 years
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button variant="primary" size="lg" shadow={true} asChild>
                <Link href="/contact">
                  Schedule Appointment
                  <ChevronRight size={16} />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/meet-us">Meet Dr. Bilski</Link>
              </Button>
            </div>

            {/* Quick trust row */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[var(--color-beige)]">
              {[
                { label: "100+ Years", sub: "Serving Independence, OH" },
                { label: "38+ Years", sub: "Dr. Bilski's Experience" },
                { label: "4.9 Stars", sub: "Google Reviews" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-xl text-[var(--color-navy)]">
                    {stat.label}
                  </p>
                  <p className="text-xs font-body text-[var(--color-muted)]">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual card stack */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main image placeholder */}
            <div className="relative w-[400px] h-[500px] rounded-[32px] bg-[var(--color-navy)]/10 overflow-hidden flex items-center justify-center">
              <span className="font-heading text-2xl text-[var(--color-navy)]/30 text-center px-8 leading-snug">
                Hero Image
                <br />
                <span className="text-base">
                  (Add photo of Dr. Bilski or patient)
                </span>
              </span>
            </div>

            {/* Floating card — phone */}
            <div className="absolute -left-8 bottom-16 bg-white rounded-2xl p-4 shadow-lg border border-[var(--color-beige)] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                <Phone size={16} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-body text-[var(--color-muted)]">
                  Call us today
                </p>
                <a
                  href={`tel:${SITE.phonePlain}`}
                  className="text-sm font-secondary font-600 text-[var(--color-navy)]"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Floating card — hours */}
            <div className="absolute -right-4 top-16 bg-white rounded-2xl p-4 shadow-lg border border-[var(--color-beige)]">
              <p className="text-[10px] font-body text-[var(--color-muted)] mb-1">
                Office Hours
              </p>
              <p className="text-xs font-secondary font-600 text-[var(--color-navy)]">
                Mon–Thu 8AM–5PM
              </p>
              <p className="text-xs font-secondary font-600 text-[var(--color-navy)]">
                Fri 8:30AM–1:30PM
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
