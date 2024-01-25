// import SavingBanner from "../components/Saving/SavingBanner";
import Financial from "../components/Saving/Financial";
import SavingCards from "../components/Saving/SavingCards";
import SecureBanner from "../components/Saving/SecureBanner";

const Saving = () => {
  return (
    <div>
      {/* <SavingBanner /> */}
      <SecureBanner></SecureBanner>
      <SavingCards />
      <Financial></Financial>
    </div>
  );
};

export default Saving;
