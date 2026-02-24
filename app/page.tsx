import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeServices } from "@/components/sections/HomeServices";
import { HomeDifferentiators } from "@/components/sections/HomeDifferentiators";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { HomeLocation } from "@/components/sections/HomeLocation";
import { HomeCTA } from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Bilski Dental & CARE Esthetics | Independence, OH",
  description:
    "Home of the Bilski Smile. Comprehensive cosmetic and general dentistry in Independence, OH — serving Northeast Ohio for 100+ years.",
};

export default function HomePage() {
  return (
    <div className="pt-[calc(2.25rem+4rem)]">
      <HomeHero />
      <HomeServices />
      <HomeDifferentiators />
      <HomeTestimonials />
      <HomeLocation />
      <HomeCTA />
    </div>
  );
}
