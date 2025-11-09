import React from "react";
import { Link } from "react-router-dom";

function AppCard({ title, description, to }) {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-content">
          <h2 className="title is-5">{title}</h2>
          <p className="is-size-6">{description}</p>
        </div>
        <footer className="card-footer">
          <Link to={to} className="card-footer-item has-text-link">
            Launch
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Clinical Dashboard (Demo)</h1>
        <p className="subtitle">Select a risk calculator:</p>

        <div className="columns is-centered mt-5 is-multiline">
          <AppCard
            title="KFRE Risk Calculator"
            description="Estimate 5-year ESRD risk (NICE/Tangri)."
            to="/kfre"
          />
          <AppCard
            title="Age Calculator"
            description="Calculate age from date of birth (dd/mm/yyyy)."
            to="/dummy-risk"
          />
        </div>
      </div>
    </section>
  );
}
