import React from "react";

function EmergencyCorridor() {
  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>🚑 Emergency Green Corridor</h1>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200"
          alt=""
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="card">
        <h2>Live Route</h2>

        <h3>📍 Singanallur</h3>
        <h3>➡ Gandhipuram</h3>
        <h3>➡ PSG Hospital</h3>

        <h2>ETA : 6 Minutes</h2>

        <h2>🚑 → 🚦 → 🚦 → 🚦 → 🏥</h2>
      </div>

      <div className="card">
        <h2>Hospital Status</h2>

        <p>🏥 PSG Hospital Ready</p>
        <p>👨‍⚕ Doctors Available</p>
        <p>🛏 ICU Available</p>
      </div>
    </div>
  );
}

export default EmergencyCorridor;