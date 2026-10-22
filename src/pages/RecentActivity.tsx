
import { Clock3, Trash2, Activity } from "lucide-react";

export default function RecentActivity() {
  const events = [
    { time: "Demo scenario", title: "Digital-arrest pattern", detail: "All six simulated signals selected.", risk: "HIGH RISK" },
    { time: "Demo scenario", title: "Suspicious pattern", detail: "Prolonged call and ignored calls.", risk: "ELEVATED" },
    { time: "System", title: "Prototype ready", detail: "Waiting for user simulation.", risk: "INFO" },
  ];

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">EVENT LOG / 04</span>
        <h1><Clock3 /> Recent Activity</h1>
        <p>Example events for the ANVESHAK demonstration.</p>
      </div>

      <section className="card activity-summary">
        <Activity size={25} />
        <div><span className="eyebrow">SAMPLE EVENTS</span><h2>{events.length} demonstration entries</h2></div>
      </section>

      <section className="card activity-list">
        <div className="card-heading">
          <span><Clock3 size={17} /> ACTIVITY TIMELINE</span>
          <button className="reset-button" onClick={() => alert("These are static sample events; no saved history was deleted.")}>
            <Trash2 size={15} /> Clear demo
          </button>
        </div>
        {events.map((event, index) => (
          <article className="activity-row" key={event.title}>
            <span className={`activity-dot ${index === 0 ? "danger-dot" : ""}`} />
            <div className="activity-details">
              <strong>{event.title}</strong>
              <p>{event.detail}</p>
              <small>{event.time}</small>
            </div>
            <span className={`activity-risk risk-${index}`}>{event.risk}</span>
          </article>
        ))}
      </section>
      <p className="disclaimer-box">This page currently shows sample entries, not real phone-call monitoring or a production event log.</p>
    </div>
  );
}
