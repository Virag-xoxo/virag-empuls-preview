"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls know when each employee's anniversary is?",
    a: "Empuls reads date-of-joining from your HRMS integration. The moment a joining date is added or synced, the employee is automatically enrolled in the appropriate milestone program. No manual imports or reminders needed.",
  },
  {
    id: "item-2",
    q: "Can I configure different rewards for Year 1, Year 5, and Year 10?",
    a: "Yes. Each milestone tier has its own reward value, gift collection, and personalized message. You can set up separate automations for Years 1, 3, 5, 10, and beyond — each with different budgets and catalog access.",
  },
  {
    id: "item-3",
    q: "What exactly is the digital yearbook?",
    a: "When an anniversary triggers, Empuls notifies the employee's teammates to contribute messages and wishes. All posts are automatically compiled into a downloadable keepsake — the yearbook — that the employee can view and download anytime, permanently.",
  },
  {
    id: "item-4",
    q: "Does this work for distributed, global teams?",
    a: "Yes. Empuls supports 175+ countries with auto-localised reward catalogs in local currencies. You can also set location-based reward filters per milestone tier — so employees always see relevant options without any regional setup required from HR.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            Common questions
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Questions HR teams ask before rolling out automated service awards.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full bg-white border border-light-200 rounded-2xl overflow-hidden shadow-sm"
          >
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <p className="text-center text-sm text-dark-100 mt-8">
          Still have questions?{" "}
          <a href="#" className="text-blue-200 font-semibold hover:underline">
            Talk to our team →
          </a>
        </p>
      </div>
    </section>
  );
}
