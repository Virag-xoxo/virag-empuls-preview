"use client";

import { motion, useReducedMotion } from "motion/react";

const CHANNELS = [
  { name: "Slack",       src: "/logos/integrations/slack.png"       },
  { name: "Teams",       src: "/logos/integrations/teams.png"       },
  { name: "Gmail",       src: "/logos/integrations/gmail.png"       },
  { name: "Outlook",     src: "/logos/integrations/outlook.png"     },
  { name: "Google Chat", src: "/logos/integrations/google-chat.png" },
];

const HRIS = [
  { name: "Workday",            src: "/logos/integrations/workday.png"            },
  { name: "SAP SuccessFactors", src: "/logos/integrations/sap-successfactors.png" },
  { name: "BambooHR",           src: "/logos/integrations/bamboohr.png"           },
  { name: "Darwinbox",          src: "/logos/integrations/darwinbox.png"          },
  { name: "Keka",               src: "/logos/integrations/keka.png"               },
  { name: "Rippling",           src: "/logos/integrations/rippling.png"           },
  { name: "Zoho People",        src: "/logos/integrations/zoho.png"               },
  { name: "ADP",                src: "/logos/integrations/adp.png"                },
  { name: "UKG",                src: "/logos/integrations/ukg.png"                },
];

const TRACKERS = [
  { name: "Apple Health",   bg: "#000000", initial: "🍎" },
  { name: "Google Fit",     bg: "#4285F4", initial: "G"  },
  { name: "Fitbit",         bg: "#00B0B9", initial: "Fb" },
  { name: "Strava",         bg: "#FC4C02", initial: "St" },
  { name: "Samsung Health", bg: "#1428A0", initial: "S"  },
  { name: "Garmin",         bg: "#007CC3", initial: "Gr" },
];

const ROW_1 = [HRIS[0], CHANNELS[0], HRIS[1], CHANNELS[1], HRIS[2], HRIS[3], CHANNELS[2]];
const ROW_2 = [HRIS[4], CHANNELS[3], HRIS[5], CHANNELS[4], HRIS[6], HRIS[7], HRIS[8]];
const ROW_3 = [CHANNELS[0], HRIS[0], HRIS[2], CHANNELS[1], HRIS[5], HRIS[3], CHANNELS[2]];

function LogoPill({ name, src }: { name: string; src: string }) {
  return (
    <div title={name} className="shrink-0 flex items-center justify-center bg-white rounded-2xl border border-light-200 shadow-sm px-4 py-2.5 h-[52px] w-[140px] hover:border-blue-100 hover:shadow-md transition-all duration-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={name} className="max-h-[28px] w-auto max-w-[108px] object-contain" />
    </div>
  );
}

type LogoItem = { name: string; src: string };

function SliderRow({ logos, reverse = false, speed = 28 }: { logos: LogoItem[]; reverse?: boolean; speed?: number }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-3 w-max" style={{ animation: `${reverse ? "slideRight" : "slideLeft"} ${speed}s linear infinite`, willChange: "transform" }}>
        {doubled.map((l, i) => <LogoPill key={`${l.name}-${i}`} name={l.name} src={l.src} />)}
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
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">Trackers, HRMS, and channels</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">Syncs with the fitness apps your team already uses</h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Six fitness trackers plus HRMS sync (Workday, BambooHR, SAP, Darwinbox, Rippling) and challenge nudges in Slack and Teams &mdash; one-time setup, automatic flow.
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

        <motion.div className="max-w-[860px] mx-auto mt-12"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduce ? 0 : 0.5, ease, delay: 0.15 }}>
          <div className="bg-light-100 border border-light-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-blue-200">Fitness trackers &middot; one-time connect</p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-green-700">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                Activity syncing
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {TRACKERS.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-1.5 bg-white border border-light-200 rounded-xl px-2 py-3">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white" style={{ background: t.bg }}>{t.initial}</span>
                  <span className="text-[10px] font-bold text-dark-300 text-center">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className="flex flex-wrap items-center justify-center gap-6 mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduce ? 0 : 0.5, delay: 0.25 }}>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-100">Channels</p>
            <div className="flex items-center gap-2">
              {CHANNELS.map((c) => (
                <div key={c.name} className="w-8 h-8 rounded-xl bg-white border border-light-200 shadow-sm flex items-center justify-center" title={c.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.src} alt={c.name} className="w-4 h-4 object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-px h-10 bg-light-200 hidden sm:block" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-dark-100">HRIS &amp; Payroll</p>
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {HRIS.map((h) => (
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
            Explore all 50+ integrations
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
