import React, { useState } from 'react'

export default function KFREForm({ onCalculate }) {
  const [inputs, setInputs] = useState({ age: '', sex: 'M', egfr: '', acr: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputs.age || !inputs.egfr || !inputs.acr) return
    onCalculate({
      age: Number(inputs.age),
      egfr: Number(inputs.egfr),
      acr: Number(inputs.acr),
      sex: inputs.sex
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Age (years)</label>
        <div className="control">
          <input className="input" type="number" name="age" value={inputs.age}
            onChange={handleChange} required />
        </div>
      </div>

      <div className="field">
        <label className="label">Sex</label>
        <div className="control">
          <div className="select is-fullwidth">
            <select name="sex" value={inputs.sex} onChange={handleChange}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">eGFR (mL/min/1.73m²)</label>
        <div className="control">
          <input className="input" type="number" name="egfr"
            value={inputs.egfr} onChange={handleChange} required />
        </div>
      </div>

      <div className="field">
        <label className="label">ACR (mg/mmol)</label>
        <div className="control">
          <input className="input" type="number" name="acr"
            value={inputs.acr} onChange={handleChange} required />
        </div>
      </div>

      <div className="field mt-4">
        <div className="control">
          <button type="submit" className="button is-link is-fullwidth">
            Calculate Risk
          </button>
        </div>
      </div>
    </form>
  )
}
