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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Every type of learning achievement, automated</h2>
          <p className="text-dark-100 text-base leading-relaxed">From quick microlearning completions to multi-month certification journeys — each with its own reward tier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Live LMS feed (LARGE) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-start justify-between mb-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200">📡 Live learning activity</p>
              <span className="text-[9px] font-bold rounded-full px-2 py-0.5 bg-green-000 text-green-300 border border-green-100">● LIVE SYNC</span>
            </div>
            <h3 className="text-lg font-bold text-dark-300 mb-1">A reward for every completion, in real time</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Certifications, courses, streaks, cohort grads, assessments — all sync from your LMS the moment they happen.</p>
            <ActivityFeedViz />
          </motion.div>

          {/* 2 — External certifications */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📜 External certs</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">AWS · PMP · CFA · CISSP</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Auto-sync from cert bodies or admin upload — pre-approved providers auto-approve.</p>
            <CertsViz />
          </motion.div>

          {/* 3 — Learning streaks */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🔥 Learning streaks</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Escalating points keep momentum</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">7-day, 14-day, 30-day streaks tracked automatically.</p>
            <StreaksViz />
          </motion.div>

          {/* 4 — Cohort graduation (DARK) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">🎓 Cohort graduation</p>
            <h3 className="text-lg font-bold text-white mb-1">Reward the whole class together</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Leadership programs, grad rotations, internal academies — shared graduation event + recognition post.</p>
            <CohortViz />
          </motion.div>

          {/* 5 — Skill assessments */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Skill assessments</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Reward when threshold met</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Configurable per assessment — knowledge checks, scored quizzes, third-party tools.</p>
            <AssessmentViz />
          </motion.div>

          {/* 6 — L&D analytics (LARGE) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📈 L&amp;D analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">See completion rates climb after rewards go live</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Track course completion, skill-gap closure, and learner activity by team — all from your trigger data.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — Strategic skill multipliers */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">⚡ Skill multipliers</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Cloud, AI, security: 2× reward</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Boost rewards for strategic skills your business needs most. Configurable per quarter.</p>
            <MultipliersViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const FEED_ITEMS = [
  { initials: "MH", name: "Megan Hayes",     event: "AWS Cert Earned",            source: "Coursera",         time: "2m",  pts: "+500", grad: "linear-gradient(135deg,#0a51e8,#2563eb)" },
  { initials: "DT", name: "Daniel Thompson", event: "Python Advanced",             source: "LinkedIn Learning", time: "14m", pts: "+200", grad: "linear-gradient(135deg,#7c3aed,#a855f7)" },
  { initials: "SM", name: "Sarah Mitchell",  event: "30-Day Streak",                source: "Internal LMS",      time: "1h",  pts: "+150", grad: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { initials: "AJ", name: "Andrew Jenkins",  event: "Leadership Cohort",            source: "Degreed",           time: "1d",  pts: "+750", grad: "linear-gradient(135deg,#059669,#10b981)" },
  { initials: "OB", name: "Olivia Bennett",  event: "Data Analysis Assessment",     source: "Cornerstone",       time: "1d",  pts: "+150", grad: "linear-gradient(135deg,#e11d48,#f43f5e)" },
];

function ActivityFeedViz() {
  return (
    <div className="space-y-1.5">
      {FEED_ITEMS.map((it) => (
        <div key={it.name} className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[9px] font-bold text-white" style={{ background: it.grad }}>{it.initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{it.name} — {it.event}</p>
            <p className="text-[9px] text-dark-100 truncate">{it.source} · {it.time} ago</p>
          </div>
          <span className="text-[10px] font-bold text-blue-200 shrink-0">{it.pts}</span>
          <span className="text-green-300 text-[10px] font-bold shrink-0">✓</span>
        </div>
      ))}
      <div className="pt-2 mt-1 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">Rewards fired today</span>
        <span className="text-[11px] font-bold text-blue-200">⭐ 1,750 pts · 5 events</span>
      </div>
    </div>
  );
}

function CertsViz() {
  const certs = [
    { emoji: "☁️", name: "AWS",    pts: "+500" },
    { emoji: "📘", name: "PMP",    pts: "+750" },
    { emoji: "🔒", name: "CISSP",  pts: "+800" },
    { emoji: "📊", name: "CFA",    pts: "+1k" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {certs.map((c) => (
        <div key={c.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2 flex items-center gap-2">
          <span className="text-base">{c.emoji}</span>
          <p className="text-[11px] font-bold text-dark-300 flex-1">{c.name}</p>
          <span className="text-[10px] font-bold text-blue-200">{c.pts}</span>
        </div>
      ))}
    </div>
  );
}

function StreaksViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  // 30 day grid
  const days = Array.from({ length: 30 }, (_, i) => i < 23 ? 1 : 0);
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold text-dark-300">Sarah's 23-day streak 🔥</p>
        <span className="text-[10px] font-bold text-blue-200">+150 pts at 30</span>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {days.map((d, i) => (
          <motion.div key={i} className="aspect-square rounded"
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={reduce ? { duration: 0 } : { duration: 0.2, delay: i * 0.015 }}
            style={{ background: d ? "#1D61F6" : "#E0E4E9", opacity: d ? 0.3 + (i / 30) * 0.7 : 1 }} />
        ))}
      </div>
    </div>
  );
}

function CohortViz() {
  const cohort = ["AJ", "MH", "DT", "SM", "OB", "RK", "+2"];
  return (
    <div className="space-y-2.5">
      <div className="bg-white/8 border border-white/10 rounded-xl px-3 py-3">
        <p className="text-[11px] font-bold text-white mb-1">🎓 Leadership Cohort 2026 · Q3</p>
        <p className="text-[10px] text-white/55 mb-2.5">8 graduates · Degreed</p>
        <div className="flex -space-x-1.5">
          {cohort.map((i, idx) => (
            <div key={idx} className="w-6 h-6 rounded-full ring-2 ring-dark-300 flex items-center justify-center text-[9px] font-bold text-white bg-blue-200">{i}</div>
          ))}
        </div>
      </div>
      <div className="bg-blue-200/10 border border-blue-100/20 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
        <span className="text-[10px] text-blue-100 font-semibold">Each grad receives</span>
        <span className="text-[10px] font-bold text-white">+750 pts</span>
      </div>
    </div>
  );
}

function AssessmentViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="space-y-2.5">
      <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-bold text-dark-300">Data Analysis Skill Check</p>
          <span className="text-[10px] font-bold text-green-300">94% ✓</span>
        </div>
        <div className="h-1.5 bg-light-200 rounded-full overflow-hidden mb-1">
          <motion.div className="h-full rounded-full bg-green-300"
            initial={{ width: 0 }} animate={inView ? { width: "94%" } : { width: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.9 }} />
        </div>
        <p className="text-[9px] text-dark-100">Threshold: 80% · Passed</p>
      </div>
      <div className="bg-blue-000 border border-blue-100 rounded-lg px-2.5 py-1.5 text-center">
        <span className="text-[10px] font-bold text-blue-200">Reward fired · +150 pts</span>
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const W = 400; const H = 64;
  // Course completion rate trending up
  const points = [22, 26, 31, 36, 42, 48, 54, 58, 62, 66, 71];
  const pts = points.map((y, i) => ({ x: (i / (points.length - 1)) * W, y: H - y }));
  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const stats = [
    { val: "2×",   lbl: "Course completion lift",  bg: "#E7EEFD", color: "#1D61F6" },
    { val: "94%",  lbl: "Pursue more L&amp;D",      bg: "#F0FDF4", color: "#16A34A" },
    { val: "47%",  lbl: "Skill-gap reduction",      bg: "#FFF8F0", color: "#D97706" },
  ];
  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
            <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
            <p className="text-[10px] text-dark-100 mt-1" dangerouslySetInnerHTML={{ __html: s.lbl }} />
          </div>
        ))}
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2">Course completion rate — Q2 vs. Q3</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="ldSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1D61F6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1D61F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#ldSparkGrad)" />
          <motion.path d={linePath} fill="none" stroke="#1D61F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={reduce ? undefined : { pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, ease: "easeOut" }} />
          <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#1D61F6" />
        </svg>
      </div>
    </div>
  );
}

function MultipliersViz() {
  const skills = [
    { name: "Cloud",         mult: "2×" },
    { name: "AI / ML",        mult: "2×" },
    { name: "Cybersecurity",  mult: "1.5×" },
  ];
  return (
    <div className="space-y-1.5">
      {skills.map((s) => (
        <div key={s.name} className="flex items-center gap-2.5 bg-light-100 border border-light-200 rounded-lg px-3 py-2">
          <p className="flex-1 text-[11px] font-semibold text-dark-300">{s.name}</p>
          <span className="text-[11px] font-bold bg-blue-000 text-blue-200 border border-blue-100 rounded-full px-2 py-0.5">{s.mult}</span>
        </div>
      ))}
    </div>
  );
}
