"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function TeamRollup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const teams = [
    { name: "AE Team",     pct: 78, total: "$374K / $480K" },
    { name: "Mid-Market",  pct: 92, total: "$184K / $200K" },
    { name: "Enterprise",  pct: 64, total: "$320K / $500K" },
    { name: "SMB",         pct: 105,total: "$210K / $200K" },
  ];
  return (
    <div ref={ref} className="space-y-2.5">
      {teams.map((t, i) => (
        <div key={t.name}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-bold text-dark-300">{t.name}</span>
            <span className="text-[10px] font-bold tabular-nums" style={{ color: t.pct >= 100 ? "#1D61F6" : t.pct >= 75 ? "#1D61F6" : "#94a3b8" }}>{t.pct}%</span>
          </div>
          <div className="h-2 bg-light-200 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${Math.min(t.pct, 130)}%` } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.9, delay: i * 0.08, ease }}
              style={{ background: t.pct >= 100 ? "linear-gradient(90deg,#1D61F6,#34D399)" : "linear-gradient(90deg,#1D61F6,#6f8eff)" }} />
          </div>
          <p className="text-[9px] text-dark-100 mt-0.5 tabular-nums">{t.total}</p>
        </div>
      ))}
    </div>
  );
}

function ContestBuilderViz() {
  const fields = [
    { label: "Contest type",  value: "Revenue race" },
    { label: "Goal metric",   value: "Closed-won $" },
    { label: "Window",        value: "Apr 1 → Apr 30" },
    { label: "Prize tier 1",  value: "$500 · trophy" },
  ];
  return (
    <div className="space-y-1.5">
      {fields.map((f) => (
        <div key={f.label} className="flex items-center justify-between bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-[10px] uppercase tracking-[0.10em] text-dark-100 font-bold">{f.label}</span>
          <span className="text-[10px] font-bold text-dark-300">{f.value}</span>
        </div>
      ))}
      <button className="w-full text-[10px] font-bold text-white bg-blue-200 rounded-lg py-1.5 mt-1">Launch contest</button>
    </div>
  );
}

