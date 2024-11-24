import Header from "../app/components/Header";
import About from "./components/About";
import Hero from "../app/components/Hero";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Banner content="Your ultimate hub for managing all aspects of flight, so you can focus on what matters most — flying." />
        <Card />
        <Slider />
        <Banner
          heading="Take Flight with Flaps Ten"
          content="Download the app now to explore a new era of aviation management, training, and accessiblity."
        />{" "}
        <Footer />
      </main>
    </div>
  );
}
