function Courses() {
  const courses = [
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript & React."
    },
    {
      title: "Digital Marketing",
      desc: "SEO, Social Media & Ads."
    },
    {
      title: "Data Science",
      desc: "Python, AI & Machine Learning."
    }
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
          fontSize: "40px",
          marginBottom: "40px"
        }}
      >
        Popular Courses
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px"
        }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,.08)"
            }}
          >
            <h3>{course.title}</h3>

            <p
              style={{
                margin: "15px 0",
                color: "#64748b"
              }}
            >
              {course.desc}
            </p>

            <button
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px"
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
