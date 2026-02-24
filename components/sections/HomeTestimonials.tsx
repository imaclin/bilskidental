"use client";

import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Linda S.",
    text: "Everything was explained in layman terms. Great to have someone explain insurance better than our own benefits manager. I finally understand my coverage.",
    rating: 5,
  },
  {
    name: "Gayle S.",
    text: "Very friendly, PAIN FREE! Dr. Bilski was thorough and completed everything in one appointment. I couldn't believe how quickly it was done.",
    rating: 5,
  },
  {
    name: "Tom E.",
    text: "High quality service. Got two fillings replaced and didn't feel a single thing. Great experience with a very friendly, professional staff.",
    rating: 5,
  },
  {
    name: "Maria R.",
    text: "The team is wonderful. They speak Spanish which made me feel so comfortable. Dr. Bilski is incredibly skilled and patient.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "I was nervous about my implant procedure but the entire team put me at ease. The result looks completely natural. Worth every penny.",
    rating: 5,
  },
  {
    name: "Susan T.",
    text: "I've been coming here for years. The technology they use is amazing — AI diagnostics showed things my previous dentist missed for years.",
    rating: 5,
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-24 bg-[var(--color-navy)]" aria-label="Patient Testimonials">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-3">
              Patient Stories
            </p>
            <h2 className="font-heading text-white">
              What our patients say
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[var(--color-beige)] text-[var(--color-beige)]" />
              ))}
            </div>
            <div>
              <p className="text-white font-secondary font-600 text-lg leading-none">4.9</p>
              <p className="text-white/50 text-xs font-body">200+ Google reviews</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white/8 border border-white/10 rounded-2xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Quote size={20} className="text-[var(--color-beige)]/40 mb-4 shrink-0" />
              <p className="font-body text-sm text-white/80 leading-relaxed flex-1 mb-5">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-secondary font-600 text-sm text-white">{t.name}</p>
                  <p className="text-xs font-body text-white/40">Verified Patient</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[var(--color-beige)] text-[var(--color-beige)]" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
