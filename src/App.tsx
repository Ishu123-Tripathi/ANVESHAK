
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LiveAnalysis from "./pages/LiveAnalysis";
import SafetyTools from "./pages/SafetyTools";
import AwarenessHub from "./pages/Awareness";
import RecentActivity from "./pages/RecentActivity";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />

        <main className="main-content">
          <header className="topbar">
            <div>
              <span className="breadcrumb">ANVESHAK / </span>
              <strong>Digital Safety Workspace</strong>
            </div>

            <div className="top-status">
              <span className="pulse-dot" />
              SIMULATION MODE
            </div>
          </header>

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route
                path="/analysis"
                element={<LiveAnalysis />}
              />

              <Route
                path="/safety-tools"
                element={<SafetyTools />}
              />

              <Route
                path="/awareness"
                element={<AwarenessHub />}
              />

              <Route
                path="/activity"
                element={<RecentActivity />}
              />

              <Route
                path="*"
                element={<Dashboard />}
              />
            </Routes>
          </div>

          <footer className="main-footer">
            <span>
              ⬡ ANVESHAK · A safer digital India, one alert at a time.
            </span>

            <span>
              Prototype · Simulated signals · No real call monitoring
            </span>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
