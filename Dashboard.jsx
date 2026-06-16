function Dashboard() {
  const cameras = [
    {
      city: "Chennai Central",
      status: "🟢 Normal",
      vehicles: "12,456",
      image: "/images/chennai.jpg",
    },
    {
      city: "Coimbatore Gandhipuram",
      status: "🟡 Medium Traffic",
      vehicles: "8,932",
      image: "/images/coimbatore.jpg",
    },
    {
      city: "Salem Highway",
      status: "🔴 Accident Risk",
      vehicles: "7,541",
      image: "/images/salem.jpg",
    },
    {
      city: "Trichy Junction",
      status: "🟢 Normal",
      vehicles: "6,123",
      image: "/images/trichy.jpg",
    },
    {
      city: "Karur Bypass",
      status: "🟡 Heavy Vehicles",
      vehicles: "4,342",
      image: "/images/karur.jpg",
    },
    {
      city: "Erode City",
      status: "🌧 Flood Alert",
      vehicles: "3,221",
      image: "/images/erode.jpg",
    },
    {
      city: "Bengaluru Silk Board",
      status: "🔴 Congestion",
      vehicles: "18,234",
      image: "/images/bangalore.jpg",
    },
    {
      city: "Mumbai Expressway",
      status: "🟡 Heavy Traffic",
      vehicles: "21,234",
      image: "/images/mumbai.jpg",
    },
  ];

  const challans = [
    ["TN37AB1234", "No Helmet", "₹500"],
    ["TN66XY7788", "Triple Riding", "₹1000"],
    ["TN09AA9988", "Wrong Side", "₹2000"],
    ["TN43GH5566", "Overspeed", "₹1500"],
    ["KA01AB2345", "Signal Jump", "₹1000"],
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* HEADER */}

      <div
        style={{
          background: "#081224",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#00d4ff" }}>
          🚦 SAMG - Smart AI Mobility Grid
        </h1>

        <h3>
          Government of Tamil Nadu Integrated Mobility Command Center
        </h3>
      </div>

      {/* KPI */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "15px",
        }}
      >
        <div className="card">
          <h3>🚗 Vehicles</h3>
          <h1>124,567</h1>
        </div>

        <div className="card">
          <h3>🚑 Ambulances</h3>
          <h1>43</h1>
        </div>

        <div className="card">
          <h3>🚔 Violations</h3>
          <h1>1,245</h1>
        </div>

        <div className="card">
          <h3>⚠ Emergencies</h3>
          <h1>12</h1>
        </div>

      
      </div>

      {/* MAPS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <h2>🇮🇳 India Mobility Operations</h2>

          <img
            src="/maps/india-map.png"
            alt="India Map"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "contain",
            }}
          />

          <p>🔴 Delhi - Congestion Alert</p>
          <p>🟡 Mumbai - Heavy Traffic</p>
          <p>🔴 Bengaluru - Peak Traffic</p>
        </div>

        <div className="card">
          <h2>🌍 Tamil Nadu Operations Map</h2>

          <img
            src="/maps/tamilnadu-map.png"
            alt="Tamil Nadu Map"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "contain",
            }}
          />

          <p>🟢 Chennai</p>
          <p>🟢 Coimbatore</p>
          <p>🔴 Salem</p>
          <p>🟡 Trichy</p>
          <p>🌧 Erode</p>
          <p>🟢 Karur</p>
        </div>
      </div>

      {/* ALERTS */}

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>🚨 Live AI Alerts</h2>

        <p>⚠ Accident Risk - Salem Highway (92%)</p>
        <p>🌧 Flood Warning - Erode</p>
        <p>🚑 Green Corridor Active - Coimbatore</p>
        <p>🚔 Helmet Violation Spike - Chennai</p>
        <p>🚦 Congestion Alert - Bengaluru</p>
      </div>

      {/* CAMERA FEEDS */}

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>📹 Live Traffic Camera Feeds</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "15px",
          }}
        >
          {cameras.map((camera, index) => (
            <div key={index}>
              <img
                src={camera.image}
                alt={camera.city}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <h4>{camera.city}</h4>

              <p>{camera.status}</p>

              <p>Vehicles: {camera.vehicles}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EMERGENCY CORRIDOR */}

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>🚑 Emergency Green Corridor</h2>

        <img
          src="/images/ambulance.jpg"
          alt="Ambulance"
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <h3>Patient: Cardiac Emergency</h3>

        <p>Source: Singanallur</p>

        <p>Destination: PSG Hospital</p>

        <p>Distance: 7.8 KM</p>

        <p>ETA: 6 Minutes</p>

        <p>Signals Synced: 8</p>

        <p>Hospital Notified: YES</p>
      </div>

      {/* CHALLANS */}

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>🚔 Live E-Challan Monitoring</h2>

        <table width="100%">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Violation</th>
              <th>Fine</th>
            </tr>
          </thead>

          <tbody>
            {challans.map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ANALYTICS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <h2>⚠ Top Risk Zones</h2>

          <p>Salem Highway - 92%</p>
          <p>Madurai Ring Road - 84%</p>
          <p>Chennai Bypass - 77%</p>
          <p>Karur Highway - 71%</p>
          <p>Erode Road - 68%</p>
        </div>

        <div className="card">
          <h2>📊 Smart Mobility Analytics</h2>

          <p>Fuel Saved : 12,500 Litres</p>
          <p>CO₂ Reduced : 18 Tons</p>
          <p>Revenue Generated : ₹45 Lakh</p>
          <p>Accidents Prevented : 352</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;