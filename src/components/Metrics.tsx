"use client";

import { useRef, useEffect, useState } from "react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

/* ── Data ───────────────────────────────────────────────────────── */
interface Metric {
  value: number;
  suffix: string;
  label: string;
  viz: "bars" | "dashboard" | "ring" | "dots";
  labelColor?: string;
}

const METRICS: Metric[] = [
  { value: 40, suffix: "+", label: "Projects Delivered\nfor Clients", viz: "bars" },
  { value: 30, suffix: "+", label: "Power BI Dashboards\nBuilt", viz: "dashboard" },
  { value: 100, suffix: "+", label: "Hours Saved\nThrough Automation", viz: "ring" },
  { value: 8, suffix: "+", label: "Industries\nServed", viz: "dots", labelColor: "#9CA3AF" },
];

/* ── Mini visualizations (SVG) ──────────────────────────────────── */

function BarsViz({ active }: { active: boolean }) {
  const heights = [40, 60, 48, 72, 56, 80, 68];
  return (
    <svg viewBox="0 0 84 32" className="h-8 w-21" aria-hidden="true">
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 12 + 1}
          width={8}
          rx={2}
          y={32 - h * 0.35}
          height={h * 0.35}
          fill={i % 2 === 0 ? "rgba(9,179,228,0.5)" : "rgba(9,179,228,0.3)"}
          className="metric-bar"
          style={{
            transformOrigin: `bottom`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
      {/* trend line */}
      <polyline
        points="5,22 17,16 29,20 41,12 53,14 65,8 77,10"
        fill="none"
        stroke="#f97316"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="metric-trend"
        style={{ strokeDasharray: 120, strokeDashoffset: active ? 0 : 120 }}
      />
      <circle cx="77" cy="10" r="2.5" fill="#f97316" className="metric-dot" style={{ opacity: active ? 1 : 0 }} />
    </svg>
  );
}

function DashboardViz({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 64 40" className="h-10 w-16" aria-hidden="true">
      {/* 4 mini panels */}
      <rect x="1" y="1" width="29" height="18" rx="3" fill="rgba(9,179,228,0.08)" stroke="rgba(9,179,228,0.2)" strokeWidth="0.5" className="metric-panel" style={{ animationDelay: "0s" }} />
      <rect x="34" y="1" width="29" height="18" rx="3" fill="rgba(9,179,228,0.08)" stroke="rgba(9,179,228,0.2)" strokeWidth="0.5" className="metric-panel" style={{ animationDelay: "0.1s" }} />
      <rect x="1" y="22" width="29" height="17" rx="3" fill="rgba(9,179,228,0.08)" stroke="rgba(9,179,228,0.2)" strokeWidth="0.5" className="metric-panel" style={{ animationDelay: "0.2s" }} />
      <rect x="34" y="22" width="29" height="17" rx="3" fill="rgba(9,179,228,0.08)" stroke="rgba(9,179,228,0.2)" strokeWidth="0.5" className="metric-panel" style={{ animationDelay: "0.3s" }} />
      {/* bar chart in panel 1 */}
      <rect x="5" y="12" width="3" height="5" rx="1" fill="rgba(9,179,228,0.5)" className="metric-bar" style={{ animationDelay: "0.1s" }} />
      <rect x="10" y="8" width="3" height="9" rx="1" fill="rgba(9,179,228,0.6)" className="metric-bar" style={{ animationDelay: "0.15s" }} />
      <rect x="15" y="10" width="3" height="7" rx="1" fill="rgba(9,179,228,0.4)" className="metric-bar" style={{ animationDelay: "0.2s" }} />
      <rect x="20" y="5" width="3" height="12" rx="1" fill="#f97316" opacity="0.7" className="metric-bar" style={{ animationDelay: "0.25s" }} />
      {/* line chart in panel 2 */}
      <polyline points="38,14 42,10 46,12 50,7 54,9 58,5" fill="none" stroke="rgba(9,179,228,0.5)" strokeWidth="1" strokeLinecap="round" className="metric-trend" style={{ strokeDasharray: 60, strokeDashoffset: active ? 0 : 60, transition: "stroke-dashoffset 1.5s ease" }} />
      {/* donut in panel 3 */}
      <circle cx="15.5" cy="30.5" r="5" fill="none" stroke="rgba(9,179,228,0.15)" strokeWidth="2" />
      <circle cx="15.5" cy="30.5" r="5" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="22" strokeDashoffset="7" strokeLinecap="round" className="metric-ring" style={{ opacity: active ? 1 : 0 }} />
      {/* kpi number in panel 4 */}
      <rect x="38" y="26" width="18" height="3" rx="1.5" fill="rgba(9,179,228,0.3)" className="metric-bar" style={{ animationDelay: "0.2s" }} />
      <rect x="38" y="31" width="12" height="2" rx="1" fill="rgba(9,179,228,0.15)" className="metric-bar" style={{ animationDelay: "0.3s" }} />
    </svg>
  );
}

function RingViz({ active }: { active: boolean }) {
  const circumference = 2 * Math.PI * 18;
  const progress = 0.78;
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      {/* track */}
      <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(9,179,228,0.1)" strokeWidth="3" />
      {/* progress */}
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="url(#ring-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={active ? circumference * (1 - progress) : circumference}
        transform="rotate(-90 24 24)"
        className="metric-ring"
        style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1)" }}
      />
      {/* orange accent dot */}
      <circle
        cx="24"
        cy="6"
        r="2.5"
        fill="#f97316"
        className="metric-dot"
        style={{ opacity: active ? 1 : 0, transition: "opacity 0.6s ease 1.2s" }}
      />
      <defs>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#09b3e4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DotsViz({ active }: { active: boolean }) {
  const items = [
    { x: 6, y: 8, r: 4, color: "rgba(9,179,228,0.5)" },
    { x: 18, y: 8, r: 3, color: "rgba(9,179,228,0.35)" },
    { x: 30, y: 8, r: 4, color: "rgba(9,179,228,0.45)" },
    { x: 42, y: 8, r: 3, color: "rgba(9,179,228,0.3)" },
    { x: 12, y: 22, r: 3.5, color: "rgba(9,179,228,0.4)" },
    { x: 24, y: 22, r: 4.5, color: "#f97316" },
    { x: 36, y: 22, r: 3, color: "rgba(9,179,228,0.35)" },
  ];
  return (
    <svg viewBox="0 0 48 30" className="h-7 w-12" aria-hidden="true">
      {items.map((it, i) => (
        <circle
          key={i}
          cx={it.x}
          cy={it.y}
          r={it.r}
          fill={it.color}
          className="metric-dot"
          style={{
            opacity: active ? 1 : 0,
            transition: `opacity 0.5s ease ${i * 0.07}s`,
          }}
        />
      ))}
    </svg>
  );
}

