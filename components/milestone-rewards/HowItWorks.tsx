"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function DefineMilestoneModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const triggers = [
    { emoji: "🚀", label: "Project tag → Shipped",     source: "Jira / Asana" },
    { emoji: "👥", label: "Hire status → Probation",   source: "Workday / BambooHR" },
    { emoji: "📜", label: "Course → Completed",        source: "LMS or Coursera" },
    { emoji: "📊", label: "Streak → 30-day attendance", source: "Custom field" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Define the trigger</p>
        <span className="text-[10px] font-semibold text-blue-200">+ Custom</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {triggers.map((t, i) => (
          <motion.div key={t.label}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-xl leading-none">{t.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{t.label}</p>
              <p className="text-[9px] text-dark-100">From: {t.source}</p>
            </div>
            {active === i && (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[10px] font-bold text-blue-200">Selected</motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ConfigureRewardModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  const types = [
    { emoji: "⭐", name: "Points", desc: "1,000 to top contributor" },
    { emoji: "🎁", name: "Gift card collection", desc: "Amazon · Starbucks · Uber" },
    { emoji: "📣", name: "Public recognition post", desc: "Empuls feed + Slack" },
  ];

  const audiences = ["Individual", "Team (8 people)", "Department"];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Configure the reward</p>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-2">Reward type</p>
          <div className="space-y-1.5">
            {types.map((t, i) => (
              <motion.div key={t.name}
                animate={{ scale: active === i ? 1.01 : 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`flex items-center gap-2.5 rounded-lg px-3 py-2 border ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
                <span className="text-base">{t.emoji}</span>
                <p className="flex-1 text-[11px] font-semibold text-dark-300">{t.name}</p>
                <span className="text-[9px] text-dark-100">{t.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider mb-2">Audience</p>
          <div className="flex gap-1.5">
            {audiences.map((a, i) => (
              <span key={a} className={`flex-1 text-center text-[10px] font-semibold rounded px-1.5 py-1 border ${i === 1 ? "bg-blue-200/15 border-blue-100 text-blue-200" : "bg-white border-light-200 text-dark-100"}`}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FireRewardModal() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"waiting" | "fired" | "delivered">("waiting");

  useEffect(() => {
    if (reduce) { setPhase("delivered"); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setPhase("waiting");
      timers.push(setTimeout(() => setPhase("fired"), 1500));
      timers.push(setTimeout(() => setPhase("delivered"), 3000));
      timers.push(setTimeout(run, 6000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Trigger fired · Catalyst v2.0</p>
        <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${phase === "delivered" ? "bg-green-000 text-green-300 border border-green-100" : phase === "fired" ? "bg-blue-000 text-blue-200 border border-blue-100" : "bg-light-100 text-dark-100 border border-light-200"}`}>
          {phase === "waiting" ? "Watching…" : phase === "fired" ? "Firing…" : "✓ Delivered"}
        </span>
      </div>
      <div className="px-5 py-4">
        <div className="rounded-xl overflow-hidden" style={{ background: "#1A1D21" }}>
          <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
            <span className="text-[11px] font-bold text-white/85">Empuls</span>
            <span className="text-[10px] text-white/35 ml-auto">{phase === "delivered" ? "Just now" : "—"}</span>
          </div>
          <motion.div className="p-3"
            animate={phase === "delivered" ? { opacity: 1 } : { opacity: 0.3 }}
            transition={{ duration: 0.4 }}>
            <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
              <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🚀 Catalyst v2.0 has shipped!</p>
              <p className="text-[10px] text-white/60 leading-relaxed">All 8 engineers receive 1,000 reward points. Great work, team!</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">⭐ Redeem points</span>
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🎉 React</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Define the milestone", title: "Pick the achievement that fires the reward", body: "Project tag, hire status, certification, attendance streak, or any custom condition. Choose any field from your HRMS, LMS, or project tools.", cta: "About trigger types", Illustration: DefineMilestoneModal },
  { num: "02", tag: "Configure the reward", title: "Set type, value, and audience", body: "Points, gift cards, public recognition — or all three. Send to the individual, the team, or both. Tiered distributions supported.", cta: "About reward types", Illustration: ConfigureRewardModal },
  { num: "03", tag: "Empuls fires it", title: "Automatic delivery the moment the trigger fires", body: "Rewards land via Slack, Teams, or email with a personalized note and a link to the 1M+ reward catalog. Zero HR action.", cta: "About delivery", Illustration: FireRewardModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Set it once. Empuls rewards every win automatically.</h2>
          <p className="text-dark-100 text-base leading-relaxed">No spreadsheets, no manual reviews, no reward delays. Define the trigger and step back.</p>
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
