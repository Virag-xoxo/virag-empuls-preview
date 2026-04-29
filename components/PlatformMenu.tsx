"use client";

import { useState } from "react";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const CATEGORIES = [
  {
    id: "recognition", label: "Recognition",
    overview: { label: "Recognition overview", desc: "Build a culture where great work never goes unnoticed" },
    items: [
      { label: "Spot awards",      desc: "Instantly reward employees for everyday wins" },
      { label: "Nominations",      desc: "Nominate standout performers for awards" },
      { label: "Jury",             desc: "Set up panels to fairly evaluate award winners" },
      { label: "External praise",  desc: "Capture appreciation from customers and partners" },
      { label: "Xoxocodes",        desc: "Reward codes for quick, in-person recognition" },
      { label: "Award campaigns",  desc: "Run themed recognition drives with governance" },
    ],
  },
  {
    id: "celebrations", label: "Celebrations",
    overview: { label: "Celebrations overview", desc: "Mark every meaningful moment in your employees' journey" },
    items: [
      { label: "Service awards",       desc: "Honor years of service with personalized gifts" },
      { label: "Life events",          desc: "Celebrate milestones beyond the workplace" },
      { label: "Onboarding",           desc: "Welcome new hires with first-day gestures" },
      { label: "Career milestones",    desc: "Recognize promotions and role changes" },
      { label: "Festive celebrations", desc: "Festival greetings and gifts across cultures" },
    ],
  },
  {
    id: "milestones", label: "Milestone rewards",
    overview: { label: "Milestone rewards overview", desc: "Automate rewards the moment achievements happen" },
    items: [
      { label: "Project completions",    desc: "Reward teams when projects cross the finish line" },
      { label: "Referrals",              desc: "Incentivise employees to bring in great talent" },
      { label: "Training & development", desc: "Reward learning, certifications, and skill growth" },
      { label: "Workplace milestones",   desc: "Recognise attendance, safety, and operational wins" },
    ],
  },
  {
    id: "sales", label: "Sales incentives",
    overview: { label: "Sales incentives overview", desc: "Drive sales performance with structured incentive programs" },
    items: [
      { label: "Compensation management", desc: "Design and manage commissions with full transparency" },
      { label: "Performance management",  desc: "Track quotas, targets, and team performance" },
    ],
  },
  {
    id: "surveys", label: "Surveys",
    overview: { label: "Surveys overview", desc: "Listen to your workforce and act on what matters" },
    items: [
      { label: "Pulse surveys",         desc: "Quick, recurring check-ins to track engagement" },
      { label: "Lifecycle surveys",     desc: "Feedback at every stage of the employee journey" },
      { label: "Action plans",          desc: "Turn survey insights into measurable improvements" },
      { label: "Mood-o-meter",          desc: "Real-time read on how your teams are feeling" },
      { label: "AI sentiment analysis", desc: "Surface themes hidden in employee feedback" },
    ],
  },
  {
    id: "benefits", label: "Benefits & Perks",
    overview: { label: "Benefits overview", desc: "Offer benefits employees actually use and value" },
    items: [
      { label: "Employee discounts",           desc: "Exclusive savings on top brands and services" },
      { label: "Flexible benefits",            desc: "Let employees choose perks that fit their life" },
      { label: "Lifestyle spending accounts",  desc: "Personalized wellness and lifestyle budgets" },
      { label: "Tax-saving benefits card",     desc: "Maximize take-home pay with tax-efficient perks" },
    ],
  },
  {
    id: "wellness", label: "Health & Wellness",
    overview: { label: "Health & Wellness overview", desc: "Support employee well-being inside and outside work" },
    items: [
      { label: "Corporate wellness program", desc: "Personalized health checkup & wellness solutions" },
      { label: "Fitness challenges",         desc: "Friendly, goal-based fitness competitions" },
    ],
  },
  {
    id: "socials", label: "Socials",
    overview: { label: "Socials overview", desc: "Bring your workplace community together, wherever they are" },
    items: [
      { label: "Groups & communities",  desc: "Connect over shared interests and causes" },
      { label: "Wall of fame",          desc: "Showcase top achievers company-wide" },
      { label: "Employee celebrations", desc: "Make birthdays and anniversaries social" },
      { label: "Polls & quizzes",       desc: "Spark conversation with quick polls" },
      { label: "Leaderboards",          desc: "Friendly competition with ranked leaderboards" },
      { label: "Gamezone",              desc: "Games, challenges, and play-driven rewards" },
    ],
  },
  {
    id: "marketplace", label: "Rewards marketplace",
    overview: { label: "Marketplace overview", desc: "Give employees a global catalog of meaningful rewards" },
    items: [
      { label: "Gift cards",             desc: "1M+ gift cards across top global brands" },
      { label: "Merchandise",            desc: "Branded and lifestyle merchandise" },
      { label: "Experiences",            desc: "Unforgettable experiences and adventures" },
      { label: "Prepaid cards",          desc: "Flexible spending anywhere, anytime" },
      { label: "Amazon shop",            desc: "Redeem directly on Amazon's full catalog" },
      { label: "Travel rewards",         desc: "Flights, hotels, and getaway bookings" },
      { label: "Swags",                  desc: "Branded swag and curated gift kits" },
      { label: "Cashouts",               desc: "Convert points to bank or wallet credits" },
      { label: "Utility & topups",       desc: "Bills, mobile recharges, everyday utilities" },
      { label: "Health & wellness",      desc: "Fitness, health checkups, and wellness" },
      { label: "Learning & development", desc: "Courses, books, and certifications" },
      { label: "Charity & donations",    desc: "Donate points to causes that matter" },
    ],
  },
];

