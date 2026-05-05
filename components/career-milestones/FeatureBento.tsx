"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0,0,0.2,1] as const, delay: i * 0.08 } }),
};

const TYPES = [
  { emoji: "🚀", name: "Promotions",         desc: "Title changes auto-trigger company-wide announcements", trigger: "Job title change in HRMS",   bg: "#EEF4FD", color: "#1D61F6" },
  { emoji: "📜", name: "Certifications",     desc: "AWS, PMP, CFA, or any internal badge — all recognized", trigger: "Learning platform or manual", bg: "#FFFBEB", color: "#D97706" },
  { emoji: "🏆", name: "Project Completions",desc: "Recognize teams when high-stakes work ships",            trigger: "Manager nomination",          bg: "#F0FDF4", color: "#15803D" },
  { emoji: "🔄", name: "Role Changes",        desc: "Lateral moves and transfers — growth too",              trigger: "Department change in HRMS",   bg: "#F5F3FF", color: "#7C3AED" },
  { emoji: "🎯", name: "Performance Awards",  desc: "Quarterly and annual top performers spotlit",            trigger: "Performance review cycle",    bg: "#ECFEFF", color: "#0891B2" },
  { emoji: "💡", name: "Custom Milestones",   desc: "Patent filings, sales targets, anything you define",     trigger: "Any HRMS field or manual",    bg: "#FFF1F2", color: "#E11D48" },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Every career moment</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Recognition for every kind of growth</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls covers the full spectrum of career milestones — not just tenure. Set up any milestone type in minutes.</p>
        </div>

        {/* 6-card milestone-type grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {TYPES.map((t, i) => (
            <motion.div key={t.name} custom={i} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: t.bg }}>{t.emoji}</div>
              <h3 className="text-lg font-bold text-dark-300 mb-1.5">{t.name}</h3>
              <p className="text-dark-100 text-sm leading-relaxed mb-4">{t.desc}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: t.color }}>Trigger: {t.trigger}</p>
            </motion.div>
          ))}
        </div>

        {/* Capability bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Recognition signals</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">When career growth is recognized, the whole org notices</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Public recognition drives retention, closes the recognition gap, and lifts engagement across teams.</p>
            <StatsViz />
          </motion.div>

          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🤝 Manager + peer</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Combined recognition</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Managers add a personal note. Colleagues react and comment.</p>
            <PeerViz />
          </motion.div>

          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🏅 Milestone certificate</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">A branded keepsake</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Downloadable, shareable certificate unique to every milestone.</p>
            <CertViz />
          </motion.div>

          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Public feed post</p>
            <h3 className="text-lg font-bold text-white mb-1">Visible to the whole company</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Every milestone publishes to the Empuls social feed — not just the immediate team.</p>
            <FeedViz />
          </motion.div>

          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎁 Global rewards</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">10M+ options worldwide</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Milestone reward points unlock 10M+ options in 175+ countries — local currency.</p>
            <RewardsViz />
          </motion.div>

          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">⚡ Auto-triggered from your HRMS</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">A title change becomes a celebration — automatically</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">When a job title, grade, or department field changes in Workday, BambooHR, or 250+ others, recognition fires.</p>
            <HRMSViz />
          </motion.div>

          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Manager notes drafted in seconds</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot drafts a personalized congratulations note based on the employee&apos;s contributions and tenure.</p>
            <CopilotViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const stats = [
    { val: "3×",  lbl: "More likely to stay",     bg: "#E7EEFD", color: "#1D61F6" },
    { val: "69%", lbl: "Feel achievements unseen", bg: "#FFF8F0", color: "#D97706" },
    { val: "2×",  lbl: "Higher engagement",       bg: "#F0FDF4", color: "#16A34A" },
  ];
  const rows = [
    { name: "Promotions/year",  pct: 92 },
    { name: "Certifications",   pct: 78 },
    { name: "Project wins",     pct: 84 },
  ];
  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center rounded-xl py-3" style={{ background: s.bg }}>
            <p className="text-[22px] font-extrabold leading-none tabular-nums" style={{ color: s.color }}>{s.val}</p>
            <p className="text-[10px] text-dark-100 mt-1">{s.lbl}</p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-light-200 rounded-xl p-3">
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Recognition coverage by type</p>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={r.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-32 shrink-0">{r.name}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200" initial={{ width: 0 }} animate={inView ? { width: `${r.pct}%` } : { width: 0 }} transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.3 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-9 text-right">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PeerViz() {
  const wishes = [
    { initials: "RK", name: "Ryan K.",    color: "#4338CA", msg: "This is SO deserved. Carrying that roadmap for months 🙌" },
    { initials: "AM", name: "Ashley M.",  color: "#0891B2", msg: "The new title finally catches up with what you were already doing 😄" },
  ];
  return (
    <div className="space-y-2">
      {wishes.map((w) => (
        <div key={w.name} className="bg-light-100 rounded-xl border border-light-200 px-3 py-2.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: w.color }}>{w.initials}</div>
            <p className="text-[11px] font-semibold text-dark-300">{w.name}</p>
          </div>
          <p className="text-[10px] text-dark-100 leading-relaxed">&ldquo;{w.msg}&rdquo;</p>
        </div>
      ))}
      <div className="border-[1.5px] border-dashed border-light-300 rounded-xl px-3 py-2 text-center cursor-pointer">
        <span className="text-[11px] font-semibold text-blue-200">+ 13 more comments →</span>
      </div>
    </div>
  );
}

function CertViz() {
  return (
    <div className="rounded-xl border border-light-200 overflow-hidden" style={{ background: "linear-gradient(135deg, #081B2D 0%, #0d2a50 100%)" }}>
      <div className="px-3 py-3 text-center border-b border-white/10">
        <p className="text-[7px] uppercase tracking-[0.2em] text-orange-200 font-bold mb-1">Career Milestone</p>
        <p className="text-white text-[13px] font-extrabold leading-tight">Daniel Foster</p>
        <p className="text-white/55 text-[8px] mt-0.5">Senior PM · 2026</p>
      </div>
      <div className="px-3 py-2 flex items-center justify-between">
        <span className="text-orange-200 text-xl">🏅</span>
        <span className="text-blue-100 text-[10px] font-bold">↓ Download</span>
      </div>
    </div>
  );
}

const FEED_ITEMS = [
  { initials: "DF", name: "Daniel Foster",  occasion: "Promoted to Senior PM 🚀",  time: "Today",       grad: "linear-gradient(135deg,#1D61F6,#0EA5E9)" },
  { initials: "MH", name: "Megan Hayes",    occasion: "AWS Solutions Architect 📜", time: "Yesterday",   grad: "linear-gradient(135deg,#F59E0B,#EF4444)" },
  { initials: "SM", name: "Sarah Mitchell", occasion: "Q3 Roadmap shipped 🏆",      time: "2d ago",      grad: "linear-gradient(135deg,#22C55E,#10B981)" },
];

function FeedViz() {
  const items = [...FEED_ITEMS, ...FEED_ITEMS];
  return (
    <div className="h-[88px] overflow-hidden relative">
      <div className="animate-feed-scroll">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/8 rounded-lg px-3 py-2 mb-2">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: it.grad }}>{it.initials}</div>
            <p className="text-white/70 text-[10px] truncate flex-1">
              <span className="text-white font-medium">{it.name}</span>
              <span className="text-blue-100"> · {it.occasion}</span>
            </p>
            <span className="text-white/30 text-[9px] shrink-0">{it.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RewardsViz() {
  const cards = [
    { emoji: "🛒", name: "Amazon",    sub: "Gift Card" },
    { emoji: "✈️", name: "Travel",    sub: "Experiences" },
    { emoji: "☕", name: "Starbucks", sub: "Gift Card" },
    { emoji: "💳", name: "Prepaid",   sub: "Anywhere" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-1.5">
        {cards.map((c) => (
          <div key={c.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2 flex items-center gap-2">
            <span className="text-lg">{c.emoji}</span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-dark-300">{c.name}</p>
              <p className="text-[9px] text-blue-200 font-semibold">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-dark-100 text-center">175+ countries · local currency</p>
    </div>
  );
}

function HRMSViz() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      {[
        { name: "Workday",     src: "/logos/integrations/workday.png" },
        { name: "BambooHR",    src: "/logos/integrations/bamboohr.png" },
        { name: "Darwinbox",   src: "/logos/integrations/darwinbox.png" },
        { name: "SAP",         src: "/logos/integrations/sap-successfactors.png" },
      ].map((l) => (
        <div key={l.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-3 flex items-center justify-center h-[60px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={l.src} alt={l.name} className="max-h-[28px] w-auto object-contain" />
        </div>
      ))}
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <span className="text-[9px] font-bold text-blue-200">✦ Empuls Copilot</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Heartfelt</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-dark-200 leading-relaxed">
            &ldquo;Daniel — your work on Q3 was the kind of leadership we celebrate. The new title is just catching up. 🚀&rdquo;
          </p>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
          <button className="text-[9px] font-semibold text-blue-200">Regenerate</button>
          <button className="text-[9px] font-semibold bg-blue-200 text-white px-2.5 py-1 rounded-lg">Use this</button>
        </div>
      </div>
    </div>
  );
}
