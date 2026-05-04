"use client";

import { motion, useReducedMotion } from "motion/react";

const LMS_TOOLS = [
  { name: "Coursera",          short: "Co",  bg: "#0056d2", type: "Course / Cert" },
  { name: "Udemy Business",    short: "U",   bg: "#ec4a0a", type: "Course library" },
  { name: "LinkedIn Learning", short: "Li",  bg: "#0077b5", type: "Skills / Paths" },
  { name: "Degreed",           short: "D",   bg: "#7c4dff", type: "Skills platform" },
  { name: "Cornerstone",       short: "CS",  bg: "#1877f2", type: "LMS / LXP" },
  { name: "SAP SuccessFactors",short: "SF",  bg: "#0073e6", type: "Learning" },
  { name: "Saba (Lumesse)",    short: "Sb",  bg: "#2e86de", type: "LMS" },
  { name: "Custom LMS",        short: "API", bg: "#333333", type: "Any platform" },
];

const ease = [0, 0, 0.2, 1] as const;

export default function Integrations() {
  const reduce = useReducedMotion();
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="text-center max-w-xl mx-auto mb-14"
          initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">LMS integrations</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Works with your LMS — whatever it already is</h2>
          <p className="text-dark-100 text-base leading-relaxed">Native integrations with the most common enterprise LMS and learning platforms, plus an open API for custom or internal tools.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          initial={reduce ? undefined : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease, delay: 0.1 }}>
          {LMS_TOOLS.map((t) => (
            <div key={t.name} className="bg-white border border-light-200 rounded-2xl px-4 py-4 flex items-center gap-3 hover:border-blue-100 hover:shadow-menu transition-all">
              <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-white text-[11px] font-extrabold" style={{ background: t.bg }}>{t.short}</div>
              <div className="min-w-0">
                <p className="text-[12px] font-bold text-dark-300 truncate">{t.name}</p>
                <p className="text-[10px] text-dark-100 truncate">{t.type}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-8"
          initial={reduce ? undefined : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
          <a href="#" className="inline-flex items-center gap-2 text-blue-200 text-sm font-semibold hover:underline">
            Explore all 250+ integrations
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
