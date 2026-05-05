import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/benefits/Hero";
import HowItWorks from "@/components/benefits/HowItWorks";
import FeatureBento from "@/components/benefits/FeatureBento";
import Testimonials from "@/components/benefits/Testimonials";
import Integrations from "@/components/benefits/Integrations";
import FAQ from "@/components/benefits/FAQ";
import FinalCTA from "@/components/benefits/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Benefits & Perks — Tailored to Every Employee | Empuls",
  description:
    "Tax-saving allowances, lifestyle spending accounts, health & wellness, discounts, early wages, insurance, and devices — every benefit type, one platform.",
  alternates: { canonical: "https://empuls.io/platform/benefits" },
  openGraph: {
    title: "Benefits & Perks Platform | Empuls",
    description: "Seven benefit types in one platform. Tax-saving, LSA, health, discounts, early wages, insurance, devices.",
    url: "https://empuls.io/platform/benefits",
    images: [{ url: "/og/benefits.png", width: 1200, height: 630, alt: "Empuls Benefits & Perks" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function BenefitsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureBento />
        <Testimonials />
        <Integrations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
