"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function FitnessTiles() {
  const tiles = [
    { e: "🧘", l: "CultFit",     pts: "1,200" },
    { e: "🏃", l: "ClassPass",   pts: "1,000" },
    { e: "🚴", l: "Peloton",     pts: "1,400" },
    { e: "🏋️", l: "Planet Fit",  pts: "800" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {tiles.map((t) => (
        <div key={t.l} className="rounded-lg bg-white border border-light-200 p-2.5">
          <span className="text-base">{t.e}</span>
          <p className="text-[11px] font-bold text-dark-300 mt-1 truncate">{t.l}</p>
          <p className="text-[9px] text-blue-200 font-bold tabular-nums">{t.pts} pts</p>
        </div>
      ))}
    </div>
  );
}

function CheckupPackage() {
  const tests = [
    { l: "Full body screening",   on: true },
    { l: "Lipid profile",          on: true },
    { l: "Diabetes panel",         on: true },
    { l: "Vitamin D &amp; B12",    on: true },
    { l: "Eye exam",               on: false },
  ];
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Annual checkup</p>
        <span className="text-[9px] font-bold text-dark-300 tabular-nums">900 pts</span>
      </div>
      <div className="space-y-1">
        {tests.map((t) => (
          <div key={t.l} className="flex items-center gap-2 text-[10px]">
            <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${t.on ? "bg-blue-200 text-white" : "bg-light-200 text-dark-100"}`}>
              {t.on ? "✓" : ""}
            </div>
            <span className={`flex-1 ${t.on ? "text-dark-300 font-bold" : "text-dark-100"}`} dangerouslySetInnerHTML={{ __html: t.l }} />
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-light-200 text-[9px] text-dark-100">At-home sample collection · digital report</div>
    </div>
  );
}

function PharmacyTracker() {
  const reduce = useReducedMotion();
  const [step, set] = (() => {
    // simple pulse effect controlled inline below
    return [0, () => {}] as const;
  })();
  const events = [
    { l: "Ordered",          done: true },
    { l: "Packed",            done: true },
    { l: "Out for delivery",  done: true },
    { l: "Delivered",         done: false },
  ];
  return (
    <div className="space-y-1.5">
      {events.map((e, i) => (
        <div key={e.l} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${e.done ? "bg-green-300 text-white" : "bg-white/10 text-white/55"}`}>
            {e.done ? "✓" : i+1}
          </div>
          <p className={`flex-1 text-[10px] ${e.done ? "text-white font-bold" : "text-white/55"}`}>{e.l}</p>
          {e.done && <span className="text-[9px] text-green-300 font-bold">{["10:42a", "11:15a", "12:30p"][i]}</span>}
        </div>
      ))}
    </div>
  );
}

