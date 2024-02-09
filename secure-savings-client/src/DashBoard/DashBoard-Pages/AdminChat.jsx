import { Input } from "@material-tailwind/react";

const AdminChat = () => {
  return (
    <section className="lg:grid grid-cols-12 relative">
      <aside className="h-full 2xl:col-span-3 xl:col-span-4 lg:col-span-5 bg-white dark:bg-darkblack-600 border border-bgray-200 dark:border-darkblack-400 pr-7 pl-12 pt-6 pb-10 hidden lg:block">
        <header>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-semibold text-bgray-900 dark:text-white">
              Messages (22)
            </h3>
            <button aria-label="none">
              <svg
                className="stroke-darkblack-400 dark:stroke-bgray-50"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12.7508V18.7411C22 20.9466 20.2091 22.7346 18 22.7346H6C3.79086 22.7346 2 20.9466 2 18.7411V6.76059C2 4.55504 3.79086 2.76709 6 2.76709H12M15.6864 4.78655C15.6864 4.78655 15.6864 6.21452 17.1167 7.64249C18.547 9.07046 19.9773 9.07046 19.9773 9.07046M9.15467 16.7339L12.1583 16.3055C12.5916 16.2437 12.9931 16.0433 13.3025 15.7343L21.4076 7.64249C22.1975 6.85384 22.1975 5.57519 21.4076 4.78655L19.9773 3.35857C19.1873 2.56993 17.9066 2.56993 17.1167 3.35857L9.01164 11.4504C8.70217 11.7594 8.50142 12.1602 8.43952 12.5928L8.01044 15.5915C7.91508 16.2579 8.4872 16.8291 9.15467 16.7339Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-3">
              <svg
                className="fill-bgray-900 dark:fill-bgray-50"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.75 11.5C2.75 16.3325 6.66751 20.25 11.5 20.25C16.3325 20.25 20.25 16.3325 20.25 11.5C20.25 6.66751 16.3325 2.75 11.5 2.75C6.66751 2.75 2.75 6.66751 2.75 11.5ZM11.5 21.75C5.83908 21.75 1.25 17.1609 1.25 11.5C1.25 5.83908 5.83908 1.25 11.5 1.25C17.1609 1.25 21.75 5.83908 21.75 11.5C21.75 14.0605 20.8111 16.4017 19.2589 18.1982L22.5303 21.4697C22.8232 21.7626 22.8232 22.2374 22.5303 22.5303C22.2374 22.8232 21.7626 22.8232 21.4697 22.5303L18.1982 19.2589C16.4017 20.8111 14.0605 21.75 11.5 21.75Z"
                />
              </svg>
            </span>
            <Input
              type="text"
              className=" w-full dark:placeholder:text-white dark:text-white bg-bgray-100 dark:bg-darkblack-500 border-0 focus:border focus:border-success-300 focus:ring-0 rounded-lg py-3.5 pl-12"
              placeholder="Search Message"
            />
          </div>
        </header>
        <div className="pt-6">
          <div>
            <ul className="pt-2 divide-y divide-bgray-300 dark:divide-darkblack-400">
              <li className="p-3.5 flex justify-between hover:bg-bgray-100 hover:dark:bg-darkblack-500 hover:rounded-lg transition-all cursor-pointer">
                <div className="flex space-x-3 grow">
                  <div className="w-14 h-14 relative">
                    <img src="/assets/u-1-b5f0d6cb.png" alt="" />
                    <span className="bg-gray-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-bgray-900 dark:text-white">
                      Emilia Sam
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2"></div>
              </li>
              <li className="p-3.5 flex justify-between hover:bg-bgray-100 hover:dark:bg-darkblack-500 hover:rounded-lg transition-all cursor-pointer">
                <div className="flex space-x-3 grow">
                  <div className="w-14 h-14 relative">
                    <img src="/assets/u-2-66f5f569.png" alt="" />
                    <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-bgray-900 dark:text-white">
                      Eleanor Pena
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2"></div>
              </li>
            </ul>
          </div>
         
        </div>
      </aside>
      <div className="w-full bg-white dark:bg-darkblack-600 p-2 overflow-x-scroll flex lg:hidden">
        <div className="flex space-x-5">
          <div className="w-14 h-14 relative">
            <img src="/assets/u-4-3b0f0cb1.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img src="/assets/u-5-ce4a5f50.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img src="/assets/u-6-15dafc1a.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <span className="bg-gray-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img src="/assets/u-8-a1880bc7.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img src="/assets/u-9-aa3c0654.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
        </div>
      </div>
      <div className="2xl:col-span-9 xl:col-span-8 dark:bg-darkblack-500 lg:col-span-7 col-span-12 relative">
        <header className="bg-white dark:bg-darkblack-600 p-5 lg:pr-24 flex justify-between items-center border-t border-bgray-300 dark:border-darkblack-400">
          <div className="flex space-x-3">
            <div className="relative">
              <img
                src="data:image/png;base64,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"
                className="w-12 h-12 rounded-full"
                alt=""
              />
              <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
            </div>
            <div>
              <h4 className="text-base font-bold text-bgray-900 dark:text-white">
                Ajoy Sarkar
              </h4>
              <span className="text-sm text-bgray-600">Online</span>
            </div>
          </div>
          <button
            aria-label="none"
            type="button"
            className="dark:bg-darkblack-500 w-12 h-12 rounded-full grid place-items-center"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke="#A0AEC0"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                stroke="#A0AEC0"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                stroke="#A0AEC0"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>
        <div className="lg:pt-20 dark:bg-darkblack-500 lg:px-11 p-5 mb-5 lg:mb-0 space-y-10">
          <div className="flex justify-start items-end space-x-3">
            <div className="flex space-x-3">
              <div>
                <img
                  src="data:image/png;base64,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"
                  className="shrink-0"
                  alt=""
                />
              </div>
              <div className="p-3 bg-bgray-200 dark:bg-darkblack-600  dark:text-bgray-50 rounded-r-lg rounded-b-lg text-bgray-900 text-sm font-medium">
                Hi! I had about question about my last transtion
              </div>
            </div>
            <div>
              <span className="text-xs text-bgray-500 font-medium">
                09:30 AM
              </span>
            </div>
          </div>
          <div className="flex justify-end items-end space-x-3 ">
            <div>
              <span className="text-xs text-bgray-500 font-medium">
                10:00 pM
              </span>
            </div>
            <div className="flex space-x-3">
              <div className="p-3 bg-success-300 rounded-r-lg rounded-b-lg text-white text-sm font-medium max-w-sm">
                Hi, how can I help you with?
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  className="shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-end space-x-3">
            <div className="flex space-x-3">
              <div>
                <img
                  src="data:image/png;base64,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"
                  className="shrink-0"
                  alt=""
                />
              </div>
              <div className="p-3 bg-bgray-200 dark:bg-darkblack-600  dark:text-bgray-50 rounded-r-lg rounded-b-lg text-bgray-900 text-sm font-medium">
                {" "}
                HIs this possible to refund?
              </div>
            </div>
            <div>
              <span className="text-xs text-bgray-500 font-medium">
                09:30 AM
              </span>
            </div>
          </div>
          <div className="flex justify-end items-end space-x-3 ">
            <div>
              <span className="text-xs text-bgray-500 font-medium">
                10:00 pM
              </span>
            </div>
            <div className="flex space-x-3">
              <div className="p-3 bg-success-300 rounded-r-lg rounded-b-lg text-white text-sm font-medium max-w-sm">
                {" "}
                Of course, it is available in 38 and several other sizes which
                are very complete
              </div>
              <div>
                <img
                  src="data:image/png;base64,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"
                  className="shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-end space-x-3">
            <div className="flex space-x-3">
              <div>
                <img
                  src="data:image/png;base64,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"
                  className="shrink-0"
                  alt=""
                />
              </div>
              <div className="p-3 text-bgray-500 text-sm font-normal">
                <span className="font-semibold text-bgray-900 dark:text-bgray-50">
                  Eleanor Pena{" "}
                </span>
                is typing...
              </div>
            </div>
            <div>
              <span className="text-xs text-bgray-500 font-medium">
                10:15 AM
              </span>
            </div>
          </div>
        </div>
        <div className="lg:absolute bottom-10 lg:px-11 px-5 lg:mb-0 mb-5 w-full">
          <div>
            <div className="quill custom-quill-2 w-full relative">
              <div className="ql-toolbar ql-snow">
                <span className="ql-formats">
                  <button type="button" className="ql-bold">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <path
                        className="ql-stroke"
                        d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                      />{" "}
                      <path
                        className="ql-stroke"
                        d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                      />{" "}
                    </svg>
                  </button>
                  <button type="button" className="ql-italic">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <line
                        className="ql-stroke"
                        x1={7}
                        x2={13}
                        y1={4}
                        y2={4}
                      />{" "}
                      <line
                        className="ql-stroke"
                        x1={5}
                        x2={11}
                        y1={14}
                        y2={14}
                      />{" "}
                      <line
                        className="ql-stroke"
                        x1={8}
                        x2={10}
                        y1={14}
                        y2={4}
                      />{" "}
                    </svg>
                  </button>
                  <button type="button" className="ql-underline">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <path
                        className="ql-stroke"
                        d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                      />{" "}
                      <rect
                        className="ql-fill"
                        height={1}
                        rx="0.5"
                        ry="0.5"
                        width={12}
                        x={3}
                        y={15}
                      />{" "}
                    </svg>
                  </button>
                </span>
                <span className="ql-formats">
                  <button type="button" className="ql-image">
                    <svg viewBox="0 0 18 18">
                      {" "}
                      <rect
                        className="ql-stroke"
                        height={10}
                        width={12}
                        x={3}
                        y={4}
                      />{" "}
                      <circle className="ql-fill" cx={6} cy={7} r={1} />{" "}
                      <polyline
                        className="ql-even ql-fill"
                        points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                      />{" "}
                    </svg>
                  </button>
                </span>
              </div>
              <div className="ql-container ql-snow">
                <div
                  className="ql-editor ql-blank"
                  data-gramm="false"
                  contentEditable="true"
                >
                  <p>
                    <br />
                  </p>
                </div>
                <div
                  className="ql-clipboard"
                  contentEditable="true"
                  tabIndex={-1}
                />
                <div className="ql-tooltip ql-hidden">
                  <a
                    className="ql-preview"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="about:blank"
                  />
                  <Input
                    type="text"
                  />
                  <a className="ql-action" />
                  <a className="ql-remove" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              aria-label="none"
              name="button"
              className="bg-success-400 rounded-lg flex items-center justify-center px-4 py-2.5 font-semibold text-sm gap-1.5 text-white"
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0586 7.09154L7.92522 3.52487C3.13355 1.12487 1.16689 3.09153 3.56689 7.8832L4.29189 9.3332C4.50022 9.7582 4.50022 10.2499 4.29189 10.6749L3.56689 12.1165C1.16689 16.9082 3.12522 18.8749 7.92522 16.4749L15.0586 12.9082C18.2586 11.3082 18.2586 8.69153 15.0586 7.09154ZM12.3669 10.6249H7.86689C7.52522 10.6249 7.24189 10.3415 7.24189 9.99987C7.24189 9.6582 7.52522 9.37487 7.86689 9.37487H12.3669C12.7086 9.37487 12.9919 9.6582 12.9919 9.99987C12.9919 10.3415 12.7086 10.6249 12.3669 10.6249Z"
                  fill="white"
                />
              </svg>
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="profile-settings"
        className="col-span-3 h-full py-8 px-12 bg-white dark:bg-darkblack-600 border border-bgray-300 absolute right-0 top-0 dark:border-darkblack-400 hidden"
      >
        <header className="pb-8 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex justify-between">
            <h3 className="text-bgray-900 dark:text-white font-bold text-2xl">
              User Info
            </h3>
            <button
              aria-label="none"
              type="button"
              className="text-bgray-400 hover:text-red-500"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M16.9497 7.05029L7.05021 16.9498"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.05029 7.05029L16.9498 16.9498"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mt-6">
            <img
              src="/assets/u-lg-2f80628c.png"
              className="bg-[#EFF6FF] p-2 rounded-full mb-4"
              alt=""
            />
            <h4 className="font-bold text-xl text-bgray-900 dark:text-white mb-2">
              Ajoy Sarker
            </h4>
            <span className="font-medium text-sm text-bgray-500 dark:text-bgray-50">
              UX Researcher
            </span>
            <div className="bg-bgray-50 dark:bg-darkblack-500 rounded-xl flex space-x-2 items-center p-3 mt-4">
              <span className="bg-success-300 w-2 h-2 block rounded-full" />
              <span className="font-medium text-sm text-bgray-900 dark:text-white">
                Quomodosoft Team
              </span>
            </div>
          </div>
        </header>
        <div className="py-6">
          <h4 className="font-bold text-base dark:text-white">Shared Files</h4>
          <ul className="pt-4 space-y-3">
            <li className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H10L15 6V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 7H6"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11H11"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 15H11"
                      stroke="#22C55E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base font-semibold dark:text-white">
                    Reference.zip
                  </h5>
                  <span className="text-sm text-bgray-500 dark:text-bgray-50">
                    2 MB
                  </span>
                </div>
              </div>
              <div>
                <button
                  aria-label="none"
                  type="button"
                  className="text-bgray-500 hover:text-red-500"
                >
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <g clipPath="url(#clip0_1568_17087)">
                      <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                      <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                      <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                      <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_17087">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1V5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6H15"
                      stroke="#436CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H10L15 6V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19Z"
                      stroke="#436CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 7H6"
                      stroke="#436CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 11H11"
                      stroke="#436CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 15H11"
                      stroke="#436CFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base font-semibold dark:text-white">
                    Doc0001.docx
                  </h5>
                  <span className="text-sm text-bgray-500 dark:text-bgray-50">
                    1,025 KB
                  </span>
                </div>
              </div>
              <div>
                <button
                  aria-label="none"
                  type="button"
                  className="text-bgray-500 hover:text-red-500"
                >
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <g clipPath="url(#clip0_1568_17087)">
                      <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                      <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                      <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                      <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_17087">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"
                      stroke="#FF4747"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"
                      stroke="#FF4747"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 9H10"
                      stroke="#FF4747"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13H15"
                      stroke="#FF4747"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 17H15"
                      stroke="#FF4747"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base font-semibold dark:text-white">
                    Filex.pdf
                  </h5>
                  <span className="text-sm text-bgray-500 dark:text-bgray-50">
                    2,25 KB
                  </span>
                </div>
              </div>
              <div>
                <button
                  aria-label="none"
                  type="button"
                  className="text-bgray-500 hover:text-red-500"
                >
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <g clipPath="url(#clip0_1568_17087)">
                      <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                      <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                      <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                      <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_17087">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h4 className="font-bold text-base dark:text-white">Shared Links</h4>
          <ul className="pt-4 space-y-3">
            <li className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                  <svg
                    className="stroke-bgray-900 dark:stroke-bgray-50"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 13.9999C10.3259 14.3325 10.7148 14.5967 11.1441 14.7771C11.5734 14.9575 12.0344 15.0504 12.5 15.0504C12.9656 15.0504 13.4266 14.9575 13.8559 14.7771C14.2852 14.5967 14.6741 14.3325 15 13.9999L19 9.99989C19.663 9.33685 20.0355 8.43757 20.0355 7.49989C20.0355 6.56221 19.663 5.66293 19 4.99989C18.337 4.33685 17.4377 3.96436 16.5 3.96436C15.5623 3.96436 14.663 4.33685 14 4.99989L13.5 5.49989"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9999 9.99973C13.674 9.66713 13.285 9.4029 12.8558 9.22252C12.4265 9.04213 11.9655 8.94922 11.4999 8.94922C11.0343 8.94922 10.5733 9.04213 10.144 9.22252C9.71474 9.4029 9.32577 9.66713 8.99989 9.99973L4.99989 13.9997C4.33685 14.6628 3.96436 15.562 3.96436 16.4997C3.96436 17.4374 4.33685 18.3367 4.99989 18.9997C5.66293 19.6628 6.56221 20.0353 7.49989 20.0353C8.43757 20.0353 9.33685 19.6628 9.99989 18.9997L10.4999 18.4997"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base font-semibold dark:text-white">
                    muz.li
                  </h5>
                  <span className="text-sm text-bgray-500 dark:text-bgray-50">
                    https://muz.li.com
                  </span>
                </div>
              </div>
              <div>
                <button
                  aria-label="none"
                  type="button"
                  className="text-bgray-500 hover:text-red-500"
                >
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <g clipPath="url(#clip0_1568_17087)">
                      <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                      <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                      <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                      <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_17087">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="flex space-x-3">
                <div className="bg-bgray-50 dark:bg-darkblack-500 w-10 h-10 rounded-lg flex justify-center items-center">
                  <svg
                    className="stroke-bgray-900 dark:stroke-bgray-50"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 13.9999C10.3259 14.3325 10.7148 14.5967 11.1441 14.7771C11.5734 14.9575 12.0344 15.0504 12.5 15.0504C12.9656 15.0504 13.4266 14.9575 13.8559 14.7771C14.2852 14.5967 14.6741 14.3325 15 13.9999L19 9.99989C19.663 9.33685 20.0355 8.43757 20.0355 7.49989C20.0355 6.56221 19.663 5.66293 19 4.99989C18.337 4.33685 17.4377 3.96436 16.5 3.96436C15.5623 3.96436 14.663 4.33685 14 4.99989L13.5 5.49989"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9999 9.99973C13.674 9.66713 13.285 9.4029 12.8558 9.22252C12.4265 9.04213 11.9655 8.94922 11.4999 8.94922C11.0343 8.94922 10.5733 9.04213 10.144 9.22252C9.71474 9.4029 9.32577 9.66713 8.99989 9.99973L4.99989 13.9997C4.33685 14.6628 3.96436 15.562 3.96436 16.4997C3.96436 17.4374 4.33685 18.3367 4.99989 18.9997C5.66293 19.6628 6.56221 20.0353 7.49989 20.0353C8.43757 20.0353 9.33685 19.6628 9.99989 18.9997L10.4999 18.4997"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="text-base font-semibold dark:text-white">
                    Dribbble
                  </h5>
                  <span className="text-sm text-bgray-500">
                    https://dribbble.com/rf...
                  </span>
                </div>
              </div>
              <div>
                <button
                  aria-label="none"
                  type="button"
                  className="text-bgray-500 hover:text-red-500"
                >
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <g clipPath="url(#clip0_1568_17087)">
                      <path d="M12.7589 7.74609C12.5002 7.74609 12.2905 7.95577 12.2905 8.21448V17.0669C12.2905 17.3254 12.5002 17.5353 12.7589 17.5353C13.0176 17.5353 13.2273 17.3254 13.2273 17.0669V8.21448C13.2273 7.95577 13.0176 7.74609 12.7589 7.74609Z" />
                      <path d="M7.23157 7.74609C6.97286 7.74609 6.76318 7.95577 6.76318 8.21448V17.0669C6.76318 17.3254 6.97286 17.5353 7.23157 17.5353C7.49027 17.5353 7.69995 17.3254 7.69995 17.0669V8.21448C7.69995 7.95577 7.49027 7.74609 7.23157 7.74609Z" />
                      <path d="M3.20382 6.45419V17.9942C3.20382 18.6762 3.45393 19.3168 3.89084 19.7764C4.32574 20.2373 4.93098 20.4989 5.56439 20.5H14.4263C15.0599 20.4989 15.6652 20.2373 16.0999 19.7764C16.5368 19.3168 16.7869 18.6762 16.7869 17.9942V6.45419C17.6554 6.22366 18.2182 5.3846 18.102 4.49339C17.9857 3.60236 17.2266 2.93583 16.3279 2.93565H13.9298V2.35017C13.9325 1.85782 13.7379 1.38505 13.3893 1.03724C13.0408 0.68961 12.5673 0.496036 12.0749 0.500062H7.91582C7.42347 0.496036 6.94996 0.68961 6.60142 1.03724C6.25288 1.38505 6.05821 1.85782 6.06095 2.35017V2.93565H3.66287C2.76416 2.93583 2.00505 3.60236 1.88869 4.49339C1.77251 5.3846 2.3353 6.22366 3.20382 6.45419ZM14.4263 19.5632H5.56439C4.76357 19.5632 4.14058 18.8753 4.14058 17.9942V6.49536H15.8501V17.9942C15.8501 18.8753 15.2272 19.5632 14.4263 19.5632ZM6.99772 2.35017C6.99461 2.10628 7.09048 1.87154 7.26356 1.69938C7.43646 1.52721 7.67175 1.43262 7.91582 1.43683H12.0749C12.319 1.43262 12.5543 1.52721 12.7272 1.69938C12.9003 1.87136 12.9961 2.10628 12.993 2.35017V2.93565H6.99772V2.35017ZM3.66287 3.87242H16.3279C16.7935 3.87242 17.171 4.24987 17.171 4.71551C17.171 5.18114 16.7935 5.55859 16.3279 5.55859H3.66287C3.19723 5.55859 2.81978 5.18114 2.81978 4.71551C2.81978 4.24987 3.19723 3.87242 3.66287 3.87242Z" />
                      <path d="M9.99524 7.74609C9.73653 7.74609 9.52686 7.95577 9.52686 8.21448V17.0669C9.52686 17.3254 9.73653 17.5353 9.99524 17.5353C10.2539 17.5353 10.4636 17.3254 10.4636 17.0669V8.21448C10.4636 7.95577 10.2539 7.74609 9.99524 7.74609Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1568_17087">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-bgray-100 dark:bg-darkblack-500 p-6 mt-4 rounded-lg">
          <div className="flex space-x-6 items-center">
            <div className="progess-bar flex justify-center mb-[13px]">
              <div className="bonus-per relative">
                <div className="bonus-outer">
                  <div className="bonus-inner">
                    <div className="number">
                      <span className="text-sm font-medium text-bgray-900">
                        26%
                      </span>
                    </div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80px"
                  height="80px"
                >
                  <circle
                    cx={40}
                    cy={40}
                    r={35}
                    strokeLinecap="round"
                    style={{ strokeDashoffset: "calc(159.1)" }}
                  />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-bgray-900 text-base dark:text-white font-bold">
                Complete profile
              </h4>
              <span className="text-sm font-medium dark:text-bgray-50 text-bgray-700">
                Complete your profile to unlock all features
              </span>
            </div>
          </div>
          <button
            aria-label="none"
            name="button"
            className="w-full mt-4 bg-success-300 hover:bg-success-400 text-white font-bold text-xs py-3 rounded-lg"
          >
            Verify identify
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminChat;
