"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0, 0, 0.2, 1] as const;

const STAGES = [
  { e: "🎉", label: "Onboarding",  pill: "DAY 30",         color: "#1D61F6" },
  { e: "🎓", label: "L&D",          pill: "AFTER TRAINING", color: "#3B82F6" },
  { e: "👤", label: "Manager check-in", pill: "EVERY QUARTER", color: "#6366F1" },
  { e: "⭐", label: "Performance",  pill: "EVERY 2 MONTHS", color: "#7C3AED" },
  { e: "🌍", label: "DEIB",         pill: "EVERY YEAR",     color: "#A855F7" },
  { e: "🚪", label: "Exit",         pill: "AT EXIT",        color: "#F97316" },
];

const TRIGGERS = [
  { e: "🎉", trigger: "New hire reaches Day 30",          send: "30-Day Onboarding Check-in",   q: "10 questions", state: "ACTIVE" },
  { e: "🎓", trigger: "Training marked complete in LMS",  send: "L&D Effectiveness Survey",     q: "8 questions",  state: "ACTIVE" },
  { e: "⭐", trigger: "Performance cycle ends (bi-monthly)", send: "Performance Review Feedback", q: "11 questions", state: "ACTIVE" },
  { e: "🚪", trigger: "Departure date set in HRIS",       send: "Exit Interview Survey",        q: "15 questions", state: "ACTIVE" },
];

function MomentCard({ emoji, pill, pillColor, title, body, dark }: { emoji: string; pill: string; pillColor: string; title: string; body: string; dark?: boolean }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full" style={{ background: pillColor + "20", color: pillColor }}>{pill}</span>
      </div>
      <h3 className={`text-base font-bold leading-snug mb-2 ${dark ? "text-white" : "text-dark-300"}`}>{title}</h3>
      <p className={`text-xs leading-relaxed ${dark ? "text-dark-000" : "text-dark-100"}`}>{body}</p>
    </div>
  );
}

function JourneyTimeline() {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.10em] text-blue-100 mb-3">Employee journey · 6 touchpoints</p>
      <div className="relative">
        <div className="absolute left-0 right-0 top-[18px] h-px bg-white/10" />
        <div className="relative grid grid-cols-6 gap-1">
          {STAGES.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base shadow-sm" style={{ background: s.color + "30", border: `1px solid ${s.color}50` }}>{s.e}</div>
              <p className="text-[9px] font-bold text-white text-center leading-tight">{s.label}</p>
              <p className="text-[7px] font-bold uppercase tracking-[0.06em] text-white/55 text-center leading-tight">{s.pill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActiveTriggersCard() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[11px] font-bold text-dark-300">Active Lifecycle Triggers</p>
        <span className="text-[9px] font-bold text-green-300 bg-green-300/15 px-2 py-0.5 rounded-full">6 ACTIVE</span>
      </div>
      {TRIGGERS.map((t) => (
        <div key={t.trigger} className="flex items-start gap-2.5 bg-white border border-light-200 rounded-lg px-2.5 py-2">
          <span className="text-base shrink-0">{t.e}</span>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-dark-300 truncate">{t.trigger}</p>
            <p className="text-[9px] text-dark-100">→ <span className="font-bold">{t.send}</span> · {t.q}</p>
          </div>
          <span className="text-[8px] font-bold text-green-300 bg-green-300/15 px-1.5 py-0.5 rounded-full whitespace-nowrap">{t.state}</span>
        </div>
      ))}
      <div className="text-[10px] text-dark-100 pt-1">Last fired: Jun 18 · Sarah Chen → Onboarding</div>
    </div>
  );
}

export default function FeatureBento() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Employee journey</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Every touchpoint. Automatically covered.</h2>
          <p className="text-dark-100 text-base leading-relaxed">Empuls listens at each critical moment in the employee lifecycle — triggered by events in your HRIS, not by reminders on someone's calendar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="🎉" pill="DAY 30"         pillColor="#1D61F6" title="Onboarding Feedback"     body="Understand if new hires have the clarity, tools, and team connection they need to succeed. Spot integration issues before they compound into early attrition." />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="🎓" pill="AFTER TRAINING" pillColor="#3B82F6" title="L&D Feedback"             body="Gauge learning effectiveness and relevance immediately after every training session. Use responses to improve future programs and track skill application over time." />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="👤" pill="EVERY QUARTER" pillColor="#6366F1" title="Manager Efficiency"       body="Give employees a regular, anonymous channel to assess their manager's effectiveness. Build a consistent feedback loop that develops leadership across the organisation." dark />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.15, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="⭐" pill="EVERY 2 MONTHS" pillColor="#7C3AED" title="Performance Review"       body="Collect structured feedback around performance cycles. Multi-rater support enables peer and self-assessment alongside manager input in a single coordinated survey." />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="🌍" pill="EVERY YEAR"     pillColor="#A855F7" title="Diversity & Inclusion"   body="Run an annual DEIB assessment to understand how included and valued employees feel across different demographics, locations, and levels. Benchmarked and fully anonymous." />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.25, ease }}
            className="rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <MomentCard emoji="🚪" pill="AT EXIT"        pillColor="#F97316" title="Exit Interview"         body="Capture honest exit feedback before institutional knowledge walks out the door. Triggers automatically when an employee's departure date is logged in your HRIS." dark />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3, ease }}
            className="lg:col-span-2 rounded-2xl p-6 bg-dark-300 border border-white/10 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-100">Journey overview</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-white">Six lifecycle moments. One automated track.</h3>
            <p className="text-xs leading-relaxed mb-5 text-dark-000">From day-30 onboarding to the exit interview — Empuls covers every critical employee touchpoint without manual scheduling.</p>
            <JourneyTimeline />
          </motion.div>

          <motion.div initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.35, ease }}
            className="rounded-2xl p-6 bg-light-100 border border-light-200 hover:shadow-menu hover:-translate-y-1 transition-all duration-200">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] mb-2 text-blue-200">Event triggers</p>
            <h3 className="text-base lg:text-lg font-bold leading-snug mb-2 text-dark-300">Every active trigger, one console</h3>
            <p className="text-xs text-dark-100 leading-relaxed mb-4">Each rule fires automatically when its qualifying event lands in your HRIS.</p>
            <ActiveTriggersCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
