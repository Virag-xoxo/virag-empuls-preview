import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/onboarding/Hero";
import HowItWorks from "@/components/onboarding/HowItWorks";
import FeatureBento from "@/components/onboarding/FeatureBento";
import Testimonials from "@/components/onboarding/Testimonials";
import Integrations from "@/components/onboarding/Integrations";
import FAQ from "@/components/onboarding/FAQ";
import FinalCTA from "@/components/onboarding/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Onboarding — Automated Day-One Welcome | Empuls",
  description:
    "Automate welcome recognition for every new hire — branded kits, gift points, personalized messages, and a company-wide shoutout, all triggered on their joining date.",
  alternates: { canonical: "https://empuls.io/platform/onboarding" },
  openGraph: {
    title: "Onboarding — Make Day One Feel Like a Real Beginning | Empuls",
    description: "Branded welcome kits, gift points, and team shoutouts — triggered the moment they join.",
    url: "https://empuls.io/platform/onboarding",
    images: [{ url: "/og/onboarding.png", width: 1200, height: 630, alt: "Empuls Onboarding" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function OnboardingPage() {
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
