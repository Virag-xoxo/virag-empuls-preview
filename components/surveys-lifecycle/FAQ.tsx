"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What is the difference between lifecycle surveys and pulse surveys?",
    a: "Pulse surveys run on a recurring schedule &mdash; weekly, monthly, or quarterly &mdash; to track engagement trends over time. Lifecycle surveys are event-triggered: they fire when something specific happens in an employee&apos;s journey (joining, completing a training, having an appraisal, or leaving). Together they provide two complementary listening layers &mdash; one continuous, one contextual.",
  },
  {
    id: "item-2",
    q: "How does Empuls know when to trigger a lifecycle survey?",
    a: "Empuls syncs with your HRIS (Workday, BambooHR, SAP, Oracle, or via API) and reads events as they happen &mdash; a new hire reaching 30 days, a training status change in your LMS, or a resignation date being logged. Each trigger rule is configured once in Empuls and fires automatically whenever the qualifying condition is met for any employee.",
  },
  {
    id: "item-3",
    q: "Can we customise which employees receive which lifecycle surveys?",
    a: "Yes. Trigger rules can be scoped by department, location, role, employment type, or tenure. You might want a 30-day onboarding survey for all new hires but a different version for senior leaders &mdash; that&apos;s fully configurable. Different teams can also have entirely separate lifecycle survey tracks with different templates and question sets.",
  },
  {
    id: "item-4",
    q: "What happens if an employee doesn't complete a lifecycle survey?",
    a: "Empuls sends an automatic reminder after 48 hours if the survey hasn&apos;t been completed. A second reminder can be configured at 5 days. After the survey window closes (which you set), responses are no longer accepted and the result is marked as incomplete in your reporting. HR admins can see non-response rates per survey type to identify workflow issues.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Lifecycle Surveys</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before automating event-driven feedback.</p>
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
