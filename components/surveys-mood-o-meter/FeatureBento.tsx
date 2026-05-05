"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

const TABS = ["Department", "Designation", "Location", "Business Unit", "Grade", "Cost Center", "Manager", "Tenure"];
const HEATMAP_ROWS = [
  { name: "Org",                d104: 50,    d105: 100, d106: 0   },
  { name: "Sales",              d104: 33.33, d105: 0,   d106: 0   },
  { name: "Finance & Legal",    d104: 100,   d105: 0,   d106: 0   },
  { name: "Technology",         d104: 100,   d105: 100, d106: 0   },
  { name: "SDR",                d104: 50,    d105: 0,   d106: 0   },
  { name: "Departments N/A",    d104: 0,     d105: 0,   d106: 0   },
];

function heatColor(pct: number) {
  if (pct >= 75) return { bg: "#0F766E", text: "#fff" };
  if (pct >= 50) return { bg: "#14B8A6", text: "#fff" };
  if (pct >= 25) return { bg: "#475569", text: "#fff" };
  if (pct > 0)   return { bg: "#F472B6", text: "#fff" };
  return { bg: "#FCA5A5", text: "#7F1D1D" };
}

function MoodDashboard() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100">Mood-o-meter Dashboard</p>
        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-green-700 bg-green-100/60 border border-green-200/60 px-2 py-0.5 rounded-full">
          <span className="w-1 h-1 rounded-full bg-green-600 animate-pulse" />Collecting
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-blue-000 border border-blue-100 p-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-blue-200 mb-1">Org sentiment</p>
          <p className="text-3xl font-bold text-dark-300 tabular-nums">50%</p>
          <p className="text-[10px] text-dark-100 mt-1">🔥 4 of 8 responded positively</p>
        </div>
        <div className="rounded-xl bg-light-100 border border-light-200 p-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-1.5">Distribution</p>
          <div className="space-y-0.5">
            {[
              { e: "😍", pct: 2 },
              { e: "😊", pct: 50 },
              { e: "😐", pct: 12.5 },
              { e: "😟", pct: 12.5 },
              { e: "😰", pct: 25 },
            ].map((m) => (
              <div key={m.e} className="flex items-center gap-1.5">
                <span className="text-[10px]">{m.e}</span>
                <div className="flex-1 h-1 bg-white rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-blue-200" style={{ width: `${m.pct}%` }} />
                </div>
                <span className="text-[8px] tabular-nums text-dark-300 w-7 text-right">{m.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-dark-100 mb-2">Team sentiment heatmap</p>
        <div className="flex items-center gap-1 mb-2 overflow-x-auto pb-1">
          {TABS.map((t, i) => (
            <span key={t} className={`text-[8px] font-bold uppercase tracking-[0.08em] px-2 py-1 rounded-full whitespace-nowrap shrink-0 ${i === 0 ? "bg-blue-200 text-white" : "bg-light-100 text-dark-100"}`}>{t}</span>
          ))}
        </div>
        <div className="rounded-lg overflow-hidden border border-light-200">
          <div className="grid" style={{ gridTemplateColumns: "1fr 60px 60px 60px" }}>
            <div className="bg-light-100 px-2 py-1.5 text-[9px] font-bold text-dark-100 uppercase tracking-[0.06em]">Department</div>
            {["Day 104","Day 105","Day 106"].map((d) => (
              <div key={d} className="bg-light-100 px-1 py-1.5 text-[9px] font-bold text-dark-100 uppercase tracking-[0.06em] text-center">{d}</div>
            ))}
            {HEATMAP_ROWS.map((r) => (
              <Fragment key={r.name}>
                <div className="px-2 py-1.5 text-[10px] font-bold text-dark-300 truncate border-t border-light-200">{r.name}</div>
                {[r.d104, r.d105, r.d106].map((v, i) => {
                  const c = heatColor(v);
                  return (
                    <div key={i} className="px-1 py-1.5 text-[9px] font-bold tabular-nums flex items-center justify-center border-t border-light-200" style={{ background: c.bg, color: c.text }}>
                      {v.toFixed(v % 1 === 0 ? 0 : 2)}%
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ARCHIVE_ROWS = [
  { start: "16 Jan", end: "16 Jan",  pct: 40.0,  delta: 0.0,   dir: "up"   as const },
  { start: "15 Jan", end: "16 Jan",  pct: 0.0,   delta: 16.7,  dir: "down" as const },
  { start: "14 Jan", end: "15 Jan",  pct: 16.7,  delta: 6.7,   dir: "up"   as const },
  { start: "13 Jan", end: "14 Jan",  pct: 10.0,  delta: 18.6,  dir: "down" as const },
  { start: "12 Jan", end: "13 Jan",  pct: 28.6,  delta: 0.0,   dir: "up"   as const },
  { start: "10 Jan", end: "11 Jan",  pct: 0.0,   delta: 45.5,  dir: "down" as const },
  { start: "18 Dec", end: "10 Jan",  pct: 45.5,  delta: 0.0,   dir: "up"   as const, baseline: true },
];

function ArchiveTable() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-100">View archives</p>
        <span className="text-[9px] text-white/55">7 entries</span>
      </div>
      <div className="rounded-lg border border-white/10 overflow-hidden">
        <div className="grid bg-white/5 px-2 py-1.5" style={{ gridTemplateColumns: "1fr 1fr 80px 70px" }}>
          {["Start","End","Avg score","Delta"].map((h) => (
            <span key={h} className="text-[9px] font-bold uppercase tracking-[0.06em] text-white/55">{h}</span>
          ))}
        </div>
        {ARCHIVE_ROWS.map((r, i) => (
          <div key={i} className="grid px-2 py-1.5 border-t border-white/10" style={{ gridTemplateColumns: "1fr 1fr 80px 70px" }}>
            <span className="text-[10px] text-white">{r.start}, 2026</span>
            <span className="text-[10px] text-white/70 flex items-center gap-1">
              {r.end}, 2026
              {r.baseline && <span className="text-[8px] font-bold text-blue-100 bg-blue-200/20 px-1 py-px rounded">1st RUN</span>}
            </span>
            <span className="text-[10px] font-bold text-white tabular-nums">{r.pct.toFixed(1)}%</span>
            <span className={`text-[10px] font-bold tabular-nums ${r.dir === "up" ? "text-green-300" : "text-red-300"}`}>{r.dir === "up" ? "↗" : "↘"} {r.delta.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnonymityList() {
  return (
    <div className="space-y-1.5">
      {["No individual tracking", "Anonymity settings", "Aggregated scores only"].map((c) => (
        <div key={c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">🔒</span>
          <span className="text-[10px] font-bold text-white">{c}</span>
        </div>
      ))}
    </div>
  );
}

function SegmentationList() {
  const dims = ["Department", "Designation", "Location", "Business Unit", "Grade", "Cost Center", "Manager", "Tenure"];
  return (
    <div className="flex flex-wrap gap-1.5">
      {dims.map((d) => (
        <span key={d} className="text-[10px] font-bold text-blue-200 bg-blue-000 border border-blue-100 px-2 py-1 rounded-full">{d}</span>
      ))}
    </div>
  );
}

function FrictionList() {
  return (
    <div className="space-y-1.5">
      {[
        { e: "📰", c: "In-feed widget"  },
        { e: "🤝", c: "Next to recognition, posts, polls" },
        { e: "🚫", c: "No separate login" },
      ].map((it) => (
        <div key={it.c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{it.e}</span>
          <span className="text-[10px] font-bold text-white">{it.c}</span>
        </div>
      ))}
    </div>
  );
}

function ConfigurableList() {
  const items = [
    { e: "❓", c: "Custom question" },
    { e: "🗓", c: "Custom cadence" },
    { e: "🔢", c: "Min-group threshold" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it) => (
        <div key={it.c} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{it.e}</span>
          <span className="text-[10px] font-bold text-white">{it.c}</span>
        </div>
      ))}
    </div>
  );
}

function PeriodDelta() {
  return (
    <div className="space-y-1.5">
      <div className="rounded-lg bg-green-100/40 border border-green-200/50 px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] font-bold text-green-700">↗ improvement</span>
        <span className="text-[10px] font-bold text-dark-300 tabular-nums">+6.7%</span>
      </div>
      <div className="rounded-lg bg-red-100/30 border border-red-200/40 px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] font-bold text-red-700">↘ decline</span>
        <span className="text-[10px] font-bold text-dark-300 tabular-nums">-16.7%</span>
      </div>
      <div className="rounded-lg bg-light-100 border border-light-200 px-3 py-2 flex items-center justify-between">
        <span className="text-[10px] font-bold text-dark-100">Export full mood data</span>
        <span className="text-[10px] font-bold text-blue-200">CSV →</span>
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
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Daily check-in. Org-wide insight.</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Anonymous, segmented, archived — by design</h2>
          <p className="text-dark-100 text-base leading-relaxed">Live dashboard, 8-dimension segmentation, archive history with period deltas, and zero-friction in-feed entry — built around the principle that the only sustainable check-in is a frictionless one.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Trust</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Always anonymous</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Individual responses are never exposed — not to managers, not to HR. Only aggregated % positive scores, with a configurable min-group threshold.</p>
            <AnonymityList />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Slice</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">8-dimension segmentation</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Slice the heatmap by Department, Designation, Location, Business Unit, Grade, Cost Center, Manager, or Tenure — with a single tab switch.</p>
            <SegmentationList />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Friction</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Zero-friction check-in</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">The widget lives directly in the Empuls feed — right alongside recognition, posts, and polls. No separate tool, no extra step.</p>
            <FrictionList />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.15, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Live dashboard</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Org sentiment score. Team heatmap. One view.</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Exactly what % of employees are feeling positive — broken down by department, location, tenure, and 5 more dimensions.</p>
            <MoodDashboard />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Export</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Period-over-period delta</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Every archived run shows how the score changed from the previous cycle — green up, red down. Plus full CSV export from the three-dot menu.</p>
            <PeriodDelta />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Archive &amp; history</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Every run saved. Every shift visible.</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Mood-o-meter automatically archives each collection cycle — so HR can spot seasonal patterns and measure whether interventions actually moved the needle.</p>
            <ArchiveTable />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Configurable</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Custom question. Custom cadence.</h3>
            <p className="text-xs text-dark-000 leading-relaxed mb-4">Admins set the daily question, frequency, and anonymity threshold from the three-dot menu. Sensible defaults out of the box — every team can dial in their own.</p>
            <ConfigurableList />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
