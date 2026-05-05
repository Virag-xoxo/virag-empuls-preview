"use client";

import { motion, useReducedMotion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    id: "item-1",
    q: "How are milestone triggers connected to our existing systems?",
    a: "Empuls connects to your HRMS, LMS, project management tools, and wearable platforms. When a trigger event is detected — a hire status change, a certification earned, a project tag updated — the reward fires automatically. For custom milestones, triggers can also be configured via API or manual input by an admin or manager.",
  },
  {
    id: "item-2",
    q: "Can we create our own milestone types beyond the pre-built categories?",
    a: "Yes. Beyond Project Completions, Referrals, Training, and Workplace Milestones, admins can define fully custom milestone programs for any org-specific behaviour — &ldquo;Cycle to Work,&rdquo; &ldquo;Early Bird,&rdquo; CSR volunteering hours, innovation submissions, or any other goal. Custom milestones support the same automation, reward types, and leaderboard features.",
  },
  {
    id: "item-3",
    q: "Can rewards go to a whole team, not just the individual?",
    a: "Yes. For milestones like project completions or safety targets, rewards can be distributed to all members of a defined team, department, or org-wide audience. You can also configure tiered rewards — a larger amount for the key contributor, a smaller amount for supporting team members — all from the same trigger setup.",
  },
  {
    id: "item-4",
    q: "How do challenges and leaderboards work for remote teams?",
    a: "Challenges are fully digital. Activity data syncs automatically from wearable devices (Apple Health, Google Fit, Fitbit, Strava, Garmin) and leaderboards are visible to all participants in the Empuls app. Remote employees participate exactly the same way as in-office teams. Nudge email reminders keep engagement high throughout the challenge period.",
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Questions about Milestone Rewards</h2>
          <p className="text-dark-100 text-base leading-relaxed">What HR and operations teams ask before automating their reward programs.</p>
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
