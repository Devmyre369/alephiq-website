
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link href="/" className="logo">
            ALEPH<span>IQ</span>
          </Link>

          <p>
            Independent Deep-Tech Research & Development.
          </p>
        </div>

        <div className="footer-links">
          <Link href="/research">Research</Link>
          <Link href="/technologies">Technologies</Link>
          <Link href="/engineering">Engineering</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/about">About</Link>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 AlephIQ. All rights reserved.
          </span>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
