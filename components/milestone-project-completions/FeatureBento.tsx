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
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Match the reward to the contribution</h2>
          <p className="text-dark-100 text-base leading-relaxed">Whole-team distributions, tiered splits, base-plus-bonus, phased projects — every contribution shape covered.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Reward distribution (LARGE) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎯 Reward distribution</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Tiered splits that mirror real impact</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Lead, primary contributor, support — different reward tiers fire from a single trigger. No spreadsheets, no manual splits.</p>
            <DistributionViz />
          </motion.div>

          {/* 2 — Sprint closure */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🏁 Sprint closures</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Jira, GitHub, Linear sync</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">When a sprint closes or a milestone is marked done, rewards fire automatically.</p>
            <SprintViz />
          </motion.div>

          {/* 3 — Phased rewards */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📈 Phased projects</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Reward at each gate</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Phase 1, Phase 2, final delivery — separate triggers keep motivation high through long projects.</p>
            <PhasesViz />
          </motion.div>

          {/* 4 — Slack post (DARK) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">💬 Slack &amp; Teams</p>
            <h3 className="text-lg font-bold text-white mb-1">Lands in the channel that did the work</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Recognition fires in #engineering or #marketing — reactions, redeem links, the whole moment.</p>
            <SlackViz />
          </motion.div>

          {/* 5 — Client deliverables */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🤝 Client deliverables</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">CRM-triggered rewards</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Salesforce or HubSpot deal closed → delivery team rewarded automatically.</p>
            <ClientViz />
          </motion.div>

          {/* 6 — Project analytics (LARGE) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Project reward analytics</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">See which projects, teams, and contributors get rewarded most</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Track on-time delivery rate, team-level recognition coverage, and per-contributor reward velocity — all from your trigger data.</p>
            <AnalyticsViz />
          </motion.div>

          {/* 7 — Custom triggers */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">⚙️ Custom triggers</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Any system, any signal</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">REST API and webhooks for any internal tool. Process improvement, OKR completion, custom workflows — all rewardable.</p>
            <ApiViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DistributionViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const members = [
    { initials: "SM", name: "Sarah Mitchell", role: "Engineering Lead",  pts: 2500, lead: true,  color: "linear-gradient(135deg,#0a51e8,#2563eb)" },
    { initials: "DT", name: "Daniel Thompson", role: "Senior Engineer",  pts: 1500, lead: true,  color: "linear-gradient(135deg,#7c3aed,#a855f7)" },
    { initials: "AM", name: "Ashley Murphy",   role: "Frontend Engineer", pts: 1000, lead: false, color: "linear-gradient(135deg,#059669,#10b981)" },
    { initials: "MH", name: "Megan Hayes",     role: "QA Engineer",       pts: 1000, lead: false, color: "linear-gradient(135deg,#e11d48,#f43f5e)" },
    { initials: "+4", name: "4 more team",     role: "Support &amp; DevOps", pts: 3500, lead: false, color: "linear-gradient(135deg,#d97706,#f59e0b)" },
  ];
  const max = 2500;
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold text-dark-300">Catalyst v2.0 · 8-person team</p>
        <span className="text-[11px] font-bold text-blue-200">⭐ 9,500 pts total</span>
      </div>
      <div className="space-y-2">
        {members.map((m, i) => (
          <div key={m.name} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: m.color }}>{m.initials}</div>
            <div className="min-w-0 flex-1 lg:flex-none lg:w-44">
              <p className="text-[11px] font-semibold text-dark-300 truncate">{m.name}</p>
              <p className="text-[9px] text-dark-100" dangerouslySetInnerHTML={{ __html: m.role }} />
            </div>
            <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div className={`h-full rounded-full ${m.lead ? "bg-blue-200" : "bg-blue-100"}`}
                initial={{ width: 0 }} animate={inView ? { width: `${(m.pts / max) * 100}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.08 }} />
            </div>
            <span className={`text-[10px] font-bold tabular-nums shrink-0 w-16 text-right ${m.lead ? "text-blue-200" : "text-dark-300"}`}>{m.pts.toLocaleString()} pts</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-light-200 flex items-center justify-between">
        <span className="text-[10px] text-dark-100">Triggered by manager sign-off · 14:32</span>
        <span className="inline-flex items-center gap-1 bg-blue-000 text-blue-200 text-[10px] font-bold rounded-full px-2 py-0.5 border border-blue-100">
          <span className="w-1 h-1 rounded-full bg-blue-200 animate-pulse" />AUTO-FIRED
        </span>
      </div>
    </div>
  );
}

function SprintViz() {
  const sprints = [
    { name: "Sprint 27 · Catalyst", status: "Closed", pts: "+1k pts × 8" },
    { name: "Sprint 26 · Atlas",    status: "Closed", pts: "+800 pts × 5" },
    { name: "Sprint 28 · Apollo",   status: "In progress", pts: "—" },
  ];
  return (
    <div className="space-y-2">
      {sprints.map((s) => (
        <div key={s.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] font-bold text-dark-300 truncate">{s.name}</p>
            <span className={`text-[9px] font-bold rounded-full px-2 py-0.5 ${s.status === "Closed" ? "bg-green-000 text-green-300 border border-green-100" : "bg-blue-000 text-blue-200 border border-blue-100"}`}>{s.status}</span>
          </div>
          <p className="text-[9px] text-dark-100">{s.pts}</p>
        </div>
      ))}
    </div>
  );
}

function PhasesViz() {
  const phases = [
    { name: "Phase 1 · Discovery", pct: 100, pts: "+200" },
    { name: "Phase 2 · Build",      pct: 100, pts: "+400" },
    { name: "Phase 3 · Launch",     pct: 65,  pts: "—" },
  ];
  return (
    <div className="space-y-2.5">
      {phases.map((p) => (
        <div key={p.name}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-dark-200">{p.name}</span>
            <span className={`text-[10px] font-bold ${p.pct === 100 ? "text-green-300" : "text-dark-100"}`}>{p.pts}</span>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${p.pct === 100 ? "bg-green-300" : "bg-blue-200"}`} style={{ width: `${p.pct}%` }} />
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
        <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>#</div>
        <span className="text-[11px] font-bold text-white/85">#engineering</span>
        <span className="text-[10px] text-white/35 ml-auto">Just now</span>
      </div>
      <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
        <p className="text-[12px] font-bold mb-1" style={{ color: "#FBBF24" }}>🚀 Catalyst v2.0 has shipped!</p>
        <p className="text-[10px] text-white/60 leading-relaxed">All 8 contributors receive 1,000 pts. Onwards 🙌</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">⭐ Redeem</span>
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🎉 33</span>
        </div>
      </div>
    </div>
  );
}

function ClientViz() {
  return (
    <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-lg bg-blue-200 flex items-center justify-center text-white text-[12px] font-bold">SF</div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-dark-300">Salesforce</p>
          <p className="text-[9px] text-dark-100">Stage: Closed Won</p>
        </div>
        <span className="text-[10px] font-bold text-green-300">$420K</span>
      </div>
      <div className="bg-blue-000 border border-blue-100 rounded-lg px-2.5 py-2 flex items-center gap-2">
        <span className="text-base">⭐</span>
        <p className="text-[10px] text-blue-200 font-semibold flex-1">Delivery team rewarded</p>
        <span className="text-[10px] font-bold text-blue-200">+800 × 6</span>
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stats = [
    { val: "67%",  lbl: "On-time delivery rate",   bg: "#E7EEFD", color: "#1D61F6" },
    { val: "4×",   lbl: "Team morale lift",         bg: "#F0FDF4", color: "#16A34A" },
    { val: "31%",  lbl: "More discretionary effort", bg: "#FFF8F0", color: "#D97706" },
  ];
  const teams = [
    { name: "Engineering", pct: 96 },
    { name: "Marketing",   pct: 82 },
    { name: "Operations",  pct: 71 },
  ];
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
            <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
            <p className="text-[10px] text-dark-100 mt-1">{s.lbl}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Reward coverage by team</p>
        <div className="space-y-2">
          {teams.map((t, i) => (
            <div key={t.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-20 shrink-0 truncate">{t.name}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200"
                  initial={{ width: 0 }} animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.5 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-9 text-right">{t.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApiViz() {
  return (
    <div className="rounded-xl border border-light-200 bg-light-100 p-3 font-mono">
      <p className="text-[10px] text-dark-100 mb-1.5"># Webhook payload</p>
      <pre className="text-[10px] text-dark-300 leading-relaxed">
{`POST /trigger
{
  "event":   "project.shipped",
  "project": "Catalyst v2.0",
  "team":    "engineering"
}`}
      </pre>
      <p className="text-[10px] text-blue-200 mt-2 font-semibold">→ Reward fires automatically</p>
    </div>
  );
}
