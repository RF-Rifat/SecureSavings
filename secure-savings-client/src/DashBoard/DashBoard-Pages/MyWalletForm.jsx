import { useContext } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { increment } from "../../redux/counterSlice";
import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Lottie from "lottie-react";
import CardOne from "../../../public/CardOne.json";
import CardTwo from "../../../public/CardTwo.json";
import { current } from "@reduxjs/toolkit";

const MyWalletForm = () => {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser } = authInfo;
  // redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputAmount = parseInt(form.money.value);
    const num = parseInt(form.number.value);
    const amountStr = document.getElementById("wallet-amount").innerText;
    const amountInt = parseInt(amountStr);
    if (amountInt === 100) {
      return toast.error("Your Account Balance is Low");
    }
    if (inputAmount >= amountInt) {
      return toast.error("You have not enough money");
    }
    const currentAmount = amountInt - inputAmount;
    // console.log(amount);
    document.getElementById("wallet-amount").innerText = currentAmount;

    // console.log(typeof amount);
    // console.log(typeof num);
    //   create transaction Id

    function generateRandomString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      return result;
    }
    const randomString = generateRandomString(6);
    // console.log(randomString);
    const transactionInfo = {
      cardNum: num,
      amount: inputAmount,
      transactionId: randomString,
    };
    console.log(transactionInfo);
    dispatch(increment());
    // form.reset();
  };

  // Credit card
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <div className="py-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ">
        <div className="flex flex-col w-full gap-7">
          <div className="bg-gradient-to-tl flex flex-col md:flex-row rounded-xl dark:bg-dark p-5 relative overflow-hidden">
            <div className="flex flex-1 gap-4 sm:flex-wrap sm:gap-12 xl:gap-6 flex-col lg:flex-row">
              <div className="flex-1 flex-col gap-3 justify-center items-center">
                <span className="text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Your Balance: $<span id="wallet-amount">1000</span>
                </span>
                <div className="flex gap-1 items-center">
                  <span className="mb-1 text-xl font-bold text-dark dark:text-white">
                    ID:
                  </span>
                  <span className="mb-1 text-base font-bold text-dark dark:text-white">
                    {LoggedUser[0]?._id}
                  </span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 mt-10">
                  <Lottie animationData={CardTwo} />
                  <Lottie animationData={CardOne} />
                </ul>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
                <div className="mx-4">
                  <div className="credit-card sm:w-auto mx-auto">
                    <div className="shadow-lg rounded-xl py-8 md:py-3">
                      <header className="flex flex-col justify-center items-center">
                        <div className="relative">
                          <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                          />
                        </div>
                      </header>
                      <form className="p-4" onSubmit={handleSubmit}>
                        <div className="my-3">
                          <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            className="block mx-auto w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"
                            required
                            maxLength={16}
                            value={state.number}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                          />
                        </div>
                        <div className="my-3">
                          <input
                            type="text"
                            name="money"
                            placeholder="Money"
                            className="block mx-auto w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"
                            required
                            maxLength={8}
                          />
                        </div>
                        <footer className="px-4 pb-4 flex justify-center">
                          <button
                            href="#_"
                            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
                          >
                            <span className="absolute left-0 block w-full h-0 transition-all bg-[#2195f3] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease" />
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>
                            </span>
                            <span className="relative">Send Money</span>
                          </button>
                        </footer>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWalletForm;
