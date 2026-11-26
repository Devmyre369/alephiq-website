import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a0e",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "AlephIQ | Independent Deep-Tech Research & Development",
    template: "%s | AlephIQ",
  },

  description:
    "AlephIQ is an independent deep-tech research and development initiative exploring emerging technologies, conducting experiments, and engineering solutions to real-world problems.",

  keywords: [
    "AlephIQ",
    "Deep Tech",
    "Research and Development",
    "Artificial Intelligence",
    "GPU Computing",
    "CUDA",
    "Semiconductors",
    "Engineering",
  ],

  authors: [{ name: "AlephIQ" }],

  openGraph: {
    title: "AlephIQ | Independent Deep-Tech Research & Development",
    description: "Explore. Understand. Experiment. Engineer.",
    type: "website",
    siteName: "AlephIQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-[#0c0a0e] text-[#f4f3f6] antialiased selection:bg-[#d3c2e7] selection:text-[#110e14]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}