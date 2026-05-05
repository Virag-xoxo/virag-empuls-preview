import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/health-fitness/Hero";
import HowItWorks from "@/components/health-fitness/HowItWorks";
import FeatureBento from "@/components/health-fitness/FeatureBento";
import Testimonials from "@/components/health-fitness/Testimonials";
import Integrations from "@/components/health-fitness/Integrations";
import FAQ from "@/components/health-fitness/FAQ";
import FinalCTA from "@/components/health-fitness/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fitness Challenges — Stepathon, Workout, and Running Competitions | Empuls",
  description:
    "Run fitness challenges with live leaderboards, milestone rewards, and six tracker integrations. Stepathon, Workout Warrior, and 5K/10K/21K/42K running templates — all inside Empuls.",
  alternates: { canonical: "https://empuls.io/platform/health-fitness" },
  openGraph: {
    title: "Fitness Challenges | Empuls",
    description: "Six challenge templates, six tracker integrations, milestone rewards auto-credited to the wallet.",
    url: "https://empuls.io/platform/health-fitness",
    images: [{ url: "/og/health-fitness.png", width: 1200, height: 630, alt: "Empuls Fitness Challenges" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function FitnessChallengesPage() {
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
