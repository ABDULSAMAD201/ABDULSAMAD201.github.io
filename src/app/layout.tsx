import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataNova Labz — End-to-End Data & Software Solutions",
  description:
    "DataNova Labz builds end-to-end data and software solutions — data pipelines, Power BI dashboards, FastAPI backends, and AI-powered automation for startups, SaaS companies, and growing businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-night font-sans text-frost antialiased">
        {children}
      </body>
    </html>
  );
}
