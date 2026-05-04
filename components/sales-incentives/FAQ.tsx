"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls handle complex tiered commission structures?",
    a: "Empuls supports multi-tier logic with as many breakpoints as you need: a base rate, a target rate, an accelerator above quota, and a kicker for exceptional performance. You define the thresholds and multipliers; Empuls applies the correct rate to each deal based on cumulative attainment. Calculations are transparent to the rep, which eliminates the disputes that plague spreadsheet-based plans.",
  },
  {
    id: "item-2",
    q: "Can we run different programs for AEs, SDRs, and channel partners simultaneously?",
    a: "Yes. Run as many concurrent programs as you need, each with its own goal type, tier structure, payout rules, and recipient group. Account executives can be on a closed-won-revenue plan, SDRs on a per-MQL bounty, and channel partners on a flat-percentage program &mdash; all administered from one dashboard. Plans are reusable as templates so a new region or role can launch in under an hour.",
  },
  {
    id: "item-3",
    q: "How quickly are commissions paid out after a deal closes?",
    a: "Instantly. The moment a deal is marked closed-won in your CRM, Empuls calculates the commission and posts it to the rep&apos;s wallet. The rep can redeem immediately as Amazon vouchers, Visa prepaid cards, experiences, or bank transfer across 175+ countries. No payroll cycle, no end-of-quarter waiting.",
  },
  {
    id: "item-4",
    q: "What reporting do sales leaders get?",
    a: "Real-time analytics on individual and team quota attainment, total incentive spend, program ROI, and engagement metrics. Filter by team, region, role, or time window. Built-in effectiveness tracking compares plan variants side-by-side so you can see which structure actually drove revenue, not just which one paid out the most.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Sales Incentives</h2>
          <p className="text-dark-100 text-base leading-relaxed">What sales leaders, RevOps, and finance teams ask before automating commissions.</p>
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
