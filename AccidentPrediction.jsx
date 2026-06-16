import React from "react";

function AccidentPrediction() {
  const risks = [
    ["Salem Highway", 92],
    ["Madurai Ring Road", 84],
    ["Chennai Bypass", 77],
    ["Karur Highway", 71],
    ["Erode Highway", 68],
  ];

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>⚠ AI Accident Prediction Engine</h1>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200"
          alt=""
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="card">
        <h2>Risk Zones</h2>

        {risks.map((risk, i) => (
          <div key={i} className="alert-box">
            {risk[0]} - {risk[1]}%
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Prediction</h2>

        <h3>🔴 Next 1 Hour High Risk</h3>
        <h2>Salem Junction</h2>
      </div>
    </div>
  );
}

export default AccidentPrediction;