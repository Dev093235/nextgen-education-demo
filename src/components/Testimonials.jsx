function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Excellent faculty and amazing learning experience."
    },
    {
      name: "Priya Verma",
      text: "Best platform to build practical skills."
    },
    {
      name: "Aman Singh",
      text: "Highly recommended for career growth."
    }
  ];

  return (
    <section style={{padding:"80px 8%",background:"#f8fafc"}}>
      <h2 style={{textAlign:"center",fontSize:"40px",marginBottom:"40px"}}>
        Student Reviews
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
        gap:"25px"
      }}>
        {reviews.map((item,index)=>(
          <div key={index}
          style={{
            background:"#fff",
            padding:"30px",
            borderRadius:"12px",
            boxShadow:"0 10px 20px rgba(0,0,0,.08)"
          }}>
            <h3>{item.name}</h3>
            <p style={{marginTop:"15px",color:"#64748b"}}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
