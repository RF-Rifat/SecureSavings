import { Input, Button } from "@material-tailwind/react";

const EmiCalculator = () => {

  return (
    <>
      <div className="my-24 max-w-screen-2xl mx-auto">
        <div className="flex lg:flex-row flex-col-reverse items-center gap-5 p-3">
          <div className="lg:w-1/2 w-full md:p-20 p-5 bg-[#fff8f8]">
            <h4 className="text-red-400 text-[18px] font-semibold">CALCULATE LOAN</h4>
            <h2 className="text-blue-gray-900 font-bold xl:text-4xl text-2xl mt-4 mb-10">Online EMI Calculator</h2>
            <div className="flex flex-col gap-6">
              <Input color="indigo" label="Number" />
              <Input color="indigo" label="Number" />
              <Input color="indigo" label="Number" />
              <div className="flex gap-4">
                <Button className="text-white bg-red-500 font-medium text-[14px] rounded-none">Calculate</Button>
                <Button className="text-red-500 border-red-500 font-medium text-[14px] rounded-none" variant="outlined">Reset</Button>
              </div>
              <Input label="Monthly Installment is " />
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