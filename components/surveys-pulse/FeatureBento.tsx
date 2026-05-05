"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

const DRIVERS = ["Strategic", "Hygiene", "Recognition", "Culture", "Peers", "Manager", "Satisfaction", "Alignment", "Happiness"];
const DEPTS = [
  { name: "Organization",    scores: [4.4, 4.0, 4.2, 4.1, 4.5, 4.0, 4.3, 4.2, 4.1] },
  { name: "Sales",           scores: [4.6, 4.2, 4.5, 4.3, 4.7, 4.4, 4.5, 4.6, 4.4] },
  { name: "Marketing",       scores: [5.0, 4.0, 4.4, 4.2, 4.5, 4.0, 4.4, 4.3, 4.2] },
  { name: "HR Mgmt",         scores: [3.4, 3.6, 3.2, 2.7, 3.5, 3.0, 2.1, 3.6, 3.4] },
  { name: "R&D",             scores: [4.2, 4.0, 4.3, 4.1, 4.4, 3.9, 4.1, 4.2, 4.0] },
  { name: "Finance",         scores: [3.8, 3.4, 3.6, 3.3, 3.9, 3.5, 3.7, 3.8, 3.5] },
  { name: "Accounts",        scores: [3.5, 2.1, 3.3, 3.0, 3.8, 3.4, 3.5, 3.6, 3.4] },
];

function colorFor(score: number) {
  if (score >= 4.5) return { bg: "#15803D", text: "#fff" };
  if (score >= 4.0) return { bg: "#22C55E", text: "#0B1620" };
  if (score >= 3.5) return { bg: "#F59E0B", text: "#0B1620" };
  if (score >= 3.0) return { bg: "#F97316", text: "#fff" };
  return { bg: "#EF4444", text: "#fff" };
}

