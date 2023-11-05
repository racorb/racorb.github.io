import React, { useState } from "react";
import { aboutData } from "../constants/AboutData";

const Header = () => {
  /*
   Navbar links active state on scroll
  */

  const navbarlinksActive = () => {
    const navbarlinks = document.querySelectorAll("#navbar .scrollto", true);
    const position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("scroll", navbarlinksActive);

  /**
    Mobile nav toggle    
   */
  const [Toggle, showMenu] = useState(false);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <a href="#hero">
              <span>{aboutData[0]?.name}</span>
            </a>
          </h1>
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> */}
        </div>

        <nav id="navbar" className={Toggle ? "navbar navbar-mobile" : "navbar"}>
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i
            className={
              Toggle
                ? "bi bi-x mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
            onClick={() => showMenu(!Toggle)}
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
