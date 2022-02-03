import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button type="button" onClick={handleClick} className="burger-menu">
        <span />
        <span />
        <span />
        {open ? (
          <div className="menu-container">
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
          </div>
        ) : null}
      </button>
    </div>
  );
}

export default MobileMenu;
