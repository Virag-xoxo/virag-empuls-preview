import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design System — Primary Blue
        "blue-000": "#E7EEFD",
        "blue-100": "#CEDEFF",
        "blue-200": "#1D61F6",
        "blue-300": "#0844CC",
        // Dark
        "dark-000": "#BFC9DA",
        "dark-100": "#5E7290",
        "dark-200": "#4C5A70",
        "dark-300": "#081B2D",
        // Light
        "light-000": "#FFFFFF",
        "light-100": "#F6F7F9",
        "light-200": "#EDEFF3",
        "light-300": "#E0E4E9",
        // Orange (xoxoday accent)
        "orange-000": "#FFF5EE",
        "orange-100": "#FFEEDE",
        "orange-200": "#ED7B30",
        "orange-300": "#A8551E",
        // Green
        "green-000": "#E4FEF4",
        "green-100": "#D2FDED",
        "green-200": "#88D4B5",
        "green-300": "#277A5F",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        nav: "0 4px 24px rgba(8, 27, 45, 0.08)",
        menu: "0 16px 48px rgba(8, 27, 45, 0.12)",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        feedScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-in-down": "fadeInDown 0.2s ease-out forwards",
        "feed-scroll": "feedScroll 4s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
