function Stats() {
  const stats = [
    { number: "5000+", label: "Students" },
    { number: "120+", label: "Teachers" },
    { number: "50+", label: "Courses" },
    { number: "95%", label: "Placement" }
  ];

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
        gap: "20px",
        padding: "60px 8%",
        background: "#fff"
      }}
    >
      {stats.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center"
          }}
        >
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
