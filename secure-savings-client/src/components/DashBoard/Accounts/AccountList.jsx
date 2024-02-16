/* eslint-disable react/prop-types */
import { FcMoneyTransfer } from "react-icons/fc";
import { Chip, Button } from "@material-tailwind/react";
const AccountList = ({ userAcc }) => {
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full px-3 mt-6 md:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <h6 className="mb-0 dark:text-white">Accounts Information</h6>
            </div>
            <div className="flex-auto p-4 pt-6">
              <ul className="grid lg:grid-cols-2 gap-3 pl-0 mb-0 rounded-lg">
                {userAcc?.map((item) => (
                  <li
                    key={item?._id}
                    className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-slate-850"
                  >
                    <div className="flex flex-col gap-2">
                      <h6 className="mb-4 text-sm leading-normal dark:text-white">
                        {item?.name}
                      </h6>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">
                        Account Id:{" "}
                        <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                          {item?.accountId}
                        </span>
                      </span>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">
                        Account Type:{" "}
                        <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                          {item?.accountType}
                        </span>
                      </span>
                      <span className="text-xs leading-tight dark:text-white/80">
                        Balance:{" "}
                        <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                          {item?.balance}
                        </span>
                      </span>
                      <span className="text-xs flex leading-tight dark:text-white/80">
                        Status :{" "}
                        <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                          {item?.status === "pending" ? (
                            <Chip
                              color="blue"
                              value="pending"
                              className="rounded-full"
                              size="sm"
                            />
                          ) : item?.status === "approved" ? (
                            <Chip
                              color="green"
                              value="Accepted"
                              className="rounded-full"
                              size="sm"
                            />
                          ) : (
                            <Chip
                              color="red"
                              value="declined"
                              className="rounded-full"
                              size="sm"
                            />
                          )}
                        </span>
                      </span>
                    </div>
                    <div className="ml-auto text-right grid place-items-center">
                      <div className="text-sm">
                        Date:
                        {new Date(item?.createdAt).toLocaleString("en-US", {
                          timeZone: "Asia/Dhaka",
                        })}
                      </div>
                      <Button
                        variant="outlined"
                        className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text"
                      >
                        <FcMoneyTransfer
                          className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 text-orange-600 bg-x-25 bg-clip-text "
                          aria-hidden="true"
                        />
                        Withdraw
                      </Button>
                      <Button
                        variant="outlined"
                        className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700"
                      >
                        <i
                          className="mr-2 fas fa-pencil-alt text-slate-700"
                          aria-hidden="true"
                        />
                        Edit
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
          <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <div className="flex flex-wrap -mx-3">
                <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                  <h6 className="mb-0 dark:text-white">Your Transactions</h6>
                </div>
                <div className="flex items-center justify-end max-w-full px-3 dark:text-white/80 md:w-1/2 md:flex-none">
                  <i className="mr-2 far fa-calendar-alt" aria-hidden="true" />
                  <small>23 - 30 March 2020</small>
                </div>
              </div>
            </div>
            <div className="flex-auto p-4 pt-6">
              <h6 className="mb-4 text-xs font-bold leading-tight uppercase dark:text-white text-slate-500">
                Newest
              </h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                      <i
                        className="fas fa-arrow-down text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        Netflix
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        27 March 2020, at 12:30 PM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">
                      - $ 2,500
                    </p>
                  </div>
                </li>
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                      <i
                        className="fas fa-arrow-up text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        Apple
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        27 March 2020, at 04:30 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                      + $ 2,000
                    </p>
                  </div>
                </li>
              </ul>
              <h6 className="my-4 text-xs font-bold leading-tight uppercase dark:text-white text-slate-500">
                Yesterday
              </h6>
              <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                      <i
                        className="fas fa-arrow-up text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        Stripe
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        26 March 2020, at 13:45 PM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                      + $ 750
                    </p>
                  </div>
                </li>
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                      <i
                        className="fas fa-arrow-up text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        HubSpot
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        26 March 2020, at 12:30 PM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                      + $ 1,000
                    </p>
                  </div>
                </li>
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75">
                      <i
                        className="fas fa-arrow-up text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        Creative Tim
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        26 March 2020, at 08:30 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="relative z-10 items-center inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">
                      + $ 2,500
                    </p>
                  </div>
                </li>
                <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                  <div className="flex items-center">
                    <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                      <i
                        className="fas fa-exclamation text-3xs"
                        aria-hidden="true"
                      />
                    </button>
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">
                        Webflow
                      </h6>
                      <span className="text-xs leading-tight dark:text-white/80">
                        26 March 2020, at 05:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="flex items-center m-0 text-sm font-semibold leading-normal text-slate-700">
                      Pending
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AccountList;
