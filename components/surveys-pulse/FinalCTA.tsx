"use client";

import { motion, useReducedMotion } from "motion/react";

const COMPLIANCE = ["SOC 2", "ISO 27001", "GDPR", "HIPAA-Ready"];

export default function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-dark-300 overflow-hidden">
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      <div className="blob-1 absolute -top-40 left-1/4 w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.26) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute -bottom-20 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">
          <motion.div className="max-w-xl"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduce ? 0 : 0.55, ease: [0,0,0.2,1] as const }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-white">Stop guessing.<br/></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">Start listening</span>
            </h2>
            <p className="text-dark-000 text-base leading-relaxed">
              Engagement scores, driver heatmaps, and trend analysis &mdash; from day one.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-4 lg:items-end lg:shrink-0"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: reduce ? 0 : 0.55, ease: [0,0,0.2,1] as const, delay: 0.1 }}>
            <div className="flex items-center gap-5">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-dark-300 font-bold text-sm hover:bg-light-200 transition-colors shadow-lg">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-white text-sm font-semibold hover:text-blue-100 transition-colors">
                Talk to sales
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5H10.5M7.5 3.5L10.5 6.5L7.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
            <div className="flex items-center gap-2 flex-wrap lg:justify-end">
              {COMPLIANCE.map((c, i) => (
                <span key={c} className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-dark-000/60">{c}</span>
                  {i < COMPLIANCE.length - 1 && <span className="text-dark-000/25 text-xs">·</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
