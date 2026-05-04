import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/milestone-training/Hero";
import HowItWorks from "@/components/milestone-training/HowItWorks";
import FeatureBento from "@/components/milestone-training/FeatureBento";
import Testimonials from "@/components/milestone-training/Testimonials";
import Integrations from "@/components/milestone-training/Integrations";
import FAQ from "@/components/milestone-training/FAQ";
import FinalCTA from "@/components/milestone-training/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Training & Development Rewards — Auto-Reward Learning | Empuls",
  description:
    "Reward learning, certifications, and skill growth automatically. Connect Empuls to your LMS and fire rewards the moment employees level up.",
  alternates: { canonical: "https://empuls.io/platform/milestone-training" },
  openGraph: {
    title: "Training & Development Rewards | Empuls",
    description: "Course completions, certifications, learning streaks — Empuls fires rewards the moment your LMS marks them done.",
    url: "https://empuls.io/platform/milestone-training",
    images: [{ url: "/og/training.png", width: 1200, height: 630, alt: "Empuls L&D Rewards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function TrainingPage() {
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
