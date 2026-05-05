"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function ConnectToolModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const tools = [
    { name: "Jira",       desc: "Sprint complete",         color: "#1868db" },
    { name: "GitHub",     desc: "Release published",        color: "#171515" },
    { name: "Asana",      desc: "Project marked done",      color: "#fc636b" },
    { name: "Linear",     desc: "Cycle closed",             color: "#7b68ee" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Connect your project tool</p>
        <span className="text-[10px] font-semibold text-blue-200">+ Custom API</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {tools.map((t, i) => (
          <motion.div key={t.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-white text-[11px] font-extrabold" style={{ background: t.color }}>{t.name[0]}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{t.name}</p>
              <p className="text-[10px] text-dark-100">Listens for: {t.desc}</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-green-300">✓ Connected</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DistributeModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  const models = [
    { emoji: "👥", name: "Whole team, equal", desc: "Same reward for every member" },
    { emoji: "🏆", name: "Weighted by role",   desc: "Lead vs. support tiers" },
    { emoji: "⚡", name: "Base + bonus",       desc: "Team minimum + standout extra" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Pick your distribution model</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {models.map((m, i) => (
          <motion.div key={m.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-xl leading-none">{m.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{m.name}</p>
              <p className="text-[10px] text-dark-100">{m.desc}</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-blue-200">Selected</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FireModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Trigger fired · Catalyst v2.0</p>
      </div>
      <div className="p-4">
        <div className="rounded-xl overflow-hidden" style={{ background: "#1A1D21" }}>
          <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
            <span className="text-[11px] font-bold text-white/85">#engineering</span>
            <span className="text-[10px] text-white/35 ml-auto">Just now</span>
          </div>
          <div className="p-3">
            <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
              <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🚀 Catalyst v2.0 has shipped!</p>
              <p className="text-[10px] text-white/60 leading-relaxed">All 8 contributors receive 1,000 reward points. Great work, team!</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">⭐ Redeem points</span>
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🎉 33 reactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Connect your tool", title: "Jira, GitHub, Asana, Linear, or any custom API", body: "Empuls listens for completion signals from the tools your teams already use. Connect once via OAuth or webhook — no migration, no duplicate data entry.", cta: "About integrations", Illustration: ConnectToolModal },
  { num: "02", tag: "Pick a distribution model", title: "Whole team, weighted, or base + bonus", body: "Match the reward to the contribution. Configure tiered distributions in advance so the trigger does the right thing every time it fires.", cta: "About distribution models", Illustration: DistributeModal },
  { num: "03", tag: "Empuls fires it", title: "Auto-delivered to Slack, Teams, or email", body: "The moment the project status flips to done, rewards land in the team's channel with a personalized note and a link to redeem.", cta: "About delivery", Illustration: FireModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From sprint closure to team reward in seconds</h2>
          <p className="text-dark-100 text-base leading-relaxed">No spreadsheets, no manual approvals, no recognition delays. The trigger does the work.</p>
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
