function Teachers() {
  const teachers = [
    {
      name: "Dr. Rahul Sharma",
      subject: "Computer Science"
    },
    {
      name: "Priya Verma",
      subject: "Digital Marketing"
    },
    {
      name: "Aman Singh",
      subject: "Data Science"
    }
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#fff"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "40px"
        }}
      >
        Meet Our Expert Teachers
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px"
        }}
      >
        {teachers.map((teacher, index) => (
          <div
            key={index}
            style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,.08)"
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#2563eb",
                color: "#fff",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px"
              }}
            >
              👨‍🏫
            </div>

            <h3>{teacher.name}</h3>
            <p style={{ color: "#64748b", marginTop: "8px" }}>
              {teacher.subject}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teachers;
