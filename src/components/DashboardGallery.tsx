"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Eye, CheckCircle2 } from "lucide-react";
import { dashboards } from "@/data/dashboards";
import type { DashboardItem } from "@/data/dashboards";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/*  Dashboard Detail Modal                                             */
/* ------------------------------------------------------------------ */

const sectionLabel =
  "text-xs font-semibold uppercase tracking-[0.18em] text-accent";

function DashboardModal({
  item,
  onClose,
}: {
  item: DashboardItem;
  onClose: () => void;
}) {
  // Lock body scroll + close on Escape
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dashboard details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-night/90 backdrop-blur-md"
      />

      {/* Panel */}
      <div className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-line bg-card shadow-2xl sm:rounded-2xl sm:max-h-[88vh]">
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <span className="h-1 w-9 rounded-full bg-line" aria-hidden="true" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-line/70 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent sm:px-3 sm:text-xs">
              {item.industry}
            </span>
            <h3
              id="dashboard-modal-title"
              className="mt-2 text-lg font-bold tracking-tight text-frost sm:text-xl"
            >
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-10 shrink-0 place-items-center rounded-lg border border-line text-muted transition hover:border-accent/50 hover:text-frost"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          className="overflow-y-auto px-4 py-5 sm:px-6 sm:pb-8"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {/* Desktop: two-column | Mobile: stacked */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Left / Top: info */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              {/* Overview */}
              <div>
                <h4 className={sectionLabel}>Overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-frost/90">
                  {item.overview}
                </p>
              </div>

              {/* What it helps with */}
              <div>
                <h4 className={sectionLabel}>What It Helps With</h4>
                <ul className="mt-2 space-y-2">
                  {item.capabilities.slice(0, 3).map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm leading-relaxed text-frost/90"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key capabilities */}
              <div>
                <h4 className={sectionLabel}>Key Capabilities</h4>
                <ul className="mt-2 space-y-2">
                  {item.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm leading-relaxed text-frost/90"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              <div>
                <h4 className={sectionLabel}>Technology</h4>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right / Bottom: screenshot */}
            <div className="flex flex-col gap-3 lg:col-span-3">
              <h4 className={sectionLabel}>
                <Eye className="mr-1.5 inline size-3.5" aria-hidden="true" />
                Dashboard Screenshot
              </h4>
              <div className="overflow-hidden rounded-xl border border-line/60 bg-night/30">
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
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-xs">
            <span className="h-px w-5 bg-accent/60 sm:w-6" aria-hidden="true" />
            Power BI Showcase
            <span className="h-px w-5 bg-accent/60 sm:w-6" aria-hidden="true" />
          </span>
          <h3 className="px-2 font-display text-xl font-bold tracking-tight text-frost sm:text-2xl md:text-3xl">
            30+ Dashboards Across Multiple Industries
          </h3>
          <p className="max-w-2xl px-2 text-sm leading-relaxed text-muted sm:text-base">
            We have built Power BI dashboards for a range of business and
            operational use cases, transforming raw data into interactive
            reporting and decision-making tools.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {dashboards.map((item, i) => (
          <Reveal key={item.id} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group w-full overflow-hidden rounded-2xl border border-line bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.2)] active:translate-y-0 active:scale-[0.99]"
            >
              {/* Image container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-night/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`${item.name} — Power BI dashboard screenshot`}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay (desktop only) */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-night/0 transition-colors duration-300 group-hover:bg-night/40 max-sm:hidden">
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-night/60 px-4 py-2 text-sm font-medium text-frost opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <Eye className="size-4" aria-hidden="true" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between gap-2 border-t border-line/60 px-3.5 py-3 sm:gap-3 sm:px-5 sm:py-4">
                <p className="min-w-0 truncate text-sm font-semibold text-frost">
                  {item.name}
                </p>
                <span className="shrink-0 rounded-full border border-line bg-surface px-2 py-0.5 text-[11px] text-muted sm:px-2.5 sm:py-1 sm:text-xs">
                  {item.industry}
                </span>
              </div>
            </button>
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

      {/* Dashboard detail modal */}
      {selected && (
        <DashboardModal item={selected} onClose={closeModal} />
      )}
    </div>
  );
}
