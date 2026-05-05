"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function CheckupViz() {
  const tests = [
    { l: "Lipid profile",      on: true },
    { l: "Diabetes panel",     on: true },
    { l: "Vitamin D & B12",    on: true },
    { l: "Liver function",     on: true },
    { l: "Thyroid panel",      on: false },
  ];
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Healthians · Annual</p>
        <span className="text-[9px] font-bold text-green-700 bg-green-100 border border-green-200/50 px-2 py-0.5 rounded-full">AT-HOME</span>
      </div>
      <div className="space-y-1">
        {tests.map((t) => (
          <div key={t.l} className="flex items-center gap-2 text-[10px]">
            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${t.on ? "bg-blue-200 text-white" : "bg-light-200 text-dark-100"}`}>
              {t.on ? "✓" : ""}
            </div>
            <span className={`flex-1 ${t.on ? "text-dark-300 font-bold" : "text-dark-100"}`}>{t.l}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-light-200 text-[9px] text-dark-100">Doorstep collection · digital report in 48h</div>
    </div>
  );
}

function PractoViz() {
  const specs = [
    { e: "🩺", l: "GP" },
    { e: "❤️", l: "Cardio" },
    { e: "🦴", l: "Ortho" },
    { e: "👁️", l: "Eye" },
    { e: "🦷", l: "Dental" },
    { e: "👶", l: "Pediatric" },
  ];
  return (
    <div>
      <div className="rounded-xl bg-light-100 border border-light-200 p-3 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Teleconsult · today</p>
          <span className="text-[9px] font-bold text-blue-200 bg-blue-000 px-2 py-0.5 rounded-full">25+ specialties</span>
        </div>
        <p className="text-[12px] font-bold text-dark-300">Dr. Anjali Rao · General physician</p>
        <p className="text-[10px] text-dark-100 mt-0.5">Next slot: 4:30 PM · 15-min video call</p>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {specs.map((s) => (
          <div key={s.l} className="flex items-center gap-1 rounded-md bg-white border border-light-200 px-1.5 py-1">
            <span className="text-[11px]">{s.e}</span>
            <p className="text-[9px] font-bold text-dark-300">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InsuranceViz() {
  const tiers = [
    { l: "Basic",    sum: "₹5L",  active: false },
    { l: "Family",   sum: "₹10L", active: true  },
    { l: "Extended", sum: "₹15L", active: false },
  ];
  const includes = ["Hospitalization", "OPD top-up", "Mental wellness"];
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {tiers.map((t) => (
          <div key={t.l} className={`rounded-lg p-2 text-center border ${t.active ? "bg-white/15 border-white/40" : "bg-white/5 border-white/10"}`}>
            <p className={`text-[9px] font-bold uppercase tracking-[0.10em] ${t.active ? "text-white" : "text-white/55"}`}>{t.l}</p>
            <p className={`text-base font-bold tabular-nums ${t.active ? "text-white" : "text-white/65"}`}>{t.sum}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {includes.map((i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-2 py-1">
            <span className="text-[9px] text-green-300 font-bold">✓</span>
            <span className="text-[10px] text-white font-bold flex-1">{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AbsenteeismViz() {
  const months = [
    { m: "Jan", v: 4.8 },
    { m: "Feb", v: 4.4 },
    { m: "Mar", v: 3.9 },
    { m: "Apr", v: 3.2 },
    { m: "May", v: 2.6 },
    { m: "Jun", v: 2.1 },
  ];
  const max = 5;
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Sick days / 100 emp</p>
        <span className="text-[9px] font-bold text-green-700">↓ 56% YoY</span>
      </div>
      <div className="flex items-end gap-1.5 h-[64px]">
        {months.map((mo) => (
          <div key={mo.m} className="flex-1 flex flex-col items-center justify-end gap-1">
            <div className="w-full rounded-t bg-blue-200" style={{ height: `${(mo.v / max) * 100}%` }} />
            <span className="text-[8px] text-dark-100 font-bold">{mo.m}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CostViz() {
  return (
    <div className="rounded-xl bg-light-100 border border-light-200 p-3">
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="rounded-md bg-white border border-light-200 p-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100">Treatment</p>
          <p className="text-base font-bold text-dark-300 tabular-nums">$1,400</p>
          <p className="text-[8px] text-dark-100">Per claim avg</p>
        </div>
        <div className="rounded-md bg-blue-000 border border-blue-100 p-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-blue-200">Preventive</p>
          <p className="text-base font-bold text-blue-200 tabular-nums">$120</p>
          <p className="text-[8px] text-blue-200">Per checkup</p>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-white border border-light-200 rounded-md px-2 py-1.5">
        <span className="text-[10px] font-bold text-green-700">Save 91%</span>
        <span className="text-[9px] text-dark-100">By catching issues early</span>
      </div>
    </div>
  );
}

function RetentionViz() {
  return (
    <div>
      <div className="rounded-xl bg-white/8 border border-white/15 p-3 mb-2">
        <div className="flex items-baseline justify-between mb-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-100">Retention lift</p>
          <span className="text-2xl font-bold text-white tabular-nums">+18%</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-blue-200" style={{ width: "78%" }} />
        </div>
        <p className="text-[9px] text-white/55 mt-1">Among employees with active wellness use</p>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
          <p className="text-base font-bold text-white tabular-nums">2.4×</p>
          <p className="text-[8px] text-white/55 uppercase tracking-[0.08em] mt-0.5">eNPS lift</p>
        </div>
        <div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
          <p className="text-base font-bold text-white tabular-nums">-32%</p>
          <p className="text-[8px] text-white/55 uppercase tracking-[0.08em] mt-0.5">Attrition</p>
        </div>
      </div>
    </div>
  );
}

function ReportingViz() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { v: "82%",  l: "Activated" },
          { v: "5",    l: "Programs"  },
          { v: "$48K", l: "Saved"     },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-white border border-light-200 p-2 text-center">
            <p className="text-base font-bold text-dark-300 tabular-nums">{s.v}</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {[
          { l: "Checkups",     pct: 78 },
          { l: "Doctor visits", pct: 62 },
          { l: "Insurance",    pct: 91 },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-dark-300 w-[68px] truncate">{s.l}</span>
            <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-blue-200" style={{ width: `${s.pct}%` }} />
            </div>
            <span className="text-[9px] font-bold tabular-nums text-dark-300 w-7 text-right">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TILES = [
  { tag: "Preventive checkups",    title: "At-home health screenings",         body: "Healthians-powered routine screenings, full body checkups, and advanced diagnostics — doorstep sample collection, certified labs, digital reports.",     Viz: CheckupViz,       span: "lg:col-span-2", dark: false },
  { tag: "Digital healthcare",     title: "25+ medical specialties",            body: "Practo network of certified doctors for teleconsultations, OPD care, diagnostic tests, and specialist appointments — online or in-person.",                Viz: PractoViz,        span: "",              dark: false },
  { tag: "Group insurance",        title: "Coverage for teams and families",     body: "Pazcare group health, life, and accident plans with ₹5L–₹15L sum insured. Basic, family, and extended-family options.",                                  Viz: InsuranceViz,     span: "",              dark: true  },
  { tag: "Outcomes",               title: "Reduce absenteeism",                  body: "Preventive programs catch issues early — reducing sick days and unplanned leaves, keeping teams energized and consistently productive.",                  Viz: AbsenteeismViz,   span: "",              dark: false },
  { tag: "Cost discipline",        title: "Lower healthcare spend",               body: "Investing in preventive care costs far less than treating illness — programs reduce long-term healthcare expenses for both employers and employees.",      Viz: CostViz,          span: "",              dark: false },
  { tag: "Talent",                 title: "Attract and retain people",            body: "Wellness signals care and commitment — strengthens your employer brand and gives you an edge in acquiring and keeping top talent.",                       Viz: RetentionViz,     span: "",              dark: true  },
  { tag: "Reporting",              title: "Program participation analytics",      body: "Real-time visibility into activation, top categories, claims, and savings — exportable for finance, HR, and leadership reviews.",                          Viz: ReportingViz,     span: "lg:col-span-2", dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Why corporate wellness matters</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">A proactive approach to workforce health</h2>
          <p className="text-dark-100 text-base leading-relaxed">Preventive checkups, doctor access, and group insurance — paired with the absenteeism, cost, and retention outcomes that justify the spend.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {TILES.map((t, i) => {
            const Viz = t.Viz;
            return (
              <motion.div key={t.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: reduce ? 0 : 0.5, delay: i * 0.05, ease }}
                className={`${t.span} rounded-2xl p-6 ${t.dark ? "bg-dark-300 border border-white/10" : "bg-light-100 border border-light-200"} hover:shadow-menu hover:-translate-y-1 transition-all duration-200`}>
                <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-2 ${t.dark ? "text-blue-100" : "text-blue-200"}`}>{t.tag}</p>
                <h3 className={`text-base lg:text-lg font-bold leading-snug mb-2 ${t.dark ? "text-white" : "text-dark-300"}`}>{t.title}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${t.dark ? "text-dark-000" : "text-dark-100"}`}>{t.body}</p>
                <Viz />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
