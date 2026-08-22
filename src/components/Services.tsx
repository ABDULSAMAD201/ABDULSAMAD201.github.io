import { Database, BarChart3, Server, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  outcomes: string[];
}

const SERVICES: Service[] = [
  {
    icon: Database,
    title: "Data Engineering & ETL",
    description:
      "We connect, clean, and automate your data so your business can make decisions using reliable information.",
    outcomes: [
      "Automated data pipelines that replace manual exports",
      "Clean, centralized data ready for reporting",
      "Scheduled workflows that keep data fresh",
      "Reliable data flow from multiple sources",
    ],
  },
  {
    icon: BarChart3,
    title: "Power BI & Business Intelligence",
    description:
      "Turn scattered spreadsheets and business data into interactive dashboards and real-time insights.",
    outcomes: [
      "Interactive dashboards instead of static spreadsheets",
      "Real-time visibility into business performance",
      "KPIs and metrics at a glance",
      "Better, faster decision-making across teams",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Build scalable backend systems, APIs, and integrations that connect your tools and support your business growth.",
    outcomes: [
      "Custom APIs that connect your software systems",
      "Scalable backends that grow with your business",
      "Database solutions optimized for your needs",
      "Integrations that eliminate manual data transfers",
    ],
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description:
      "Automate repetitive workflows and build AI-powered systems that save time and reduce manual work.",
    outcomes: [
      "AI-powered tools that handle repetitive tasks",
      "Workflow automation that saves hours every week",
      "Intelligent systems that learn from your data",
      "Custom AI solutions tailored to your business",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Solutions That Drive Business Results"
            description="We don't just build technology — we solve business problems. Here's how our services create real value for your company."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="h-full">
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-16px_rgba(56,189,248,0.2)] sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                    <service.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-frost">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-line/60 pt-5 sm:mt-7 sm:pt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
                    Business Outcomes
                  </p>
                  <ul className="space-y-2.5">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-frost/85"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
