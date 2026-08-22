import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "DataNova Labz transformed how we handle our data. What used to take hours of manual work is now fully automated — and the dashboards give us real-time visibility into our operations.",
    author: "Operations Manager",
    role: "Logistics Company",
    company: "Mid-Market Logistics",
  },
  {
    quote:
      "We needed a backend system that could connect our tools and scale with our growth. The team delivered exactly what we needed — clean, well-structured, and reliable.",
    author: "Technical Founder",
    role: "SaaS Startup",
    company: "Series A Startup",
  },
  {
    quote:
      "They helped us move from scattered spreadsheets to a proper data pipeline and Power BI dashboards. Now our entire team can see the same metrics in real time.",
    author: "Business Intelligence Lead",
    role: "E-commerce Company",
    company: "Growing E-commerce Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Our Clients Say"
            description="We let our work and our clients speak for us."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-7">
                <Quote className="mb-4 size-8 text-accent/30" aria-hidden="true" />
                <p className="flex-1 text-sm leading-relaxed text-frost/85 sm:text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-line/60 pt-5">
                  <p className="text-sm font-semibold text-frost">
                    {testimonial.author}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
