"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${navBackground ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <Link href="/" prefetch className="logo" onClick={closeMenu}>
          <img src="/assets/Logos/LogoWhite.png" alt="Logo" />
        </Link>
        <Link href="/" prefetch className="navbar-brand" onClick={closeMenu}>
          PoliHack
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/past-editions-2" prefetch className="text-white" onClick={closeMenu}>
                Past Editions
              </Link>
            </li>
            <li>
              <Link href="/feedback" prefetch className="text-white" onClick={closeMenu}>
                Feedback
              </Link>
            </li>
            <li>
              <a 
                href="https://forms.gle/rFFeQ6SKSjC1hv8o9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white" 
                onClick={closeMenu}
              >
                Register
              </a>
            </li>
            <li>
              <a
                className="text-white"
                href="https://osutcluj.pixieset.com/polihack26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gallery
              </a>
            </li>
            <li>
              <Link href="/docs" prefetch className="text-white" onClick={closeMenu}>
                Docs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}