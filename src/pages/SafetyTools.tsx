
import { ShieldCheck, Volume2, Phone, Users, ClipboardCheck } from "lucide-react";

export default function SafetyTools() {
  const speak = () => {
    const message = "सावधान। घबराइए नहीं। पैसे या ओटीपी साझा न करें। किसी भरोसेमंद व्यक्ति से बात करें और आधिकारिक माध्यम से सत्यापन करें।";
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.lang = "hi-IN";
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="page">
      <div className="page-heading">
        <span className="eyebrow">PERSONAL PROTECTION / 02</span>
        <h1><ShieldCheck /> Safety Tools</h1>
        <p>Practical steps to take when a call feels threatening or suspicious.</p>
      </div>

      <section className="card safety-tool-card">
        <span className="eyebrow">CIRCUIT BREAKER</span>
        <h2>Pause. You are not alone.</h2>
        <p>कोई भी दबाव में आकर पैसे, OTP या बैंक की जानकारी साझा न करें।</p>
        <button className="btn btn-danger" onClick={speak}>
          <Volume2 size={17} /> Play Hindi Safety Warning
        </button>
      </section>

      <div className="safety-tool-grid">
        <article className="card">
          <Phone size={25} />
          <h3>End the pressure</h3>
          <p>Call disconnect karein agar koi dhamki de raha hai. Screen-sharing band karein.</p>
        </article>
        <article className="card">
          <Users size={25} />
          <h3>Trusted contact</h3>
          <p>Apne trusted person ko khud call karein. Alert is prototype mein sirf preview hai.</p>
          <button className="btn btn-outline" onClick={() => alert("DEMO ONLY: Trusted contact alert preview. No message has been sent.")}>
            Preview contact alert
          </button>
        </article>
        <article className="card">
          <ClipboardCheck size={25} />
          <h3>Safety checklist</h3>
          <ul>
            <li>Never share OTP, PIN or passwords.</li>
            <li>Do not transfer money under pressure.</li>
            <li>Verify the claim independently.</li>
            <li>Report financial cyber fraud at 1930 in India.</li>
          </ul>
        </article>
      </div>
    </div>
  );
}
