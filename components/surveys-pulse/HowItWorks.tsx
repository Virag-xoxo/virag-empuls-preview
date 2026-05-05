"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 5000;

function ScheduleModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const cadences = [
    { tag: "Weekly",    when: "Every Monday 9am · local time" },
    { tag: "Monthly",   when: "First Tuesday · 9 drivers" },
    { tag: "Quarterly", when: "Last week of quarter · eNPS" },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🗓</span>
        <p className="text-sm font-bold text-dark-300">Smart scheduling · timezone-aware</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {cadences.map((c, i) => (
          <motion.div key={c.tag}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{c.tag}</p>
              <p className="text-[10px] text-dark-100">{c.when}</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-blue-200">Live</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReminderModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 3), 1600);
    return () => clearInterval(t);
  }, [reduce]);
  const events = [
    { e: "📤", label: "Survey sent · 9:00 AM",       sub: "263 recipients via Slack",         done: true },
    { e: "🔔", label: "Auto-nudge after 48h",        sub: "Sent to 106 non-responders",        done: step >= 1 },
    { e: "✅", label: "Reminders stop on response",  sub: "No spam, no guilt-tripping",        done: step >= 2 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🔔</span>
        <p className="text-sm font-bold text-dark-300">Smart nudges · stops on response</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {events.map((ev, i) => (
          <motion.div key={i} animate={{ opacity: ev.done ? 1 : 0.45 }} transition={{ duration: 0.25 }}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <span className="text-base">{ev.e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{ev.label}</p>
              <p className="text-[10px] text-dark-100">{ev.sub}</p>
            </div>
            {ev.done && <span className="text-[10px] font-bold text-green-300">✓</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HrisSyncModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">👥</span>
        <p className="text-sm font-bold text-dark-300">Recipient list · auto-synced</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { l: "Total recipients",  v: "263", note: "from Workday" },
          { l: "New hires this month", v: "12", note: "auto-included" },
          { l: "Departures",        v: "3",   note: "auto-removed" },
        ].map((r) => (
          <div key={r.l} className="flex items-center justify-between rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <div>
              <p className="text-[11px] font-bold text-dark-300">{r.l}</p>
              <p className="text-[10px] text-dark-100">{r.note}</p>
            </div>
            <span className="text-base font-bold text-blue-200 tabular-nums">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Smart scheduling",   title: "Weekly, monthly, or quarterly cadence",     body: "Empuls sends surveys at the right time in each employee's local timezone — without anyone clicking send.", cta: "About cadence",     Illustration: ScheduleModal },
  { num: "02", tag: "Auto reminders",     title: "Nudge non-responders. Stop on response.",   body: "Non-responders get a nudge after 48 hours — then the reminder stops once they've completed the survey. No spam, no guilt.", cta: "About reminders",  Illustration: ReminderModal },
  { num: "03", tag: "Dynamic recipients", title: "HRIS-synced recipient list",                body: "As people join or leave, the recipient list updates automatically from your HRIS. New hires are included from day one.", cta: "About sync", Illustration: HrisSyncModal },
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
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Zero-touch distribution</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Set it once. It runs itself.</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls handles everything — sending, nudging, closing, and analysing — without anyone on your team needing to press a button.</p>
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
