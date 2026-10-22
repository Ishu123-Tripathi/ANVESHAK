
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  ShieldCheck,
  BookOpen,
  Clock3,
  ShieldAlert,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/analysis", label: "Live Analysis", icon: Activity },
  { to: "/safety-tools", label: "Safety Tools", icon: ShieldCheck },
  { to: "/awareness", label: "Awareness Hub", icon: BookOpen },
  { to: "/activity", label: "Recent Activity", icon: Clock3 },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" className="brand">
        <span className="brand-symbol"><ShieldCheck size={30} /></span>
        <span>
          <strong>ANVESHAK</strong>
          <small>Detect · Alert · Protect</small>
        </span>
      </NavLink>

      <nav className="side-nav">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="side-emergency">
        <ShieldAlert size={26} />
        <strong>Facing a scam call?</strong>
        <p>Stay calm. Verify. Report.</p>
        <a
          className="emergency-button"
          href="https://cybercrime.gov.in/"
          target="_blank"
          rel="noreferrer"
        >
          Report cybercrime ↗
        </a>
        <p>Indian cyber-fraud helpline: 1930</p>
      </div>

      <div className="side-quote">
        <strong>Pause.<br />Verify.<br /><span>Stay Safe.</span></strong>
        <small>Your safety comes first.</small>
      </div>

      <div className="sidebar-footer">ANVESHAK · Prototype v1.0</div>
    </aside>
  );
}
