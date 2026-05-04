"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const, delay: i * 0.08 },
  }),
};

export default function FeatureBento() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            Platform capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            The celebration they&apos;ll actually remember
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Beyond the notification — Empuls builds a moment the employee wants to hold onto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* 1 — Tier configurator (large) */}
          <motion.div
            custom={0} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎚️ Tier-based recognition</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Year 1 shouldn&apos;t feel like Year 10 — and it won&apos;t</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Configure unique reward values, gift collections, and messages for every milestone tier. Each anniversary has its own moment.</p>
            <TiersViz />
          </motion.div>

          {/* 2 — Wishboard with AI Assist */}
          <motion.div
            custom={1} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💌 Peer Wishboard ✦ AI Assist</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Wishes that don&apos;t feel copy-pasted</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Teammates share appreciation. AI suggestions help anyone write something genuinely personal — not just &ldquo;Congrats!&rdquo;</p>
            <WishboardViz />
          </motion.div>

          {/* 3 — Digital Yearbook */}
          <motion.div
            custom={2} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">📖 Digital Yearbook</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">A keepsake they can hold onto, forever</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Every wish auto-compiled into a downloadable yearbook. View, share, or save it anytime.</p>
            <YearbookViz />
          </motion.div>

          {/* 4 — Milestone Certificate (dark) */}
          <motion.div
            custom={3} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-dark-300 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1">Milestone Certificate</p>
            <h3 className="text-lg font-bold text-white mb-1">An achievement, not a formality</h3>
            <p className="text-dark-000 text-sm leading-relaxed mb-5">Branded, downloadable certificates designed to be shared on LinkedIn or pinned at their desk.</p>
            <CertificateViz />
          </motion.div>

          {/* 5 — Slack & Teams */}
          <motion.div
            custom={4} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">💬 Slack &amp; Teams</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Anniversary moments where work happens</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Posts fire on the day in Slack and Teams — the team sees it, reacts, and adds wishes inline.</p>
            <SlackViz />
          </motion.div>

          {/* 6 — Reward catalog (large) */}
          <motion.div
            custom={5} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">🎁 Reward flexibility</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">Rewards that match the milestone — and the person</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Not every 5-year employee wants the same thing. 10M+ options across gift cards, experiences, merchandise — auto-localised across 175+ countries.</p>
            <RewardsViz />
          </motion.div>

          {/* 7 — Empuls Copilot */}
          <motion.div
            custom={6} variants={reduce ? undefined : fadeUp} initial="hidden"
            whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-light-200 rounded-2xl p-6 hover:shadow-menu hover:-translate-y-0.5 transition-all duration-200"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">Empuls Copilot ✦</p>
            <h3 className="text-lg font-bold text-dark-300 mb-1">A personal note in 10 seconds</h3>
            <p className="text-dark-100 text-sm leading-relaxed mb-5">Copilot drafts wishes based on tenure, role, and recent contributions — so managers always have something heartfelt to say.</p>
            <CopilotViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Mini Visualizations ───────────────────────────────────────────────────── */

function TiersViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const tiers = [
    { year: "Year 1",  budget: 500,    pct: 12,  enrolled: 248, color: "#FFE4D6" },
    { year: "Year 3",  budget: 1500,   pct: 35,  enrolled: 132, color: "#FFD9B0" },
    { year: "Year 5",  budget: 3000,   pct: 65,  enrolled: 84,  color: "#FFC788" },
    { year: "Year 10", budget: 6000,   pct: 100, enrolled: 36,  color: "#FBA85B" },
  ];

  return (
    <div ref={ref} className="space-y-4">
      <div className="space-y-2.5">
        <p className="text-[9px] font-bold uppercase tracking-wider text-dark-100">Configured tiers · enrolled employees</p>
        {tiers.map((t, i) => (
          <div key={t.year} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center" style={{ background: t.color }}>
              <span className="text-[11px] font-extrabold text-dark-300">{t.year.replace("Year ", "Y")}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-semibold text-dark-300">{t.year}</span>
                <span className="text-[10px] text-dark-100">₹{t.budget.toLocaleString()} · {t.enrolled} enrolled</span>
              </div>
              <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "#1D61F6" }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${t.pct}%` } : { width: 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0,0,0.2,1] as const, delay: i * 0.1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 py-2 bg-blue-000 rounded-lg flex items-center justify-between">
        <span className="text-[11px] font-semibold text-blue-200">500 employees auto-enrolled across 4 tiers</span>
        <span className="text-[11px] font-bold text-green-300">100% coverage ✓</span>
      </div>
    </div>
  );
}

const WISHES = [
  { initials: "RK", name: "Ryan K.",    color: "#4338CA", msg: "Three years of Michael = three years of this team being genuinely better." },
  { initials: "AM", name: "Ashley M.",  color: "#0891B2", msg: "Your calm under pressure makes everything easier. Happy 3rd!" },
];

function WishboardViz() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[10px] font-bold text-dark-300">Michael&apos;s 3-Year Wishboard</p>
        <span className="text-[9px] font-bold text-blue-200 bg-blue-000 border border-blue-100 rounded px-1.5 py-0.5">✦ AI Assist</span>
      </div>
      {WISHES.map((w) => (
        <div key={w.name} className="bg-light-100 rounded-xl border border-light-200 px-3 py-2.5">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center text-[8px] font-bold text-white" style={{ background: w.color }}>
              {w.initials}
            </div>
            <p className="text-[11px] font-semibold text-dark-300 leading-tight">{w.name}</p>
          </div>
          <p className="text-[10px] text-dark-100 leading-relaxed">&ldquo;{w.msg}&rdquo;</p>
        </div>
      ))}
      <div className="border-[1.5px] border-dashed border-light-300 rounded-xl px-3 py-2 text-center cursor-pointer">
        <span className="text-[11px] font-semibold text-blue-200">+ 20 more wishes →</span>
      </div>
    </div>
  );
}

function YearbookViz() {
  const cells = ["RK", "AM", "JS", "DV", "PA", "SK", "MN", "+15"];
  return (
    <div className="space-y-3">
      <div className="bg-white border border-light-200 rounded-xl overflow-hidden">
        <div className="px-3 py-2 border-b border-light-200 flex items-center justify-between">
          <p className="text-[10px] font-bold text-dark-300">Yearbook · Michael · 3 Years</p>
          <span className="text-[10px] font-semibold text-blue-200">↓ PDF</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-3">
          {cells.map((c, i) => (
            <div
              key={i}
              className={`h-12 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                c.startsWith("+") ? "bg-blue-000 text-blue-200" : "bg-light-100 text-dark-300 border border-light-200"
              }`}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[9px] text-dark-100 text-center">Auto-compiled from 22 messages on the feed</p>
    </div>
  );
}

function CertificateViz() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-white/15 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a2a4a 0%, #0d2a50 100%)" }}>
        <div className="px-4 py-3 text-center border-b border-white/10">
          <p className="text-[8px] uppercase tracking-[0.2em] text-orange-200 font-bold mb-1.5">Certificate of Service</p>
          <p className="text-white text-sm font-extrabold leading-tight">Michael Carter</p>
          <p className="text-white/55 text-[9px] mt-0.5">3 Years of Excellence · Engineering</p>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-white/40 text-[8px] uppercase tracking-wider">Issued</span>
            <span className="text-white/85 text-[10px] font-semibold">May 2026</span>
          </div>
          <div className="text-right flex flex-col">
            <span className="text-orange-200 text-2xl font-extrabold leading-none">3</span>
            <span className="text-white/55 text-[8px] uppercase tracking-wider mt-0.5">Years</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="flex-1 text-center bg-white/8 text-white/65 text-[9px] rounded px-2 py-1.5 cursor-pointer">↓ Download PDF</span>
        <span className="flex-1 text-center bg-white/8 text-white/65 text-[9px] rounded px-2 py-1.5 cursor-pointer">in Share on LinkedIn</span>
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
        <span className="text-[10px] text-white/35 ml-auto">Today 09:00</span>
      </div>
      <div className="bg-white/8 border border-white/10 rounded-lg px-3 py-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[12px] font-bold" style={{ color: "#FBBF24" }}>🏆 3 years of Michael Carter!</p>
          <span className="bg-orange-200 text-dark-300 text-[9px] font-extrabold rounded-full px-1.5 py-0.5">3 YRS</span>
        </div>
        <p className="text-[10px] text-white/60 leading-relaxed">Three years of brilliance and calm leadership. Thank you, Michael.</p>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">📖 Yearbook</span>
          <span className="bg-white/10 text-white/65 text-[9px] rounded px-2 py-0.5">🏅 Certificate</span>
          <span className="text-[9px] rounded px-2 py-0.5" style={{ background: "rgba(249,115,22,0.2)", color: "#FB923C" }}>🎁 Reward</span>
        </div>
      </div>
    </div>
  );
}

function RewardsViz() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const cards = [
    { name: "Amazon",      sub: "Gift Card",     emoji: "🛒", bg: "#FFF3E0" },
    { name: "Starbucks",   sub: "Gift Card",     emoji: "☕", bg: "#E8F5E9" },
    { name: "Travel",      sub: "Experiences",   emoji: "✈️", bg: "#FCE4EC" },
    { name: "Merchandise", sub: "Custom packs",  emoji: "🎁", bg: "#EDE7F6" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-4">
      <div className="grid grid-cols-2 gap-2">
        {cards.map((c, i) => (
          <motion.div
            key={c.name}
            initial={reduce ? undefined : { opacity: 0, y: 6 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
            className="bg-light-100 border border-light-200 rounded-xl px-3 py-3 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-lg" style={{ background: c.bg }}>{c.emoji}</div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-dark-300">{c.name}</p>
              <p className="text-[10px] font-semibold text-blue-200">{c.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl p-4 flex flex-col justify-center" style={{ background: "linear-gradient(135deg, #081B2D 0%, #0d2a50 100%)" }}>
        <p className="text-white text-sm font-extrabold leading-tight">10M+ reward options</p>
        <p className="text-orange-200 text-[11px] font-semibold mt-1">Gift cards · Experiences · Merch</p>
        <p className="text-white/45 text-[10px] mt-2">Auto-localised across 175+ countries</p>
      </div>
    </div>
  );
}

function CopilotViz() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-light-200 bg-light-100 p-3.5">
        <div className="flex items-start gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-blue-200 flex items-center justify-center shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="white" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 mb-0.5">Anniversary in 7 days</p>
            <p className="text-[9px] text-dark-100 leading-relaxed">
              <span className="font-semibold text-dark-200">Michael Carter · 3 years</span> · led 3 launches this year — Copilot drafted a personal note.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-blue-100 bg-white overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-blue-000 border-b border-blue-100">
          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
            <path d="M5 0.5L6.2 3.8H9.5L6.9 5.8L7.9 9.1L5 7.2L2.1 9.1L3.1 5.8L0.5 3.8H3.8L5 0.5Z" fill="#1D61F6" />
          </svg>
          <span className="text-[9px] font-bold text-blue-200">Empuls Copilot</span>
          <span className="ml-auto text-[8px] text-blue-200 bg-white border border-blue-100 rounded-full px-1.5 py-0.5">Heartfelt tone</span>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[10px] text-dark-200 leading-relaxed">
            &ldquo;Three incredible years, Michael. From the platform rewrite to last quarter&apos;s onboarding flow — your fingerprints are on everything we&apos;re proud of. 🌟&rdquo;
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
