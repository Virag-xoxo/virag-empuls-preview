"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Can we send different gifts to employees in different countries?",
    a: "Yes. Audience targeting lets you filter recipients by location, department, designation, or custom HRMS fields. You can configure separate gift types for each audience — so the India team gets the Diwali collection, the Middle East team gets the Eid collection, and a global team receives a universal gift card, all from a single festive campaign setup.",
  },
  {
    id: "item-2",
    q: "What is the difference between Automate, Schedule, and Send manually?",
    a: "Automate is a recurring trigger — configure it once and the gift fires automatically on the occasion date every year, no HR action needed. Schedule lets you pick a specific future date for a one-off send, ideal for new festivals or pilot programs. Send manually delivers the gift immediately to any recipient — perfect for ad-hoc recognition or last-minute festive moments.",
  },
  {
    id: "item-3",
    q: "What gift types can we use for festive occasions?",
    a: "Empuls supports reward points, digital gift cards, curated merchandise collections (Fashion, Food, Lifestyle, Travel, and 20+ more categories), vouchers, digital codes, and non-monetary personalized greetings. Collections are country-customized so employees always see locally available options. You can also mix types — points plus a greeting, or a collection plus a personalized message.",
  },
  {
    id: "item-4",
    q: "Can we add custom festivals not already in the platform?",
    a: "Yes. Beyond the 50+ pre-loaded occasions, admins can create custom occasion gift campaigns for any date — company founding day, regional holidays, culture-specific celebrations, or any occasion your organization wants to recognize. Custom occasions support all three send methods and the full range of gift types.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Festive Celebrations</h2>
          <p className="text-dark-100 text-base leading-relaxed">What HR teams ask before rolling out automated festival gifting.</p>
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
