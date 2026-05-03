"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FLOATING_CHIPS = [
  {
    id: 1,
    emoji: "🏆",
    label: "Spot Award sent",
    sub: "Alex → Sarah · Innovation",
    value: "+200 pts",
    pos: "top-[6%] right-[2%]",
    delay: "0s",
    bg: "bg-white border-light-200",
    val: "text-blue-200",
  },
  {
    id: 2,
    emoji: "💬",
    label: "12 reactions",
    sub: "Your peers celebrated this",
    value: "🎉 👏 ❤️",
    pos: "top-[58%] right-[-2%]",
    delay: "0.6s",
    bg: "bg-white border-light-200",
    val: "text-orange-200",
  },
  {
    id: 3,
    emoji: "✨",
    label: "Points redeemed",
    sub: "Amazon · Gift card",
    value: "$200",
    pos: "bottom-[10%] right-[6%]",
    delay: "1.1s",
    bg: "bg-white border-light-200",
    val: "text-green-300",
  },
];

const LOGOS = [
  { name: "Bosch",           src: "/logos/spot-awards/bosch.png",           h: "h-7" },
  { name: "CGI",             src: "/logos/spot-awards/cgi.png",             h: "h-6" },
  { name: "Kennametal",      src: "/logos/spot-awards/kennametal.png",      h: "h-5" },
  { name: "Luminous",        src: "/logos/spot-awards/luminous.png",        h: "h-5" },
  { name: "Western Digital", src: "/logos/spot-awards/western-digital.svg", h: "h-6" },
];

const STATS = [
  { numeric: 65, suffix: "%",     label: "of employees feel underrecognized", source: "Gallup, 2024" },
  { numeric: 7,  suffix: " days", label: "average delay before recognition happens", source: "SHRM Research" },
  { numeric: 31, suffix: "%",     label: "lower attrition with timely recognition", source: "Deloitte Insights" },
];

const ease = [0, 0, 0.2, 1] as const;

