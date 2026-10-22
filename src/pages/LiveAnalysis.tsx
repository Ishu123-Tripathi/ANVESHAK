
import { useState } from "react";
import {
  Activity, AlertTriangle, ShieldCheck, RotateCcw,
  Zap, CheckCircle2, Volume2
} from "lucide-react";

const signals = [
  { title: "Unusually long call duration", points: 15, detail: "The conversation continues unusually long." },
  { title: "Other calls ignored", points: 15, detail: "Incoming calls are repeatedly dismissed." },
  { title: "Banking app opened during call", points: 20, detail: "A banking app is opened during the simulated call." },
  { title: "Screen sharing detected", points: 20, detail: "Screen sharing is marked as active in this demo." },
  { title: "Threats or legal action pressure", points: 15, detail: "The caller threatens arrest or legal action." },
  { title: "Secrecy or isolation tactics", points: 15, detail: "The caller tells the person not to contact anyone." },
];

export default function LiveAnalysis() {
  const [active, setActive] = useState<boolean[]>(signals.map(() => false));
  const [scenario, setScenario] = useState("Custom simulation");
  const score = Math.min(100, signals.reduce((sum, signal, i) => sum + (active[i] ? signal.points : 0), 0));
  const risk = score >= 60 ? "HIGH RISK" : score >= 30 ? "ELEVATED RISK" : "LOW RISK";
  const color = score >= 60 ? "#ff657e" : score >= 30 ? "#f6bd55" : "#39e4bd";

  function runScenario(type: "normal" | "suspicious" | "high") {
    const next = type === "normal"
      ? signals.map(() => false)
      : type === "suspicious"
        ? [true, true, false, false, false, false]
        : signals.map(() => true);

    setActive(next);
    setScenario(type === "normal" ? "Normal conversation" : type === "suspicious" ? "Suspicious pattern" : "Digital-arrest pattern");
  }

  function toggle(index: number) {
    setActive(old => old.map((value, i) => i === index ? !value : value));
    setScenario("Custom simulation");
  }

  function speakWarning() {
    const message = "सावधान। घबराइए नहीं। कोई भी अधिकारी वीडियो कॉल पर आपसे पैसे या ओटीपी मांगकर आपको गिरफ्तार नहीं कर सकता। किसी भरोसेमंद व्यक्ति से बात करें और स्वतंत्र रूप से सत्यापन करें।";
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = "hi-IN";
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">ANALYSIS WORKSPACE / 01</span>
        <h1><Activity size={27} /> Live Risk Analysis</h1>
        <p>Explore how simulated behavioural signals influence the risk assessment.</p>
      </div>

      <section className="analysis-overview">
        <article className="card analysis-score-card">
          <div className="card-heading"><span><Activity size={16} /> RISK ASSESSMENT</span><span className="demo-badge">DEMO</span></div>
          <div className="analysis-score" style={{ color }}>
            <strong>{score}</strong><span>/100</span>
          </div>
          <div className="analysis-progress"><div style={{ width: `${score}%`, background: color }} /></div>
          <h2 style={{ color }}>{risk}</h2>
          <p>{score >= 60 ? "Several high-risk indicators are active. Circuit Breaker is recommended." : score >= 30 ? "Some warning signals are present. Review the context carefully." : "Few or no warning signals selected in this simulation."}</p>
          <div className="scenario-name">Current scenario: <strong>{scenario}</strong></div>
        </article>

        <article className="card scenario-card">
          <div className="card-heading"><span><Zap size={16} /> QUICK SCENARIOS</span></div>
          <p className="muted">Choose a predefined scenario to demonstrate the score.</p>
          <button className="scenario-option" onClick={() => runScenario("normal")}><CheckCircle2 /><span><strong>Normal conversation</strong><small>0 risk points</small></span></button>
          <button className="scenario-option" onClick={() => runScenario("suspicious")}><AlertTriangle /><span><strong>Suspicious pattern</strong><small>30 risk points</small></span></button>
          <button className="scenario-option" onClick={() => runScenario("high")}><ShieldCheck /><span><strong>Digital-arrest pattern</strong><small>100 risk points</small></span></button>
          <button className="reset-button" onClick={() => runScenario("normal")}><RotateCcw size={15} /> Reset simulation</button>
        </article>
      </section>

      <section className="card signal-workspace">
        <div className="card-heading"><span><AlertTriangle size={16} /> BEHAVIOURAL SIGNALS</span><span>{active.filter(Boolean).length} of 6 selected</span></div>
        <p className="muted">Toggle each signal to see how the simulated risk score changes.</p>
        <div className="analysis-signal-list">
          {signals.map((signal, i) => (
            <label key={signal.title} className={`analysis-signal ${active[i] ? "selected" : ""}`}>
              <input type="checkbox" checked={active[i]} onChange={() => toggle(i)} />
              <span className="analysis-check">{active[i] ? "✓" : ""}</span>
              <span className="analysis-signal-copy"><strong>{signal.title}</strong><small>{signal.detail}</small></span>
              <span className="analysis-points">+{signal.points}</span>
            </label>
          ))}
        </div>
      </section>

      {score >= 60 && (
        <section className="breaker-panel analysis-breaker">
          <div className="breaker-icon"><Zap /></div>
          <div className="breaker-copy">
            <span className="breaker-eyebrow">CIRCUIT BREAKER · SIMULATED</span>
            <h2>Pause. You are not alone.</h2>
            <p>Do not share financial details or act under pressure. Verify independently.</p>
          </div>
          <button className="btn btn-danger" onClick={speakWarning}><Volume2 size={16} /> Hindi safety warning</button>
          <ul className="safety-checklist">
            <li>✓ Never share OTPs or passwords.</li>
            <li>✓ Contact someone you trust.</li>
            <li>✓ Verify claims independently.</li>
          </ul>
        </section>
      )}

      <p className="disclaimer-box">ⓘ This is a simulated prototype. It does not monitor actual phone calls, banking applications, microphone audio or screen sharing. Risk scores are illustrative, not a validated fraud-detection model.</p>
    </div>
  );
}
