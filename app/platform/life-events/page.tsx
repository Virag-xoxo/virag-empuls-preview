import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/life-events/Hero";
import HowItWorks from "@/components/life-events/HowItWorks";
import FeatureBento from "@/components/life-events/FeatureBento";
import Testimonials from "@/components/life-events/Testimonials";
import Integrations from "@/components/life-events/Integrations";
import FAQ from "@/components/life-events/FAQ";
import FinalCTA from "@/components/life-events/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Life Events — Weddings, Babies, Graduations, New Homes | Empuls",
  description:
    "Recognize weddings, new babies, graduations, and new homes with occasion-specific gifts employees actually love. Empuls helps you celebrate the whole person.",
  alternates: { canonical: "https://empuls.io/platform/life-events" },
  openGraph: {
    title: "Life Events — Recognize the Whole Person | Empuls",
    description:
      "Curated, occasion-specific gifts in minutes — for weddings, new babies, graduations, and new homes.",
    url: "https://empuls.io/platform/life-events",
    images: [{ url: "/og/life-events.png", width: 1200, height: 630, alt: "Empuls Life Events" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function LifeEventsPage() {
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
