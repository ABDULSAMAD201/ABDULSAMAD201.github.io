"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, Eye, CheckCircle2 } from "lucide-react";
import { dashboards } from "@/data/dashboards";
import type { DashboardItem } from "@/data/dashboards";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/*  Dashboard Detail Modal (expanded tablet screen)                    */
/* ------------------------------------------------------------------ */

const sectionLabel =
  "text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]";

function DashboardModal({
  item,
  onClose,
}: {
  item: DashboardItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => setOpen(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleClose() {
    setOpen(false);
    setTimeout(onClose, 300);
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dashboard details"
        onClick={handleClose}
        className="absolute inset-0 cursor-default bg-[#020719]/80 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0 }}
      />

      {/* Expanded screen */}
      <div
        className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl p-[1.5px] shadow-[0_0_60px_rgba(56,189,248,0.12)] transition-all duration-300 ease-out sm:rounded-2xl sm:max-h-[88vh]"
        style={{
          background: "linear-gradient(135deg, #24B8FF 0%, #7C3AED 50%, #FF8A2A 100%)",
          boxShadow: "0 0 20px rgba(36,184,255,0.2), 0 0 40px rgba(124,58,237,0.1)",
          transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(24px)",
          opacity: open ? 1 : 0,
        }}
      >
        {/* Inner container with dark background */}
        <div className="flex flex-col overflow-hidden rounded-t-[14px] bg-[#0a1128] sm:rounded-[14px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-[#1a2a4a] px-5 py-4 sm:px-8">
          <div className="min-w-0">
            <span className="rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-3 py-0.5 text-[11px] font-medium text-[#38bdf8] sm:text-xs">
              {item.industry}
            </span>
            <h3
              id="dashboard-modal-title"
              className="mt-2 text-lg font-bold tracking-tight text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-tanker)" }}
            >
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#1a2a4a] text-[#64748b] transition-all duration-200 hover:border-[#38bdf8]/40 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto px-5 py-6 sm:px-8 sm:pb-8"
          style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "contain" }}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Left: info */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div>
                <h4 className={sectionLabel}>Overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#cbd5e1]">
                  {item.overview}
                </p>
              </div>

              <div>
                <h4 className={sectionLabel}>What It Helps With</h4>
                <ul className="mt-2 space-y-2">
                  {item.capabilities.slice(0, 3).map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[#cbd5e1]"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-[#38bdf8]"
                        aria-hidden="true"
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className={sectionLabel}>Technology</h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#1a2a4a] bg-[#0d1a33] px-3 py-1 text-xs text-[#94a3b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: screenshot */}
            <div className="flex flex-col gap-3 lg:col-span-3">
              <h4 className={sectionLabel}>
                <Eye className="mr-1.5 inline size-3.5" aria-hidden="true" />
                Dashboard Screenshot
              </h4>
              <div className="overflow-hidden rounded-xl border border-[#1a2a4a] bg-[#060d1f]/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.name} — Power BI dashboard screenshot`}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dashboard Tablet Card                                              */
/* ------------------------------------------------------------------ */

function DashboardTablet({
  item,
  onOpen,
}: {
  item: DashboardItem;
  onOpen: (item: DashboardItem) => void;
}) {
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
      className="group cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      onClick={() => onOpen(item)}
    >
      <div
        className="tablet-bezel relative rounded-2xl border border-[#1a2a4a] bg-[#0a1128] transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 16 : 0}px)`,
          boxShadow: hovered
            ? "0 25px 50px -12px rgba(56,189,248,0.25), 0 0 30px rgba(56,189,248,0.1)"
            : "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        {/* Inner bezel frame */}
        <div className="rounded-2xl border border-[#1a2a4a]/80 bg-[#0d1a33] p-[3px]">
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[14px] bg-[#060d1f]">
            {/* Dashboard screenshot */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={`${item.name} — Power BI dashboard screenshot`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#020719]/0 transition-colors duration-300 group-hover:bg-[#020719]/40">
                <span
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-[#020719]/60 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                  style={{ transform: hovered ? "translateY(0)" : "translateY(8px)" }}
                >
                  <Eye className="size-4" aria-hidden="true" />
                  View Details
                </span>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex items-center justify-between gap-2 border-t border-[#1a2a4a] px-4 py-3 sm:px-5">
              <p
                className="min-w-0 truncate text-sm font-bold tracking-tight text-white"
                style={{ fontFamily: "var(--font-tanker)" }}
              >
                {item.name}
              </p>
              <span className="shrink-0 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#38bdf8] sm:text-xs">
                {item.industry}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gallery                                                             */
/* ------------------------------------------------------------------ */

export default function DashboardGallery() {
  const [selected, setSelected] = useState<DashboardItem | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <div className="mt-16 sm:mt-24">
      <Reveal>
        <div className="flex flex-col items-start gap-3 text-left sm:gap-4">
          <span className="inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs" style={{ color: '#09b3e4', border: '1px solid #09b3e4' }}>
            Power BI Showcase
          </span>
          <h3 className="px-2 font-display text-xl font-bold tracking-tight text-frost sm:text-2xl md:text-3xl">
            30+ Dashboards Across Multiple <span style={{ color: '#C4B5A0' }}>Industries</span>
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            We have built Power BI dashboards for a range of business and
            operational use cases, transforming raw data into interactive
            reporting and decision-making tools.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {dashboards.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 90}>
            <DashboardTablet item={item} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 text-center text-sm text-muted sm:mt-8">
          30+ Power BI dashboards built across{" "}
          <span className="text-frost">
            finance, healthcare, logistics, marketing, operations, and
            e-commerce
          </span>
          .
        </p>
      </Reveal>

      {selected && (
        <DashboardModal item={selected} onClose={closeModal} />
      )}
    </div>
  );
}
