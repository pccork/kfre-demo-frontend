import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Clinical Dashboard (Demo)</h1>
        <p className="subtitle">Select a risk calculator:</p>

        <div className="columns is-centered mt-5">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-content">
                <h2 className="title is-5">KFRE Risk Calculator</h2>
                <p>Estimate 5-year ESRD risk for CKD patients.</p>
              </div>
              <footer className="card-footer">
                <Link to="/kfre" className="card-footer-item has-text-link">
                  Launch
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
