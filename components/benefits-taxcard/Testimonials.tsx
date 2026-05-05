"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const FEATURED = {
  company: "Stripe India",
  industry: "Payments · 1,200+ India employees",
  metric: "₹31,680",
  metricSuffix: "",
  metricLabel: "avg annual tax savings",
  metricContext: "average tax savings per employee in the 30% slab from properly structured meal and conveyance allowances",
  quote: "We restructured every offer letter onto the card in one quarter. Take-home went up, taxable income went down, and our payroll team stopped processing reimbursement spreadsheets.",
  name: "Catherine Reed",
  title: "VP Total Rewards",
  photo: "https://randomuser.me/api/portraits/women/45.jpg",
};

const COMPACT = [
  {
    company: "GitLab",
    industry: "DevOps · India ops",
    metric: "100",
    metricSuffix: "%",
    metricLabel: "compliance audit pass rate",
    metricContext: "MCC-locked spend means every transaction stays inside its tax-exempt category — passes statutory audit cleanly",
    quote: "Audit week used to mean reconciling fuel receipts to payroll. The MCC log does it for us automatically — every transaction is already in the right pocket.",
    name: "Daniel Foster",
    title: "Head of People Programs",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    company: "Notion",
    industry: "Productivity · India team",
    metric: "5",
    metricSuffix: " min",
    metricLabel: "Aadhaar XML KYC",
    metricContext: "average employee KYC completion time using Aadhaar XML via NSDL — physical card ships, virtual card live instantly",
    quote: "New hires get the virtual card before they get their laptop. Zero paperwork, no branch visit, no waiting on couriers.",
    name: "Megan Hayes",
    title: "Director of Benefits",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
  },
];

const STATS = [
  { value: "₹31,680", label: "Avg annual tax savings" },
  { value: "100%",    label: "Compliance pass rate" },
  { value: "5 min",   label: "KYC time" },
  { value: "₹2L",     label: "Single-card cap" },
];

const ease = [0, 0, 0.2, 1] as const;

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
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">India payroll teams that retired the reimbursement loop</h2>
          <p className="text-dark-000 text-base leading-relaxed">Companies that swapped paper bills and quarterly reconciliation for a single MCC-locked card — and watched take-home, compliance, and admin time improve together.</p>
        </div>

        <motion.figure className="bg-white/8 border border-white/12 rounded-2xl p-7 lg:p-8 mb-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduce ? 0 : 0.6, ease }}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-dark-100 mb-4">{FEATURED.company} · {FEATURED.industry}</p>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-5xl lg:text-6xl font-bold text-white tabular-nums">{FEATURED.metric}{FEATURED.metricSuffix}</span>
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
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-white mb-1 tabular-nums">{s.value}</p>
              <p className="text-dark-000 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
