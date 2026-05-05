"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

function PulseCardViz() {
  return (
    <div className="rounded-xl bg-white border border-light-200 p-3.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[9px] font-bold uppercase tracking-[0.10em] text-blue-200">Q1 of 5</span>
        <span className="text-[9px] font-bold text-dark-100 bg-light-200 px-2 py-0.5 rounded-full">Work-life</span>
      </div>
      <p className="text-[11px] font-bold text-dark-300 leading-tight mb-2.5">How satisfied are you with your workload this week?</p>
      <div className="flex items-center justify-between gap-1">
        {["😰", "😟", "😐", "😊", "😍"].map((e, i) => (
          <div key={i} className={`flex-1 aspect-square rounded-lg flex items-center justify-center text-base ${i === 3 ? "bg-blue-000 border-2 border-blue-200" : "bg-light-100 border border-light-200"}`}>{e}</div>
        ))}
      </div>
    </div>
  );
}

function LifecycleTimelineViz() {
  const stops = [
    { e: "🎉", l: "Day 30" },
    { e: "🎓", l: "Training" },
    { e: "👤", l: "Quarter" },
    { e: "🚪", l: "Exit" },
  ];
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-1/2 h-px bg-light-200 -translate-y-1/2" />
      <div className="relative flex items-center justify-between">
        {stops.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-white border border-light-200 flex items-center justify-center text-base shadow-sm">{s.e}</div>
            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-dark-100">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionPlanList() {
  const items = [
    { task: "Address work pressure in Design", driver: "Retention",  status: "Active", color: "#1D61F6" },
    { task: "Career growth workshops",         driver: "Mgmt & Ldp", status: "Active", color: "#1D61F6" },
    { task: "Manager onboarding training",     driver: "Teamwork",   status: "Done",   color: "#34D399" },
  ];
  return (
    <div className="space-y-1.5">
      {items.map((it) => (
        <div key={it.task} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-white truncate">{it.task}</p>
            <p className="text-[9px] text-white/50 truncate">{it.driver}</p>
          </div>
          <span className="text-[9px] font-bold tabular-nums" style={{ color: it.color }}>{it.status === "Done" ? "✓" : ""} {it.status}</span>
        </div>
      ))}
    </div>
  );
}

function MoodViz() {
  const [active, setActive] = useState(3);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setActive((p) => (p + 1) % 5), 1500);
    return () => clearInterval(t);
  }, [reduce]);
  const moods = [
    { e: "😰", l: "Stressed" },
    { e: "😟", l: "A bit low" },
    { e: "😐", l: "Neutral" },
    { e: "😊", l: "Happy" },
    { e: "😍", l: "Very happy" },
  ];
  return (
    <div>
      <p className="text-[11px] text-dark-300 mb-2 font-semibold">How are you feeling today?</p>
      <div className="flex items-center justify-between gap-1.5">
        {moods.map((m, i) => (
          <motion.div key={m.l}
            animate={{ scale: active === i ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className={`flex-1 flex flex-col items-center gap-0.5 rounded-lg py-1.5 ${active === i ? "bg-blue-000 border border-blue-200" : "bg-light-100 border border-light-200"}`}>
            <span className="text-base">{m.e}</span>
            <span className="text-[8px] font-bold text-dark-100 truncate">{m.l}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AiThemes() {
  const themes = [
    { theme: "Workload",              quote: "&ldquo;Sprint cycles too tight, no time for deep work&rdquo;", pct: 42, tone: "Concern", color: "#F97316" },
    { theme: "Manager communication", quote: "&ldquo;1:1s feel rushed, agenda always around tickets&rdquo;",  pct: 28, tone: "Watch",   color: "#F59E0B" },
    { theme: "Career growth",         quote: "&ldquo;No clear path past Senior IC, want to know L7 expectations&rdquo;", pct: 18, tone: "Watch", color: "#F59E0B" },
  ];
  return (
    <div className="space-y-2">
      {themes.map((t) => (
        <div key={t.theme} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] font-bold text-white">{t.theme}</p>
            <span className="text-[9px] font-bold uppercase tracking-[0.10em]" style={{ color: t.color }}>{t.tone} · {t.pct}%</span>
          </div>
          <p className="text-[10px] text-white/55 italic leading-snug" dangerouslySetInnerHTML={{ __html: t.quote }} />
        </div>
      ))}
    </div>
  );
}

function TrendAndDept() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const depts = [
    { name: "Engineering",       score: 4.6, pct: 92 },
    { name: "Product",           score: 4.4, pct: 88 },
    { name: "Marketing",         score: 4.2, pct: 84 },
    { name: "Sales",             score: 4.0, pct: 80 },
    { name: "Customer Support",  score: 3.6, pct: 72 },
    { name: "HR & Ops",          score: 4.3, pct: 86 },
  ];
  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.10em] text-dark-100 mb-1 font-bold">Trend · 6 months</p>
          <svg viewBox="0 0 220 70" className="w-full h-16">
            <defs>
              <linearGradient id="surv-trend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"  stopColor="rgba(29,97,246,0.45)" />
                <stop offset="100%" stopColor="rgba(29,97,246,0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,60 L40,52 L80,46 L120,40 L160,30 L200,18 L220,14 L220,70 L0,70 Z"
              fill="url(#surv-trend)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={reduce ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
            />
            <motion.path
              d="M0,60 L40,52 L80,46 L120,40 L160,30 L200,18 L220,14"
              fill="none" stroke="#1D61F6" strokeWidth="2.2" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: 1 } : {}}
              transition={reduce ? { duration: 0 } : { duration: 1.4, ease }}
            />
          </svg>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-base font-bold text-dark-300 tabular-nums">4.39<span className="text-[10px] text-dark-100">/5</span></span>
            <span className="text-[10px] font-bold text-green-300">↑ +0.59 since Jan</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.10em] text-dark-100 mb-1 font-bold">By department</p>
          <div className="space-y-1">
            {depts.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <span className="text-[9px] font-bold text-dark-300 w-[68px] truncate shrink-0">{d.name}</span>
                <div className="flex-1 h-1.5 bg-light-200 rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: d.score >= 4 ? "#1D61F6" : "#F97316" }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${d.pct}%` } : {}}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, delay: i * 0.05, ease }} />
                </div>
                <span className="text-[9px] font-bold text-dark-300 tabular-nums w-7 text-right">{d.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-orange-100/15 border border-orange-200/30 px-3 py-2">
        <p className="text-[10px] font-bold text-dark-300">⚠️ Action needed: Customer Support — score dropped 0.4 from Q1.</p>
        <p className="text-[10px] text-dark-100 mt-0.5">AI identified &ldquo;workload&rdquo; and &ldquo;manager communication&rdquo; as top themes.</p>
      </div>
    </div>
  );
}

function TemplatesGrid() {
  const tpl = [
    { name: "Engagement",     q: "12 Q · Likert" },
    { name: "30/60/90",       q: "10 Q · New hire" },
    { name: "Exit",           q: "15 Q · Confidential" },
    { name: "Manager 360",    q: "10 Q · Multi-rater" },
    { name: "WFH Check-in",   q: "8 Q · Weekly" },
    { name: "DEI Assessment", q: "14 Q · Anonymous" },
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {tpl.map((t) => (
        <div key={t.name} className="rounded-lg bg-light-100 border border-light-200 px-2 py-1.5">
          <p className="text-[10px] font-bold text-dark-300 truncate">{t.name}</p>
          <p className="text-[9px] text-dark-100 truncate">{t.q}</p>
        </div>
      ))}
    </div>
  );
}

const TILES = [
  { tag: "Listen",       title: "Pulse Surveys",         body: "Run quick, recurring check-ins to track engagement over time. Spot trends before they become problems — weekly, monthly, or quarterly.", Viz: PulseCardViz,         span: "",              dark: false },
  { tag: "Lifecycle",    title: "Lifecycle Surveys",     body: "Capture feedback at onboarding, milestones, and exit. Understand each stage of the employee journey with automatically triggered surveys.",     Viz: LifecycleTimelineViz, span: "",              dark: false },
  { tag: "Act",          title: "Action Plans",          body: "Turn survey insights into measurable improvements. Assign action items to managers, set deadlines, and track resolution — all inside Empuls.", Viz: ActionPlanList, span: "",              dark: true  },
  { tag: "Daily",        title: "Mood-o-meter",          body: "Get a real-time read on how your teams are feeling, every single day. A lightweight daily pulse that employees actually respond to.",            Viz: MoodViz,              span: "",              dark: false },
  { tag: "AI",           title: "AI Sentiment Analysis", body: "Surface themes and emotions hidden in open-ended responses. AI clusters feedback, flags concerns, and presents manager-ready summaries automatically.", Viz: AiThemes, span: "lg:col-span-2", dark: true  },
  { tag: "Deep analytics", title: "Trends over time. Gaps by department.", body: "Move beyond average scores. See where engagement is falling, which teams need attention, and how scores have shifted since last cycle.", Viz: TrendAndDept, span: "lg:col-span-2", dark: false },
  { tag: "Templates",    title: "50+ validated templates", body: "Build your own surveys from scratch or choose from a library covering peer reviews, 360 feedback, quizzes — every format supported.",     Viz: TemplatesGrid,        span: "",              dark: false },
];

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Six ways to listen</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">A complete listening stack — not a survey tool</h2>
          <p className="text-dark-100 text-base leading-relaxed">Pulse, lifecycle, mood-o-meter, AI sentiment, deep analytics, and a template library — designed to work together, not as standalone features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {TILES.map((t, i) => {
            const Viz = t.Viz;
            return (
              <motion.div key={t.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                className={`${t.span} rounded-2xl p-6 ${t.dark ? "bg-dark-300 border border-white/10" : "bg-light-100 border border-light-200"} hover:shadow-menu hover:-translate-y-1 transition-all duration-200`}>
                <p className={`text-[10px] font-bold uppercase tracking-[0.14em] mb-2 ${t.dark ? "text-blue-100" : "text-blue-200"}`}>{t.tag}</p>
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
