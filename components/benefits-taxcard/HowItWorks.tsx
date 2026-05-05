"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const AUTO_MS = 5000;

function StructureModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const allowances = [
    { l: "Meal allowance",     v: "₹1,05,600 / yr" },
    { l: "Fuel & conveyance",  v: "₹19,200 / yr" },
    { l: "Books & periodicals",v: "Actuals · exempt" },
    { l: "Phone & internet",   v: "Actuals · exempt" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🧮</span>
        <p className="text-sm font-bold text-dark-300">CTC restructure · tax-exempt allowances</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {allowances.map((a, i) => (
          <motion.div key={a.l}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{a.l}</p>
              <p className="text-[10px] text-dark-100">Within Income Tax Act limits</p>
            </div>
            <span className="text-[10px] font-bold text-blue-200 tabular-nums">{a.v}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IssueModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📲</span>
        <p className="text-sm font-bold text-dark-300">Card issued · physical + virtual</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { e: "✉️", l: "Aadhaar XML KYC complete", sub: "NSDL-verified · 2 min flow" },
          { e: "💳", l: "Virtual card live in app",  sub: "Instant · ready to spend" },
          { e: "📦", l: "Physical card shipped",    sub: "Delivered to home · 5 days" },
        ].map((it) => (
          <div key={it.l} className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-base">{it.e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{it.l}</p>
              <p className="text-[10px] text-dark-100">{it.sub}</p>
            </div>
            <span className="text-[10px] font-bold text-green-300">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SpendModal() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => !p), 1300);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🍽️</span>
        <p className="text-sm font-bold text-dark-300">Meal pocket · Zomato · ₹420</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        <motion.div animate={{ scale: pulse ? 1.015 : 1 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="flex items-center justify-between rounded-xl bg-blue-000 border border-blue-100 px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-base">✓</span>
            <span className="text-[11px] font-bold text-blue-200">MCC matched · approved</span>
          </div>
          <span className="text-[10px] text-dark-100">Food delivery</span>
        </motion.div>
        <div className="rounded-xl bg-light-100 border border-light-200 px-3 py-2 flex items-center justify-between">
          <span className="text-[10px] text-dark-100">Meal pocket balance</span>
          <span className="text-[11px] font-bold text-dark-300 tabular-nums">₹6,380 / ₹8,800</span>
        </div>
        <div className="text-[9px] text-dark-100 text-center mt-1">Audit-ready report generated · payroll synced</div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Structure", title: "Restructure salary into exempt allowances", body: "HR maps Meal, Fuel, Books, and Telecom allowances into the employee's CTC — within Income Tax Act limits.",                                            cta: "About structuring", Illustration: StructureModal },
  { num: "02", tag: "Issue",     title: "Card hits employee inbox & wallet",         body: "Empuls issues both physical and virtual prepaid cards, KYC-cleared via Aadhaar XML and ready to spend at approved merchants.",                            cta: "About card issue",  Illustration: IssueModal },
  { num: "03", tag: "Spend",     title: "MCC restrictions keep it compliant",        body: "Each allowance is locked to its merchant category — meal funds at food merchants, fuel funds at fuel stations — with audit-ready reports for payroll.", cta: "About MCC rules",   Illustration: SpendModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From salary structure to compliant spend</h2>
          <p className="text-dark-100 text-base leading-relaxed">HR restructures salary. Empuls issues the card. MCC rules keep every transaction within Income Tax Act limits.</p>
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
