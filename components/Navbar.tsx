"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ProductSwitcher from "./ProductSwitcher";
import PlatformMenu from "./PlatformMenu";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { label: "Platform", hasMenu: true },
  { label: "Solutions", hasMenu: true },
  { label: "Resources", hasMenu: true },
  { label: "Plans", hasMenu: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Esc key closes menu
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveMenu(null); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleMenuEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  }, []);

  const handleMenuLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  }, []);

  const handleMenuStay = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const menuOpen = activeMenu !== null;
  // true when floating over dark hero — everything should be white
  const isDark = !scrolled;

  return (
    <>
      {/* Page backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-dark-300/30 backdrop-blur-[2px]"
          onClick={() => setActiveMenu(null)}
        />
      )}

      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-light-000 shadow-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">

          {/* Left: Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <ProductSwitcher isDark={isDark} />
            <div className={`w-px h-6 transition-colors duration-300 ${isDark ? "bg-white/20" : "bg-light-300"}`} />
            <EmpulsLogo isDark={isDark} />
          </div>

          {/* Center: Nav items */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onMouseEnter={() => item.hasMenu ? handleMenuEnter(item.label) : setActiveMenu(null)}
                onClick={() => item.hasMenu ? setActiveMenu(activeMenu === item.label ? null : item.label) : setActiveMenu(null)}
                className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeMenu === item.label
                    ? isDark ? "text-white font-semibold" : "text-dark-300 font-semibold"
                    : isDark
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-dark-200 hover:text-dark-300 hover:bg-light-100"
                }`}
              >
                {item.label}
                {item.hasMenu && (
                  <ChevronIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeMenu === item.label
                        ? "rotate-180 text-blue-200"
                        : isDark
                        ? "text-white/50"
                        : "text-dark-100"
                    }`}
                  />
                )}
                {/* Active underline indicator */}
                {activeMenu === item.label && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-blue-200" />
                )}
              </button>
            ))}
          </nav>

          {/* Right: CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
              isDark
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-dark-200 text-dark-300 hover:bg-light-100"
            }`}>
              Schedule demo
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-200 text-white hover:bg-blue-300 transition-colors duration-200 shadow-sm">
              Redeem Rewards
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${isDark ? "text-white hover:bg-white/10" : "text-dark-200 hover:bg-light-100"}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mega Menu */}
        {activeMenu === "Platform" && (
          <div onMouseEnter={handleMenuStay} onMouseLeave={handleMenuLeave}>
            <PlatformMenu onClose={() => setActiveMenu(null)} />
          </div>
        )}

        {(activeMenu === "Solutions" || activeMenu === "Resources") && (
          <div
            onMouseEnter={handleMenuStay}
            onMouseLeave={handleMenuLeave}
            className="animate-fade-in-down bg-light-000 border-t border-light-200"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-8">
              <p className="text-dark-100 text-sm">{activeMenu} menu — content coming soon.</p>
            </div>
          </div>
        )}
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} navItems={NAV_ITEMS} />
    </>
  );
}

function EmpulsLogo({ isDark }: { isDark: boolean }) {
  return (
    <img
      src={isDark ? "/logos/empuls-light.svg" : "/logos/empuls-dark.svg"}
      alt="Empuls"
      style={{ height: "30px", width: "auto" }}
    />
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
