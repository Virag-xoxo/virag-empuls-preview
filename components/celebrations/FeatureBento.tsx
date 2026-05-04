"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const, delay: i * 0.08 },
  }),
};

export default function FeatureBento() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            Platform capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            Everything it takes to make every employee feel truly remembered
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Birthdays, anniversaries, and life milestones — auto-detected, auto-celebrated, and impossible to forget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Auto-detect milestones (large) */}
          <motion.div
            custom={0} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎯 Zero manual effort</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Never miss a birthday or work anniversary again</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Connect your HRMS and Empuls auto-schedules every milestone — birthday, work anniversary, or life event — the moment an employee joins. No spreadsheets, no calendar reminders, no one falls through the cracks.</p>
            <MilestonesViz />
          </motion.div>

          {/* 2 — Wishboard */}
          <motion.div
            custom={1} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💌 Team Wishboard</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Personal wishes from the whole team, automatically</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Empuls creates a private Wishboard and invites teammates to write a note. On the day, the employee opens a page full of heartfelt messages.</p>
            <WishboardViz />
          </motion.div>

          {/* 3 — Gift catalog */}
          <motion.div
            custom={2} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎁 Meaningful Gifting</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Let them choose their gift from 10M+ options</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">No generic gift boxes. Employees redeem from gift cards, Amazon, experiences, or prepaid cards — 175+ countries, local currencies.</p>
            <GiftGridViz />
          </motion.div>

          {/* 4 — Social feed (dark) */}
          <motion.div
            custom={3} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Live celebration feed</p>
            <h3 className="text-lg font-bold text-white mb-1">Celebrations that the whole company sees</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Every milestone posts to the Empuls feed — so the whole org can celebrate together, not just the immediate team.</p>
            <FeedViz />
          </motion.div>

          {/* 5 — Slack & Teams */}
          <motion.div
            custom={4} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💬 Slack &amp; Teams</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Celebrate in the tools teams already use</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Celebrations post directly to Slack and Microsoft Teams — no new app, no new login.</p>
            <SlackViz />
          </motion.div>

          {/* 6 — Analytics (large) */}
          <motion.div
            custom={5} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Celebration Analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Know that every employee is celebrated, always</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Real-time dashboards show celebration coverage, Wishboard participation rates, gift redemption, and satisfaction scores — full visibility, no manual tracking.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — AI Copilot */}
          <motion.div
            custom={6} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">AI-suggested wishes — personal, every time</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot drafts personal celebration messages based on tenure, role, and recent contributions — so managers can add a heartfelt note in seconds.</p>
            <CopilotViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Mini Visualizations ───────────────────────────────────────────────────── */

function MilestonesViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const rows = [
    { label: "🎂 Birthdays",     count: 142, pct: 100, color: "#F97316" },
    { label: "⭐ Work Anniv.",   count: 88,  pct: 72,  color: "#1D61F6" },
    { label: "💍 Life events",   count: 17,  pct: 14,  color: "#22C55E" },
  ];

  const upcoming = [
    { emoji: "🎂", name: "Priya",  when: "in 3d",  bg: "#FFF8F0", border: "#FED7AA", color: "#C2410C" },
    { emoji: "⭐", name: "Rahul",  when: "in 7d",  bg: "#EFF6FF", border: "#BFDBFE", color: "#1D4ED8" },
    { emoji: "💍", name: "Anika",  when: "in 14d", bg: "#F9FAFB", border: "#E5E7EB", color: "#4B5563" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      <div className="space-y-3">
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100">Milestones · this quarter</p>
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-dark-200">{r.label}</span>
              <span className="text-[11px] font-semibold text-dark-300">{r.count}</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: r.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${r.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0,0,0.2,1] as const, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 py-2 bg-blue-000 rounded-lg flex items-center justify-between">
        <span className="text-[11px] font-semibold text-blue-200">247 milestones celebrated this quarter</span>
        <span className="text-[11px] font-bold text-green-300">100% coverage ✓</span>
      </div>

      <div>
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100 mb-2">Upcoming · next 14 days</p>
        <div className="flex flex-wrap gap-1.5">
          {upcoming.map((u) => (
            <div key={u.name} className="flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ background: u.bg, borderColor: u.border }}>
              <span className="text-[12px] leading-none">{u.emoji}</span>
              <span className="text-[10px] font-semibold" style={{ color: u.color }}>{u.name}</span>
              <span className="text-[9px] text-dark-100">{u.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const WISHES = [
  { initials: "AJ", name: "Aadarsh Jha", color: "#4338CA", msg: "Happy Birthday Priya! Your designs always inspire the team. 🎉" },
  { initials: "VV", name: "Vraj Vyas",   color: "#0891B2", msg: "So grateful to work with you every day! Have a wonderful birthday 🎂" },
];

function WishboardViz() {
  return (
    <div className="space-y-2">
      {WISHES.map((w) => (
        <div key={w.name} className="bg-light-100 rounded-xl border border-light-200 px-3 py-2.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: w.color }}>
              {w.initials}
            </div>
            <p className="text-[11px] font-semibold text-dark-300 leading-tight">{w.name}</p>
          </div>
          <p className="text-[10px] text-dark-100 leading-relaxed">&ldquo;{w.msg}&rdquo;</p>
        </div>
      ))}
      <div className="border-[1.5px] border-dashed border-light-300 rounded-xl px-3 py-2 text-center cursor-pointer">
        <span className="text-[11px] font-semibold text-blue-200">+ 12 more wishes →</span>
      </div>
    </div>
  );
}

function GiftGridViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const gifts = [
    { emoji: "🎁",  name: "Gift Cards",   sub: "30K+ brands" },
    { emoji: "🛍️",  name: "Amazon",       sub: "Millions of items" },
    { emoji: "✈️",  name: "Experiences",  sub: "Travel & dining" },
    { emoji: "💳",  name: "Prepaid Card", sub: "Spend anywhere" },
  ];

  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {gifts.map((g, i) => (
          <motion.div
            key={g.name}
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            className="bg-white border border-light-200 rounded-xl p-3 text-center"
          >
            <p className="text-2xl mb-1 leading-none">{g.emoji}</p>
            <p className="text-[11px] font-semibold text-dark-300">{g.name}</p>
            <p className="text-[9px] text-dark-100">{g.sub}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-1.5 border-t border-light-200">
        <span className="text-[9px] text-dark-100">175+ countries · local currencies</span>
        <a href="#" className="text-[9px] font-semibold text-blue-200 flex items-center gap-0.5">
          Browse all
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

const FEED_ITEMS = [
  { initials: "PK", name: "Priya Kapoor",  occasion: "Birthday 🎂",       time: "Today",      grad: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { initials: "RM", name: "Rahul Mehta",   occasion: "5 Years ⭐",         time: "Yesterday",  grad: "linear-gradient(135deg,#4338ca,#6366f1)" },
  { initials: "AS", name: "Anika Singh",   occasion: "Birthday 🎂",       time: "2 days ago", grad: "linear-gradient(135deg,#059669,#10b981)" },
];

function FeedViz() {
  const items = [...FEED_ITEMS, ...FEED_ITEMS];
  return (
    <div className="h-[88px] overflow-hidden relative">
      <div className="animate-feed-scroll">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 mb-2">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: item.grad }}>
              {item.initials}
            </div>
            <p className="text-white/70 text-[10px] truncate flex-1">
              <span className="text-white font-medium">{item.name}</span>
              <span className="text-blue-100"> · {item.occasion}</span>
            </p>
            <span className="text-white/30 text-[9px] shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlackViz() {
  return (
    <div className="rounded-xl p-3" style={{ background: "#1A1D21" }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
        <span className="text-[11px] font-bold text-white/85">Empuls</span>
        <span className="text-[10px] text-white/35 ml-auto">Today 09:00</span>
      </div>
      <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
        <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🎂 Happy Birthday, Priya Kapoor!</p>
        <p className="text-[10px] text-white/60 leading-relaxed">Your creativity and energy make us all shine brighter! 🎉</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🎉 View Wishboard</span>
          <span className="text-[9px] rounded px-2 py-0.5" style={{ background: "rgba(249,115,22,0.2)", color: "#FB923C" }}>🎁 Redeem Gift</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const W = 400; const H = 64;
  const points = [52, 48, 44, 38, 30, 26, 20, 16, 12, 8, 4];
  const pts = points.map((y, i) => ({ x: (i / (points.length - 1)) * W, y }));
  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;

  const stats = [
    { val: "100%", lbl: "Milestone coverage",     bg: "#F0FDF4", color: "#16A34A" },
    { val: "247",  lbl: "Milestones celebrated",  bg: "#E7EEFD", color: "#1D61F6" },
    { val: "4.8★", lbl: "Avg. satisfaction",      bg: "#FFF8F0", color: "#D97706" },
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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3">
        <div className="bg-white border border-light-200 rounded-xl p-3">
          <p className="text-[10px] font-semibold text-dark-100 mb-2">Celebrations per month — Q2 2026</p>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="celebSparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1D61F6" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#1D61F6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#celebSparkGrad)" />
            <motion.path d={linePath} fill="none" stroke="#1D61F6" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
              initial={reduce ? undefined : { pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#1D61F6" />
          </svg>
        </div>

        <div className="bg-white border border-light-200 rounded-xl p-3">
          <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Top participating teams</p>
          <div className="space-y-2">
            {[
              { name: "Engineering", pct: 96 },
              { name: "Design",      pct: 88 },
              { name: "Sales",       pct: 74 },
            ].map((t, i) => (
              <div key={t.name} className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-dark-200 w-16 shrink-0 truncate">{t.name}</span>
                <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-blue-200"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0,0,0.2,1] as const, delay: 0.5 + i * 0.08 }}
                  />
                </div>
                <span className="text-[10px] font-bold text-dark-300 tabular-nums w-8 text-right">{t.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-light-200 bg-light-100 p-3.5">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="white" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 mb-0.5">5-year anniversary in 7 days</p>
            <p className="text-[9px] text-dark-100 leading-relaxed">
              <span className="font-semibold text-dark-200">Rahul Mehta</span> shipped 3 major launches this year — Copilot drafted a personal note.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="#1D61F6" />
          </svg>
          <span className="text-[9px] font-bold text-blue-200">Empuls Copilot</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Heartfelt tone</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-dark-200 leading-relaxed">
            &ldquo;Five incredible years, Rahul! From the first launch to last quarter&apos;s pricing redesign — your fingerprints are on everything we&apos;re proud of. 🌟&rdquo;
          </p>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
          <button className="text-[9px] font-semibold text-blue-200">Regenerate</button>
          <button className="text-[9px] font-semibold bg-blue-200 text-white px-2.5 py-1 rounded-lg">Use this</button>
        </div>
      </div>
    </div>
  );
}
