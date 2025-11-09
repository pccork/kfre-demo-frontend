import React from "react";
import KFREForm from "../components/KFREForm";
import RiskCard from "../components/RiskCard";
import { useState } from "react";

export default function KFREPage() {
  const [result, setResult] = useState(null);

  const handleCalculate = ({ age, sex, egfr, acr }) => {
    const male = sex === "male" ? 1 : 0;
    const egfrSafe = Math.max(egfr, 1);
    const acrSafe = Math.max(acr, 0.001);

    // Tangri et al. / NICE 5-year KFRE
    const lp =
      -0.2201 * (age / 10 - 7.036) +
      0.2467 * (male - 0.5642) +
      -0.5567 * (egfrSafe / 5 - 7.222) +
      0.4510 * (Math.log(acrSafe) - 5.137);
    const risk = 1 - Math.pow(0.9240, Math.exp(lp));
    const pct = Math.max(0, Math.min(risk * 100, 100));

    setResult(Number(pct.toFixed(1)));
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-link has-text-centered">
          KFRE 5-Year Risk Calculator (Demo)
        </h1>
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="box">
              <KFREForm onCalculate={handleCalculate} />
              {result !== null && <RiskCard value={result} />}
            </div>
            <p className="has-text-centered is-size-7 mt-4">
              Demo only — equation from Tangri et al., JAMA 2011 (NICE NG203).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
