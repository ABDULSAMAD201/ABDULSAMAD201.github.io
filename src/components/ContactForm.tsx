"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const inputCls =
  "w-full rounded-lg border border-line bg-surface px-4 py-3.5 text-sm text-frost placeholder:text-faint outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20 min-h-[48px]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect this form to an email service or CRM backend.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-card p-6 text-center sm:min-h-96 sm:p-8">
        <span className="grid size-14 place-items-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-bold text-frost">
          Message Sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks for reaching out — we&apos;ll get back to you shortly. For a
          faster response, email us directly at{" "}
          <a
            href="mailto:hello@datanovalabz.com"
            className="font-medium text-accent hover:underline"
          >
            hello@datanovalabz.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-4 sm:gap-5 sm:p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputCls}
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-company"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Your company (optional)"
            className={inputCls}
            autoComplete="organization"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className={inputCls}
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted"
        >
          What are you looking to build?
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timelines…"
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 min-h-[48px]"
      >
        <Send className="size-4" aria-hidden="true" />
        Send Message
      </button>
    </form>
  );
}
