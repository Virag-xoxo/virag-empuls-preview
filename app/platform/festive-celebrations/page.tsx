import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/festive-celebrations/Hero";
import HowItWorks from "@/components/festive-celebrations/HowItWorks";
import FeatureBento from "@/components/festive-celebrations/FeatureBento";
import Testimonials from "@/components/festive-celebrations/Testimonials";
import Integrations from "@/components/festive-celebrations/Integrations";
import FAQ from "@/components/festive-celebrations/FAQ";
import FinalCTA from "@/components/festive-celebrations/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Festive Celebrations — Diwali, Christmas, Eid, and 50+ More | Empuls",
  description:
    "Pre-loaded occasion gift collections for Diwali, Christmas, Eid, and 50+ more festivals — with automated delivery, scheduled sends, or instant manual gifting across your global workforce.",
  alternates: { canonical: "https://empuls.io/platform/festive-celebrations" },
  openGraph: {
    title: "Festive Celebrations — Every Culture, Covered | Empuls",
    description: "50+ festivals pre-loaded with curated gift collections, automated or manual delivery, in 175+ countries.",
    url: "https://empuls.io/platform/festive-celebrations",
    images: [{ url: "/og/festive-celebrations.png", width: 1200, height: 630, alt: "Empuls Festive Celebrations" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function FestiveCelebrationsPage() {
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
