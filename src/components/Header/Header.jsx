import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Hades_Logo.png";

function Header() {
  return (
    <div className="header-container">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/chtonics">Chtonics</NavLink>
        </li>
        <li>
          <NavLink to="/olympians">Olympians</NavLink>
        </li>
        <li>
          <NavLink to="/others">Others</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <a
        href="https://hades.fandom.com/wiki/Hades_Wiki"
        target="_blank"
        rel="noreferrer"
      >
        <img src={logo} alt="logo-hades" className="logo-header" />
      </a>
    </div>
  );
}

export default Header;
