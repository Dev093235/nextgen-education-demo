function WhyChooseUs() {
  const features = [
    "Expert Teachers",
    "Live Classes",
    "Job Assistance",
    "Certificates",
    "Affordable Fees",
    "24x7 Support"
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#ffffff",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>
        Why Choose Us
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px"
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#f1f5f9",
              padding: "30px",
              borderRadius: "12px"
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
