import { FolderKanban, BarChart3, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

interface Metric {
  icon: LucideIcon;
  value?: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

const METRICS: Metric[] = [
  {
    icon: FolderKanban,
    value: 40,
    suffix: "+",
    label: "Projects Delivered for Clients",
  },
  {
    icon: BarChart3,
    value: 30,
    suffix: "+",
    label: "Power BI Dashboards Built",
  },
  {
    icon: Clock,
    value: 100,
    suffix: "+",
    prefix: "",
    label: "Hours Saved Through Automation",
  },
  {
    icon: Users,
    value: 8,
    suffix: "+",
    label: "Industries Served",
  },
];

export default function Metrics() {
  return (
    <section className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 90}>
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:gap-4 sm:p-6">
                <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/15 sm:size-10">
                  <metric.icon className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight text-frost sm:text-3xl md:text-4xl">
                    {metric.value !== undefined ? (
                      <CountUp
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    ) : (
                      <>
                        {metric.prefix}
                        {metric.display}
                        {metric.suffix}
                      </>
                    )}
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted sm:mt-2 sm:text-sm">
                    {metric.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
