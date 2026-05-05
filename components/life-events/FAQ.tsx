"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "Which life events can we recognize through Empuls?",
    a: "Empuls supports weddings, new babies, graduations, new homes, and any custom occasion your organization wants to mark. You’re not limited to a fixed list — HR can create gifts for any personal milestone and configure the messaging and collection accordingly.",
  },
  {
    id: "item-2",
    q: "Do life event gifts need to be set up in advance, or can they be sent on the fly?",
    a: "Both. HR or managers can send gifts manually the moment they hear the news — no pre-configuration required. You can also schedule gifts for a specific date if you want to plan ahead. Automated options are available too if you want to trigger gifts for recurring events.",
  },
  {
    id: "item-3",
    q: "What kind of gifts can employees receive?",
    a: "Employees can receive reward points, gift card collections, physical merchandise via curated packs, experience vouchers, or personalized non-monetary value cards (marriage, baby, graduation). The sender picks the collection type; the employee chooses what they want from within it.",
  },
  {
    id: "item-4",
    q: "Can we send life event gifts to employees in different countries?",
    a: "Yes. Empuls supports 175+ countries with localized reward catalogs. When a gift is sent, the collection shown to the employee is filtered by their location so they always see relevant options in their local currency. No manual per-region configuration is needed.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Frequently asked questions</h2>
          <p className="text-dark-100 text-base leading-relaxed">Questions HR teams ask before rolling out life-event gifting.</p>
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
