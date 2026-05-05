import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/benefits-discounts/Hero";
import HowItWorks from "@/components/benefits-discounts/HowItWorks";
import FeatureBento from "@/components/benefits-discounts/FeatureBento";
import Testimonials from "@/components/benefits-discounts/Testimonials";
import Integrations from "@/components/benefits-discounts/Integrations";
import FAQ from "@/components/benefits-discounts/FAQ";
import FinalCTA from "@/components/benefits-discounts/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Employee Discounts & Perks Store | Empuls",
  description:
    "Give employees access to 20,000+ brand discounts, exclusive corporate offers, and cashback — across 25+ categories, free for the company, with no subscription fees.",
  alternates: { canonical: "https://empuls.io/platform/benefits-discounts" },
  openGraph: {
    title: "Employee Discounts & Perks Store | Empuls",
    description: "6,000+ gift cards at 5–50% off, exclusive deals, cashback. Up to $7,000 in annual household savings.",
    url: "https://empuls.io/platform/benefits-discounts",
    images: [{ url: "/og/benefits-discounts.png", width: 1200, height: 630, alt: "Empuls Perks Store" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function DiscountsPage() {
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
