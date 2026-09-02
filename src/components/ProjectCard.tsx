"use client";

import { useState, useRef, useCallback } from "react";
import { AlertCircle, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

/* ── Abstract SVG visualisations per project ── */
function TabletViz({ index }: { index: number }) {
  const v = [
    /* 0 — Aviation Weather: flowing lines */
    <svg key="0" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <path d="M0 50 Q60 15 120 50 T240 50" stroke="#38bdf8" strokeWidth="1.2" fill="none" opacity=".3" />
      <path d="M0 65 Q60 30 120 65 T240 65" stroke="#f97316" strokeWidth="1" fill="none" opacity=".22" />
      <path d="M0 35 Q60 5 120 35 T240 35" stroke="#38bdf8" strokeWidth=".6" fill="none" opacity=".15" />
      <circle cx="120" cy="50" r="3.5" fill="#f97316" opacity=".45" />
      <circle cx="180" cy="46" r="2.5" fill="#38bdf8" opacity=".35" />
      <circle cx="60" cy="54" r="2.5" fill="#38bdf8" opacity=".35" />
    </svg>,
    /* 1 — NOTAM: data grid */
    <svg key="1" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <pattern id="tg2" width="22" height="22" patternUnits="userSpaceOnUse">
          <rect width="22" height="22" fill="none" stroke="#38bdf8" strokeWidth=".3" opacity=".12" />
        </pattern>
      </defs>
      <rect width="240" height="100" fill="url(#tg2)" />
      <rect x="30" y="15" width="50" height="28" rx="3" fill="none" stroke="#f97316" strokeWidth="1" opacity=".3" />
      <rect x="95" y="15" width="50" height="28" rx="3" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <rect x="160" y="15" width="50" height="28" rx="3" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <rect x="30" y="58" width="50" height="28" rx="3" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <rect x="95" y="58" width="50" height="28" rx="3" fill="none" stroke="#f97316" strokeWidth="1" opacity=".3" />
      <rect x="160" y="58" width="50" height="28" rx="3" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
    </svg>,
    /* 2 — ETL Pipeline: connected nodes */
    <svg key="2" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <circle cx="40" cy="50" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity=".3" />
      <circle cx="120" cy="50" r="12" fill="none" stroke="#f97316" strokeWidth="1.2" opacity=".35" />
      <circle cx="200" cy="50" r="12" fill="none" stroke="#38bdf8" strokeWidth="1.2" opacity=".3" />
      <line x1="52" y1="50" x2="108" y2="50" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <line x1="132" y1="50" x2="188" y2="50" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <circle cx="80" cy="50" r="3" fill="#f97316" opacity=".35" />
      <circle cx="160" cy="50" r="3" fill="#f97316" opacity=".35" />
    </svg>,
    /* 3 — AI SQL: code */
    <svg key="3" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <text x="24" y="28" fill="#38bdf8" fontSize="10" fontFamily="monospace" opacity=".25">SELECT</text>
      <text x="24" y="48" fill="#f97316" fontSize="10" fontFamily="monospace" opacity=".3">*</text>
      <text x="38" y="48" fill="#38bdf8" fontSize="10" fontFamily="monospace" opacity=".25">FROM</text>
      <text x="24" y="68" fill="#38bdf8" fontSize="10" fontFamily="monospace" opacity=".25">WHERE</text>
      <text x="24" y="88" fill="#38bdf8" fontSize="10" fontFamily="monospace" opacity=".25">ORDER BY</text>
      <circle cx="185" cy="45" r="24" fill="none" stroke="#f97316" strokeWidth="1" opacity=".22" />
      <path d="M174 45 L185 34 L196 45" stroke="#38bdf8" strokeWidth="1.2" fill="none" opacity=".3" />
    </svg>,
    /* 4 — Medical RAG: doc + search */
    <svg key="4" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <rect x="24" y="12" width="60" height="76" rx="4" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".22" />
      <line x1="34" y1="32" x2="74" y2="32" stroke="#38bdf8" strokeWidth=".5" opacity=".15" />
      <line x1="34" y1="44" x2="74" y2="44" stroke="#38bdf8" strokeWidth=".5" opacity=".15" />
      <line x1="34" y1="56" x2="74" y2="56" stroke="#38bdf8" strokeWidth=".5" opacity=".15" />
      <circle cx="168" cy="50" r="30" fill="none" stroke="#f97316" strokeWidth="1" opacity=".28" />
      <line x1="188" y1="70" x2="210" y2="90" stroke="#f97316" strokeWidth="2" opacity=".35" />
      <circle cx="116" cy="50" r="4.5" fill="#f97316" opacity=".3" />
    </svg>,
    /* 5 — Multi-Agent: network */
    <svg key="5" viewBox="0 0 240 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <circle cx="120" cy="50" r="16" fill="none" stroke="#f97316" strokeWidth="1.5" opacity=".35" />
      <circle cx="50" cy="22" r="10" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".28" />
      <circle cx="190" cy="22" r="10" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".28" />
      <circle cx="50" cy="78" r="10" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".28" />
      <circle cx="190" cy="78" r="10" fill="none" stroke="#38bdf8" strokeWidth="1" opacity=".28" />
      <line x1="104" y1="50" x2="60" y2="28" stroke="#38bdf8" strokeWidth=".8" opacity=".2" />
      <line x1="136" y1="50" x2="180" y2="28" stroke="#38bdf8" strokeWidth=".8" opacity=".2" />
      <line x1="104" y1="50" x2="60" y2="72" stroke="#38bdf8" strokeWidth=".8" opacity=".2" />
      <line x1="136" y1="50" x2="180" y2="72" stroke="#38bdf8" strokeWidth=".8" opacity=".2" />
    </svg>,
  ];
  return v[index % v.length];
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 8 });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }, []);

  return (
    <div
      ref={ref}
      className="group h-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      onClick={() => onOpen(project)}
    >
      <div
        className="tablet-bezel relative h-full rounded-2xl border border-[#1a2a4a] bg-[#0a1128] transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 16 : 0}px)`,
          boxShadow: hovered
            ? "0 25px 50px -12px rgba(56,189,248,0.25), 0 0 30px rgba(56,189,248,0.1)"
            : "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        {/* Inner bezel frame */}
        <div className="h-full rounded-2xl border border-[#1a2a4a]/80 bg-[#0d1a33] p-[3px]">
          {/* Screen */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-[14px] bg-[#060d1f] p-5 sm:p-7">
            {/* Abstract visualization (background layer) */}
            <TabletViz index={index} />

            {/* Screen content */}
            <div className="relative z-10 flex h-full flex-col">
              {/* Top: Category */}
              <span className="self-start rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-3.5 py-1 text-xs font-medium text-[#38bdf8] sm:text-sm">
                {project.category}
              </span>

              {/* Title */}
              <h3
                className="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl"
                style={{ fontFamily: "var(--font-tanker)" }}
              >
                {project.title}
              </h3>

              {/* Challenge & Result — fixed height so all cards match */}
              <div className="mt-5 grid flex-1 grid-cols-2 items-stretch gap-4">
                {/* Challenge */}
                <div className="flex flex-col overflow-hidden rounded-lg border border-[#ef4444]/10 bg-[#ef4444]/5 p-3.5">
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="size-3.5 shrink-0 text-[#ef4444]" aria-hidden="true" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ef4444]/80">
                      Challenge
                    </span>
                  </div>
                  <p className="mt-1.5 flex-1 overflow-hidden text-xs leading-relaxed text-white">
                    {project.problem}
                  </p>
                </div>

                {/* Result */}
                <div className="flex flex-col overflow-hidden rounded-lg border border-emerald-400/10 bg-emerald-400/5 p-3.5">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="size-3.5 shrink-0 text-emerald-400/80" aria-hidden="true" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/80">
                      Result
                    </span>
                  </div>
                  <p className="mt-1.5 flex-1 overflow-hidden text-xs leading-relaxed text-white">
                    {project.outcome[0]}
                  </p>
                </div>
              </div>

              {/* Bottom: Explore + tech tags */}
              <div className="mt-4 flex items-end justify-between gap-2">
                <span
                  className="text-xs font-medium text-[#38bdf8]/70 transition-all duration-300"
                  style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)" }}
                >
                  Explore Project →
                </span>
                <div className="flex flex-wrap justify-end gap-1">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#1a2a4a] bg-[#0a1128]/80 px-2.5 py-1 text-[10px] text-[#94a3b8]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full border border-[#1a2a4a] bg-[#0a1128]/80 px-2.5 py-1 text-[10px] text-[#64748b]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Scan-line overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(56,189,248,0.12) 2px, rgba(56,189,248,0.12) 3px)",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
