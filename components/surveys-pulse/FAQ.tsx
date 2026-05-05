"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How short should a pulse survey be to maintain high response rates?",
    a: "Empuls recommends 3&ndash;5 questions for weekly pulses and no more than 10 for monthly ones. Our data shows response rates drop sharply past 8 minutes of completion time. The weekly pulse format completes in under 2 minutes &mdash; which is why Empuls customers consistently achieve 90%+ response rates compared to the 30&ndash;40% industry average for longer email surveys.",
  },
  {
    id: "item-2",
    q: "What are the nine engagement drivers Empuls tracks?",
    a: "Empuls tracks: Strategic connect, Hygiene factors, Recognition &amp; Career Growth, Relationship &amp; Culture, Relationship with peers, Relationship with manager, Satisfaction, Alignment, and Happiness. These nine drivers are based on validated engagement research and give a comprehensive picture of what&apos;s driving or dampening employee engagement across teams.",
  },
  {
    id: "item-3",
    q: "Can managers see which individual employees responded negatively?",
    a: "No. All responses are fully anonymised. Managers see aggregated scores, department-level breakdowns, and AI-generated themes &mdash; but cannot identify individuals. Empuls also enforces a minimum group size threshold before any department-level breakdown is shown, so employees in small teams remain protected. This is critical for building the trust that leads to honest responses.",
  },
  {
    id: "item-4",
    q: "Will employees get survey fatigue from weekly pulses?",
    a: "Survey fatigue is a real risk with poorly designed programs. Empuls addresses this by rotating question sets across driver themes (so employees never see the same questions two weeks in a row), keeping surveys under 2 minutes, and making it visible when action is being taken on previous feedback. Employees are far more likely to keep participating when they see their responses driving actual change.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Pulse Surveys</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before standing up a pulse program.</p>
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
