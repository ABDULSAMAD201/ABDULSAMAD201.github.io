"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { LinkedInIcon } from "./icons";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const EMAIL = "datanovalabz@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/datanova-labz";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Copy email address"
      className="ml-1.5 inline-flex shrink-0 items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-muted transition hover:border-accent/40 hover:text-accent"
    >
      {copied ? (
        <>
          <Check className="size-3" aria-hidden="true" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="size-3" aria-hidden="true" />
          Copy
        </>
      )}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="glow-hero absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + channels */}
          <Reveal>
            <div className="flex h-full flex-col">
              <h3 className="font-display text-xl font-bold tracking-tight text-frost sm:text-2xl">
                Let&apos;s Talk About Your Project
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Whether you need a data pipeline, dashboard, backend system,
                API, or AI-powered automation — we&apos;re here to help you find
                the right solution.
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
                    <span className="flex items-center">
                      <span className="block text-sm font-semibold text-frost">
                        Email us
                      </span>
                      <CopyEmailButton />
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
