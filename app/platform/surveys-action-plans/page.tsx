import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/surveys-action-plans/Hero";
import HowItWorks from "@/components/surveys-action-plans/HowItWorks";
import FeatureBento from "@/components/surveys-action-plans/FeatureBento";
import Testimonials from "@/components/surveys-action-plans/Testimonials";
import Integrations from "@/components/surveys-action-plans/Integrations";
import FAQ from "@/components/surveys-action-plans/FAQ";
import FinalCTA from "@/components/surveys-action-plans/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Action Plans — Turn Survey Insights into Real Action | Empuls",
  description:
    "Turn survey insights into measurable improvements. Tag tasks to engagement drivers, assign owners and deadlines, track resolution — all inside Empuls.",
  alternates: { canonical: "https://empuls.io/platform/surveys-action-plans" },
  openGraph: {
    title: "Survey Action Plans | Empuls",
    description: "Driver-tagged tasks, owner assignment, RBAC views. Close the feedback loop on every cycle.",
    url: "https://empuls.io/platform/surveys-action-plans",
    images: [{ url: "/og/surveys-action-plans.png", width: 1200, height: 630, alt: "Empuls Action Plans" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function ActionPlansPage() {
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
