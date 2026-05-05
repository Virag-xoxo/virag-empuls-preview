"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function AutomateModal() {
  const reduce = useReducedMotion();
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Annual recurring schedule</p>
        <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-green-000 text-green-300 border border-green-100">Recommended</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {[
          { name: "Diwali",          date: "Oct 29",  recipients: "8,400 people" },
          { name: "Christmas",       date: "Dec 25",  recipients: "12,400 people" },
          { name: "Lunar New Year",  date: "Feb 17",  recipients: "3,800 people" },
        ].map((c, i) => (
          <motion.div key={c.name}
            initial={{ opacity: 0, y: 6 }} animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
            <div className="w-9 h-9 rounded-lg bg-blue-200/15 flex items-center justify-center text-base shrink-0">🎁</div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{c.name} · {c.date}</p>
              <p className="text-[10px] text-dark-100">{c.recipients}</p>
            </div>
            <span className="text-[10px] font-bold text-green-300">Live</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200">
        <span className="text-[10px] text-dark-100">Auto-fires every year on the configured date</span>
      </div>
    </div>
  );
}

function ScheduleModal() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Schedule Diwali campaign</p>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-1.5">Pick date &amp; time</p>
          <motion.div animate={{ scale: pulse ? 1.01 : 1 }} className="bg-blue-000 border-2 border-blue-100 rounded-xl px-3 py-2.5">
            <p className="text-[14px] font-bold text-blue-200">📅 October 29, 2026 · 09:00 IST</p>
            <p className="text-[10px] text-dark-100">Edit anytime before send</p>
          </motion.div>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-1.5">Recipients</p>
          <p className="text-[12px] text-dark-300 font-semibold">India + South Asia teams · 4,200 people</p>
        </div>
      </div>
      <div className="px-5 py-2.5 border-t border-light-200">
        <span className="text-[10px] text-dark-100">Preview list before it fires</span>
      </div>
    </div>
  );
}

function ManualModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Send instant gift</p>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-1.5">Recipients</p>
          <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-2.5 flex items-center gap-2">
            <span className="text-[11px] font-semibold text-dark-300">Sales team · 86 people</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-1.5">Personal message</p>
          <p className="text-[10px] text-dark-200 italic bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
            &ldquo;Wishing you a wonderful Holi with your family and friends!&rdquo;
          </p>
        </div>
        <button className="w-full bg-blue-200 text-white text-[11px] font-bold rounded-lg py-2">Send now →</button>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Automate (recommended)", title: "Set it once, fires every year", body: "Configure on the festival date and Empuls auto-fires every year. Different gift configurations per region automatically.", cta: "How automation works", Illustration: AutomateModal },
  { num: "02", tag: "Schedule it", title: "Pick a one-off date in the future", body: "Choose exact date and time of delivery for one-off campaigns or new festivals. Edit or cancel anytime before send.", cta: "About scheduled sends", Illustration: ScheduleModal },
  { num: "03", tag: "Send manually", title: "Deliver instantly to any group", body: "Add recipients by email, CSV, or org filter. Personalised message with first-name placeholder. Delivered via Slack/Teams/email.", cta: "About manual sending", Illustration: ManualModal },
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
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Three ways to send</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">How would you like to send this gift?</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls gives you full control over how and when every festive gift goes out — automated, scheduled, or instant.</p>
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
            <div className="absolute inset-4 rounded-3xl blur-2xl bg-blue-200/15 pointer-events-none" />
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
