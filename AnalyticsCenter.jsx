import React from "react";

function AnalyticsCenter() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>📊 Analytics Center</h1>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
          alt=""
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "15px",
        }}
      >
        <div className="card">
          <h3>Vehicles</h3>
          <h1>124,567</h1>
        </div>

        <div className="card">
          <h3>Violations</h3>
          <h1>1,245</h1>
        </div>

        <div className="card">
          <h3>Fuel Saved</h3>
          <h1>12,500L</h1>
        </div>

        <div className="card">
          <h3>CO₂ Reduced</h3>
          <h1>18 Tons</h1>
        </div>
      </div>

      <div className="card">
        <h2>Analytics Overview</h2>

        <p>██████████ 90%</p>
        <p>████████ 80%</p>
        <p>███████ 70%</p>
        <p>█████████ 85%</p>
      </div>
    </div>
  );
}

export default AnalyticsCenter;