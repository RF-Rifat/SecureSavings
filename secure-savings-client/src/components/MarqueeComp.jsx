import Marquee from "react-fast-marquee";
import visa from "../assets/images/marqueeItems/visa.png";
import paypal from "../../src/assets/images/marqueeItems/paypal.png";
import gPay from "../../src/assets/images/marqueeItems/gPay.png";
import masterCard from "../../src/assets/images/marqueeItems/masterCard.png";

const MarqueeComp = () => {
  return (
    <div className="h-44 max-w-screen-2xl mx-auto">
      <h1 className="text-center text-4xl font-medium">Our partner</h1>
      <div>
        <Marquee className="mt-5" autoFill={true} pauseOnHover={true}>
          <img className="h-48 px-5 " src={visa} alt="" />
          <img className="h-36 px-5" src={masterCard} alt="" />
          <img className="h-36 px-5" src={paypal} alt="" />
          <img className="h-[100px] px-5" src={gPay} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeComp;
