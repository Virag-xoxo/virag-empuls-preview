"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const, delay: i * 0.08 } }),
};

export default function FeatureBento() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Platform capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Recognize the whole person, not just the job title</h2>
          <p className="text-dark-100 text-base leading-relaxed">Curated gift collections for every life moment — sent in minutes, chosen by the recipient, delivered globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {/* 1 — Occasions covered (large) */}
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎯 Every life moment, covered</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Marriage, baby, graduation, new home — and any custom occasion</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Pre-built collections for the moments most teams celebrate, plus the freedom to create any occasion your culture cares about.</p>
            <OccasionsViz />
          </motion.div>

          {/* 2 — Curated collections */}
          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎁 Curated collections</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Themed packs the recipient picks from</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Send a baby pack, home goods, experience pack, or value card — they choose what they actually want.</p>
            <CollectionsViz />
          </motion.div>

          {/* 3 — Personal messages */}
          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💌 Personal messages</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Words that feel like they were written for them</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Add a personal note. Use placeholders for name, occasion, or manager — and never send a generic message again.</p>
            <MessageViz />
          </motion.div>

          {/* 4 — Multi-channel delivery (dark) */}
          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Multi-channel delivery</p>
            <h3 className="text-lg font-bold text-white mb-1">Reaches them wherever they work</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Slack, Teams, email, or the Empuls mobile app — the gift arrives in the channel they actually use.</p>
            <ChannelsViz />
          </motion.div>

          {/* 5 — Schedule or send instantly */}
          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">⏰ Send now or schedule</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Instant. Or planned ahead</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Hit send the moment you hear the news, or schedule for the actual day. Both flows stay equally simple.</p>
            <ScheduleViz />
          </motion.div>

          {/* 6 — Global reach (large) */}
          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🌍 Global by default</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Same experience in 175+ countries — no setup per region</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Catalog auto-localises to the recipient&apos;s country and currency. A new home gift in Berlin works exactly like one in Boston.</p>
            <GlobalViz />
          </motion.div>

          {/* 7 — Custom occasions */}
          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">✨ Any occasion you want</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Custom milestones, your culture&apos;s way</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">First-pet adoption, marathon-finished, big move — if it matters to your team, it can be a gift moment.</p>
            <CustomViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OccasionsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const rows = [
    { label: "💍 Weddings",    count: 38, pct: 100, color: "#EC4899" },
    { label: "👶 New Babies",  count: 27, pct: 71,  color: "#F97316" },
    { label: "🎓 Graduations", count: 19, pct: 50,  color: "#6366F1" },
    { label: "🏡 New Homes",   count: 14, pct: 37,  color: "#22C55E" },
  ];

  const upcoming = [
    { emoji: "💍", name: "Olivia",  when: "in 5d",  bg: "#FCE7F3", border: "#F9A8D4", color: "#9D174D" },
    { emoji: "👶", name: "James",   when: "today",  bg: "#FFF8F0", border: "#FED7AA", color: "#C2410C" },
    { emoji: "🎓", name: "Megan",   when: "in 12d", bg: "#EEF2FF", border: "#C7D2FE", color: "#4338CA" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      <div className="space-y-3">
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100">Life events sent · this quarter</p>
        {rows.map((r, i) => (
          <div key={r.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-dark-200">{r.label}</span>
              <span className="text-[11px] font-semibold text-dark-300">{r.count}</span>
            </div>
            <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: r.color }}
                initial={{ width: 0 }} animate={inView ? { width: `${r.pct}%` } : { width: 0 }}
                transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0,0,0.2,1] as const, delay: i * 0.1 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 py-2 bg-blue-000 rounded-lg flex items-center justify-between">
        <span className="text-[11px] font-semibold text-blue-200">98 life events sent this quarter</span>
        <span className="text-[11px] font-bold text-green-300">100% reach ✓</span>
      </div>
      <div>
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100 mb-2">Upcoming · next 14 days</p>
        <div className="flex flex-wrap gap-1.5">
          {upcoming.map((u) => (
            <div key={u.name} className="flex items-center gap-1.5 rounded-full border px-2.5 py-1" style={{ background: u.bg, borderColor: u.border }}>
              <span className="text-[12px] leading-none">{u.emoji}</span>
              <span className="text-[10px] font-semibold" style={{ color: u.color }}>{u.name}</span>
              <span className="text-[9px] text-dark-100">{u.when}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CollectionsViz() {
  const items = [
    { emoji: "👶", name: "Baby Essentials", sub: "Curated pack" },
    { emoji: "🌴", name: "Experiences",     sub: "Travel & dining" },
    { emoji: "🏡", name: "Home Goods",      sub: "For new homes" },
    { emoji: "💳", name: "Value Card",      sub: "Personalized" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {items.map((it) => (
          <div key={it.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-3 text-center">
            <p className="text-2xl mb-1 leading-none">{it.emoji}</p>
            <p className="text-[11px] font-bold text-dark-300">{it.name}</p>
            <p className="text-[9px] text-dark-100">{it.sub}</p>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-dark-100 text-center">10M+ options · 175+ countries</p>
    </div>
  );
}

function MessageViz() {
  return (
    <div className="space-y-2.5">
      <div className="bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
        <p className="text-[10px] font-bold text-dark-300 mb-1">From: Catherine R. · HR Lead</p>
        <p className="text-[10px] text-dark-100 leading-relaxed">&ldquo;Congratulations on your little one, {`{firstName}`}! Wishing you and your family all the joy.&rdquo;</p>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-[9px] bg-blue-000 text-blue-200 rounded px-2 py-0.5 font-semibold">{`{firstName}`}</span>
        <span className="text-[9px] bg-blue-000 text-blue-200 rounded px-2 py-0.5 font-semibold">{`{occasion}`}</span>
        <span className="text-[9px] bg-blue-000 text-blue-200 rounded px-2 py-0.5 font-semibold">{`{manager}`}</span>
      </div>
    </div>
  );
}

function ChannelsViz() {
  const channels = [
    { name: "Slack",   sub: "#welcome",        status: "Delivered" },
    { name: "Teams",   sub: "Company · General", status: "Delivered" },
    { name: "Email",   sub: "james@company.com", status: "Delivered" },
  ];
  return (
    <div className="space-y-2">
      {channels.map((c) => (
        <div key={c.name} className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-lg px-3 py-2">
          <p className="text-white text-[11px] font-bold flex-1">{c.name}</p>
          <p className="text-white/55 text-[9px] flex-1 text-right truncate">{c.sub}</p>
          <span className="text-[9px] font-bold text-green-200 bg-green-200/10 rounded px-1.5 py-0.5">{c.status}</span>
        </div>
      ))}
    </div>
  );
}

function ScheduleViz() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-light-200 bg-light-100 px-3 py-2.5 flex items-center gap-3">
        <span className="text-2xl">⚡</span>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-dark-300">Send now</p>
          <p className="text-[10px] text-dark-100">Delivers immediately</p>
        </div>
      </div>
      <div className="rounded-xl border border-blue-100 bg-blue-000 px-3 py-2.5 flex items-center gap-3">
        <span className="text-2xl">📅</span>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-blue-200">Schedule for May 14</p>
          <p className="text-[10px] text-dark-100">Edit anytime before send</p>
        </div>
      </div>
    </div>
  );
}

function GlobalViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const stats = [
    { val: "175+",  lbl: "Countries supported",   bg: "#E7EEFD", color: "#1D61F6" },
    { val: "10M+",  lbl: "Reward options",         bg: "#FFF8F0", color: "#D97706" },
    { val: "100%",  lbl: "Localized currency",     bg: "#F0FDF4", color: "#16A34A" },
  ];

  const rows = [
    { region: "North America", pct: 92 },
    { region: "Europe",        pct: 86 },
    { region: "Asia Pacific",  pct: 78 },
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
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Coverage by region</p>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={r.region} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-28 shrink-0">{r.region}</span>
              <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div className="h-full rounded-full bg-blue-200"
                  initial={{ width: 0 }} animate={inView ? { width: `${r.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 0.3 + i * 0.08 }} />
              </div>
              <span className="text-[10px] font-bold text-dark-300 tabular-nums w-9 text-right">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CustomViz() {
  const customs = [
    { emoji: "🐶", name: "First pet" },
    { emoji: "🏃", name: "Marathon finished" },
    { emoji: "✈️", name: "Big move" },
    { emoji: "🎂", name: "Anniversary +" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100 mb-1">Custom occasions configured</p>
      <div className="space-y-1.5">
        {customs.map((c) => (
          <div key={c.name} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-3 py-2">
            <span className="text-base">{c.emoji}</span>
            <p className="text-[11px] font-semibold text-dark-300 flex-1">{c.name}</p>
            <span className="text-[9px] text-green-300 font-bold">Active</span>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-blue-200 font-semibold text-center mt-2">+ Add new occasion</p>
    </div>
  );
}
