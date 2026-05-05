"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

// ── Step 1: HRMS sync ────────────────────────────────────────────────────────
function HRMSConnectModal() {
  const reduce = useReducedMotion();
  const [synced, setSynced] = useState<number[]>([]);

  useEffect(() => {
    if (reduce) { setSynced([0, 1]); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setSynced([]);
      timers.push(setTimeout(() => setSynced([0]), 600));
      timers.push(setTimeout(() => setSynced([0, 1]), 1400));
      timers.push(setTimeout(run, 5000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sources = [
    { name: "Workday", emoji: "📊", count: "2,847 employees synced" },
    { name: "BambooHR", emoji: "🟢", count: "412 employees synced" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Sync Employee Data</p>
        <span className="text-[10px] font-semibold text-green-300 bg-green-000 border border-green-100 rounded-full px-2 py-0.5">● Connected</span>
      </div>

      <div className="px-5 py-4 space-y-2">
        {sources.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 6 }}
            animate={synced.includes(i) ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 6 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-white border border-light-200 rounded-xl px-3 py-2.5"
          >
            <span className="text-2xl leading-none">{s.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-dark-300">{s.name}</p>
              <p className="text-[10px] text-dark-100">{s.count}</p>
            </div>
            {synced.includes(i) ? (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}
                className="text-[10px] font-bold text-green-300"
              >
                ✓ Live
              </motion.span>
            ) : (
              <span className="text-[10px] text-dark-100">Syncing…</span>
            )}
          </motion.div>
        ))}

        <div className="bg-blue-000 border-[1.5px] border-blue-100 rounded-xl px-3 py-3 text-center cursor-pointer">
          <p className="text-[12px] font-semibold text-blue-200">+ Connect another HRMS</p>
          <p className="text-[10px] text-dark-100 mt-0.5">50+ integrations available</p>
        </div>
      </div>

      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">Last synced: 2 minutes ago</span>
        <span className="text-[10px] font-semibold text-blue-200">Sync now →</span>
      </div>
    </div>
  );
}

// ── Step 2: Auto-scheduled milestones ────────────────────────────────────────
function MilestoneScheduleModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const items = [
    { emoji: "🎂", title: "Sarah Mitchell · Birthday",         sub: "in 3 days · Wishboard live · $50 ready",    bg: "#FFF8F0", border: "#FED7AA", dot: "#F97316" },
    { emoji: "⭐", title: "David Thompson · 5-Year Anniversary", sub: "in 7 days · Wishboard live · $150 ready",  bg: "#EFF6FF", border: "#BFDBFE", dot: "#1D61F6" },
    { emoji: "💍", title: "Emily Roberts · Work Anniversary",   sub: "in 14 days · Preparing",                    bg: "#FFFFFF", border: "#EDEFF3", dot: "#BFC9DA" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Upcoming in next 30 days</p>
      </div>

      <div className="px-5 py-4 space-y-2">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            animate={{ scale: active === i ? 1.015 : 1, opacity: active === i ? 1 : 0.85 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 border"
            style={{ background: it.bg, borderColor: it.border }}
          >
            <span className="text-2xl leading-none">{it.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{it.title}</p>
              <p className="text-[10px] text-dark-100">{it.sub}</p>
            </div>
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: it.dot }} />
          </motion.div>
        ))}
      </div>

      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">247 milestones celebrated this quarter</span>
        <span className="text-[10px] font-semibold text-green-300">100% coverage ✓</span>
      </div>
    </div>
  );
}

// ── Step 3: Celebration day Slack post ───────────────────────────────────────
function CelebrationDayModal() {
  const reduce = useReducedMotion();
  const [reactions, setReactions] = useState({ party: 0, heart: 0 });

  useEffect(() => {
    if (reduce) { setReactions({ party: 36, heart: 18 }); return; }
    const targets = { party: 36, heart: 18 };
    let p = 0, h = 0;
    const iv = setInterval(() => {
      if (p < targets.party) p += 2;
      if (h < targets.heart) h += 1;
      setReactions({ party: Math.min(p, targets.party), heart: Math.min(h, targets.heart) });
      if (p >= targets.party && h >= targets.heart) clearInterval(iv);
    }, 60);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Celebration day · Slack post</p>
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
              <div className="px-3.5 py-2.5 flex items-center gap-2" style={{ background: "#FFF8F0" }}>
                <span className="text-xl leading-none">🎂</span>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-dark-300">Happy Birthday, Sarah Mitchell!</p>
                  <p className="text-[10px] text-dark-100">Product Designer · Xoxoday Global</p>
                </div>
              </div>
              <div className="px-3.5 py-3">
                <p className="text-[15px] font-extrabold leading-[1.1] mb-1.5" style={{ color: "#D97706" }}>HAPPY BIRTHDAY 🎉</p>
                <p className="text-[11px] text-dark-100 leading-relaxed">
                  Your creativity &amp; energy make us all shine brighter! From the whole team with love.
                </p>
              </div>
              <div className="px-3.5 py-2 border-t border-light-200 flex items-center justify-between">
                <span className="text-[10px] text-dark-100">🎁 $50 gift credit · Open Wishboard</span>
                <span className="text-[10px] font-semibold border rounded px-2 py-0.5" style={{ background: "#FFF8F0", borderColor: "#FED7AA", color: "#C2410C" }}>Redeem →</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">🎉 {reactions.party}</span>
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">❤️ {reactions.heart}</span>
              <span className="bg-white/8 text-white/70 text-[10px] rounded px-2 py-1">Add a wish →</span>
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
    title: "Sync employee birthdays and hire dates instantly",
    body: "Link Empuls to Workday, BambooHR, Darwinbox, Keka, or any of 50+ HRMS platforms. Every new hire's milestones are scheduled automatically the moment they join.",
    cta: "How HRMS sync works",
    Illustration: HRMSConnectModal,
  },
  {
    num: "02", tag: "Milestone detection",
    title: "Empuls auto-schedules every celebration",
    body: "Weeks before each milestone, Empuls creates a private Wishboard, notifies the team, queues the celebration message, and reserves the gift credit — all without a single HR touchpoint.",
    cta: "How auto-scheduling works",
    Illustration: MilestoneScheduleModal,
  },
  {
    num: "03", tag: "Celebration day",
    title: "The team celebrates together",
    body: "On the day, a celebration posts to Slack, Teams, and the Empuls feed. The employee gets their Wishboard, their gift credit, and the feeling of being genuinely remembered.",
    cta: "How celebration day works",
    Illustration: CelebrationDayModal,
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
            From hire date to heartfelt celebration — fully automated
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            No manual tracking. No missed milestones. Just three steps and a moment that makes every employee feel seen.
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
