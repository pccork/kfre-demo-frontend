import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Mobile burger (not functional in demo) */}
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMain"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMain" className="navbar-menu is-active">
        {/* Center title */}
        <div className="navbar-start" style={{ flexGrow: 1, justifyContent: "center", display: "flex" }}>
          <Link to="/" className="navbar-item has-text-weight-semibold has-text-white">
             Clinical Risk Dashboard (Demo)
          </Link>
        </div>

        {/* Right buttons */}
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link
                to="/"
                className={`button ${location.pathname === "/" ? "is-white has-text-black" : "is-light has-text-black"}`}
              >
                Home
              </Link>
              <button className="button is-light has-text-black" type="button">
                Login
              </button>
              <button className="button is-light has-text-black" type="button">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
