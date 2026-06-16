function TopNavbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#081224",
        borderBottom: "1px solid #1e293b",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "0 20px",
      }}
    >
      <h2 style={{ color: "#00D4FF" }}>
        Smart AI Mobility Grid
      </h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <span>🚗 124,567 Vehicles</span>
        <span>🚑 43 Ambulances</span>
        <span>⚠ 12 Emergencies</span>
      </div>
    </div>
  );
}

export default TopNavbar;