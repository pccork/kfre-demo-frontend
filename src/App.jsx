import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KFREPage from "./pages/KFREPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router basename="/kfre-demo-frontend">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/kfre" element={<KFREPage />} />
      </Routes>
    </Router>
  );
}
