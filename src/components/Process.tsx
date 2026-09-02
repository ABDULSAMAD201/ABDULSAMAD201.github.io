"use client";

import { useRef, useEffect } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/* ── Step data ──────────────────────────────────────────────────── */
interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, goals, and the challenges you're trying to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We create a practical solution built around your needs, workflow, and infrastructure.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop and test the solution, keeping everything clear and on track.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We launch your solution, provide support, and make sure everything runs smoothly.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => el.classList.toggle("in-view", entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title={<>Our <span style={{ color: '#24B8FF' }}>Process</span></>}
            description="A clear, structured approach to delivering solutions that work."
            align="left"
          />
        </Reveal>

        {/* ── Timeline ───────────────────────────────────────────── */}
        <Reveal delay={120}>
          <div
            ref={sectionRef}
            className="process-timeline relative mt-10 sm:mt-14"
          >
            {/* ══════ MOBILE: vertical list ══════ */}
            <div className="sm:hidden">
              <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
              <div className="relative space-y-10">
                {STEPS.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="relative z-10 mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute size-5 rounded-full bg-orange-500/15 blur-sm" />
                      <span className="relative size-3 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-accent">
                        {step.number}
                      </span>
                      <h3 className="mt-0.5 text-sm font-bold text-frost">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ══════ DESKTOP: straight horizontal timeline ══════ */}
            <div className="relative hidden sm:block" style={{ height: 400 }}>
              {/* ── Line (vertically centered) ── */}
              <div
                className="absolute left-0 right-0"
                style={{ top: "50%" }}
              >
                {/* glow */}
                <div
                  className="absolute left-0 right-0"
                  style={{
                    top: -4,
                    height: 9,
                    borderRadius: 5,
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(9,179,228,0.15) 8%, rgba(9,179,228,0.25) 50%, rgba(9,179,228,0.15) 92%, transparent 100%)",
                    filter: "blur(6px)",
                  }}
                />
                {/* line */}
                <div
                  className="absolute left-0 right-0"
                  style={{
                    top: 0,
                    height: 1.5,
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(9,179,228,0.4) 8%, rgba(9,179,228,0.55) 50%, rgba(9,179,228,0.4) 92%, transparent 100%)",
                  }}
                />
                {/* traveling dot */}
                <div className="travel-dot-straight absolute" style={{ top: -4 }}>
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "#fff",
                      boxShadow:
                        "0 0 6px 2px rgba(9,179,228,0.9), 0 0 16px 4px rgba(9,179,228,0.4)",
                    }}
                  />
                </div>
              </div>

              {/* ── Nodes + pin stems + content ── */}
              <div className="absolute inset-0 grid grid-cols-4">
                {STEPS.map((step, i) => {
                  const above = i % 2 === 0;
                  return (
                    <div key={step.number} className="relative flex flex-col items-center">
                      {/* Pin stem line */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                          top: above ? undefined : "50%",
                          bottom: above ? "50%" : undefined,
                          width: 1,
                          height: 52,
                          background: above
                            ? "linear-gradient(to bottom, rgba(9,179,228,0.3), rgba(249,115,22,0.5))"
                            : "linear-gradient(to top, rgba(9,179,228,0.3), rgba(249,115,22,0.5))",
                        }}
                      />
                      {/* Orange node on the line */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        style={{ top: "50%" }}
                      >
                        <div
                          className="absolute -inset-2 rounded-full"
                          style={{
                            background: "rgba(249,115,22,0.1)",
                            filter: "blur(6px)",
                          }}
                        />
                        <div className="relative h-3.5 w-3.5 rounded-full bg-[#f97316] shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                          <span className="absolute inset-[3px] rounded-full bg-white/70" />
                        </div>
                      </div>

                      {/* Content block */}
                      <div
                        className={`group flex flex-col items-center text-center absolute inset-0 ${
                          above
                            ? "justify-start pt-0 pb-[calc(50%+52px)]"
                            : "justify-end pt-[calc(50%+52px)] pb-0"
                        } px-4`}
                      >
                        <span className="font-display text-3xl font-bold text-accent transition-colors duration-300 group-hover:text-[#7dd3fc] sm:text-4xl">
                          {step.number}
                        </span>
                        <h3 className="mt-2 text-base font-bold text-frost transition-colors duration-300 group-hover:text-white sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 max-w-[180px] text-xs leading-relaxed text-muted sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
