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

      {/* Shared SVG glow filters */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="glow-blue">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-orange">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14 sm:pb-24 md:pt-16 md:pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + channels */}
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="mb-4 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs" style={{ color: '#09b3e4', border: '1px solid #09b3e4' }}>
                Contact Us
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-frost sm:text-2xl">
                Let&apos;s Talk About Your Project
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: '#24B8FF' }}>
                Smarter systems. Faster decisions.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                Tell us what you&apos;re working on, what&apos;s slowing you down, or what you&apos;d like to improve. Let&apos;s build the right solution for your business.
              </p>

              <div className="mt-8 space-y-3 sm:mt-9">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:gap-4 sm:p-4"
                  style={{ background: 'linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)', border: '1px solid rgba(36, 184, 255, 0.2)' }}
                >
                  {/* Triangle glow overlay */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
                    <path d="M 200 5 L 5 95 L 395 95 Z" fill="none" stroke="rgba(36,184,255,0.06)" strokeWidth="1" />
                    <circle r="3" fill="#24B8FF" opacity="0.9" filter="url(#glow-blue)">
                      <animateMotion path="M 200 5 L 5 95 L 395 95 Z" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2.5" fill="#f97316" opacity="0.85" filter="url(#glow-orange)">
                      <animateMotion path="M 200 5 L 5 95 L 395 95 Z" dur="4s" repeatCount="indefinite" begin="2s" />
                    </circle>
                  </svg>
                  <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full sm:size-10" style={{ backgroundColor: 'rgba(249, 115, 22, 0.12)' }}>
                    <Mail className="relative size-4.5 sm:size-5" style={{ color: '#f97316' }} aria-hidden="true" />
                  </span>
                  <span className="relative z-10 min-w-0">
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
                  className="group relative flex items-center gap-3 overflow-hidden rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 sm:gap-4 sm:p-4"
                  style={{ background: 'linear-gradient(135deg, #18263D 0%, #0D1A49 55%, #2F174F 100%)', border: '1px solid rgba(36, 184, 255, 0.2)' }}
                >
                  {/* Triangle glow overlay */}
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none" overflow="visible" aria-hidden="true">
                    <path d="M 200 5 L 5 95 L 395 95 Z" fill="none" stroke="rgba(36,184,255,0.06)" strokeWidth="1" />
                    <circle r="3" fill="#24B8FF" opacity="0.9" filter="url(#glow-blue)">
                      <animateMotion path="M 200 5 L 5 95 L 395 95 Z" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                    <circle r="2.5" fill="#f97316" opacity="0.85" filter="url(#glow-orange)">
                      <animateMotion path="M 200 5 L 5 95 L 395 95 Z" dur="4.5s" repeatCount="indefinite" begin="2.25s" />
                    </circle>
                  </svg>
                  <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full sm:size-10" style={{ backgroundColor: 'rgba(36, 184, 255, 0.12)' }}>
                    <LinkedInIcon className="relative size-4.5 sm:size-5" style={{ color: '#24B8FF' }} />
                  </span>
                  <span className="relative z-10 min-w-0">
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
