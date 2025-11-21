import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "/src/assets/Logos/LogoWhite.png";
import "./Navbar.scss";

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
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={LogoWhite} alt="Logo" />
        </NavLink>
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          PoliHack
        </NavLink>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {/* <li>
              <NavLink to="/about" className="text-white" onClick={closeMenu}>
                About us
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/current-edition" className="text-white" onClick={closeMenu}>
                Current Edition
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/past-editions-2" className="text-white" onClick={closeMenu}>
                Past Editions
              </NavLink>
            </li>
            <li>
              <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSe7UsnfNKoZYfhPPdDzdxwB_XFSP_g0TCpKb9q3YpQSB6bceg/viewform?embedded=true" target="_blank" className="text-white" onClick={closeMenu}>
                  FeedBack
              </NavLink>
            </li>
           
            <li>
              <NavLink to="https://forms.gle/EQrxtDr8uhcBnKyg9" target="_blank"  className="text-white" onClick={closeMenu}>
                Team Register
              </NavLink>
            </li>
            <li>
              <NavLink to="https://forms.gle/QZGai7GVovpCGdkc9" target="_blank"  className="text-white" onClick={closeMenu}>
                Solo Register
              </NavLink>
            </li>
            <li>
              <a 
                className="text-white" 
                href="https://osutcluj.pixieset.com/polihackv15/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Gallery
              </a>
            </li>
            <li>
              {/* <a 
                className="text-white" 
                href="https://docs.google.com/forms/d/e/1FAIpQLSec1QQ1G6tq5BPxaIDPEREGnm1bmi-N1SLe_9lyhhzSYXLHQg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
