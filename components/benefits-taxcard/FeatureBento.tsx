"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function SalaryHighlights() {
  const items = [
    { l: "Meal allowance",       v: "₹1,05,600", note: "Annual exempt" },
    { l: "Fuel & driver",        v: "₹19,200",   note: "Annual exempt" },
    { l: "Phone & internet",     v: "Actuals",   note: "Exempt on bills" },
    { l: "Books & periodicals",  v: "Actuals",   note: "Exempt on receipts" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {items.map((it) => (
        <div key={it.l} className="rounded-xl bg-white border border-light-200 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100">{it.l}</p>
          <p className="text-base font-bold text-dark-300 tabular-nums mt-1">{it.v}</p>
          <p className="text-[9px] text-blue-200 font-bold mt-0.5">{it.note}</p>
        </div>
      ))}
    </div>
  );
}

function MealList() {
  const merchants = [
    { e: "🍔", l: "Quick service" },
    { e: "🍱", l: "Cafeteria" },
    { e: "🛵", l: "Food delivery" },
  ];
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-dark-300">₹1,05,600/yr · MCC food only</p>
      {merchants.map((m) => (
        <div key={m.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{m.e}</span>
          <p className="flex-1 text-[10px] font-bold text-dark-300">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

function FuelList() {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-dark-300">₹19,200/yr · MCC fuel only</p>
      {[
        { e: "⛽", l: "Petrol pumps" },
        { e: "🔌", l: "EV charging" },
        { e: "🚗", l: "Driver salary" },
      ].map((m) => (
        <div key={m.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{m.e}</span>
          <p className="flex-1 text-[10px] font-bold text-dark-300">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

function BooksList() {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-white">Actuals · receipt-based</p>
      {[
        { e: "📖", l: "Books & journals" },
        { e: "📰", l: "Periodicals" },
        { e: "🎓", l: "Professional reading" },
      ].map((m) => (
        <div key={m.l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{m.e}</span>
          <p className="flex-1 text-[10px] font-bold text-white">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

function TelecomList() {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-bold text-white">Actuals · bill-based</p>
      {[
        { e: "📱", l: "Mobile bill" },
        { e: "📡", l: "Broadband" },
        { e: "🌐", l: "Cloud / SaaS" },
      ].map((m) => (
        <div key={m.l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{m.e}</span>
          <p className="flex-1 text-[10px] font-bold text-white">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

function ComplianceGrid() {
  const items = [
    { e: "🏛️", l: "RBI compliant",     sub: "Indian central bank standards" },
    { e: "💼", l: "PPI licensed",      sub: "Powered by PayU" },
    { e: "🔒", l: "MCC restrictions",  sub: "Per-pocket merchant locks" },
    { e: "🛡️", l: "SOC 2 / ISO 27001", sub: "Audit-ready operations" },
    { e: "💰", l: "₹2,00,000 cap",     sub: "Single-card balance ceiling" },
    { e: "🆔", l: "Aadhaar XML KYC",   sub: "NSDL-powered identity" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {items.map((i) => (
        <div key={i.l} className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-2">
          <span className="text-base">{i.e}</span>
          <p className="text-[11px] font-bold text-dark-300 mt-1">{i.l}</p>
          <p className="text-[9px] text-dark-100 leading-snug">{i.sub}</p>
        </div>
      ))}
    </div>
  );
}

function AdminHub() {
  return (
    <div className="space-y-1.5">
      {[
        { l: "Easy administration",      sub: "Bulk loads · onboarding flows" },
        { l: "Real-time reports",        sub: "Every rupee allocated, tracked" },
        { l: "Web + iOS + Android",      sub: "Spend from any device" },
      ].map((it) => (
        <div key={it.l} className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-1.5">
          <p className="text-[11px] font-bold text-dark-300">{it.l}</p>
          <p className="text-[9px] text-dark-100">{it.sub}</p>
        </div>
      ))}
    </div>
  );
}

const TILES = [
  { tag: "Salary structuring", title: "Increase take-home, reduce tax",        body: "Convert taxable salary components into structured allowances within Income Tax Act exemption rules. Same CTC, more in-hand.",          Viz: SalaryHighlights, span: "lg:col-span-2", dark: false },
  { tag: "Meal allowance",     title: "Tax-exempt meals, delivered digitally", body: "Spend at restaurants, cafeterias, and food delivery — within the meal MCC envelope.",                                                  Viz: MealList,         span: "",              dark: false },
  { tag: "Fuel & conveyance",  title: "Cover commute without raising tax",     body: "Petrol pumps, EV charging stations, driver salary reimbursements — all locked to fuel MCC.",                                          Viz: FuelList,         span: "",              dark: false },
  { tag: "Books & periodicals",title: "Invest in learning, exempt on actuals", body: "Books and periodicals fully exempt on receipts. No statutory ceiling — bill-based reimbursement.",                                    Viz: BooksList,        span: "",              dark: true  },
  { tag: "Telecom",            title: "Phone & internet, fully exempt",        body: "Mobile bill, broadband, cloud subscriptions — exempt on actual bills with no upper cap.",                                              Viz: TelecomList,      span: "",              dark: true  },
  { tag: "Compliance",         title: "RBI · PPI · MCC · KYC",                  body: "Six-pillar compliance from card licensing through merchant restrictions to identity verification.",                                  Viz: ComplianceGrid,   span: "lg:col-span-2", dark: false },
  { tag: "Admin hub",          title: "One console, end-to-end",                body: "Bulk loads, onboarding flows, real-time spending reports, multi-device employee access.",                                            Viz: AdminHub,         span: "",              dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Card capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Four allowances. One compliant card.</h2>
          <p className="text-dark-100 text-base leading-relaxed">Salary restructuring, MCC-locked spending, RBI-grade compliance, and admin reports — built for India payroll teams.</p>
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
