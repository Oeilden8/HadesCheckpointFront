import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Hades_Logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  return (
    <div className="header-container">
      <div className="burger-container">
        <MobileMenu />
      </div>
      <ul className="desktop">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chtonic">Chtonic</NavLink>
        </li>
        <li>
          <NavLink to="/olympian">Olympian</NavLink>
        </li>
        <li>
          <NavLink to="/other">Other</NavLink>
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
