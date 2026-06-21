function Gallery() {
  const items = [
    "Campus",
    "Smart Class",
    "Library",
    "Computer Lab",
    "Events",
    "Sports"
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#f8fafc"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          marginBottom: "40px"
        }}
      >
        Campus Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              height: "180px",
              background: "#dbeafe",
              borderRadius: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1e3a8a"
            }}
          >
            📸 {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
