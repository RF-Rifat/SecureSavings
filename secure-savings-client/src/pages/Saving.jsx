import SavingBanner from "../components/Saving/SavingBanner";
import SavingCards from "../components/Saving/SavingCards";
import SecureBanner from "../components/Saving/SecureBanner";

const Saving = () => {
  return (
    <div>
      {/* <SavingBanner /> */}
      <SecureBanner></SecureBanner>
      <SavingCards />
    </div>
  );
};

export default Saving;
