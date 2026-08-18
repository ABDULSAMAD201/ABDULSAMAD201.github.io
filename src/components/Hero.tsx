import {
  Database,
  Workflow,
  Braces,
  LayoutDashboard,
  Bot,
} from "lucide-react";
import FlowDiagram from "./FlowDiagram";
import { btnPrimary, btnSecondary } from "./ui";

const PIPELINE_NODES = [
  "Data Sources",
  "Pipelines",
  "Databases",
  "APIs",
  "Dashboards",
  "AI Automation",
];

const PIPELINE_ICONS = [
  Database,
  Workflow,
  Database,
  Braces,
  LayoutDashboard,
  Bot,
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 sm:pb-24 sm:pt-36 md:pt-44 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[11px] font-medium text-muted sm:px-4 sm:text-xs">
          <span className="pulse size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Data &amp; Software Engineering Team
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-frost sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl">
          End-to-End <span className="text-accent">Data &amp; Software</span>{" "}
          Solutions for Modern Businesses
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          We build reliable data pipelines, powerful dashboards, scalable
          backend systems, and AI-powered solutions that help businesses turn
          complex processes and data into practical, automated systems.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <a href="#projects" className={`${btnPrimary} w-full sm:w-auto sm:min-w-48`}>
            View Our Projects
          </a>
          <a href="#contact" className={`${btnSecondary} w-full sm:w-auto sm:min-w-48`}>
            Let&apos;s Work Together
          </a>
        </div>

        {/* Connected systems / data flow visual */}
        <div className="mt-14 w-full sm:mt-16">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-faint sm:mb-5 sm:text-xs">
            From raw data to intelligent automation
          </p>
          <div className="rounded-2xl border border-line/80 bg-surface/50 p-3 backdrop-blur-sm sm:p-5 md:p-6">
            <FlowDiagram nodes={PIPELINE_NODES} icons={PIPELINE_ICONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
