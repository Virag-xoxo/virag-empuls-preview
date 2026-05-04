"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Can I build commission plans with multiple tiers and accelerators?",
    a: "Yes. Empuls supports configurable tiered logic with as many breakpoints as you need: define quota thresholds, the rate at each level, and accelerator multipliers. The correct rate is automatically applied to each deal based on cumulative attainment, so accelerator math doesn&apos;t require a quarter-end reconciliation pass.",
  },
  {
    id: "item-2",
    q: "How do reps access their commission statements?",
    a: "Every rep gets a personal Empuls dashboard with a live earnings statement &mdash; every deal listed with deal amount, rate applied, and earned amount, plus current quota attainment, the active tier, and the threshold to the next accelerator. Available on web and mobile. Reps can audit their own statements without filing a ticket.",
  },
  {
    id: "item-3",
    q: "What happens if a deal is refunded or the amount changes after close?",
    a: "Empuls syncs deal updates from the CRM in real time. If an amount is revised, the statement automatically adjusts and the rep is notified. If a deal is cancelled, the related commission is reversed (or held if rep&apos;s wallet has been redeemed). Every adjustment is logged in the audit trail with timestamp and reason.",
  },
  {
    id: "item-4",
    q: "Does Empuls handle multi-currency payouts for global sales teams?",
    a: "Yes. Payouts are delivered in local currencies across 175+ countries. Deal values are converted at current FX rates, and reps can redeem as gift cards, digital rewards, prepaid cards, or local bank transfer &mdash; no payroll involvement required. Tax-compliant by region; reporting available in your reporting currency.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div className="text-center mb-12"
          initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Common questions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Compensation Management</h2>
          <p className="text-dark-100 text-base leading-relaxed">What RevOps, finance, and sales-comp teams ask before automating commissions.</p>
        </motion.div>
        <motion.div initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease, delay: 0.1 }}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full bg-white border border-light-200 rounded-2xl overflow-hidden shadow-sm">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <span dangerouslySetInnerHTML={{ __html: faq.a }} />
                </AccordionContent>
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
