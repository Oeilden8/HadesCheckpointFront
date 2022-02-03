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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/chtonic">Chtonic</NavLink>
              </li>
              <li>
                <NavLink to="/olympian">Olympian</NavLink>
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
