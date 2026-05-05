import type { Metadata } from "next";
import Hero from "@/components/health-fitness/Hero";
import HowItWorks from "@/components/health-fitness/HowItWorks";
import FeatureBento from "@/components/health-fitness/FeatureBento";
import Testimonials from "@/components/health-fitness/Testimonials";
import Integrations from "@/components/health-fitness/Integrations";
import FAQ from "@/components/health-fitness/FAQ";
import FinalCTA from "@/components/health-fitness/FinalCTA";

export const metadata: Metadata = {
  title: "Fitness Challenges — Stepathon, Workout, and Running Competitions | Empuls",
  description:
    "Run fitness challenges with live leaderboards, milestone rewards, and six tracker integrations. Stepathon, Workout Warrior, and 5K/10K/21K/42K running templates — all inside Empuls.",
};

export default function FitnessChallengesPage() {
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
