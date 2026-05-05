"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What is the Empuls health and wellness store?",
    a: "The Empuls wellness store is a curated collection of rewards and experiences designed to support holistic employee wellbeing. It includes fitness memberships, wellness subscriptions, health checkup packages, pharmacy access, mental wellness resources, and care services for loved ones — all available for redemption via reward points or company-sponsored bulk purchases.",
  },
  {
    id: "item-2",
    q: "Can employees choose their own wellness rewards?",
    a: "Yes. Employees have complete flexibility to choose what matters most to them from the catalog. They can navigate to Redeem > Health & Wellness, select their preferred category and benefit, and book or place an order directly. No separate provider account is required — everything is managed within Empuls.",
  },
  {
    id: "item-3",
    q: "How is the wellness catalog integrated into the rewards experience?",
    a: "The wellness catalog is seamlessly integrated into the Empuls rewards platform. Employees can redeem their reward points directly for wellness-related perks through a user-friendly storefront. Individual redemption and company-sponsored programs can run simultaneously — employees can use their points or benefit from employer-purchased packages at the same time.",
  },
  {
    id: "item-4",
    q: "Can employers buy wellness benefits in bulk?",
    a: "Yes. Employers can bulk-purchase wellness benefits and distribute them easily, ensuring company-wide access to top-tier health programs at preferred corporate rates. Admins can access this through Programs > Employee Benefits > Wellness Benefits, select a category and partner, and submit an enquiry for pricing and activation.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduce ? 0 : 0.5, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Common questions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Health &amp; Wellness</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before consolidating wellness benefits onto one platform.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: 0.1 }}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full bg-white border border-light-200 rounded-2xl overflow-hidden shadow-sm">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <p className="text-center text-sm text-dark-100 mt-8">
          Still have questions?{" "}<a href="#" className="text-blue-200 font-semibold hover:underline">Talk to our team →</a>
        </p>
      </div>
    </section>
  );
}
