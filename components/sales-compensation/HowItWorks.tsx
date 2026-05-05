"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function CrmCloseModal() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => !p), 1400);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center" style={{ background: "#00A1E0" }}>
          <span className="text-[10px] font-extrabold text-white">SF</span>
        </div>
        <p className="text-sm font-bold text-dark-300">Salesforce · Acme Corp</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl bg-light-100 border border-light-200 p-4 mb-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Deal value</p>
          <p className="text-2xl font-bold text-dark-300 tabular-nums">$45,200</p>
        </div>
        <motion.div animate={{ scale: pulse ? 1.02 : 1 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="flex items-center justify-between rounded-xl bg-blue-000 border border-blue-100 px-3.5 py-2.5">
          <span className="text-[11px] font-bold text-blue-200">Stage: Closed-Won</span>
          <span className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: "#34D399" }}>WEBHOOK SENT</span>
        </motion.div>
      </div>
    </div>
  );
}

function CalculationModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 4), 1300);
    return () => clearInterval(t);
  }, [reduce]);

  const lines = [
    { l: "Plan looked up", r: "AE Q2 · Sarah Mitchell" },
    { l: "Quota progress", r: "134%" },
    { l: "Tier resolved",  r: "Accelerator · 1.5×" },
    { l: "Commission posted", r: "$1,356" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Auto-calculation engine</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {lines.map((line, i) => {
          const done = step >= i;
          return (
            <motion.div key={line.l}
              animate={{ opacity: done ? 1 : 0.4 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-between rounded-lg border border-light-200 px-3 py-2">
              <div className="flex items-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${done ? "bg-blue-200 text-white" : "bg-light-200 text-dark-100"}`}>
                  {done ? "✓" : i + 1}
                </div>
                <span className={`text-[11px] ${done ? "text-dark-300 font-bold" : "text-dark-100"}`}>{line.l}</span>
              </div>
              <span className="text-[11px] font-semibold text-dark-200 tabular-nums">{line.r}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function PayoutModal() {
  const options = [
    { emoji: "💳", label: "Visa prepaid card",      sub: "Reload to existing card" },
    { emoji: "🏦", label: "Bank transfer",          sub: "ACH · same-day" },
    { emoji: "🎁", label: "Amazon · Apple · Uber",  sub: "21,000+ vouchers" },
    { emoji: "✈️", label: "Experiences",            sub: "Flights · stays · classes" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Payout delivered · $1,356</p>
      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-2">
        {options.map((o) => (
          <div key={o.label} className="rounded-xl border border-light-200 px-3 py-2.5 hover:border-blue-100 transition-colors">
            <p className="text-base mb-0.5">{o.emoji}</p>
            <p className="text-[11px] font-bold text-dark-300 leading-tight">{o.label}</p>
            <p className="text-[9px] text-dark-100 mt-0.5">{o.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "CRM trigger",     title: "Deal closes in your CRM",            body: "The moment a deal is marked closed-won in Salesforce, HubSpot, or your ERP, Empuls receives a webhook with the full deal context.", cta: "About CRM sync",       Illustration: CrmCloseModal },
  { num: "02", tag: "Auto-calculated", title: "Commission resolved against the plan", body: "Empuls looks up the rep's plan, checks current quota attainment, applies the right tier multiplier, and posts the commission — with the full calculation logged in audit trail.", cta: "About calculation",    Illustration: CalculationModal },
  { num: "03", tag: "Instant payout",  title: "Money in the rep's wallet",     body: "Reps redeem instantly: gift cards, Visa prepaid, bank transfer, or experiences across 175+ countries. No payroll cycle, no end-of-quarter waiting.", cta: "About delivery",       Illustration: PayoutModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From CRM close to rep&rsquo;s wallet in minutes</h2>
          <p className="text-dark-100 text-base leading-relaxed">No payroll cycle. No spreadsheet reconciliation. Every payout shows its math.</p>
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
                  <h3 className={`font-bold text-sm leading-snug ${isActive ? "text-dark-300" : "text-dark-200"}`} dangerouslySetInnerHTML={{ __html: s.title }} />
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
              <motion.div key={active}
                initial={reduce ? false : { opacity: 0, y: 16 }}
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
