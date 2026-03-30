"use client";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

type Particle = {
  left: string;
  top: string;
  width: string;
  height: string;
  animationDelay: string;
  animationDuration: string;
};

function makeParticles(count: number, seed: number, kind: "dot" | "orb"): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const s = seed + i * 17.23;
    const r1 = Math.abs(Math.sin(s)) * 0.999;
    const r2 = Math.abs(Math.cos(s * 1.7)) * 0.999;
    const r3 = Math.abs(Math.sin(s * 2.3 + 4)) * 0.999;
    const r4 = Math.abs(Math.cos(s * 0.8 + 2)) * 0.999;
    if (kind === "dot") {
      return {
        left: `${r1 * 100}%`,
        top: `${r2 * 100}%`,
        width: `${r3 * 6 + 2}px`,
        height: `${r4 * 6 + 2}px`,
        animationDelay: `${r1 * 5}s`,
        animationDuration: `${r3 * 4 + 3}s`,
      };
    }
    return {
      left: `${r1 * 100}%`,
      top: `${r2 * 100}%`,
      width: `${r3 * 100 + 50}px`,
      height: `${r4 * 100 + 50}px`,
      animationDelay: `${r2 * 8}s`,
      animationDuration: `${r3 * 6 + 4}s`,
    };
  });
}

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-200 -100C-200 -100 -100 100 200 200C500 300 600 500 600 500",
    "M-180 -120C-180 -120 -80 80 220 180C520 280 620 480 620 480",
    "M-160 -140C-160 -140 -60 60 240 160C540 260 640 460 640 460",
    "M-140 -160C-140 -160 -40 40 260 140C560 240 660 440 660 440",
    "M-120 -180C-120 -180 -20 20 280 120C580 220 680 420 680 420",
    "M-100 -200C-100 -200 0 0 300 100C600 200 700 400 700 400",
    "M200 -100C200 -100 300 100 600 200C900 300 1000 500 1000 500",
    "M220 -120C220 -120 320 80 620 180C920 280 1020 480 1020 480",
  ];

  const dotParticles = useMemo(() => makeParticles(30, 1, "dot"), []);
  const orbParticles = useMemo(() => makeParticles(5, 99, "orb"), []);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden z-0",
        className
      )}
      style={{
        contain: "layout style paint",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          {paths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeLinecap="round"
              strokeWidth="2"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${4 + index * 0.5}s`,
              }}
            />
          ))}
        </g>

        <g opacity="0.6">
          {paths.slice(0, 4).map((path, index) => (
            <path
              key={`beam-${index}`}
              d={path}
              stroke={`url(#glowGradient-${index})`}
              strokeLinecap="round"
              strokeWidth="4"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.7}s`,
                animationDuration: `${6 + index}s`,
              }}
            />
          ))}
        </g>

        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={index}
              id={`linearGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="30%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          ))}

          {paths.slice(0, 4).map((_, index) => (
            <linearGradient
              key={`glow-${index}`}
              id={`glowGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          ))}

          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent" />

      <div className="absolute inset-0">
        {dotParticles.map((p, i) => (
          <div
            key={`d-${i}`}
            className="absolute bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}

        {orbParticles.map((p, i) => (
          <div
            key={`o-${i}`}
            className="absolute bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20" />
    </div>
  );
};
