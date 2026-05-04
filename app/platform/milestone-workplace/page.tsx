import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/milestone-workplace/Hero";
import HowItWorks from "@/components/milestone-workplace/HowItWorks";
import FeatureBento from "@/components/milestone-workplace/FeatureBento";
import Testimonials from "@/components/milestone-workplace/Testimonials";
import Integrations from "@/components/milestone-workplace/Integrations";
import FAQ from "@/components/milestone-workplace/FAQ";
import FinalCTA from "@/components/milestone-workplace/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Workplace Milestones — Safety, Attendance, Targets | Empuls",
  description:
    "Recognise attendance, safety records, and operational targets automatically. Build the behaviours your organisation needs with structured reward triggers and team milestones.",
  alternates: { canonical: "https://empuls.io/platform/milestone-workplace" },
  openGraph: {
    title: "Workplace Milestones Rewards | Empuls",
    description: "Safety streaks, attendance records, performance targets — rewarded automatically the moment each threshold is crossed.",
    url: "https://empuls.io/platform/milestone-workplace",
    images: [{ url: "/og/workplace.png", width: 1200, height: 630, alt: "Empuls Workplace Milestones" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function WorkplacePage() {
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