const PLATFORM_FEATURES = [
  {
    id: "ai",
    label: "Empuls AI",
    desc: "Copilot to MCP-ready agents — engagement intelligence end to end",
    badge: "New",
    badgeColor: "bg-blue-000 text-blue-200",
    borderColor: "border-blue-200",
    icon: AiIcon,
  },
  {
    id: "integrations",
    label: "Integrations",
    desc: "Connect with tools your teams already use every day",
    badge: "50+",
    badgeColor: "bg-green-000 text-green-300",
    borderColor: "border-green-300",
    icon: IntegIcon,
  },
  {
    id: "analytics",
    label: "Reports & analytics",
    desc: "Track adoption, budgets, and cultural impact in one place",
    badge: null,
    badgeColor: "",
    borderColor: "border-dark-000",
    icon: ChartIcon,
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function PlatformMenu({ onClose }: { onClose: () => void }) {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <div className="w-full flex justify-center px-6 pb-5 pt-2">
      {/* Caret pointing up to the navbar */}
      <div className="relative w-full max-w-[880px]">
        <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 bg-light-000 border-l border-t border-light-300 rotate-45 z-10" />

        <div className="rounded-xl border border-light-300 shadow-2xl bg-light-000 overflow-hidden animate-fade-in-down">
          <div className="flex" style={{ minHeight: 320 }}>

            {/* ── Left sidebar ─────────────────────────────────── */}
            <div className="w-[204px] shrink-0 bg-light-100 border-r border-light-200 py-3">
              {CATEGORIES.map((cat) => {
                const isActive = cat.id === activeId;
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveId(cat.id)}
                    onClick={() => setActiveId(cat.id)}
                    className={`relative w-full text-left px-4 py-[9px] text-[13px] transition-colors duration-100 ${
                      isActive
                        ? "text-blue-200 font-semibold bg-light-000"
                        : "text-dark-200 hover:text-dark-300 hover:bg-light-200 font-medium"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 inset-y-2 w-[3px] rounded-r-full bg-blue-200" />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* ── Right panel ──────────────────────────────────── */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

              {/* Overview — neutral, no blue tint */}
              <a
                href="#"
                onClick={onClose}
                className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-light-200 hover:bg-light-100 transition-colors duration-150 group shrink-0"
              >
                <div>
                  <p className="text-sm font-semibold text-dark-300">{active.overview.label}</p>
                  <p className="text-xs text-dark-100 mt-0.5">{active.overview.desc}</p>
                </div>
                <svg className="shrink-0 text-dark-100 opacity-0 group-hover:opacity-100 transition-opacity" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7H11M7.5 4L11 7L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Feature items — ALWAYS 2 columns */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-2 gap-x-6">
                  {active.items.map((item) => (
                    <a
                      key={item.label}
                      href="#"
                      onClick={onClose}
                      className="group flex flex-col py-2.5 px-2 rounded-lg hover:bg-light-100 transition-colors duration-100"
                    >
                      {/* Hover darkens text — no blue, no competing signal */}
                      <span className="text-[13px] font-semibold text-dark-300 group-hover:text-dark-300 leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-dark-100 mt-0.5 line-clamp-1 leading-snug">
                        {item.desc}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Platform features — neutral footer, no colored borders */}
              <div className="shrink-0 border-t border-light-200 bg-light-100 grid grid-cols-3 divide-x divide-light-200">
                {PLATFORM_FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <a
                      key={feat.id}
                      href="#"
                      onClick={onClose}
                      className="group flex items-start gap-3 px-4 py-3.5 hover:bg-light-200 transition-colors duration-100"
                    >
                      <span className="shrink-0 mt-0.5 p-1.5 rounded-lg bg-light-300 text-dark-100 group-hover:bg-light-000 transition-colors duration-100">
                        <Icon className="w-3.5 h-3.5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-semibold text-dark-300 truncate">
                            {feat.label}
                          </span>
                          {feat.badge && (
                            <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${feat.badgeColor}`}>
                              {feat.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-dark-100 mt-0.5 line-clamp-1 leading-snug">{feat.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Icons ─────────────────────────────────────────────────────────────────── */

function AiIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M8 2L9.2 5.8H13L10 8.2L11.2 12L8 9.6L4.8 12L6 8.2L3 5.8H6.8L8 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IntegIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 4.5H9M7 11.5H9M4.5 7V9M11.5 7V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <rect x="2" y="9" width="3" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="6.5" y="5" width="3" height="9" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      <rect x="11" y="2" width="3" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
