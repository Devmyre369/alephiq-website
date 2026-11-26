import Link from "next/link";

const footerLinks = [
  { label: "Research", href: "/research" },
  { label: "Technologies", href: "/technologies" },
  { label: "Engineering", href: "/engineering" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="footer bg-[#0c0a0e]">
      <div className="container footer-content flex flex-col gap-8 py-4">
        <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-start">
          <div className="footer-brand space-y-2">
            <Link href="/" className="logo inline-block">
              ALEPH<span>IQ</span>
            </Link>

            <p className="text-sm text-[#a8a3b3]">
              Independent Deep-Tech Research &amp; Development.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="footer-links flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-[#a8a3b3]"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#d3c2e7]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-bottom flex w-full flex-wrap items-center justify-between gap-4 border-t border-[#282032] pt-5 text-xs text-[#7a738a]">
          <span>&copy; 2026 AlephIQ. All rights reserved.</span>

          <a
            href="https://github.com/Devmyre369"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-[#3a2e49] bg-[#241c2c] px-3.5 py-1.5 font-semibold text-[#f4f3f6] transition-colors hover:border-[#d3c2e7] hover:text-[#d3c2e7]"
          >
            GitHub <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}