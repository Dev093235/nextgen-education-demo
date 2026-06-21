function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 8%",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)"
      }}
    >
      <h2 style={{ color: "#2563eb" }}>NextGen Edu</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "8px"
        }}
      >
        Apply Now
      </button>
    </nav>
  );
}

export default Navbar;
