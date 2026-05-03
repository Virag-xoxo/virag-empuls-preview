"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { Bold, Italic, Underline, List, Quote, Link, Sparkles, Paperclip, Mic, ImageIcon, MoreHorizontal, CornerDownLeft, Handshake, Trophy, Lightbulb } from "lucide-react";

const AUTO_MS = 8000; // long enough for step-3 AI animation

// ── Shared modal chrome ───────────────────────────────────────────────────────
function ModalFrame({ step, children }: { step: number; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-light-200 overflow-hidden w-full">
      <div className="px-5 py-3.5 border-b border-light-200 flex items-center justify-between">
        <p className="text-sm font-bold text-dark-300">Share appreciation</p>
        <div className="w-6 h-6 rounded-full bg-light-100 flex items-center justify-center text-dark-100 text-xs">✕</div>
      </div>
      {/* Green progress bar */}
      <div className="h-[3px] bg-light-200">
        <motion.div className="h-full rounded-full" style={{ background: "#277A5F" }}
          initial={{ width: 0 }} animate={{ width: `${((step + 1) / 3) * 100}%` }}
          transition={{ duration: 0.5, ease: [0,0,0.2,1] }} />
      </div>
      <div className="px-5 py-4">{children}</div>
      <div className="px-5 py-3 border-t border-light-200 flex items-center justify-between">
        <span className="text-[11px] font-medium text-dark-100">{step > 0 ? "← Back" : ""}</span>
        <button className="text-[11px] font-bold text-white px-4 py-1.5 rounded-lg" style={{ background: "#1D3A6B" }}>
          {step === 2 ? "Send ✓" : "Next →"}
        </button>
      </div>
    </div>
  );
}

