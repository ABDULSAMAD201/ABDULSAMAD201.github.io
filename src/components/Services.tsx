import { Database, BarChart3, Server, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
  note?: string;
}

const SERVICES: Service[] = [
  {
    icon: Database,
    title: "Data Engineering & ETL",
    description:
      "Build reliable data pipelines that collect, transform, validate, and organize data from multiple sources.",
    capabilities: [
      "ETL and data pipelines",
      "Data extraction",
      "API integration",
      "Data transformation",
      "Data cleaning and validation",
      "PostgreSQL data solutions",
      "Scheduled workflows",
      "Data automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboards & Business Intelligence",
    description:
      "Turn business data into clear, interactive insights that help teams monitor performance and make better decisions.",
    capabilities: [
      "Power BI dashboards",
      "KPI reporting",
      "Data modeling",
      "Power Query transformations",
      "DAX measures",
      "Database and API connections",
      "Automated refresh",
      "Row-level security",
      "Dashboard deployment and sharing",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Build reliable backend systems, APIs, database solutions, and integrations for modern applications.",
    capabilities: [
      "FastAPI development",
      "REST APIs",
      "Backend services",
      "PostgreSQL",
      "SQL solutions",
      "API integrations",
      "Docker",
      "Scalable software systems",
    ],
    note: "Backend project details will be expanded as additional projects are added.",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Build AI-powered tools that help automate workflows, work with data, and make technical tasks easier.",
    capabilities: [
      "AI agents",
      "RAG-based solutions",
      "LangChain applications",
      "AI workflow automation",
      "SQL assistance",
      "Intelligent data tools",
      "LLM-powered applications",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What We Build"
            description="From data infrastructure to business applications and intelligent automation, we build solutions around the technical problems businesses need to solve."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.2)] sm:p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15 sm:size-11">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-frost sm:mt-5">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-2.5">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                {service.note && (
                  <p className="mt-auto pt-4 text-xs italic leading-relaxed text-faint sm:pt-5">
                    {service.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
