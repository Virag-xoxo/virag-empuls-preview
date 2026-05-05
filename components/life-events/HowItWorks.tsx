"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";

const AUTO_MS = 8000;

// Step 1: Pick the occasion
function PickOccasionModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const occasions = [
    { emoji: "👶", name: "New Baby",     bg: "#FFF8F0", border: "#FED7AA", color: "#C2410C" },
    { emoji: "💍", name: "Wedding",      bg: "#FCE7F3", border: "#F9A8D4", color: "#9D174D" },
    { emoji: "🎓", name: "Graduation",   bg: "#EEF2FF", border: "#C7D2FE", color: "#4338CA" },
    { emoji: "🏡", name: "New Home",     bg: "#F0FDF4", border: "#BBF7D0", color: "#15803D" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Pick the occasion</p>
      </div>
      <div className="px-5 py-4 grid grid-cols-2 gap-2">
        {occasions.map((o, i) => (
          <motion.div
            key={o.name}
            animate={{ scale: active === i ? 1.02 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="rounded-xl border px-3 py-3 flex items-center gap-2.5"
            style={{ background: active === i ? o.bg : "#FFFFFF", borderColor: active === i ? o.border : "#EDEFF3" }}
          >
            <span className="text-2xl leading-none">{o.emoji}</span>
            <p className="text-[12px] font-semibold" style={{ color: active === i ? o.color : "#4C5A70" }}>{o.name}</p>
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">+ Add custom occasion</span>
        <span className="text-[10px] font-semibold text-blue-200">Continue →</span>
      </div>
    </div>
  );
}

// Step 2: Choose a gift collection
function ChooseCollectionModal() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);

  const collections = [
    { emoji: "👶", name: "Baby Essentials",  desc: "Curated baby pack" },
    { emoji: "⭐", name: "Gift Points",       desc: "Redeem anywhere" },
    { emoji: "🌴", name: "Experience Pack",   desc: "Spa, dining, more" },
    { emoji: "💳", name: "Value Card",        desc: "Personalized card" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Choose a gift collection</p>
      </div>
      <div className="px-5 py-4 space-y-1.5">
        {collections.map((c, i) => (
          <motion.div
            key={c.name}
            animate={{ scale: active === i ? 1.015 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border transition-colors ${
              active === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"
            }`}
          >
            <span className="text-xl leading-none">{c.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{c.name}</p>
              <p className="text-[10px] text-dark-100">{c.desc}</p>
            </div>
            {active === i && <span className="text-[10px] font-bold text-blue-200">Selected</span>}
          </motion.div>
        ))}
      </div>
      <div className="px-5 py-2.5 border-t border-light-200">
        <span className="text-[10px] text-dark-100">Recipient picks what they want from inside the collection</span>
      </div>
    </div>
  );
}

// Step 3: Personal message + delivery
function PersonalMessageModal() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"typing" | "done">("typing");
  const [displayed, setDisplayed] = useState("");
  const message = "Congratulations on your little one, James! Wishing you and your family all the joy.";

  useEffect(() => {
    if (reduce) { setDisplayed(message); setPhase("done"); return; }
    let i = 0;
    setDisplayed("");
    setPhase("typing");
    const iv = setInterval(() => {
      i++;
      setDisplayed(message.slice(0, i));
      if (i >= message.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("done"), 800);
      }
    }, 30);
    return () => clearInterval(iv);
  }, [reduce]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200">
        <p className="text-sm font-bold text-dark-300">Write a personal message</p>
      </div>
      <div className="px-5 py-4">
        <div className="bg-light-100 border border-light-200 rounded-xl p-3 mb-3 min-h-[80px]">
          <p className="text-[11px] text-dark-200 leading-relaxed">
            &ldquo;{displayed}
            {phase === "typing" && <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.7, repeat: Infinity }}>|</motion.span>}
            &rdquo;
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-dark-100">Send via Slack · Teams · Email</span>
          <button className="text-[10px] font-bold bg-blue-200 text-white px-3 py-1.5 rounded-lg">Send →</button>
        </div>
      </div>
    </div>
  );
}

const STEPS = [
  {
    num: "01", tag: "Pick the occasion",
    title: "Marriage, baby, graduation, or any custom moment",
    body: "Pick from preset occasions or add any custom one. Empuls keeps the occasion context throughout — gift collections, message templates, and timing all match.",
    cta: "About occasion types",
    Illustration: PickOccasionModal,
  },
  {
    num: "02", tag: "Choose a gift collection",
    title: "Curated for the moment, chosen by the recipient",
    body: "Select a collection — baby essentials, home goods, experience packs, points. The employee picks what they actually want from inside the collection you sent.",
    cta: "Browse the catalog",
    Illustration: ChooseCollectionModal,
  },
  {
    num: "03", tag: "Write something personal",
    title: "Send it now or schedule it for the right day",
    body: "Add a personal note with name and occasion placeholders. Send immediately or schedule. The recipient gets it via Slack, Teams, or email.",
    cta: "How delivery works",
    Illustration: PersonalMessageModal,
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
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f7ff 55%, #eef3ff 100%)" }}>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(206,222,255,0.5) 0%, transparent 65%)" }} />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">How it works</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Send a gift that fits the moment — in minutes</h2>
          <p className="text-dark-100 text-base leading-relaxed">No tickets, no approvals. HR or managers send directly from Empuls when the moment arrives.</p>
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
