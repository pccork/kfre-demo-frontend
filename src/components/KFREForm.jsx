import React, { useState } from "react";

export default function KFREForm({ onCalculate }) {
  const [inputs, setInputs] = useState({ age: "", sex: "male", egfr: "", acr: "" });

  const handleChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      age: parseFloat(inputs.age),
      sex: inputs.sex,
      egfr: parseFloat(inputs.egfr),
      acr: parseFloat(inputs.acr),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Age (years)</label>
        <input
          className="input"
          type="number"
          name="age"
          value={inputs.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label className="label">Sex</label>
        <div className="select is-fullwidth">
          <select name="sex" value={inputs.sex} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">eGFR (mL/min/1.73 m²)</label>
        <input
          className="input"
          type="number"
          name="egfr"
          value={inputs.egfr}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label className="label">ACR (mg/mmol)</label>
        <input
          className="input"
          type="number"
          name="acr"
          value={inputs.acr}
          onChange={handleChange}
          required
        />
      </div>

      <button className="button is-link is-fullwidth mt-4" type="submit">
        Calculate 5-Year Risk
      </button>
    </form>
  );
}
