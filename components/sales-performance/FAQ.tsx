"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls keep quota attainment data current?",
    a: "Empuls connects directly to your CRM via native integration or webhook. Every deal close or pipeline stage change is captured in real time, and attainment percentages update immediately. There's no batch sync, no nightly job, no manual import — the dashboard your reps open at 9am reflects the deal that closed at 8:55am.",
  },
  {
    id: "item-2",
    q: "Can reps see how close they are to the next commission tier?",
    a: "Yes. Each rep's dashboard shows the current tier, the threshold to the next accelerator, and the revenue gap. Open pipeline deals are surfaced with projected commission so reps can prioritise the deals that close the gap. The view updates live, so the prioritisation stays current.",
  },
  {
    id: "item-3",
    q: "How do sales contests work — can we run multiple at once?",
    a: "Yes. Run as many concurrent contests as you need, each targeting a different metric, team, or window. Contests can be based on revenue, pipeline created, deals closed, calls booked, or any CRM activity metric. Winners are determined automatically; prizes and points are awarded without manual intervention.",
  },
  {
    id: "item-4",
    q: "What are AI nudges and how do they get sent to reps?",
    a: "AI nudges are automated, personalised alerts that fire when a rep is close to a meaningful threshold — a rank up, a contest prize tier, the next commission accelerator. They're delivered in-app, in Slack, or in email. Each nudge is specific to the rep's current pipeline and the gap to the next milestone, not a generic broadcast.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Performance Management</h2>
          <p className="text-dark-100 text-base leading-relaxed">What sales leaders, RevOps, and frontline managers ask before automating quota and contest tracking.</p>
        </motion.div>
        <motion.div initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, ease, delay: 0.1 }}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full bg-white border border-light-200 rounded-2xl overflow-hidden shadow-sm">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger><span dangerouslySetInnerHTML={{ __html: faq.q }} /></AccordionTrigger>
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
