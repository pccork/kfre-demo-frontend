import React from 'react'

export default function RiskCard({ value }) {
  const risk = parseFloat(value)
  let color = 'has-text-success'
  let label = 'Low Risk'

  if (risk > 40 && risk <= 70) {
    color = 'has-text-warning'
    label = 'Moderate Risk'
  } else if (risk > 70) {
    color = 'has-text-danger'
    label = 'High Risk'
  }

  return (
    <div className="notification is-light has-text-centered mt-5">
      <h2 className="title is-5">Estimated 5-Year Risk</h2>
      <p className={`title is-2 ${color}`}>{value}%</p>
      <p className={`subtitle is-6 ${color}`}>{label}</p>
    </div>
  )
}
