"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How is Empuls Surveys different from standalone tools like SurveyMonkey or Typeform?",
    a: "Standalone survey tools collect responses but stop there. Empuls closes the loop &mdash; AI analyses sentiment in open-ended answers, surfaces engagement drivers by department, and lets you assign action plans directly from insights inside the same platform. Your HRIS data is also pre-connected, so surveys auto-segment by team, tenure, location, or grade without manual list management.",
  },
  {
    id: "item-2",
    q: "How does Empuls achieve such high response rates?",
    a: "Empuls delivers surveys through channels employees already use &mdash; Slack, Microsoft Teams, or email &mdash; with smart reminder nudges that stop once someone responds. Surveys are short by design (most pulse checks are under 3 minutes) and employees trust the platform because they also use it for recognition and rewards, so engagement is higher from the start.",
  },
  {
    id: "item-3",
    q: "Can managers see individual employee responses?",
    a: "No &mdash; individual responses are anonymised. Managers see aggregated scores, department-level breakdowns, and AI-generated themes, but cannot identify who said what. Empuls enforces a minimum group size threshold (configurable, typically 5) before any breakdown is displayed, protecting employee privacy while still providing actionable team-level insights.",
  },
  {
    id: "item-4",
    q: "How does the AI sentiment analysis work on open-ended responses?",
    a: "Empuls uses natural language processing to read every open-ended response, classify the sentiment (positive, neutral, negative), and cluster similar comments into themes like &ldquo;workload&rdquo;, &ldquo;manager communication&rdquo;, or &ldquo;growth opportunities&rdquo;. The result is a ranked list of themes &mdash; with representative quotes &mdash; that managers can act on immediately, without reading hundreds of individual comments.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Empuls Surveys</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before switching from standalone survey tools.</p>
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
