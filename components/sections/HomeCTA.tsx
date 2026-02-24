import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function HomeCTA() {
  return (
    <section className="py-20 bg-[var(--color-beige)]" aria-label="Call to action">
      <Container size="lg">
        <div className="bg-[var(--color-navy)] rounded-3xl px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="font-heading text-white text-4xl md:text-5xl mb-3" style={{ color: '#ffffff' }}>
              Ready for your best smile?
            </h2>
            <p className="font-body text-white/70 text-sm max-w-md" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Schedule your appointment today. New patients welcome — online
              forms available so you can start before you arrive.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button variant="beige" size="lg" shadow={true} asChild>
              <Link href="/contact">
                Book Appointment <ChevronRight size={16} />
              </Link>
            </Button>
            <a
              href={`tel:${SITE.phonePlain}`}
              className="inline-flex items-center justify-center gap-2 h-13 px-8 text-base font-secondary font-600 bg-transparent text-white border border-white rounded-[16px] hover:bg-[var(--color-blue-accent)] hover:text-[var(--color-navy)] transition-all duration-200"
              style={{ color: '#ffffff', borderColor: '#ffffff' }}
            >
              <Phone size={16} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
