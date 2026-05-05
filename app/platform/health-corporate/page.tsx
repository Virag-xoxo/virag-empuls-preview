import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/health-corporate/Hero";
import HowItWorks from "@/components/health-corporate/HowItWorks";
import FeatureBento from "@/components/health-corporate/FeatureBento";
import Testimonials from "@/components/health-corporate/Testimonials";
import Integrations from "@/components/health-corporate/Integrations";
import FAQ from "@/components/health-corporate/FAQ";
import FinalCTA from "@/components/health-corporate/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Corporate Wellness Program — Personalized Health Checkup & Wellness Solutions | Empuls",
  description:
    "Run personalized corporate health checkup and wellness solutions. Offer at-home diagnostics, digital doctor consultations, group health insurance, and preventive care — all through Empuls.",
  alternates: { canonical: "https://empuls.io/platform/health-corporate" },
  openGraph: {
    title: "Corporate Wellness Program | Empuls",
    description: "Preventive checkups, digital doctor access, and group health insurance — through one platform employees already use.",
    url: "https://empuls.io/platform/health-corporate",
    images: [{ url: "/og/health-corporate.png", width: 1200, height: 630, alt: "Empuls Corporate Wellness Program" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function CorporateWellnessPage() {
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
