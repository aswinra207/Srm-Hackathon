function CameraGrid() {
  const cameras = [
    {
      city: "Chennai",
      image: "/images/chennai.jpg",
      status: "Normal",
    },
    {
      city: "Coimbatore",
      image: "/images/coimbatore.jpg",
      status: "Medium Traffic",
    },
    {
      city: "Salem",
      image: "/images/salem.jpg",
      status: "Accident Risk",
    },
    {
      city: "Trichy",
      image: "/images/trichy.jpg",
      status: "Normal",
    },
    {
      city: "Karur",
      image: "/images/karur.jpg",
      status: "Heavy Vehicles",
    },
    {
      city: "Erode",
      image: "/images/erode.jpg",
      status: "Flood Alert",
    },
  ];

  return (
    <div className="card">
      <h2>📹 Live Camera Feeds</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default CameraGrid;