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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Any achievement, any team, any use case</h2>
          <p className="text-dark-100 text-base leading-relaxed">Four high-impact milestone programs out of the box, plus the gamification layer that keeps performance moving.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Project Completions (large) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">🚀 Project Completions</p>
              <a href="/platform/milestone-project-completions" className="text-[10px] font-semibold text-blue-200 hover:underline">Explore →</a>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Reward teams the moment a project ships</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Tied to project tags or manager sign-off. Whole-team distributions or tiered rewards for key contributors.</p>
            <ProjectsViz />
          </motion.div>

          {/* 2 — Referrals */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">👥 Referrals</p>
              <a href="/platform/milestone-referrals" className="text-[10px] font-semibold text-blue-200 hover:underline">Explore →</a>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Multi-stage referral funnel</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Reward at each stage — referred, interviewed, hired, probation cleared.</p>
            <ReferralsViz />
          </motion.div>

          {/* 3 — Training & Development */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">📜 Training &amp; L&amp;D</p>
              <a href="/platform/milestone-training" className="text-[10px] font-semibold text-blue-200 hover:underline">Explore →</a>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Reward learning the moment it happens</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Course completions, certification badges, learning streaks — auto-tracked from your LMS.</p>
            <TrainingViz />
          </motion.div>

          {/* 4 — Live Leaderboard (DARK) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">🏆 Live leaderboard</p>
            <h3 className="text-lg font-bold text-white mb-1">Make performance a game</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Real-time rankings as employees hit thresholds. Stepathon, code reviews, sales — any contest, any cycle.</p>
            <LeaderboardViz />
          </motion.div>

          {/* 5 — Workplace Milestones */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">📊 Workplace</p>
              <a href="/platform/milestone-workplace" className="text-[10px] font-semibold text-blue-200 hover:underline">Explore →</a>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Attendance, safety, ops targets</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Build the behaviours your org needs with structured triggers and team leaderboards.</p>
            <WorkplaceViz />
          </motion.div>

          {/* 6 — Analytics (large) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📈 Reward analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">See exactly what behaviours your rewards are reinforcing</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Track milestone fire rate, redemption velocity, top-rewarded teams, and ROI of every program — in one dashboard.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — Empuls Copilot */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Suggested triggers, drafted for you</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot reads your HRMS and suggests the highest-impact milestones to automate next — with reward sizing benchmarks.</p>
            <CopilotViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Visualizations ───────────────────────────────────────────────────────── */

function ProjectsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const projects = [
    { name: "Catalyst v2.0",    team: "Engineering",      pct: 100, status: "Shipped", reward: "1,000 pts × 8" },
    { name: "Q3 Analytics",      team: "Data & Insights",  pct: 92,  status: "Pre-launch", reward: "Pending" },
    { name: "Onboarding Flow",   team: "Product",          pct: 70,  status: "In review", reward: "—" },
  ];
  return (
    <div ref={ref} className="space-y-2.5">
      {projects.map((p, i) => (
        <div key={p.name} className="bg-light-100 border border-light-200 rounded-xl px-3.5 py-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-dark-300 truncate">{p.name}</p>
              <p className="text-[10px] text-dark-100">{p.team}</p>
            </div>
            <div className="text-right shrink-0 ml-3">
              <span className={`text-[9px] font-bold rounded-full px-2 py-0.5 ${p.pct === 100 ? "bg-green-000 text-green-300 border border-green-100" : "bg-blue-000 text-blue-200 border border-blue-100"}`}>{p.status}</span>
              <p className="text-[10px] text-dark-200 font-semibold mt-1">{p.reward}</p>
            </div>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <motion.div className={`h-full rounded-full ${p.pct === 100 ? "bg-green-300" : "bg-blue-200"}`}
              initial={{ width: 0 }} animate={inView ? { width: `${p.pct}%` } : { width: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.9, delay: i * 0.1 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReferralsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stages = [
    { name: "Referred",     pts: "50 pts",   pct: 100, color: "#1D61F6" },
    { name: "Interviewed",  pts: "100 pts",  pct: 75,  color: "#1D61F6" },
    { name: "Hired",        pts: "500 pts",  pct: 50,  color: "#1D61F6" },
    { name: "Probation ✓",  pts: "1,000 pts", pct: 25, color: "#16A34A" },
  ];
  return (
    <div ref={ref} className="space-y-2">
      {stages.map((s, i) => (
        <div key={s.name} className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold text-white" style={{ background: s.color }}>{i + 1}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-dark-300">{s.name}</span>
              <span className="text-[9px] font-bold text-blue-200">+{s.pts}</span>
            </div>
            <div className="h-1 bg-light-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: s.color }}
                initial={{ width: 0 }} animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TrainingViz() {
  const courses = [
    { name: "AWS Solutions Architect", earner: "Megan H.",  pts: "+250" },
    { name: "PMP Certification",       earner: "Daniel F.", pts: "+200" },
    { name: "Advanced React",          earner: "Ryan K.",   pts: "+150" },
  ];
  return (
    <div className="space-y-2">
      {courses.map((c) => (
        <div key={c.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2 flex items-center gap-2.5">
          <span className="text-base">📜</span>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 truncate">{c.name}</p>
            <p className="text-[9px] text-dark-100">{c.earner}</p>
          </div>
          <span className="text-[10px] font-bold text-blue-200">{c.pts}</span>
        </div>
      ))}
    </div>
  );
}

function LeaderboardViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const rows = [
    { rank: 1, initials: "SM", name: "Sarah M.",   pct: 95, pts: "+250", grad: "linear-gradient(135deg,#fbbf24,#d97706)" },
    { rank: 2, initials: "AJ", name: "Andrew J.",  pct: 80, pts: "+200", grad: "linear-gradient(135deg,#1D61F6,#0EA5E9)" },
    { rank: 3, initials: "MH", name: "Megan H.",   pct: 72, pts: "+150", grad: "linear-gradient(135deg,#7c3aed,#a855f7)" },
    { rank: 4, initials: "RK", name: "Ryan K.",    pct: 60, pts: "+100", grad: "linear-gradient(135deg,#059669,#10b981)" },
  ];
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-bold text-white">🏃 Stepathon · Week 3</p>
        <span className="bg-white/8 text-white/65 text-[9px] rounded-full px-2 py-0.5 border border-white/10">18 active</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <div key={r.rank} className={`flex items-center gap-2 rounded-lg p-1.5 ${r.rank === 1 ? "bg-orange-200/10 border border-orange-200/20" : "bg-white/5 border border-white/8"}`}>
            <span className="text-[10px] font-bold text-white/60 w-3 text-center">{r.rank}</span>
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: r.grad }}>{r.initials}</div>
            <span className="text-[10px] font-semibold text-white truncate w-16 shrink-0">{r.name}</span>
            <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
              <motion.div className={`h-full rounded-full ${r.rank === 1 ? "bg-orange-200" : "bg-blue-100"}`}
                initial={{ width: 0 }} animate={inView ? { width: `${r.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
            </div>
            <span className="text-[9px] font-bold text-blue-100 shrink-0">{r.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkplaceViz() {
  // Simple attendance heatmap-like visualisation
  const days = ["M", "T", "W", "T", "F"];
  const weeks = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] font-bold text-dark-300">30-day streak · Ops team</p>
        <span className="text-[9px] font-bold text-green-300">+100 pts</span>
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((d) => <p key={d} className="text-[8px] text-dark-100 text-center font-bold uppercase">{d}</p>)}
        {weeks.flat().map((v, i) => (
          <div key={i} className="aspect-square rounded" style={{ background: v ? "#1D61F6" : "#E0E4E9", opacity: v ? 0.3 + (Math.floor(i / 5) * 0.18) : 1 }} />
        ))}
      </div>
      <p className="text-[9px] text-dark-100 text-center pt-1">19 of 20 days · streak holding</p>
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const W = 400; const H = 64;
  const points = [10, 12, 14, 18, 22, 26, 32, 38, 44, 52, 58];
  const pts = points.map((y, i) => ({ x: (i / (points.length - 1)) * W, y: H - y }));
  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const stats = [
    { val: "247",  lbl: "Triggers fired (Q2)",      bg: "#E7EEFD", color: "#1D61F6" },
    { val: "$8K",  lbl: "Auto-rewards distributed",  bg: "#F0FDF4", color: "#16A34A" },
    { val: "0",    lbl: "Manual reviews",            bg: "#FFF8F0", color: "#D97706" },
  ];
  const teams = [
    { name: "Engineering", pct: 96 },
    { name: "Sales",       pct: 84 },
    { name: "Operations",  pct: 78 },
  ];
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3">
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
              <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
              <p className="text-[10px] text-dark-100 mt-1">{s.lbl}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border border-light-200 rounded-xl p-3">
          <p className="text-[10px] font-semibold text-dark-100 mb-2">Reward velocity — Q2 trending up</p>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="mrSparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1D61F6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#1D61F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#mrSparkGrad)" />
            <motion.path d={linePath} fill="none" stroke="#1D61F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              initial={reduce ? undefined : { pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, ease: "easeOut" }} />
            <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#1D61F6" />
          </svg>
        </div>
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Top rewarded teams</p>
        <div className="space-y-2">
          {teams.map((t, i) => (
            <div key={t.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-20 shrink-0 truncate">{t.name}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200"
                  initial={{ width: 0 }} animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.5 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-8 text-right">{t.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-light-200 bg-light-100 p-3">
        <p className="text-[10px] font-bold text-dark-300 mb-0.5">High-impact suggestion</p>
        <p className="text-[9px] text-dark-100 leading-relaxed">Engineering ships 4 projects/quarter — automating project-completion rewards could lift retention by 12%.</p>
      </div>
      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <span className="text-[9px] font-bold text-blue-200">✦ Copilot recommends</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">High impact</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[11px] font-bold text-dark-300 mb-0.5">Project shipped → 1,000 pts (team)</p>
          <p className="text-[9px] text-dark-100">Trigger: Jira label = &ldquo;Released&rdquo; · Audience: project members</p>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
          <button className="text-[9px] font-semibold text-blue-200">Skip</button>
          <button className="text-[9px] font-semibold bg-blue-200 text-white px-2.5 py-1 rounded-lg">Set up</button>
        </div>
      </div>
    </div>
  );
}
