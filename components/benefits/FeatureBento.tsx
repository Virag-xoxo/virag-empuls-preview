"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function TaxAllowanceBars() {
  const items = [
    { l: "Meal allowance",        v: "$2,400/yr exempt",   pct: 75 },
    { l: "Fuel & conveyance",     v: "$1,500/yr exempt",   pct: 50 },
    { l: "Phone & internet",      v: "Actuals · exempt",   pct: 60 },
    { l: "Books & periodicals",   v: "Actuals · exempt",   pct: 40 },
  ];
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it.l}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-dark-300">{it.l}</span>
            <span className="text-[9px] text-blue-200 font-bold">{it.v}</span>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-blue-200" style={{ width: `${it.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LSAWalletMini() {
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3.5">
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-blue-200">My LSA wallet</p>
        <span className="text-[9px] font-bold text-dark-100">$2,400/yr</span>
      </div>
      <p className="text-2xl font-bold text-dark-300 tabular-nums mb-2">$912 <span className="text-[10px] text-dark-100 font-normal">remaining</span></p>
      <div className="h-1.5 bg-light-200 rounded-full overflow-hidden mb-2">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-100 to-blue-200" style={{ width: "62%" }} />
      </div>
      <p className="text-[9px] text-dark-100">Fitness · Learning · Meals · Mental wellness</p>
    </div>
  );
}

function HealthPartners() {
  const partners = [
    { e: "🏥", l: "Checkups" },
    { e: "💊", l: "Pharmacy" },
    { e: "🧘", l: "Wellness" },
    { e: "🧠", l: "Mental health" },
    { e: "👨‍⚕️", l: "Doctors" },
    { e: "🏃", l: "Fitness" },
  ];
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {partners.map((p) => (
        <div key={p.l} className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-lg py-2">
          <span className="text-base">{p.e}</span>
          <span className="text-[9px] font-bold text-white">{p.l}</span>
        </div>
      ))}
    </div>
  );
}

function DiscountsCloud() {
  const brands = ["Amazon Prime", "DoorDash", "Uber", "Starbucks", "Netflix", "Airbnb", "Decathlon", "Sephora", "+5,990"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {brands.map((b) => (
        <span key={b} className="text-[10px] font-bold text-dark-300 bg-white border border-light-200 px-2 py-1 rounded-full">{b}</span>
      ))}
    </div>
  );
}

function EarlyWagesViz() {
  return (
    <div className="rounded-xl bg-light-100 border border-light-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100">Earned to date</p>
        <span className="text-[9px] font-bold text-green-300 bg-green-300/15 px-2 py-0.5 rounded-full">DAY 18</span>
      </div>
      <p className="text-xl font-bold text-dark-300 tabular-nums mb-2">$2,160 <span className="text-[10px] text-dark-100 font-normal">available</span></p>
      <button className="w-full text-[10px] font-bold text-white bg-blue-200 rounded-md py-1.5">Request advance →</button>
    </div>
  );
}

function InsuranceTimeline() {
  const events = [
    { l: "Claim filed",        d: "Jun 12", done: true },
    { l: "Insurer review",     d: "Jun 14", done: true },
    { l: "Settled · paid out", d: "Jun 18", done: true },
  ];
  return (
    <div className="space-y-1.5">
      {events.map((ev) => (
        <div key={ev.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <div className="w-3.5 h-3.5 rounded-full bg-blue-200 text-white text-[8px] font-bold flex items-center justify-center">✓</div>
          <p className="flex-1 text-[10px] font-bold text-dark-300 truncate">{ev.l}</p>
          <span className="text-[9px] text-dark-100">{ev.d}</span>
        </div>
      ))}
    </div>
  );
}

function DeviceCatalog() {
  const items = [
    { e: "💻", l: "MacBook Air M4",       p: "$116/mo" },
    { e: "📱", l: "iPhone 15 (128GB)",    p: "$58/mo" },
    { e: "🎧", l: "Bose QuietComfort",    p: "$22/mo" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it) => (
        <div key={it.l} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{it.e}</span>
          <p className="flex-1 text-[10px] font-bold text-white truncate">{it.l}</p>
          <span className="text-[9px] font-bold text-blue-100 tabular-nums">{it.p}</span>
        </div>
      ))}
    </div>
  );
}

const TILES = [
  { tag: "Tax-saving",         title: "Extend take-home with tax-saving allowances", body: "Meals, fuel, phone, books — structured allowances inside applicable tax exemption limits, paid via prepaid card or reimbursement.", Viz: TaxAllowanceBars,   span: "lg:col-span-2", dark: false },
  { tag: "Lifestyle",          title: "Lifestyle Spending Account",                  body: "An employer-funded annual allowance employees spend across fitness, learning, meals, family care, and more.",                              Viz: LSAWalletMini,      span: "",              dark: false },
  { tag: "Health & wellness",  title: "Promote wellbeing at work",                   body: "Checkups, pharmacy, doctors, mental health, gym, home care — through a curated partner network.",                                          Viz: HealthPartners,     span: "",              dark: true  },
  { tag: "Discounts",          title: "Launch your corporate perks store",           body: "6,000+ gift card brands at 5–50% off, exclusive corporate offers, and cashback — free for employees, no setup cost.",                      Viz: DiscountsCloud,     span: "lg:col-span-2", dark: false },
  { tag: "Early wages",        title: "Cash when employees need it",                 body: "Earned-wage access between paydays — employees draw from what they've already earned, repayment auto-deducts from payroll.",                Viz: EarlyWagesViz,      span: "",              dark: false },
  { tag: "Insurance",          title: "Comprehensive coverage, in-app claims",       body: "Group health, life, accident, top-up — employees raise and track claims directly in Empuls.",                                              Viz: InsuranceTimeline,  span: "",              dark: false },
  { tag: "Devices",            title: "Premium devices at instalment",               body: "Laptops, phones, headphones — employees pick from the catalog and pay through monthly payroll deduction.",                                Viz: DeviceCatalog,      span: "",              dark: true  },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Seven benefit types</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Every sphere of life — covered, on one platform</h2>
          <p className="text-dark-100 text-base leading-relaxed">Personal, financial, physical, mental wellbeing — designed to flex around individual employee choice, not company mandates.</p>
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
