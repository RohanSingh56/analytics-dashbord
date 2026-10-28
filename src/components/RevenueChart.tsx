import type { RevenuePoint } from '../data/mockAnalytics'

export type DateRange = 7 | 30 | 90


function RevenueChart() {

  return (
    <section className="dashboard-panel revenue-panel" aria-labelledby="revenue-title">
      <div className="panel-heading">
        <div>
          <h2 id="revenue-title">Revenue over time</h2>
          {/* time period */}
          {/* <p className="panel-subtitle">{periodLabel} <span>·</span> sample data</p> */} 
        </div>
      <p className="sample-note">Illustrative sample data — not connected to a live store.</p>
      </div>
    </section>
  )
}

export default RevenueChart
