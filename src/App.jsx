import React, { useState } from "react";
import KFREForm from "./components/KFREForm";
import RiskCard from "./components/RiskCard";

export default function App() {
  const [result, setResult] = useState(null);

  // -------------------------------------------------------------
  // 5-Year 4-Variable Kidney Failure Risk Equation (KFRE)
  // Tangri et al., JAMA 2011 / NICE NG203 (2021)
  // Risk = 1 – 0.9240 ^ exp( –0.2201×(age/10 – 7.036)
  //                            + 0.2467×(male – 0.5642)
  //                            – 0.5567×(eGFR/5 – 7.222)
  //                            + 0.4510×(ln ACR – 5.137) )
  // -------------------------------------------------------------
  const handleCalculate = ({ age, sex, egfr, acr }) => {
    const male = sex === "male" ? 1 : 0;
    const egfrSafe = Math.max(egfr, 1);
    const acrSafe = Math.max(acr, 0.001); // ACR > 0 for ln()

    const baselineS5 = 0.9240;
    const lp =
      -0.2201 * (age / 10 - 7.036) +
      0.2467 * (male - 0.5642) +
      -0.5567 * (egfrSafe / 5 - 7.222) +
      0.4510 * (Math.log(acrSafe) - 5.137);

    const risk = 1 - Math.pow(baselineS5, Math.exp(lp));
    const pct = Math.max(0, Math.min(risk * 100, 100));
    setResult(Number(pct.toFixed(1)));
  };

  // -------------------------------------------------------------
  // Render
  // -------------------------------------------------------------
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-link">
          KFRE 5-Year Risk Calculator (Demo)
        </h1>

        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="box">
              <KFREForm onCalculate={handleCalculate} />
              {result !== null && <RiskCard value={result} />}
            </div>

            {/* --- Evidence + Disclaimer --- */}
            <div className="content has-text-centered is-size-7 mt-4">
              <p>
                Equation adapted from Tangri et al., <i>JAMA</i> 2011 and NICE CKD Guideline (NG203, 2021).
              </p>
              <p className="has-text-danger">
                Educational demo only — not validated or controlled for clinical use. 
                No patient data are stored or transmitted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
