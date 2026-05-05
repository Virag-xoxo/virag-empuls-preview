"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 5000;

function SurveyCloseModal() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📊</span>
        <p className="text-sm font-bold text-dark-300">Q2 results · driver scores</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { driver: "Career growth",        score: 3.2, color: "#F97316", state: "Concern" },
          { driver: "Manager communication",score: 3.6, color: "#F59E0B", state: "Watch" },
          { driver: "Workload balance",     score: 3.1, color: "#F97316", state: "Concern" },
        ].map((d, i) => (
          <div key={d.driver}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-dark-300">{d.driver}</span>
              <span className="text-[10px] font-bold tabular-nums" style={{ color: d.color }}>{d.score} · {d.state}</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(d.score / 5) * 100}%` }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }}
                style={{ background: d.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateTaskModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">✏️</span>
        <p className="text-sm font-bold text-dark-300">Create task</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Task</p>
          <p className="text-[11px] font-bold text-dark-300 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">Improve career growth discussions in Engineering</p>
        </div>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Driver</p>
          <span className="inline-block text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Management &amp; Leadership</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Owner</p>
            <div className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2 py-1.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>AD</div>
              <span className="text-[10px] font-bold text-dark-300">Andrew Davis</span>
            </div>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1">Deadline</p>
            <div className="bg-light-100 border border-light-200 rounded-lg px-2 py-1.5 text-[10px] font-bold text-dark-300">15 Jul 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackedModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const events = [
    { e: "🟦", l: "Active",     sub: "Workshop scheduled · Jul 1",     done: true },
    { e: "🟧", l: "In Review",  sub: "Manager review pending",         done: step >= 1 },
    { e: "✅", l: "Done",        sub: "Closed Jul 14 · 6 sessions ran",   done: step >= 2 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">✅</span>
        <p className="text-sm font-bold text-dark-300">Resolution timeline</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {events.map((ev, i) => (
          <motion.div key={i} animate={{ opacity: ev.done ? 1 : 0.45 }} transition={{ duration: 0.25 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-base">{ev.e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{ev.l}</p>
              <p className="text-[10px] text-dark-100">{ev.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Survey closes",     title: "Driver scores surface low areas",      body: "Empuls scores all nine engagement drivers and surfaces low-performing areas by department. Historical trends show whether this is a new issue or a worsening one.", cta: "About scoring",  Illustration: SurveyCloseModal },
  { num: "02", tag: "Task created",      title: "Tag, assign, deadline — in seconds", body: "A manager creates an action plan task, tags it to the relevant engagement driver, assigns it to a responsible person, and sets a deadline. All inside Empuls.",     cta: "About creation", Illustration: CreateTaskModal },
  { num: "03", tag: "Tracked & resolved",title: "Status, assignee, ETA — visible",   body: "Tasks are tracked by status, assignee, and ETA. Completed actions are visible to employees — closing the feedback loop and building trust that responses lead to change.", cta: "About visibility", Illustration: TrackedModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From survey insight to resolved action</h2>
          <p className="text-dark-100 text-base leading-relaxed">Three steps close the loop between what employees say and what actually changes.</p>
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
