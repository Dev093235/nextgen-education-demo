function Hero() {
  return (
    <section
      style={{
        padding: "80px 8%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#eff6ff"
      }}
    >
      <div style={{ maxWidth: "550px" }}>
        <h1
          style={{
            fontSize: "56px",
            color: "#1e293b",
            lineHeight: "1.2"
          }}
        >
          Learn Today,<br />Lead Tomorrow
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#64748b",
            fontSize: "18px"
          }}
        >
          Join India's modern education platform with expert teachers,
          practical courses and career guidance.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "8px",
              marginRight: "15px"
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: "#fff",
              color: "#2563eb",
              padding: "14px 28px",
              border: "2px solid #2563eb",
              borderRadius: "8px"
            }}
          >
            Explore Courses
          </button>
        </div>
      </div>

      <div
        style={{
          width: "380px",
          height: "380px",
          background: "#dbeafe",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "80px"
        }}
      >
        🎓
      </div>
    </section>
  );
}

export default Hero;
