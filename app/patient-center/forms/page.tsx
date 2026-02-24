import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, FileText, ChevronRight } from "lucide-react";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Patient Forms",
  description:
    "Access new patient registration forms and post-operative care instructions from Bilski Dental.",
};

const postOpDocs = [
  {
    title: "Homecare After Dental Surgery",
    desc: "Instructions for caring for surgical sites, managing swelling, and what to expect after oral surgery procedures.",
    href: "https://virteomdevcdn.blob.core.windows.net/site-bilskidds-com/uploaded_media/bilskidds_com/documents/Homecare_After_Surgery__1575478941.pdf",
  },
  {
    title: "Post-Op Pain Control",
    desc: "Guidance on managing pain and discomfort following dental procedures, including medication recommendations.",
    href: "https://virteomdevcdn.blob.core.windows.net/site-bilskidds-com/uploaded_media/bilskidds_com/documents/Post-op_pain_control__1575411280.pdf",
  },
];

export default function PatientFormsPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HeroSection
        subtitle="Secure · Easy · Online"
        title="Patient Forms"
        description="Complete your new patient paperwork online before your visit, or access our post-operative care documents below."
        backgroundImage="patient-forms.jpg"
      />

      <section className="py-24 bg-white">
        <Container>
          {/* New Patients Section - Card Component */}
          <div className="bg-[var(--color-navy)] rounded-3xl p-8 lg:p-12 text-white mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <FileText size={20} className="text-white" />
                </div>
                <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-beige)] mb-2">New Patients</p>
                <h2 className="font-heading !text-white text-3xl lg:text-4xl mb-4">Complete Forms Online</h2>
                <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
                  Register as a new patient through our secure online portal. Takes about 10 minutes — completing this before your appointment means a smoother, faster check-in.
                </p>
                <a
                  href="https://app.modento.io/bilskidental/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[var(--color-beige)] !text-[var(--color-navy)] text-base font-secondary font-600 hover:bg-[var(--color-beige-light)] transition-colors"
                >
                  Open Patient Portal <ExternalLink size={13} />
                </a>
                <p className="font-body text-sm text-white/40 mt-4">
                  Can't complete online? Arrive 15 minutes early and we'll assist you.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="w-full h-64 bg-white/5 rounded-3xl flex items-center justify-center">
                  <FileText size={48} className="text-white/20" />
                </div>
              </div>
            </div>
          </div>

          {/* Patient Forms Section */}
          <div>
            <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">Post-Operative Instructions</p>
            <h2 className="font-heading text-[var(--color-navy)] mb-6">After-care documents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {postOpDocs.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-5 rounded-2xl border border-[var(--color-beige)] bg-[var(--color-beige-light)] hover:border-[var(--color-navy)] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-navy)] flex items-center justify-center shrink-0 mt-0.5">
                    <FileText size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-secondary font-600 text-sm text-[var(--color-navy)] mb-1 flex items-center gap-2">
                      {doc.title}
                      <ExternalLink size={11} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="font-body text-xs text-[var(--color-muted)] leading-relaxed">{doc.desc}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="font-body text-xs text-[var(--color-muted)] mt-5 leading-relaxed">
              These documents open as PDFs. If you have any questions about
              your post-operative care, call us at{" "}
              <a href="tel:+12165244410" className="text-[var(--color-navy)] font-medium">(216) 524-4410</a>.
            </p>
          </div>

          <div className="mt-14 pt-10 border-t border-[var(--color-beige)]">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="md" shadow={true} asChild>
                <Link href="/contact">Schedule an Appointment <ChevronRight size={14} /></Link>
              </Button>
              <Button variant="secondary" size="md" asChild>
                <Link href="/patient-center">Back to Patient Center</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
