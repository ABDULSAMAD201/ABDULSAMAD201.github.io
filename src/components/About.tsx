import { Cable, Zap, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: Cable,
    title: "Connect Your Data",
    description:
      "Bring data from spreadsheets, databases, APIs, and different business tools into one reliable and connected system.",
  },
  {
    icon: Zap,
    title: "Automate Manual Work",
    description:
      "Reduce repetitive tasks, manual reporting, and inefficient workflows with intelligent automation and AI-powered solutions.",
  },
  {
    icon: BarChart3,
    title: "Make Faster Decisions",
    description:
      "Turn complex business data into clear dashboards, actionable insights, and real-time visibility into your operations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-line/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Transformation"
            title="From Data Chaos to Business Clarity"
            description="We help businesses connect their data, automate repetitive processes, and turn complex information into systems that support faster, smarter decisions."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 100} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_40px_-16px_rgba(56,189,248,0.15)] sm:p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                  <benefit.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-frost">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div className="mt-14 text-center sm:mt-18">
            <h3 className="font-display text-xl font-bold tracking-tight text-frost sm:text-2xl">
              Have a process you want to automate?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Let&apos;s explore how better data, automation, or AI can save your
              business time and improve the way you work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
