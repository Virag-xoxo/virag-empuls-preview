"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function UnifiedDataViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const sources = [
    { name: "Salesforce",  count: "428 deals", state: "Synced" },
    { name: "HubSpot",     count: "67 deals",  state: "Synced" },
    { name: "ERP / Oracle",count: "Renewals",  state: "Synced" },
    { name: "CSV upload",  count: "Manual",    state: "Optional" },
  ];
  return (
    <div ref={ref} className="space-y-2">
      {sources.map((s, i) => (
        <motion.div key={s.name}
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={reduce ? { duration: 0 } : { duration: 0.35, delay: i * 0.06, ease }}
          className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2">
          <div className="w-1 h-7 rounded-full bg-blue-200" />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{s.name}</p>
            <p className="text-[9px] text-dark-100 truncate">{s.count}</p>
          </div>
          <span className="text-[9px] font-bold text-blue-200 bg-blue-000 px-2 py-0.5 rounded-full">{s.state}</span>
        </motion.div>
      ))}
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

function StatementMini() {
  const reduce = useReducedMotion();
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setPulse((p) => (p + 1) % 3), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const rows = [
    { name: "Acme Corp",   v: "$1,356", r: "1.5×" },
    { name: "Zenith Ltd",  v: "$840",   r: "1×" },
    { name: "DataPoint Inc",v: "$1,554",r: "1.5×" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r, i) => (
        <motion.div key={r.name}
          animate={{ scale: pulse === i ? 1.015 : 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 border ${pulse === i ? "bg-blue-000 border-blue-100" : "bg-white border-light-200"}`}>
          <p className="flex-1 text-[10px] font-bold text-dark-300 truncate">{r.name}</p>
          <span className="text-[9px] text-dark-100">{r.r}</span>
          <span className="text-[10px] font-bold text-dark-300 tabular-nums w-14 text-right">{r.v}</span>
        </motion.div>
      ))}
      <div className="border-t border-light-200 pt-1.5 flex items-center justify-between">
        <span className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100">Q2 to date</span>
        <span className="text-sm font-bold text-blue-200 tabular-nums">$5,625</span>
      </div>
    </div>
  );
}

function RoiChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-baseline gap-2">
        <p className="text-3xl lg:text-4xl font-bold text-white tabular-nums">4.2×</p>
        <p className="text-[11px] text-white/60">return on incentive spend</p>
      </div>
      <svg viewBox="0 0 220 80" className="w-full h-20">
        <defs>
          <linearGradient id="cmp-roi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(29,97,246,0.55)" />
            <stop offset="100%" stopColor="rgba(29,97,246,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 L30,52 L60,46 L90,44 L120,32 L150,28 L180,18 L220,8 L220,80 L0,80 Z"
          fill="url(#cmp-roi)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={reduce ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        />
        <motion.path
          d="M0,60 L30,52 L60,46 L90,44 L120,32 L150,28 L180,18 L220,8"
          fill="none" stroke="#1D61F6" strokeWidth="2.2" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={reduce ? { duration: 0 } : { duration: 1.4, ease }}
        />
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {[
          { val: "98%", lbl: "Disputes ↓" },
          { val: "24×", lbl: "Faster" },
          { val: "96%", lbl: "Adoption" },
        ].map((s) => (
          <div key={s.lbl} className="text-center rounded-lg bg-white/5 border border-white/10 py-2">
            <p className="text-sm font-bold text-white tabular-nums">{s.val}</p>
            <p className="text-[9px] uppercase tracking-[0.10em] text-white/55 mt-0.5">{s.lbl}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NextTierWidget() {
  return (
    <div className="rounded-xl bg-blue-000 border border-blue-100 p-3.5">
      <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200 mb-1">Next accelerator tier</p>
      <p className="text-2xl font-bold text-dark-300 tabular-nums mb-1">$22,400</p>
      <p className="text-[10px] text-dark-100 mb-2">2× kicker unlocks at 120% quota</p>
      <div className="h-1.5 bg-white rounded-full overflow-hidden">
        <div className="h-full rounded-full bg-blue-200" style={{ width: "73%" }} />
      </div>
      <p className="text-[9px] text-dark-100 mt-1.5">73% of the way there</p>
    </div>
  );
}

function AuditTrail() {
  const events = [
    { who: "Auto", what: "Acme Corp · $1,356 posted",  when: "Apr 14 · 10:42a" },
    { who: "Auto", what: "DataPoint · $1,554 posted",  when: "Apr 12 · 03:11p" },
    { who: "RevOps", what: "Plan tier edited · 1.5× → 1.6×", when: "Apr 9 · 09:00a" },
    { who: "Auto", what: "Zenith Ltd · $840 posted",   when: "Apr 7 · 12:34p" },
  ];
  return (
    <div className="space-y-1.5">
      {events.map((e, i) => (
        <div key={i} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${e.who === "Auto" ? "bg-blue-200" : "bg-green-300"}`} />
          <p className="flex-1 text-[10px] text-dark-300 truncate">{e.what}</p>
          <span className="text-[9px] text-dark-100">{e.when}</span>
        </div>
      ))}
    </div>
  );
}

