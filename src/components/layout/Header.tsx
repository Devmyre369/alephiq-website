"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "Technologies", href: "/technologies" },
  { label: "Engineering", href: "/engineering" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
];

const GITHUB_URL = "https://github.com/Devmyre369";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [sidebarOpen]);

  return (
    <>
      <header className="navbar sticky top-0 z-40">
        <div className="container nav-content relative flex items-center justify-between">
          {/* Extreme Top-Left Sidebar Toggle (Mobile) */}
          <div className="flex w-12 items-center justify-start md:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen((prev) => !prev)}
              aria-expanded={sidebarOpen}
              aria-controls="mobile-sidebar-nav"
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3a2e49] bg-[#241c2c] text-[#f4f3f6] transition-colors hover:border-[#d3c2e7] hover:text-[#d3c2e7]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>

          {/* Centered ALEPHIQ Logo on Mobile, Left-Aligned on Desktop */}
          <Link
            href="/"
            aria-label="AlephIQ homepage"
            className="logo absolute left-1/2 -translate-x-1/2 text-center md:static md:translate-x-0 md:text-left"
          >
            ALEPH<span>IQ</span>
          </Link>

          {/* Desktop Top Navigation */}
          <nav
            aria-label="Main navigation"
            className="nav-links hidden md:flex md:items-center md:gap-6 lg:gap-8"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch
                  className={isActive ? "!text-[#d3c2e7]" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Slot (Desktop GitHub Pill + Mobile Spacer for True Centering) */}
          <div className="flex w-12 items-center justify-end md:w-auto">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit AlephIQ on GitHub"
              className="nav-github hidden md:inline-flex items-center gap-1.5 rounded-full border border-[#3a2e49] bg-[#241c2c] px-4 py-2 text-[#f4f3f6] hover:border-[#d3c2e7] hover:bg-[#1c1524]"
            >
              GitHub <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Sidebar (Anchored Top-Left) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 flex md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation sidebar"
        >
          <aside
            id="mobile-sidebar-nav"
            className="relative z-10 flex h-full w-[min(300px,82vw)] flex-col justify-between border-r border-[#282032] bg-[#141019] p-5 shadow-2xl"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 95% 35% at 50% 0%, rgba(39, 19, 54, 0.85), transparent 75%)",
            }}
          >
            <div>
              {/* Sidebar Top Row: Extreme Top-Left Close Button + Centered Brand */}
              <div className="relative flex items-center justify-between border-b border-[#282032] pb-4">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close sidebar"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3a2e49] bg-[#241c2c] text-[#f4f3f6] transition-colors hover:border-[#d3c2e7] hover:text-[#d3c2e7]"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <Link
                  href="/"
                  onClick={() => setSidebarOpen(false)}
                  className="logo absolute left-1/2 -translate-x-1/2 text-xl"
                >
                  ALEPH<span>IQ</span>
                </Link>

                <span className="w-10" aria-hidden="true" />
              </div>

              {/* Sidebar Links */}
              <nav aria-label="Sidebar links" className="mt-6 flex flex-col gap-1.5">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "border border-[#3a2e49] bg-[#241c2c] text-[#d3c2e7]"
                          : "text-[#a8a3b3] hover:bg-[#1c1524] hover:text-[#f4f3f6]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className={isActive ? "text-[#d3c2e7]" : "text-[#7a738a]"}
                      >
                        &rarr;
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer GitHub CTA */}
            <div className="border-t border-[#282032] pt-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d3c2e7] px-5 py-3 text-xs font-bold text-[#110e14] transition-colors hover:bg-[#e1d4f1]"
              >
                GitHub <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </aside>

          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close sidebar backdrop"
            onClick={() => setSidebarOpen(false)}
            className="flex-1 bg-black/70 backdrop-blur-xs"
          />
        </div>
      )}
    </>
  );
}