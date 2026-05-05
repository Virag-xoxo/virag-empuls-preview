"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function HRMSTriggerModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const triggers = [
    { field: "Job title",      from: "Product Manager",       to: "Senior Product Manager",   color: "#1D61F6" },
    { field: "Department",     from: "Engineering",            to: "Platform",                 color: "#7C3AED" },
    { field: "Grade level",    from: "L4",                      to: "L5",                       color: "#059669" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">HRMS field changes detected</p>
        <span className="text-[10px] font-semibold text-green-300 bg-green-000 border border-green-100 rounded-full px-2 py-0.5">● Workday live</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {triggers.map((t, i) => (
          <motion.div key={t.field}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: t.color }}>{t.field}</p>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="text-dark-100 line-through">{t.from}</span>
              <span className="text-dark-100">→</span>
              <span className="text-dark-300 font-bold">{t.to}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200">
        <span className="text-[10px] text-dark-100">250+ HRMS integrations · changes fire automatically</span>
      </div>
    </div>
  );
}

function CelebrateModal() {
  const reduce = useReducedMotion();
  const [reactions, setReactions] = useState({ clap: 0, heart: 0, rocket: 0 });

  useEffect(() => {
    if (reduce) { setReactions({ clap: 52, heart: 41, rocket: 28 }); return; }
    const tgt = { clap: 52, heart: 41, rocket: 28 };
    let c = 0, h = 0, r = 0;
    const iv = setInterval(() => {
      if (c < tgt.clap) c += 2;
      if (h < tgt.heart) h += 1;
      if (r < tgt.rocket) r += 1;
      setReactions({ clap: Math.min(c, tgt.clap), heart: Math.min(h, tgt.heart), rocket: Math.min(r, tgt.rocket) });
      if (c >= tgt.clap && h >= tgt.heart && r >= tgt.rocket) clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Empuls feed · Promotion announcement</p>
      </div>
      <div className="p-4">
        <div className="bg-light-100 border border-light-200 rounded-xl p-3.5">
          <p className="text-[12px] font-bold text-dark-300 mb-1">🚀 Daniel Foster promoted to Senior PM</p>
          <p className="text-[10px] text-dark-100 mb-2.5">Empuls Celebrations · Just now · Salesforce</p>
          <p className="text-[11px] text-dark-200 leading-relaxed mb-3">&ldquo;Daniel&apos;s leadership on the Q3 roadmap made this an easy call. 🚀&rdquo;</p>
          <div className="flex items-center gap-1.5">
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">👏 {reactions.clap}</span>
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">❤️ {reactions.heart}</span>
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">🚀 {reactions.rocket}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificateModal() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Career milestone certificate</p>
      </div>
      <div className="p-5">
        <div className="rounded-xl border-2 overflow-hidden" style={{ background: "linear-gradient(135deg, #081B2D 0%, #0d2a50 100%)", borderColor: "#0d2a50" }}>
          <div className="px-5 py-5 text-center border-b border-white/10">
            <p className="text-[8px] uppercase tracking-[0.2em] text-orange-200 font-bold mb-1.5">Certificate of Career Growth</p>
            <p className="text-white text-base font-extrabold leading-tight">Daniel Foster</p>
            <p className="text-white/60 text-[10px] mt-0.5">Senior Product Manager · 2026 · Salesforce</p>
          </div>
          <div className="px-5 py-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white/40 text-[8px] uppercase tracking-wider">Effective</span>
              <span className="text-white/85 text-[10px] font-semibold">May 2026</span>
            </div>
            <span className="text-orange-200 text-2xl">🏅</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="flex-1 text-center bg-light-100 text-dark-200 text-[10px] rounded px-2 py-1.5 cursor-pointer font-semibold">↓ Download PDF</span>
          <span className="flex-1 text-center bg-light-100 text-dark-200 text-[10px] rounded px-2 py-1.5 cursor-pointer font-semibold">in Share on LinkedIn</span>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "HRMS-triggered", title: "A field changes — recognition fires", body: "When job title, grade, or department changes in Workday, BambooHR, or 250+ other HRMS, Empuls auto-detects it. No HR action needed.", cta: "How HRMS triggers work", Illustration: HRMSTriggerModal },
  { num: "02", tag: "Manager + peer", title: "Public feed post + reactions", body: "Managers add a personal note. Colleagues react, comment, pile on. The whole company sees the moment — not just the immediate team.", cta: "About manager nudges", Illustration: CelebrateModal },
  { num: "03", tag: "Certificate + reward", title: "A keepsake they can share", body: "Branded, downloadable certificate unique to each milestone. Reward points unlock 10M+ options in 175+ countries.", cta: "Reward catalog", Illustration: CertificateModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Recognition that feels real, at scale</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls turns a field update in your HRMS into a meaningful company moment — without anyone lifting a finger.</p>
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
