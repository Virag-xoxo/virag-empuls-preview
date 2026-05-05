"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const REPS = [
  { initials: "SM", name: "Sarah M.",   pct: 134, status: "OVER",       color: "#34D399" },
  { initials: "DT", name: "Daniel T.",  pct:  98, status: "ON TRACK",   color: "#1D61F6" },
  { initials: "AJ", name: "Andrew J.",  pct:  81, status: "CLOSE",      color: "#94a3b8" },
  { initials: "MH", name: "Megan H.",   pct:  67, status: "AT RISK",    color: "#FBBF24" },
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

function PerformanceCard() {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-72 lg:w-80">
      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">Q2 Performance</p>
            <p className="text-sm font-bold text-white mt-0.5">AE Team · 18 reps</p>
          </div>
          <span className="text-[9px] font-bold text-white px-2 py-1 rounded-full" style={{ background: "rgba(29,97,246,0.4)" }}>LIVE</span>
        </div>

        <div className="space-y-2 mb-4">
          {REPS.map((r, i) => (
            <div key={r.initials} className="flex items-center gap-2.5">
              <span className="w-5 text-center text-[10px] font-bold text-white/55">#{i + 1}</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>{r.initials}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-white truncate">{r.name}</p>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
                  <div className="h-full rounded-full" style={{ width: `${Math.min(r.pct, 100)}%`, background: r.color }} />
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[11px] font-bold tabular-nums" style={{ color: r.color }}>{r.pct}%</p>
                <p className="text-[8px] font-bold text-white/45">{r.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-white/55">Team total</span>
            <span className="text-[9px] font-bold text-green-300">↑ 12% vs Q1</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-white tabular-nums">$374K</span>
            <span className="text-[10px] text-white/45">of $480K (78%)</span>
          </div>
        </div>
      </div>

      <motion.div className="absolute -top-3 -left-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">AI nudge</p>
        <p className="text-[11px] font-bold text-dark-300">Close NovaTech to hit #1</p>
      </motion.div>

      <motion.div className="absolute -bottom-4 -right-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Contest</p>
        <p className="text-[11px] font-bold text-dark-300">$500 prize · Sarah leads</p>
      </motion.div>

      <motion.div className="absolute top-1/2 -right-10 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden lg:block"
        animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Forecast</p>
        <p className="text-[11px] font-bold text-dark-300">86% to plan</p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 mb-4">Performance Management</p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-white">Quota tracking that<br/></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">drives real action</span>
            </h1>
            <p className="text-dark-000 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Real-time attainment, gamified contests, and AI-powered nudges &mdash; every rep knows where they stand, what to close next, and exactly how to win.
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
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">90%</p><p className="text-[11px] text-dark-100 mt-1">Ops efficiency</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">100%</p><p className="text-[11px] text-dark-100 mt-1">Payout accuracy</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">10×</p><p className="text-[11px] text-dark-100 mt-1">Faster plan launch</p></div>
            </div>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-end"
            initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0,0,0.2,1], delay: 0.1 }}>
            <PerformanceCard />
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="flex items-center gap-5 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <p className="text-[10px] text-dark-100 uppercase tracking-[0.18em] font-semibold whitespace-nowrap">Trusted by sales leaders at 1,400+ companies</p>
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
