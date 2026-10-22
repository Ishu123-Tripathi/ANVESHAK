
import { BookOpen, ShieldAlert, PhoneCall, LockKeyhole } from "lucide-react";

const tips = [
  { icon: ShieldAlert, title: "Fake authority", text: "Scammers may impersonate police, CBI or other officials to frighten you." },
  { icon: PhoneCall, title: "Video-call threats", text: "A video call or uniform does not prove someone's identity or authority." },
  { icon: LockKeyhole, title: "Secrecy and money", text: "Demands for secrecy, OTPs, bank details or urgent transfers are serious warning signs." },
];

export default function AwarenessHub() {
  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">KNOW THE SIGNS / 03</span>
        <h1><BookOpen /> Awareness Hub</h1>
        <p>Knowledge helps break the fear and isolation used in digital-arrest scams.</p>
      </div>

      <section className="card awareness-banner">
        <span className="eyebrow">REMEMBER THIS</span>
        <h2>Real verification never requires panic.</h2>
        <p>Pause the conversation, independently find an official contact channel, and ask a trusted person for help.</p>
      </section>

      <div className="awareness-grid">
        {tips.map(({ icon: Icon, title, text }, index) => (
          <article className="card awareness-card" key={title}>
            <div className="overview-icon teal"><Icon size={24} /></div>
            <span className="eyebrow">WARNING SIGN 0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>

      <section className="card awareness-report">
        <h2>Need to report cybercrime in India?</h2>
        <p>For financial cyber fraud, call 1930 promptly. You can also visit the official National Cyber Crime Reporting Portal.</p>
        <a className="btn btn-teal" href="https://cybercrime.gov.in/" target="_blank" rel="noreferrer">Open official reporting portal ↗</a>
      </section>
    </div>
  );
}
