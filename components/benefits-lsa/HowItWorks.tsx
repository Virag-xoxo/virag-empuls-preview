"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const AUTO_MS = 5000;

function SetupModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const cats = [
    { l: "Fitness $600/yr",     state: "On" },
    { l: "Learning $600/yr",    state: "On" },
    { l: "Meals $1,200/yr",     state: "On" },
    { l: "Remote setup $400",   state: "Off" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">⚙️</span>
        <p className="text-sm font-bold text-dark-300">LSA program builder · global employees</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {cats.map((c, i) => (
          <motion.div key={c.l}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-[12px] font-bold text-dark-300 flex-1">{c.l}</span>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.state === "On" ? "bg-blue-200 text-white" : "bg-light-200 text-dark-100"}`}>{c.state}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RedeemModal() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => !p), 1300);
    return () => clearInterval(t);
  }, [reduce]);
  const items = [
    { e: "🏋️", l: "Planet Fitness",   p: "$25/mo · redeemed" },
    { e: "🎓", l: "Coursera Plus",    p: "$59/mo · redeemed" },
    { e: "🥗", l: "Whole Foods",      p: "$120 voucher" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🛍️</span>
        <p className="text-sm font-bold text-dark-300">Direct redemption · zero forms</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {items.map((it, i) => (
          <motion.div key={it.l}
            animate={{ scale: pulse && i === 0 ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-base">{it.e}</span>
            <p className="flex-1 text-[11px] font-bold text-dark-300">{it.l}</p>
            <span className="text-[10px] text-dark-100">{it.p}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function InsightsModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📊</span>
        <p className="text-sm font-bold text-dark-300">LSA program insights · live</p>
      </div>
      <div className="px-5 py-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="rounded-lg bg-blue-000 border border-blue-100 p-2 text-center">
            <p className="text-base font-bold text-blue-200 tabular-nums">74%</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">Utilization</p>
          </div>
          <div className="rounded-lg bg-light-100 border border-light-200 p-2 text-center">
            <p className="text-base font-bold text-dark-300 tabular-nums">$1.8M</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">YTD</p>
          </div>
          <div className="rounded-lg bg-orange-100/40 border border-orange-200/30 p-2 text-center">
            <p className="text-base font-bold text-orange-700 tabular-nums">4.7★</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">Score</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { l: "Fitness",  pct: 82 },
            { l: "Learning", pct: 64 },
            { l: "Meals",    pct: 56 },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-dark-300 w-16">{s.l}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-blue-200" style={{ width: `${s.pct}%` }} />
              </div>
              <span className="text-[9px] font-bold tabular-nums text-dark-300 w-7 text-right">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Set up program",  title: "Define allowance, activate categories", body: "Set the annual allowance, activate spending categories, and configure eligibility in the Empuls dashboard. Connect your HRMS — employees enroll automatically.", cta: "About program setup",  Illustration: SetupModal },
  { num: "02", tag: "Choose & redeem", title: "Employees pick what fits",              body: "Employees log into their personal wallet, pick categories that fit their life, and redeem directly from a curated catalog — instantly, with zero paperwork.",         cta: "About redemption",     Illustration: RedeemModal },
  { num: "03", tag: "Track insights",  title: "Live utilization & category trends",    body: "HR gets a live view of utilization, category trends, and employee satisfaction — exportable for finance and leadership. Know exactly where every dollar goes.",       cta: "About insights",       Illustration: InsightsModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From allowance setup to live insights</h2>
          <p className="text-dark-100 text-base leading-relaxed">Set up the program once. Employees self-redeem. HR gets live utilization in minutes, not quarter-end reports.</p>
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
