import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sales-performance/Hero";
import HowItWorks from "@/components/sales-performance/HowItWorks";
import FeatureBento from "@/components/sales-performance/FeatureBento";
import Testimonials from "@/components/sales-performance/Testimonials";
import Integrations from "@/components/sales-performance/Integrations";
import FAQ from "@/components/sales-performance/FAQ";
import FinalCTA from "@/components/sales-performance/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sales Performance Management — Quotas, Contests, AI Nudges | Empuls",
  description:
    "Track quotas, targets, and team performance in one place. Real-time attainment, gamified contests, and AI-powered nudges — every rep knows where they stand and what to close next.",
  alternates: { canonical: "https://empuls.io/platform/sales-performance" },
  openGraph: {
    title: "Sales Performance Management | Empuls",
    description: "Real-time quota tracking, no-code contest builder, AI nudges, and live leaderboards. Built for sales leaders and RevOps.",
    url: "https://empuls.io/platform/sales-performance",
    images: [{ url: "/og/sales-performance.png", width: 1200, height: 630, alt: "Empuls Sales Performance Management" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function SalesPerformancePage() {
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
