"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { value: "3x", label: "Higher retention" },
  { value: "89%", label: "Employee satisfaction" },
  { value: "50+", label: "Integrations" },
  { value: "1M+", label: "Rewards options" },
];

const LOGOS = ["Continental", "Bosch", "Pepsi", "Luminous", "CGI", "Razorpay"];

const FLOATING_CARDS = [
  {
    id: 1,
    emoji: "🏆",
    title: "Recognition sent",
    sub: "Sarah → James",
    value: "+250 pts",
    color: "bg-blue-000 border-blue-100",
    textColor: "text-blue-200",
    pos: "top-[18%] right-[6%]",
    delay: "0s",
  },
  {
    id: 2,
    emoji: "🎉",
    title: "Work Anniversary",
    sub: "5 years · Priya Sharma",
    value: "Celebrated",
    color: "bg-orange-000 border-orange-100",
    textColor: "text-orange-200",
    pos: "top-[52%] right-[2%]",
    delay: "0.4s",
  },
  {
    id: 3,
    emoji: "📊",
    title: "eNPS Score",
    sub: "Q2 2026",
    value: "+72",
    color: "bg-green-000 border-green-100",
    textColor: "text-green-300",
    pos: "bottom-[18%] right-[10%]",
    delay: "0.8s",
  },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated dot grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const spacing = 36;
      const cols = Math.ceil(W / spacing) + 1;
      const rows = Math.ceil(H / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          // Wave ripple from top-left
          const dist = Math.sqrt(x * x + y * y);
          const wave = Math.sin(dist / 80 - t * 0.8) * 0.5 + 0.5;
          const alpha = 0.06 + wave * 0.14;
          const radius = 1.2 + wave * 1.0;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(29, 97, 246, ${alpha})`;
          ctx.fill();
        }
      }
      t += 0.016;
      animFrame = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-300">
      {/* Animated dot grid canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient mesh blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-blue-200/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-300/25 blur-[100px] pointer-events-none" />
      <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-orange-200/10 blur-[80px] pointer-events-none" />

      {/* Geometric accent lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-[1fr_480px] gap-12 items-center">

        {/* Left: Copy */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-100 text-xs font-semibold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-100 animate-pulse" />
            Employee Engagement Platform
          </div>

          <h1 className="text-5xl lg:text-[60px] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Build a workplace
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-200">
                people love
              </span>
              {/* Underline accent */}
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                <path d="M0 5 Q75 0 150 3 Q225 6 300 1" stroke="#1D61F6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-dark-000 max-w-lg mb-10 leading-relaxed">
            Empuls gives your people team all the tools to build a unique culture — recognition, rewards, gifting, and engagement in one platform.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <button className="px-7 py-3.5 rounded-xl bg-blue-200 text-white font-semibold text-sm hover:bg-blue-300 transition-colors shadow-lg shadow-blue-200/30">
              Get started free
            </button>
            <button className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors backdrop-blur-sm">
              <PlayIcon />
              Watch a 2-min demo
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
            {STATS.map((stat) => (
              <div key={stat.value}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-dark-000 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div>
            <p className="text-xs text-dark-100 uppercase tracking-widest mb-4 font-medium">
              Trusted by 1000+ companies
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {LOGOS.map((brand) => (
                <span key={brand} className="text-sm font-bold text-white/30 tracking-wider uppercase">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Floating UI cards */}
        <div className="relative hidden lg:block h-[520px]">

          {/* Central glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-200/15 blur-2xl" />

          {/* Central product card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-sm font-semibold">Team Recognition</span>
              <span className="text-[10px] bg-green-000 text-green-300 font-bold px-2 py-0.5 rounded-full">Live</span>
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Design Team", pts: "+1,240 pts", pct: 82 },
                { name: "Engineering", pts: "+980 pts", pct: 65 },
                { name: "Sales", pts: "+760 pts", pct: 50 },
              ].map((row) => (
                <div key={row.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/70">{row.name}</span>
                    <span className="text-blue-100 font-medium">{row.pts}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-100 to-blue-200 transition-all"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification cards */}
          {FLOATING_CARDS.map((card) => (
            <div
              key={card.id}
              className={`absolute ${card.pos} w-52 rounded-xl border ${card.color} backdrop-blur-sm p-3 shadow-lg`}
              style={{
                animation: `float 3s ease-in-out ${card.delay} infinite alternate`,
              }}
            >
              <div className="flex items-start gap-2.5">
                <span className="text-xl leading-none">{card.emoji}</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-dark-300 truncate">{card.title}</p>
                  <p className="text-[11px] text-dark-100 truncate mt-0.5">{card.sub}</p>
                </div>
                <span className={`ml-auto shrink-0 text-xs font-bold ${card.textColor}`}>{card.value}</span>
              </div>
            </div>
          ))}

          {/* Copilot pill at top */}
          <div
            className="absolute top-[5%] left-[10%] flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg"
            style={{ animation: "float 4s ease-in-out 0.2s infinite alternate" }}
          >
            <span className="text-sm">✨</span>
            <span className="text-xs font-medium text-white">Copilot suggests a nudge</span>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light-000 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 4.5L10 7L5.5 9.5V4.5Z" fill="currentColor" />
    </svg>
  );
}
