import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  PythonIcon,
  FastAPIIcon,
  PostgreSQLIcon,
  SQLIcon,
  PowerBIIcon,
  DockerIcon,
  LangChainIcon,
  OllamaIcon,
  RAGIcon,
  AWSIcon,
  ETLPipelineIcon,
  DAXIcon,
} from "./TechIcons";
import type { ComponentType } from "react";
import type { SVGProps } from "react";

interface Tech {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

const TECHNOLOGIES: Tech[] = [
  { name: "Python", icon: PythonIcon, color: '#3776AB' },
  { name: "FastAPI", icon: FastAPIIcon, color: '#009688' },
  { name: "PostgreSQL", icon: PostgreSQLIcon, color: '#336791' },
  { name: "SQL", icon: SQLIcon, color: '#1E88E5' },
  { name: "Power BI", icon: PowerBIIcon, color: '#f2c811' },
  { name: "Docker", icon: DockerIcon, color: '#2496ED' },
  { name: "LangChain", icon: LangChainIcon, color: '#1c3c3c' },
  { name: "Ollama", icon: OllamaIcon, color: '#ffffff' },
  { name: "RAG & AI Agents", icon: RAGIcon, color: '#a855f7' },
  { name: "AWS", icon: AWSIcon, color: '#FF9900' },
  { name: "ETL Pipelines", icon: ETLPipelineIcon, color: '#38bdf8' },
  { name: "DAX & Data Modeling", icon: DAXIcon, color: '#10b981' },
];

function TechItem({ tech }: { tech: Tech }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <tech.icon
        className="size-10 sm:size-12"
        style={{ color: tech.color }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap text-[10px] font-medium text-muted sm:text-xs">
        {tech.name}
      </span>
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="relative overflow-hidden pb-8 sm:pb-10 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-24 md:pt-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Stack"
            title={<>Technologies We Work <span style={{ color: '#f97316' }}>With</span></>}
            description="From design to development, these are the tools and technologies we use to turn ideas into real-world solutions."
            align="left"
          />
        </Reveal>
      </div>

      {/* Single-row seamless marquee */}
      <div className="mt-3 sm:mt-4">
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track">
            {TECHNOLOGIES.map((tech, i) => (
              <TechItem key={`t-${i}`} tech={tech} />
            ))}
            {TECHNOLOGIES.map((tech, i) => (
              <TechItem key={`td-${i}`} tech={tech} />
            ))}
            {TECHNOLOGIES.map((tech, i) => (
              <TechItem key={`t3-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
