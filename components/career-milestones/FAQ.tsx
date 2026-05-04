"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls know when someone gets promoted?",
    a: "Empuls connects to your HRMS (Workday, BambooHR, Darwinbox, SAP SuccessFactors, and 250+ others) and monitors configured fields — such as job title, grade level, or department. When a change is detected, the milestone recognition fires automatically on the effective date. No manual intervention from HR is required.",
  },
  {
    id: "item-2",
    q: "Can we create custom milestone types beyond promotions?",
    a: "Yes. Admins can define any milestone type — certifications, patent filings, sales targets, project completions, innovation awards — and configure the trigger (HRMS field change, manager nomination, or manual entry). Each milestone type can have its own reward value, message template, and certificate design.",
  },
  {
    id: "item-3",
    q: "How is Career Milestones different from Service Awards?",
    a: "Service Awards recognize tenure — years 1, 3, 5, 10, and beyond — based on date of joining. Career Milestones recognizes achievement-based growth events: promotions, certifications, role changes, and project wins. They work together; many customers run both programs simultaneously to cover the full employee lifecycle.",
  },
  {
    id: "item-4",
    q: "Does this work for remote and global employees?",
    a: "Yes. Milestone notifications are delivered via Slack, Microsoft Teams, or email — wherever your team works. Reward points unlock a catalog localized to 175+ countries with options in local currency, so a remote employee in Amsterdam or a hybrid employee in Chicago gets the same quality recognition experience.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Career Milestones</h2>
          <p className="text-dark-100 text-base leading-relaxed">What HR teams ask before rolling out automated milestone recognition.</p>
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
