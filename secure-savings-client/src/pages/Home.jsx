import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";
import Hero from "../components/Home/Hero";
import Banner from "../components/Home/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Hero />
      <MarqueeComp></MarqueeComp>
      <EmiCalculator />
    </div>
  );
};

export default Home;
