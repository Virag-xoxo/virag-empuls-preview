import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/milestone-project-completions/Hero";
import HowItWorks from "@/components/milestone-project-completions/HowItWorks";
import FeatureBento from "@/components/milestone-project-completions/FeatureBento";
import Testimonials from "@/components/milestone-project-completions/Testimonials";
import Integrations from "@/components/milestone-project-completions/Integrations";
import FAQ from "@/components/milestone-project-completions/FAQ";
import FinalCTA from "@/components/milestone-project-completions/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project Completion Rewards — Reward Teams When Work Ships | Empuls",
  description:
    "Reward teams the moment a project ships. Empuls fires rewards automatically when projects complete — with zero manual tracking or delayed recognition.",
  alternates: { canonical: "https://empuls.io/platform/milestone-project-completions" },
  openGraph: {
    title: "Project Completion Rewards | Empuls",
    description: "Sprints, product launches, client deliveries — rewards fire automatically the moment a project completes.",
    url: "https://empuls.io/platform/milestone-project-completions",
    images: [{ url: "/og/project-completions.png", width: 1200, height: 630, alt: "Empuls Project Completion Rewards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function ProjectCompletionsPage() {
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
