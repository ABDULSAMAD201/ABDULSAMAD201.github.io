import { Mail } from "lucide-react";
import { LinkedInIcon } from "./icons";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

// TODO: replace these placeholders with the real email and LinkedIn URL.
const EMAIL = "datanovalabz@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/datanova-labz";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="glow-hero absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + channels */}
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                Contact
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-frost sm:text-3xl md:text-4xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Whether you need a data pipeline, dashboard, backend system,
                API, or AI-powered automation, let&apos;s discuss what
                you&apos;re trying to build and how DataNova Labz can help.
              </p>

              <div className="mt-8 space-y-3 sm:mt-9">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:gap-4 sm:p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent sm:size-10">
                    <Mail className="size-4.5 sm:size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-frost">
                      Email us
                    </span>
                    <span className="block truncate text-sm text-muted">
                      {EMAIL}
                    </span>
                  </span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:gap-4 sm:p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent sm:size-10">
                    <LinkedInIcon className="size-4.5 sm:size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-frost">
                      Connect on LinkedIn
                    </span>
                    <span className="block text-sm text-muted">
                      DataNova Labz
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
