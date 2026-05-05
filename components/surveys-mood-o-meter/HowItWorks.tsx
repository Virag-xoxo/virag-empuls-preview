"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function TapMoodModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(3);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p === 3 ? 4 : 3)), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const moods = [
    { e: "😰", l: "Stressed" },
    { e: "😟", l: "A bit low" },
    { e: "😐", l: "Neutral" },
    { e: "😊", l: "Happy" },
    { e: "😍", l: "Very happy" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">How are you feeling today?</p>
      </div>
      <div className="px-5 py-4 grid grid-cols-5 gap-1.5">
        {moods.map((m, i) => (
          <motion.div key={m.l}
            animate={{ scale: active === i ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex flex-col items-center gap-1 rounded-lg py-2 ${active === i ? "bg-blue-000 border-2 border-blue-200" : "bg-light-100 border border-light-200"}`}>
            <span className="text-xl">{m.e}</span>
            <span className="text-[8px] font-bold text-dark-100 truncate">{m.l}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnonymousModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🔒</span>
        <p className="text-sm font-bold text-dark-300">Aggregated · % positive only</p>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-3xl font-bold text-dark-300 tabular-nums">63%</span>
          <span className="text-[11px] text-dark-100">felt positive today</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-green-100/40 border border-green-200/50 px-2.5 py-1.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-green-700">Engineering</p>
            <p className="text-base font-bold text-dark-300 tabular-nums">71%</p>
          </div>
          <div className="rounded-lg bg-blue-000 border border-blue-100 px-2.5 py-1.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-blue-200">Sales</p>
            <p className="text-base font-bold text-dark-300 tabular-nums">58%</p>
          </div>
          <div className="rounded-lg bg-amber-100/40 border border-amber-200/50 px-2.5 py-1.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-amber-700">Customer Support</p>
            <p className="text-base font-bold text-dark-300 tabular-nums">42%</p>
          </div>
          <div className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-1.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100">HR</p>
            <p className="text-base font-bold text-dark-300 tabular-nums">75%</p>
          </div>
        </div>
        <p className="text-[9px] text-dark-100 mt-3 text-center">Min 5 responses per group · individuals never identified</p>
      </div>
    </div>
  );
}

function DashboardModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📊</span>
        <p className="text-sm font-bold text-dark-300">Mood-o-meter Dashboard</p>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-3xl font-bold text-dark-300 tabular-nums">50%</span>
          <span className="text-[10px] text-dark-100">org sentiment · today</span>
        </div>
        <div className="space-y-1.5">
          {[
            { e: "😍", l: "Very happy", pct: 2 },
            { e: "😊", l: "Happy",      pct: 50 },
            { e: "😐", l: "Neutral",    pct: 12.5 },
            { e: "😟", l: "A bit low",  pct: 12.5 },
            { e: "😰", l: "Stressed",   pct: 25 },
          ].map((m) => (
            <div key={m.l} className="flex items-center gap-2">
              <span className="text-base">{m.e}</span>
              <span className="text-[10px] text-dark-300 w-[60px] truncate">{m.l}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-blue-200" style={{ width: `${m.pct}%` }} />
              </div>
              <span className="text-[10px] font-bold tabular-nums w-10 text-right text-dark-300">{m.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Tap a mood",      title: "One emoji. Under 5 seconds.",            body: "Every day the Mood-o-meter widget appears in the Empuls feed — right next to recognition and posts. Pick one of five emojis: Stressed, A bit low, Neutral, Happy, or Very happy.",          cta: "About the widget", Illustration: TapMoodModal },
  { num: "02", tag: "Aggregated",      title: "Anonymously, with min-group floor",      body: "Individual selections are never stored against a name. Empuls computes the % positive score per team, per day — only when the minimum anonymity threshold of respondents is met.",                       cta: "About anonymity", Illustration: AnonymousModal },
  { num: "03", tag: "HR reads",        title: "Org score, full distribution, heatmap",  body: "The dashboard shows the Org Sentiment Score, the full response distribution across all five moods, and a colour-coded team sentiment heatmap with 8 segmentation dimensions.",                                cta: "About the dashboard", Illustration: DashboardModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">One tap a day. Full picture by end of week.</h2>
          <p className="text-dark-100 text-base leading-relaxed">A check-in employees actually finish — then the data tells HR exactly where sentiment needs attention.</p>
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
