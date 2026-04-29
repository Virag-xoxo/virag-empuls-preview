"use client";

import { useState, useEffect } from "react";

const MOBILE_PLATFORM = [
  { label: "Recognition", desc: "Build a culture of appreciation" },
  { label: "Perks & Benefits", desc: "Flexible employee benefits" },
  { label: "Gifting & Celebrations", desc: "Celebrate contributions" },
  { label: "Engagement", desc: "Amplify employee connections" },
  { label: "Sales Incentives & Commissions", desc: "Commission plans, Spiffs and more" },
  { label: "Incentives", desc: "Boost performance with rewards" },
  { label: "Rewards Marketplace", desc: "Explore global reward options" },
];

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
  const [expanded, setExpanded] = useState<string | null>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setExpanded(null);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-dark-300/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-[320px] max-w-full bg-light-000 shadow-menu flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-light-200">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 8L12 14L4 8L12 2Z" fill="#1D61F6" />
              <path d="M12 14L20 8L12 22L4 8L12 14Z" fill="#0844CC" opacity="0.7" />
            </svg>
            <span className="text-base font-bold text-dark-300">empuls</span>
          </div>
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

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto py-3">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => {
                  if (item.hasMenu) {
                    setExpanded(expanded === item.label ? null : item.label);
                  }
                }}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-dark-300 hover:bg-light-100 transition-colors"
              >
                {item.label}
                {item.hasMenu && (
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className={`text-dark-100 transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              {/* Platform submenu */}
              {item.label === "Platform" && expanded === "Platform" && (
                <div className="bg-light-100 border-y border-light-200">
                  {MOBILE_PLATFORM.map((sub) => (
                    <a
                      key={sub.label}
                      href="#"
                      onClick={onClose}
                      className="flex flex-col px-6 py-3 hover:bg-light-200 transition-colors"
                    >
                      <span className="text-sm font-medium text-dark-300">{sub.label}</span>
                      <span className="text-xs text-dark-100 mt-0.5">{sub.desc}</span>
                    </a>
                  ))}
                  <div className="border-t border-light-200 px-6 py-3 space-y-2">
                    {["Empuls Copilot", "Integrations", "Reports & Analytics"].map((tool) => (
                      <a
                        key={tool}
                        href="#"
                        onClick={onClose}
                        className="block text-sm font-medium text-blue-200 py-1.5 hover:underline"
                      >
                        {tool}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholder for other menus */}
              {item.label !== "Platform" && item.hasMenu && expanded === item.label && (
                <div className="bg-light-100 border-y border-light-200 px-6 py-4">
                  <p className="text-sm text-dark-100">{item.label} menu — coming soon</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="border-t border-light-200 p-4 space-y-2">
          <button className="w-full py-2.5 px-4 text-sm font-medium rounded-lg border border-dark-300 text-dark-300 hover:bg-light-100 transition-colors">
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
