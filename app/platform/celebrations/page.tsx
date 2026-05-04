import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/celebrations/Hero";
import HowItWorks from "@/components/celebrations/HowItWorks";
import FeatureBento from "@/components/celebrations/FeatureBento";
import Testimonials from "@/components/celebrations/Testimonials";
import Integrations from "@/components/celebrations/Integrations";
import FAQ from "@/components/celebrations/FAQ";
import FinalCTA from "@/components/celebrations/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Celebrations — Automated Birthdays & Work Anniversaries | Empuls",
  description:
    "Automate birthday, work anniversary, and life milestone celebrations with Empuls. Wishboards, gift credits, and team shoutouts trigger automatically — no HR effort.",
  alternates: { canonical: "https://empuls.io/platform/celebrations" },
  openGraph: {
    title: "Celebrations — Automated Birthdays & Work Anniversaries | Empuls",
    description:
      "Empuls detects birthdays, work anniversaries, and life events — then triggers Wishboards, gift credits, and team shoutouts without any HR effort.",
    url: "https://empuls.io/platform/celebrations",
    images: [{ url: "/og/celebrations.png", width: 1200, height: 630, alt: "Empuls Celebrations" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function CelebrationsPage() {
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
