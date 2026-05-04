"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const REPS = [
  { initials: "SM", name: "Sarah M.",   deals: "$124K", pct: 132, badge: "+450" },
  { initials: "DT", name: "Daniel T.",  deals: "$108K", pct: 118, badge: "+380" },
  { initials: "AJ", name: "Andrew J.",  deals: "$98K",  pct: 106, badge: "+290" },
  { initials: "MH", name: "Megan H.",   deals: "$76K",  pct:  88, badge: "+150" },
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

function LeaderboardCard() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % REPS.length), 1800);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className="relative w-72 lg:w-80">
      <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">Q1 Sprint Challenge</p>
            <p className="text-sm font-bold text-white mt-0.5">AE Team · 18 reps</p>
          </div>
          <span className="text-[9px] font-bold text-white px-2 py-1 rounded-full" style={{ background: "rgba(29,97,246,0.4)" }}>LIVE</span>
        </div>

        <div className="space-y-2">
          {REPS.map((r, i) => (
            <motion.div key={r.initials}
              animate={{ scale: pulse === i ? 1.02 : 1 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${pulse === i ? "bg-white/15" : "bg-white/5"} border border-white/10`}>
              <span className="w-5 text-center text-[10px] font-bold text-white/55">#{i + 1}</span>
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>{r.initials}</div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-white truncate">{r.name}</p>
                <p className="text-[9px] text-white/50">{r.deals} closed</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold tabular-nums" style={{ color: r.pct >= 100 ? "#34D399" : "#FBBF24" }}>{r.pct}%</p>
                <p className="text-[8px] font-bold text-white/55">{r.badge} pts</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">Your commission</p>
            <span className="text-[8px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: "rgba(52,211,153,0.25)" }}>AUTO-PAYOUT</span>
          </div>
          <p className="text-2xl font-bold text-white tabular-nums">$8,420</p>
          <p className="text-[9px] text-white/50 mt-0.5">Q1 to date · paid weekly</p>
        </div>
      </div>

      <motion.div className="absolute -top-3 -left-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Tier hit</p>
        <p className="text-[11px] font-bold text-dark-300">2× accelerator unlocked</p>
      </motion.div>

      <motion.div className="absolute -bottom-4 -right-6 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden md:block"
        animate={reduce ? undefined : { y: [0, 7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Contest prize</p>
        <p className="text-[11px] font-bold text-dark-300">$500 to Sarah · automatic</p>
      </motion.div>

      <motion.div className="absolute top-1/2 -right-10 bg-white/95 rounded-xl shadow-xl px-3 py-2 hidden lg:block"
        animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
        <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-blue-200">Payout</p>
        <p className="text-[11px] font-bold text-dark-300">175+ countries</p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100 mb-4">Sales Incentives</p>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="text-white">Incentives that<br/></span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">make your reps compete</span>
            </h1>
            <p className="text-dark-000 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Automate commissions, run live contests, and pay reps instantly &mdash; no spreadsheets, no delays, no disputes. Every win surfaces. Every dollar earned is visible.
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
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">3×</p><p className="text-[11px] text-dark-100 mt-1">Quota attainment</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">22%</p><p className="text-[11px] text-dark-100 mt-1">Revenue lift</p></div>
              <div><p className="text-2xl lg:text-3xl font-bold text-white tabular-nums">175+</p><p className="text-[11px] text-dark-100 mt-1">Payout countries</p></div>
            </div>
          </motion.div>

          <motion.div className="flex justify-center lg:justify-end"
            initial={reduce ? undefined : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0,0,0.2,1], delay: 0.1 }}>
            <LeaderboardCard />
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-dark-100 text-center mb-6">Trusted by sales teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
            {LOGOS.map((l) => <span key={l} className="text-white/70 text-sm font-semibold tracking-wide">{l}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
