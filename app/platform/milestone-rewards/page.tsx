import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/milestone-rewards/Hero";
import HowItWorks from "@/components/milestone-rewards/HowItWorks";
import FeatureBento from "@/components/milestone-rewards/FeatureBento";
import Testimonials from "@/components/milestone-rewards/Testimonials";
import Integrations from "@/components/milestone-rewards/Integrations";
import FAQ from "@/components/milestone-rewards/FAQ";
import FinalCTA from "@/components/milestone-rewards/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Milestone Rewards — Automate Recognition for Every Achievement | Empuls",
  description:
    "Automate rewards the moment achievements happen — project completions, referrals, certifications, and workplace milestones. Set the trigger once, Empuls does the rest.",
  alternates: { canonical: "https://empuls.io/platform/milestone-rewards" },
  openGraph: {
    title: "Milestone Rewards — Reward Every Achievement, Automatically | Empuls",
    description: "Project completions, referrals, certifications, safety targets — Empuls fires rewards automatically when achievements happen.",
    url: "https://empuls.io/platform/milestone-rewards",
    images: [{ url: "/og/milestone-rewards.png", width: 1200, height: 630, alt: "Empuls Milestone Rewards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function MilestoneRewardsPage() {
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
