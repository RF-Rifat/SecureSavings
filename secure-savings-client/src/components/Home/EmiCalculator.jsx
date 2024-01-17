import { Input, Button } from "@material-tailwind/react";
import { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [month, setMonth] = useState('');
  const [interest, setInterest] = useState('');
  const [calculatedInterest, setCalculatedInterest] = useState(0);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const calculateInterest = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interest) / 100;
    const time = parseFloat(month) / 12;

    const calculatedInterest = (principal * rate * time).toFixed(2);
    setCalculatedInterest(calculatedInterest);
  };

  const handleReset = () => {
    setLoanAmount('');
    setMonth('');
    setInterest('');
    setCalculatedInterest(0);
  };

  return (
    <>
      <div className="my-24 max-w-screen-2xl mx-auto bg-[#fff8f8]">
        <div className="flex lg:flex-row flex-col-reverse items-center gap-5 p-3">
          <div className="lg:w-1/2 w-full md:p-20 p-5">
            <h4 className="text-red-400 text-[18px] font-semibold">CALCULATE LOAN</h4>
            <h2 className="text-blue-gray-900 font-bold xl:text-4xl text-2xl mt-4 mb-10">Online EMI Calculator</h2>
            <div className="flex flex-col gap-6">
              <Input
                onChange={handleLoanAmountChange}
                value={loanAmount}
                color="indigo"
                label="Loan Amount"
              />
              <Input
                onChange={handleMonthChange}
                value={month}
                color="indigo"
                label="Month"
              />
              <Input
                onChange={handleInterestChange}
                value={interest}
                color="indigo"
                label="Interest %"
              />
              <div className="flex gap-4">
                <div className="flex gap-4">
                  <Button
                    className="text-white bg-red-500 font-medium text-[14px] rounded-none"
                    onClick={calculateInterest}
                  >
                    Calculate
                  </Button>
                  <Button
                    className="text-red-500 border-red-500 font-medium text-[14px] rounded-none"
                    variant="outlined"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
              <Input
                label="Calculated Interest:"
                value={calculatedInterest > 0 ? calculatedInterest : ''}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img className="w-full h-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1658526914485-af7b566986b2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card" />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmiCalculator;