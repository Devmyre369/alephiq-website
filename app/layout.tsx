
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    "Technology Research",
  ],
  authors: [{ name: "AlephIQ" }],
  openGraph: {
    title: "AlephIQ | Independent Deep-Tech Research & Development",
    description:
      "Explore. Understand. Experiment. Engineer.",
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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
