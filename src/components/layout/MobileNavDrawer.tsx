"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavDrawerProps {
  items: NavItem[];
  githubUrl: string;
}

export default function MobileNavDrawer({
  items,
  githubUrl,
}: MobileNavDrawerProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-nav-sidebar"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#3a2e49] bg-[#241c2c] text-[#f4f3f6] transition-colors hover:border-[#d3c2e7] hover:text-[#d3c2e7]"
      >
        {open ? (
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
        ) : (
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
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
          />

          {/* Slide-out Sidebar Panel */}
          <aside
            id="mobile-nav-sidebar"
            className="relative z-10 flex h-full w-[min(320px,84vw)] flex-col justify-between border-l border-[#282032] bg-[#141019] p-6 shadow-2xl"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 90% 35% at 50% 0%, rgba(39, 19, 54, 0.8), transparent 75%)",
            }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#282032] pb-5">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="logo text-xl"
                >
                  ALEPH<span>IQ</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3a2e49] bg-[#241c2c] text-[#f4f3f6] transition-colors hover:border-[#d3c2e7] hover:text-[#d3c2e7]"
                >
                  <svg
                    width="16"
                    height="16"
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
              </div>

              <nav aria-label="Mobile menu links" className="mt-6 flex flex-col gap-1.5">
                {items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#241c2c] text-[#d3c2e7] border border-[#3a2e49]"
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

            <div className="border-t border-[#282032] pt-5">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d3c2e7] px-5 py-3 text-xs font-bold text-[#110e14] transition-colors hover:bg-[#e1d4f1]"
              >
                GitHub <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}