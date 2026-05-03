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
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            Platform capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            Everything you need to build a recognition culture
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Spot awards are just the start. Empuls gives you the full toolkit to make recognition a daily habit.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Values-based (spans 2 cols on lg) */}
          <motion.div
            custom={0} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Values-based recognition</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Tie every award to what your company stands for</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Map recognition to your company values so cultural reinforcement is automatic with every award given.</p>
            <ValuesViz />
          </motion.div>

          {/* 2 — Peer-to-peer */}
          <motion.div
            custom={1} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Peer-to-peer</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Anyone can recognize anyone</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Remove top-down gatekeeping. Enable recognition to flow in every direction across your org.</p>
            <PeerViz />
          </motion.div>

          {/* 3 — Monetary awards */}
          <motion.div
            custom={2} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Monetary awards</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Coins that convert to real rewards</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Coins are redeemable in the 1M+ rewards marketplace.</p>
            <CoinsViz />
          </motion.div>

          {/* 4 — Social feed (dark card) */}
          <motion.div
            custom={3} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Social feed</p>
            <h3 className="text-lg font-bold text-white mb-1">Recognition that the whole company sees</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Awards publish to a live social wall — with reactions, comments, and celebrations from teammates.</p>
            <FeedViz />
          </motion.div>

          {/* 5 — Manager awards */}
          <motion.div
            custom={4} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Manager awards</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Empower managers with budgets and controls</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Managers get dedicated budgets, can bulk-recognize team wins, and track their recognition activity.</p>
            <ManagerViz />
          </motion.div>

          {/* 6 — Analytics (spans 2 cols on lg) */}
          <motion.div
            custom={5} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Reports & analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Measure the culture you&apos;re building</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Track recognition frequency, budget utilization, value alignment, and team adoption — all in one dashboard.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — AI Copilot (single col) */}
          <motion.div
            custom={6} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls AI ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Your AI recognition coach</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">AI spots who deserves recognition, nudges you at the right moment, and helps you write the perfect note — so no great work goes unnoticed.</p>
            <AiViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Mini Visualizations ───────────────────────────────────────────────────── */

// Single accent: blue-200 (#1D61F6). All charts use opacity steps of this one color.
const BAR_OPACITIES = ["opacity-100", "opacity-70", "opacity-45", "opacity-25"];

function ValuesViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const vals = [
    { label: "Innovation",    count: 142, pct: 100 },
    { label: "Teamwork",      count: 98,  pct: 69  },
    { label: "Ownership",     count: 76,  pct: 54  },
    { label: "Customer First",count: 61,  pct: 43  },
  ];

  return (
    <div ref={ref} className="flex flex-col lg:flex-row gap-5 items-start">
      {/* Featured award card */}
      <div className="w-full lg:w-[240px] shrink-0 bg-light-100 rounded-xl border border-light-200 p-4">
        <div className="flex items-center gap-2.5 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Chen" className="w-8 h-8 rounded-full object-cover shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-dark-300 leading-tight">Alex Chen</p>
            <p className="text-[9px] text-dark-100">→ Sarah Mitchell · just now</p>
          </div>
          <span className="text-[9px] font-semibold text-dark-200 bg-white border border-light-300 rounded-full px-2 py-0.5 shrink-0">+200 pts</span>
        </div>
        <p className="text-[10px] text-dark-200 leading-relaxed italic mb-3">
          &ldquo;Your API redesign saved the team three weeks. Brilliant thinking.&rdquo;
        </p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-blue-200 bg-white border border-light-300 px-2.5 py-1 rounded-full">
            ✦ Innovation
          </span>
          <div className="flex items-center gap-2 text-[9px] text-dark-100">
            <span>👏 14</span>
            <span>💬 3</span>
          </div>
        </div>
      </div>

      {/* Value distribution bars */}
      <div className="flex-1 min-w-0 space-y-3 pt-1">
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100 mb-2">Awards per value · this quarter</p>
        {vals.map((v, i) => (
          <div key={v.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-dark-200">{v.label}</span>
              <span className="text-[10px] font-semibold text-dark-300">{v.count}</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-blue-200 ${BAR_OPACITIES[i]}`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${v.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0,0,0.2,1] as const, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PEER_FLOWS = [
  { fromPhoto: "https://randomuser.me/api/portraits/men/36.jpg",   fromName: "Kenji R.",  toName: "Sarah M.",  pts: 50,  value: "Teamwork",  label: "Peer → Peer"    },
  { fromPhoto: "https://randomuser.me/api/portraits/women/39.jpg", fromName: "Mia J.",    toName: "Dev Team",  pts: 200, value: "Innovation", label: "Manager → Team" },
  { fromPhoto: "https://randomuser.me/api/portraits/men/22.jpg",   fromName: "Tyler S.",  toName: "David R.",  pts: 75,  value: "Ownership",  label: "IC → Manager"   },
];

function PeerViz() {
  return (
    <div className="space-y-2">
      {PEER_FLOWS.map((f) => (
        <div key={f.label} className="flex items-center gap-3 bg-light-100 rounded-xl px-3 py-2.5 border border-light-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={f.fromPhoto} alt={f.fromName} className="w-7 h-7 rounded-full object-cover shrink-0" />

          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="shrink-0 text-light-300">
            <path d="M1 4H13M10 1L13 4L10 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-dark-300 leading-tight truncate">{f.toName}</p>
            <span className="inline-block text-[8px] font-medium text-dark-100 mt-0.5">{f.value}</span>
          </div>

          <div className="text-right shrink-0">
            <p className="text-[10px] font-semibold text-dark-300">+{f.pts} pts</p>
            <p className="text-[8px] text-dark-100">{f.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CoinsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const rewards = [
    { label: "Shop on Amazon",   sub: "Gift cards",    img: "/rewards/amazon.webp",     coins: 50,  imgBg: "#131921" },
    { label: "Apple Watch",      sub: "Electronics",   img: "/rewards/apple-watch.jpg",  coins: 800, imgBg: "#f5f5f7" },
    { label: "Book a flight",    sub: "Travel",        img: "/rewards/flight.jpg",       coins: 300, imgBg: "#1a2a4a" },
    { label: "Uber rides",       sub: "Transport",     img: "/rewards/uber.jpg",         coins: 40,  imgBg: "#000000" },
  ];

  return (
    <div ref={ref} className="space-y-3">

      {/* Wallet balance card */}
      <div className="bg-light-100 border border-light-200 rounded-xl p-3 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen"
          className="w-9 h-9 rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-dark-300">Sarah Chen</span>
            <span className="text-[11px] font-bold text-dark-300">450 coins</span>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-blue-200"
              initial={{ width: 0 }}
              animate={inView ? { width: "90%" } : { width: 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0, 0, 0.2, 1] as const }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-dark-100">Earned this quarter</span>
            <span className="text-[9px] font-semibold text-blue-200">≈ $45 value</span>
          </div>
        </div>
      </div>

      {/* Reward product cards — single horizontal row */}
      <div className="grid grid-cols-4 gap-1.5">
        {rewards.map((r, i) => (
          <motion.div key={r.label}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            style={{ height: "80px" }}
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={r.img} alt={r.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ background: r.imgBg }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
            <span className="absolute top-1.5 right-1.5 bg-black/55 backdrop-blur-sm text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              {r.coins}c
            </span>
            <div className="absolute bottom-0 left-0 right-0 px-1.5 pb-1.5">
              <p className="text-white text-[8px] font-bold leading-tight">{r.label}</p>
              <p className="text-white/55 text-[7px]">{r.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1.5 border-t border-light-200">
        <span className="text-[9px] text-dark-100">1M+ options in the catalog</span>
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
  { photo: "https://randomuser.me/api/portraits/men/21.jpg",   from: "Kenji",  to: "Emma",    award: "Teamwork",      time: "1m"  },
  { photo: "https://randomuser.me/api/portraits/women/23.jpg", from: "Sarah",  to: "Dev team",award: "Ownership",     time: "4m"  },
  { photo: "https://randomuser.me/api/portraits/men/41.jpg",   from: "Marcus", to: "Mia",     award: "Customer First",time: "8m"  },
  { photo: "https://randomuser.me/api/portraits/women/55.jpg", from: "Priya",  to: "Tyler",   award: "Innovation",    time: "12m" },
  { photo: "https://randomuser.me/api/portraits/men/13.jpg",   from: "Tom",    to: "Sara",    award: "Teamwork",      time: "15m" },
];

function FeedViz() {
  // Duplicate for seamless loop
  const items = [...FEED_ITEMS, ...FEED_ITEMS];
  return (
    <div className="h-[88px] overflow-hidden relative">
      <div className="animate-feed-scroll">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.photo} alt={item.from} className="w-5 h-5 rounded-full object-cover shrink-0" />
            <p className="text-white/70 text-[10px] truncate flex-1">
              <span className="text-white font-medium">{item.from}</span> recognized <span className="text-white font-medium">{item.to}</span>
              <span className="text-blue-100"> · {item.award}</span>
            </p>
            <span className="text-white/30 text-[9px] shrink-0">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManagerViz() {
  return (
    <div className="bg-light-100 rounded-xl border border-light-200 p-3.5 space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-dark-200">Monthly budget</span>
        <span className="text-[10px] font-semibold text-dark-300">$500 remaining</span>
      </div>
      <div className="h-1.5 rounded-full bg-light-200">
        <div className="h-full rounded-full bg-blue-200 w-[60%]" />
      </div>
      <div className="flex items-center justify-between text-[10px] text-dark-100">
        <span>6 recognitions this month</span>
        <span className="text-blue-200 font-semibold cursor-pointer">Bulk send →</span>
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  // Trend line
  const trend = [14, 19, 16, 27, 23, 31, 35, 42];
  const tMax = Math.max(...trend);
  const W = 320; const H = 80;
  const trendPts = trend.map((v, i) => ({
    x: (i / (trend.length - 1)) * W,
    y: H - (v / tMax) * (H - 8) - 4,
  }));
  const linePath = trendPts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;

  // Top values bars
  const values = [
    { label: "Innovation",     pct: 38, opacity: "opacity-100" },
    { label: "Teamwork",       pct: 25, opacity: "opacity-70"  },
    { label: "Ownership",      pct: 22, opacity: "opacity-45"  },
    { label: "Customer First", pct: 15, opacity: "opacity-25"  },
  ];

  // ── Skill radar ─────────────────────────────────────────────────────────────
  const RCX = 65, RCY = 58, RR = 36;
  const SKILL_NAMES = ["Leadership", "Innovation", "Collab.", "Execution", "Growth"];
  const N = SKILL_NAMES.length;
  const angles = Array.from({ length: N }, (_, i) => -Math.PI / 2 + (i * 2 * Math.PI) / N);
  const COS_A = angles.map((a) => Math.cos(a));
  const SIN_A = angles.map((a) => Math.sin(a));

  const radarPts = (scores: number[]) =>
    scores.map((s, i) => `${(RCX + RR * s * COS_A[i]).toFixed(1)},${(RCY + RR * s * SIN_A[i]).toFixed(1)}`).join(" ");

  const currScores = [0.72, 0.85, 0.78, 0.82, 0.68];
  const prevScores = [0.55, 0.65, 0.52, 0.62, 0.45];
  const LR = RR + 13;

  const growing = [
    { skill: "Collaboration", pct: "+26%", bar: 78 },
    { skill: "Leadership",    pct: "+17%", bar: 72 },
    { skill: "Growth mindset",pct: "+23%", bar: 68 },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-4">

      {/* Row 1: trend + value bars */}
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-5 mb-4">
            {[
              { value: "847",  sub: "this quarter" },
              { value: "78%",  sub: "employees active" },
              { value: "12.4", sub: "per manager" },
            ].map((k) => (
              <div key={k.sub}>
                <p className="text-xl font-bold text-dark-300 leading-none">{k.value}</p>
                <p className="text-[10px] text-dark-100 mt-0.5">{k.sub}</p>
              </div>
            ))}
          </div>
          <div className="relative">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 80 }} preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1D61F6" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#1D61F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#areaGrad)" />
              <motion.path d={linePath} fill="none" stroke="#1D61F6" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <circle cx={trendPts[trendPts.length - 1].x} cy={trendPts[trendPts.length - 1].y} r="3.5" fill="#1D61F6" />
            </svg>
            <div className="flex justify-between mt-1">
              {["Jan W1","","Jan W3","","Feb W1","","Feb W3","Now"].map((l, i) => (
                <span key={i} className="text-[8px] text-dark-100">{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-44 shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-wider text-dark-100 mb-3">Top values</p>
          <div className="space-y-2.5">
            {values.map((v, i) => (
              <div key={v.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] text-dark-200 font-medium">{v.label}</span>
                  <span className="text-[10px] font-bold text-dark-300">{v.pct}%</span>
                </div>
                <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
                  <motion.div className={`h-full rounded-full bg-blue-200 ${v.opacity}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${v.pct}%` } : { width: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease: [0,0,0.2,1] as const, delay: i * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: skill radar + growth list */}
      <div className="pt-3.5 border-t border-light-200 flex items-start gap-6">

        {/* Radar chart */}
        <div className="shrink-0">
          <div className="flex items-center gap-4 mb-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-dark-100">Skill mapping</p>
            <div className="flex items-center gap-3 ml-auto">
              <span className="flex items-center gap-1 text-[8px] text-dark-100">
                <svg width="14" height="3"><line x1="0" y1="1.5" x2="14" y2="1.5" stroke="#1D61F6" strokeWidth="1.5" /></svg>
                This Q
              </span>
              <span className="flex items-center gap-1 text-[8px] text-dark-100">
                <svg width="14" height="3"><line x1="0" y1="1.5" x2="14" y2="1.5" stroke="#1D61F6" strokeWidth="1.5" strokeDasharray="2,2" strokeOpacity="0.4" /></svg>
                Last Q
              </span>
            </div>
          </div>
          <svg viewBox="0 0 130 116" width="130" height="116">
            {/* Concentric grid polygons at 25/50/75/100% */}
            {[0.25, 0.5, 0.75, 1.0].map((f) => (
              <polygon key={f} points={radarPts([f, f, f, f, f])}
                fill="none" stroke="#E8EDF3" strokeWidth={f === 1.0 ? 0.75 : 0.5} />
            ))}
            {/* Axis lines */}
            {angles.map((_, i) => (
              <line key={i} x1={RCX} y1={RCY}
                x2={(RCX + RR * COS_A[i]).toFixed(1)} y2={(RCY + RR * SIN_A[i]).toFixed(1)}
                stroke="#E8EDF3" strokeWidth="0.5" />
            ))}
            {/* Previous quarter — dashed */}
            <polygon points={radarPts(prevScores)}
              fill="rgba(29,97,246,0.04)" stroke="#1D61F6"
              strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2,2" />
            {/* Current quarter — solid, animated in */}
            <motion.polygon
              points={radarPts(currScores)}
              fill="rgba(29,97,246,0.13)"
              stroke="#1D61F6" strokeWidth="1.5"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            />
            {/* Vertex dots on current */}
            {currScores.map((s, i) => (
              <motion.circle key={i}
                cx={(RCX + RR * s * COS_A[i]).toFixed(1)}
                cy={(RCY + RR * s * SIN_A[i]).toFixed(1)}
                r="2" fill="#1D61F6"
                initial={reduce ? undefined : { opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
              />
            ))}
            {/* Axis labels */}
            {SKILL_NAMES.map((name, i) => (
              <text key={name}
                x={(RCX + LR * COS_A[i]).toFixed(1)}
                y={(RCY + LR * SIN_A[i]).toFixed(1)}
                textAnchor="middle" dominantBaseline="middle"
                fontSize="6.5" fill="#64748B" fontWeight="500" fontFamily="Inter, sans-serif">
                {name}
              </text>
            ))}
          </svg>
        </div>

        {/* Growing skills */}
        <div className="flex-1 min-w-0 pt-7">
          <p className="text-[10px] font-bold uppercase tracking-wider text-dark-100 mb-3">Skills growing from recognition</p>
          <div className="space-y-2.5">
            {growing.map((s, i) => (
              <div key={s.skill} className="flex items-center gap-2">
                <span className="text-[10px] text-dark-200 w-24 shrink-0">{s.skill}</span>
                <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full bg-blue-200"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.bar}%` } : { width: 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.6, ease: [0,0,0.2,1] as const, delay: 0.8 + i * 0.1 }}
                  />
                </div>
                <span className="text-[9px] font-bold shrink-0 text-dark-300">{s.pct}</span>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-dark-100 leading-relaxed mt-3">
            Derived from competency tags on recognition messages this quarter.
          </p>
        </div>
      </div>

    </div>
  );
}

function AiViz() {
  return (
    <div className="space-y-2.5">

      {/* Step 1: AI insight — who needs recognition */}
      <div className="rounded-xl border border-light-200 bg-light-100 p-3.5">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="white" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 mb-0.5">Recognition overdue</p>
            <p className="text-[9px] text-dark-100 leading-relaxed">
              <span className="font-semibold text-dark-200">Sarah Chen</span> hasn&apos;t been recognized in <span className="font-semibold text-blue-200">6 weeks</span> — she recently shipped the API redesign.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Chen" className="w-7 h-7 rounded-full object-cover shrink-0" />
        </div>
      </div>

      {/* Connector */}
      <div className="flex items-center gap-2 px-1">
        <div className="w-4 h-4 rounded-full bg-light-200 flex items-center justify-center shrink-0 ml-1.5">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
            <path d="M3.5 1V6M1 3.5L3.5 6L6 3.5" stroke="#BFC9DA" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-[9px] text-dark-100">AI drafts a message for you</p>
      </div>

      {/* Step 2: AI-drafted message */}
      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="#1D61F6" />
          </svg>
          <span className="text-[9px] font-bold text-blue-200">AI recognition coach</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Enthusiastic tone</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-dark-200 leading-relaxed">
            &ldquo;Sarah, your API redesign was a masterclass in ownership — you saved the whole team three weeks. That&apos;s exactly the kind of initiative we celebrate. 🏆&rdquo;
          </p>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
          <button className="text-[9px] font-semibold text-blue-200 flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M1 4.5C1 4.5 2 2 4.5 2S8 4.5 8 4.5" stroke="#1D61F6" strokeWidth="1.1" strokeLinecap="round"/>
              <path d="M6.5 2.5L8 2L7.5 3.5" stroke="#1D61F6" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Regenerate
          </button>
          <button className="text-[9px] font-semibold bg-blue-200 text-white px-2.5 py-1 rounded-lg">
            Use this
          </button>
        </div>
      </div>
    </div>
  );
}
