
import Link from "next/link";

const navigation = [
  { label: "Research", href: "/research" },
  { label: "Technologies", href: "/technologies" },
  { label: "Engineering", href: "/engineering" },
  { label: "Projects", href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo">
          ALEPH<span>IQ</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="nav-github"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
