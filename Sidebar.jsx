import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Shield,
  Ambulance,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

function Sidebar() {
  return (
    <div
      style={{
        width: "280px",
        height: "100vh",
        background: "#081224",
        borderRight: "1px solid #1e293b",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#00D4FF",
          marginBottom: "40px",
        }}
      >
        🚦 SAMG
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <Link className="nav-link" to="/">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link className="nav-link" to="/tamilnadu">
          <Map size={18} />
          Tamil Nadu Command
        </Link>

        <Link className="nav-link" to="/enforcement">
          <Shield size={18} />
          Smart Enforcement
        </Link>

        <Link className="nav-link" to="/emergency">
          <Ambulance size={18} />
          Emergency Corridor
        </Link>

        <Link className="nav-link" to="/accident">
          <AlertTriangle size={18} />
          Accident Prediction
        </Link>

        <Link className="nav-link" to="/analytics">
          <BarChart3 size={18} />
          Analytics Center
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;