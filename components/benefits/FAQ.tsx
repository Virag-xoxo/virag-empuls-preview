"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What benefit types does Empuls support?",
    a: "Empuls supports seven benefit types: Tax-saving Benefits, Lifestyle Spending Accounts, Health & Wellness, Discounts & Cashback, Early Wages & Loans, Insurance Benefits, and Device Benefits. These cover the personal, financial, physical, and mental dimensions of employee wellbeing — all managed from a single platform.",
  },
  {
    id: "item-2",
    q: "Can employees choose which benefits to use?",
    a: "Yes. Empuls is built around employee choice. Tax-saving benefits let employees pick from eligible categories like meals, fuel, and telephone expenses. Lifestyle Spending Accounts give employees a personal budget to allocate however they prefer. Even company-sponsored benefits offer a catalogue of categories — employees choose what's relevant to them, not what HR mandates.",
  },
  {
    id: "item-3",
    q: "How are tax-saving benefits structured in Empuls?",
    a: "Tax-saving benefits in Empuls cover eligible expense categories such as meal allowances, fuel reimbursements, telephone bills, and periodicals. Employees receive a structured allowance they can use across these categories, helping them maximize take-home pay while staying fully compliant with applicable tax regulations.",
  },
  {
    id: "item-4",
    q: "What is the difference between Tax-saving Benefits and a Lifestyle Spending Account?",
    a: "Tax-saving benefits are structured around specific government-approved expense categories (meals, fuel, telephone, periodicals) and are designed to reduce an employee's taxable income. A Lifestyle Spending Account (LSA) is a company-funded budget with broader flexibility — employees can allocate it across learning, wellness, financial tools, device leasing, and more. Both exist on Empuls and can be offered together.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Benefits & Perks</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before consolidating benefits onto one platform.</p>
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
