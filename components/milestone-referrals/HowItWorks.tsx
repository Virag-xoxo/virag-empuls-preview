"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function SetupModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const stages = [
    { num: 1, label: "Referral Submitted",   timing: "Fires immediately",          pts: "+200 pts",  color: "#059669" },
    { num: 2, label: "Interview Scheduled",  timing: "ATS status → Interview",      pts: "+300 pts",  color: "#0a51e8" },
    { num: 3, label: "Offer Accepted",        timing: "ATS status → Hired",          pts: "+1,000 pts", color: "#d97706" },
    { num: 4, label: "Probation Cleared",     timing: "HRMS tenure > 90 days",       pts: "+1,500 pts", color: "#7c3aed" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-dark-300">Senior Engineer · Referral setup</p>
          <p className="text-[10px] text-dark-100 mt-0.5">4 stages · Triggered from Greenhouse</p>
        </div>
        <span className="text-[10px] font-bold rounded-full px-2 py-0.5 bg-green-000 text-green-300 border border-green-100">ACTIVE</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {stages.map((s, i) => (
          <motion.div key={s.num}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>{s.num}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{s.label}</p>
              <p className="text-[9px] text-dark-100">{s.timing}</p>
            </div>
            <span className="text-[10px] font-bold text-blue-200">{s.pts}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">Total potential per referral</span>
        <span className="text-[11px] font-bold text-blue-200">⭐ 3,000 pts</span>
      </div>
    </div>
  );
}

function ATSConnectModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const ats = [
    { name: "Greenhouse",       short: "Gh", bg: "#24a47f" },
    { name: "Workday",          short: "W",  bg: "#f97316" },
    { name: "BambooHR",         short: "BH", bg: "#73c41d" },
    { name: "SmartRecruiters",  short: "SR", bg: "#1a2e56" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Connect your ATS</p>
      </div>
      <div className="px-5 py-4 space-y-2">
        {ats.map((a, i) => (
          <motion.div key={a.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-white text-[12px] font-extrabold" style={{ background: a.bg }}>{a.short}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{a.name}</p>
              <p className="text-[10px] text-dark-100">Listens for status changes</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-green-300">✓ Connected</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PayoutModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Reward fired · Greenhouse → Hired</p>
      </div>
      <div className="p-4">
        <div className="rounded-xl overflow-hidden" style={{ background: "#1A1D21" }}>
          <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
            <span className="text-[11px] font-bold text-white/85">Direct message · Empuls</span>
            <span className="text-[10px] text-white/35 ml-auto">Just now</span>
          </div>
          <div className="p-3">
            <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
              <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🎉 Your referral was hired!</p>
              <p className="text-[10px] text-white/60 leading-relaxed">Bailey Nunn just signed the offer. You earned 1,000 points — 1,500 more once probation clears.</p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">⭐ Redeem</span>
                <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">📊 Track progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "Set up stages & rewards", title: "Configure points for each pipeline stage", body: "Submission, interview, offer, probation cleared — every stage gets its own reward. Tier by role and seniority.", cta: "About stage rewards", Illustration: SetupModal },
  { num: "02", tag: "Connect your ATS", title: "Greenhouse, Workday, BambooHR, and more", body: "Empuls listens for ATS status changes — interview scheduled, offer accepted, hired. Triggers fire automatically.", cta: "About ATS sync", Illustration: ATSConnectModal },
  { num: "03", tag: "Payouts", title: "Rewards delivered the moment status updates", body: "Slack DM, Empuls feed, or email. Referrers see progress through the funnel and the points hit their wallet.", cta: "About delivery", Illustration: PayoutModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">From referral submitted to probation cleared — automated</h2>
          <p className="text-dark-100 text-base leading-relaxed">Set up the stages, connect your ATS, step away. Empuls handles the rest.</p>
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
