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
    q: "What milestones does Empuls automatically detect and celebrate?",
    a: "Empuls automatically detects birthdays and work anniversaries from your connected HRMS — scheduled the moment an employee joins. You can also configure additional life milestones such as weddings, new babies, or work-from-home anniversaries. All milestones are auto-scheduled weeks in advance, with the Wishboard, personalized message, and gift credit ready before the day arrives.",
  },
  {
    id: "item-2",
    q: "How does the Wishboard work?",
    a: "When Empuls detects an upcoming milestone, it automatically creates a private Wishboard and notifies the team via Slack, Teams, or email to add a personal note. Team members click a link, type their wish, and optionally add a GIF or image. On the milestone day, the employee receives a beautifully compiled Wishboard from everyone who contributed — along with their gift credit.",
  },
  {
    id: "item-3",
    q: "Can we customize the celebration message and gift amount per milestone?",
    a: "Yes. Admins can set different gift credit amounts for different milestone types and tenure bands — for example, $50 for birthdays, $150 for a 5-year anniversary, $300 for a 10-year anniversary. You can also customize the default celebration message template, notification timing, and which channels the celebration posts to.",
  },
  {
    id: "item-4",
    q: "What can employees redeem their celebration gift credit for?",
    a: "Employees redeem from a global catalog of 10M+ options spanning 175+ countries — including gift cards from 30K+ brands, merchandise, experiences, travel, Amazon shop, prepaid cash cards, and charitable donations. Rewards are available in local currencies and languages, ensuring the experience is meaningful for global and distributed teams.",
  },
  {
    id: "item-5",
    q: "Does Empuls work for remote and globally distributed teams?",
    a: "Absolutely. Celebrations fire automatically in the employee's local time zone. Gift redemption is available in 175+ countries with local currency support. Wishboard notifications reach team members across Slack, Teams, email, and the Empuls mobile app — wherever they are in the world.",
  },
  {
    id: "item-6",
    q: "How does Empuls connect with our HRMS?",
    a: "Empuls offers native integrations with Workday, BambooHR, Darwinbox, Keka, SAP SuccessFactors, Zoho People, and 50+ other HRMS platforms. Employee data — including birthdays and hire dates — syncs automatically. When a new employee is added to your HRMS, their milestones are instantly scheduled in Empuls with no CSV uploads or manual entry.",
  },
  {
    id: "item-7",
    q: "Can managers add a personal message on top of the automated celebration?",
    a: "Yes. Empuls sends managers a reminder notification a few days before a team member's milestone. Managers can review the auto-generated message and personalize it — or simply approve it as-is. The Empuls Copilot can also suggest personalized copy based on the employee's tenure, role, and recent contributions.",
  },
];

const ease = [0, 0, 0.2, 1] as const;

export default function FAQ() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-100 py-20 lg:py-28">
      <div className="max-w-[800px] mx-auto px-6">

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
            Frequently asked questions
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Questions we hear from HR teams before rolling out automated celebrations.
          </p>
        </motion.div>

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
