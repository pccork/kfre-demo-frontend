import React from "react";

export default function RiskCard({ value }) {
  const numericValue = parseFloat(value);
  const isHighRisk = numericValue >= 5; // NICE: ≥5% = high risk

  return (
    <div
      className={`notification has-text-centered ${
        isHighRisk ? "is-danger" : "is-success"
      }`}
    >
      <p className="is-size-4 has-text-weight-semibold">
        5-Year KFRE Risk: {numericValue}%
      </p>

      {isHighRisk ? (
        <>
          <p className="has-text-weight-bold"> High risk (≥ 5%)</p>
          <p className="is-size-6">
            Increased probability of developing end-stage renal disease (ESRD)
            within 5 years.
          </p>
        </>
      ) : (
        <>
          <p className="has-text-weight-semibold">Low-moderate risk (&lt; 5%)</p>
          <p className="is-size-6">Continue routine CKD monitoring.</p>
        </>
      )}
    </div>
  );
}
