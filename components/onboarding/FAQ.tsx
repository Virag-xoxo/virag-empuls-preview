"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls know when a new hire is starting?",
    a: "Empuls connects to your HRMS — Workday, BambooHR, Darwinbox, Keka, and 250+ others — and reads the joining date for every new employee. The full welcome experience (kit, points, message, team shoutout) is queued automatically the moment the joining date is set, and fires on Day 1 with no HR action required.",
  },
  {
    id: "item-2",
    q: "Can we customize the welcome kit per role, team, or country?",
    a: "Yes. You can configure different welcome kits for different cohorts — engineering vs. sales, India vs. US vs. EMEA, full-time vs. contractor. Each cohort gets its own gift collection, point allocation, and message template. The recipient still picks what they want from inside the collection you sent.",
  },
  {
    id: "item-3",
    q: "Does this work for remote, hybrid, and globally distributed teams?",
    a: "Absolutely. The welcome arrives via Slack, Teams, email, or the Empuls mobile app — whichever channels your company uses. The reward catalog auto-localises to the new hire's country with options in their local currency. A new hire in Berlin and a new hire in Boston get equally great Day-1 experiences with zero per-region setup.",
  },
  {
    id: "item-4",
    q: "Can managers add a personal note on top of the automated welcome?",
    a: "Yes. Empuls notifies managers a few days before each new hire's joining date and prompts them to add a personal note. Empuls Copilot drafts a tailored welcome message based on the new hire's role and team — managers can approve, edit, or replace it. The personal note ships alongside the automated welcome kit.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Frequently asked questions</h2>
          <p className="text-dark-100 text-base leading-relaxed">Questions HR teams ask before rolling out automated onboarding.</p>
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
