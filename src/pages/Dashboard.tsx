
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Activity, AlertTriangle, ArrowUpRight, Zap, BookOpen } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-pill">✦ DIGITAL SAFETY INTELLIGENCE</span>
          <h1>Break the Fear Loop.<br /><span>Stop Digital Arrest.</span></h1>
          <p>Understand coercion patterns, learn the warning signs, and take a safer next step.</p>
          <div className="hero-actions">
            <button className="btn btn-teal" onClick={() => navigate("/analysis")}>
              <Activity size={16} /> Start Risk Simulation
            </button>
            <button className="btn btn-outline" onClick={() => navigate("/awareness")}>
              Learn the Warning Signs
            </button>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-shield"><ShieldCheck size={76} /></div>
          <div className="floating-tag tag-red">⚠ Fake authority claim</div>
          <div className="floating-tag tag-blue">▣ Bank details requested</div>
          <div className="floating-tag tag-purple">◈ Isolation pressure</div>
        </div>
      </section>

      <div className="section-title">
        <div><span className="eyebrow">YOUR SAFETY OVERVIEW</span><h2>Command Center</h2></div>
        <span className="demo-badge">● DEMO MODE</span>
      </div>

      <section className="dashboard-cards">
        <article className="card overview-card">
          <div className="overview-icon teal"><ShieldCheck /></div>
          <span className="muted">Protection status</span>
          <h3>Ready to simulate</h3>
          <p>Explore how coercion indicators affect a risk assessment.</p>
          <button className="card-link" onClick={() => navigate("/analysis")}>Open Live Analysis <ArrowUpRight size={15} /></button>
        </article>

        <article className="card overview-card">
          <div className="overview-icon purple"><Activity /></div>
          <span className="muted">Risk assessment</span>
          <h3>Behavioural signals</h3>
          <p>Try six example indicators in a controlled simulation.</p>
          <button className="card-link" onClick={() => navigate("/analysis")}>Explore indicators <ArrowUpRight size={15} /></button>
        </article>

        <article className="card overview-card">
          <div className="overview-icon red"><AlertTriangle /></div>
          <span className="muted">Need guidance?</span>
          <h3>Safety first</h3>
          <p>Review the steps to take if someone threatens you on a call.</p>
          <button className="card-link" onClick={() => navigate("/safety-tools")}>Open Safety Tools <ArrowUpRight size={15} /></button>
        </article>
      </section>

      <section className="lower-grid dashboard-lower">
        <article className="card welcome-card">
          <span className="eyebrow">HOW ANVESHAK HELPS</span>
          <h2>Pause before pressure becomes panic.</h2>
          <p>Scammers may impersonate officials, demand secrecy, and pressure people to transfer money. ANVESHAK demonstrates how warning signals can support safer decisions.</p>
          <button className="btn btn-outline" onClick={() => navigate("/awareness")}><BookOpen size={16} /> Explore Awareness Hub</button>
        </article>
        <article className="card quick-actions">
          <span className="eyebrow">QUICK ACTIONS</span>
          <button onClick={() => navigate("/safety-tools")}><ShieldCheck size={18} /> Hindi safety warning <ArrowUpRight size={15} /></button>
          <button onClick={() => navigate("/safety-tools")}><Zap size={18} /> Trusted contact preview <ArrowUpRight size={15} /></button>
          <button onClick={() => navigate("/activity")}><Activity size={18} /> View recent activity <ArrowUpRight size={15} /></button>
        </article>
      </section>
    </div>
  );
}
