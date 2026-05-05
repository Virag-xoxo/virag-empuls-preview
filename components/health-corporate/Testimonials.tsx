"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FEATURED = {
  company: "HSBC",
  industry: "Banking · 220,000 employees",
  metric: "91",
  metricSuffix: "%",
  metricLabel: "annual checkup completion",
  metricContext: "of eligible employees completed their annual health checkup in the first program quarter through at-home sample collection",
  quote: "Doorstep diagnostics and digital reports turned an annual reminder we used to chase into a benefit people actually book — without HR following up.",
  name: "Aisha Patel",
  title: "Director, Total Rewards",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
};

const COMPACT = [
  {
    company: "Wipro",
    industry: "IT services · 240,000 employees",
    metric: "38",
    metricSuffix: "%",
    metricLabel: "reduction in sick days",
    metricContext: "year-over-year drop in unplanned sick leave after rolling out preventive checkups and tele-doctor access globally",
    quote: "Catching issues early — diabetes, hypertension, vitamin deficiency — meant fewer escalations later. The program paid for itself in a year.",
    name: "Rajiv Menon",
    title: "VP People &amp; Wellbeing",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    company: "Cisco",
    industry: "Networking · 84,000 employees",
    metric: "$2.4",
    metricSuffix: "M",
    metricLabel: "annual healthcare savings",
    metricContext: "estimated annual savings from a shift toward preventive care and consolidated group insurance through a single benefits platform",
    quote: "Group insurance, OPD, and checkups all sit in the same dashboard now. Finance gets one report, HR gets one tool, employees get one app.",
    name: "Samuel Beck",
    title: "Head of Benefits",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

const STATS = [
  { value: "91%",  label: "Checkup completion" },
  { value: "38%",  label: "Fewer sick days"    },
  { value: "$2.4M",label: "Annual savings"     },
  { value: "5,000",label: "Teams onboard"      },
];

const ease = [0, 0, 0.2, 1] as const;

function useCountUp(target: number, duration = 1200, trigger: boolean) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!trigger) return;
    let val = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(timer); }
      else setCount(val);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9.]*/)?.[0] || "";
  const suffix = value.replace(prefix, "").replace(/[0-9.]/g, "");
  const isDecimal = value.includes(".");
  const count = useCountUp(numeric, 1200, visible && !reduce);
  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toString();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">{reduce ? value : `${prefix}${display}${suffix}`}</p>
      <p className="text-dark-000 text-sm">{label}</p>
    </div>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-dark-300 py-20 lg:py-28 overflow-hidden">
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      <div className="blob-1 absolute -top-60 -left-40 w-[650px] h-[650px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.25) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute bottom-0 right-[-80px] w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-100 mb-3">Customer stories</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">Enterprises that consolidated wellness onto one platform</h2>
          <p className="text-dark-000 text-base leading-relaxed">Companies that moved checkups, doctor access, and group insurance into one wallet &mdash; and saw activation, outcomes, and savings rise together.</p>
        </div>

        <motion.figure className="bg-white/8 border border-white/12 rounded-2xl p-7 lg:p-8 mb-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.6, ease }}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-100 mb-4">{FEATURED.company} · {FEATURED.industry}</p>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-6xl font-bold text-white tabular-nums">{FEATURED.metric}{FEATURED.metricSuffix}</span>
              <span className="text-xl font-medium text-white/50">{FEATURED.metricLabel}</span>
            </div>
            <p className="text-dark-100 text-xs mb-5">{FEATURED.metricContext}</p>
            <blockquote className="text-dark-000 text-base leading-relaxed pl-4 border-l-2 border-blue-200/40">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>
          </div>
          <figcaption className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4 shrink-0 lg:min-w-[200px] border-t border-white/10 pt-5 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={FEATURED.photo} alt={FEATURED.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">{FEATURED.name}</p>
              <p className="text-dark-100 text-xs mt-0.5">{FEATURED.title}</p>
              <p className="text-dark-100 text-xs">{FEATURED.company}</p>
            </div>
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {COMPACT.map((t, i) => (
            <motion.figure key={t.company} className="bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: i * 0.1 }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-100 mb-3">{t.company} · {t.industry}</p>
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-4xl font-bold text-white tabular-nums">{t.metric}{t.metricSuffix}</span>
                <span className="text-sm font-medium text-white/50">{t.metricLabel}</span>
              </div>
              <p className="text-dark-100 text-xs mb-4">{t.metricContext}</p>
              <blockquote className="text-dark-000 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.photo} alt={t.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                <div>
                  <p className="text-white text-xs font-semibold" dangerouslySetInnerHTML={{ __html: t.name }} />
                  <p className="text-dark-100 text-[10px]" dangerouslySetInnerHTML={{ __html: t.title }} />
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {STATS.map((s) => <AnimatedStat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}
