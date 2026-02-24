import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, Stethoscope, Globe, Star, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = {
  title: "Meet Us",
  description:
    "Meet Dr. Thomas Bilski — cosmetic dentist and dental implantologist with 38+ years of experience. Co-director of the Midwest Implant Institute. Serving Independence, OH for over 100 years.",
};

const credentials = [
  { icon: Award, label: "38+ Years Experience", sub: "Cosmetic dentistry & implantology" },
  { icon: Stethoscope, label: "Midwest Implant Institute", sub: "Co-director, Columbus OH" },
  { icon: BookOpen, label: "Published Author", sub: "Co-authored leading laser dentistry textbook" },
  { icon: Globe, label: "Bilingual Practice", sub: "English & Spanish-speaking staff" },
];

const specialties = [
  "Porcelain Veneers",
  "Dental Implants",
  "Regenerative Laser Gum Procedures",
  "Clear Aligner Therapy (Invisalign)",
  "PRF & Laser Skin Resurfacing",
  "CARE Esthetics (Facial Aesthetics)",
];

const timeline = [
  { era: "Early 1900s", event: "Practice founded by Grandpa Wilson in Independence, OH" },
  { era: "Mid-Century", event: "Dr. Glen Wilson (son) continued the legacy in Independence" },
  { era: "Later Years", event: "Ownership passed to Dr. Kindl, then to Dr. Thomas Bilski" },
  { era: "~20 Years Ago", event: "Dr. Bilski takes ownership — modernizes and expands the practice" },
  { era: "Today", event: "Bilski Dental & CARE Esthetics — a 100+ year legacy, growing stronger" },
];

export default function MeetUsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Trusted · Dedicated · Rooted"
        title="A practice built on trust, artistry, and 100 years of care"
        description="From Grandpa Wilson’s founding practice to Dr. Bilski’s state-of-the-art dental group, we have served the Independence community for over a century."
        backgroundImage="meet-us.jpg"
      />

      {/* Dr. Bilski Bio */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-3xl bg-[var(--color-beige-light)] border border-[var(--color-beige)] flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-24 h-24 rounded-full bg-[var(--color-navy)]/10 mx-auto mb-4 flex items-center justify-center">
                    <Stethoscope size={32} className="text-[var(--color-navy)]/40" />
                  </div>
                  <p className="font-body text-sm text-[var(--color-muted)]">
                    Photo of Dr. Thomas Bilski
                  </p>
                </div>
              </div>
              {/* Rating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[var(--color-navy)] text-white rounded-2xl p-5 shadow-xl">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[var(--color-beige)] text-[var(--color-beige)]" />
                  ))}
                </div>
                <p className="font-heading text-2xl text-white">4.9</p>
                <p className="text-xs font-body text-white/60">200+ Google reviews</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
                Meet the Doctor
              </p>
              <h2 className="font-heading text-[var(--color-navy)] mb-5">
                Dr. Thomas Bilski
              </h2>
              <p className="font-secondary font-500 text-sm text-[var(--color-muted)] mb-2">
                Cosmetic Dentist & Dental Implantologist · Owner, Bilski Dental Group
              </p>

              <blockquote className="border-l-4 border-[var(--color-beige)] pl-5 py-2 my-7">
                <p className="font-heading text-xl text-[var(--color-navy)] italic leading-snug">
                  "Dentistry is a blend of medicine and artistry, coming together
                  to enhance and develop self-esteem for those whose smiles leave
                  them feeling extremely self-conscious."
                </p>
              </blockquote>

              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                With over 38 years of dedicated practice, Dr. Bilski brings
                unparalleled expertise in cosmetic dentistry and implantology.
                As co-director of the Midwest Implant Institute in Columbus, OH,
                he remains at the forefront of the field — training other dentists
                and helping patients achieve smiles that transform their lives.
              </p>

              <div className="mb-8">
                <p className="text-xs font-secondary font-600 uppercase tracking-wider text-[var(--color-muted)] mb-3">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-body text-[var(--color-navy)] bg-[var(--color-beige-light)] border border-[var(--color-beige)] rounded-full px-3 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary" size="md" shadow={true} asChild>
                <Link href="/contact">
                  Schedule with Dr. Bilski <ChevronRight size={14} />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Credentials row */}
      <section className="py-16 bg-[var(--color-beige-light)]">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="bg-white rounded-2xl p-6 border border-[var(--color-beige)]">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-navy)] flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white" />
                  </div>
                  <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1">{c.label}</p>
                  <p className="font-body text-xs text-[var(--color-muted)]">{c.sub}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Practice History Timeline */}
      <section className="py-24 bg-white">
        <Container size="md">
          <div className="text-center mb-14">
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
              Our History
            </p>
            <h2 className="font-heading text-[var(--color-navy)]">
              Over 100 years in Independence, OH
            </h2>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-beige)] hidden sm:block" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0 relative z-10 hidden sm:flex">
                    <span className="text-white text-xs font-secondary font-600">{i + 1}</span>
                  </div>
                  <div className="bg-[var(--color-beige-light)] rounded-2xl p-5 flex-1 border border-[var(--color-beige)]">
                    <p className="text-xs font-secondary font-600 uppercase tracking-wider text-[var(--color-navy)] mb-1">
                      {t.era}
                    </p>
                    <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Bilingual section */}
      <section className="py-16 bg-[var(--color-navy)]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-2">
                Bilingual Practice
              </p>
              <h3 className="font-heading text-white text-3xl mb-2">
                Hablamos español
              </h3>
              <p className="font-body text-white/60 text-sm">
                Estamos encantados de atenderlos. Our bilingual team ensures
                every patient feels understood and comfortable.
              </p>
            </div>
            <Button variant="beige" size="lg" shadow={true} asChild>
              <Link href="/contact">Book an Appointment</Link>
            </Button>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}
