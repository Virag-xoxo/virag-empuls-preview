"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function GiftCardGrid() {
  const cards = [
    { name: "Amazon",      save: "15%", color: "linear-gradient(135deg,#FF9900,#FFB347)" },
    { name: "Starbucks",   save: "18%", color: "linear-gradient(135deg,#006241,#00754A)" },
    { name: "Airbnb",      save: "20%", color: "linear-gradient(135deg,#FF5A5F,#FF8E91)" },
    { name: "Netflix",     save: "10%", color: "linear-gradient(135deg,#E50914,#F40612)" },
    { name: "Spotify",     save: "12%", color: "linear-gradient(135deg,#1DB954,#1ED760)" },
    { name: "Uber",        save: "8%",  color: "linear-gradient(135deg,#000,#333)" },
  ];
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {cards.map((c) => (
        <div key={c.name} className="rounded-lg overflow-hidden border border-light-200">
          <div className="h-10 flex items-center justify-center text-[11px] font-extrabold text-white" style={{ background: c.color }}>{c.name}</div>
          <div className="bg-white px-1.5 py-1 text-center">
            <p className="text-[9px] font-bold text-green-700">Save {c.save}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CorporateOffer() {
  return (
    <div className="rounded-xl bg-light-100 border border-light-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Corporate exclusive</span>
        <span className="text-[9px] font-bold text-orange-600">Limited</span>
      </div>
      <p className="text-[12px] font-bold text-dark-300 mb-1">DoorDash · 20% off first order</p>
      <p className="text-[10px] text-dark-100 mb-2">Code: EMPULS20 · valid through May 31, 2026</p>
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-dark-100">4,520 employees using</span>
        <button className="text-[10px] font-bold text-white bg-blue-200 px-2.5 py-1 rounded-md">Copy code</button>
      </div>
    </div>
  );
}

function ExclusiveDeals() {
  const deals = [
    { e: "🏃", l: "Decathlon",   note: "20% off Sports" },
    { e: "💄", l: "Sephora",     note: "25% Beauty" },
    { e: "👟", l: "Puma",        note: "15% Apparel" },
    { e: "🎫", l: "AMC Theatres",note: "10% Entertainment" },
  ];
  return (
    <div className="space-y-1.5">
      {deals.map((d) => (
        <div key={d.l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{d.e}</span>
          <p className="flex-1 text-[10px] font-bold text-white truncate">{d.l}</p>
          <span className="text-[9px] font-bold text-blue-100">{d.note}</span>
        </div>
      ))}
    </div>
  );
}

function CashbackWallet() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-[10px] uppercase tracking-[0.10em] text-dark-100 font-bold">Cashback wallet</span>
        <span className="text-[9px] font-bold text-green-700 bg-green-100 border border-green-200/50 px-2 py-0.5 rounded-full">+$24 this month</span>
      </div>
      <p className="text-2xl font-bold text-dark-300 tabular-nums mb-2">$184.00</p>
      <div className="space-y-1">
        {[
          { l: "Amazon",      v: "+$8.40" },
          { l: "Walmart",     v: "+$5.20" },
          { l: "Target",      v: "+$7.60" },
          { l: "DoorDash",    v: "+$2.80" },
        ].map((c) => (
          <div key={c.l} className="flex items-center justify-between text-[10px]">
            <span className="text-dark-100">{c.l}</span>
            <span className="text-green-700 font-bold tabular-nums">{c.v}</span>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-dark-100 mt-2">Cashback applied automatically at checkout</p>
    </div>
  );
}

function CategoryGrid() {
  const cats = [
    { e: "🍔", l: "Food & Dining" },
    { e: "🛍️", l: "Top Brands" },
    { e: "🧘", l: "Wellbeing" },
    { e: "✈️", l: "Travel" },
    { e: "🎫", l: "Tickets" },
    { e: "👔", l: "Apparel" },
    { e: "💄", l: "Beauty" },
    { e: "🎓", l: "Learning" },
    { e: "📱", l: "Electronics" },
    { e: "🎬", l: "Entertainment" },
    { e: "💐", l: "Flowers & Gifts" },
    { e: "🏃", l: "Health & Fitness" },
  ];
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {cats.map((c) => (
        <div key={c.l} className="rounded-lg bg-white border border-light-200 p-1.5 text-center hover:border-blue-100 transition-colors">
          <p className="text-base">{c.e}</p>
          <p className="text-[8px] font-bold text-dark-300 mt-0.5 truncate">{c.l}</p>
        </div>
      ))}
    </div>
  );
}

function ReportsViz() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { v: "78%",  l: "Active" },
          { v: "2.4×", l: "Sessions" },
          { v: "$28K", l: "Saved/mo" },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-light-100 border border-light-200 p-2 text-center">
            <p className="text-base font-bold text-dark-300 tabular-nums">{s.v}</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        {[
          { l: "Food & Dining",      pct: 82 },
          { l: "Travel",             pct: 64 },
          { l: "Shopping",           pct: 56 },
          { l: "Entertainment",      pct: 43 },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-dark-300 w-[72px] truncate">{s.l}</span>
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

function ImpactBreakdown() {
  return (
    <div>
      <div className="text-center mb-3">
        <p className="text-3xl lg:text-4xl font-bold text-white tabular-nums">$7,000+</p>
        <p className="text-[10px] text-dark-000 mt-1">avg household savings on $90K · 7.8% raise at zero cost</p>
      </div>
      <div className="space-y-1">
        {[
          { l: "Groceries & dining",       v: "$1,800" },
          { l: "Travel & transport",       v: "$1,400" },
          { l: "Online shopping",          v: "$1,200" },
          { l: "Entertainment & streaming",v: "$840" },
          { l: "Health & wellness",        v: "$760" },
          { l: "Other",                    v: "$1,000" },
        ].map((s) => (
          <div key={s.l} className="flex items-center justify-between text-[10px]">
            <span className="text-white/55">{s.l}</span>
            <span className="text-white font-bold tabular-nums">{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TILES = [
  { tag: "Discounted gift cards", title: "Curated from 6,000+ brands worldwide", body: "Save 5–50% on Amazon, Starbucks, Airbnb, Netflix, Spotify, Uber, and 5,994 more brands. Delivered instantly to email.", Viz: GiftCardGrid,    span: "lg:col-span-2", dark: false },
  { tag: "Brand offers",          title: "Exclusive corporate offers",            body: "Negotiated discounts available only through Empuls. Promo codes track utilization automatically.",                   Viz: CorporateOffer,  span: "",              dark: false },
  { tag: "Exclusive deals",       title: "Members-only across 100,000+ vendors",  body: "Time-limited deals on the brands employees already love. Updated daily, claimable in-app.",                          Viz: ExclusiveDeals,  span: "",              dark: true  },
  { tag: "Cashback",              title: "Money back, every time",                body: "Cashback automatically applied at checkout — settles to the wallet for redemption or transfer.",                       Viz: CashbackWallet,  span: "",              dark: false },
  { tag: "Explore by category",   title: "25+ categories. One store.",             body: "From food & dining to electronics, wellness, travel, and beyond — every category employees actually use.",          Viz: CategoryGrid,    span: "lg:col-span-2", dark: false },
  { tag: "Reports & insights",    title: "Track adoption, by category",           body: "78% active rate, 2.4× sessions per user, $28K average monthly savings — broken down by category and team.",          Viz: ReportsViz,      span: "",              dark: false },
  { tag: "The real impact",       title: "$7,000+ in annual household savings",   body: "On a $90,000 household income, that's a 7.8% raise — at zero cost to the company.",                                  Viz: ImpactBreakdown, span: "",              dark: true  },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Inside the Perks Store</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Gift cards, deals, cashback — all in one</h2>
          <p className="text-dark-100 text-base leading-relaxed">A perks store employees actually use. Discounted gift cards, exclusive corporate offers, time-limited deals, automatic cashback — across 25+ categories.</p>
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