const VIZ: Record<string, React.FC<{ active: boolean }>> = {
  bars: BarsViz,
  dashboard: DashboardViz,
  ring: RingViz,
  dots: DotsViz,
};

/* ── Component ──────────────────────────────────────────────────── */

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
        {/* ── KPI row ── */}
        <div ref={ref} className="relative grid grid-cols-2 items-start gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-4 lg:gap-x-8">
          {METRICS.map((m, i) => {
            const Viz = VIZ[m.viz];
            return (
              <Reveal key={m.label} delay={i * 100}>
                <div className="group flex flex-col items-center text-center">
                  {/* Visualization — fixed height so numbers align */}
                  <div className="flex h-12 w-full items-end justify-center opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                    <Viz active={active} />
                  </div>
                  {/* Number */}
                  <p className="mt-3 font-display text-4xl font-bold tracking-tight text-frost transition-all duration-300 group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.5)] xl:text-5xl">
                    <CountUp
                      value={m.value}
                      suffix={m.suffix}
                      suffixClassName="text-[#f09847] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                    />
                  </p>
                  {/* Label */}
                  <p className="mt-2.5 max-w-[170px] whitespace-pre-line text-xs leading-snug sm:text-sm" style={{ color: m.labelColor || undefined }}>
                    {m.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
