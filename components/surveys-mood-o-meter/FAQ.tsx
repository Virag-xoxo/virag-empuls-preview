"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How often does the Mood-o-meter check-in appear for employees?",
    a: "The Mood-o-meter widget appears in the Empuls social feed for employees to respond to. Admins can configure settings &mdash; including the question and other parameters &mdash; from the three-dot menu on the dashboard. The check-in is non-intrusive: it sits in the feed alongside recognition and posts rather than interrupting the employee with a pop-up or notification.",
  },
  {
    id: "item-2",
    q: "Can a manager ever see how a specific employee voted?",
    a: "No. Individual responses are never exposed &mdash; not to managers, not to HR admins. The system only displays aggregated % positive scores at the team level. Anonymity settings can be configured from the three-dot menu on the Mood-o-meter Dashboard to control how responses are handled.",
  },
  {
    id: "item-3",
    q: "What does \"% positive\" mean — how is the Org Sentiment Score calculated?",
    a: "The Org Sentiment Score is the percentage of employees who responded with &ldquo;Happy&rdquo; or &ldquo;Very happy&rdquo; out of all who checked in that day. Neutral, A bit low, and Stressed responses are counted as non-positive. The dashboard also shows the exact count and percentage for each of the five mood options, so you can see the full distribution rather than just the headline number.",
  },
  {
    id: "item-4",
    q: "How does the heatmap segmentation work?",
    a: "The Team Sentiment Heatmap defaults to Department view, but you can switch to any of 8 dimensions &mdash; Designation, Location, Business Unit, Grade, Cost Center, Manager, or Tenure &mdash; by clicking the tabs above the table. Each cell shows % positive for that team on that day, colour-coded: teal for high, pink for low. The Filter panel lets you narrow the data further before reading the heatmap.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div className="text-center mb-12"
          initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduce ? 0 : 0.5, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Common questions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Mood-o-meter</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before launching a daily mood check-in.</p>
        </motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: 0.1 }}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full bg-white border border-light-200 rounded-2xl overflow-hidden shadow-sm">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent><span dangerouslySetInnerHTML={{ __html: faq.a }} /></AccordionContent>
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
