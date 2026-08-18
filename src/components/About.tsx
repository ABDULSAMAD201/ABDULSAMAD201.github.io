import {
  Database,
  Workflow,
  Braces,
  LayoutDashboard,
  Bot,
} from "lucide-react";
import FlowDiagram from "./FlowDiagram";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const JOURNEY_NODES = [
  "Raw Data",
  "Data Engineering",
  "Database",
  "Backend / API",
  "Dashboards",
  "AI Automation",
];

const JOURNEY_ICONS = [
  Database,
  Workflow,
  Database,
  Braces,
  LayoutDashboard,
  Bot,
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="About DataNova Labz"
            description="A technology team focused on building end-to-end data and software solutions."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 text-sm leading-relaxed text-muted sm:space-y-5 sm:text-base">
              <p>
                DataNova Labz is a technology team focused on building
                end-to-end data and software solutions.
              </p>
              <p>
                We combine data engineering, business intelligence, backend
                development, and AI-powered automation to help businesses turn
                disconnected data and complex processes into reliable,
                practical systems.
              </p>
              <p>
                Our work can span the full journey — from extracting and
                processing raw data to building pipelines, databases, APIs,
                dashboards, and intelligent automation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-line/80 bg-card/60 p-4 sm:p-6">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-faint sm:mb-5 sm:text-xs">
                The full data &amp; software journey
              </p>
              <FlowDiagram
                nodes={JOURNEY_NODES}
                icons={JOURNEY_ICONS}
                direction="vertical"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
