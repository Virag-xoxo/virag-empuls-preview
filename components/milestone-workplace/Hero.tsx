"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const FLOATING_CHIPS = [
  { id: 1, emoji: "🛡️", label: "30-day safety streak",   sub: "Ops · zero incidents",      value: "+200", pos: "top-[6%] right-[2%]",     delay: "0s",   bg: "bg-white border-light-200", val: "text-blue-200" },
  { id: 2, emoji: "📅", label: "Perfect attendance",     sub: "Sales · April 2026",         value: "+150", pos: "top-[58%] right-[-2%]",   delay: "0.6s", bg: "bg-white border-light-200", val: "text-orange-200" },
  { id: 3, emoji: "🚴", label: "Cycle to Work",          sub: "22 participants",            value: "Live", pos: "bottom-[10%] right-[6%]", delay: "1.1s", bg: "bg-white border-light-200", val: "text-green-300" },
];

const LOGOS = [
  { name: "Bosch",           src: "/logos/spot-awards/bosch.png",           h: "h-7" },
  { name: "CGI",             src: "/logos/spot-awards/cgi.png",             h: "h-6" },
  { name: "Kennametal",      src: "/logos/spot-awards/kennametal.png",      h: "h-5" },
  { name: "Luminous",        src: "/logos/spot-awards/luminous.png",        h: "h-5" },
  { name: "Western Digital", src: "/logos/spot-awards/western-digital.svg", h: "h-6" },
];

const ease = [0, 0, 0.2, 1] as const;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animFrame: number;
    let t = 0;
    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const spacing = 40;
      const cols = Math.ceil(W / spacing) + 1;
      const rows = Math.ceil(H / spacing) + 1;
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
        const x = i * spacing, y = j * spacing;
        const dist = Math.sqrt(x * x + y * y);
        const wave = Math.sin(dist / 90 - t * 0.7) * 0.5 + 0.5;
        const alpha = 0.03 + wave * 0.09;
        const radius = 1 + wave * 0.8;
        ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 97, 246, ${alpha})`; ctx.fill();
      }
      t += 0.016;
      animFrame = requestAnimationFrame(draw);
    };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animFrame); window.removeEventListener("resize", resize); };
  }, []);

  const fadeUp = (delay: number) => reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, ease, delay } };

  return (
    <section className="relative flex flex-col overflow-hidden bg-dark-300">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      <div className="blob-1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.28) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute top-20 right-[-80px] w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />
      <div className="blob-3 absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 65%)" }} />

      <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-blue-200/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-blue-300/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-28 pb-12 grid lg:grid-cols-[1fr_500px] gap-16 items-center">
        <div className="flex flex-col items-start">
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-blue-100 text-xs font-semibold mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-100 animate-pulse" />
              Workplace Milestones
            </div>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-[46px] lg:text-[60px] font-bold text-white leading-[1.06] tracking-tight mb-6">
            <span className="block">Build the habits</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">your team needs to grow</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-dark-000 max-w-md mb-10 leading-relaxed">
            Safety streaks, attendance records, performance targets — rewarded automatically the moment each threshold is crossed.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-7 py-3.5 rounded-xl bg-blue-200 text-white font-semibold text-sm hover:bg-blue-300 transition-colors shadow-lg shadow-blue-200/25">Book a demo</button>
            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/30 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              <PlayIcon />
              See how it works
            </button>
          </motion.div>
        </div>

        <motion.div className="relative hidden lg:block h-[540px]"
          {...(reduce ? {} : { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.75, ease, delay: 0.18 } })}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl pointer-events-none" />

          {/* Streak card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-5 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              <div className="w-9 h-9 rounded-lg bg-blue-200/15 border border-blue-100/20 flex items-center justify-center text-base shrink-0">🛡️</div>
              <div className="min-w-0 flex-1">
                <p className="text-white text-[12px] font-bold leading-tight">Safety Challenge</p>
                <p className="text-dark-000 text-[10px]">Ops Team · zero-incident streak</p>
              </div>
              <span className="inline-flex items-center gap-1 bg-green-200/15 border border-green-200/20 rounded-full px-2 py-0.5 text-green-200 text-[9px] font-bold shrink-0">
                <span className="w-1 h-1 rounded-full bg-green-200 animate-pulse" />LIVE
              </span>
            </div>

            <div className="text-center py-3 mb-3">
              <p className="text-white font-extrabold leading-none mb-1" style={{ fontSize: "44px" }}>30</p>
              <p className="text-dark-000 text-[11px] font-medium">days without incident</p>
              <span className="inline-flex items-center gap-1 mt-2 bg-white/8 border border-white/10 rounded-full px-2 py-0.5 text-white/65 text-[9px] font-semibold">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="3.5" cy="3" r="1.6" stroke="currentColor" strokeWidth="1" /><circle cx="6.8" cy="4.2" r="1.3" stroke="currentColor" strokeWidth="1" /><path d="M0.5 9c0-1.5 1.3-2.7 2.9-2.7s2.9 1.2 2.9 2.7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" /></svg>
                14 members
              </span>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-semibold text-white/85">Goal: 30-day milestone</span>
                <span className="text-[10px] font-bold text-green-200">100%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-blue-200" style={{ width: "100%" }} />
              </div>
              <p className="text-[9px] text-green-200 font-semibold mt-1">Threshold crossed · reward triggered ✓</p>
            </div>

            <div className="bg-blue-200/10 border border-blue-100/20 rounded-lg p-2.5 flex items-center gap-2.5 mb-2">
              <span className="text-base">⭐</span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-bold">200 pts × 14 members</p>
                <p className="text-blue-100 text-[10px] font-semibold">2,800 pts distributed</p>
              </div>
              <span className="text-green-200 text-[10px] font-bold shrink-0">✓</span>
            </div>

            <div className="flex items-center justify-between text-[10px]">
              <span className="text-dark-000">Next: 60-day threshold</span>
              <span className="text-blue-100 font-bold">+400 pts each</span>
            </div>
          </div>

          {FLOATING_CHIPS.map((chip) => (
            <div key={chip.id} className={`absolute ${chip.pos} rounded-xl border ${chip.bg} p-3 shadow-lg`}
              style={{ animation: `float 3s ease-in-out ${chip.delay} infinite alternate`, minWidth: "200px" }}>
              <div className="flex items-start gap-2.5">
                <span className="text-xl leading-none">{chip.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-dark-300 truncate">{chip.label}</p>
                  <p className="text-[10px] text-dark-100 truncate mt-0.5">{chip.sub}</p>
                </div>
                <span className={`shrink-0 text-[10px] font-bold ${chip.val}`}>{chip.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="relative z-10 w-full pt-4 pb-8" initial={reduce ? undefined : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease, delay: 0.55 }}>
        <div className="flex items-center gap-5 max-w-[1280px] mx-auto px-6 mb-5">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-[10px] text-dark-100 uppercase tracking-[0.18em] font-semibold whitespace-nowrap">Trusted by 1,400+ companies worldwide</p>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex items-center gap-14 w-max" style={{ animation: "marquee 24s linear infinite" }}>
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={logo.src} alt={logo.name} className={`${logo.h} w-auto object-contain shrink-0`} style={{ filter: "invert(1) grayscale(1)", opacity: 0.55 }} />
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes float { 0% { transform: translateY(0px); } 100% { transform: translateY(-10px); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
      `}</style>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 4.5L10 7L5.5 9.5V4.5Z" fill="currentColor" />
    </svg>
  );
}
