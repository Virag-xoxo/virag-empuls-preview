"use client";

import { useState, useRef, useEffect } from "react";

const PRODUCTS = [
  { name: "empuls",  tagline: "Employee engagement", href: "#", logo: "/logos/empuls-dark.svg",  active: true  },
  { name: "plum",    tagline: "Rewards & gifting",   href: "#", logo: "/logos/plum-dark.svg",    active: false },
  { name: "compass", tagline: "Sales incentives",    href: "#", logo: "/logos/compass-dark.svg", active: false },
];

export default function ProductSwitcher({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2"
        aria-label="Switch product"
        aria-expanded={open}
      >
        <img
          src={isDark ? "/logos/xoxoday-light.svg" : "/logos/xoxoday-dark.svg"}
          alt="xoxoday"
          style={{ height: "22px", width: "auto" }}
        />
        <svg
          width="13"
          height="13"
          viewBox="0 0 14 14"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""} ${isDark ? "text-white/50" : "text-dark-100"}`}
        >
          <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-60 bg-light-000 rounded-xl border border-light-300 shadow-menu animate-fade-in-down overflow-hidden">
          <div className="px-3 pt-3 pb-1">
            <p className="text-[11px] font-semibold text-dark-100 uppercase tracking-wider px-1">
              Switch product
            </p>
          </div>
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 mx-2 mb-1 px-3 py-2.5 rounded-lg transition-colors duration-150 ${
                product.active ? "bg-blue-000" : "hover:bg-light-100"
              }`}
            >
              <img
                src={product.logo}
                alt={product.name}
                style={{ height: "16px", width: "auto", maxWidth: "80px" }}
              />
              <p className="text-xs text-dark-100">{product.tagline}</p>
              {product.active && (
                <span className="ml-auto shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="#1D61F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </a>
          ))}
          <div className="h-3" />
        </div>
      )}
    </div>
  );
}
