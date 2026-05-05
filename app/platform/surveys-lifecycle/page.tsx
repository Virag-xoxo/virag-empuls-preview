import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/surveys-lifecycle/Hero";
import HowItWorks from "@/components/surveys-lifecycle/HowItWorks";
import FeatureBento from "@/components/surveys-lifecycle/FeatureBento";
import Testimonials from "@/components/surveys-lifecycle/Testimonials";
import Integrations from "@/components/surveys-lifecycle/Integrations";
import FAQ from "@/components/surveys-lifecycle/FAQ";
import FinalCTA from "@/components/surveys-lifecycle/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lifecycle Surveys — Feedback at Every Employee Moment | Empuls",
  description:
    "Capture feedback at every stage of the employee journey. Lifecycle surveys trigger automatically at onboarding, training, performance, and exit — driven by HRIS events, not calendars.",
  alternates: { canonical: "https://empuls.io/platform/surveys-lifecycle" },
  openGraph: {
    title: "Lifecycle Surveys | Empuls",
    description: "Onboarding, training, performance, exit — survey triggers fire automatically when HRIS events occur.",
    url: "https://empuls.io/platform/surveys-lifecycle",
    images: [{ url: "/og/surveys-lifecycle.png", width: 1200, height: 630, alt: "Empuls Lifecycle Surveys" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function LifecycleSurveysPage() {
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
