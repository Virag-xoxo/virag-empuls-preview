"use client";

import { motion, useReducedMotion } from "motion/react";

type IconKey = "user" | "users" | "clipboard" | "chart";

const PERSONAS = [
  {
    icon: "user" as IconKey,
    iconStyle: "bg-blue-200/10 border-blue-200/20 text-blue-200",
    role: "Employees",
    headline: "Give recognition — and feel it too",
    benefits: [
      "Nominate any colleague in 30 seconds",
      "Receive points redeemable for 1M+ rewards",
      "See public celebrations on the social feed",
    ],
    cta: "For teams",
  },
  {
    icon: "users" as IconKey,
    iconStyle: "bg-orange-200/10 border-orange-200/20 text-orange-200",
    role: "Managers",
    headline: "Recognize your team, amplify wins publicly",
    benefits: [
      "Dedicated monthly recognition budget",
      "Bulk-send awards to the whole team",
      "Track your team's recognition activity",
    ],
    cta: "For managers",
  },
  {
    icon: "clipboard" as IconKey,
    iconStyle: "bg-green-300/10 border-green-300/20 text-green-300",
    role: "HR Leaders",
    headline: "Run programs, measure adoption, prove impact",
    benefits: [
      "Custom award categories tied to values",
      "Budget controls by department or location",
      "Adoption dashboards and nudge automation",
    ],
    cta: "For HR",
  },
  {
    icon: "chart" as IconKey,
    iconStyle: "bg-dark-200/10 border-dark-200/20 text-dark-200",
    role: "Executives",
    headline: "See the culture ROI — in real numbers",
    benefits: [
      "eNPS trends correlated with recognition",
      "Retention impact and attrition forecasts",
      "Board-ready culture health reports",
    ],
    cta: "For leadership",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const } },
};

export default function UseCases() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #d4e3ff 0%, #e7eefd 45%, #ccdaff 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(29,97,246,0.18) 0%, transparent 65%)" }} />
      <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(206,222,255,0.7) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-3">
            Built for every role
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-300 tracking-tight mb-4">
            Every voice in your organization, heard
          </h2>
          <p className="text-dark-100 text-base leading-relaxed">
            Whether you&apos;re an employee nominating a peer or a CHRO building a culture strategy — Empuls works for you.
          </p>
        </div>

        {/* Persona grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={reduce ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PERSONAS.map((p) => (
            <motion.div
              key={p.role}
              variants={reduce ? undefined : itemVariants}
              className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 flex flex-col group hover:shadow-menu hover:-translate-y-1 transition-all duration-200"
            >
              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${p.iconStyle}`}>
                <PersonaIcon name={p.icon} />
              </div>

              {/* Role tag */}
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200 mb-1">{p.role}</p>

              {/* Headline */}
              <h3 className="text-base font-bold text-dark-300 leading-snug mb-4">{p.headline}</h3>

              {/* Benefits */}
              <ul className="space-y-2 flex-1 mb-5">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-blue-200/10 border border-blue-200/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                        <path d="M1 3.5L2.8 5.5L6 1.5" stroke="#1D61F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-dark-100 text-xs leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-blue-200 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M8 4L11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Persona Icons ─────────────────────────────────────────────────────────── */

function PersonaIcon({ name }: { name: IconKey }) {
  switch (name) {
    case "user":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "users":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "clipboard":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "chart":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="18" rx="1" />
          <rect x="10" y="8" width="4" height="13" rx="1" />
          <rect x="2" y="13" width="4" height="8" rx="1" />
        </svg>
      );
  }
}
