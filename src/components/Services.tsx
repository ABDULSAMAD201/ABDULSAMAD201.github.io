import { Database, BarChart3, Server, Bot } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Service {
  title: string;
  description: string;
  outcomes: string[];
}

const SERVICES: Service[] = [
  {
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
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={<>Technology That Works for <span style={{ color: '#facc15' }}>You</span></>}
            description="We build practical solutions that simplify your work and help your business run better."
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:gap-6 sm:mt-14 grid-cols-1 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 90} className="h-full">
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-xl px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 sm:px-6 sm:py-6"
                style={{
                  background: "linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)",
                  border: "1px solid rgba(36, 184, 255, 0.2)",
                }}
              >
                <div className="relative z-10">
                  <h3
                    style={{
                      fontSize: "clamp(17px, 2vw, 20px)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      color: "#E8EEF8",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: "clamp(14px, 1.5vw, 15px)",
                      lineHeight: 1.55,
                      color: "#B8C3D6",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10" style={{ marginTop: 20 }}>
                  <p
                    style={{
                      marginBottom: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "#24B8FF",
                    }}
                  >
                    Business Outcomes
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 14,
                          lineHeight: 1.5,
                          color: "#D1D9E8",
                        }}
                      >
                        <span
                          style={{
                            marginTop: 6,
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#FF8A2A",
                            flexShrink: 0,
                          }}
                        />
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
