import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Bilski Dental. How we collect, use, and protect your personal and health information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <section className="py-20 bg-[var(--color-beige-light)]">
        <Container>
          <h1 className="font-heading text-[var(--color-navy)] max-w-2xl mb-4">Privacy Policy</h1>
          <p className="font-body text-[var(--color-muted)]">Last updated: January 1, 2025</p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl prose prose-slate">
            <div className="space-y-10">
              {[
                {
                  title: "Information We Collect",
                  body: "We collect information you provide directly to us, including your name, email address, phone number, and dental health information when you schedule appointments, fill out patient forms, or contact us. We may also collect information automatically when you use our website, such as your IP address, browser type, and pages viewed.",
                },
                {
                  title: "How We Use Your Information",
                  body: "We use the information we collect to schedule and confirm appointments, provide dental care and communicate about your treatment, respond to your questions and requests, send appointment reminders and follow-up communications, and improve our website and services.",
                },
                {
                  title: "HIPAA Compliance",
                  body: "As a dental practice, we are subject to the Health Insurance Portability and Accountability Act (HIPAA). Your protected health information (PHI) is handled in accordance with HIPAA regulations. We maintain physical, electronic, and procedural safeguards to protect your health information. You have the right to access, amend, and receive an accounting of disclosures of your health information.",
                },
                {
                  title: "Information Sharing",
                  body: "We do not sell, trade, or rent your personal information to third parties. We may share your information with healthcare providers involved in your treatment, insurance companies for billing purposes, and service providers who assist us in operating our website and practice — all subject to confidentiality agreements.",
                },
                {
                  title: "Website Cookies",
                  body: "Our website may use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand where visitors are coming from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
                },
                {
                  title: "Data Security",
                  body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our patient portal uses industry-standard encryption to protect your health information.",
                },
                {
                  title: "Your Rights",
                  body: "You have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your information (subject to legal requirements), and opt out of marketing communications at any time.",
                },
                {
                  title: "Contact Us",
                  body: "If you have questions about this privacy policy or our privacy practices, please contact us at: Bilski Dental, 6527 Brecksville Road, Suite B, Independence, OH 44131. Phone: (216) 524-4410.",
                },
              ].map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl text-[var(--color-navy)] mb-3">{section.title}</h2>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
