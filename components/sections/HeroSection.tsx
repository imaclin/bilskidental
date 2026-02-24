import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryButtonHref?: string;
  primaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonText?: string;
}

export function HeroSection({
  subtitle,
  title,
  description,
  backgroundImage,
  primaryButtonHref = "/contact",
  primaryButtonText = "Schedule an Appointment",
  secondaryButtonHref,
  secondaryButtonText,
}: HeroSectionProps) {
  return (
    <section className="py-20 bg-[var(--color-beige-light)] relative overflow-hidden">
      {/* Background image with low opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url('/hero-images/${backgroundImage}')` }}
        aria-hidden="true"
      />
      
      {/* White overlay */}
      <div 
        className="absolute inset-0 bg-white opacity-70"
        style={{ zIndex: 5 }}
        aria-hidden="true"
      />
      
      <Container className="relative z-10">
        <p className="text-xs font-secondary font-600 uppercase tracking-[0.15em] text-[var(--color-navy)] mb-3">
          {subtitle}
        </p>
        <h1 className="font-heading text-[var(--color-navy)] max-w-2xl mb-5">{title}</h1>
        <p className="font-body text-[var(--color-navy)] max-w-xl leading-relaxed mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="md" shadow={true} asChild>
            <Link href={primaryButtonHref}>
              {primaryButtonText} <ChevronRight size={14} />
            </Link>
          </Button>
          
          {secondaryButtonHref && secondaryButtonText && (
            <Button variant="secondary" size="md" asChild>
              <Link href={secondaryButtonHref}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
