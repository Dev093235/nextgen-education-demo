import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Teachers from "../components/Teachers";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <Teachers />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
