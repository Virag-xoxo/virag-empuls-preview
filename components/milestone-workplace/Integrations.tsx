"use client";

import { motion, useReducedMotion } from "motion/react";

const HRIS_TOOLS = [
  { name: "Workday",            short: "W",   bg: "#0875e1", type: "HCM / HRIS" },
  { name: "SAP SuccessFactors", short: "SF",  bg: "#0073e6", type: "Workforce" },
  { name: "BambooHR",           short: "B",   bg: "#73c41d", type: "HRIS" },
  { name: "Darwinbox",          short: "Db",  bg: "#5b3df5", type: "HCM" },
  { name: "Keka",               short: "K",   bg: "#0e9c4a", type: "HR / Attendance" },
  { name: "Rippling",           short: "R",   bg: "#ffc233", type: "HR / IT" },
  { name: "ADP",                short: "AD",  bg: "#d50032", type: "Payroll / Time" },
  { name: "UKG",                short: "UK",  bg: "#005eb8", type: "Workforce mgmt" },
];

const ease = [0, 0, 0.2, 1] as const;

export default function Integrations() {
  const reduce = useReducedMotion();
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="text-center max-w-xl mx-auto mb-14"
          initial={reduce ? undefined : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">HRIS integrations</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Pulls from the systems your workforce already lives in</h2>
          <p className="text-dark-100 text-base leading-relaxed">Native connectors for the leading HRIS, attendance, and workforce platforms &mdash; plus an open API for safety logs, OSHA reports, or any custom data source.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          initial={reduce ? undefined : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease, delay: 0.1 }}>
          {HRIS_TOOLS.map((t) => (
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
