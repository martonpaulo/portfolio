"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

import { pagesMetadata } from "@/constants/pagesMetadata";

export function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const currentPathname = usePathname();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" href="/">
          <CldImage
            src="white_logo"
            alt="Portfolio's logo"
            width={32}
            height={32}
          />
        </Link>

        <button
          className={`navbar-burger ${isMenuActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isMenuActive ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        id="navMenu"
        className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          {Object.values(pagesMetadata)
            .filter((page) => page.showInNavbar)
            .map((page) => (
              <Link
                key={page.pathname}
                className={`navbar-item ${
                  currentPathname === page.pathname ? "is-active" : ""
                }`}
                href={page.pathname}
              >
                {page.label}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
