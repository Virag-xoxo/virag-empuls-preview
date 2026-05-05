import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/service-awards/Hero";
import HowItWorks from "@/components/service-awards/HowItWorks";
import FeatureBento from "@/components/service-awards/FeatureBento";
import Testimonials from "@/components/service-awards/Testimonials";
import Integrations from "@/components/service-awards/Integrations";
import FAQ from "@/components/service-awards/FAQ";
import FinalCTA from "@/components/service-awards/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Service Awards — Automated Work Anniversary Recognition | Empuls",
  description:
    "Automate work anniversary recognition with peer wishboards, digital yearbooks, milestone certificates, and global rewards. Empuls makes every service milestone personal.",
  alternates: { canonical: "https://empuls.io/platform/service-awards" },
  openGraph: {
    title: "Service Awards — Automated Work Anniversary Recognition | Empuls",
    description:
      "Peer wishboards, digital yearbooks, certificates, and rewards employees actually choose — fully automated at every anniversary tier.",
    url: "https://empuls.io/platform/service-awards",
    images: [{ url: "/og/service-awards.png", width: 1200, height: 630, alt: "Empuls Service Awards" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function ServiceAwardsPage() {
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
