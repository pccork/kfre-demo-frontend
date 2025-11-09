import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar is-link" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Clinical Risk Dashboard
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-light">Login</a>
            <a className="button is-light">Sign out</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
