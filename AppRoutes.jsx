import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import TamilNaduCommandCenter from "../pages/TamilNaduCommandCenter";
import SmartEnforcement from "../pages/SmartEnforcement";
import EmergencyCorridor from "../pages/EmergencyCorridor";
import AccidentPrediction from "../pages/AccidentPrediction";
import AnalyticsCenter from "../pages/AnalyticsCenter";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tamilnadu" element={<TamilNaduCommandCenter />} />
      <Route path="/enforcement" element={<SmartEnforcement />} />
      <Route path="/emergency" element={<EmergencyCorridor />} />
      <Route path="/accident" element={<AccidentPrediction />} />
      <Route path="/analytics" element={<AnalyticsCenter />} />
    </Routes>
  );
}

export default AppRoutes;