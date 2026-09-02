import { Mail } from "lucide-react";
import { LinkedInIcon } from "./icons";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const EMAIL = "datanovalabz@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/datanova-labz";

export default function Footer() {
  return (
    <footer className="bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="max-w-xs text-center md:text-left">
            <p className="font-display text-lg font-bold tracking-tight text-frost">
              DataNova<span className="text-accent"> Labz</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Turning data and manual processes into automated, intelligent systems.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <ul className="flex flex-nowrap items-center justify-center gap-x-4 sm:gap-x-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap px-3 py-2.5 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email DataNova Labz"
              className="grid size-11 place-items-center rounded-lg border border-line text-muted transition hover:border-accent/50 hover:text-accent"
            >
              <Mail className="size-4.5" />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DataNova Labz on LinkedIn"
              className="grid size-11 place-items-center rounded-lg border border-line text-muted transition hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="size-4.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-line/60 pt-6 text-center sm:mt-10">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} DataNova Labz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
