"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const DEALS = [
  { name: "Acme Corp",     amount: "$45.2K", rate: "1.5×", payout: "$1,356" },
  { name: "Zenith Ltd",    amount: "$28.0K", rate: "1.0×", payout: "$840" },
  { name: "DataPoint Inc", amount: "$51.8K", rate: "1.5×", payout: "$1,554" },
];

function DotWave() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    let raf = 0; let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = c.clientWidth, h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.scale(dpr, dpr);
    };
    resize(); window.addEventListener("resize", resize);
    const draw = () => {
      const w = c.clientWidth, h = c.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const step = 26;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const d = Math.sin((x + y) / 80 + t) * 0.5 + 0.5;
          ctx.fillStyle = `rgba(29,97,246,${0.08 + d * 0.18})`;
          ctx.beginPath(); ctx.arc(x, y, 1.2, 0, Math.PI * 2); ctx.fill();
        }
      }
      t += reduce ? 0 : 0.012;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [reduce]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

function StatementCard() {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-72 lg:w-80">
      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl">
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
          <p className="text-[9px] text-white/45 mt-2 text-center">0 disputes · audit trail logged</p>
        </div>
      </div>

      <motion.div className="absolute -top-3 -left-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Live</p>
        <p className="text-[11px] font-bold text-dark-300">Updates with every deal</p>
      </motion.div>

      <motion.div className="absolute -bottom-4 -right-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Next tier</p>
        <p className="text-[11px] font-bold text-dark-300">$22K to 2× kicker</p>
      </motion.div>
    </div>
  );
}

const LOGOS = ["Cisco", "ServiceNow", "Atlassian", "Datadog", "Snowflake", "Box", "DocuSign", "Splunk"];

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-dark-300 overflow-hidden pt-20 lg:pt-28 pb-10 lg:pb-14">
      <DotWave />
      <div className="blob-1 absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.32) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute top-20 right-[-100px] w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)" }} />
      <div className="blob-3 absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(123,131,235,0.18) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0,0,0.2,1] }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 mb-4">Compensation Management</p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-white">Commission plans<br/></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">your reps can trust</span>
            </h1>
            <p className="text-dark-000 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Every deal, every tier, every payout &mdash; calculated automatically and visible to reps the moment a deal closes. No black-box math, no end-of-month disputes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-200 text-white font-bold text-sm hover:bg-blue-300 transition-colors shadow-lg">
                Book a demo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                Talk to sales
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/10 max-w-md">
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">98%</p><p className="text-[11px] text-dark-100 mt-1">Fewer disputes</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">24×</p><p className="text-[11px] text-dark-100 mt-1">Faster payouts</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">96%</p><p className="text-[11px] text-dark-100 mt-1">Plan adoption</p></div>
            </div>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-end"
            initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0,0,0.2,1], delay: 0.1 }}>
            <StatementCard />
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex items-center gap-5 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-[10px] text-dark-100 uppercase tracking-[0.18em] font-semibold whitespace-nowrap">Trusted by RevOps and finance teams worldwide</p>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}>
            <div className="flex items-center gap-14 w-max" style={{ animation: "marquee 24s linear infinite" }}>
              {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
                <span key={i} className="text-white/55 text-base font-semibold tracking-wide shrink-0">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
