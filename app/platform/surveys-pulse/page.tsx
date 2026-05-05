import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/surveys-pulse/Hero";
import HowItWorks from "@/components/surveys-pulse/HowItWorks";
import FeatureBento from "@/components/surveys-pulse/FeatureBento";
import Testimonials from "@/components/surveys-pulse/Testimonials";
import Integrations from "@/components/surveys-pulse/Integrations";
import FAQ from "@/components/surveys-pulse/FAQ";
import FinalCTA from "@/components/surveys-pulse/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pulse Surveys — Quick, Recurring Engagement Check-ins | Empuls",
  description:
    "Run quick, recurring check-ins to track engagement. Short, automated surveys delivered through Slack and Teams — so you catch morale dips, burnout signals, and culture gaps while there's still time to act.",
  alternates: { canonical: "https://empuls.io/platform/surveys-pulse" },
  openGraph: {
    title: "Pulse Surveys | Empuls",
    description: "9 engagement drivers, weekly/monthly/quarterly cadence, fully automated. 94% response rate.",
    url: "https://empuls.io/platform/surveys-pulse",
    images: [{ url: "/og/surveys-pulse.png", width: 1200, height: 630, alt: "Empuls Pulse Surveys" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function PulseSurveysPage() {
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
