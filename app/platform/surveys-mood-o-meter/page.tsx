import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/surveys-mood-o-meter/Hero";
import HowItWorks from "@/components/surveys-mood-o-meter/HowItWorks";
import FeatureBento from "@/components/surveys-mood-o-meter/FeatureBento";
import Testimonials from "@/components/surveys-mood-o-meter/Testimonials";
import Integrations from "@/components/surveys-mood-o-meter/Integrations";
import FAQ from "@/components/surveys-mood-o-meter/FAQ";
import FinalCTA from "@/components/surveys-mood-o-meter/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mood-o-meter — Daily Pulse on Team Sentiment | Empuls",
  description:
    "One emoji tap, embedded in the daily feed. Empuls Mood-o-meter captures team sentiment in real time — anonymously aggregated by department, location, tenure, and more.",
  alternates: { canonical: "https://empuls.io/platform/surveys-mood-o-meter" },
  openGraph: {
    title: "Mood-o-meter | Empuls",
    description: "Daily check-in. Always anonymous. 8-dimension segmentation. Org sentiment score, team heatmap, archive history.",
    url: "https://empuls.io/platform/surveys-mood-o-meter",
    images: [{ url: "/og/surveys-mood-o-meter.png", width: 1200, height: 630, alt: "Empuls Mood-o-meter" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function MoodOMeterPage() {
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
