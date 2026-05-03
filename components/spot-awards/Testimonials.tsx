"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FEATURED = {
  company: "Bosch North America",
  industry: "Manufacturing · 8,500 employees",
  metric: "+22",
  metricLabel: "eNPS points",
  metricContext: "in 6 months after rollout",
  quote:
    "Spot awards changed how our managers interact with their teams. We went from quarterly reviews to daily recognition — and our eNPS jumped 22 points in six months.",
  name: "Jennifer Walsh",
  title: "Head of People Operations",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
};

const COMPACT = [
  {
    company: "Zendesk",
    industry: "SaaS · 6,400 employees",
    metric: "3×",
    metricLabel: "more recognitions",
    metricContext: "vs. prior annual program",
    quote:
      "Empuls Spot Awards fit right into our Slack workflow — team members now get recognized in the moment, publicly.",
    name: "Marcus Johnson",
    title: "VP People Operations",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    company: "Continental",
    industry: "Automotive · 12,000 employees",
    metric: "100%",
    metricLabel: "of awards tied to values",
    metricContext: "culture ROI visible to leadership",
    quote:
      "Every award now reinforces what Continental stands for — and HR can finally show leadership which values are being lived every day.",
    name: "Dieter Hoffmann",
    title: "Global HR Director",
    photo: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

const STATS = [
  { value: "3×", label: "Higher retention rate" },
  { value: "89%", label: "Employee satisfaction" },
  { value: "50+", label: "HRIS integrations" },
  { value: "1M+", label: "Rewards catalog" },
];

const ease = [0, 0, 0.2, 1] as const;

function useCountUp(target: number, duration = 1200, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let val = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      val += step;
      if (val >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(val));
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
  const count = useCountUp(numeric, 1200, visible && !reduce);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums">
        {reduce ? value : `${count}${suffix}`}
      </p>
      <p className="text-dark-000 text-sm">{label}</p>
    </div>
  );
}

export default function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-dark-300 py-20 lg:py-28 overflow-hidden">
      {/* Moving dot grid */}
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      {/* Ambient blobs */}
      <div className="blob-1 absolute -top-60 -left-40 w-[650px] h-[650px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.25) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute bottom-0 right-[-80px] w-[550px] h-[550px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 65%)" }} />
      <div className="blob-3 absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 65%)" }} />
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-100 mb-3">
            Customer stories
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Trusted by teams that move fast
          </h2>
          <p className="text-dark-000 text-base leading-relaxed">
            Companies across industries use Empuls Spot Awards to make recognition a cultural reflex — not a chore.
          </p>
        </div>

        {/* Featured card — full width, horizontal layout */}
        <motion.figure
          className="bg-white/8 border border-white/12 rounded-2xl p-7 lg:p-8 mb-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center"
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* Left: metric + quote */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-100 mb-4">
              {FEATURED.company} · {FEATURED.industry}
            </p>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-6xl font-bold text-white tabular-nums">{FEATURED.metric}</span>
              <span className="text-xl font-medium text-white/50">{FEATURED.metricLabel}</span>
            </div>
            <p className="text-dark-100 text-xs mb-5">{FEATURED.metricContext}</p>
            <blockquote className="text-dark-000 text-base leading-relaxed pl-4 border-l-2 border-blue-200/40">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>
          </div>

          {/* Right: author */}
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

        {/* Compact cards — 2-col row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {COMPACT.map((t, i) => (
            <motion.figure
              key={t.company}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease, delay: i * 0.1 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-100 mb-3">
                {t.company} · {t.industry}
              </p>
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-4xl font-bold text-white tabular-nums">{t.metric}</span>
                <span className="text-sm font-medium text-white/50">{t.metricLabel}</span>
              </div>
              <p className="text-dark-100 text-xs mb-4">{t.metricContext}</p>
              <blockquote className="text-dark-000 text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
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

        {/* Stats strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          {STATS.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

      </div>
    </section>
  );
}
