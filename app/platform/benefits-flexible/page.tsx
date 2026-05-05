import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/benefits-flexible/Hero";
import HowItWorks from "@/components/benefits-flexible/HowItWorks";
import FeatureBento from "@/components/benefits-flexible/FeatureBento";
import Testimonials from "@/components/benefits-flexible/Testimonials";
import Integrations from "@/components/benefits-flexible/Integrations";
import FAQ from "@/components/benefits-flexible/FAQ";
import FinalCTA from "@/components/benefits-flexible/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flexible Benefits — HR Configures, Employees Choose | Empuls",
  description:
    "A pre-tax flexible benefits plan where HR sets the categories and budget caps and employees self-allocate. Digital claims, automatic tax handling, zero paperwork.",
  alternates: { canonical: "https://empuls.io/platform/benefits-flexible" },
  openGraph: {
    title: "Flexible Benefits Platform | Empuls",
    description: "HR configures the plan. Employees choose what works for them. Tax savings and claims happen automatically.",
    url: "https://empuls.io/platform/benefits-flexible",
    images: [{ url: "/og/benefits-flexible.png", width: 1200, height: 630, alt: "Empuls Flexible Benefits" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function FlexibleBenefitsPage() {
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
