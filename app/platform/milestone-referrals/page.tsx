import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/milestone-referrals/Hero";
import HowItWorks from "@/components/milestone-referrals/HowItWorks";
import FeatureBento from "@/components/milestone-referrals/FeatureBento";
import Testimonials from "@/components/milestone-referrals/Testimonials";
import Integrations from "@/components/milestone-referrals/Integrations";
import FAQ from "@/components/milestone-referrals/FAQ";
import FinalCTA from "@/components/milestone-referrals/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Referral Rewards — Multi-Stage Hiring Incentives | Empuls",
  description:
    "Incentivise employees to bring in great talent. Multi-stage referral rewards that fire automatically at each hiring milestone — referral, interview, hire, probation.",
  alternates: { canonical: "https://empuls.io/platform/milestone-referrals" },
  openGraph: {
    title: "Referral Rewards — Reward Every Hiring Stage | Empuls",
    description: "Multi-stage rewards triggered automatically as candidates move through your ATS — submission to probation.",
    url: "https://empuls.io/platform/milestone-referrals",
    images: [{ url: "/og/referrals.png", width: 1200, height: 630, alt: "Empuls Referral Rewards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function ReferralsPage() {
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