function useCountUp(target: number, duration = 1200, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let val = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(val));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const [statTriggered, setStatTriggered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStatTriggered(true), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animFrame: number;
    let t = 0;
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const spacing = 40;
      const cols = Math.ceil(W / spacing) + 1;
      const rows = Math.ceil(H / spacing) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(x * x + y * y);
          const wave = Math.sin(dist / 90 - t * 0.7) * 0.5 + 0.5;
          const alpha = 0.03 + wave * 0.09;
          const radius = 1 + wave * 0.8;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29, 97, 246, ${alpha})`;
          ctx.fill();
        }
      }
      t += 0.016;
      animFrame = requestAnimationFrame(draw);
    };
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const fadeUp = (delay: number) =>
    reduce ? {} : {
      initial: { opacity: 0, y: 22 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.65, ease, delay },
    };

  return (
    <section className="relative flex flex-col overflow-hidden bg-dark-300">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Moving dot grid */}
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      {/* Ambient gradient blobs */}
      <div className="blob-1 absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.28) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute top-20 right-[-80px] w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />
      <div className="blob-3 absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.16) 0%, transparent 65%)" }} />

      {/* Gradient blobs */}
      <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] rounded-full bg-blue-200/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-blue-300/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-[25%] w-[280px] h-[280px] rounded-full bg-orange-200/8 blur-[80px] pointer-events-none" />

      {/* ── Main hero grid ── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-28 pb-12 grid lg:grid-cols-[1fr_500px] gap-16 items-center">

        {/* Left: Copy */}
        <div className="flex flex-col items-start">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-blue-100 text-xs font-semibold mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-100 animate-pulse" />
              Spot Awards
            </div>
          </motion.div>

          {/* Headline — no dash, no underline SVG */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-[46px] lg:text-[60px] font-bold text-white leading-[1.06] tracking-tight mb-6"
          >
            <span className="block">Recognize great work</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">
              the moment it happens
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p {...fadeUp(0.2)} className="text-lg text-dark-000 max-w-md mb-10 leading-relaxed">
            Instant, values-based recognition with points, a personal note, and a company-wide celebration.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center gap-4 mb-10">
            <button className="px-7 py-3.5 rounded-xl bg-blue-200 text-white font-semibold text-sm hover:bg-blue-300 transition-colors shadow-lg shadow-blue-200/25">
              Book a demo
            </button>
            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/30 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              <PlayIcon />
              Watch 2-min demo
            </button>
          </motion.div>

        </div>

        {/* Right: UI mock */}
        <motion.div
          className="relative hidden lg:block h-[540px]"
          {...(reduce ? {} : {
            initial: { opacity: 0, x: 40 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.75, ease, delay: 0.18 },
          })}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl pointer-events-none" />

          {/* Central recognition card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-5 shadow-2xl">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Chen" className="w-8 h-8 rounded-full object-cover shrink-0" />
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold">Alex Chen</p>
                <p className="text-dark-000 text-[10px]">recognized Sarah Mitchell</p>
              </div>
              <div className="ml-auto shrink-0 flex items-center gap-1 bg-orange-000/20 border border-orange-100/30 rounded-full px-2 py-0.5">
                <span className="text-orange-200 text-[10px] font-bold">🏆 Spot Award</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-blue-200/15 border border-blue-100/20 rounded-full px-3 py-1 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-100" />
              <span className="text-blue-100 text-[10px] font-semibold uppercase tracking-wide">Innovation</span>
            </div>

            <p className="text-white/80 text-xs leading-relaxed mb-4">
              &ldquo;Sarah&apos;s quick thinking on the API redesign saved us three weeks of rework. Exactly the kind of initiative we need more of. 🙌&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sarah Mitchell" className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <p className="text-white text-xs font-semibold">Sarah Mitchell</p>
                  <p className="text-dark-000 text-[10px]">Product Design</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-200 font-bold text-sm">+200</p>
                <p className="text-dark-000 text-[10px]">points</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
              <div className="flex -space-x-1">
                {[
                  "https://randomuser.me/api/portraits/women/28.jpg",
                  "https://randomuser.me/api/portraits/men/54.jpg",
                  "https://randomuser.me/api/portraits/women/33.jpg",
                ].map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={src} src={src} alt="" className="w-5 h-5 rounded-full object-cover border border-dark-300" />
                ))}
              </div>
              <span className="text-dark-000 text-[10px]">+9 others reacted</span>
              <span className="ml-auto text-[11px]">🎉 👏 ❤️</span>
            </div>
          </div>

          {/* Floating chips */}
          {FLOATING_CHIPS.map((chip) => (
            <div
              key={chip.id}
              className={`absolute ${chip.pos} rounded-xl border ${chip.bg} p-3 shadow-lg`}
              style={{ animation: `float 3s ease-in-out ${chip.delay} infinite alternate`, minWidth: "188px" }}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-xl leading-none">{chip.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-dark-300 truncate">{chip.label}</p>
                  <p className="text-[10px] text-dark-100 truncate mt-0.5">{chip.sub}</p>
                </div>
                <span className={`shrink-0 text-xs font-bold ${chip.val}`}>{chip.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Logo marquee with inline label ── */}
      <motion.div
        className="relative z-10 w-full pt-4 pb-8"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.55 }}
      >
        {/* Label centered between two rules */}
        <div className="flex items-center gap-5 max-w-[1280px] mx-auto px-6 mb-5">
          <div className="flex-1 h-px bg-white/10" />
          <p className="text-[10px] text-dark-100 uppercase tracking-[0.18em] font-semibold whitespace-nowrap">
            Trusted by 1,400+ companies worldwide
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex items-center gap-14 w-max" style={{ animation: "marquee 24s linear infinite" }}>
            {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.name}
                className={`${logo.h} w-auto object-contain shrink-0`}
                style={{ filter: "invert(1) grayscale(1)", opacity: 0.55 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Stats strip ── */}
      <motion.div
        className="relative z-10 w-full border-t border-white/10"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.65 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} triggered={statTriggered} reduce={!!reduce} />
          ))}
        </div>
      </motion.div>


      <style jsx>{`
        @keyframes float {
          0%   { transform: translateY(0px);   }
          100% { transform: translateY(-10px); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0);     }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}

function StatItem({
  numeric, suffix, label, source, triggered, reduce,
}: typeof STATS[0] & { triggered: boolean; reduce: boolean }) {
  const count = useCountUp(numeric, 1200, triggered && !reduce);
  const display = reduce ? numeric : count;

  return (
    <div className="px-8 py-6 sm:py-0 first:pl-0 last:pr-0 text-center sm:text-left">
      <p className="text-4xl font-bold tabular-nums text-white mb-1">
        {display}{suffix}
      </p>
      <p className="text-dark-000 text-sm leading-snug">{label}</p>
      <p className="text-dark-100 text-[10px] font-semibold uppercase tracking-widest mt-1.5">{source}</p>
    </div>
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
