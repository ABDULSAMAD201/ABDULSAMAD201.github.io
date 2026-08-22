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
  title: "DataNova Labz — Data Engineering, BI Dashboards & AI Automation",
  description:
    "We help growing businesses turn scattered data and repetitive workflows into automated dashboards, scalable software, and AI-powered solutions. Data pipelines, Power BI, backend development, and AI automation.",
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
