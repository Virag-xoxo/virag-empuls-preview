"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function WalletExperience() {
  const cats = [
    { e: "🏋️", l: "Fitness & gym",       v: "$480 · 80%",  pct: 80, color: "#22C55E" },
    { e: "🎓", l: "Learning & courses",   v: "$360 · 60%",  pct: 60, color: "#1D61F6" },
    { e: "🥗", l: "Meals & nutrition",    v: "$648 · 54%",  pct: 54, color: "#F97316" },
  ];
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-[10px] uppercase tracking-[0.10em] text-dark-100 font-bold">Annual allowance</span>
        <span className="text-base font-bold text-dark-300 tabular-nums">$2,400</span>
      </div>
      <div className="space-y-2">
        {cats.map((c) => (
          <div key={c.l}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{c.e}</span>
              <span className="flex-1 text-[11px] font-bold text-dark-300">{c.l}</span>
              <span className="text-[10px] font-bold text-dark-100 tabular-nums">{c.v}</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminControlCenter() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl bg-light-100 border border-light-200 p-2.5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100">Global employees</p>
          <span className="text-[9px] font-bold text-blue-200 bg-blue-000 px-2 py-0.5 rounded-full">FY 2025–26</span>
        </div>
        <p className="text-base font-bold text-dark-300 tabular-nums">1,842 enrolled</p>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { l: "Utilization", v: "74%" },
          { l: "Distributed", v: "$1.8M" },
          { l: "CSAT",        v: "4.7★" },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-white border border-light-200 px-2 py-1.5 text-center">
            <p className="text-[10px] font-bold text-dark-300 tabular-nums">{s.v}</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryListA() {
  const cats = [
    { e: "🏋️", l: "Fitness & wellness", sub: "Gym · yoga · apps" },
    { e: "🧠", l: "Mental health",      sub: "Therapy · EAP" },
    { e: "🥗", l: "Meals & nutrition",  sub: "Delivery · groceries" },
    { e: "🎓", l: "Learning & dev",     sub: "Courses · certs" },
  ];
  return (
    <div className="space-y-1.5">
      {cats.map((c) => (
        <div key={c.l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{c.e}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-white truncate">{c.l}</p>
            <p className="text-[9px] text-white/55 truncate">{c.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CategoryListB() {
  const cats = [
    { e: "✈️", l: "Travel & commute",   sub: "Flights · transit · fuel" },
    { e: "💻", l: "Devices & remote",   sub: "Setup stipend" },
    { e: "👨‍👩‍👧", l: "Family care",        sub: "Childcare · elder · pet" },
    { e: "🌍", l: "Global remote work", sub: "Co-working · stipends" },
  ];
  return (
    <div className="space-y-1.5">
      {cats.map((c) => (
        <div key={c.l} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{c.e}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-white truncate">{c.l}</p>
            <p className="text-[9px] text-white/55 truncate">{c.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[
        { v: "80%",   l: "Would choose personalized benefits over a pay raise" },
        { v: "43%",   l: "Companies expected to offer LSAs by 2025" },
        { v: "$7K+",  l: "Avg household savings vs unlinked perks" },
      ].map((s) => (
        <div key={s.l} className="rounded-xl bg-light-100 border border-light-200 p-3 text-center">
          <p className="text-2xl font-bold text-dark-300 tabular-nums mb-1">{s.v}</p>
          <p className="text-[9px] text-dark-100 leading-snug">{s.l}</p>
        </div>
      ))}
    </div>
  );
}

function WhyLSA() {
  const items = [
    { e: "💯", l: "Used, not shelved",     sub: "Real benefits people actually open" },
    { e: "🪐", l: "One platform",          sub: "Every category in one wallet" },
    { e: "⚙️", l: "HR admin in minutes",   sub: "Configure → publish → done" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((i) => (
        <div key={i.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{i.e}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300 truncate">{i.l}</p>
            <p className="text-[9px] text-dark-100 truncate">{i.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GlobalCurrency() {
  const flags = ["🇺🇸", "🇬🇧", "🇩🇪", "🇨🇦", "🇦🇺", "🇯🇵", "🇫🇷", "🇧🇷"];
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-2">
        <p className="text-2xl font-bold text-dark-300 tabular-nums">100+</p>
        <p className="text-[10px] text-dark-100">countries · multi-currency</p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {flags.map((f, i) => (
          <div key={i} className="bg-light-100 border border-light-200 rounded-lg aspect-square flex items-center justify-center text-base">{f}</div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Built for both sides</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Employee freedom. Admin control. Same platform.</h2>
          <p className="text-dark-100 text-base leading-relaxed">A wallet employees actually use, an admin console HR loves, and a global category library that flexes around your workforce.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Employee experience</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">A wallet, not a reimbursement form</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Personal wallet, self-select categories, instant 20,000+ brand redemption, mobile-first.</p>
            <WalletExperience />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.05, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Admin control</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Configure once. Scale to your workforce.</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Toggle categories, set caps per group, watch utilization climb in real time.</p>
            <AdminControlCenter />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.1, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Categories</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Wellbeing & growth</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Fitness, mental health, meals, and learning — the four most-used spending themes.</p>
            <CategoryListA />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.15, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Categories</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Travel, devices, family, remote</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Four more categories that flex around hybrid and global workforces.</p>
            <CategoryListB />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.2, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Why LSAs win</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Personalized benefits beat pay raises</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Three industry signals that explain why LSAs are spreading through People & Total Rewards orgs.</p>
            <StatsStrip />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.25, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Adoption</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Benefits that flex around people</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Three reasons LSAs hit higher utilization than legacy reimbursement programs.</p>
            <WhyLSA />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.3, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Global</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Multi-currency, 100+ countries</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Local compliance, region-specific categories, HRMS auto-enrolment for distributed workforces.</p>
            <GlobalCurrency />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
