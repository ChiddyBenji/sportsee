import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/profil", label: "Profil" },
    { path: "/reglages", label: "Réglage" },
    { path: "/communaute", label: "Communauté" },
  ];

  return (
    <nav className="content-nav">
      <div className="content-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="content-nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
