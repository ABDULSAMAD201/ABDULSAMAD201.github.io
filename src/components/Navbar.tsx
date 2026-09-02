"use client";

import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { btnPrimary } from "./ui";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-1.5 py-1.5">
      <img
        src="/logo.png"
        alt="DataNova Labz logo"
        width="56"
        height="56"
        className="shrink-0"
      />
      <span className="font-display text-xl font-bold tracking-tight text-frost">
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
          ? "border-b border-line/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={scrolled || open ? { background: "linear-gradient(135deg, rgba(24,38,61,0.9) 0%, rgba(13,26,73,0.9) 55%, rgba(47,23,79,0.9) 100%)" } : undefined}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-18 sm:px-8 lg:px-10">
        <Logo />

        {/* Desktop links */}
        <div className="hidden flex-nowrap items-center gap-1 sm:gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm sm:px-4 ${
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
        className={`overflow-hidden border-t border-line/70 backdrop-blur-md md:hidden ${
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
