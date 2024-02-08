import { useContext } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { increment } from "../../redux/counterSlice";
// Two
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
// 
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const MyWalletForm = () => {
    const authInfo = useContext(AdminDataContext);
    const { LoggedUser } = authInfo;
    // redux
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const money = form.money.value;
        toast.success("Balance added Successfully!");
        console.log(number, money);
        dispatch(increment());
        form.reset();
    };

    // Credit card
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }
    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }
    // 
    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg', // or 'canvas', 'html'
            loop: true,
            autoplay: true,
            path: 'https://lottie.host/embed/bbf95265-ed9b-4f7f-a6eb-8095b6e103f8/jFaPcM9W4h.json' // your Lottie animation URL
        });
    }, []);

    return (
        <>
            <div className="py-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ">
                <div className="flex flex-col w-full gap-7">
                    <div className="bg-gradient-to-tl flex flex-col md:flex-row rounded-xl dark:bg-dark p-5 relative overflow-hidden">
                        <div className="flex flex-1 gap-4 sm:flex-wrap sm:gap-12 xl:gap-6 flex-col lg:flex-row">
                            <div className="flex-1 flex-col gap-3 justify-center items-center">
                                <span className="text-[32px] font-bold text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    Your Balance: $00
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
                                    <li className="mx-2">
                                        <img
                                            className="w-auto rounded-lg object-cover h-36"
                                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                                            alt="CardImage"
                                        />
                                        <div ref={container} className="w-auto rounded-lg object-cover h-36"></div>
                                    </li>
                                    <li className="pb-5 md:mb-0">
                                        <img
                                            className="w-auto object-cover mx-auto h-36"
                                            src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                                            alt="CardImage"
                                        />
                                        <div ref={container} className="w-auto rounded-lg object-cover h-36"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
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
                                                        type="number"
                                                        name="number"
                                                        placeholder="Card Number"
                                                        value={state.number}
                                                        onChange={handleInputChange}
                                                        onFocus={handleInputFocus}
                                                        className="block mx-auto px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"

                                                    />
                                                </div>
                                                <div className="my-3">
                                                    <input
                                                        type="number"
                                                        name="money"
                                                        className="block mx-auto px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 border-none focus:border-none"
                                                        placeholder="Money"
                                                        maxLength={22}
                                                    />
                                                </div>
                                                <footer className="px-4 pb-4 flex justify-center">
                                                    <button className="px-4 py-3 rounded-full bg-[#2195f3] text-white focus:ring focus:outline-none text-base font-semibold transition-colors">
                                                        Send Money
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