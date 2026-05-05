"use client";

import { motion, useReducedMotion } from "motion/react";

const DIAGNOSTICS = [
  { name: "Practo",        src: "/logos/wellness/practo.png",         bigger: true },
  { name: "Thyrocare",     src: "/logos/wellness/thyrocare.png",      bigger: true },
  { name: "Orange Health", src: "/logos/wellness/orange-health.svg" },
  { name: "Portea",        src: "/logos/wellness/portea.svg"        },
  { name: "Ekincare",      src: "/logos/wellness/ekincare.png"      },
  { name: "Healthians",    src: "/logos/wellness/healthians.png"    },
];

const FITNESS_MENTAL = [
  { name: "Cult.fit",     src: "/logos/wellness/cultfit.png",     bigger: true },
  { name: "HealthifyMe",  src: "/logos/wellness/healthifyme.png" },
  { name: "ClassPass",    src: "/logos/wellness/classpass.png"   },
  { name: "YourDost",     src: "/logos/wellness/yourdost.png"    },
  { name: "Fitpass",      src: "/logos/wellness/fitpass.png"     },
  { name: "Fitterfly",    src: "/logos/wellness/fitterfly.png",   bigger: true },
];

const ROW_1 = [DIAGNOSTICS[0], FITNESS_MENTAL[0], DIAGNOSTICS[1], FITNESS_MENTAL[1], DIAGNOSTICS[2], FITNESS_MENTAL[2], DIAGNOSTICS[3], FITNESS_MENTAL[3]];
const ROW_2 = [FITNESS_MENTAL[4], DIAGNOSTICS[4], FITNESS_MENTAL[1], DIAGNOSTICS[0], FITNESS_MENTAL[5], DIAGNOSTICS[5], FITNESS_MENTAL[0], DIAGNOSTICS[3]];
const ROW_3 = [DIAGNOSTICS[1], FITNESS_MENTAL[2], DIAGNOSTICS[5], FITNESS_MENTAL[3], DIAGNOSTICS[2], FITNESS_MENTAL[4], DIAGNOSTICS[4], FITNESS_MENTAL[5]];

function LogoPill({ name, src, bigger }: { name: string; src: string; bigger?: boolean }) {
  return (
    <div title={name} className={`shrink-0 flex items-center justify-center bg-white rounded-2xl border border-light-200 shadow-sm h-[52px] w-[140px] hover:border-blue-100 hover:shadow-md transition-all duration-200 ${bigger ? "px-3 py-1" : "px-4 py-2.5"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} className={`w-auto object-contain ${bigger ? "max-h-[42px] max-w-[120px]" : "max-h-[28px] max-w-[108px]"}`} />
    </div>
  );
}

type LogoItem = { name: string; src: string; bigger?: boolean };

function SliderRow({ logos, reverse = false, speed = 28 }: { logos: LogoItem[]; reverse?: boolean; speed?: number }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-3 w-max" style={{ animation: `${reverse ? "slideRight" : "slideLeft"} ${speed}s linear infinite`, willChange: "transform" }}>
        {doubled.map((l, i) => <LogoPill key={`${l.name}-${i}`} name={l.name} src={l.src} bigger={l.bigger} />)}
      </div>
    </div>
  );
}

const ease = [0, 0, 0.2, 1] as const;

export default function Integrations() {
  const reduce = useReducedMotion();
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div className="text-center max-w-xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduce ? 0 : 0.55, ease }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Curated wellness partner network</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Syncs with the fitness apps your team already uses</h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Pre-integrated with vetted partners across fitness, mental health, diagnostics, and home care &mdash; so employees access the right benefit in one tap, with zero IT lift.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.6, ease, delay: 0.1 }}
          className="relative mx-auto max-w-[860px]"
          style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 55%, transparent 100%)" }}>
          <div aria-hidden className="absolute inset-0 -z-10 opacity-40 rounded-3xl"
            style={{ backgroundImage: "radial-gradient(circle, #BFC9DA 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="flex flex-col gap-3 py-10">
            <SliderRow logos={ROW_1} speed={30} />
            <SliderRow logos={ROW_2} reverse speed={26} />
            <SliderRow logos={ROW_3} speed={32} />
          </div>
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-6 mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.25 }}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-100">Fitness &amp; Mental Wellness</p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {FITNESS_MENTAL.map((h) => (
                <div key={h.name} className="bg-white border border-light-200 rounded-lg px-2.5 py-1 shadow-sm" title={h.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.src} alt={h.name} className="h-4 w-auto max-w-[64px] object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-px h-10 bg-light-200 hidden sm:block" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-100">Diagnostics &amp; Care</p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {DIAGNOSTICS.map((h) => (
                <div key={h.name} className="bg-white border border-light-200 rounded-lg px-2.5 py-1 shadow-sm" title={h.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.src} alt={h.name} className="h-4 w-auto max-w-[64px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="text-center mt-8"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.4, delay: 0.3 }}>
          <a href="#" className="inline-flex items-center gap-2 text-blue-200 text-sm font-semibold hover:underline">
            Explore all 50+ wellness partners
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
