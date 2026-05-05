import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/health-wellness/Hero";
import HowItWorks from "@/components/health-wellness/HowItWorks";
import FeatureBento from "@/components/health-wellness/FeatureBento";
import Testimonials from "@/components/health-wellness/Testimonials";
import Integrations from "@/components/health-wellness/Integrations";
import FAQ from "@/components/health-wellness/FAQ";
import FinalCTA from "@/components/health-wellness/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Health & Wellness — Support Employees Inside and Outside Work | Empuls",
  description:
    "Five wellness categories — fitness, health checkups, pharmacy, mental health, and care for loved ones — accessible via reward points or company-sponsored programs.",
  alternates: { canonical: "https://empuls.io/platform/health-wellness" },
  openGraph: {
    title: "Health & Wellness Platform | Empuls",
    description: "Five wellness categories, partner network, points-based redemption, bulk corporate programs.",
    url: "https://empuls.io/platform/health-wellness",
    images: [{ url: "/og/health-wellness.png", width: 1200, height: 630, alt: "Empuls Health & Wellness" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function HealthWellnessPage() {
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
