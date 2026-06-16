import React from "react";

function TamilNaduCommandCenter() {
  const districts = [
    "Chennai",
    "Coimbatore",
    "Salem",
    "Trichy",
    "Erode",
    "Karur",
    "Madurai",
    "Tiruppur",
  ];

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>🌍 Tamil Nadu Command Center</h1>

      <div className="card">
        <h2>Tamil Nadu Operations Map</h2>

       <img
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tamil_Nadu_districts_map.svg/1200px-Tamil_Nadu_districts_map.svg.png"
  alt="Tamil Nadu District Map"
  style={{
    width: "100%",
    height: "500px",
    objectFit: "contain",
    background: "white",
    borderRadius: "10px",
  }}
/>
      </div>

      <div className="card">
        <h2>District Monitoring</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "10px",
          }}
        >
          {districts.map((d, i) => (
            <div key={i} className="alert-box">
              🟢 {d}
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Live Camera Feed</h2>

        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200"
          alt="Traffic"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

export default TamilNaduCommandCenter;