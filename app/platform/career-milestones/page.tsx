import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/career-milestones/Hero";
import HowItWorks from "@/components/career-milestones/HowItWorks";
import FeatureBento from "@/components/career-milestones/FeatureBento";
import Testimonials from "@/components/career-milestones/Testimonials";
import Integrations from "@/components/career-milestones/Integrations";
import FAQ from "@/components/career-milestones/FAQ";
import FinalCTA from "@/components/career-milestones/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Career Milestones — Promotions, Certifications, Role Changes | Empuls",
  description:
    "Recognize promotions, role changes, certifications, and career wins — auto-triggered from your HRMS or nominated by managers. Make every growth moment visible and rewarding.",
  alternates: { canonical: "https://empuls.io/platform/career-milestones" },
  openGraph: {
    title: "Career Milestones — Recognition for Every Kind of Growth | Empuls",
    description: "Promotions, certifications, role changes, and project wins — recognized automatically.",
    url: "https://empuls.io/platform/career-milestones",
    images: [{ url: "/og/career-milestones.png", width: 1200, height: 630, alt: "Empuls Career Milestones" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function CareerMilestonesPage() {
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
