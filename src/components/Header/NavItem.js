import React from "react";

const NavItem = ({ className, href, text }) => {
  return (
    <li className="nav-item">
      <a className={`nav-link ${className}`} href={href}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
