import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* Dashboard title acts as a home link */}
        <Link className="navbar-item" to="/">
           Clinical Risk Dashboard (Demo)
        </Link>

        {/* Optional: mobile burger toggle (not functional for demo) */}
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

      <div id="navbarMain" className="navbar-menu">
        <div className="navbar-start">
          {/* Home button */}
          <Link to="/" className="navbar-item">
             Home
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-light" type="button">
                Login
              </button>
              <button className="button is-light" type="button">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
