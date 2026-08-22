"use client";

import { ArrowRight, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const thumbnail = project.images?.[0];

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group flex h-full w-full flex-col rounded-2xl border border-line bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.2)] active:translate-y-0 active:scale-[0.99]"
    >
      {/* Thumbnail image (if available) */}
      {thumbnail && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-night/30">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={`${project.title} — project screenshot`}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-7">
        {/* Category badge */}
        <span className="self-start rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:px-3.5">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="font-display text-lg font-bold tracking-tight text-frost transition-colors group-hover:text-accent sm:text-xl">
          {project.title}
        </h3>

        {/* Case study preview: Challenge → Result */}
        <div className="space-y-3">
          {/* Challenge */}
          <div className="flex items-start gap-2.5">
            <AlertCircle className="mt-0.5 size-4 shrink-0 text-orange-400/80" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400/80">
                Challenge
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="flex items-start gap-2.5">
            <TrendingUp className="mt-0.5 size-4 shrink-0 text-emerald-400/80" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400/80">
                Result
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted line-clamp-2">
                {project.outcome[0]}
              </p>
            </div>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface px-2 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full border border-line bg-surface px-2 py-1 text-xs text-faint">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent sm:pt-3">
          View Project Details
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </button>
  );
}
