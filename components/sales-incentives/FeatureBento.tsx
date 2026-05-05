"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function ProgramsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const programs = [
    { name: "AE quarterly accelerator",   tier: "Tiered · 1.5×", state: "Active",  count: "12 reps" },
    { name: "SDR booked-meetings sprint", tier: "Per-MQL · $50", state: "Active",  count: "8 reps" },
    { name: "Channel partner Q1 push",    tier: "Flat · 8%",     state: "Active",  count: "5 partners" },
    { name: "Net-new logo bounty",        tier: "Bonus · $1K",   state: "Live",    count: "All AEs" },
    { name: "Renewal save program",       tier: "Tiered · 0.5×", state: "Draft",   count: "CSM team" },
  ];
  return (
    <div ref={ref} className="space-y-2">
      {programs.map((p, i) => (
        <motion.div key={p.name}
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={reduce ? { duration: 0 } : { duration: 0.35, delay: i * 0.06, ease }}
          className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <div className="w-1 h-7 rounded-full" style={{ background: p.state === "Draft" ? "#E0E4E9" : "#1D61F6" }} />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{p.name}</p>
            <p className="text-[9px] text-dark-100 truncate">{p.tier} · {p.count}</p>
          </div>
          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${p.state === "Draft" ? "bg-light-200 text-dark-100" : "bg-blue-000 text-blue-200"}`}>{p.state}</span>
        </motion.div>
      ))}
    </div>
  );
}

function QuotaBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const reps = [
    { name: "Sarah M.",   pct: 132 },
    { name: "Daniel T.",  pct: 118 },
    { name: "Andrew J.",  pct: 106 },
    { name: "Megan H.",   pct:  88 },
  ];
  return (
    <div ref={ref} className="space-y-3">
      {reps.map((r, i) => (
        <div key={r.name}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-dark-300">{r.name}</span>
            <span className="text-[10px] font-bold tabular-nums" style={{ color: r.pct >= 100 ? "#1D61F6" : "#94a3b8" }}>{r.pct}%</span>
          </div>
          <div className="h-2 bg-light-200 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: `${Math.min(r.pct, 140)}%` } : {}}
              transition={reduce ? { duration: 0 } : { duration: 1, delay: i * 0.1, ease }}
              style={{ background: r.pct >= 100 ? "linear-gradient(90deg,#1D61F6,#34D399)" : "#94a3b8" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ContestViz() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const contests = [
    { name: "Q1 Sprint",      prize: "$500", lead: "Sarah M.", note: "+$32K to lead" },
    { name: "New logo bounty",prize: "$250", lead: "Daniel T.",note: "2 logos this week" },
    { name: "Pipeline race",  prize: "$100", lead: "Megan H.", note: "$180K created" },
  ];
  return (
    <div className="space-y-1.5">
      {contests.map((c, i) => (
        <motion.div key={c.name}
          animate={{ scale: pulse === i ? 1.015 : 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`rounded-lg px-2.5 py-2 border ${pulse === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-[10px] font-bold text-dark-300">{c.name}</span>
            <span className="text-[10px] font-bold text-blue-200 tabular-nums">{c.prize}</span>
          </div>
          <p className="text-[9px] text-dark-100">{c.lead} · {c.note}</p>
        </motion.div>
      ))}
    </div>
  );
}

function PayoutGlobe() {
  const flags = ["🇺🇸", "🇬🇧", "🇩🇪", "🇮🇳", "🇧🇷", "🇯🇵", "🇨🇦", "🇦🇺"];
  return (
    <div className="space-y-3">
      <div className="flex items-baseline gap-2">
        <p className="text-3xl lg:text-4xl font-bold text-white tabular-nums">175+</p>
        <p className="text-[11px] text-white/60">countries · 21k+ rewards</p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {flags.map((f, i) => (
          <div key={i} className="bg-white/10 border border-white/15 rounded-lg aspect-square flex items-center justify-center text-lg">{f}</div>
        ))}
      </div>
      <div className="rounded-xl bg-white/8 border border-white/15 px-3 py-2">
        <p className="text-[10px] font-bold text-white">Sarah Mitchell · United States</p>
        <p className="text-[9px] text-white/60 mt-0.5">$1,356 commission · Amazon, Visa, or bank</p>
      </div>
    </div>
  );
}

