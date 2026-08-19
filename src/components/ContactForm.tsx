"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

// ──────────────────────────────────────────────────────────────
// Form endpoint — powered by FormSubmit.co (no account needed).
//
// On the FIRST submission, FormSubmit sends a confirmation email
// to the address below. Click the link in that email to activate
// the form — all future submissions will be delivered instantly.
// ──────────────────────────────────────────────────────────────
const FORM_ENDPOINT = "https://formsubmit.co/datanovalabz@gmail.com";

const inputCls =
  "w-full rounded-lg border border-line bg-surface px-4 py-3.5 text-sm text-frost placeholder:text-faint outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/20 min-h-[48px]";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const message = (formData.get("message") as string).trim();

    // Client-side validation
    if (!name) {
      setErrorMsg("Please enter your name.");
      setStatus("error");
      return;
    }
    if (!email || !validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (!message) {
      setErrorMsg("Please enter a message.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          message: formData.get("message"),
          _subject: "New message from DataNova Labz website",
          _captcha: "false",
        }),
      });

      if (!res.ok) {
        throw new Error(`Submission failed (status ${res.status})`);
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong while sending your message. Please try again or email us directly."
      );
    }
  }

  // ── Success state ──────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-card p-6 text-center sm:min-h-96 sm:p-8">
        <span className="grid size-14 place-items-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-display text-xl font-bold text-frost">
          Message Sent
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          Thanks! Your message has been sent. We&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
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

      {/* Error message */}
      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 min-h-[48px] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? (
          "Sending…"
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
