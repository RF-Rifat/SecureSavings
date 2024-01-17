import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeComp></MarqueeComp>
      <Features />
      <EmiCalculator />
      <Footer />
    </div>
  );
};

export default Home;
