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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Everything a new hire needs to feel seen from day one</h2>
          <p className="text-dark-100 text-base leading-relaxed">Configure once. Empuls handles every new joiner — whether you hire one person or a thousand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Onboarding signals that matter</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Retention, productivity, engagement — onboarding moves all three</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Strong onboarding lifts every metric that matters. The numbers speak for themselves.</p>
            <StatsViz />
          </motion.div>

          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💌 Day-one messages</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Welcomes that feel personal at scale</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Auto-personalised with name, team, and role. Reward points credited on the joining date.</p>
            <MessageViz />
          </motion.div>

          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📦 Branded welcome kits</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Swag, points, and curated gifts before week one</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Branded swag, stationery, gift collections — physical or digital. They pick what they want.</p>
            <KitViz />
          </motion.div>

          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Empuls social feed</p>
            <h3 className="text-lg font-bold text-white mb-1">Belonging starts before lunch</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Welcome posts go live company-wide. Colleagues react and comment. Connection happens immediately.</p>
            <FeedViz />
          </motion.div>

          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💬 Slack &amp; Teams</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Welcomes where they already work</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">No new app, no new login. The kit lands in Slack or Teams the moment they join.</p>
            <SlackViz />
          </motion.div>

          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🌍 Remote, hybrid, global</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Same Day-1 experience in 175+ countries — no regional setup</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Whether they&apos;re in San Francisco, Berlin, or Tokyo — the welcome arrives via Slack/Teams/email with a reward catalog localised to their currency.</p>
            <GlobalViz />
          </motion.div>

          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Manager nudges, drafted for you</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot drafts a personal welcome note from the manager — based on team, role, and recent context. Approve or edit in seconds.</p>
            <CopilotViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stats = [
    { val: "69%",  lbl: "More likely to stay",                bg: "#E7EEFD", color: "#1D61F6" },
    { val: "50%",  lbl: "More productive on Day 1",           bg: "#FFF8F0", color: "#D97706" },
    { val: "54%",  lbl: "Higher engagement",                  bg: "#F0FDF4", color: "#16A34A" },
  ];
  const rows = [
    { name: "First-week NPS",            pct: 91 },
    { name: "Time to first contribution", pct: 78 },
    { name: "30-day retention",          pct: 95 },
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
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Onboarding KPIs · Q2 2026</p>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={r.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-32 shrink-0">{r.name}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200" initial={{ width: 0 }} animate={inView ? { width: `${r.pct}%` } : { width: 0 }} transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.3 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-9 text-right">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageViz() {
  return (
    <div className="space-y-2.5">
      <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-3">
        <p className="text-[10px] font-bold text-dark-300 mb-1">From: Catherine Reed · HR Lead · Salesforce</p>
        <p className="text-[11px] font-bold text-dark-300 mb-1.5">Hey Jordan, welcome to the team! 🎉</p>
        <p className="text-[10px] text-dark-100 leading-relaxed">&ldquo;We&apos;re thrilled to have you here. Your skills are exactly what this team needs.&rdquo;</p>
        <div className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-blue-200 bg-blue-000 border border-blue-100 rounded px-2 py-0.5">✦ 500 welcome points credited</div>
      </div>
    </div>
  );
}

function KitViz() {
  const items = [
    { emoji: "👕", name: "Hoodie",     pts: "48 pts" },
    { emoji: "🧢", name: "Cap",        pts: "29 pts" },
    { emoji: "📓", name: "Notebook",   pts: "18 pts" },
    { emoji: "🎁", name: "Gift Card",  pts: "200 pts" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100 mb-1">Day-1 kit · 300 pts</p>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-2">
            <span className="text-base">{it.emoji}</span>
            <p className="text-[10px] font-semibold text-dark-300 flex-1">{it.name}</p>
            <span className="text-[9px] text-dark-100">{it.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FEED_ITEMS = [
  { initials: "JB", name: "Jordan Brooks",  occasion: "Just joined 🎉",  time: "Today",       grad: "linear-gradient(135deg,#1D61F6,#0EA5E9)" },
  { initials: "TC", name: "Tyler Cooper",   occasion: "New hire",         time: "1d ago",     grad: "linear-gradient(135deg,#22C55E,#10B981)" },
  { initials: "HR", name: "Hannah Russell", occasion: "Welcome aboard",   time: "2d ago",     grad: "linear-gradient(135deg,#F59E0B,#EF4444)" },
];

function FeedViz() {
  const items = [...FEED_ITEMS, ...FEED_ITEMS];
  return (
    <div className="h-[88px] overflow-hidden relative">
      <div className="animate-feed-scroll">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 mb-2">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: it.grad }}>{it.initials}</div>
            <p className="text-white/70 text-[10px] truncate flex-1">
              <span className="text-white font-medium">{it.name}</span>
              <span className="text-blue-100"> · {it.occasion}</span>
            </p>
            <span className="text-white/30 text-[9px] shrink-0">{it.time}</span>
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
        <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🎉 Welcome, Jordan Brooks!</p>
        <p className="text-[10px] text-white/60 leading-relaxed">Software Engineer · Just joined the team.</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">📦 Open kit</span>
          <span className="text-[9px] rounded px-2 py-0.5" style={{ background: "rgba(249,115,22,0.2)", color: "#FB923C" }}>⭐ Redeem 500 pts</span>
        </div>
      </div>
    </div>
  );
}

function GlobalViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const W = 400; const H = 64;
  const points = [42, 38, 34, 28, 22, 18, 14, 10, 8, 6, 4];
  const pts = points.map((y, i) => ({ x: (i / (points.length - 1)) * W, y }));
  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  const stats = [
    { val: "175+",  lbl: "Countries",            bg: "#E7EEFD", color: "#1D61F6" },
    { val: "10M+",  lbl: "Reward options",        bg: "#FFF8F0", color: "#D97706" },
    { val: "100%",  lbl: "Local currency",        bg: "#F0FDF4", color: "#16A34A" },
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
        <p className="text-[10px] font-semibold text-dark-100 mb-2">Time-to-productivity (days) — trending down</p>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="onbSparkGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1D61F6" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1D61F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#onbSparkGrad)" />
          <motion.path d={linePath} fill="none" stroke="#1D61F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            initial={reduce ? undefined : { pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, ease: "easeOut" }} />
          <circle cx={pts[pts.length - 1].x} cy={pts[pts.length - 1].y} r="3.5" fill="#1D61F6" />
        </svg>
      </div>
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-light-200 bg-light-100 p-3">
        <p className="text-[10px] font-bold text-dark-300 mb-0.5">Jordan joins in 2 days</p>
        <p className="text-[9px] text-dark-100 leading-relaxed">Copilot drafted a manager welcome note based on Jordan&apos;s team and role.</p>
      </div>
      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <span className="text-[9px] font-bold text-blue-200">✦ Empuls Copilot</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Warm tone</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-dark-200 leading-relaxed">
            &ldquo;Hi Jordan — so excited to have you on the engineering team. We&apos;ve been waiting for someone with your eye for clean systems.&rdquo;
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
