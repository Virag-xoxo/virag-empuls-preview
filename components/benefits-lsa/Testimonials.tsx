"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FEATURED = {
  company: "Stripe",
  industry: "Payments · 8,000 employees",
  metric: "74",
  metricSuffix: "%",
  metricLabel: "LSA utilization",
  metricContext: "of allocated lifestyle dollars actually spent within the year — vs ~30% on legacy reimbursement-only programs",
  quote: "We tried a wellness reimbursement program and it sat unused. Switching to an LSA — same dollars, but with direct redemption — flipped utilization overnight.",
  name: "Catherine Reed",
  title: "VP Total Rewards",
  photo: "https://randomuser.me/api/portraits/women/45.jpg",
};

const COMPACT = [
  {
    company: "GitLab",
    industry: "DevOps · 2,200 employees",
    metric: "8",
    metricSuffix: "+",
    metricLabel: "categories used per employee",
    metricContext: "average distinct spending categories used per employee per year — proof of breadth, not just ticket-buying",
    quote: "What surprised us was the spread. Yoga apps, coding courses, meal kits, family care — same dollar, totally different lives. It's the right shape for a distributed workforce.",
    name: "Daniel Foster",
    title: "Head of People Programs",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    company: "Notion",
    industry: "Productivity SaaS · 600 employees",
    metric: "4.7",
    metricSuffix: "★",
    metricLabel: "satisfaction score",
    metricContext: "average employee satisfaction score on the LSA program after the first full plan year",
    quote: "We rolled it out alongside our health plan and the LSA out-scored every other benefit. The wallet metaphor just clicks for people.",
    name: "Megan Hayes",
    title: "Director of Benefits",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const STATS = [
  { value: "74%",  label: "LSA utilization" },
  { value: "8+",   label: "Categories used" },
  { value: "4.7★", label: "Satisfaction score" },
  { value: "100+", label: "Countries supported" },
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
  const suffix = value.replace(/[0-9.]/g, "");
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
      <p className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">{reduce ? value : `${display}${suffix}`}</p>
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">People teams that flipped utilization with LSAs</h2>
          <p className="text-dark-000 text-base leading-relaxed">Companies that swapped reimbursement-only programs for direct-redemption lifestyle wallets — and watched usage and satisfaction follow.</p>
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
                  <p className="text-white text-xs font-semibold">{t.name}</p>
                  <p className="text-dark-100 text-[10px]">{t.title}</p>
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
