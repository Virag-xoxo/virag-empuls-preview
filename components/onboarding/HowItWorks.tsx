"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

function HRMSDetectModal() {
  const reduce = useReducedMotion();
  const [synced, setSynced] = useState<number[]>([]);

  useEffect(() => {
    if (reduce) { setSynced([0,1,2]); return; }
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setSynced([]);
      timers.push(setTimeout(() => setSynced([0]), 500));
      timers.push(setTimeout(() => setSynced([0,1]), 1100));
      timers.push(setTimeout(() => setSynced([0,1,2]), 1700));
      timers.push(setTimeout(run, 5000));
    };
    run();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const joiners = [
    { initials: "JB", name: "Jordan Brooks", role: "Software Engineer", date: "Joins May 13" },
    { initials: "TC", name: "Tyler Cooper",  role: "Product Designer",  date: "Joins May 14" },
    { initials: "HR", name: "Hannah Russell", role: "Data Analyst",     date: "Joins May 15" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">New joiners detected</p>
        <span className="text-[10px] font-semibold text-green-300 bg-green-000 border border-green-100 rounded-full px-2 py-0.5">● Workday synced</span>
      </div>
      <div className="px-5 py-4 space-y-2">
        {joiners.map((j, i) => (
          <motion.div key={j.name}
            initial={{ opacity: 0, y: 6 }}
            animate={synced.includes(i) ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 6 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-white border border-light-200 rounded-xl px-3 py-2.5">
            <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white bg-blue-200">{j.initials}</div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-dark-300">{j.name}</p>
              <p className="text-[10px] text-dark-100">{j.role} · {j.date}</p>
            </div>
            {synced.includes(i) ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }} className="text-[10px] font-bold text-green-300">✓ Queued</motion.span>
            ) : (
              <span className="text-[10px] text-dark-100">Pending…</span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">Joining dates sync from your HRIS</span>
        <span className="text-[10px] font-semibold text-blue-200">Sync now →</span>
      </div>
    </div>
  );
}

function Day1KitModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const items = [
    { emoji: "👕", name: "Company Hoodie", pts: "48 pts" },
    { emoji: "🧢", name: "Branded Cap",    pts: "29 pts" },
    { emoji: "📓", name: "Notebook Set",   pts: "18 pts" },
    { emoji: "🎁", name: "Gift Card",      pts: "200 pts" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Welcome kit · 300 pts available</p>
        <span className="text-[10px] font-semibold text-blue-200">Day 1</span>
      </div>
      <div className="px-5 py-4 space-y-1.5">
        {items.map((it, i) => (
          <motion.div key={it.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
            <span className="text-xl leading-none">{it.emoji}</span>
            <p className="flex-1 text-[12px] font-bold text-dark-300">{it.name}</p>
            <span className="text-[10px] font-semibold text-dark-100">{it.pts}</span>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200">
        <span className="text-[10px] text-dark-100">Recipient picks what they want from the kit</span>
      </div>
    </div>
  );
}

function TeamShoutoutModal() {
  const reduce = useReducedMotion();
  const [reactions, setReactions] = useState({ clap: 0, heart: 0, rocket: 0 });

  useEffect(() => {
    if (reduce) { setReactions({ clap: 12, heart: 8, rocket: 6 }); return; }
    const t = { clap: 12, heart: 8, rocket: 6 };
    let c = 0, h = 0, r = 0;
    const iv = setInterval(() => {
      if (c < t.clap) c++;
      if (h < t.heart) h++;
      if (r < t.rocket) r++;
      setReactions({ clap: Math.min(c, t.clap), heart: Math.min(h, t.heart), rocket: Math.min(r, t.rocket) });
      if (c >= t.clap && h >= t.heart && r >= t.rocket) clearInterval(iv);
    }, 100);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Empuls feed · Company-wide</p>
      </div>
      <div className="p-4">
        <div className="bg-light-100 border border-light-200 rounded-xl p-3.5">
          <p className="text-[13px] font-bold text-dark-300 mb-1">🎉 Welcome to the team, Jordan Brooks!</p>
          <p className="text-[10px] text-dark-100 mb-2.5">Software Engineer · Engineering · Just joined</p>
          <div className="flex items-center gap-1.5">
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">👏 {reactions.clap}</span>
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">❤️ {reactions.heart}</span>
            <span className="bg-white border border-light-200 text-dark-200 text-[10px] rounded px-2 py-0.5 font-semibold">🚀 {reactions.rocket}</span>
            <span className="text-[10px] text-blue-200 font-semibold ml-auto">14 replies</span>
          </div>
        </div>
        <div className="mt-2 bg-white border border-light-200 rounded-lg px-3 py-2 flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-200 shrink-0 flex items-center justify-center text-[9px] font-bold text-white">RK</div>
          <p className="text-[11px] text-dark-200 leading-snug">&ldquo;Welcome to the greatest team, @Jordan! So excited you&apos;re here.&rdquo; — Ryan K.</p>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  { num: "01", tag: "HRMS sync", title: "Joining date detected automatically", body: "Joining dates sync from your HRIS — Workday, BambooHR, Darwinbox, Keka, and 250+ more. Empuls queues the full welcome experience.", cta: "How HRMS sync works", Illustration: HRMSDetectModal },
  { num: "02", tag: "Day 1 trigger", title: "Welcome kit fires the moment they join", body: "Reward points, a branded kit, or a personalized greeting fires exactly on the start date — zero HR action needed on the day.", cta: "About Day-1 automation", Illustration: Day1KitModal },
  { num: "03", tag: "Hours 1–8", title: "Team shoutout goes live company-wide", body: "A welcome post lands on the Empuls feed. Colleagues react, comment, and send wishes. Belonging starts before lunch.", cta: "How team shoutouts work", Illustration: TeamShoutoutModal },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Set it up once. Every new hire gets a perfect Day 1.</h2>
          <p className="text-dark-100 text-base leading-relaxed">Connect your HRMS and Empuls handles the rest — automatically, every time someone joins, anywhere in the world.</p>
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
