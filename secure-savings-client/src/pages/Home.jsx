import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeComp></MarqueeComp>
      <Features />
      <EmiCalculator />
    </div>
  );
};

export default Home;
