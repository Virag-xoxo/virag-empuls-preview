import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/surveys/Hero";
import HowItWorks from "@/components/surveys/HowItWorks";
import FeatureBento from "@/components/surveys/FeatureBento";
import Testimonials from "@/components/surveys/Testimonials";
import Integrations from "@/components/surveys/Integrations";
import FAQ from "@/components/surveys/FAQ";
import FinalCTA from "@/components/surveys/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Employee Surveys — Listen to Your Workforce | Empuls",
  description:
    "Pulse checks, lifecycle feedback, AI-powered sentiment, and built-in action plans — every voice heard, every insight acted on, all in one place.",
  alternates: { canonical: "https://empuls.io/platform/surveys" },
  openGraph: {
    title: "Employee Surveys Platform | Empuls",
    description: "Listen to your workforce and act on what matters. Pulse, lifecycle, mood-o-meter, AI sentiment, and action plans in one platform.",
    url: "https://empuls.io/platform/surveys",
    images: [{ url: "/og/surveys.png", width: 1200, height: 630, alt: "Empuls Surveys" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function SurveysPage() {
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
