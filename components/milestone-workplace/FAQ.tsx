"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Can different departments have different milestone configurations?",
    a: "Yes. Every department, plant, region, or team can run its own program with its own thresholds, point values, and reward types. Operations might track 30-day safety streaks, Sales tracks quota attainment, and Customer Support tracks perfect-attendance months — all on the same platform, with the same admin console. Configurations are reusable as templates, so a new region can launch in under an hour.",
  },
  {
    id: "item-2",
    q: "How does Empuls sync with our HRMS for attendance?",
    a: "Empuls connects natively to Workday, SAP SuccessFactors, BambooHR, Darwinbox, Keka, Rippling, ADP, UKG, and others — or via webhook/API for any system that exposes attendance events. Daily syncs pull verified time-and-attendance data, so milestone calculations always run on the same source of truth your payroll team trusts. Manual edits in the HRMS automatically reflect in Empuls without re-import.",
  },
  {
    id: "item-3",
    q: "What happens if a streak gets broken — do we lose everything?",
    a: "Rewards already earned are never clawed back. When a streak breaks, you choose what happens next: a hard reset to zero, a configurable grace window (e.g. one missed day per 30-day streak is forgiven), or partial credit for the days already accumulated. Most teams use a 1-day grace policy, which keeps streaks meaningful without punishing single-incident outliers.",
  },
  {
    id: "item-4",
    q: "Can rewards be split across a whole team, or only individuals?",
    a: "Both. Team milestones — like a zero-incident streak for an ops crew or a quota-hit for a sales pod — can split points equally across all members, distribute weighted by tenure or contribution, or fund a shared team experience (offsite, lunch, a charity donation). Individual milestones land directly in the recipient's wallet. Mixed models are common: a base reward to every team member, plus a bonus to the lead.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Workplace Milestones</h2>
          <p className="text-dark-100 text-base leading-relaxed">What HR, Operations, and Safety teams ask before automating workplace rewards.</p>
        </motion.div>
        <motion.div initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease, delay: 0.1 }}>
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
