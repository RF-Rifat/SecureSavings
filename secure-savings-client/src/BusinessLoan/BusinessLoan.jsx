import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

const BusinessLoan = () => {
  const [loanAmount, setLoanAmount] = useState(1000);

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);

  const handleClick = (buttonNumber) => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);

    // Activate the clicked button & Monthly installment
    switch (buttonNumber) {
      case 1:
        setIsActive1(true);
        setMonthlyInstallment(9.0);
        break;
      case 2:
        setIsActive2(true);
        setMonthlyInstallment(18.0);
        break;
      case 3:
        setIsActive3(true);
        setMonthlyInstallment(36.0);
        break;
      default:
        break;
    }
  };

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

        <div className="text-center px-4">
          <h2 className="text-green-600 font-semibold lg:text-2xl text-xl my-5">
            A business loan innovator at your service
          </h2>
          <span className="text-black lg:text-6xl text-3xl font-semibold dark:text-[#003E5B]">
            An inexpensive and flexible business loan on your own terms
          </span>
          <p className="dark:text-[#003E5B] my-5">
            We understand entrepreneurs and the corporate world with its many
            challenges and opportunities.We don’t waste time on unnecessary
            paperwork and do most things electronically. It’s no wonder that we
            are among the most popular business loan providers in the Bankio.
          </p>
        </div>

        {/* Business Loan Amount range */}

        <div className="bg-white shadow-lg rounded-xl w-4/5 mx-auto py-10 mt-20">
        <div className="dark:text-[#003E5B] text-center">
          <div>
            <h2 className="font-bold lg:text-4xl text-xl my-5">
              Loan Calculator
            </h2>
            <p>
              Choose the business loan amount that you need ($1,000 to $250,000)
              and the payment period (6–18 months) that suits you best.
            </p>
            <p className="font-bold lg:text-2xl text-lg mt-3">
              Business Loan Amount :{" "}
              <span className="text-green-600">$ {loanAmount}</span>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center py-5">
            <input
              type="range"
              min="1000"
              max="250000"
              step="100"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              className="w-1/2 appearance-none cursor-pointer h-2 rounded-full bg-[#003E5B] border"
            />
          </div>

          {/* Business Loan Amount Monthly installment button */}

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-5 mx-auto">
            <button
              className={`rounded-full ${
                isActive1
                  ? "bg-green-600 px-5 text-white uppercase text-base font-semibold py-2"
                  : "bg-none border border-green-600 px-5 uppercase text-base font-semibold py-2"
              }`}
              onClick={() => handleClick(1)}
            >
              6 Months
            </button>
            <button
              className={`rounded-full ${
                isActive2
                  ? "bg-green-600 px-5 text-white uppercase text-base font-semibold py-2"
                  : "bg-none border border-green-600 px-5 uppercase text-base font-semibold py-2"
              }`}
              onClick={() => handleClick(2)}
            >
              12 Months
            </button>
            <button
              className={`rounded-full ${
                isActive3
                  ? "bg-green-600 px-5 text-white uppercase text-base font-semibold py-2"
                  : "bg-none border border-green-600 px-5 uppercase text-base font-semibold py-2"
              }`}
              onClick={() => handleClick(3)}
            >
              18 Months
            </button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-around items-center gap-y-5 py-10">
            <p className="text-xl font-semibold">
              Monthly installment of{" "}
              <span className="text-green-600">
                $ {monthlyInstallment.toFixed(2)}
              </span>
            </p>
            <Button className="rounded-full bg-[#003E5B]">
              Apply for loan
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLoan;
