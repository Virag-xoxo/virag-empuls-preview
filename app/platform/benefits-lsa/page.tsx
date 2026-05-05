import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/benefits-lsa/Hero";
import HowItWorks from "@/components/benefits-lsa/HowItWorks";
import FeatureBento from "@/components/benefits-lsa/FeatureBento";
import Testimonials from "@/components/benefits-lsa/Testimonials";
import Integrations from "@/components/benefits-lsa/Integrations";
import FAQ from "@/components/benefits-lsa/FAQ";
import FinalCTA from "@/components/benefits-lsa/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lifestyle Spending Account — Spend on What Matters | Empuls",
  description:
    "Fund a lifestyle allowance every employee spends their own way — fitness, wellness, learning, meals, family care, and more. Fully managed, globally scalable.",
  alternates: { canonical: "https://empuls.io/platform/benefits-lsa" },
  openGraph: {
    title: "Lifestyle Spending Account | Empuls",
    description: "Employer-funded annual allowance. 8+ spending categories. 100+ countries. Zero reimbursement paperwork.",
    url: "https://empuls.io/platform/benefits-lsa",
    images: [{ url: "/og/benefits-lsa.png", width: 1200, height: 630, alt: "Empuls LSA" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function LSAPage() {
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
