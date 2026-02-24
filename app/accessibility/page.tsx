import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement for Bilski Dental. Our commitment to making dental care and our website accessible for all patients.",
};

export default function AccessibilityPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <section className="py-20 bg-[var(--color-beige-light)]">
        <Container>
          <h1 className="font-heading text-[var(--color-navy)] max-w-2xl mb-4">Accessibility Statement</h1>
          <p className="font-body text-[var(--color-muted)]">Bilski Dental is committed to ensuring accessibility for all patients.</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl space-y-10">
            {[
              {
                title: "Our Commitment",
                body: "Bilski Dental is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to our website.",
              },
              {
                title: "Physical Accessibility",
                body: "Our office at 6527 Brecksville Road, Suite B, Independence, OH 44131 is designed to be physically accessible. If you have specific accessibility needs or require accommodations for your visit, please call us at (216) 524-4410 before your appointment and we will do everything we can to accommodate you.",
              },
              {
                title: "Website Accessibility",
                body: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. This includes providing text alternatives for non-text content, ensuring sufficient color contrast, making all functionality available from a keyboard, and providing clear navigation and page structure.",
              },
              {
                title: "Bilingual Services",
                body: "We have Spanish-speaking staff available to assist patients who prefer to communicate in Spanish. Please let us know when scheduling if you would like a Spanish-speaking team member for your appointment.",
              },
              {
                title: "Known Limitations",
                body: "While we strive for full accessibility, some areas of our website may not yet fully conform to accessibility standards. We are actively working to address these gaps.",
              },
              {
                title: "Feedback & Contact",
                body: "If you encounter accessibility barriers on our website or in our office, please let us know. We welcome your feedback and are committed to addressing issues promptly.",
              },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-xl text-[var(--color-navy)] mb-3">{s.title}</h2>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{s.body}</p>
              </div>
            ))}

            <div className="pt-6 border-t border-[var(--color-beige)]">
              <p className="font-body text-sm text-[var(--color-muted)] mb-4">
                To report an accessibility issue or request assistance:
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="tel:+12165244410" className="font-secondary font-600 text-sm text-[var(--color-navy)] hover:underline">(216) 524-4410</a>
                <span className="text-[var(--color-beige)]">|</span>
                <Link href="/contact" className="font-secondary font-600 text-sm text-[var(--color-navy)] hover:underline">Contact Form</Link>
                <span className="text-[var(--color-beige)]">|</span>
                <span className="font-body text-sm text-[var(--color-muted)]">6527 Brecksville Road, Suite B, Independence, OH 44131</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
