"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does the Empuls Perks Store work?",
    a: "The Perks Store is accessible under Benefits → Perks Store in the employee navigation. Employees browse by category or search for specific brands, select a gift card denomination or coupon offer, proceed to checkout, and receive the code or voucher directly to their registered email — typically within seconds.",
  },
  {
    id: "item-2",
    q: "How much can employees realistically save?",
    a: "A typical U.S. household earning $90,000 per year can save over $7,000 annually through Empuls discounts by shifting everyday purchases — groceries, dining, travel, subscriptions, and shopping — to discounted gift cards and exclusive offers available in the store.",
  },
  {
    id: "item-3",
    q: "What brands and categories are available?",
    a: "The store includes 20,000+ local and international brands across 25+ categories, including Food & Dining, Travel, Wellbeing, Apparel, Beauty, Electronics, Entertainment, Learning, Top Brands, and more. Discounted gift cards are available for 6,000+ of those brands at 5–50% off.",
  },
  {
    id: "item-4",
    q: "Is there any cost to the company for the Perks Store?",
    a: "The Perks Store is included in Empuls with no additional subscription fees. There is no catalog curation cost, no per-transaction charge to the employer, and no setup fee. Employees purchase discounted items at their own expense — the company simply provides access as a workplace benefit, with no financial outlay required.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about the Perks Store</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before turning on a corporate discount benefit.</p>
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
