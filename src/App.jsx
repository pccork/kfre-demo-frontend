import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import KFREPage from "./pages/KFREPage";
import DummyRiskPage from "./pages/DummyRiskPage";
import QRISK3Page from "./pages/QRISK3Page"; 

export default function App() {
  return (
    <Router basename="/kfre-demo-frontend">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kfre" element={<KFREPage />} />
        <Route path="/dummy-risk" element={<DummyRiskPage />} />
        <Route path="/qrisk3" element={<QRISK3Page />} />
      </Routes>
    </Router>
  );
}
