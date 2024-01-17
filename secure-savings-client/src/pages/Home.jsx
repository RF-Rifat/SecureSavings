import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";

import Features from "../components/Home/Features";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";


const Home = () => {
  return (
    <div>
      <Banner />
      <MarqueeComp></MarqueeComp>
      <Features />
      <EmiCalculator />
      <Footer />
    </div>
  );
};

export default Home;