function MentalHealthBooking() {
  return (
    <div>
      <div className="rounded-xl bg-light-100 border border-light-200 p-3 mb-2">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-200">Therapy session</p>
          <span className="text-[9px] font-bold text-green-700 bg-green-100 border border-green-200/50 px-2 py-0.5 rounded-full">CONFIDENTIAL</span>
        </div>
        <p className="text-[12px] font-bold text-dark-300">Tuesday · 4:00 PM</p>
        <p className="text-[10px] text-dark-100 mt-0.5">Licensed therapist · 50-minute session</p>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["3 used", "2 left", "EAP"].map((s) => (
          <div key={s} className="text-center rounded-md bg-light-100 border border-light-200 px-1 py-1">
            <p className="text-[10px] font-bold text-dark-300">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FamilyServices() {
  const items = [
    { e: "👶", l: "Pediatric care" },
    { e: "👵", l: "Senior care" },
    { e: "🐕", l: "Pet care" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((i) => (
        <div key={i.l} className="flex items-center gap-2 bg-light-100 border border-light-200 rounded-lg px-2.5 py-1.5">
          <span className="text-base">{i.e}</span>
          <p className="flex-1 text-[10px] font-bold text-dark-300">{i.l}</p>
          <span className="text-[9px] font-bold text-blue-200">Covered</span>
        </div>
      ))}
    </div>
  );
}

function StepathonLeaderboard() {
  const reps = [
    { initials: "SM", name: "Sarah M.",  steps: "12,840" },
    { initials: "DT", name: "Daniel T.", steps: "11,205" },
    { initials: "MH", name: "Megan H.",  steps: "10,418" },
    { initials: "AJ", name: "Andrew J.", steps: "9,876"  },
  ];
  return (
    <div className="space-y-1.5">
      {reps.map((r, i) => (
        <div key={r.initials} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <span className="w-4 text-center text-[10px] font-bold text-white/55">#{i + 1}</span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0" style={{ background: "linear-gradient(135deg,#1D61F6,#6f8eff)" }}>{r.initials}</div>
          <p className="flex-1 text-[10px] font-bold text-white truncate">{r.name}</p>
          <span className="text-[9px] font-bold text-blue-100 tabular-nums">{r.steps}</span>
        </div>
      ))}
    </div>
  );
}

function ReportingDashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {[
          { v: "78%",  l: "Engagement" },
          { v: "42",   l: "Programs" },
          { v: "$38K", l: "Saved" },
        ].map((s) => (
          <div key={s.l} className="rounded-md bg-white border border-light-200 p-2 text-center">
            <p className="text-base font-bold text-dark-300 tabular-nums">{s.v}</p>
            <p className="text-[8px] text-dark-100 uppercase tracking-[0.08em] mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {[
          { l: "Fitness",      pct: 82 },
          { l: "Checkups",     pct: 68 },
          { l: "Mental health",pct: 51 },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-dark-300 w-[68px] truncate">{s.l}</span>
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

const TILES = [
  { tag: "Fitness & movement",  title: "Keep teams active and energized",      body: "Discounted gym, yoga, and fitness app memberships from a curated partner network.",                                            Viz: FitnessTiles,         span: "lg:col-span-2", dark: false },
  { tag: "Health checkups",     title: "Preventive care, easy to access",       body: "Routine screenings, full body checkups, and at-home sample collection through certified labs.",                                  Viz: CheckupPackage,       span: "",              dark: false },
  { tag: "Pharmacy",            title: "Medicines delivered to the door",       body: "Prescription and OTC delivery through partner pharmacies — orders placed and tracked in-app.",                                    Viz: PharmacyTracker,      span: "",              dark: true  },
  { tag: "Mental health",       title: "Resilience, balance, EAP support",      body: "Licensed therapists, confidential counseling, and mental wellness programs — covered through the same wallet.",                  Viz: MentalHealthBooking,  span: "",              dark: false },
  { tag: "Care for loved ones", title: "Families covered too",                  body: "Discounted checkups, doctor visits, pediatric, senior, and pet care for the people employees go home to.",                       Viz: FamilyServices,       span: "",              dark: false },
  { tag: "Activity challenges", title: "Stepathons + live leaderboards",        body: "Company-wide step competitions and fitness challenges with monthly leaderboards and milestone rewards.",                          Viz: StepathonLeaderboard, span: "",              dark: true  },
  { tag: "Reporting",           title: "Engagement &amp; outcome analytics",    body: "Real-time program participation, top categories, and savings — exportable for finance and leadership.",                          Viz: ReportingDashboard,   span: "lg:col-span-2", dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Five wellness categories</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Every dimension of wellbeing &mdash; one platform</h2>
          <p className="text-dark-100 text-base leading-relaxed">Fitness, checkups, pharmacy, mental health, and care for loved ones &mdash; plus activity challenges and outcome analytics.</p>
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
                <h3 className={`text-base lg:text-lg font-bold leading-snug mb-2 ${t.dark ? "text-white" : "text-dark-300"}`} dangerouslySetInnerHTML={{ __html: t.title }} />
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
