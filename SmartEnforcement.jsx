import React from "react";

function SmartEnforcement() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>🚔 Smart Enforcement Center</h1>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200"
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
          <h3>🪖 No Helmet</h3>
          <h1>432</h1>
        </div>

        <div className="card">
          <h3>👥 Triple Riding</h3>
          <h1>89</h1>
        </div>

        <div className="card">
          <h3>↩ Wrong Side</h3>
          <h1>44</h1>
        </div>

        <div className="card">
          <h3>🚦 Signal Jump</h3>
          <h1>123</h1>
        </div>
      </div>
    </div>
  );
}

export default SmartEnforcement;