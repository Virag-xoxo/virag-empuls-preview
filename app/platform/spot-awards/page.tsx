import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/spot-awards/Hero";
import HowItWorks from "@/components/spot-awards/HowItWorks";
import FeatureBento from "@/components/spot-awards/FeatureBento";
import Testimonials from "@/components/spot-awards/Testimonials";
import Integrations from "@/components/spot-awards/Integrations";
import FAQ from "@/components/spot-awards/FAQ";
import FinalCTA from "@/components/spot-awards/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spot Awards — Real-Time Employee Recognition | Empuls",
  description:
    "Recognize great work the moment it happens. Empuls Spot Awards lets anyone in your company give instant, values-based recognition with coins, messages, and public celebration.",
  alternates: { canonical: "https://empuls.io/platform/spot-awards" },
  openGraph: {
    title: "Spot Awards — Real-Time Employee Recognition | Empuls",
    description:
      "Recognize great work the moment it happens. Peer-to-peer, manager, and company-wide spot awards — tied to values, rewarded with coins.",
    url: "https://empuls.io/platform/spot-awards",
    images: [{ url: "/og/spot-awards.png", width: 1200, height: 630, alt: "Empuls Spot Awards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function SpotAwardsPage() {
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
