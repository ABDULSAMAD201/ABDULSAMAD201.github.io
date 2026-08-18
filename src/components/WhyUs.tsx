import { DatabaseZap, Code2, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Point {
  icon: LucideIcon;
  title: string;
  description: string;
}

const POINTS: Point[] = [
  {
    icon: DatabaseZap,
    title: "From Data to Decisions",
    description:
      "We can help move data from disconnected sources through pipelines and processing into databases and dashboards.",
  },
  {
    icon: Code2,
    title: "From Requirements to Software",
    description:
      "We build backend services and APIs that turn business requirements into reliable software systems.",
  },
  {
    icon: Sparkles,
    title: "Automation Where It Matters",
    description:
      "We use AI and automation to reduce repetitive work and make technical workflows more efficient.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why DataNova Labz"
            title="Built for End-to-End Technical Solutions"
            description="We work across the full technical journey — from raw data and requirements to reliable systems and automation."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-7">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15 sm:size-11">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-frost sm:mt-5">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-2.5">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
