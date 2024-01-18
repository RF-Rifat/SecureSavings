import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";

import Features from "../components/Home/Features";

import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <MarqueeComp></MarqueeComp>
      <Features />
      <EmiCalculator />
    </div>
  );
};

export default Home;
