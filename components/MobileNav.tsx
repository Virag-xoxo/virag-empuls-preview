"use client";

import { useState, useEffect } from "react";
import { CATEGORIES, PLATFORM_TOOLS } from "@/lib/nav-data";

type NavItem = { label: string; hasMenu: boolean };

export default function MobileNav({
  open,
  onClose,
  navItems,
}: {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}) {
  const [expandedNav, setExpandedNav] = useState<string | null>(null);
  const [expandedCat, setExpandedCat] = useState<string | null>(CATEGORIES[0].id);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpandedNav(null);
      setExpandedCat(CATEGORIES[0].id);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-dark-300/30 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed top-0 right-0 bottom-0 z-50 w-[340px] max-w-full bg-light-000 shadow-menu flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-light-200 shrink-0">
          <img src="/logos/empuls-dark.svg" alt="Empuls" style={{ height: "26px", width: "auto" }} />
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-dark-100 hover:bg-light-100 hover:text-dark-300 transition-colors"
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav body */}
        <div className="flex-1 overflow-y-auto">

          {navItems.map((item) => {
            const isExpanded = expandedNav === item.label;

            return (
              <div key={item.label} className="border-b border-light-200">

                {/* Top-level nav item */}
                <button
                  onClick={() => setExpandedNav(isExpanded ? null : item.label)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-dark-300 hover:bg-light-100 transition-colors"
                >
                  {item.label}
                  {item.hasMenu && (
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`text-dark-100 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {/* Platform submenu */}
                {item.label === "Platform" && isExpanded && (
                  <div className="bg-light-100 border-t border-light-200">

                    {/* Category accordion list */}
                    {CATEGORIES.map((cat) => {
                      const catOpen = expandedCat === cat.id;
                      return (
                        <div key={cat.id} className="border-b border-light-200 last:border-b-0">

                          {/* Category row */}
                          <button
                            onClick={() => setExpandedCat(catOpen ? null : cat.id)}
                            className={`w-full flex items-center justify-between px-5 py-3 text-[13px] font-semibold transition-colors ${
                              catOpen ? "text-blue-200 bg-light-000" : "text-dark-200 hover:text-dark-300 hover:bg-light-200"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {catOpen && <span className="w-[3px] h-4 rounded-full bg-blue-200 shrink-0" />}
                              {cat.label}
                            </span>
                            <svg
                              width="14" height="14" viewBox="0 0 16 16" fill="none"
                              className={`text-dark-100 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                            >
                              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          {/* Category items */}
                          {catOpen && (
                            <div className="bg-light-000 px-4 pb-2">

                              {/* Overview */}
                              <a
                                href="#"
                                onClick={onClose}
                                className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-light-100 transition-colors group"
                              >
                                <div>
                                  <p className="text-[13px] font-semibold text-dark-300">{cat.overview.label}</p>
                                  <p className="text-[11px] text-dark-100 mt-0.5">{cat.overview.desc}</p>
                                </div>
                                <svg className="shrink-0 text-dark-100 opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 14 14" fill="none">
                                  <path d="M3 7H11M7.5 4L11 7L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>

                              {/* Sub-items */}
                              <div className="mt-1 space-y-0.5">
                                {cat.items.map((sub) => (
                                  <a
                                    key={sub.label}
                                    href="#"
                                    onClick={onClose}
                                    className="flex flex-col px-3 py-2 rounded-lg hover:bg-light-100 transition-colors"
                                  >
                                    <span className="text-[13px] font-medium text-dark-300">{sub.label}</span>
                                    <span className="text-[11px] text-dark-100 mt-0.5">{sub.desc}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Platform tools */}
                    <div className="border-t border-light-200 bg-light-000 px-4 py-3 space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-dark-100 px-3 pb-1">Platform tools</p>
                      {PLATFORM_TOOLS.map((tool) => (
                        <a
                          key={tool.id}
                          href="#"
                          onClick={onClose}
                          className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-light-100 transition-colors group"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[13px] font-semibold text-dark-300">{tool.label}</span>
                              {tool.badge && (
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                                  tool.badge === "New" ? "bg-blue-000 text-blue-200" : "bg-green-000 text-green-300"
                                }`}>
                                  {tool.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-dark-100 mt-0.5">{tool.desc}</p>
                          </div>
                          <svg className="shrink-0 text-dark-100 opacity-0 group-hover:opacity-100 transition-opacity" width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7H11M7.5 4L11 7L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ))}
                    </div>

                  </div>
                )}

                {/* Placeholder for Solutions / Resources */}
                {item.label !== "Platform" && item.hasMenu && isExpanded && (
                  <div className="bg-light-100 border-t border-light-200 px-5 py-4">
                    <p className="text-sm text-dark-100">{item.label} — coming soon</p>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="border-t border-light-200 p-4 space-y-2 shrink-0">
          <button className="w-full py-2.5 px-4 text-sm font-medium rounded-lg border border-dark-200 text-dark-300 hover:bg-light-100 transition-colors">
            Schedule demo
          </button>
          <button className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-blue-200 text-white hover:bg-blue-300 transition-colors">
            Redeem Rewards
          </button>
        </div>

      </div>
    </>
  );
}
