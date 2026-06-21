function FAQ() {
  const faqs = [
    {
      question: "How can I apply?",
      answer: "Click the Apply Now button and fill out the admission form."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, every completed course comes with a certificate."
    },
    {
      question: "Are classes online?",
      answer: "Yes, we provide both online and offline classes."
    }
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#ffffff"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "40px"
        }}
      >
        Frequently Asked Questions
      </h2>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            background: "#f8fafc",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        >
          <h3>{faq.question}</h3>
          <p style={{ marginTop: "10px", color: "#64748b" }}>
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
