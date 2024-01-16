import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <MarqueeComp></MarqueeComp>
      <EmiCalculator />
    </div>
  );
};

export default Home;
