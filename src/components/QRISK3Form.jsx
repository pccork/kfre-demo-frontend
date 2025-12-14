// src/components/QRISK3Form.jsx
import React, { useState } from "react";

export default function QRISK3Form({ onCalculate }) {
  const [f, setF] = useState({
    age: "",
    sex: "male",
    smoker: "never",      // never | ex | current
    sbp: "",
    ratio: "",
    bmi: "",
    diabetes: "none",     // none | t1 | t2
    af: false,
    ckd: false,
    ra: false,
    migraine: false,
    smi: false,
    onAntipsychotic: false,
    onSteroids: false,
    bpTreated: false,
    townsend: "0"
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setF((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      age: Number(f.age),
      sex: f.sex,
      smoker: f.smoker,
      sbp: Number(f.sbp),
      ratio: Number(f.ratio),
      bmi: Number(f.bmi),
      diabetes: f.diabetes,
      af: f.af,
      ckd: f.ckd,
      ra: f.ra,
      migraine: f.migraine,
      smi: f.smi,
      onAntipsychotic: f.onAntipsychotic,
      onSteroids: f.onSteroids,
      bpTreated: f.bpTreated,
      townsend: Number(f.townsend)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Row 1 */}
      <div className="columns">
        <div className="column">
          <label className="label">Age (25–84)</label>
          <input className="input" type="number" name="age" min="25" max="84"
                 value={f.age} onChange={handleChange} required />
        </div>
        <div className="column">
          <label className="label">Sex</label>
          <div className="select is-fullwidth">
            <select name="sex" value={f.sex} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="column">
          <label className="label">Smoking status</label>
          <div className="select is-fullwidth">
            <select name="smoker" value={f.smoker} onChange={handleChange}>
              <option value="never">Never</option>
              <option value="ex">Ex-smoker</option>
              <option value="current">Current</option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="columns">
        <div className="column">
          <label className="label">Systolic BP (mmHg)</label>
          <input className="input" type="number" name="sbp" value={f.sbp} onChange={handleChange} required />
        </div>
        <div className="column">
          <label className="label">Total/HDL Cholesterol Ratio</label>
          <input className="input" type="number" step="0.1" name="ratio" value={f.ratio} onChange={handleChange} required />
        </div>
        <div className="column">
          <label className="label">BMI (kg/m²)</label>
          <input className="input" type="number" step="0.1" name="bmi" value={f.bmi} onChange={handleChange} required />
        </div>
      </div>

      {/* Row 3 */}
      <div className="columns">
        <div className="column">
          <label className="label">Diabetes</label>
          <div className="select is-fullwidth">
            <select name="diabetes" value={f.diabetes} onChange={handleChange}>
              <option value="none">None</option>
              <option value="t1">Type 1</option>
              <option value="t2">Type 2</option>
            </select>
          </div>
        </div>
        <div className="column">
          <label className="label">Townsend Deprivation (−7 to +11)</label>
          <input className="input" type="number" step="0.1" name="townsend" value={f.townsend} onChange={handleChange} />
        </div>
        <div className="column">
          <label className="label">BP Treatment</label>
          <label className="checkbox ml-2">
            <input type="checkbox" name="bpTreated" checked={f.bpTreated} onChange={handleChange} /> On treatment
          </label>
        </div>
      </div>

      {/* Row 4: comorbidities */}
      <div className="columns">
        <div className="column">
          <label className="checkbox">
            <input type="checkbox" name="af" checked={f.af} onChange={handleChange} /> Atrial fibrillation
          </label><br/>
          <label className="checkbox">
            <input type="checkbox" name="ckd" checked={f.ckd} onChange={handleChange} /> CKD (stage 3–5)
          </label><br/>
          <label className="checkbox">
            <input type="checkbox" name="ra" checked={f.ra} onChange={handleChange} /> Rheumatoid arthritis
          </label>
        </div>
        <div className="column">
          <label className="checkbox">
            <input type="checkbox" name="migraine" checked={f.migraine} onChange={handleChange} /> Migraine
          </label><br/>
          <label className="checkbox">
            <input type="checkbox" name="smi" checked={f.smi} onChange={handleChange} /> Severe mental illness
          </label><br/>
          <label className="checkbox">
            <input type="checkbox" name="onAntipsychotic" checked={f.onAntipsychotic} onChange={handleChange} /> Atypical antipsychotics
          </label><br/>
          <label className="checkbox">
            <input type="checkbox" name="onSteroids" checked={f.onSteroids} onChange={handleChange} /> Corticosteroids (systemic)
          </label>
        </div>
      </div>

      <button className="button is-link is-fullwidth mt-3" type="submit">
        Calculate 10-Year Risk
      </button>
    </form>
  );
}
