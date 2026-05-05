"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What counts as a 'project completion' for trigger purposes?",
    a: "Any signal your project management tool can send. Common triggers include: a Jira sprint marked complete, a project status field changed to &ldquo;Done,&rdquo; a GitHub release published, a manager checking an approval checkbox, or a custom API event from any system. Empuls is trigger-agnostic — if the source system can send a webhook or API call, Empuls can act on it.",
  },
  {
    id: "item-2",
    q: "Can we reward phased projects at each stage, not just at final delivery?",
    a: "Yes. You can configure separate reward triggers for each project phase — Phase 1 completion fires a reward, Phase 2 fires another, and the final delivery triggers the largest reward. This keeps motivation high throughout long projects and ensures early-phase contributors are recognized even if they rotate off before final delivery.",
  },
  {
    id: "item-3",
    q: "What if a project involved contractors or temporary staff?",
    a: "Empuls supports reward delivery to non-HRMS users via email redemption links. Contractors can redeem rewards from the same global catalog as full-time employees, without needing an Empuls account. Reward eligibility rules can be configured per project to include or exclude contractor profiles as your policy requires.",
  },
  {
    id: "item-4",
    q: "How does Empuls handle team changes mid-project?",
    a: "Rewards are distributed to whoever is listed on the project at the time the completion trigger fires. If team membership changes mid-project, you can configure Empuls to reward only the current team, only the original team, or the union of both. Managers also have the option to manually adjust the recipient list before a reward fires.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Project Completion Rewards</h2>
          <p className="text-dark-100 text-base leading-relaxed">What engineering and delivery leaders ask before automating project recognition.</p>
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
