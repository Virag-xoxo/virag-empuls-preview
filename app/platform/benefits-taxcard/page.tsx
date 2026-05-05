import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/benefits-taxcard/Hero";
import HowItWorks from "@/components/benefits-taxcard/HowItWorks";
import FeatureBento from "@/components/benefits-taxcard/FeatureBento";
import Testimonials from "@/components/benefits-taxcard/Testimonials";
import Integrations from "@/components/benefits-taxcard/Integrations";
import FAQ from "@/components/benefits-taxcard/FAQ";
import FinalCTA from "@/components/benefits-taxcard/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tax-Saving Benefits Card — RBI & PPI Compliant | Empuls",
  description:
    "A single RBI-compliant prepaid card that loads pre-tax allowances — meal, fuel, books, telecom — within Income Tax Act limits. MCC-restricted, audit-ready.",
  alternates: { canonical: "https://empuls.io/platform/benefits-taxcard" },
  openGraph: {
    title: "Tax-Saving Benefits Card | Empuls",
    description: "Physical and virtual cards. Up to ₹2,00,000 wallet balance. RBI compliant, PPI licensed (powered by PayU).",
    url: "https://empuls.io/platform/benefits-taxcard",
    images: [{ url: "/og/benefits-taxcard.png", width: 1200, height: 630, alt: "Empuls Tax-Saving Benefits Card" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function TaxCardPage() {
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
