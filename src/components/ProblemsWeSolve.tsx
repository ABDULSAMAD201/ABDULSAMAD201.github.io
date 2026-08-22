import {
  Clock,
  FileSpreadsheet,
  Repeat,
  Eye,
  LinkIcon,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { btnPrimary } from "./ui";

interface PainPoint {
  icon: LucideIcon;
  text: string;
}

const PAIN_POINTS: PainPoint[] = [
  {
    icon: Clock,
    text: "Spending hours creating manual reports every week",
  },
  {
    icon: FileSpreadsheet,
    text: "Managing critical data across multiple spreadsheets and tools",
  },
  {
    icon: Repeat,
    text: "Repeating the same tasks and processes every single day",
  },
  {
    icon: Eye,
    text: "No real-time visibility into business performance",
  },
  {
    icon: LinkIcon,
    text: "Software systems that don't communicate with each other",
  },
  {
    icon: Sparkles,
    text: "Want automation or AI but don't know where to start",
  },
];

export default function ProblemsWeSolve() {
  return (
    <section id="problems" className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sound Familiar?"
            title="The Problems We Solve"
            description="If any of these challenges sound like your business, we can help."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <Reveal key={point.text} delay={i * 70}>
              <div className="group flex items-start gap-4 rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <point.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-frost/90 sm:text-base">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 text-center sm:mt-16">
            <p className="mb-6 max-w-2xl mx-auto text-sm leading-relaxed text-muted sm:text-base">
              DataNova Labz helps businesses eliminate manual work, connect
              disconnected systems, and build automated solutions that save time
              and deliver real insights.
            </p>
            <a href="#contact" className={`${btnPrimary} sm:min-w-52`}>
              Let&apos;s Solve This Together
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
