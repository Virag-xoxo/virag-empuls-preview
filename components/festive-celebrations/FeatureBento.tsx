"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, ease: [0,0,0.2,1] as const, delay: i * 0.08 } }),
};

const FESTIVALS = [
  { emoji: "🪔", name: "Diwali",          region: "India & South Asia",    grad: "linear-gradient(135deg,#fbbf24 0%,#d97706 100%)", products: "+48 products" },
  { emoji: "🎄", name: "Christmas",       region: "Global",                grad: "linear-gradient(135deg,#166534 0%,#15803d 100%)", products: "+47 products" },
  { emoji: "🌙", name: "Eid al-Fitr",     region: "Middle East &amp; SEA", grad: "linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%)", products: "+45 products" },
  { emoji: "🎆", name: "New Year",        region: "Global",                grad: "linear-gradient(135deg,#1e1b4b 0%,#312e81 100%)", products: "+46 products" },
  { emoji: "🌈", name: "Holi",            region: "India & South Asia",    grad: "linear-gradient(135deg,#9d174d 0%,#e11d48 100%)", products: "+40 products" },
  { emoji: "🧧", name: "Lunar New Year",  region: "East &amp; SE Asia",   grad: "linear-gradient(135deg,#dc2626 0%,#b91c1c 100%)", products: "+44 products" },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Festival collections</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Pre-loaded for the world&apos;s biggest festivals</h2>
          <p className="text-dark-100 text-base leading-relaxed">Curated themes, recipient choice, and locally available catalog options — all ready to use.</p>
        </div>

        {/* Festival cards 6-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {FESTIVALS.map((f, i) => (
            <motion.div key={f.name} custom={i} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="bg-white border border-light-200 rounded-2xl overflow-hidden hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
              <div className="h-24 flex items-center justify-center text-5xl" style={{ background: f.grad }}>{f.emoji}</div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark-300 mb-1">{f.name}</h3>
                <p className="text-[11px] font-semibold text-blue-200 mb-3" dangerouslySetInnerHTML={{ __html: f.region }} />
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-dark-100">{f.products}</span>
                  <span className="text-blue-200 font-bold">🟡 or Gift Points</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capability bento (3 wide tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div custom={0} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📊 Festive impact</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">When teams feel celebrated, every metric moves</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Festival recognition lifts cultural belonging, engagement, and reach across global teams.</p>
            <StatsViz />
          </motion.div>

          <motion.div custom={1} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🌍 Audience targeting</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Different gifts per region</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Filter by location, department, or HRMS field. India team gets Diwali, Middle East gets Eid.</p>
            <AudienceViz />
          </motion.div>

          <motion.div custom={2} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎁 Many gift types</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Points, cards, merch, and more</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">20+ categories — Fashion, Food, Lifestyle, Travel — plus reward points and personalized greetings.</p>
            <GiftTypesViz />
          </motion.div>

          <motion.div custom={3} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Cross-cultural feed</p>
            <h3 className="text-lg font-bold text-white mb-1">Festivals visible across the org</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Festive posts appear on the company-wide feed — building cross-team awareness of every culture.</p>
            <FeedViz />
          </motion.div>

          <motion.div custom={4} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💬 Slack &amp; Teams</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Festive moments where work happens</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Gifts arrive in Slack and Teams alongside work — no new app, no new login.</p>
            <SlackViz />
          </motion.div>

          <motion.div custom={5} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">✨ Custom occasions</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Beyond the 50+ pre-loaded — any occasion you want</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Company founding day, regional holidays, culture-specific celebrations. Build any custom occasion campaign.</p>
            <CustomViz />
          </motion.div>

          <motion.div custom={6} variants={reduce ? undefined : fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Festive messages drafted for you</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot drafts festival-appropriate greetings — culturally aware, personalised by recipient.</p>
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
    { val: "72%", lbl: "Cultural belonging", bg: "#FFF8F0", color: "#D97706" },
    { val: "54%", lbl: "Higher engagement",  bg: "#E7EEFD", color: "#1D61F6" },
    { val: "50+", lbl: "Festivals included", bg: "#F0FDF4", color: "#16A34A" },
  ];
  const rows = [
    { name: "India & South Asia",  pct: 96 },
    { name: "Middle East",         pct: 88 },
    { name: "Europe & Americas",   pct: 91 },
    { name: "East &amp; SE Asia",  pct: 78 },
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
        <p className="text-[10px] font-semibold text-dark-100 mb-2.5">Festival reach by region</p>
        <div className="space-y-2">
          {rows.map((r, i) => (
            <div key={r.name} className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-dark-200 w-32 shrink-0" dangerouslySetInnerHTML={{ __html: r.name }} />
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

function AudienceViz() {
  const groups = [
    { region: "India team",     gift: "Diwali pack", emoji: "🪔" },
    { region: "ME team",         gift: "Eid pack",    emoji: "🌙" },
    { region: "Global team",     gift: "Universal card", emoji: "🎁" },
  ];
  return (
    <div className="space-y-2">
      {groups.map((g) => (
        <div key={g.region} className="flex items-center gap-3 bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
          <span className="text-xl">{g.emoji}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-dark-300">{g.region}</p>
            <p className="text-[9px] text-dark-100">{g.gift}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GiftTypesViz() {
  const types = [
    { emoji: "💳", name: "Gift cards" },
    { emoji: "👕", name: "Merchandise" },
    { emoji: "✈️", name: "Experiences" },
    { emoji: "⭐", name: "Reward points" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {types.map((t) => (
        <div key={t.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2.5 flex items-center gap-2">
          <span className="text-base">{t.emoji}</span>
          <p className="text-[11px] font-bold text-dark-300">{t.name}</p>
        </div>
      ))}
    </div>
  );
}

const FEED_ITEMS = [
  { initials: "SM", name: "Sarah Mitchell", occasion: "Happy Diwali 🪔",          time: "Today",     grad: "linear-gradient(135deg,#fbbf24,#d97706)" },
  { initials: "OB", name: "Olivia Bennett", occasion: "Merry Christmas 🎄",       time: "Dec 25",    grad: "linear-gradient(135deg,#166534,#15803d)" },
  { initials: "DT", name: "David Thompson", occasion: "Eid Mubarak 🌙",            time: "Apr 10",    grad: "linear-gradient(135deg,#1d4ed8,#0891b2)" },
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
              <span className="text-blue-200"> · {it.occasion}</span>
            </p>
            <span className="text-white/30 text-[9px] shrink-0">{it.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlackViz() {
  return (
    <div className="rounded-xl p-3" style={{ background: "#1A1D21" }}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded shrink-0 flex items-center justify-center text-[10px] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#5b5fc7,#7b83eb)" }}>E</div>
        <span className="text-[11px] font-bold text-white/85">Empuls</span>
        <span className="text-[10px] text-white/35 ml-auto">Oct 29 · 09:00</span>
      </div>
      <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
        <p className="text-[12px] font-bold mb-1" style={{ color: "#1D61F6" }}>🪔 Happy Diwali, team!</p>
        <p className="text-[10px] text-white/60 leading-relaxed">A small token of celebration from all of us — pick your gift below.</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🎁 Open gift</span>
          <span className="text-[9px] rounded px-2 py-0.5" style={{ background: "rgba(29,97,246,0.25)", color: "#1D61F6" }}>⭐ 1,000 pts</span>
        </div>
      </div>
    </div>
  );
}

function CustomViz() {
  const customs = [
    { emoji: "🎂", name: "Founders Day",       date: "Jul 14",  recipients: "All teams" },
    { emoji: "🇺🇸", name: "Independence Day",  date: "Jul 4",   recipients: "US teams" },
    { emoji: "🌸", name: "Spring Festival",     date: "Mar 21",  recipients: "Global" },
    { emoji: "🎉", name: "Company milestones",  date: "Custom",  recipients: "Selected" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {customs.map((c) => (
        <div key={c.name} className="bg-light-100 border border-light-200 rounded-xl px-3 py-2.5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{c.emoji}</span>
            <p className="text-[11px] font-bold text-dark-300">{c.name}</p>
          </div>
          <div className="flex items-center justify-between text-[9px]">
            <span className="text-dark-100">{c.date}</span>
            <span className="text-blue-200 font-semibold">{c.recipients}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
        <span className="text-[9px] font-bold text-blue-200">✦ Empuls Copilot</span>
        <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Diwali tone</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="text-[10px] text-dark-200 leading-relaxed">
          &ldquo;Wishing you and your family a Diwali full of light, joy, and prosperity. Thank you for everything you bring to our team. 🪔&rdquo;
        </p>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-light-200">
        <button className="text-[9px] font-semibold text-blue-200">Regenerate</button>
        <button className="text-[9px] font-semibold bg-blue-200 text-white px-2.5 py-1 rounded-lg">Use this</button>
      </div>
    </div>
  );
}
