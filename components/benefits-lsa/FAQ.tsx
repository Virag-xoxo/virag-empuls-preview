"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What is a Lifestyle Spending Account (LSA)?",
    a: "A Lifestyle Spending Account (LSA) is an employer-funded allowance that employees can spend on a defined set of lifestyle categories — fitness, wellness, learning, meals, family care, and more. Unlike traditional benefits, LSAs give employees the freedom to choose what matters most to them, within the categories the organization enables.",
  },
  {
    id: "item-2",
    q: "How is an LSA different from a flexible benefits plan?",
    a: "Flexible benefits plans typically involve pre-tax salary structuring designed to reduce taxable income (such as meal allowances or travel allowance). LSAs are employer-funded lifestyle allowances focused on well-being, personal development, and quality of life. Both can coexist on Empuls and serve distinct purposes in a total rewards strategy.",
  },
  {
    id: "item-3",
    q: "Does Empuls support LSAs for global and remote teams?",
    a: "Yes. Empuls supports LSA programs across 100+ countries with multi-currency configuration. The platform handles local compliance, supports region-specific categories like remote work setup, and integrates with global HRMS tools to auto-enroll distributed workforces without manual intervention.",
  },
  {
    id: "item-4",
    q: "How does spending work — reimbursement or direct redemption?",
    a: "Empuls supports both. Employees can redeem directly from a curated catalog of brands and categories — no reimbursement required. For purchases outside the catalog, they can submit a claim with a receipt that settles against their wallet balance. Both flows are available from the same interface.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about LSAs</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and Total Rewards teams ask before launching a lifestyle spending program.</p>
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
