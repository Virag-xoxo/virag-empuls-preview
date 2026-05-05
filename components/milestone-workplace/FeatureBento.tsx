"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0,0,0.2,1] as const, delay: i * 0.08 } }),
};

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Platform capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Any workplace behaviour, turned into a reward trigger</h2>
          <p className="text-dark-100 text-base leading-relaxed">Safety, attendance, performance, compliance — configure reward programs for any operational metric your organisation tracks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Active milestone programs (LARGE) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">⚡ Active milestone programs</p>
              <span className="text-[9px] font-bold rounded-full px-2 py-0.5 bg-green-000 text-green-300 border border-green-100">● 5 RUNNING</span>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Run multiple programs simultaneously</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Each program runs independently with its own trigger, recipient group, and reward — across departments and goals.</p>
            <ProgramsViz />
          </motion.div>

          {/* 2 — Safety streaks */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🛡️ Safety streaks</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Zero-incident days, escalating</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Reward consecutive incident-free periods with rewards that grow as the streak grows.</p>
            <SafetyViz />
          </motion.div>

          {/* 3 — Attendance heatmap */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📅 Attendance streaks</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Perfect-month rewards</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Punctuality streaks tracked from your HRMS — biometric or self-check-in.</p>
            <AttendanceViz />
          </motion.div>

          {/* 4 — Sales leaderboard (DARK) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">🎯 Performance targets</p>
            <h3 className="text-lg font-bold text-white mb-1">Quotas hit → rewards delivered</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">CRM-triggered. Rewards land the moment a sales rep crosses 100% of quota.</p>
            <SalesViz />
          </motion.div>

          {/* 5 — Compliance */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">✅ Compliance milestones</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">On-time training &amp; sign-offs</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Reward teams that consistently meet compliance requirements on schedule.</p>
            <ComplianceViz />
          </motion.div>

          {/* 6 — Workplace impact (LARGE) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Workplace impact</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Watch the behaviour you reward become the culture you have</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Track incident rates, attendance consistency, and goal attainment trending in the right direction.</p>
            <ImpactViz />
          </motion.div>

          {/* 7 — Custom org goals */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">✨ Custom goals</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">CSR, volunteering, innovation</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Cycle to Work, volunteer hours, innovation submissions — any org-specific behaviour, configurable as a reward.</p>
            <CustomViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramsViz() {
  const programs = [
    { dot: "#e11d48", name: "30-Day Safety Streak",     team: "Ops Team · Day 30 of 30 ✓",   pts: "200 pts", per: "per member" },
    { dot: "#0a51e8", name: "Perfect Attendance Month", team: "All teams · April 2026",       pts: "150 pts", per: "individual" },
    { dot: "#059669", name: "Q1 Sales Target Hit",       team: "Sales · 112% of quota",        pts: "500 pts", per: "per AE" },
    { dot: "#7c3aed", name: "Compliance Training Done",  team: "Finance · 94% completion",     pts: "100 pts", per: "individual" },
    { dot: "#d97706", name: "Cycle to Work Challenge",   team: "All offices · 22 participants", pts: "50 pts",  per: "per trip" },
  ];
  return (
    <div className="space-y-1.5">
      {programs.map((p) => (
        <div key={p.name} className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: p.dot }} />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{p.name}</p>
            <p className="text-[9px] text-dark-100 truncate">{p.team}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] font-bold text-blue-200">{p.pts}</p>
            <p className="text-[9px] text-dark-100">{p.per}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-2 mt-1 border-t border-light-200">
        <span className="text-[10px] text-dark-100">Total pts distributed this month</span>
        <span className="text-[11px] font-bold text-blue-200">⭐ 14,200 pts</span>
      </div>
    </div>
  );
}

function SafetyViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const tiers = [
    { days: "7 days",  pts: 50,  pct: 23 },
    { days: "30 days", pts: 200, pct: 100, current: true },
    { days: "60 days", pts: 400, pct: 50 },
    { days: "90 days", pts: 750, pct: 33 },
  ];
  return (
    <div ref={ref} className="space-y-2">
      {tiers.map((t, i) => (
        <div key={t.days} className="flex items-center gap-2.5">
          <span className="text-[10px] font-semibold text-dark-200 w-14 shrink-0">{t.days}</span>
          <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${t.current ? "bg-green-300" : "bg-blue-200"}`}
              initial={{ width: 0 }} animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
          </div>
          <span className={`text-[10px] font-bold tabular-nums w-10 text-right ${t.current ? "text-green-300" : "text-blue-200"}`}>+{t.pts}</span>
        </div>
      ))}
      <p className="text-[9px] text-green-300 font-semibold text-center pt-1">✓ 30-day milestone reached today</p>
    </div>
  );
}

function AttendanceViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const days = ["M", "T", "W", "T", "F"];
  // 4 weeks
  const weeks = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold text-dark-300">April 2026 · perfect</p>
        <span className="text-[10px] font-bold text-green-300">+150 pts</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((d, i) => <p key={i} className="text-[8px] text-dark-100 text-center font-bold uppercase">{d}</p>)}
        {weeks.flat().map((v, i) => (
          <motion.div key={i} className="aspect-square rounded"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={reduce ? { duration: 0 } : { duration: 0.2, delay: i * 0.02 }}
            style={{ background: v ? "#1D61F6" : "#E0E4E9", opacity: v ? 0.4 + (Math.floor(i / 5) * 0.18) : 1 }} />
        ))}
      </div>
    </div>
  );
}

function SalesViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const reps = [
    { initials: "SM", name: "Sarah M.",     pct: 132, status: "✓" },
    { initials: "DT", name: "Daniel T.",    pct: 118, status: "✓" },
    { initials: "AJ", name: "Andrew J.",    pct: 102, status: "✓" },
    { initials: "MH", name: "Megan H.",     pct: 88,  status: "—" },
  ];
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <p className="text-[11px] font-bold text-white">🎯 Q1 quota progress</p>
        <span className="bg-white/8 text-white/65 text-[9px] rounded-full px-2 py-0.5 border border-white/10">3 of 4 hit</span>
      </div>
      <div className="space-y-1.5">
        {reps.map((r, i) => (
          <div key={r.initials} className="flex items-center gap-2 rounded-lg p-1.5 bg-white/5 border border-white/8">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white bg-blue-200">{r.initials}</div>
            <span className="text-[10px] font-semibold text-white truncate w-16 shrink-0">{r.name}</span>
            <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div className={`h-full rounded-full ${r.pct >= 100 ? "bg-green-200" : "bg-blue-100"}`}
                initial={{ width: 0 }} animate={inView ? { width: `${Math.min(r.pct, 100)}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
            </div>
            <span className="text-[9px] font-bold tabular-nums shrink-0 w-9 text-right text-white">{r.pct}%</span>
            <span className={`text-[10px] font-bold shrink-0 w-3 ${r.status === "✓" ? "text-green-200" : "text-white/30"}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComplianceViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const items = [
    { label: "Annual security training", pct: 94 },
    { label: "Code of conduct e-sign",    pct: 100 },
    { label: "Audit checklist",           pct: 88 },
  ];
  return (
    <div ref={ref} className="space-y-2.5">
      {items.map((it, i) => (
        <div key={it.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-dark-200 truncate">{it.label}</span>
            <span className={`text-[10px] font-bold ${it.pct === 100 ? "text-green-300" : "text-blue-200"}`}>{it.pct}%</span>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${it.pct === 100 ? "bg-green-300" : "bg-blue-200"}`}
              initial={{ width: 0 }} animate={inView ? { width: `${it.pct}%` } : { width: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ImpactViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  // Incidents trending DOWN
  const W = 400; const H = 64;
  const incidents = [62, 58, 51, 44, 38, 32, 28, 22, 18, 14, 10];
  const pts = incidents.map((y, i) => ({ x: (i / (incidents.length - 1)) * W, y: y }));
  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const stats = [
    { val: "38%",  lbl: "Fewer safety incidents",  bg: "#FFF8F0", color: "#D97706" },
    { val: "2.5×", lbl: "Higher attendance",        bg: "#E7EEFD", color: "#1D61F6" },
    { val: "61%",  lbl: "Goal attainment lift",     bg: "#F0FDF4", color: "#16A34A" },
  ];
  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
            <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
            <p className="text-[10px] text-dark-100 mt-1">{s.lbl}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2">Safety incidents · trending down</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="wpSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16A34A" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#wpSparkGrad)" />
          <motion.path d={linePath} fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={reduce ? undefined : { pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, ease: "easeOut" }} />
          <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#16A34A" />
        </svg>
      </div>
    </div>
  );
}

function CustomViz() {
  const customs = [
    { emoji: "🚴", name: "Cycle to Work",      pts: "+50/trip" },
    { emoji: "🤝", name: "Volunteer hours",     pts: "+10/hr" },
    { emoji: "💡", name: "Innovation submitted", pts: "+200" },
    { emoji: "🌱", name: "Sustainability act",   pts: "+75" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {customs.map((c) => (
        <div key={c.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="text-base">{c.emoji}</span>
            <p className="text-[10px] font-bold text-dark-300 flex-1 truncate">{c.name}</p>
          </div>
          <p className="text-[10px] font-bold text-blue-200 mt-1">{c.pts}</p>
        </div>
      ))}
    </div>
  );
}
