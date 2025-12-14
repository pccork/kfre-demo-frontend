import React from "react";

export default function RiskCard({
  value,
  threshold,
  highLabel,
  lowLabel,
  unit = "%"
}) {
  const v = Number(value);
  const isHigh = v >= threshold;

  return (
    <div
      className={`notification has-text-centered ${
        isHigh ? "is-danger" : "is-success"
      }`}
    >
      <p className="is-size-4 has-text-weight-semibold">
        {v}{unit}
      </p>
      <p className="is-size-6">
        {isHigh ? highLabel : lowLabel}
      </p>
    </div>
  );
}
