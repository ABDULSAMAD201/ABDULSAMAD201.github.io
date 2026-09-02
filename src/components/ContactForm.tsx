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

/** SVG path tracing a rounded rectangle (viewBox 0 0 1000 1000) */
const BORDER_PATH =
  "M 30 15 L 970 15 Q 985 15 985 30 L 985 970 Q 985 985 970 985 L 30 985 Q 15 985 15 970 L 15 30 Q 15 15 30 15 Z";

/** Total approximate perimeter for dasharray */
const PERIMETER = 3920;

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

  return (
    /* ── Outer wrapper: gradient border + glow ──────────── */
    <div
      className="relative overflow-hidden rounded-2xl p-[1.5px] transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(36,184,255,0.3),0_0_50px_rgba(124,58,237,0.15)]"
      style={{
        background: "linear-gradient(135deg, #24B8FF 0%, #7C3AED 50%, #FF8A2A 100%)",
        boxShadow: "0 0 18px rgba(36,184,255,0.2), 0 0 35px rgba(124,58,237,0.1)",
      }}
    >
      {/* ── SVG: animated border stroke + traveling light ── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter for the traveling light */}
          <filter id="travelGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for the traveling light trail */}
          <linearGradient id="travelGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#24B8FF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FF8A2A" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Static subtle border stroke (always visible) */}
        <path
          d={BORDER_PATH}
          fill="none"
          stroke="url(#travelGrad)"
          strokeWidth="1.5"
          opacity="0.35"
        />

        {/* Traveling energy dot — bright white core */}
        <circle r="5" fill="#ffffff" opacity="0.95" filter="url(#travelGlow)">
          <animateMotion
            path={BORDER_PATH}
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Traveling energy dot — colored halo behind the white core */}
        <circle r="12" fill="#24B8FF" opacity="0.3" filter="url(#travelGlow)">
          <animateMotion
            path={BORDER_PATH}
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      {/* ── Inner form container ─────────────────────────── */}
      <div
        className="relative rounded-[14px] overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1D2D47, #111C30)" }}
      >
        {status === "success" ? (
          /* ── Success state ──────────────────────────────── */
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 p-6 text-center sm:min-h-96 sm:p-8">
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
        ) : (
          /* ── Form ───────────────────────────────────────── */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-6 md:p-8"
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
              className="sparkle-btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-semibold text-night transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0 min-h-[48px] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
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
        )}
      </div>
    </div>
  );
}
