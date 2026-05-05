import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sales-compensation/Hero";
import HowItWorks from "@/components/sales-compensation/HowItWorks";
import FeatureBento from "@/components/sales-compensation/FeatureBento";
import Testimonials from "@/components/sales-compensation/Testimonials";
import Integrations from "@/components/sales-compensation/Integrations";
import FAQ from "@/components/sales-compensation/FAQ";
import FinalCTA from "@/components/sales-compensation/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Compensation Management — Transparent Commissions | Empuls",
  description:
    "Design and manage sales commissions with full transparency. Every deal, every tier, every payout — calculated automatically and visible to reps the moment a deal closes.",
  alternates: { canonical: "https://empuls.io/platform/sales-compensation" },
  openGraph: {
    title: "Sales Compensation Management | Empuls",
    description: "Commission plans your reps can trust. Automated calculations, live earnings statements, audit trail, and instant payouts.",
    url: "https://empuls.io/platform/sales-compensation",
    images: [{ url: "/og/sales-compensation.png", width: 1200, height: 630, alt: "Empuls Compensation Management" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function SalesCompensationPage() {
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