// ── Step 1: animated search + selection ──────────────────────────────────────
function PickPersonModal() {
  const reduce = useReducedMotion();
  const [query, setQuery]       = useState("");
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);

  const searchText = "Sarah C";

  useEffect(() => {
    if (reduce) { setQuery(searchText); setShowList(true); setSelected(true); return; }

    const timers: ReturnType<typeof setTimeout>[] = [];
    let interval: ReturnType<typeof setInterval>;

    const run = () => {
      setQuery(""); setShowList(false); setSelected(false);
      let i = 0;
      timers.push(setTimeout(() => {
        interval = setInterval(() => {
          i++;
          setQuery(searchText.slice(0, i));
          if (i >= searchText.length) {
            clearInterval(interval);
            timers.push(setTimeout(() => setShowList(true), 300));
            timers.push(setTimeout(() => setSelected(true), 900));
            timers.push(setTimeout(run, 4500)); // loop
          }
        }, 80);
      }, 600));
    };

    run();
    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const people = [
    { initials: "SC", name: "Sarah Chen",   role: "Engineering",    photo: "https://randomuser.me/api/portraits/women/44.jpg" },
    { initials: "SM", name: "Sarah Miller",  role: "Product Design", photo: "https://randomuser.me/api/portraits/women/47.jpg" },
  ];

  return (
    <ModalFrame step={0}>
      <p className="text-[11px] font-bold text-dark-300 mb-3">Who do you want to recognize?</p>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-light-100 rounded-xl px-3 py-2.5 border border-light-200 mb-3">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="5" cy="5" r="3.5" stroke="#BFC9DA" strokeWidth="1.2"/>
          <path d="M8 8L10 10" stroke="#BFC9DA" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span className="text-[11px] text-dark-300 flex-1">{query}
          <motion.span animate={{ opacity: [1,0,1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-px">|</motion.span>
        </span>
      </div>

      {/* Results */}
      <AnimatePresence>
        {showList && (
          <motion.div key="list" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }} className="space-y-1.5">
            {people.map((p, idx) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.25 }}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all duration-300 ${
                  idx === 0 && selected ? "border-blue-200 bg-blue-000" : "border-light-200 bg-white"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.photo} alt={p.name}
                  className={`w-8 h-8 rounded-full object-cover shrink-0 transition-all duration-300 ${idx === 0 && selected ? "ring-2 ring-blue-200 ring-offset-1" : ""}`}
                />
                <div className="flex-1 min-w-0">
                  <p className={`text-[11px] font-semibold ${idx === 0 && selected ? "text-blue-200" : "text-dark-300"}`}>{p.name}</p>
                  <p className="text-[9px] text-dark-100">{p.role}</p>
                </div>
                {idx === 0 && selected && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center shrink-0">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Smart insights */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }}
              className="rounded-xl border p-3 mt-1" style={{ borderColor: "#E9D5FF", background: "#FAFAFE" }}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs" style={{ color: "#D946EF" }}>✦</span>
                <span className="text-[10px] font-bold text-dark-300">Smart insights</span>
              </div>
              <p className="text-[10px] text-dark-100 leading-relaxed">
                It&apos;s been 6 weeks since Sarah was last appreciated — a great time to recognize her!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalFrame>
  );
}

// ── Award shield badge ────────────────────────────────────────────────────────
function ShieldBadge({ from, to, shadow, Icon, idx }: {
  from: string; to: string; shadow: string;
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  idx: number;
}) {
  const gId = `ab-grad-${idx}`;
  return (
    <div className="relative shrink-0 w-9 h-10 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 40" fill="none">
        <defs>
          <linearGradient id={gId} x1="0" y1="0" x2="36" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
          <filter id={`ab-sh-${idx}`} x="-20%" y="-10%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={shadow} floodOpacity="0.35" />
          </filter>
        </defs>
        {/* Shield body */}
        <path
          d="M18 2C18 2 34 7 34 18L34 27C34 35 18 40 18 40C18 40 2 35 2 27L2 18C2 7 18 2 18 2Z"
          fill={`url(#${gId})`}
          filter={`url(#ab-sh-${idx})`}
        />
        {/* Subtle top shine */}
        <path
          d="M18 4C24 5.5 31 10 31.5 18L31.5 19C28 12.5 18 8.5 18 8.5C18 8.5 8 12.5 4.5 19L4.5 18C5 10 12 5.5 18 4Z"
          fill="white" fillOpacity="0.18"
        />
      </svg>
      {/* Icon must be relative+z-10 to paint above the absolute SVG */}
      <span className="relative z-10 flex items-center justify-center" style={{ color: "white" }}>
        <Icon size={13} strokeWidth={2.2} />
      </span>
    </div>
  );
}

// ── Step 2: animated award selection ─────────────────────────────────────────
function CraftAwardModal() {
  const reduce = useReducedMotion();
  const [hovered, setHovered]   = useState(-1);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (reduce) { setSelected(1); return; }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setHovered(-1); setSelected(-1);
      timers.push(setTimeout(() => setHovered(0),  600));
      timers.push(setTimeout(() => setHovered(1),  1200));
      timers.push(setTimeout(() => setSelected(1), 1700));
      timers.push(setTimeout(run,                  5000));
    };

    run();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const awards = [
    { name: "Cheers to Peers",  pts: 50,  Icon: Handshake, from: "#F59E0B", to: "#EF4444", shadow: "#F59E0B", desc: "Great teamwork & collaboration"  },
    { name: "Above & Beyond",   pts: 200, Icon: Trophy,    from: "#8B5CF6", to: "#6D28D9", shadow: "#8B5CF6", desc: "Exceptional initiative & impact"  },
    { name: "Innovation Award", pts: 150, Icon: Lightbulb, from: "#1D61F6", to: "#0EA5E9", shadow: "#1D61F6", desc: "Creative problem-solving"          },
  ];

  return (
    <ModalFrame step={1}>
      <p className="text-[11px] font-bold text-dark-300 mb-1">What would you like to celebrate them for?</p>
      <p className="text-[9px] text-dark-100 mb-3">Pick an award or core value that reflects this recognition.</p>

      <div className="flex gap-1.5 mb-3">
        {["Awards","Core Values","All"].map((t, i) => (
          <span key={t} className={`text-[9px] font-semibold px-2.5 py-1 rounded-lg border cursor-pointer ${
            i === 0 ? "bg-blue-000 text-blue-200 border-blue-100" : "bg-white text-dark-200 border-light-300"
          }`}>{t}</span>
        ))}
      </div>

      <div className="space-y-1.5">
        {awards.map((a, i) => {
          const isSelected = selected === i;
          const isHovered  = hovered === i && selected === -1;
          return (
            <motion.div key={a.name}
              animate={{ scale: isSelected ? 1.01 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 ${
                isSelected ? "bg-blue-000 border-blue-200 shadow-sm" :
                isHovered  ? "bg-light-100 border-light-200" :
                "bg-white border-light-200"
              }`}
            >
              <ShieldBadge from={a.from} to={a.to} shadow={a.shadow} Icon={a.Icon} idx={i} />
              <div className="flex-1 min-w-0">
                <p className={`text-[10px] font-semibold ${isSelected ? "text-blue-200" : "text-dark-300"}`}>{a.name}</p>
                <p className="text-[9px] text-dark-100">{a.desc}</p>
              </div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isSelected ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-[9px] font-bold px-2 py-0.5 rounded-full shrink-0"
                style={{ background: "#FEF3C7", color: "#B45309" }}
              >
                {a.pts} pts
              </motion.span>
              <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center transition-colors duration-200 ${
                isSelected ? "bg-blue-200 border-blue-200" : "border-light-300"
              }`}>
                {isSelected && (
                  <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 500 }}
                    width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3.2 5.8L6.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </ModalFrame>
  );
}

// ── Step 3: live AI message animation ────────────────────────────────────────
type MsgPhase = "idle"|"typing"|"paused"|"glowing"|"loading"|"streaming"|"done";

function MessageModal() {
  const reduce = useReducedMotion();
  const [phase,     setPhase]     = useState<MsgPhase>("idle");
  const [displayed, setDisplayed] = useState("");

  const userMsg = "Good work on the client deliveries!";
  const aiMsg   = "Sarah, your exceptional work on the client deliveries has been truly outstanding. The trust you built speaks to your skill and dedication — we’re lucky to have you! 🌟";

  useEffect(() => {
    if (reduce) { setPhase("done"); setDisplayed(aiMsg); return; }

    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setPhase("idle"); setDisplayed("");

      timers.push(setTimeout(() => setPhase("typing"), 500));
    };

    run();
    return () => { timers.forEach(clearTimeout); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Phase: typing → user message
  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0; setDisplayed("");
    const iv = setInterval(() => {
      i++;
      setDisplayed(userMsg.slice(0, i));
      if (i >= userMsg.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("paused"), 400);
      }
    }, 55);
    return () => clearInterval(iv);
  }, [phase]);

  // Phase: paused → glowing
  useEffect(() => {
    if (phase !== "paused") return;
    const t = setTimeout(() => setPhase("glowing"), 600);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: glowing → loading
  useEffect(() => {
    if (phase !== "glowing") return;
    const t = setTimeout(() => { setPhase("loading"); setDisplayed(""); }, 900);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: loading → streaming
  useEffect(() => {
    if (phase !== "loading") return;
    const t = setTimeout(() => setPhase("streaming"), 900);
    return () => clearTimeout(t);
  }, [phase]);

  // Phase: streaming → AI message types out
  useEffect(() => {
    if (phase !== "streaming") return;
    let i = 0; setDisplayed("");
    const iv = setInterval(() => {
      i++;
      setDisplayed(aiMsg.slice(0, i));
      if (i >= aiMsg.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("done"), 800);
      }
    }, 22);
    return () => clearInterval(iv);
  }, [phase]);

  // Phase: done → loop
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(() => {
      setPhase("idle"); setDisplayed("");
      setTimeout(() => setPhase("typing"), 500);
    }, 3000);
    return () => clearTimeout(t);
  }, [phase]);

  const tones = ["Professional", "Friendly", "Enthusiastic", "Heartfelt"];
  const isGlowing     = phase === "glowing";
  const isLoading     = phase === "loading";
  const isAI          = phase === "streaming" || phase === "done";
  const showCursor    = phase === "typing" || phase === "streaming";
  const borderColor   = isAI ? "#D946EF" : isGlowing || isLoading ? "#1D61F6" : "#E0E4E9";

  const TOOLBAR_ICONS = [
    { Icon: Bold, label: "Bold" }, { Icon: Italic, label: "Italic" }, { Icon: Underline, label: "Underline" },
    { Icon: List, label: "List" }, { Icon: Quote, label: "Quote" }, { Icon: Link, label: "Link" },
  ];

  return (
    <ModalFrame step={2}>
      <p className="text-[11px] font-bold text-dark-300 mb-2.5">Write your recognition message</p>

      <div className="rounded-xl border overflow-hidden transition-all duration-300 mb-2"
        style={{ borderColor, boxShadow: isGlowing || isAI ? `0 0 0 3px ${isAI ? "rgba(217,70,239,0.12)" : "rgba(29,97,246,0.1)"}` : "none" }}>

        {/* Toolbar — lucide icons */}
        <div className="flex items-center justify-between px-2.5 py-1.5 bg-light-100 border-b border-light-200">
          <div className="flex items-center gap-0.5">
            {TOOLBAR_ICONS.map(({ Icon, label }) => (
              <button key={label} aria-label={label}
                className="w-6 h-6 rounded flex items-center justify-center text-dark-100 hover:text-dark-300 hover:bg-light-200 transition-colors">
                <Icon size={11} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-0.5">
            {[Paperclip, Mic, ImageIcon].map((Icon, i) => (
              <button key={i} className="w-6 h-6 rounded flex items-center justify-center text-dark-100 hover:text-dark-300 hover:bg-light-200 transition-colors">
                <Icon size={11} />
              </button>
            ))}
            <button className="w-6 h-6 rounded flex items-center justify-center text-dark-100 hover:text-dark-300 hover:bg-light-200 transition-colors">
              <MoreHorizontal size={11} />
            </button>
          </div>
        </div>

        {/* Message area */}
        <div className="px-3 py-3 min-h-[62px]">
          {isLoading ? (
            <div className="flex items-center gap-1.5 py-1">
              {[0,1,2].map((i) => (
                <motion.div key={i} className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#D946EF" }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}/>
              ))}
              <span className="text-[10px] ml-1" style={{ color: "#D946EF" }}>AI is writing…</span>
            </div>
          ) : (
            <p className="text-[11px] leading-relaxed min-h-[38px]"
              style={{ color: isAI ? "#7C3AED" : "#334155" }}>
              {displayed || <span className="text-dark-100">Start typing your message…</span>}
              {showCursor && (
                <motion.span animate={{ opacity: [1,0,1] }} transition={{ duration: 0.7, repeat: Infinity }} className="ml-px">|</motion.span>
              )}
            </p>
          )}
        </div>

        {/* Bottom bar — tones + AI button + send */}
        <div className="px-2.5 py-2 border-t border-light-200 flex items-center gap-1.5">
          {tones.map((t) => (
            <span key={t} className="text-[9px] font-medium text-dark-200 bg-white border border-light-200 rounded-full px-2 py-0.5 cursor-pointer hover:border-blue-100 hover:text-blue-200 transition-colors">
              {t}
            </span>
          ))}
          <motion.button
            animate={isGlowing ? { scale: [1, 1.06, 1], opacity: [1, 0.75, 1] } : {}}
            transition={{ duration: 0.5, repeat: isGlowing ? Infinity : 0 }}
            className="ml-auto flex items-center gap-1 text-[9px] font-semibold px-2 py-1 rounded-lg border cursor-pointer transition-all"
            style={{
              color: "#D946EF",
              borderColor: isGlowing || isAI ? "rgba(217,70,239,0.4)" : "#E9D5FF",
              background: isGlowing || isAI ? "rgba(217,70,239,0.06)" : "white",
            }}
          >
            <Sparkles size={9} />
            {isLoading ? "Generating…" : "Improve with AI"}
          </motion.button>
          <button className="flex items-center gap-1 text-[9px] font-bold bg-blue-200 text-white px-2.5 py-1 rounded-lg ml-1">
            Send <CornerDownLeft size={9} />
          </button>
        </div>
      </div>

      {/* Char count */}
      <p className="text-right text-[9px] text-dark-100">{displayed.length} / 5000</p>
    </ModalFrame>
  );
}

// ── Steps config ──────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01", tag: "Pick someone",
    title: "Find the colleague you want to recognize",
    body: "Search by name, team, or department. Smart insights show you who might be overdue for appreciation.",
    cta: "How recognition works",
    Illustration: PickPersonModal,
  },
  {
    num: "02", tag: "Pick your award",
    title: "Choose an award tied to your company values",
    body: "Select from your organization's awards or core values. Each comes with a defined point value.",
    cta: "About award types",
    Illustration: CraftAwardModal,
  },
  {
    num: "03", tag: "AI recognition coach",
    title: "Say it well — AI helps you find the right words",
    body: "Jot down a rough thought and hit Improve with AI. Your recognition coach rewrites it in seconds, in a tone that feels personal.",
    cta: "How AI coaching works",
    Illustration: MessageModal,
  },
];

const slideIn: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0,0,0.2,1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.2 } },
};

// ── Section ───────────────────────────────────────────────────────────────────
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
            From recognition to celebration — in 30 seconds
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            No approval bottlenecks. No forms. Just three steps and a moment that matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,520px)] gap-8 lg:gap-14 items-center lg:justify-center">
          {/* Left: step tabs */}
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
            {/* Dot nav */}
            <div className="flex items-center gap-2 px-5 pt-1">
              {STEPS.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className="rounded-full transition-all duration-300"
                  style={{ width: active === i ? 20 : 6, height: 6, background: active === i ? "#1D61F6" : "#E0E4E9" }}
                  aria-label={`Step ${i + 1}`}/>
              ))}
            </div>
          </div>

          {/* Right: animated illustration */}
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
