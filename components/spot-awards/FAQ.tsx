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
    q: "How are Spot Awards different from Service Awards or Milestone Awards?",
    a: "Spot Awards are given in real-time — anytime, for any reason — by anyone in the org. Service and Milestone Awards are pre-scheduled, anniversary-based rewards. Spot Awards are the spontaneous layer; the others are the structured layer. Empuls manages both, but they serve different cultural purposes.",
  },
  {
    id: "item-2",
    q: "Can employees recognize their managers, or only peers and direct reports?",
    a: "Yes. Recognition in Empuls flows in all directions: peer-to-peer, bottom-up (employee to manager), top-down (manager to employee), and cross-departmental. HR admins can configure which flows are enabled in their organization.",
  },
  {
    id: "item-3",
    q: "How do point budgets work — who controls them?",
    a: "HR admins set monthly or quarterly point budgets at the department or manager level. Managers can allocate points to their team members for peer awards, or hold them to give directly. Unused budgets do not roll over by default (configurable). All spending is tracked in the analytics dashboard.",
  },
  {
    id: "item-4",
    q: "Do points expire, and what can they be redeemed for?",
    a: "Point expiry is configurable — most companies set a 6-to-12 month validity window to encourage active use. Points redeem in Empuls's 1M+ global rewards catalog: gift cards, merchandise, experiences, charitable donations, and local options tailored by country.",
  },
  {
    id: "item-5",
    q: "Is the social recognition feed visible to the whole company or just a team?",
    a: "By default, Spot Award posts appear on the company-wide social wall and are visible to all employees. Privacy settings let HR admins restrict visibility to department-level feeds, or allow the award-giver to choose the audience at the time of recognition.",
  },
  {
    id: "item-6",
    q: "Which tools and HRIS systems does Empuls integrate with?",
    a: "Empuls connects natively with Slack, Microsoft Teams, Gmail, and Outlook for in-flow notifications. For HRIS sync, supported platforms include Workday, SAP SuccessFactors, BambooHR, Darwinbox, Keka, Rippling, Zoho People, and ADP — plus 50+ more via our integration catalog and REST API.",
  },
  {
    id: "item-7",
    q: "How do I measure whether the recognition program is working?",
    a: "The Empuls analytics dashboard tracks recognition frequency by team, value alignment distribution, budget utilization, adoption rate, and eNPS trends over time. Executive reports correlate recognition activity with retention and engagement scores, giving culture ROI evidence you can present to leadership.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Header */}
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
            Everything you&apos;d want to know
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Questions we hear from HR teams and execs before rolling out Spot Awards.
          </p>
        </motion.div>

        {/* Accordion */}
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

        {/* Bottom nudge */}
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
