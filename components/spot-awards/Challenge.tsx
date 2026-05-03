"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const STATS = [
  {
    numeric: 65,
    suffix: "%",
    label: "of employees feel underrecognized at work",
    source: "Gallup, 2024",
  },
  {
    numeric: 7,
    suffix: " days",
    label: "average delay between achievement and recognition",
    source: "SHRM Research",
  },
  {
    numeric: 31,
    suffix: "%",
    label: "lower attrition when recognition is timely and public",
    source: "Deloitte Insights",
  },
];

function useCountUp(target: number, duration = 1400, trigger: boolean) {
  const [count, setCount] = useState(target);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function StatItem({ numeric, suffix, label, source }: typeof STATS[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const reduce = useReducedMotion();
  const count = useCountUp(numeric, 1400, triggered && !reduce);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center text-center sm:items-start sm:text-left px-8 py-6 sm:py-0 first:pl-0 last:pr-0">
      <p className="text-5xl lg:text-6xl font-bold tabular-nums text-white mb-2">
        {reduce ? `${numeric}${suffix}` : `${count}${suffix}`}
      </p>
      <p className="text-dark-000 text-sm leading-snug mb-1.5 max-w-[180px]">{label}</p>
      <p className="text-dark-100 text-[10px] font-semibold uppercase tracking-[0.12em]">{source}</p>
    </div>
  );
}

const ease = [0, 0, 0.2, 1] as const;

export default function Challenge() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-dark-300 overflow-hidden">
      {/* Reuse dark section ambient layers */}
      <div className="dark-dot-grid absolute inset-0 pointer-events-none" />
      <div className="blob-1 absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(29,97,246,0.20) 0%, transparent 65%)" }} />
      <div className="blob-2 absolute -bottom-20 right-1/4 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-14 lg:py-16">

        {/* Header — compact, left-aligned on desktop */}
        <motion.div
          className="max-w-xl mb-10"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-100 mb-3">
            The recognition gap
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
            Recognition delayed is recognition denied
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
        >
          {STATS.map((s) => (
            <StatItem key={s.source} {...s} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
