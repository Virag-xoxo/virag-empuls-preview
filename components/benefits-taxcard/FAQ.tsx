"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What is a tax-saving benefits card and how does it work?",
    a: "The Empuls tax-saving benefits card is an RBI-compliant prepaid card that loads employees' pre-tax allowances — meal, fuel, books, and telecom — directly onto a physical or virtual card. Employees spend against these allowances at approved merchants, and the amounts remain within Income Tax Act exemption limits, reducing their taxable income without any manual paperwork or reimbursement cycle.",
  },
  {
    id: "item-2",
    q: "Which allowances are covered under the Empuls benefits card?",
    a: "The card covers four tax-exempt allowances. Meal Allowance is exempt up to ₹1,05,600/year (₹200/meal × 2 meals × 22 working days × 12 months). Fuel & Conveyance Allowance is exempt up to ₹19,200/year (₹1,600/month). Books & Periodicals and Telecom Allowances have no prescribed statutory cap — they are fully exempt based on actual expenses and actual bills submitted respectively. HR teams can activate any combination of these categories.",
  },
  {
    id: "item-3",
    q: "Is the card issued physically or virtually?",
    a: "Both. Empuls issues both physical and virtual prepaid cards. Physical cards are delivered to employees and work at POS terminals, while virtual cards are available instantly via the Empuls mobile app for online purchases and contactless payments. Employees can manage both from the same app interface.",
  },
  {
    id: "item-4",
    q: "How does MCC restriction ensure category compliance?",
    a: "Each allowance category on the card is linked to specific Merchant Category Codes (MCCs). This means meal allowance funds can only be spent at food and dining merchants, fuel allowance only at fuel stations, and so on. This prevents misuse and ensures every transaction aligns with its tax-exempt purpose — keeping the program fully compliant without HR intervention.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about the Tax-Saving Card</h2>
          <p className="text-dark-100 text-base leading-relaxed">What payroll, HR, and finance teams ask before launching a tax-saving allowance program.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: 0.1 }}>
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
