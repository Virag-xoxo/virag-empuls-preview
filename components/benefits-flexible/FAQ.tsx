"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What is a flexible benefits plan, and how does it work in Empuls?",
    a: "A flexible benefits plan gives employees a pre-set annual budget they can allocate across a menu of approved benefit categories — meals, fuel, phone, travel, and more. In Empuls, HR configures the plan (categories and budget caps), publishes it to employees, and employees choose their own allocation from their personal portal. Claims are submitted and approved digitally, with tax handling automated.",
  },
  {
    id: "item-2",
    q: "Which benefit categories can be included in a flexible plan?",
    a: "Empuls supports tax-saving benefit categories including meal allowance, fuel reimbursement, phone and internet, books and periodicals, and travel allowance. These are structured in line with applicable tax exemption rules. Additionally, company-sponsored categories like health and wellness, learning and development, and device leasing can be included based on company policy.",
  },
  {
    id: "item-3",
    q: "How does the claims process work for employees?",
    a: "Employees submit claims directly from the Empuls app or web portal — selecting the benefit category, entering the claim amount, and uploading a receipt or supporting document. The claim enters the configured approval workflow, and the employee can track its status in real time. Once approved, the reimbursement is processed through payroll. There are no paper forms or email chains involved.",
  },
  {
    id: "item-4",
    q: "Do employees need to submit investment proofs for flexible benefits claims?",
    a: "No. Tax-exempt flexible benefits in Empuls work on a reimbursement basis — employees submit actual bills and receipts for expenses they've incurred. Because these are expense reimbursements (not investment-linked declarations), employees do not need to provide investment proofs. This makes the process straightforward for employees and simpler to audit for HR and finance teams.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Flexible Benefits</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People, HR, and finance teams ask before launching a flexible benefits program.</p>
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
