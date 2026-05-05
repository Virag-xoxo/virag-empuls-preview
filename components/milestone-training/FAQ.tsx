"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How does Empuls connect to our LMS?",
    a: "Empuls connects via native integrations for major platforms (Coursera, Degreed, Cornerstone, SAP SuccessFactors, and others) or via webhook/API for any LMS that supports event notifications. The setup takes under 30 minutes. Once connected, course completion events flow into Empuls automatically and the configured reward fires without any manual action.",
  },
  {
    id: "item-2",
    q: "Can we reward external certifications not tracked in our LMS?",
    a: "Yes. Employees can submit certification evidence directly in Empuls (certificate image, exam score, or credential ID). An admin reviews and approves the submission, which triggers the reward. For high-volume programs, you can also configure trusted external providers — any certification from a pre-approved list auto-approves without manual review.",
  },
  {
    id: "item-3",
    q: "Can different courses have different reward values?",
    a: "Yes. Reward values are configurable per course, per course type, or per skill level. A 30-minute microlearning module can be worth 50 pts, while completing a 40-hour professional certification earns 1,000 pts. You can also set multipliers for strategic skills areas — cloud, AI, cybersecurity — to reflect business priority.",
  },
  {
    id: "item-4",
    q: "Do employees lose rewards if a certification expires or lapses?",
    a: "No — rewards already received are not clawed back when a certification lapses. However, you can configure renewal incentives: a smaller reward fires when an employee renews a certification before expiry. This keeps employees proactively maintaining their credentials rather than letting them lapse.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about L&amp;D Rewards</h2>
          <p className="text-dark-100 text-base leading-relaxed">What L&amp;D and HR teams ask before automating learning rewards.</p>
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
