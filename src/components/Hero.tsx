import { ArrowRight } from "lucide-react";
import { btnPrimary } from "./ui";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-32 text-center sm:px-6 sm:pb-24 sm:pt-36 md:pt-44 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-[11px] font-medium text-muted sm:px-4 sm:text-xs">
          <span className="pulse size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Trusted by Growing Businesses
        </span>

        <h1 className="mt-6 max-w-4xl font-display text-[1.75rem] font-bold leading-[1.12] tracking-tight text-frost sm:mt-7 sm:text-4xl md:text-5xl lg:text-6xl">
          Turn Your Data and Manual Processes Into{" "}
          <span className="text-accent">Automated, Intelligent Systems</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
          We help growing businesses turn scattered data and repetitive workflows
          into automated dashboards, scalable software, and AI-powered solutions
          — so you can make faster decisions and focus on what matters.
        </p>

        <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#projects"
            className={`${btnPrimary} w-full sm:w-auto sm:min-w-52`}
          >
            View Our Work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mt-12">
          {[
            "Data Pipelines & ETL",
            "Power BI Dashboards",
            "Backend & APIs",
            "AI & Automation",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 text-xs text-faint sm:text-sm"
            >
              <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