function Heatmap() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-100">Engagement Driver Score · Q2 2024 · 247 responses</p>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/10">
        <div className="grid" style={{ gridTemplateColumns: `120px repeat(${DRIVERS.length}, minmax(0, 1fr))` }}>
          <div className="bg-white/5 px-2 py-2 text-[9px] font-bold text-white/55 uppercase tracking-[0.06em]">Department</div>
          {DRIVERS.map((d) => (
            <div key={d} className="bg-white/5 px-1 py-2 text-[8px] font-bold text-white/55 uppercase tracking-[0.06em] text-center">{d}</div>
          ))}
          {DEPTS.map((dept, ri) => (
            <>
              <div key={`name-${dept.name}`} className="px-2 py-2 text-[10px] font-bold text-white truncate" style={{ background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>{dept.name}</div>
              {dept.scores.map((s, ci) => {
                const c = colorFor(s);
                return (
                  <motion.div key={`${dept.name}-${ci}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={reduce ? { duration: 0 } : { duration: 0.25, delay: (ri * DRIVERS.length + ci) * 0.012, ease }}
                    className="text-[9px] font-bold tabular-nums flex items-center justify-center"
                    style={{ background: c.bg, color: c.text, borderRight: "1px solid rgba(255,255,255,0.05)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>{s.toFixed(1)}</motion.div>
                );
              })}
            </>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3 pt-1 flex-wrap">
        {[
          { l: "4.5+", c: "#15803D" },
          { l: "4.0+", c: "#22C55E" },
          { l: "3.5+", c: "#F59E0B" },
          { l: "3.0+", c: "#F97316" },
          { l: "<3.0", c: "#EF4444" },
        ].map((g) => (
          <div key={g.l} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm" style={{ background: g.c }} />
            <span className="text-[9px] font-bold text-white/55">{g.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CadenceCard({ tag, title, body, bullets }: { tag: string; title: string; body: string; bullets: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-200 mb-2">{tag}</p>
      <h3 className="text-base font-bold text-dark-300 leading-snug mb-2">{title}</h3>
      <p className="text-xs text-dark-100 leading-relaxed mb-3">{body}</p>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[11px] text-dark-300">
            <span className="text-blue-200 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CadenceCardDark({ tag, title, body, bullets }: { tag: string; title: string; body: string; bullets: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-100 mb-2">{tag}</p>
      <h3 className="text-base font-bold text-white leading-snug mb-2">{title}</h3>
      <p className="text-xs text-dark-000 leading-relaxed mb-3">{body}</p>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[11px] text-dark-000">
            <span className="text-blue-100 mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SchedulerCard() {
  const rows = [
    { icon: "📋", label: "Survey",     val: "Q2 Weekly Engagement Pulse",  sub: "Template · 5 questions · 2 min" },
    { icon: "👥", label: "Recipients", val: "All Employees (263)",         sub: "Synced from Workday · auto-updates" },
    { icon: "🗓", label: "Frequency",  val: "Every Monday at 9:00 AM",     sub: "Delivered via Slack + email" },
    { icon: "🔔", label: "Reminders",  val: "Auto-nudge after 48 hours",   sub: "Stops once employee responds" },
    { icon: "🔒", label: "Anonymity",  val: "Fully anonymous",             sub: "Min. 5 responses before dept view" },
  ];
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[11px] font-bold text-dark-300">Pulse Schedule Configuration</p>
        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-green-300 bg-green-300/15 px-2 py-0.5 rounded-full">
          <span className="w-1 h-1 rounded-full bg-green-300 animate-pulse" />ACTIVE
        </span>
      </div>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-2.5 bg-white border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{r.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100">{r.label}</span>
              <span className="text-[10px] font-bold text-dark-300 truncate">{r.val}</span>
            </div>
            <p className="text-[9px] text-dark-100 truncate">{r.sub}</p>
          </div>
        </div>
      ))}
      <div className="text-center text-[10px] text-dark-100 pt-1">Next send: Mon, Jun 17 at 9:00 AM</div>
    </div>
  );
}

function SatisfactionViz() {
  return (
    <div className="space-y-2">
      {[
        { l: "Satisfaction", v: 4.39 },
        { l: "Alignment",    v: 4.12 },
        { l: "Happiness",    v: 4.05 },
      ].map((s) => (
        <div key={s.l}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-dark-300">{s.l}</span>
            <span className="text-[10px] font-bold text-blue-200 tabular-nums">{s.v}</span>
          </div>
          <div className="h-1.5 bg-light-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-blue-200" style={{ width: `${(s.v / 5) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function SeverityLegend() {
  return (
    <div className="space-y-1.5">
      {[
        { l: "Strong",   r: "4.5–5.0", c: "#15803D" },
        { l: "Good",     r: "4.0–4.4", c: "#22C55E" },
        { l: "Watch",    r: "3.5–3.9", c: "#F59E0B" },
        { l: "Concern",  r: "3.0–3.4", c: "#F97316" },
        { l: "Critical", r: "<3.0",    c: "#EF4444" },
      ].map((s) => (
        <div key={s.l} className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm" style={{ background: s.c }} />
          <span className="text-[10px] font-bold text-white flex-1">{s.l}</span>
          <span className="text-[9px] text-white/55 tabular-nums">{s.r}</span>
        </div>
      ))}
    </div>
  );
}

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Engagement driver analysis</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Not just a score. A complete picture.</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls tracks nine engagement drivers — not just overall sentiment. See which areas are healthy, which need attention, and where each department diverges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">9-driver heatmap</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">9 drivers × every department</h3>
            <p className="text-xs leading-relaxed mb-4 text-dark-000">A single colour-coded view shows exactly where engagement is healthy and where it's falling apart — without scrolling through 50 charts.</p>
            <Heatmap />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <CadenceCard tag="Weekly" title="Weekly Pulse" body="A 3–5 question check-in designed to complete in under 2 minutes. Ideal for high-velocity teams, remote workforces, or periods of significant change." bullets={["3–5 questions per send", "Emoji or 5-point rating scale", "Delivered Monday morning", "Real-time response tracking"]} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <CadenceCardDark tag="Monthly" title="Monthly Deep-Dive" body="An 8–10 question survey covering all nine engagement drivers. Gives managers a fuller picture of team health beyond the weekly signal." bullets={["8–10 questions across 9 drivers", "Multi-section Likert format", "Department comparison heatmap", "AI theme summary on close"]} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.15, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <CadenceCard tag="Quarterly" title="Quarterly eNPS" body="A standard Employee Net Promoter Score check — single question with optional follow-up — benchmarked against your own quarterly trend." bullets={["1 NPS question + 1 open-ended", "eNPS score calculated automatically", "Trend tracked across quarters", "Segmentable by team or tenure"]} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Automation</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Pulse Schedule Configuration</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Configure once. Empuls runs the full distribution, reminder, and analysis cycle automatically.</p>
            <SchedulerCard />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Insights</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Understand satisfaction levels</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Uncover the reasons behind the scores — not just the number.</p>
            <SatisfactionViz />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Benchmarking</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Severity-coded heatmaps</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Highlight the specific areas that need a plan of action — coloured by severity.</p>
            <SeverityLegend />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
