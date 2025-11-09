import React, { useState } from "react";

export default function DummyRiskPage() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = (dobStr) => {
    try {
      // Expect dd/mm/yyyy
      const [day, month, year] = dobStr.split("/").map((v) => parseInt(v, 10));
      if (
        isNaN(day) ||
        isNaN(month) ||
        isNaN(year) ||
        day < 1 ||
        day > 31 ||
        month < 1 ||
        month > 12 ||
        year < 1900
      ) {
        throw new Error("Invalid date");
      }

      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let calcAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calcAge--;
      }
      return calcAge;
    } catch {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateAge(dob);
    if (result === null || result < 0) {
      setError(" Please enter a valid date in dd/mm/yyyy format.");
      setAge(null);
    } else {
      setError("");
      setAge(result);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Age Calculator (Demo)</h1>

        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="box">
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Date of Birth (dd/mm/yyyy)</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="e.g. 15/08/1985"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button className="button is-link is-fullwidth" type="submit">
                  Calculate Age
                </button>
              </form>

              {error && (
                <div className="notification is-warning has-text-centered mt-4">
                  {error}
                </div>
              )}

              {age !== null && !error && (
                <div className="notification is-info has-text-centered mt-4">
                  <p className="is-size-4 has-text-weight-semibold">
                    Age: {age} years
                  </p>
                </div>
              )}
            </div>

            <p className="has-text-centered is-size-7 mt-4">
              Demo calculator only — simple date-based example for dashboard layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
