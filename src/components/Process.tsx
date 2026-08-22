import { Search, PenTool, Code2, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business, your challenges, and what success looks like. No assumptions — just clear conversations about your goals.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Plan",
    description:
      "We design the right data, software, or automation solution tailored to your specific needs and infrastructure.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We develop and rigorously test your solution, keeping you informed with regular updates throughout the process.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description:
      "We deploy your solution, provide documentation, and offer ongoing support to ensure everything runs smoothly.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Our Process"
            description="A clear, structured approach to delivering solutions that work."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-7">
                {/* Step number */}
                <span className="mb-4 font-display text-3xl font-bold text-accent/30 transition-colors group-hover:text-accent/50 sm:text-4xl">
                  {step.number}
                </span>

                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15 sm:size-11">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>

                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-frost sm:mt-5">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-2.5">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {i < STEPS.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-full bg-gradient-to-r from-line to-transparent lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
