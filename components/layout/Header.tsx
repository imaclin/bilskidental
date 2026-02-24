"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(href);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]"
          : "bg-white"
      )}
    >
      {/* Top bar */}
      <div className="bg-[var(--color-navy)] text-white text-xs font-body">
        <div className="flex items-center justify-between h-9 px-4 lg:px-6">
          <span className="hidden sm:block opacity-80">
            6527 Brecksville Road, Suite B · Independence, OH 44131
          </span>
          <a
            href={`tel:+12165244410`}
            className="hidden sm:flex items-center gap-1.5 font-semibold text-white hover:opacity-80 transition-opacity"
           
            aria-label="Call Bilski Dental"
          >
            <Phone size={12} />
            (216) 524-4410
          </a>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Mon–Thu 8AM–5PM · Fri 8:30AM–1:30PM</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Bilski Dental home"
          >
            <img
              src="/logo.png"
              alt="Bilski Dental & CARE Esthetics"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative">
                {"children" in link ? (
                  <div
                    className="relative"
                    onMouseEnter={() => openMenu(link.href)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-body font-medium text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === link.href ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {openDropdown === link.href && (
                      <div
                        className="absolute top-full left-0 mt-1 w-56 bg-white border border-[var(--color-border)] rounded-xl shadow-lg overflow-hidden z-50"
                        onMouseEnter={() => openMenu(link.href)}
                        onMouseLeave={closeMenu}
                      >
                        <ul role="list" className="py-2">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm font-body text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-body font-medium text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="md" shadow={true} asChild>
              <Link href="/contact">Schedule Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[calc(2.25rem+4rem)] bg-white z-40 overflow-y-auto"
          aria-label="Mobile navigation"
        >
          <Container>
            <ul className="py-4 space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {"children" in link ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-body font-medium text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.href ? null : link.href
                          )
                        }
                        aria-expanded={openDropdown === link.href}
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            openDropdown === link.href ? "rotate-180" : ""
                          )}
                        />
                      </button>
                      {openDropdown === link.href && (
                        <ul className="pl-4 mt-1 space-y-1" role="list">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block px-4 py-2.5 text-sm font-body text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-sm font-body font-medium text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="px-4 py-4 border-t border-[var(--color-border)]">
              <Button
                variant="primary"
                size="lg"
                shadow={true}
                className="w-full"
                asChild
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Schedule Appointment
                </Link>
              </Button>
              <a
                href={`tel:${SITE.phonePlain}`}
                className="flex items-center justify-center gap-2 mt-3 py-3 text-sm font-body font-medium text-[var(--color-navy)] hover:bg-[var(--color-beige-light)] rounded-lg transition-colors"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
