"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What types of health checkups does Empuls support?",
    a: "Empuls supports a wide range of health checkups through partner integrations. Through Healthians, employees can access routine screenings, full body check-ups, preventive health packages, and advanced diagnostics — all with at-home sample collection. Through Practo, comprehensive health checkup packages and diagnostic tests are also available online or at partner clinics.",
  },
  {
    id: "item-2",
    q: "Can employees book at-home diagnostic tests through Empuls?",
    a: "Yes. Through the Healthians integration, employees can schedule at-home sample collection directly via the Empuls platform. Trained phlebotomists visit at a convenient time, samples are processed at certified labs, and digital reports are delivered to the employee. Admins can enable this benefit by navigating to Programs > Manage Benefits > Wellness Benefits and selecting Healthians.",
  },
  {
    id: "item-3",
    q: "How does Empuls integrate with health insurance providers?",
    a: "Empuls integrates with Pazcare, a digital employee benefits platform that helps organizations manage group health, life, and accident insurance. HR teams can configure coverage options, manage claims, and view analytics from a unified dashboard. Employees access their insurance benefits through the Empuls platform and can download the Pazcare app for day-to-day management.",
  },
  {
    id: "item-4",
    q: "Can organizations track wellness program participation and outcomes?",
    a: "Yes. Empuls provides advanced reporting and analytics for wellness programs. HR teams can track participation rates, monitor health outcomes, view engagement levels by team or department, and measure the overall impact of wellness initiatives. These insights help fine-tune programs over time to maximize value for the organization and employees alike.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about corporate wellness</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before rolling out a company-wide wellness program.</p>
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
