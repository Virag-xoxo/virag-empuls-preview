"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const STATS = [
  {
    numeric: 65,
    suffix: "%",
    label: "of employees feel underrecognized at work",
    source: "Gallup, 2024",
    color: "text-blue-200",
  },
  {
    numeric: 7,
    suffix: " days",
    label: "average delay between achievement and recognition",
    source: "SHRM Research",
    color: "text-orange-200",
  },
  {
    numeric: 31,
    suffix: "%",
    label: "lower attrition when recognition is timely and public",
    source: "Deloitte Insights",
    color: "text-green-300",
  },
];

function useCountUp(target: number, duration = 1400, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);
  return count;
}

function AnimatedStat({ numeric, suffix, label, source, color }: typeof STATS[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const reduce = useReducedMotion();
  const count = useCountUp(numeric, 1400, triggered && !reduce);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-light-000 px-8 py-10 text-center group hover:bg-light-100 transition-colors duration-200"
    >
      <p className={`text-5xl font-bold mb-3 tabular-nums ${color}`}>
        {reduce ? `${numeric}${suffix}` : `${count}${suffix}`}
      </p>
      <p className="text-dark-200 text-sm leading-relaxed mb-2 max-w-[200px] mx-auto">{label}</p>
      <p className="text-dark-000 text-[10px] font-medium uppercase tracking-wide">{source}</p>
    </div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const } },
};

export default function Challenge() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-light-000 py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            The recognition gap
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 leading-tight tracking-tight mb-4">
            Recognition delayed is recognition denied
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Traditional recognition programs are slow, infrequent, and tied to annual cycles. By the time a plaque arrives, the moment is long gone.
          </p>
        </div>

        {/* Stats grid — animated count-up on scroll */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-light-200 border border-light-200 rounded-2xl overflow-hidden mb-14"
          variants={reduce ? undefined : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((s) => (
            <motion.div key={s.numeric} variants={reduce ? undefined : item}>
              <AnimatedStat {...s} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          className="max-w-2xl mx-auto text-center"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as const }}
        >
          <div className="w-8 h-1 bg-blue-200 rounded-full mx-auto mb-6" />
          <p className="text-xl lg:text-2xl font-medium text-dark-300 leading-relaxed italic">
            &ldquo;Recognition loses its power the moment it&apos;s delayed. Spot awards close that gap — instantly.&rdquo;
          </p>
          <div className="w-8 h-1 bg-blue-200 rounded-full mx-auto mt-6" />
        </motion.blockquote>
      </div>
    </section>
  );
}
