import { useContext } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";
import toast from "react-hot-toast";
import { MdOutlineBarChart } from "react-icons/md";
import { FcDataSheet } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import { FcLineChart } from "react-icons/fc";

const MyWallet = () => {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser } = authInfo;
  // , isAdmin

  // redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const idNumber = form.idNumber.value;
    const money = form.money.value;

    toast.success("Balance added Successfully!");

    console.log(idNumber, money);
    dispatch(increment());
    form.reset();
  };

  return (
    <>
      <div className="px-3 relative sm:px-4 xxxl:px-6 py-6 lg:py-8 duration-300 false false">
        <div className="false false">
          <div className="grid grid-cols-12 gap-4 xxl:gap-6">
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Income</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>

                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <MdOutlineBarChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$8500 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-primary">
                    <i className="las la-arrow-up text-lg" /> 35.7%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Spending</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcDataSheet className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$3500 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary1">
                    <i className="las la-arrow-up text-lg" /> 45.2%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Spending Goal</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcPieChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$9254 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary2">
                    <i className="las la-arrow-up text-lg" /> 25.7%
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6">
              <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
                <span className="font-medium">Total Transactions</span>
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                  >
                    <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                  <ul className="invisible opacity-0 scale-0 absolute top-full ltr:right-0 rtl:left-0 duration-300 ltr:origin-top-right rtl:origin-top-left shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[122px] bg-n0 z-[3] dark:bg-bg3 p-3 rounded-md">
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        className="py-1 leading-normal hover:bg-primary/10 dark:hover:bg-bg4 rounded  text-sm duration-300 block px-3"
                        href="#"
                      >
                        Share
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center gap-4 xl:gap-6">
                <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
                  <FcLineChart className="w-12 h-12" />
                </div>
                <div>
                  <h4 className="h4 mb-2 xxl:mb-4">$17000 USD</h4>
                  <span className="flex items-center gap-1 whitespace-nowrap text-secondary3">
                    <i className="las la-arrow-up text-lg" /> 50.7%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      alt=""
                    />
                  </li>
                  <li className="pb-5 md:mb-0">
                    <img
                      className="w-auto object-cover mx-auto h-36"
                      src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="mx-4">
                  <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl">
                    <header className="flex flex-col justify-center items-center">
                      <div className="relative">
                        <img
                          className="w-full h-auto"
                          src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                          alt="front credit card"
                        />
                      </div>
                    </header>
                    <form className="p-4" onSubmit={handleSubmit}>
                      {/* <div className="my-3">
                        <input
                          type="text"
                          name="idNumber"
                          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                          placeholder="Card Image"
                          maxLength={19}
                        />
                      </div> */}
                      <div className="my-3">
                        <input
                          type="text"
                          name="idNumber"
                          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                          placeholder="Card number"
                          maxLength={19}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="number"
                          name="money"
                          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                          placeholder="Money"
                          maxLength={22}
                        />
                      </div>
                      <footer className="px-4 pb-4">
                        <button className="submit-button px-4 py-3 rounded-full bg-[#2195f3] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
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
    </>
  );
};

export default MyWallet;
