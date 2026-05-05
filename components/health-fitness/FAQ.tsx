"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "What fitness trackers are compatible with Empuls?",
    a: "Empuls supports six platforms: Apple Health, Google Fit, Fitbit, Strava, Samsung Health, and Garmin. Employees connect their device through the Empuls mobile app — a one-time setup, after which activity data syncs automatically with no manual logging required.",
  },
  {
    id: "item-2",
    q: "How do leaderboard resets work?",
    a: "Reset frequency depends on the challenge type. Step-based challenges (Stepathon) reset monthly, running from the 1st to the 21st. Workout Warrior resets weekly, running Saturday to Sunday. Employees and admins can view historical periods — monthly, quarterly, or custom date ranges — at any time.",
  },
  {
    id: "item-3",
    q: "Can specific employees be excluded from rankings?",
    a: "Yes. Admins can maintain an exclusion list — employees on it remain visible on the leaderboard but do not receive a ranking position or milestone reward distributions. This is useful for admins, test accounts, or employees on extended leave.",
  },
  {
    id: "item-4",
    q: "What happens if a challenge is temporarily disabled?",
    a: "All historical data, rankings, and participant records are preserved when a challenge is disabled. Admins can re-enable the challenge at any time and pick up from where it left off — no data is lost.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Fitness Challenges</h2>
          <p className="text-dark-100 text-base leading-relaxed">What People and HR teams ask before launching a company-wide fitness program.</p>
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
