import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sales-incentives/Hero";
import HowItWorks from "@/components/sales-incentives/HowItWorks";
import FeatureBento from "@/components/sales-incentives/FeatureBento";
import Testimonials from "@/components/sales-incentives/Testimonials";
import Integrations from "@/components/sales-incentives/Integrations";
import FAQ from "@/components/sales-incentives/FAQ";
import FinalCTA from "@/components/sales-incentives/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sales Incentives — Automate Commissions, Run Contests, Pay Instantly | Empuls",
  description:
    "Drive sales performance with structured incentive programs. Automate commissions, run live contests, and pay reps instantly across 175+ countries — no spreadsheets, no delays, no disputes.",
  alternates: { canonical: "https://empuls.io/platform/sales-incentives" },
  openGraph: {
    title: "Sales Incentives Platform | Empuls",
    description: "Automate commissions, run live contests, pay reps instantly. Built for sales leaders, RevOps, and finance.",
    url: "https://empuls.io/platform/sales-incentives",
    images: [{ url: "/og/sales-incentives.png", width: 1200, height: 630, alt: "Empuls Sales Incentives" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function SalesIncentivesPage() {
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
