/* eslint-disable no-unused-vars */
/* The code is importing necessary modules and components for the Navbar component. */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../data";
import "./navbar.css";

/**
 * The above function is a React component that renders a navigation bar with a toggle button to show
 * or hide a menu.
 * @returns The Navbar component is returning a navigation bar with a menu toggle button and a list of
 * navigation links. The menu toggle button is displayed as three horizontal lines, and when clicked,
 * it toggles the visibility of the navigation menu. The navigation menu is a list of links, where each
 * link has a name, an icon, and a path. When a link is clicked, the menu is hidden and the
 */
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
