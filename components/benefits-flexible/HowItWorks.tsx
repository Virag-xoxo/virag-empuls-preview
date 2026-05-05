"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const AUTO_MS = 5000;

function ConfigureModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const cats = [
    { l: "Meal allowance",     cap: "$220/mo cap" },
    { l: "Fuel & conveyance",  cap: "$160/mo cap" },
    { l: "Phone & internet",   cap: "$100/mo cap" },
    { l: "Travel allowance",   cap: "Biennial" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📋</span>
        <p className="text-sm font-bold text-dark-300">HR plan builder · category caps</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {cats.map((c, i) => (
          <motion.div key={c.l}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{c.l}</p>
              <p className="text-[10px] text-dark-100">{c.cap}</p>
            </div>
            <span className="text-[10px] font-bold text-blue-200 bg-blue-000 px-2 py-0.5 rounded-full">Enabled</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AllocateModal() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🎯</span>
        <p className="text-sm font-bold text-dark-300">Employees split their budget</p>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.10em] text-dark-100 font-bold">Annual budget</span>
          <span className="text-base font-bold text-dark-300 tabular-nums">$5,000</span>
        </div>
        <div className="space-y-2">
          {[
            { l: "Meal", v: 1200, pct: 24, color: "#1D61F6" },
            { l: "Fuel", v: 800,  pct: 16, color: "#22C55E" },
            { l: "Phone",v: 600,  pct: 12, color: "#F59E0B" },
            { l: "LTA",  v: 1200, pct: 24, color: "#A855F7" },
          ].map((s, i) => (
            <div key={s.l}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-dark-300">{s.l}</span>
                <span className="text-[10px] font-bold tabular-nums text-dark-300">${s.v}</span>
              </div>
              <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.pct}%` }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }}
                  style={{ background: s.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClaimModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const events = [
    { e: "📷", l: "Receipt uploaded",     done: true },
    { e: "👤", l: "Manager approved",     done: step >= 1 },
    { e: "💰", l: "Reimbursed in payroll",done: step >= 2 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📤</span>
        <p className="text-sm font-bold text-dark-300">Claim · Meal · $48.20</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {events.map((ev, i) => (
          <motion.div key={i} animate={{ opacity: ev.done ? 1 : 0.4 }} transition={{ duration: 0.25 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-base">{ev.e}</span>
            <p className="flex-1 text-[11px] font-bold text-dark-300">{ev.l}</p>
            {ev.done && <span className="text-[10px] font-bold text-green-300">✓</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Configure", title: "HR builds the plan",          body: "Pick benefit categories, set budget caps per group, and publish — all from the Empuls admin dashboard. No IT involvement.",                                       cta: "About config",     Illustration: ConfigureModal },
  { num: "02", tag: "Allocate",  title: "Employees choose their mix",  body: "Employees see their personal annual budget and allocate it across the categories you enabled — meals, fuel, phone, travel — straight from the portal.",         cta: "About allocation", Illustration: AllocateModal },
  { num: "03", tag: "Claim",     title: "Submit, approve, reimburse",  body: "Employees upload receipts, claims flow through your approval workflow, and reimbursements settle through payroll. Zero paper, zero spreadsheets.",                cta: "About claims",     Illustration: ClaimModal },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % STEPS.length), AUTO_MS);
    return () => clearInterval(t);
  }, []);

  const ActiveIllustration = STEPS[active].Illustration;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f7ff 55%, #eef3ff 100%)" }}>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(206,222,255,0.5) 0%, transparent 65%)" }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From plan design to digital claim</h2>
          <p className="text-dark-100 text-base leading-relaxed">HR sets the categories and caps. Employees self-allocate. Claims and tax handling run through payroll automatically.</p>
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
                        <p className="text-dark-100 text-xs leading-relaxed mt-1.5">{s.body}</p>
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
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, transition: { duration: 0.2 } }}
                transition={{ duration: reduce ? 0 : 0.35, ease: [0,0,0.2,1] }}
                className="relative">
                <ActiveIllustration />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
