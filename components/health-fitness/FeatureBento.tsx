"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function TemplatesViz() {
  const tpls = [
    { e: "👟", l: "Stepathon",      sub: "Daily steps · Monthly" },
    { e: "💪", l: "Workout Warrior", sub: "Minutes · Weekly" },
    { e: "🏃", l: "5K Weekend Run",  sub: "Kilometres · Weekly" },
    { e: "🏃‍♀️", l: "10K Weekend Run", sub: "Kilometres · Weekly" },
    { e: "🏅", l: "Half Marathon",   sub: "21.1 km · Monthly" },
    { e: "🏆", l: "Full Marathon",   sub: "42.2 km · Monthly" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {tpls.map((t) => (
        <div key={t.l} className="rounded-lg bg-white border border-light-200 px-2.5 py-2">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-sm">{t.e}</span>
            <p className="text-[10px] font-bold text-dark-300 truncate">{t.l}</p>
          </div>
          <p className="text-[8px] text-dark-100 truncate">{t.sub}</p>
        </div>
      ))}
    </div>
  );
}

function MilestoneRoadmapViz() {
  const stops = [
    { l: "5K",  pts: 200,  state: "done"   },
    { l: "10K", pts: 500,  state: "active" },
    { l: "15K", pts: 1000, state: "locked" },
    { l: "20K", pts: 1500, state: "locked" },
  ];
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Milestone roadmap</p>
        <span className="text-[9px] font-bold text-dark-100">3,200 / wk</span>
      </div>
      <div className="flex items-center">
        {stops.map((s, i) => (
          <div key={s.l} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold border-2 ${s.state === "done" ? "bg-green-300 border-green-300 text-white" : s.state === "active" ? "bg-blue-200 border-blue-200 text-white" : "bg-light-100 border-light-200 text-dark-100"}`}>
                {s.state === "done" ? "✓" : s.l}
              </div>
              <span className={`text-[8px] font-bold mt-1 tabular-nums ${s.state === "done" ? "text-green-700" : s.state === "active" ? "text-blue-200" : "text-dark-100"}`}>{s.pts} pts</span>
            </div>
            {i < stops.length - 1 && <div className={`flex-1 h-0.5 mx-1 ${s.state === "done" ? "bg-green-300" : "bg-light-200"}`} />}
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaderboardViz() {
  const reps = [
    { i: "SM", name: "Sarah M.",  steps: "12,840" },
    { i: "DT", name: "Daniel T.", steps: "11,205" },
    { i: "MH", name: "Megan H.",  steps: "10,418", you: true },
    { i: "AJ", name: "Andrew J.", steps: "9,876" },
  ];
  return (
    <div className="space-y-1.5">
      {reps.map((r, i) => (
        <div key={r.i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="w-4 text-center text-[10px] font-bold text-white/55">#{i + 1}</span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>{r.i}</div>
          <p className="flex-1 text-[10px] font-bold text-white truncate">{r.name}{r.you && <span className="ml-1 text-[8px] font-bold text-blue-100">YOU</span>}</p>
          <span className="text-[9px] font-bold text-blue-100 tabular-nums">{r.steps}</span>
        </div>
      ))}
    </div>
  );
}

function GiftViz() {
  return (
    <div className="rounded-xl bg-light-100 border border-light-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Milestone hit · 10K</p>
        <span className="text-[9px] font-bold text-green-700 bg-green-100 border border-green-200/50 px-2 py-0.5 rounded-full">+ Gift</span>
      </div>
      <div className="flex items-center gap-3 bg-white border border-light-200 rounded-lg px-3 py-2">
        <span className="text-2xl">🎁</span>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-dark-300">Planet Fitness · 1 month</p>
          <p className="text-[9px] text-dark-100">+ 500 wellness points</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mt-2">
        <div className="rounded-md bg-white border border-light-200 p-1.5 text-center">
          <p className="text-[9px] font-bold uppercase text-dark-100">Pts</p>
          <p className="text-xs font-bold text-blue-200">500</p>
        </div>
        <div className="rounded-md bg-white border border-light-200 p-1.5 text-center">
          <p className="text-[9px] font-bold uppercase text-dark-100">Gift</p>
          <p className="text-xs font-bold text-blue-200">$30</p>
        </div>
      </div>
    </div>
  );
}

function TrackerSyncViz() {
  const trackers = [
    { e: "🍎", l: "Apple"   },
    { e: "G",  l: "Google"  },
    { e: "Fb", l: "Fitbit"  },
    { e: "St", l: "Strava"  },
    { e: "S",  l: "Samsung" },
    { e: "Gr", l: "Garmin"  },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {trackers.map((t) => (
          <div key={t.l} className="flex flex-col items-center gap-0.5 rounded-lg bg-light-100 border border-light-200 px-1.5 py-1.5">
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white border border-light-200 text-[10px] font-bold text-dark-300">{t.e}</span>
            <span className="text-[9px] font-bold text-dark-300">{t.l}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-white border border-light-200 rounded-lg px-2.5 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
        <p className="flex-1 text-[10px] font-bold text-dark-300">Activity syncing</p>
        <span className="text-[9px] font-bold text-green-700">LIVE</span>
      </div>
    </div>
  );
}

function ResetViz() {
  return (
    <div>
      <div className="rounded-xl bg-white/8 border border-white/15 p-3 mb-2">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-100">April · Stepathon</p>
          <span className="text-[9px] font-bold text-orange-200">5 days left</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-blue-200" style={{ width: "82%" }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-white/55">Stepathon</p>
          <p className="text-[10px] font-bold text-white">Monthly reset</p>
        </div>
        <div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.10em] text-white/55">Workout</p>
          <p className="text-[10px] font-bold text-white">Weekly reset</p>
        </div>
      </div>
    </div>
  );
}

function AdminViz() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {[
          { v: "41",   l: "Active"   },
          { v: "3",    l: "Excluded" },
          { v: "100%", l: "Synced"   },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-white border border-light-200 p-2 text-center">
            <p className="text-base font-bold text-dark-300 tabular-nums">{s.v}</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {[
          { l: "Activity logs",    on: true },
          { l: "Date-range filter", on: true },
          { l: "Search by email",   on: true },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-md px-2 py-1">
            <span className="w-3 h-3 rounded-full bg-green-300 flex items-center justify-center text-[7px] font-bold text-white">✓</span>
            <span className="text-[10px] font-bold text-dark-300 flex-1">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TILES = [
  { tag: "Challenge library",   title: "Six ready-to-launch templates",        body: "Stepathon, Workout Warrior, 5K, 10K, Half Marathon (21.1 km), and Full Marathon (42.2 km) &mdash; configurable in minutes.",     Viz: TemplatesViz,        span: "lg:col-span-2", dark: false },
  { tag: "Milestone rewards",   title: "Visual roadmap, automatic credit",      body: "Every threshold on the roadmap auto-credits points to the wallet. Optional gift cards delivered alongside.",                       Viz: MilestoneRoadmapViz, span: "",              dark: false },
  { tag: "Live leaderboards",   title: "Rankings update in real time",          body: "Employees see their rank, top performers, and personal progress as activity syncs &mdash; no manual logging required.",            Viz: LeaderboardViz,      span: "",              dark: true  },
  { tag: "Gift attachments",    title: "Pair points with real-world rewards",   body: "Attach gift cards to any milestone during setup. Reward values can be edited on active challenges &mdash; changes are immediate.",  Viz: GiftViz,             span: "",              dark: false },
  { tag: "Device integrations", title: "Six trackers sync continuously",        body: "Apple Health, Google Fit, Fitbit, Strava, Samsung Health, Garmin &mdash; one-time setup, background sync.",                          Viz: TrackerSyncViz,      span: "",              dark: false },
  { tag: "Resets &amp; runs",   title: "Monthly, weekly, or custom",            body: "Stepathon resets monthly. Workout Warrior resets weekly. Multiple challenges run simultaneously without conflict.",                  Viz: ResetViz,            span: "",              dark: true  },
  { tag: "Admin tools",         title: "Full activity logs and exclusions",     body: "Per-participant activity logs with date-range filtering, search by name or email, and exclusion lists for admins or test accounts.", Viz: AdminViz,            span: "lg:col-span-2", dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Everything in one fitness module</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Six templates, six trackers, one wallet</h2>
          <p className="text-dark-100 text-base leading-relaxed">Pick a challenge, attach milestone rewards, sync devices &mdash; the whole loop runs inside Empuls without spreadsheets or manual logging.</p>
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
                <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-2 ${t.dark ? "text-blue-100" : "text-blue-200"}`} dangerouslySetInnerHTML={{ __html: t.tag }} />
                <h3 className={`text-base lg:text-lg font-bold leading-snug mb-2 ${t.dark ? "text-white" : "text-dark-300"}`}>{t.title}</h3>
                <p className={`text-xs leading-relaxed mb-4 ${t.dark ? "text-dark-000" : "text-dark-100"}`} dangerouslySetInnerHTML={{ __html: t.body }} />
                <Viz />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