function LeaderboardDark() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const reps = [
    { initials: "SM", name: "Sarah Mitchell",  pct: 134, deals: "$184K" },
    { initials: "DT", name: "Daniel Thompson", pct: 118, deals: "$148K" },
    { initials: "AJ", name: "Andrew Jenkins",  pct: 106, deals: "$112K" },
    { initials: "MH", name: "Megan Hayes",     pct:  88, deals: "$76K"  },
  ];
  return (
    <div className="space-y-1.5">
      {reps.map((r, i) => (
        <motion.div key={r.initials}
          animate={{ scale: pulse === i ? 1.015 : 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${pulse === i ? "bg-white/15" : "bg-white/5"} border border-white/10`}>
          <span className="w-5 text-center text-[10px] font-bold text-white/55">#{i + 1}</span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>{r.initials}</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-white truncate">{r.name}</p>
            <p className="text-[9px] text-white/50">{r.deals}</p>
          </div>
          <p className="text-[11px] font-bold tabular-nums" style={{ color: r.pct >= 100 ? "#34D399" : "#FBBF24" }}>{r.pct}%</p>
        </motion.div>
      ))}
    </div>
  );
}

function BadgeAwards() {
  const badges = [
    { emoji: "🏆", label: "Q1 top closer",        rep: "Sarah Mitchell" },
    { emoji: "🥇", label: "First $100K of Q2",    rep: "Daniel Thompson" },
    { emoji: "🚀", label: "5-deal week",          rep: "Andrew Jenkins" },
  ];
  return (
    <div className="space-y-1.5">
      {badges.map((b) => (
        <div key={b.label} className="flex items-center gap-2.5 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base shrink-0">{b.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{b.label}</p>
            <p className="text-[9px] text-dark-100">{b.rep}</p>
          </div>
          <span className="text-[9px] font-bold text-blue-200 bg-blue-000 px-1.5 py-0.5 rounded-full">+200</span>
        </div>
      ))}
    </div>
  );
}

function AiNudgeCard() {
  return (
    <div className="rounded-xl bg-blue-000 border border-blue-100 p-3.5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base">🤖</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-200">AI nudge for Andrew</span>
      </div>
      <p className="text-[11px] text-dark-300 leading-relaxed mb-2">
        Close <span className="font-bold">NovaTech ($32K)</span> to move from <span className="font-bold">#3 → #1</span> and unlock the <span className="font-bold">$500 prize</span>.
      </p>
      <div className="flex items-center gap-2">
        <button className="text-[10px] font-bold text-white bg-blue-200 px-2.5 py-1 rounded-md">View deal</button>
        <span className="text-[9px] text-dark-100">Sent 2m ago · in-app + Slack</span>
      </div>
    </div>
  );
}

function PipelinePreview() {
  const deals = [
    { name: "NovaTech",   amt: "$32K", proj: "$960" },
    { name: "Brightline", amt: "$18K", proj: "$540" },
    { name: "Helix Group",amt: "$25K", proj: "$750" },
  ];
  return (
    <div className="space-y-1.5">
      {deals.map((d) => (
        <div key={d.name} className="flex items-center gap-2 bg-white border border-light-200 rounded-lg px-2.5 py-1.5">
          <p className="flex-1 text-[10px] font-bold text-dark-300 truncate">{d.name}</p>
          <span className="text-[9px] text-dark-100 tabular-nums">{d.amt}</span>
          <span className="text-[10px] font-bold text-blue-200 tabular-nums">{d.proj}</span>
        </div>
      ))}
      <div className="border-t border-light-200 pt-1.5 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100">Projected · this rep</span>
        <span className="text-sm font-bold text-blue-200 tabular-nums">$2,250</span>
      </div>
    </div>
  );
}

function ManagerForecast() {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-dark-300 tabular-nums">86%</p>
        <p className="text-[10px] text-dark-100">EOQ projection · AE pod</p>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="rounded-lg bg-light-100 border border-light-200 px-2 py-1.5 text-center">
          <p className="text-sm font-bold text-dark-300 tabular-nums">3</p>
          <p className="text-[9px] text-dark-100">At-risk</p>
        </div>
        <div className="rounded-lg bg-light-100 border border-light-200 px-2 py-1.5 text-center">
          <p className="text-sm font-bold text-dark-300 tabular-nums">12</p>
          <p className="text-[9px] text-dark-100">On track</p>
        </div>
        <div className="rounded-lg bg-light-100 border border-light-200 px-2 py-1.5 text-center">
          <p className="text-sm font-bold text-dark-300 tabular-nums">3</p>
          <p className="text-[9px] text-dark-100">Over</p>
        </div>
      </div>
    </div>
  );
}

const TILES = [
  { tag: "Live dashboards",     title: "Team rollups update with every CRM event",    body: "Per-rep, per-team, per-territory. Drill from team to rep without pulling a report.",                                                  Viz: TeamRollup,        span: "lg:col-span-2", dark: false },
  { tag: "No-code builder",     title: "Sales contests in minutes",                   body: "Revenue races, pipeline contests, activity competitions. Pick the metric, set the prize, launch.",                               Viz: ContestBuilderViz, span: "",              dark: false },
  { tag: "Live leaderboards",   title: "Broadcast everywhere",                        body: "In-app, team TVs, Slack, Teams. The board updates the moment a deal moves.",                                                       Viz: LeaderboardDark,   span: "lg:col-span-2", dark: true  },
  { tag: "Auto badges",         title: "Milestones that fire themselves",             body: "First $100K, 5-deal week, top closer of the quarter &mdash; awarded the moment the threshold is hit, with points and a Slack post.", Viz: BadgeAwards,       span: "",              dark: false },
  { tag: "AI nudges",           title: "Personalised, deal-specific prompts",         body: "&ldquo;Close NovaTech to move from #3 → #1 and unlock the $500 prize.&rdquo; Tied to each rep&apos;s actual pipeline.",            Viz: AiNudgeCard,       span: "",              dark: false },
  { tag: "Pipeline projection", title: "Open deals → projected commission",           body: "Every rep sees the commission already booked, plus what their open pipeline is worth at current tier rates.",                      Viz: PipelinePreview,   span: "",              dark: false },
  { tag: "Manager forecast",    title: "End-of-quarter projection, at-risk flags",    body: "One view of where the team will land, who needs help, and which deals matter most.",                                              Viz: ManagerForecast,   span: "",              dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Platform capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">A performance system reps actually open every day</h2>
          <p className="text-dark-100 text-base leading-relaxed">Live dashboards, no-code contests, AI nudges, badge awards, and manager forecasts &mdash; one platform replacing five spreadsheets and a Tuesday standup.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {TILES.map((t, i) => {
            const Viz = t.Viz;
            return (
              <motion.div key={t.title}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className={`${t.span} rounded-2xl p-6 ${t.dark ? "bg-dark-300 border border-white/10" : "bg-light-100 border border-light-200"} hover:shadow-menu hover:-translate-y-1 transition-all duration-200`}>
                <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-2 ${t.dark ? "text-blue-100" : "text-blue-200"}`}>{t.tag}</p>
                <h3 className={`text-base lg:text-lg font-bold leading-snug mb-2 ${t.dark ? "text-white" : "text-dark-300"}`}>{t.title}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${t.dark ? "text-dark-000" : "text-dark-100"}`} dangerouslySetInnerHTML={{ __html: t.body }} />
                <Viz />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
