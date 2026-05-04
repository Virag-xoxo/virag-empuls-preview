"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function TieredTargetsModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  const tiers = [
    { label: "0–50% quota",   rate: "0.5×", note: "Base rate",       color: "#94a3b8" },
    { label: "50–100% quota", rate: "1×",   note: "Standard",        color: "#1D61F6" },
    { label: "100–120% quota",rate: "1.5×", note: "Accelerator",     color: "#34D399" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">AE plan · Q1 commission tiers</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {tiers.map((t, i) => (
          <motion.div key={t.label}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="w-12 text-[14px] font-bold tabular-nums" style={{ color: t.color }}>{t.rate}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{t.label}</p>
              <p className="text-[10px] text-dark-100">{t.note}</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-blue-200">Applied</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RoleStructuresModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  const roles = [
    { emoji: "💼", name: "Account Executives", desc: "Closed-won revenue · 12 reps", rate: "Tiered" },
    { emoji: "📞", name: "SDRs",               desc: "Qualified meetings · 8 reps", rate: "Per-MQL" },
    { emoji: "🤝", name: "Channel Partners",   desc: "Indirect revenue · 5 partners", rate: "Flat 8%" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">3 programs running · 1 dashboard</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {roles.map((r, i) => (
          <motion.div key={r.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-xl leading-none">{r.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{r.name}</p>
              <p className="text-[10px] text-dark-100">{r.desc}</p>
            </div>
            <span className="text-[10px] font-bold text-blue-200">{r.rate}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CrmSyncModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Salesforce → Empuls · live sync</p>
      </div>
      <div className="p-4">
        <div className="rounded-xl bg-light-100 border border-light-200 p-3.5 mb-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-dark-100">Deal · Acme Corp</span>
            <motion.span animate={{ opacity: step >= 0 ? 1 : 0.3 }} className="text-[10px] font-bold text-green-300">Closed-won</motion.span>
          </div>
          <p className="text-sm font-bold text-dark-300 tabular-nums">$45,200</p>
        </div>
        <div className="flex flex-col gap-1.5">
          {[
            { label: "Webhook received",  done: step >= 1 },
            { label: "Plan tier resolved (1.5×)", done: step >= 2 },
            { label: "Commission posted ($1,356)",  done: step >= 3 },
          ].map((s, i) => (
            <motion.div key={i} animate={{ opacity: s.done ? 1 : 0.4 }}
              className="flex items-center gap-2 text-[11px]">
              <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${s.done ? "bg-blue-200 text-white" : "bg-light-200 text-dark-100"}`}>
                {s.done ? "✓" : i + 1}
              </div>
              <span className={s.done ? "text-dark-300 font-semibold" : "text-dark-100"}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Tiered targets",     title: "Set quotas, accelerators, and breakpoints",       body: "Configure the rate at every tier &mdash; base, target, accelerator. Reps see exactly how each deal moves them up the ladder.", cta: "About plan design",  Illustration: TieredTargetsModal },
  { num: "02", tag: "Role structures",    title: "Different programs for AEs, SDRs, and partners",  body: "Run multiple plans simultaneously, each with its own logic. Account executives, SDRs, channel partners, managers &mdash; all from one console.", cta: "About program types", Illustration: RoleStructuresModal },
  { num: "03", tag: "CRM-synced",         title: "Deal closes, commission lands, instantly",        body: "Empuls reads from Salesforce, HubSpot, or any CRM via webhook. The moment a deal is closed-won, the rep&apos;s wallet shows the payout.", cta: "About delivery",      Illustration: CrmSyncModal },
];

const slideIn: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0,0,0.2,1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % STEPS.length), AUTO_MS);
    return () => clearInterval(t);
  }, [reduce]);

  const ActiveIllustration = STEPS[active].Illustration;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f7ff 55%, #eef3ff 100%)" }}>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(206,222,255,0.5) 0%, transparent 65%)" }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From plan design to instant payout</h2>
          <p className="text-dark-100 text-base leading-relaxed">No spreadsheets, no end-of-month math. Define the plan once, let the CRM signal do the rest.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,520px)] gap-8 lg:gap-14 items-center lg:justify-center">
          <div className="flex flex-col gap-2">
            {STEPS.map((s, i) => {
              const isActive = active === i;
              return (
                <button key={s.num} onClick={() => setActive(i)} className={`w-full text-left rounded-2xl px-5 py-4 border transition-all duration-200 overflow-hidden ${isActive ? "bg-white border-blue-100 shadow-menu" : "bg-transparent border-transparent hover:bg-white/70 hover:border-light-200"}`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-7 h-7 rounded-lg text-[11px] font-black flex items-center justify-center shrink-0 ${isActive ? "bg-blue-200 text-white" : "bg-light-200 text-dark-200"}`}>{parseInt(s.num)}</div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${isActive ? "text-blue-200" : "text-dark-100"}`}>{s.tag}</span>
                  </div>
                  <h3 className={`font-bold text-sm leading-snug ${isActive ? "text-dark-300" : "text-dark-200"}`}>{s.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div key="body" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <p className="text-dark-100 text-xs leading-relaxed mt-1.5" dangerouslySetInnerHTML={{ __html: s.body }} />
                        <a href="#" className="inline-flex items-center gap-1 mt-2.5 text-[11px] font-semibold text-blue-200">{s.cta} →</a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <div className="mt-3 h-0.5 bg-light-200 rounded-full overflow-hidden">
                      <motion.div key={`bar-${active}`} className="h-full rounded-full bg-blue-200" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: AUTO_MS / 1000, ease: "linear" }} />
                    </div>
                  )}
                </button>
              );
            })}
            <div className="flex items-center gap-2 px-5 pt-1">
              {STEPS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300" style={{ width: active === i ? 20 : 6, height: 6, background: active === i ? "#1D61F6" : "#E0E4E9" }} aria-label={`Step ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-4 rounded-3xl blur-2xl bg-blue-200/10 pointer-events-none" />
            <AnimatePresence mode="wait">
              <motion.div key={active} variants={reduce ? undefined : slideIn} initial="hidden" animate="visible" exit="exit" className="relative">
                <ActiveIllustration />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
