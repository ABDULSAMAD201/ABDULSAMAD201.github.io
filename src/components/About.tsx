import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const BENEFITS = [
  {
    title: "Connect Your Data",
    description:
      "Bring data from spreadsheets, databases, APIs, and the tools you already use into one connected system.",
  },
  {
    title: "Automate Manual Work",
    description:
      "Stop spending hours on repetitive tasks and manual reports. We build automation that handles the busywork for you.",
  },
  {
    title: "Make Faster Decisions",
    description:
      "Turn your business data into clear dashboards and useful insights, so you can see what's happening and know what to do next.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-surface/40">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Transformation"
            title={<>Turning Data Into <span style={{ color: '#A78BFA' }}>Clarity</span></>}
            description="We bring your data and tools together, take repetitive work off your plate, and turn your information into something you can actually use."
            align="left"
          />
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 80}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-xl px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 sm:p-6"
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
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: "clamp(14px, 1.5vw, 15px)",
                      lineHeight: 1.55,
                      color: "#B8C3D6",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div className="mt-14 text-center sm:mt-18">
            <h3
              className="text-xl font-bold tracking-tight text-frost sm:text-2xl"
              style={{ fontFamily: "var(--font-tanker)" }}
            >
              Have a process you want to automate?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Tell us what's slowing you down. We'll look at your data, processes, and tools and find where automation or AI can make a real difference.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
