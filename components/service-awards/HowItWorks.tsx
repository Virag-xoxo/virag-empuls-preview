"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

// ── Step 1: HRMS sync (joining dates → milestone enrolment) ──────────────────
function HRMSSyncModal() {
  const reduce = useReducedMotion();
  const [enrolled, setEnrolled] = useState<number[]>([]);

  useEffect(() => {
    if (reduce) { setEnrolled([0, 1, 2]); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setEnrolled([]);
      timers.push(setTimeout(() => setEnrolled([0]), 500));
      timers.push(setTimeout(() => setEnrolled([0, 1]), 1100));
      timers.push(setTimeout(() => setEnrolled([0, 1, 2]), 1700));
      timers.push(setTimeout(run, 5000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const employees = [
    { initials: "MC", name: "Michael Carter",  doj: "Joined 2023 · Year 3 in 12d" },
    { initials: "RK", name: "Ryan Kim",        doj: "Joined 2021 · Year 5 in 47d" },
    { initials: "AM", name: "Ashley Murphy",   doj: "Joined 2025 · Year 1 in 89d" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Auto-enrolling from HRMS</p>
        <span className="text-[10px] font-semibold text-green-300 bg-green-000 border border-green-100 rounded-full px-2 py-0.5">● Workday synced</span>
      </div>

      <div className="px-5 py-4 space-y-2">
        {employees.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 6 }}
            animate={enrolled.includes(i) ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 6 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-white border border-light-200 rounded-xl px-3 py-2.5"
          >
            <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white bg-blue-200">{e.initials}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-dark-300">{e.name}</p>
              <p className="text-[10px] text-dark-100">{e.doj}</p>
            </div>
            {enrolled.includes(i) ? (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}
                className="text-[10px] font-bold text-green-300"
              >
                ✓ Enrolled
              </motion.span>
            ) : (
              <span className="text-[10px] text-dark-100">Pending…</span>
            )}
          </motion.div>
        ))}
      </div>

      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">2,847 employees auto-enrolled</span>
        <span className="text-[10px] font-semibold text-blue-200">Sync now →</span>
      </div>
    </div>
  );
}

// ── Step 2: Milestone tier configurator ──────────────────────────────────────
function TierConfigModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(2);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const tiers = [
    { year: "Year 1",  budget: "₹500",   gifts: "Welcome pack",       color: "#FFE4D6" },
    { year: "Year 3",  budget: "₹1,500", gifts: "Choose: 5 brands",    color: "#FFD9B0" },
    { year: "Year 5",  budget: "₹3,000", gifts: "Choose: 25 brands",   color: "#FFC788" },
    { year: "Year 10", budget: "₹6,000", gifts: "Premium experiences", color: "#FBA85B" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Milestone tiers</p>
        <span className="text-[10px] font-semibold text-blue-200">+ Add tier</span>
      </div>

      <div className="px-5 py-4 space-y-1.5">
        {tiers.map((t, i) => (
          <motion.div
            key={t.year}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${
              active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"
            }`}
          >
            <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center" style={{ background: t.color }}>
              <span className="text-[11px] font-extrabold text-dark-300">{t.year.replace("Year ", "")}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{t.year}</p>
              <p className="text-[10px] text-dark-100">{t.gifts}</p>
            </div>
            <span className="text-[12px] font-bold text-dark-300 tabular-nums">{t.budget}</span>
          </motion.div>
        ))}
      </div>

      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">All tiers active across 175+ countries</span>
        <span className="text-[10px] font-semibold text-green-300">✓ Saved</span>
      </div>
    </div>
  );
}

// ── Step 3: Anniversary day Slack post ───────────────────────────────────────
function AnniversaryDayModal() {
  const reduce = useReducedMotion();
  const [reactions, setReactions] = useState({ trophy: 0, clap: 0 });

  useEffect(() => {
    if (reduce) { setReactions({ trophy: 42, clap: 29 }); return; }
    const targets = { trophy: 42, clap: 29 };
    let t = 0, c = 0;
    const iv = setInterval(() => {
      if (t < targets.trophy) t += 2;
      if (c < targets.clap) c += 1;
      setReactions({ trophy: Math.min(t, targets.trophy), clap: Math.min(c, targets.clap) });
      if (t >= targets.trophy && c >= targets.clap) clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Anniversary day · Slack</p>
      </div>

      <div className="p-4">
        <div className="rounded-xl overflow-hidden border border-[#1f2329]" style={{ background: "#1A1D21" }}>
          <div className="px-3 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
            <span className="text-[11px] font-bold text-white/85">Empuls</span>
            <span className="text-[10px] text-white/35 ml-auto">Today 09:00</span>
          </div>

          <div className="p-3">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: "#FFF3E0" }}>
                <span className="text-xl leading-none">🏆</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-bold text-dark-300">3 years of Michael Carter!</p>
                  <p className="text-[10px] text-dark-100">Engineering Lead · since 2023</p>
                </div>
                <span className="bg-orange-200 text-dark-300 text-[9px] font-extrabold rounded-full px-2 py-0.5 tracking-wide shrink-0">3 YRS</span>
              </div>
              <div className="px-3.5 py-3">
                <p className="text-[11px] text-dark-100 leading-relaxed">
                  Michael, three years of brilliance and calm leadership — thank you for everything you bring to this team.
                </p>
              </div>
              <div className="px-3.5 py-2 border-t border-light-200 flex items-center justify-between">
                <span className="text-[10px] text-dark-100">📖 Open Yearbook · 🏅 Download Certificate</span>
                <span className="text-[10px] font-semibold border rounded px-2 py-0.5" style={{ background: "#FFF8F0", borderColor: "#FED7AA", color: "#C2410C" }}>Redeem reward →</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">🏆 {reactions.trophy}</span>
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">👏 {reactions.clap}</span>
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">Add wish →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: "01", tag: "Connect your HRMS",
    title: "Joining dates sync from your HRIS",
    body: "Empuls enrolls every employee in the right milestone program automatically — no manual imports, no maintenance.",
    cta: "How HRMS sync works",
    Illustration: HRMSSyncModal,
  },
  {
    num: "02", tag: "Configure tiers",
    title: "Each milestone tier, set once and forever",
    body: "Set unique reward values, gift collections, and messages for years 1, 3, 5, 10, and beyond. A 1-year shouldn't feel the same as a 10-year — and it won't.",
    cta: "About tier config",
    Illustration: TierConfigModal,
  },
  {
    num: "03", tag: "Always-on, every time",
    title: "Milestones fire automatically on the day",
    body: "Anniversary celebrations post via Slack, Teams, and email. Your 500th employee gets the same personal moment as your first — no exceptions.",
    cta: "How anniversary day works",
    Illustration: AnniversaryDayModal,
  },
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
    <section className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f7ff 55%, #eef3ff 100%)" }}>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(206,222,255,0.5) 0%, transparent 65%)" }}/>
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(29,97,246,0.05) 0%, transparent 65%)" }}/>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            Set it up once. Empuls handles every anniversary after that.
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Connect your HRMS, configure your milestone tiers, and step away. No reminders, no spreadsheets, no missed dates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,520px)] gap-8 lg:gap-14 items-center lg:justify-center">
          <div className="flex flex-col gap-2">
            {STEPS.map((s, i) => {
              const isActive = active === i;
              return (
                <button key={s.num} onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl px-5 py-4 border transition-all duration-200 overflow-hidden ${
                    isActive ? "bg-white border-blue-100 shadow-menu" : "bg-transparent border-transparent hover:bg-white/70 hover:border-light-200"
                  }`}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className={`w-7 h-7 rounded-lg text-[11px] font-black flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isActive ? "bg-blue-200 text-white" : "bg-light-200 text-dark-200"
                    }`}>{parseInt(s.num)}</div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.14em] transition-colors duration-200 ${
                      isActive ? "text-blue-200" : "text-dark-100"
                    }`}>{s.tag}</span>
                  </div>
                  <h3 className={`font-bold text-sm leading-snug transition-colors duration-200 ${
                    isActive ? "text-dark-300" : "text-dark-200"
                  }`}>{s.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div key="body"
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: [0,0,0.2,1] }}
                        className="overflow-hidden">
                        <p className="text-dark-100 text-xs leading-relaxed mt-1.5">{s.body}</p>
                        <a href="#" className="inline-flex items-center gap-1 mt-2.5 text-[11px] font-semibold text-blue-200">
                          {s.cta}
                          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M2 5.5H9M6.5 3L9 5.5L6.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isActive && (
                    <div className="mt-3 h-0.5 bg-light-200 rounded-full overflow-hidden">
                      <motion.div key={`bar-${active}`} className="h-full rounded-full bg-blue-200"
                        initial={{ width: "0%" }} animate={{ width: "100%" }}
                        transition={{ duration: AUTO_MS / 1000, ease: "linear" }}/>
                    </div>
                  )}
                </button>
              );
            })}
            <div className="flex items-center gap-2 px-5 pt-1">
              {STEPS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
                  style={{ width: active === i ? 20 : 6, height: 6, background: active === i ? "#1D61F6" : "#E0E4E9" }}
                  aria-label={`Step ${i + 1}`}/>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-4 rounded-3xl blur-2xl bg-blue-200/10 pointer-events-none"/>
            <AnimatePresence mode="wait">
              <motion.div key={active} variants={reduce ? undefined : slideIn}
                initial="hidden" animate="visible" exit="exit" className="relative">
                <ActiveIllustration />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
