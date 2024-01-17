import MarqueeComp from "./MarqueeComp";
import EmiCalculator from "../components/Home/EmiCalculator";

import Features from "../components/Home/Features";
import Footer from "../components/Footer";
import BannerCard from "../components/About Us/BannerCard";

const Home = () => {
  return (
    <div>
      <BannerCard />
      <MarqueeComp></MarqueeComp>
      <Features />
      <EmiCalculator />
      <Footer />
    </div>
  );
};

export default Home;
