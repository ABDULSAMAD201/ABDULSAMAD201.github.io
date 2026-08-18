"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { btnPrimary } from "./ui";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 py-1">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="10"
          stroke="#38bdf8"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <path
          d="M20 20 L29 13 M20 20 L29 27 M20 20 L11 27 M20 20 L11 13"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        <circle cx="29" cy="13" r="2.4" fill="#0ea5e9" />
        <circle cx="29" cy="27" r="2.4" fill="#0ea5e9" />
        <circle cx="11" cy="27" r="2.4" fill="#0ea5e9" />
        <circle cx="11" cy="13" r="2.4" fill="#0ea5e9" />
        <circle cx="20" cy="20" r="4" fill="#38bdf8" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-frost">
        DataNova<span className="text-accent"> Labz</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback(() => {
    setOpen(false);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.getElementById(l.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/70 bg-night/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                active === link.href.slice(1)
                  ? "text-accent"
                  : "text-muted hover:text-frost"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden md:block">
            <a href="#contact" className={`${btnPrimary} px-5 py-2.5`}>
              Let&apos;s Talk
            </a>
          </span>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-lg border border-line text-muted transition hover:text-frost md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-line/70 bg-night/95 backdrop-blur-md md:hidden ${
          open ? "mobile-menu-enter" : ""
        }`}
        aria-hidden={!open}
        style={{
          maxHeight: open ? "400px" : "0px",
          transition: "max-height 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="flex flex-col gap-0.5 px-4 pb-5 pt-3 sm:px-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                active === link.href.slice(1)
                  ? "text-accent"
                  : "text-muted hover:text-frost"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className={`${btnPrimary} mt-3 py-3.5`}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
