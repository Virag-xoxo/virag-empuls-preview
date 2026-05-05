"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const FLOATING_CHIPS = [
  {
    id: 1,
    emoji: "📡",
    label: "Live · Salesforce sync",
    sub: "Webhook · 2s ago",
    value: "ON",
    pos: "top-[6%] right-[2%]",
    delay: "0s",
    val: "text-blue-200",
  },
  {
    id: 2,
    emoji: "✅",
    label: "0 disputes this quarter",
    sub: "Audit trail logged",
    value: "100%",
    pos: "top-[58%] right-[-2%]",
    delay: "0.6s",
    val: "text-green-300",
  },
  {
    id: 3,
    emoji: "🚀",
    label: "Next tier",
    sub: "$22K to 2× kicker",
    value: "73%",
    pos: "bottom-[10%] right-[6%]",
    delay: "1.1s",
    val: "text-blue-200",
  },
];

const LOGOS = [
  { name: "Bosch",           src: "/logos/spot-awards/bosch.png",           h: "h-7" },
  { name: "CGI",             src: "/logos/spot-awards/cgi.png",             h: "h-6" },
  { name: "Kennametal",      src: "/logos/spot-awards/kennametal.png",      h: "h-5" },
  { name: "Luminous",        src: "/logos/spot-awards/luminous.png",        h: "h-5" },
  { name: "Western Digital", src: "/logos/spot-awards/western-digital.svg", h: "h-6" },
];

const DEALS = [
  { name: "Acme Corp",     amount: "$45.2K", rate: "1.5×", payout: "$1,356" },
  { name: "Zenith Ltd",    amount: "$28.0K", rate: "1.0×", payout: "$840" },
  { name: "DataPoint Inc", amount: "$51.8K", rate: "1.5×", payout: "$1,554" },
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

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.65, ease, delay },
  });

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
              Compensation Management
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-[46px] lg:text-[60px] font-bold text-white leading-[1.06] tracking-tight mb-6">
            <span className="block">Commission plans</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">
              your reps can trust
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-lg text-dark-000 max-w-md mb-10 leading-relaxed">
            Every deal, every tier, every payout — calculated automatically and visible to reps the moment a deal closes.
          </motion.p>

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

        <motion.div
          className="relative hidden lg:block h-[540px]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduce ? 0 : 0.75, ease, delay: 0.18 }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">Q2 Commission Statement</p>
              <span className="text-[8px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.25)" }}>1.5× ACTIVE</span>
            </div>
            <p className="text-sm font-bold text-white mb-3">Sarah Mitchell · Account Executive</p>

            <div className="space-y-1.5 mb-4">
              {DEALS.map((d) => (
                <div key={d.name} className="bg-white/5 border border-white/10 rounded-lg px-2.5 py-2 flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-white truncate">{d.name}</p>
                    <p className="text-[9px] text-white/50">{d.amount} · {d.rate}</p>
                  </div>
                  <p className="text-[11px] font-bold text-white tabular-nums">{d.payout}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3">
              <div className="flex items-center justify-between text-[10px] mb-1">
                <span className="text-white/55">Base</span>
                <span className="text-white tabular-nums">$3,750</span>
              </div>
              <div className="flex items-center justify-between text-[10px] mb-2">
                <span className="text-white/55">Accelerator (134% quota)</span>
                <span className="text-white tabular-nums">+$1,875</span>
              </div>
              <div className="flex items-center justify-between bg-white/8 border border-white/15 rounded-lg px-2.5 py-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/70">Q2 total · paid</span>
                <span className="text-base font-bold text-white tabular-nums">$5,625</span>
              </div>
            </div>
          </div>

          {FLOATING_CHIPS.map((chip) => (
            <div
              key={chip.id}
              className={`absolute ${chip.pos} rounded-xl border bg-white border-light-200 p-3 shadow-lg`}
              style={{ animation: `float 3s ease-in-out ${chip.delay} infinite alternate`, minWidth: "188px" }}>
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

      <motion.div
        className="relative z-10 w-full pt-4 pb-8"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.55 }}>
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
          }}>
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

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 4.5L10 7L5.5 9.5V4.5Z" fill="currentColor" />
    </svg>
  );
}
