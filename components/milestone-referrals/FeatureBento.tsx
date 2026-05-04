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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Reward at every stage, not just at hire</h2>
          <p className="text-dark-100 text-base leading-relaxed">Multi-stage funnel rewards, role-tier configurations, alumni programs, leaderboards — everything a modern referral program needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Funnel rewards (LARGE) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🪜 Multi-stage funnel rewards</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Aligned with hiring quality, not just seat-filling</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Largest rewards land at probation cleared. Referrers stay engaged through the whole funnel — and bad-fit referrals self-select out.</p>
            <FunnelViz />
          </motion.div>

          {/* 2 — Top referrers */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🏆 Top referrers</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Make sourcing competitive</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Live leaderboard ranks the people quietly building your pipeline.</p>
            <LeaderboardViz />
          </motion.div>

          {/* 3 — Role tiers */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎚️ Role-tier rewards</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Higher value, higher reward</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Senior roles can carry 5× the payout of entry-level — reflecting actual hiring cost.</p>
            <TiersViz />
          </motion.div>

          {/* 4 — Slack DM (DARK) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">💬 Stage-by-stage updates</p>
            <h3 className="text-lg font-bold text-white mb-1">Notify referrers as they earn</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Slack DM, email, or feed post for every stage advance — referrers stay engaged through the funnel.</p>
            <SlackViz />
          </motion.div>

          {/* 5 — Program types */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📋 Multiple programs</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Open · campaigns · alumni</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Run open programs alongside time-boxed role campaigns and alumni networks — all with separate reward configs.</p>
            <ProgramsViz />
          </motion.div>

          {/* 6 — Referral analytics (LARGE) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Program analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Cost-per-hire, retention, and conversion at a glance</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">See exactly where referred candidates fall off, who your top referrers are, and how much you&apos;re saving versus job boards.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — Alumni network */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🌐 Alumni network</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Reward without an Empuls account</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Alumni earn via email redemption links — no login. Same global catalog, 175+ countries.</p>
            <AlumniViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FunnelViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stages = [
    { name: "Referral submitted",   pts: "200 pts",   pct: 100, color: "#059669" },
    { name: "Interview scheduled",  pts: "300 pts",   pct: 60,  color: "#0a51e8" },
    { name: "Offer accepted",        pts: "1,000 pts", pct: 35,  color: "#d97706" },
    { name: "Probation cleared ✓",   pts: "1,500 pts", pct: 22,  color: "#7c3aed" },
  ];
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-dark-300">Senior Engineer · 4 stages</p>
        <span className="text-[11px] font-bold text-blue-200">⭐ 3,000 pts max</span>
      </div>
      <div className="space-y-2.5">
        {stages.map((s, i) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>{i + 1}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-dark-200">{s.name}</span>
                <span className="text-[10px] font-bold text-blue-200">+{s.pts}</span>
              </div>
              <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full" style={{ background: s.color }}
                  initial={{ width: 0 }} animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 px-3 py-2 bg-blue-000 rounded-lg flex items-center justify-between">
        <span className="text-[10px] font-semibold text-blue-200">Largest reward = highest signal of fit</span>
        <span className="text-[10px] font-bold text-green-300">Quality &gt; quantity</span>
      </div>
    </div>
  );
}

function LeaderboardViz() {
  const rows = [
    { rank: 1, initials: "WG", name: "Wade Grey",    dept: "Operations",        pts: 1000, grad: "linear-gradient(135deg,#f59e0b,#d97706)" },
    { rank: 2, initials: "WE", name: "Wesley Evers", dept: "Engineering",       pts: 945,  grad: "linear-gradient(135deg,#0a51e8,#2563eb)" },
    { rank: 3, initials: "TB", name: "Tim Bradford", dept: "Project Delivery",  pts: 890,  grad: "linear-gradient(135deg,#7c3aed,#a855f7)" },
    { rank: 4, initials: "AL", name: "Angela Lopez", dept: "Customer Success",  pts: 890,  grad: "linear-gradient(135deg,#059669,#10b981)" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.rank} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${r.rank === 1 ? "bg-orange-000 border border-orange-100" : "bg-light-100 border border-light-200"}`}>
          <span className="text-[10px] font-bold text-dark-200 w-3 text-center">{r.rank}</span>
          <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: r.grad }}>{r.initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-dark-300 truncate">{r.name}</p>
            <p className="text-[8px] text-dark-100 truncate">{r.dept}</p>
          </div>
          <span className="text-[10px] font-bold text-dark-300 tabular-nums">{r.pts}</span>
          <span className="text-base shrink-0">🪙</span>
        </div>
      ))}
    </div>
  );
}

function TiersViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const tiers = [
    { role: "Entry-level",    pts: 1000, pct: 33,  bg: "#FFE4D6" },
    { role: "Mid-level",      pts: 2000, pct: 67,  bg: "#FFD9B0" },
    { role: "Senior",         pts: 3000, pct: 100, bg: "#FBA85B" },
  ];
  return (
    <div ref={ref} className="space-y-2.5">
      {tiers.map((t, i) => (
        <div key={t.role} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[11px] font-extrabold text-dark-300" style={{ background: t.bg }}>
            {t.role[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-dark-200">{t.role}</span>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums">{t.pts.toLocaleString()} pts</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full bg-blue-200"
                initial={{ width: 0 }} animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.1 }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SlackViz() {
  return (
    <div className="rounded-xl p-3" style={{ background: "#1A1D21" }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
        <span className="text-[11px] font-bold text-white/85">Empuls · DM</span>
        <span className="text-[10px] text-white/35 ml-auto">Just now</span>
      </div>
      <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
        <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🎉 Your referral was hired!</p>
        <p className="text-[10px] text-white/60 leading-relaxed">Bailey Nunn signed today. +1,000 pts now, +1,500 once probation clears.</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">⭐ Redeem</span>
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">📊 Track</span>
        </div>
      </div>
    </div>
  );
}

function ProgramsViz() {
  const programs = [
    { emoji: "🌐", name: "Open program",      tag: "Always-on" },
    { emoji: "⚡", name: "Senior Eng campaign", tag: "Q3 only" },
    { emoji: "👥", name: "Alumni network",     tag: "External" },
  ];
  return (
    <div className="space-y-1.5">
      {programs.map((p) => (
        <div key={p.name} className="flex items-center gap-2.5 bg-light-100 border border-light-200 rounded-lg px-2.5 py-2">
          <span className="text-base">{p.emoji}</span>
          <p className="flex-1 text-[11px] font-semibold text-dark-300">{p.name}</p>
          <span className="text-[9px] font-bold text-blue-200 bg-blue-000 border border-blue-100 rounded-full px-2 py-0.5">{p.tag}</span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stats = [
    { val: "45%",  lbl: "Lower cost-per-hire",     bg: "#E7EEFD", color: "#1D61F6" },
    { val: "82%",  lbl: "2-yr retention",           bg: "#F0FDF4", color: "#16A34A" },
    { val: "3×",   lbl: "More referral activity",  bg: "#FFF8F0", color: "#D97706" },
  ];
  const conv = [
    { name: "Submitted → Interviewed", pct: 60 },
    { name: "Interviewed → Hired",     pct: 35 },
    { name: "Hired → Probation cleared", pct: 91 },
  ];
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-3">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
            <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
            <p className="text-[10px] text-dark-100 mt-1">{s.lbl}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Funnel conversion</p>
        <div className="space-y-2">
          {conv.map((c, i) => (
            <div key={c.name} className="flex items-center gap-2">
              <span className="text-[9px] font-medium text-dark-200 w-32 shrink-0 truncate">{c.name}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200"
                  initial={{ width: 0 }} animate={inView ? { width: `${c.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.5 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-9 text-right">{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AlumniViz() {
  return (
    <div className="space-y-2">
      <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-2">
        <p className="text-[10px] font-semibold text-dark-100 mb-1">📧 Email redemption flow</p>
        <p className="text-[11px] font-bold text-dark-300">Catherine left in 2024 →</p>
        <p className="text-[10px] text-dark-100 mt-1">Referred Andrew → got hired → reward sent via email</p>
      </div>
      <div className="bg-blue-000 border border-blue-100 rounded-lg px-2.5 py-2 flex items-center gap-2">
        <span className="text-base">⭐</span>
        <p className="text-[10px] text-blue-200 font-semibold flex-1">No Empuls account needed</p>
        <span className="text-[10px] font-bold text-blue-200">175+ countries</span>
      </div>
    </div>
  );
}
