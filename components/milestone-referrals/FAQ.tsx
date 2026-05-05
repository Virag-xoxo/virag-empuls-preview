"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Can we set different reward amounts per role level or department?",
    a: "Yes. You can configure unique reward tiers per job family, seniority level, or department. Senior Engineering referrals can have a 5× higher payout than junior roles, reflecting the actual hiring cost saved. Campaign-specific boosts can also be set for hard-to-fill positions, time-limited to drive urgency.",
  },
  {
    id: "item-2",
    q: "What if the referred candidate is declined but re-applies later?",
    a: "Empuls tracks referral attribution with configurable expiry windows. If a candidate is re-hired within the attribution window (default 12 months), the original referrer still receives credit. If the candidate applies again after the window closes, it's treated as a fresh referral. These rules are fully configurable by admins.",
  },
  {
    id: "item-3",
    q: "How do we prevent gaming — employees referring unqualified candidates just for points?",
    a: "The multi-stage structure naturally prevents gaming. The largest rewards sit at the end of the funnel — interview passed and probation cleared — rather than at submission. Employees who refer poor-fit candidates waste their own social capital with hiring managers, creating a natural quality filter.",
  },
  {
    id: "item-4",
    q: "Can alumni or ex-employees also earn referral rewards?",
    a: "Yes. Empuls supports external reward delivery via email redemption links — no Empuls account needed. Alumni referral programs can be configured separately with their own reward tier and attribution rules. Rewards are delivered as gift card links to the global catalog, redeemable in 175+ countries.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Referral Rewards</h2>
          <p className="text-dark-100 text-base leading-relaxed">What recruiting and HR leaders ask before launching a structured referral program.</p>
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
