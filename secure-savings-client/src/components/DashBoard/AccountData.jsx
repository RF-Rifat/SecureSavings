import Lottie from "lottie-react";
import MasterCard from "../../../public/masterCard.json";
import { useContext } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { Button, Chip } from "@material-tailwind/react";
import { FcMoneyTransfer } from "react-icons/fc";

const AccountData = () => {
  const { LoggedUser, userAcc } = useContext(AdminDataContext);
  console.log(userAcc);

  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{
                      // backgroundImage:
                      //   'url("")',
                      backgroundColor: "#3399EE",
                    }}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 opacity-80" />
                    <div className="relative z-10 flex-auto p-4">
                      <i
                        className="p-2 text-white fas fa-wifi"
                        aria-hidden="true"
                      />
                      <h5 className="pb-2 mt-6 mb-12 text-white">
                        4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                      </h5>
                      <div className="flex">
                        <div className="flex">
                          <div className="mr-6">
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">
                              Card Holder
                            </p>
                            <h6 className="mb-0 text-white">
                              {LoggedUser[0]?.name}
                            </h6>
                          </div>
                          <div>
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">
                              Expires
                            </p>
                            <h6 className="mb-0 text-white">11/22</h6>
                          </div>
                        </div>
                        <div className="flex items-end justify-end w-1/5 ml-auto">
                          {/* <img
                            className="w-3/5 mt-2"
                            src="../assets/img/logos/mastercard.png"
                            alt="logo"
                          /> */}
                          <Lottie animationData={MasterCard} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none ">
                    <div className="relative flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border grid place-items-center">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div className="w-16 h-16 text-center grid place-items-center shadow-sm icon bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                          <i
                            className="relative text-xl leading-none text-white opacity-100 fas fa-landmark top-31/100"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">
                          Master Card
                        </h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                          Belong Interactive
                        </span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">$2000</h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div className="relative  flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl grid place-items-center dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl  border-b-transparent">
                        <div className="w-16 h-16 text-center bg-center shadow-sm icon  grid place-items-center bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                          <i
                            className="relative text-xl leading-none text-white opacity-100 fab fa-paypal top-31/100"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">
                          Paypal
                        </h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                          Freelance Payment
                        </span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">$455.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full px-3 mb-6 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div className="flex flex-wrap justify-between w-full">
                      <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                        <h6 className="mb-0 dark:text-white">Payment Method</h6>
                      </div>
                      <Button className="flex-none justify-items-end text-right">
                        <a
                        // className="inline-block font-bold leading-normal text-center text-white align-middle transition-all bg-transparent rounded-lg cursor-pointer text-sm ease-in shadow-md bg-150 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 hover:shadow-xs active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25"
                        >
                          {" "}
                          <i className="fas fa-plus" aria-hidden="true">
                            {" "}
                          </i>
                          &nbsp;&nbsp;Add New Card
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap -mx-3">
                      <div className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                          <img
                            className="mb-0 mr-4 w-1/10 h-10 w-16"
                            src="/image/masterCard.png"
                            alt="logo"
                          />
                          <h6 className="mb-0 dark:text-white">
                            ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                          </h6>
                          <i
                            className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                            data-target="tooltip_trigger"
                            data-placement="top"
                            aria-hidden="true"
                          />
                          <div
                            data-target="tooltip"
                            className="px-2 py-1 text-sm text-white bg-black rounded-lg hidden"
                            style={{
                              position: "absolute",
                              inset: "auto auto 0px 0px",
                              margin: 0,
                              transform: "translate3d(652.8px, -388px, 0px)",
                            }}
                            data-popper-placement="top"
                          >
                            Edit Card
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                              style={{
                                position: "absolute",
                                left: 0,
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                          <img
                            className="mb-0 mr-4 w-1/10 h-10 w-16"
                            src="/image/paypal.png"
                            alt="logo"
                          />
                          <h6 className="mb-0 dark:text-white">
                            ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                          </h6>
                          <i
                            className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                            data-target="tooltip_trigger"
                            data-placement="top"
                            aria-hidden="true"
                          />
                          <div
                            data-target="tooltip"
                            className="px-2 py-1 text-sm text-white bg-black rounded-lg hidden"
                            style={{
                              position: "absolute",
                              inset: "auto auto 0px 0px",
                              margin: 0,
                              transform: "translate3d(1049.6px, -345.6px, 0px)",
                            }}
                            data-popper-placement="top"
                          >
                            Edit Card
                            <div
                              className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                              data-popper-arrow=""
                              style={{
                                position: "absolute",
                                left: 0,
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="flex flex-wrap">
                  <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                    <h6 className="mb-0 dark:text-white">Invoices</h6>
                  </div>
                  <div className="flex-none w-1/2 max-w-full px-3 text-right">
                    <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">
                      View All
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pb-0">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        March, 01, 2020
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #MS-415646
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $180
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        February, 10, 2021
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #RV-126749
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $250
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        April, 05, 2020
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #FB-212562
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $560
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        June, 25, 2019
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #QW-103578
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $120
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">
                        March, 01, 2019
                      </h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">
                        #AR-803481
                      </span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $300
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700">
                        <i
                          className="mr-1 text-lg leading-none fas fa-file-pdf"
                          aria-hidden="true"
                        />{" "}
                        PDF
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full max-w-full px-3 mt-6 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 className="mb-0 dark:text-white">Billing Information</h6>
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
                          {LoggedUser[0]?.name}
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
                    <i
                      className="mr-2 far fa-calendar-alt"
                      aria-hidden="true"
                    />
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
      </div>
    </>
  );
};

export default AccountData;
