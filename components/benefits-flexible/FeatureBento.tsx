"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function PowerCards() {
  const cards = [
    { e: "🌱", t: "Retention",          v: "Tailored benefits keep talent" },
    { e: "💪", t: "Engagement",         v: "Employees feel chosen, not assigned" },
    { e: "💰", t: "Financial wellness", v: "Tax savings stretch every paycheck" },
    { e: "🧲", t: "Talent magnet",      v: "Differentiate offers to candidates" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {cards.map((c) => (
        <div key={c.t} className="rounded-xl bg-light-100 border border-light-200 p-2.5">
          <span className="text-base">{c.e}</span>
          <p className="text-[11px] font-bold text-dark-300 mt-1">{c.t}</p>
          <p className="text-[9px] text-dark-100 mt-0.5 leading-snug">{c.v}</p>
        </div>
      ))}
    </div>
  );
}

function LSACards() {
  const cards = [
    { l: "Gym membership",   pts: "300 pts", users: "1,294 users" },
    { l: "Medical expenses", pts: "500 pts", users: "1,108 users" },
    { l: "Skill development",pts: "400 pts", users: "962 users" },
  ];
  return (
    <div className="space-y-1.5">
      {cards.map((c) => (
        <div key={c.l} className="flex items-center gap-2.5 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{c.l}</p>
            <p className="text-[9px] text-dark-100">{c.users}</p>
          </div>
          <span className="text-[10px] font-bold text-blue-200 tabular-nums">{c.pts}</span>
        </div>
      ))}
    </div>
  );
}

function FitnessViz() {
  const merchants = [
    { e: "🏋️", l: "Planet Fitness",  v: "$25/mo" },
    { e: "💪", l: "Gold's Gym",      v: "$40/mo" },
    { e: "🧘", l: "ClassPass",       v: "$39/mo" },
  ];
  return (
    <div className="space-y-1.5">
      {merchants.map((m) => (
        <div key={m.l} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{m.e}</span>
          <p className="flex-1 text-[10px] font-bold text-white truncate">{m.l}</p>
          <span className="text-[9px] font-bold text-blue-100 tabular-nums">{m.v}</span>
        </div>
      ))}
    </div>
  );
}

function DeviceRequest() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl bg-white border border-light-200 p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>LR</div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300">Lucas Reed</p>
            <p className="text-[9px] text-dark-100">Design Manager · request</p>
          </div>
        </div>
        <div className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-2 mb-1">
          <p className="text-[10px] font-bold text-dark-300">Apple iPhone 15 (128GB Silver)</p>
          <p className="text-[9px] text-dark-100">$699 · paid as $116.50/mo × 6 months</p>
        </div>
        <button className="w-full text-[10px] font-bold text-white bg-blue-200 rounded-md py-1.5">Approve & deduct payroll</button>
      </div>
    </div>
  );
}

function MealsViz() {
  const tiles = [
    { e: "🍔", l: "Uber Eats",  v: "$40 voucher" },
    { e: "🥗", l: "DoorDash",   v: "$40 voucher" },
    { e: "🍕", l: "Grubhub",    v: "$50 voucher" },
    { e: "🥡", l: "Caviar",     v: "$30 voucher" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {tiles.map((t) => (
        <div key={t.l} className="rounded-lg bg-light-100 border border-light-200 px-2 py-1.5">
          <span className="text-base">{t.e}</span>
          <p className="text-[10px] font-bold text-dark-300 truncate mt-1">{t.l}</p>
          <p className="text-[9px] text-blue-200 font-bold">{t.v}</p>
        </div>
      ))}
    </div>
  );
}

function TravelViz() {
  return (
    <div className="space-y-1.5">
      <div className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-2 flex items-center gap-2">
        <span className="text-base">🚗</span>
        <p className="flex-1 text-[10px] font-bold text-dark-300">Uber gift card</p>
        <span className="text-[10px] font-bold text-blue-200">$500</span>
      </div>
      <div className="rounded-lg bg-light-100 border border-light-200 px-2.5 py-2 flex items-center gap-2">
        <span className="text-base">🏨</span>
        <p className="flex-1 text-[10px] font-bold text-dark-300">Expedia hotels</p>
        <span className="text-[10px] font-bold text-green-300">5% off</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { l: "Adventure",  v: "$230" },
          { l: "Seasonal",   v: "$120" },
          { l: "Honeymoon",  v: "$100" },
        ].map((t) => (
          <div key={t.l} className="rounded-md bg-white border border-light-200 px-1.5 py-1.5 text-center">
            <p className="text-[9px] font-bold text-dark-300">{t.l}</p>
            <p className="text-[9px] text-blue-200 font-bold">{t.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WellbeingTabs() {
  const items = [
    { e: "🧘", l: "Wellness",      partners: "Calm · ClassPass" },
    { e: "🎓", l: "Skill development", partners: "Coursera · LinkedIn Learning" },
    { e: "👨‍👩‍👧", l: "Family care",    partners: "Childcare · eldercare" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((i) => (
        <div key={i.l} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{i.e}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-white truncate">{i.l}</p>
            <p className="text-[9px] text-white/55 truncate">{i.partners}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const TILES = [
  { tag: "Why flexible benefits", title: "Tailored benefits nurture loyalty", body: "Pre-set categories, employee-driven choice, automatic tax handling. Four levers that actually move retention.",                                       Viz: PowerCards,    span: "lg:col-span-2", dark: false },
  { tag: "Lifestyle",             title: "Custom LSAs alongside the plan",   body: "Layer an employer-funded lifestyle allowance on top of the tax-saving plan. Employees pick from gym, learning, family care, more.",                       Viz: LSACards,      span: "",              dark: false },
  { tag: "Fitness",               title: "Encourage employee fitness goals", body: "Direct partnerships with leading gym networks. Subscription credits flow through the same wallet, no extra setup.",                                      Viz: FitnessViz,    span: "",              dark: true  },
  { tag: "Devices",               title: "Premium devices, payroll EMI",     body: "Employees pick from a curated catalog (laptops, phones, headphones) and pay through monthly payroll deduction at zero APR.",                              Viz: DeviceRequest, span: "lg:col-span-2", dark: false },
  { tag: "Meals",                 title: "Flexible meal options",            body: "Per-cycle voucher allotment. Employees redeem at Uber Eats, DoorDash, Grubhub, Caviar, or local restaurants. Receipts auto-categorize.",                  Viz: MealsViz,      span: "",              dark: false },
  { tag: "Travel",                title: "Flexible travel benefits",         body: "Subsidized rideshare, discounted hotel bookings, and vacation experience credits — all redeemable from the same wallet.",                                Viz: TravelViz,     span: "",              dark: false },
  { tag: "Well-being & growth",   title: "Wellness, learning, family care",  body: "A curated partner network covering mental health, skill development, and family care. Each category configurable per employee group.",                    Viz: WellbeingTabs, span: "",              dark: true  },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Benefit category showcase</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">A category for every life stage and team</h2>
          <p className="text-dark-100 text-base leading-relaxed">From tax-saving allowances to lifestyle, fitness, devices, meals, travel, and well-being — everything employees can actually use.</p>
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
