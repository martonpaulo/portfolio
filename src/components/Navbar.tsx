import Link from "next/link";

import pagesMetadata from "@/utils/pagesMetadata";

export function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          {/* LOGO SVG */}
          Home
        </Link>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {Object.values(pagesMetadata)
            .filter((page) => page.showInNavbar)
            .map((page) => (
              <a key={page.path} className="navbar-item" href={page.path}>
                {page.label}
              </a>
            ))}
        </div>
      </div>
    </nav>
  );
}
