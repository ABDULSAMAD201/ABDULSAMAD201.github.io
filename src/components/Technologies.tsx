import {
  Terminal,
  Zap,
  Database,
  Table2,
  BarChart3,
  Container,
  Link2,
  Brain,
  Bot,
  Cloud,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Tech {
  name: string;
  icon: LucideIcon;
}

const TECHNOLOGIES: Tech[] = [
  { name: "Python", icon: Terminal },
  { name: "FastAPI", icon: Zap },
  { name: "PostgreSQL", icon: Database },
  { name: "SQL", icon: Table2 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Docker", icon: Container },
  { name: "LangChain", icon: Link2 },
  { name: "Ollama", icon: Brain },
  { name: "RAG & AI Agents", icon: Bot },
  { name: "AWS", icon: Cloud },
  { name: "ETL Pipelines", icon: Workflow },
  { name: "DAX & Data Modeling", icon: BarChart3 },
];

export default function Technologies() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Stack"
            title="Technologies We Work With"
            description="We choose the right tools for the job — here are the core technologies behind our solutions."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal key={tech.name} delay={i * 60}>
              <div className="group flex items-center gap-2 rounded-xl border border-line bg-card px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:gap-2.5 sm:px-5 sm:py-3">
                <tech.icon
                  className="size-4 text-accent sm:size-4.5"
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-frost sm:text-sm">
                  {tech.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