function GlobalPayoutMini() {
  const flags = ["🇺🇸", "🇬🇧", "🇩🇪", "🇮🇳", "🇧🇷", "🇯🇵", "🇨🇦", "🇦🇺"];
  return (
    <div className="space-y-2">
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-dark-300 tabular-nums">175+</p>
        <p className="text-[10px] text-dark-100">countries · 21k+ rewards</p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {flags.map((f, i) => (
          <div key={i} className="bg-light-100 border border-light-200 rounded-lg aspect-square flex items-center justify-center text-base">{f}</div>
        ))}
      </div>
    </div>
  );
}

const TILES = [
  { tag: "Unified data",       title: "Pulls deals from every revenue system", body: "Salesforce, HubSpot, Oracle ERP, CSV upload — one engine, one source of truth, zero spreadsheet reconciliation.",                                  Viz: UnifiedDataViz,    span: "lg:col-span-2", dark: false },
  { tag: "100% accuracy",      title: "Tiered commission engine",              body: "Configurable breakpoints, multipliers, and accelerators. The right rate is applied to every deal automatically.",                                          Viz: CommissionLadder,  span: "",              dark: false },
  { tag: "Rep visibility",     title: "Live earnings statements",              body: "Reps see every deal, every rate applied, and every dollar earned the moment a deal closes.",                                                              Viz: StatementMini,     span: "",              dark: false },
  { tag: "ROI analytics",      title: "Compensation effectiveness",            body: "Spend-vs-revenue tracking, plan variant comparison, dispute counts, and adoption metrics. Built for the CFO conversation.",                               Viz: RoiChart,          span: "lg:col-span-2", dark: true  },
  { tag: "Next-tier preview",  title: "Show reps what&rsquo;s ahead",          body: "&ldquo;$22K to your 2× kicker.&rdquo; Reps see the gap and the gain — a self-serve motivation engine.",                                              Viz: NextTierWidget,    span: "",              dark: false },
  { tag: "Audit trail",        title: "Every calculation, fully logged",       body: "Plan version, source deal, rate applied, payout amount, timestamp. Every adjustment traced to its origin.",                                               Viz: AuditTrail,        span: "",              dark: false },
  { tag: "Global payout",      title: "Pay reps in their currency",            body: "Multi-currency conversion at current FX rates. Local rewards, local bank transfers, local prepaid cards across 175+ countries.",                          Viz: GlobalPayoutMini,  span: "",              dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Platform capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">A commission engine that finance, RevOps, and reps agree on</h2>
          <p className="text-dark-100 text-base leading-relaxed">Unified data, tiered logic, live statements, ROI analytics, full audit trail, and global payout — in one platform.</p>
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
                <h3 className={`text-base lg:text-lg font-bold leading-snug mb-2 ${t.dark ? "text-white" : "text-dark-300"}`} dangerouslySetInnerHTML={{ __html: t.title }} />
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
