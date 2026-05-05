"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function HrisEventModal() {
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
        <span className="text-base">📡</span>
        <p className="text-sm font-bold text-dark-300">Workday → Empuls · event stream</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { e: "🎉", l: "New hire reached Day 30",    sub: "Sarah Chen · Design",       active: true },
          { e: "🎓", l: "Training marked complete",   sub: "AWS Cert · Andrew Jenkins", active: false },
          { e: "🚪", l: "Departure date set",         sub: "Catherine Reed · Aug 15",   active: false },
        ].map((ev, i) => (
          <motion.div key={i}
            animate={{ scale: ev.active && pulse ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 border ${ev.active ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-base">{ev.e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{ev.l}</p>
              <p className="text-[10px] text-dark-100">{ev.sub}</p>
            </div>
            {ev.active && <span className="text-[10px] font-bold text-blue-200">Firing →</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CustomLogicModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">⚙️</span>
        <p className="text-sm font-bold text-dark-300">Trigger rules · Senior Engineering</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { l: "When", v: "Employee reaches Day 30" },
          { l: "And",  v: "Department = Engineering" },
          { l: "And",  v: "Grade = L5+" },
          { l: "Send", v: "Senior IC 30-day Check-in (template)" },
        ].map((r) => (
          <div key={r.l + r.v} className="flex items-center gap-3 rounded-xl px-3 py-2 bg-light-100 border border-light-200">
            <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200 w-12">{r.l}</span>
            <span className="text-[11px] font-bold text-dark-300 truncate">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LongitudinalModal() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📈</span>
        <p className="text-sm font-bold text-dark-300">Sarah Chen · score over time</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { stage: "Day 30 onboarding", score: 4.5, pct: 90 },
          { stage: "After AWS training", score: 4.2, pct: 84 },
          { stage: "Q1 perf review",     score: 4.6, pct: 92 },
        ].map((s, i) => (
          <div key={s.stage}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-dark-300">{s.stage}</span>
              <span className="text-[10px] font-bold text-blue-200 tabular-nums">{s.score}/5</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full bg-blue-200"
                initial={{ width: 0 }}
                animate={{ width: `${s.pct}%` }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1, ease: [0,0,0.2,1] }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "HRIS event triggers",   title: "Workday, BambooHR, SAP — native sync", body: "Surveys fire the moment a qualifying event is detected — no integration overhead, no nightly batch.", cta: "About triggers", Illustration: HrisEventModal },
  { num: "02", tag: "Custom trigger logic",  title: "Scope by team, role, or tenure",            body: "Configure rules for any combination of department, role, tenure, or event type. Different teams can have different lifecycle survey tracks.", cta: "About rules", Illustration: CustomLogicModal },
  { num: "03", tag: "Longitudinal tracking", title: "See score trends across the journey",       body: "Score trends across an employee's lifecycle — see how satisfaction at day 30 compares to performance review feedback six months later.", cta: "About tracking", Illustration: LongitudinalModal },
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
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Event-driven automation</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Surveys that fire when things happen</h2>
          <p className="text-dark-100 text-base leading-relaxed">Instead of scheduled sends, lifecycle surveys fire based on real events — an employee joining, a training completing, or a departure being logged. No calendar reminders, no missed moments.</p>
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
