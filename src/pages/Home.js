import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section
        style={{
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            color: "#1e293b"
          }}
        >
          Empowering Students
        </h1>

        <p
          style={{
            marginTop: "20px",
            color: "#64748b",
            fontSize: "18px"
          }}
        >
          Learn from the best teachers and build your future with NextGen Education.
        </p>

        <button
          style={{
            marginTop: "30px",
            background: "#2563eb",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "8px"
          }}
        >
          Explore Courses
        </button>
      </section>
    </>
  );
}

export default Home;
