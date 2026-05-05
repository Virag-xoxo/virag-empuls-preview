"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const AUTO_MS = 5000;

function SetupModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1300);
    return () => clearInterval(t);
  }, [reduce]);
  const items = [
    { e: "👟", l: "Stepathon",       sub: "Daily steps · Monthly reset",   on: true  },
    { e: "💪", l: "Workout Warrior", sub: "Workout minutes · Weekly reset", on: false },
    { e: "🏃", l: "Run 5K / 10K",    sub: "Kilometres · Monthly reset",     on: false },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🏆</span>
        <p className="text-sm font-bold text-dark-300">Programs &gt; Wellness Challenges</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {items.map((c, i) => (
          <motion.div key={c.l}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-base">{c.e}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300 truncate">{c.l}</p>
              <p className="text-[10px] text-dark-100 truncate">{c.sub}</p>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-[0.10em] ${c.on ? "text-green-300" : "text-blue-200"}`}>{c.on ? "Active" : "Enable"}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConnectModal() {
  const trackers = [
    { e: "🍎", l: "Apple Health",   on: true  },
    { e: "G",  l: "Google Fit",     on: true  },
    { e: "Fb", l: "Fitbit",         on: false },
    { e: "St", l: "Strava",         on: false },
    { e: "S",  l: "Samsung Health", on: false },
    { e: "Gr", l: "Garmin",         on: false },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">📲</span>
        <p className="text-sm font-bold text-dark-300">Connect tracker &middot; one-time setup</p>
      </div>
      <div className="px-5 py-4 grid grid-cols-3 gap-2">
        {trackers.map((t) => (
          <div key={t.l} className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 border ${t.on ? "bg-blue-000 border-blue-100" : "bg-light-100 border-light-200"}`}>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-light-200 text-[10px] font-bold text-dark-300">{t.e}</span>
            <span className="text-[9px] font-bold text-dark-300 text-center truncate w-full">{t.l}</span>
            {t.on && <span className="text-[8px] font-bold text-green-300">SYNCED</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function MilestoneModal() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const milestones = [
    { l: "5,000 steps",  pts: "200 pts", done: true },
    { l: "10,000 steps", pts: "500 pts + gift", done: step >= 1 },
    { l: "15,000 steps", pts: "1,000 pts", done: step >= 2 },
  ];
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center gap-2">
        <span className="text-base">🎯</span>
        <p className="text-sm font-bold text-dark-300">Today&apos;s milestones &middot; auto-credited</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {milestones.map((m, i) => (
          <motion.div key={i} animate={{ opacity: m.done ? 1 : 0.4 }} transition={{ duration: 0.25 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-light-100 border border-light-200">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${m.done ? "bg-green-300 text-white" : "bg-light-200 text-dark-100"}`}>{m.done ? "✓" : i + 1}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{m.l}</p>
              <p className="text-[10px] text-blue-200 font-bold">{m.pts}</p>
            </div>
            {m.done && <span className="text-[9px] font-bold text-green-300">Wallet</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Set up",   title: "Pick a challenge template",  body: "Admins choose from Stepathon, Workout Warrior, or 5K/10K/21K running templates. Set milestones, attach gift cards, pick the eligible group.", cta: "About templates",  Illustration: SetupModal },
  { num: "02", tag: "Connect",  title: "Sync a tracker once",        body: "Employees link Apple Health, Google Fit, Fitbit, Strava, Samsung Health, or Garmin. Activity flows in automatically &mdash; no manual logging.",   cta: "About trackers",   Illustration: ConnectModal },
  { num: "03", tag: "Earn",     title: "Hit milestones, earn points", body: "Every threshold on the visual roadmap auto-credits points to the Empuls wallet. Optional gift cards arrive in the same notification.",            cta: "About milestones", Illustration: MilestoneModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From template to live leaderboard in three steps</h2>
          <p className="text-dark-100 text-base leading-relaxed">Pick a challenge, connect a tracker, hit milestones &mdash; the rewards happen automatically in the wallet.</p>
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
