import React, { useState } from 'react'
import KFREForm from './components/KFREForm'
import RiskCard from './components/RiskCard'

export default function App() {
  const [result, setResult] = useState(null)

  const handleCalculate = (inputs) => {
    const { age, egfr, acr } = inputs
    const risk = (age * 0.03) + (acr * 0.05) - (egfr * 0.02)
    const bounded = Math.max(0, Math.min(risk, 100)).toFixed(1)
    setResult(bounded)
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered has-text-link">
          KFRE Risk Calculator (Demo)
        </h1>

        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="box">
              <KFREForm onCalculate={handleCalculate} />
              {result && <RiskCard value={result} />}
            </div>
            <p className="has-text-centered is-size-7 mt-4">
              Demo only — no data stored or transmitted.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
