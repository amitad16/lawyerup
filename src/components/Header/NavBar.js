import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavItem from "./NavItem";
// import {Navbar, Nav} from 'react-bootstrap'

const NavBar = () => {
  const navItems = [
    { id: "1", text: "FAQ", href: "#" },
    { id: "2", text: "Be Featured", href: "#" },
    { id: "3", text: "Login", href: "#" },
    { id: "4", text: "Join", href: "#", className: "white_btn" }
  ];

  const [navOpen, setNavOpen] = useState(false);
  function handleToggleNav() {
    setNavOpen(prevState => !prevState);
  }

  return (
    <nav className="navbar navbar-expand-lg justify-content-end">
      <a
        href="#"
        className="toggle_nav d-flex justify-content-center align-items-center d-md-none"
        onClick={handleToggleNav}
      >
        <FontAwesomeIcon icon="bars" />
      </a>
      <div
        className={`navbar-nav_wrap transition d-md-none ${
          navOpen ? "active" : ""
        }`}
      ></div>
      <ul
        className={`navbar-nav justify-content-md-end align-items-md-center transition ${
          navOpen ? "active" : ""
        }`}
      >
        <a href="#" className="close_menu d-md-none" onClick={handleToggleNav}>
          x
        </a>
        {navItems.map(v => {
          return (
            <NavItem
              key={v.id}
              className={v.className}
              text={v.text}
              href={v.href}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