function CommissionLadder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const tiers = [
    { rate: "0.5×", label: "0–50%",   pct: 30 },
    { rate: "1×",   label: "50–100%", pct: 60 },
    { rate: "1.5×", label: "100–120%",pct: 90 },
    { rate: "2×",   label: "120%+",   pct: 100 },
  ];
  return (
    <div ref={ref} className="space-y-2">
      {tiers.map((t, i) => (
        <div key={t.rate} className="flex items-center gap-2">
          <span className="w-10 text-[11px] font-bold tabular-nums text-blue-200">{t.rate}</span>
          <div className="flex-1 h-3 bg-light-200 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-blue-100 to-blue-200"
              initial={{ width: 0 }}
              animate={inView ? { width: `${t.pct}%` } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.8, delay: i * 0.1, ease }} />
          </div>
          <span className="w-16 text-[10px] text-dark-100 text-right">{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function EffectivenessStats() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        { val: "3×",  lbl: "Quota",    bg: "#EAF1FF" },
        { val: "22%", lbl: "Revenue",  bg: "#E5FBED" },
        { val: "89%", lbl: "Adoption", bg: "#FFF4DB" },
      ].map((s) => (
        <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
          <p className="text-xl font-bold text-dark-300 tabular-nums">{s.val}</p>
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mt-0.5">{s.lbl}</p>
        </div>
      ))}
    </div>
  );
}

function MultiProgramAdmin() {
  const items = [
    { name: "Account Executives", running: "2 active", payout: "$214K Q1" },
    { name: "SDR team",           running: "1 active", payout: "$48K Q1" },
    { name: "Channel partners",   running: "1 active", payout: "$92K Q1" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it) => (
        <div key={it.name} className="bg-light-100 border border-light-200 rounded-lg px-3 py-2 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-200" />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{it.name}</p>
            <p className="text-[9px] text-dark-100 truncate">{it.running} · paid {it.payout}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const TILES = [
  { tag: "No spreadsheets",       title: "Active incentive programs",       body: "5 plans, 25 reps, every dollar tracked. Switch a plan from draft to live without touching a spreadsheet.",                                                Viz: ProgramsViz,         span: "lg:col-span-2", dark: false },
  { tag: "Real-time visibility",  title: "Live quota dashboards",           body: "Every rep, every team, every region — updating the moment a deal closes in CRM.",                                                                  Viz: QuotaBars,           span: "",              dark: false },
  { tag: "Contests & leaderboards", title: "Sales gamification",            body: "Run sprint contests, new-logo bounties, pipeline races. Prizes auto-awarded the moment the threshold is hit.",                                              Viz: ContestViz,          span: "",              dark: false },
  { tag: "175+ countries",        title: "Instant payouts, global reach",   body: "Reps choose how they redeem — Amazon vouchers, Visa cards, bank transfers, or experiences. Paid the day the deal closes, not the month.",            Viz: PayoutGlobe,         span: "lg:col-span-2", dark: true  },
  { tag: "Tiered & accelerated",  title: "Plan ladder",                     body: "Configurable breakpoints: base, target, accelerator, kicker. Apply per-role, per-region, per-product.",                                                     Viz: CommissionLadder,    span: "",              dark: false },
  { tag: "Effectiveness analytics", title: "Plan ROI in one view",          body: "Spend vs. revenue lift. Adoption rate. Effectiveness scoring across every plan you run.",                                                                   Viz: EffectivenessStats,  span: "",              dark: false },
  { tag: "Multi-program",         title: "Run AE, SDR, and channel side-by-side", body: "Different rules, one console. Approvals, audits, payout history all in one place.",                                                                  Viz: MultiProgramAdmin,   span: "",              dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Platform capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Everything sales leaders need, none of the spreadsheet pain</h2>
          <p className="text-dark-100 text-base leading-relaxed">Plan design, contest builder, real-time dashboards, instant payouts, and effectiveness analytics — built into one platform.</p>
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
