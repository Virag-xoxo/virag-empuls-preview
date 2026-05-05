"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const AUTO_MS = 5000;

function EnableModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🛍️</span>
        <p className="text-sm font-bold text-dark-300">Perks Store · admin toggle</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { l: "Enable for all employees", v: "On" },
          { l: "Show in left navigation",   v: "On" },
          { l: "Auto-onboarding email",     v: "On" },
          { l: "Per-transaction fee",        v: "$0" },
          { l: "Setup cost",                 v: "$0" },
        ].map((r) => (
          <div key={r.l} className="flex items-center justify-between rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-[11px] font-bold text-dark-300">{r.l}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${r.v === "$0" ? "bg-green-300/15 text-green-300" : "bg-blue-200 text-white"}`}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrowseModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const items = [
    { e: "🍔", l: "DoorDash · $50 voucher", save: "12%" },
    { e: "🎬", l: "AMC Theatres · 4-pack",  save: "20%" },
    { e: "🛒", l: "Whole Foods · gift card",save: "10%" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🎁</span>
        <p className="text-sm font-bold text-dark-300">Browse 6,000+ gift cards</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {items.map((it, i) => (
          <motion.div key={it.l}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-base">{it.e}</span>
            <p className="flex-1 text-[11px] font-bold text-dark-300">{it.l}</p>
            <span className="text-[10px] font-bold text-green-300">Save {it.save}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SaveModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">💸</span>
        <p className="text-sm font-bold text-dark-300">Annual savings · Sarah Mitchell</p>
      </div>
      <div className="px-5 py-4">
        <p className="text-3xl font-bold text-dark-300 tabular-nums mb-1">$7,000+</p>
        <p className="text-[10px] text-dark-100 mb-3">Avg household savings on $90K income</p>
        <div className="space-y-1">
          {[
            { l: "Groceries & dining",       v: "$1,800" },
            { l: "Travel & transport",       v: "$1,400" },
            { l: "Online shopping",          v: "$1,200" },
            { l: "Entertainment & streaming",v: "$840"  },
            { l: "Health & wellness",        v: "$760"  },
          ].map((s) => (
            <div key={s.l} className="flex items-center justify-between text-[10px]">
              <span className="text-dark-100">{s.l}</span>
              <span className="text-dark-300 font-bold tabular-nums">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Enable",  title: "Turn on the Perks Store",        body: "No setup, no curation, no per-transaction fee. Empuls lights up the store for your entire workforce in one click.",                                  cta: "About activation",  Illustration: EnableModal },
  { num: "02", tag: "Browse",  title: "Employees shop their brands",    body: "20,000+ brands across 25+ categories — gift cards, exclusive coupons, time-limited deals, cashback offers.",                                            cta: "About catalog",     Illustration: BrowseModal },
  { num: "03", tag: "Save",    title: "Savings stack automatically",    body: "Discounted gift cards, member-only deals, and auto-credited cashback compound — averaging $7,000+ annual savings per household.",                       cta: "About savings",     Illustration: SaveModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From toggle on to thousands saved</h2>
          <p className="text-dark-100 text-base leading-relaxed">No setup. No curation. No per-transaction fee. Light up the store and watch employees save thousands every year.</p>
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
