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
      <div className="my-24 max-w-screen-2xl mx-auto">
        <div className="flex lg:flex-row flex-col-reverse items-center gap-5 p-3">
          <div className="lg:w-1/2 w-full md:p-20 p-5 bg-[#fff8f8]">
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
                </div>t
              </div>
              <Input
                label="Calculated Interest:"
                value={calculatedInterest > 0 ? calculatedInterest : ''}
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <img className="w-full h-full" src="https://img.freepik.com/free-photo/portrait-office-worker-with-laptop-credit-card-sitting-table-isolated-white_186202-3264.jpg?w=900&t=st=1705397017~exp=1705397617~hmac=1eccb59e436966b67ef44790c9955d63ad124cd0cf6de248fe01889f6a4dbd51" alt="Card" />
          </div>
        </div>
      </div>
    </>
  )
}

export default EmiCalculator