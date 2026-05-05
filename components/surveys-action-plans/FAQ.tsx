"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Can action plans be created from any survey type — not just pulse surveys?",
    a: "Yes. Action plans can be created from any survey result in Empuls — pulse surveys, lifecycle surveys, mood-o-meter scores, or custom surveys. The action plan feature is a platform-level capability, not tied to a specific survey type. You can even create action plans proactively without a specific survey trigger, if you want to address a known issue.",
  },
  {
    id: "item-2",
    q: "What engagement drivers can action plans be tagged to?",
    a: "Tasks can be tagged to: Mood Index, Diversity and Inclusion, Retention, Management &amp; Leadership, and Teamwork — along with the nine drivers tracked in pulse surveys (Strategic connect, Hygiene factors, Recognition &amp; Career Growth, Relationship &amp; Culture, Relationship with peers, Relationship with manager, Satisfaction, Alignment, Happiness). Tags help you track which areas your organisation is actively working on.",
  },
  {
    id: "item-3",
    q: "Can employees see which action plans have been created from their survey responses?",
    a: "Employee visibility is controlled by access settings. When enabled, employees can see tasks that were created in response to their team's survey results — and whether those tasks are open, in progress, or completed. This transparency is one of the most effective drivers of improved response rates in subsequent survey cycles, because employees see that their feedback creates real outcomes.",
  },
  {
    id: "item-4",
    q: "How does Empuls track whether action plans are actually completed?",
    a: "Each task has a status that the assigned person updates — Active, In Review, or Done. HR admins can filter and monitor all tasks across the organisation. The ETA field flags overdue items. On task completion, the closure is logged with a date, creating an auditable record of engagement follow-through that can be referenced in future planning cycles.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Action Plans</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before adding a closed-loop step to their survey program.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: 0.1 }}>
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
