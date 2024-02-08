import { FaGreaterThan } from "react-icons/fa6";

const BusinessLoan = () => {
  return (
    <div>
      <div className="bg-[#F5FAFF] relative">
        <div className="py-24">
          <img
            className="hidden md:block"
            src="https://i.ibb.co/Ydxr8H5/Home-loan.jpg"
            alt=""
          />
        </div>
        <div className="absolute lg:top-48 md:top-32 top-20 transform -translate-y-1/2 lg:left-24 left-5 mt-5">
          <h2 className="dark:text-[#003E5B] lg:text-6xl text-4xl font-semibold">
            Business Loans
          </h2>
          <div className="flex items-center gap-5 dark:text-[#003E5B] lg:my-5 font-semibold lg:text-xl text-base my-2">
            Secure Saving
            <FaGreaterThan className="dark:text-[#003E5B]" />
            Business Loans
          </div>
        </div>
      </div>

    </div>
  );
};

export default BusinessLoan;
