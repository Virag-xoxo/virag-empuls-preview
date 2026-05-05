import type { Metadata } from "next";
import Hero from "@/components/health-corporate/Hero";
import HowItWorks from "@/components/health-corporate/HowItWorks";
import FeatureBento from "@/components/health-corporate/FeatureBento";
import Testimonials from "@/components/health-corporate/Testimonials";
import Integrations from "@/components/health-corporate/Integrations";
import FAQ from "@/components/health-corporate/FAQ";
import FinalCTA from "@/components/health-corporate/FinalCTA";

export const metadata: Metadata = {
  title: "Corporate Wellness Program — Personalized Health Checkup & Wellness Solutions | Empuls",
  description:
    "Run personalized corporate health checkup and wellness solutions. Offer at-home diagnostics, digital doctor consultations, group health insurance, and preventive care — all through Empuls.",
};

export default function CorporateWellnessPage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <FeatureBento />
      <Testimonials />
      <Integrations />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
