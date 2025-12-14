// src/pages/QRISK3Page.jsx
import React, { useState } from "react";
import QRISK3Form from "../components/QRISK3Form";
import RiskCard from "../components/RiskCard";

export default function QRISK3Page() {
  const [result, setResult] = useState(null);

  // DEMO-ONLY simplified QRISK3-style model (no ethnicity)
  // 10-year risk = 1 - S0^exp(LP)
  // S0_10Y and coefficients below are illustrative for demo UX only.
  const S0_10Y = 0.970; // baseline 10y survival (demo calibration)

  const handleCalculate = (inputs) => {
    const {
      age, sex, smoker, sbp, ratio, bmi,
      diabetes, af, ckd, ra, migraine, smi,
      onAntipsychotic, onSteroids, bpTreated, townsend
    } = inputs;

    // Encode booleans/levels
    const male = sex === "male" ? 1 : 0;
    const smokeCurrent = smoker === "current" ? 1 : 0;
    const smokeEx = smoker === "ex" ? 1 : 0;

    const dmType1 = diabetes === "t1" ? 1 : 0;
    const dmType2 = diabetes === "t2" ? 1 : 0;

    // --- DEMO coefficients (subset + approximate weights) ---
    // These are NOT validated clinical coefficients — demo only.
    const β = {
      intercept: -6.5,
      age: 0.055,                 // per year
      male: 0.45,
      sbpPer10: 0.12,            // per 10 mmHg
      ratio: 0.18,               // total/HDL ratio
      bmiPer5: 0.08,             // per 5 kg/m2
      smokeCurrent: 0.60,
      smokeEx: 0.25,
      dmType1: 0.85,
      dmType2: 0.55,
      af: 0.75,
      ckd: 0.50,                 // CKD stage 3–5
      ra: 0.20,
      migraine: 0.12,
      smi: 0.18,                 // severe mental illness
      antipsych: 0.22,
      steroids: 0.20,
      bpTreated: 0.12,
      townsendPer5: 0.10         // per 5 units
    };

    const lp =
      β.intercept +
      β.age * age +
      β.male * male +
      β.sbpPer10 * (sbp / 10) +
      β.ratio * ratio +
      β.bmiPer5 * (bmi / 5) +
      β.smokeCurrent * smokeCurrent +
      β.smokeEx * smokeEx +
      β.dmType1 * dmType1 +
      β.dmType2 * dmType2 +
      β.af * (af ? 1 : 0) +
      β.ckd * (ckd ? 1 : 0) +
      β.ra * (ra ? 1 : 0) +
      β.migraine * (migraine ? 1 : 0) +
      β.smi * (smi ? 1 : 0) +
      β.antipsych * (onAntipsychotic ? 1 : 0) +
      β.steroids * (onSteroids ? 1 : 0) +
      β.bpTreated * (bpTreated ? 1 : 0) +
      β.townsendPer5 * (Number(townsend) / 5);

    const risk = 1 - Math.pow(S0_10Y, Math.exp(lp));
    const pct = Math.max(0, Math.min(risk * 100, 100));

    setResult(Number(pct.toFixed(1)));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-link">QRISK3 10-Year CVD Risk (Demo)</h1>

        <div className="columns is-centered mt-5">
          <div className="column is-7">
            <div className="box">
              <QRISK3Form onCalculate={handleCalculate} />
              {result !== null && (
                <RiskCard
                  value={result}
                  // Use ≥10% as high-risk marker for display
                  overrideThreshold={10}
                  highLabel="⚠️ High 10-year CVD risk (≥10%)"
                  lowLabel="Low–moderate 10-year CVD risk (<10%)"
                />
              )}
            </div>

            <div className="content has-text-centered is-size-7 mt-4">
              <p>
                Demo-only QRISK3-inspired calculation (subset of predictors; no ethnicity).
                For educational UI/UX demonstration — not validated for clinical use.
              </p>
              <p className="has-text-danger">
                ⚠️ Not a medical device. No data stored or transmitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
