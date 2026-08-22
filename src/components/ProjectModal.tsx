"use client";

import { useEffect } from "react";
import {
  X,
  AlertTriangle,
  CheckCircle2,
  ImageIcon,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import type { Project } from "@/data/projects";
import FlowDiagram from "./FlowDiagram";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const sectionLabel =
  "text-xs font-semibold uppercase tracking-[0.18em] text-accent";

/** Extract bullet-point capabilities from solution blocks (for projects without explicit capabilities). */
function extractCapabilities(project: Project): string[] {
  if (project.capabilities && project.capabilities.length > 0) {
    return project.capabilities;
  }
  const items: string[] = [];
  for (const block of project.solution) {
    if (block.items) items.push(...block.items);
  }
  return items;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll and close on Escape.
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

  const capabilities = extractCapabilities(project);
  const images = project.images ?? [];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-night/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-line bg-card shadow-2xl sm:rounded-2xl sm:max-h-[85vh]">
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <span className="bottom-sheet-handle" aria-hidden="true" />
        </div>

        <div className="flex items-center justify-between gap-4 border-b border-line/70 px-4 py-3 sm:px-8 sm:py-4">
          <div className="min-w-0">
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent sm:px-3 sm:text-xs">
              {project.category}
            </span>
            <h3
              id="project-modal-title"
              className="mt-2 font-display text-lg font-bold tracking-tight text-frost sm:text-2xl"
            >
              {project.title}
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

        <div
          className="overflow-y-auto px-4 py-5 sm:px-8 sm:pb-8"
          style={{
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
          }}
        >
          {/* Project Overview */}
          <div>
            <h4 className={sectionLabel}>Project Overview</h4>
            <p className="mt-2.5 text-sm leading-relaxed text-frost/90">
              {project.overview}
            </p>
          </div>

          {/* The Challenge */}
          <div className="mt-6 sm:mt-7">
            <div className="flex items-center gap-2">
              <AlertCircle className="size-4 text-orange-400/80" aria-hidden="true" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400/80">
                The Challenge
              </h4>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-frost/90">
              {project.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="mt-6 sm:mt-7">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-accent" aria-hidden="true" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our Solution
              </h4>
            </div>
            {project.solution.map((block, i) => (
              <div key={i} className="mt-3">
                {block.heading && (
                  <p className="text-sm font-semibold text-frost">
                    {block.heading}
                  </p>
                )}
                {block.text && (
                  <p className="mt-1 text-sm leading-relaxed text-frost/90">
                    {block.text}
                  </p>
                )}
                {block.items && (
                  <ul className="mt-2 space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-frost/90 sm:gap-2.5"
                      >
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
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

          {/* Key Capabilities */}
          {capabilities.length > 0 && (
            <div className="mt-6 sm:mt-7">
              <h4 className={sectionLabel}>Key Capabilities</h4>
              <ul className="mt-2.5 space-y-2">
                {capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-2 text-sm leading-relaxed text-frost/90 sm:gap-2.5"
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
          )}

          {/* The Result */}
          <div className="mt-6 sm:mt-7">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-emerald-400/80" aria-hidden="true" />
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400/80">
                The Result
              </h4>
            </div>
            <ul className="mt-2.5 space-y-2">
              {project.outcome.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm leading-relaxed text-frost/90 sm:gap-2.5"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-emerald-400/80"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Callout */}
          {project.callout && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent/25 bg-accent/5 p-3.5 sm:mt-6 sm:p-4">
              <AlertTriangle
                className="mt-0.5 size-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <p className="text-xs leading-relaxed text-muted">
                {project.callout}
              </p>
            </div>
          )}

          {/* Technologies Used */}
          <div className="mt-6 sm:mt-7">
            <h4 className={sectionLabel}>Technologies Used</h4>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Images */}
          {images.length > 0 && (
            <div className="mt-6 sm:mt-7">
              <h4 className={sectionLabel}>
                <ImageIcon
                  className="mr-1.5 inline size-3.5"
                  aria-hidden="true"
                />
                Project {images.length === 1 ? "Image" : "Images"}
              </h4>
              <div className="mt-3 space-y-3">
                {images.map((src, i) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-xl border border-line/60 bg-night/30"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.title} — screenshot ${i + 1}`}
                      className="w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture */}
          <div className="mt-6 sm:mt-7">
            <h4 className={sectionLabel}>Architecture</h4>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-line/80 bg-surface/50 p-3 sm:p-5">
              <FlowDiagram nodes={project.flow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
