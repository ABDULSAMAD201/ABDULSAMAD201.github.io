"use client";

import { useEffect, useState } from "react";
import {
  X,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import type { Project } from "@/data/projects";
import FlowDiagram from "./FlowDiagram";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const label =
  "text-xs font-semibold uppercase tracking-[0.18em] text-[#38bdf8]";

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
      aria-labelledby="pm-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close project details"
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
        {/* Inner container */}
        <div className="flex flex-col overflow-hidden rounded-t-[14px] bg-[#0a1128] sm:rounded-[14px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 border-b border-[#1a2a4a]/60 px-5 py-4 sm:px-8">
            <div className="min-w-0">
              <span className="rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/10 px-3 py-0.5 text-[11px] font-medium text-[#38bdf8] sm:text-xs">
                {project.category}
              </span>
              <h3
                id="pm-title"
                className="mt-2 text-lg font-bold tracking-tight text-white sm:text-2xl"
                style={{ fontFamily: "var(--font-tanker)" }}
              >
                {project.title}
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
            {/* Overview */}
            <div>
              <h4 className={label}>Project Overview</h4>
              <p className="mt-2.5 text-sm leading-relaxed text-white">
                {project.overview}
              </p>
            </div>

            {/* The Challenge */}
            <div className="mt-7">
              <div className="flex items-center gap-2">
                <AlertCircle className="size-4 text-[#ef4444]" aria-hidden="true" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ef4444]">
                  The Challenge
                </h4>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-white">
                {project.problem}
              </p>
            </div>

            {/* Our Solution */}
            <div className="mt-7">
              <div className="flex items-center gap-2">
                <Lightbulb className="size-4 text-[#FFFD77]" aria-hidden="true" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFD77]">
                  Our Solution
                </h4>
              </div>
              {project.solution.map((block, i) => (
                <div key={i} className="mt-2.5">
                  {block.heading && (
                    <p className="text-sm font-semibold text-white">{block.heading}</p>
                  )}
                  {block.text && (
                    <p className="mt-1 text-sm leading-relaxed text-white">
                      {block.text}
                    </p>
                  )}
                  {block.items && (
                    <ul className="mt-2 space-y-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-relaxed text-white"
                        >
                          <span
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FF8A2A]"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* The Result */}
            <div className="mt-7">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-4 text-emerald-400" aria-hidden="true" />
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  The Result
                </h4>
              </div>
              <ul className="mt-2.5 space-y-2">
                {project.outcome.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2 text-sm leading-relaxed text-white"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Capabilities */}
            {project.capabilities && project.capabilities.length > 0 && (
              <div className="mt-7">
                <h4 className={label}>Key Capabilities</h4>
                <ul className="mt-2.5 space-y-2">
                  {project.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm leading-relaxed text-white"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-[#FF8A2A]"
                        aria-hidden="true"
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Callout */}
            {project.callout && (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#38bdf8]/20 bg-[#38bdf8]/5 p-4">
                <p className="text-xs leading-relaxed text-white">{project.callout}</p>
              </div>
            )}

            {/* Tech */}
            <div className="mt-7">
              <h4 className={label}>Technologies Used</h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#24B8FF]/20 bg-[#24B8FF]/10 px-3 py-1 text-xs text-[#24B8FF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="mt-7">
              <h4 className={label}>Architecture</h4>
              <div className="mt-3 overflow-x-auto rounded-2xl border border-[#1a2a4a] bg-[#0d1a33]/60 p-4 sm:p-5">
                <FlowDiagram nodes={project.flow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
