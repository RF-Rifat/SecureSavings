const MyWallet = () => {
  return (
    <>
      {/* user credit details */}

      <div className="py-7 px-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ">
        <div className="flex flex-col w-full gap-7">
          <div className="bg-gradient-to-tl to-[#7851BD] from-[#4E4BCF] rounded-xl p-5 relative overflow-hidden">
            <svg
              width={581}
              height={239}
              viewBox="0 0 581 239"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-14 -right-[27rem] sm:-right-64 lg:-top-28"
            >
              <path
                d="M527.607 1.7273C580.879 -33.0372 543.535 -81.6071 518.204 -101.546C439.881 -162.473 430.701 -91.4797 317.582 -143.722C204.463 -195.965 227.141 -159.2 83.8863 17.2559C-59.3679 193.712 128.456 191.653 151.46 157.066C174.465 122.48 215.973 138.631 267.533 191.898C319.093 245.165 448.712 151.23 426.229 94.617C403.746 38.0046 461.017 45.183 527.607 1.7273Z"
                stroke="white"
                strokeOpacity="0.13"
              />
              <path
                d="M504.037 3.63866C552.037 -27.7193 518.379 -71.544 495.551 -89.5367C424.965 -144.515 416.703 -80.4656 314.764 -127.614C212.825 -174.762 233.264 -141.589 104.2 17.5917C-24.8647 176.773 144.384 174.939 165.109 143.738C185.834 112.537 223.239 127.114 269.707 175.178C316.175 223.243 432.963 138.51 412.696 87.4313C392.43 36.3523 444.038 42.836 504.037 3.63866Z"
                stroke="white"
                strokeOpacity="0.13"
              />
              <path
                d="M485.755 5.0211C529.659 -23.6299 498.882 -63.6584 478.006 -80.0913C413.456 -130.304 405.891 -71.7948 312.664 -114.85C219.438 -157.906 238.127 -127.606 120.065 17.8189C2.00333 163.244 156.797 161.547 175.756 133.043C194.715 104.539 228.924 117.849 271.416 161.749C313.909 205.649 420.734 128.232 402.205 81.5755C383.675 34.9188 430.875 40.8348 485.755 5.0211Z"
                stroke="white"
                strokeOpacity="0.13"
              />
              <path
                d="M468.499 6.88949C508.518 -19.2443 480.459 -55.7637 461.428 -70.7567C402.583 -116.569 395.692 -63.1941 310.707 -102.48C225.722 -141.766 242.761 -114.123 135.153 18.5341C27.5446 151.191 168.648 149.656 185.928 123.654C203.208 97.6522 234.392 109.798 273.13 149.85C311.868 189.902 409.239 119.286 392.344 76.721C375.45 34.1558 418.476 39.5567 468.499 6.88949Z"
                stroke="white"
                strokeOpacity="0.13"
              />
              <path
                d="M449.738 8.32684C485.547 -15.0868 460.432 -47.8173 443.399 -61.2558C390.732 -102.319 384.573 -54.4882 308.515 -89.7062C232.456 -124.924 247.709 -100.15 151.43 18.7138C55.1508 137.577 181.423 136.222 196.883 112.923C212.343 89.6242 240.251 100.513 274.924 136.411C309.596 172.309 396.722 109.041 381.597 70.8944C366.473 32.7477 404.977 37.5939 449.738 8.32684Z"
                stroke="white"
                strokeOpacity="0.13"
              />
              <path
                d="M430.012 9.82216C461.401 -10.6816 439.392 -39.336 424.464 -51.1002C378.306 -87.047 372.903 -45.1683 306.242 -75.9951C239.581 -106.822 252.947 -85.1321 168.546 18.9493C84.1452 123.031 194.822 121.83 208.375 101.429C221.928 81.0282 246.389 90.5588 276.775 121.985C307.161 153.412 383.533 98.0083 370.281 64.6106C357.028 31.213 390.777 35.4519 430.012 9.82216Z"
                stroke="white"
                strokeOpacity="0.13"
              />
            </svg>
            <div className="flex gap-4 sm:flex-wrap ssm:gap-12 xl:gap-6 flex-col xl:flex-row xl:justify-between xl:items-end lg:h-fit">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-semibold text-[#FDFDFF]">
                  Your Balance
                </span>
                <div className="flex gap-1 items-center">
                  <span className="font-medium text-sm text-white/80">
                    jkjnkjojfowvpoweut6187189784
                  </span>
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.90625 9.375H2.65625C2.53193 9.375 2.4127 9.32561 2.32479 9.23771C2.23689 9.1498 2.1875 9.03057 2.1875 8.90625V2.5C2.1875 2.41712 2.22042 2.33763 2.27903 2.27903C2.33763 2.22042 2.41712 2.1875 2.5 2.1875H8.90625C9.03057 2.1875 9.1498 2.23689 9.23771 2.32479C9.32561 2.4127 9.375 2.53193 9.375 2.65625V8.90625C9.375 9.03057 9.32561 9.1498 9.23771 9.23771C9.1498 9.32561 9.03057 9.375 8.90625 9.375Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M2.1875 1.5625H7.8125V1.09375C7.8125 0.96943 7.76311 0.850201 7.67521 0.762294C7.5873 0.674386 7.46807 0.625 7.34375 0.625H1.17188C1.02683 0.625 0.887735 0.682617 0.785176 0.785176C0.682617 0.887735 0.625 1.02683 0.625 1.17188V7.34375C0.625 7.46807 0.674386 7.5873 0.762294 7.67521C0.850201 7.76311 0.96943 7.8125 1.09375 7.8125H1.5625V2.1875C1.5625 2.02174 1.62835 1.86277 1.74556 1.74556C1.86277 1.62835 2.02174 1.5625 2.1875 1.5625Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                </div>
                <span className="text-[22px] font-bold text-[#FDFDFF]">
                  $31,300.40
                </span>
                <span className="text-sm font-medium text-[#FDFDFF] tracking-[1.4px]">
                  28.6165489 BTC
                </span>
              </div>
              <div className="flex gap-7 sm:flex-row h-full sm:justify-start self-start ssm:self-auto z-10">
                <div className="flex flex-col gap-3 h-fit">
                  <div className="flex flex-col pl-1">
                    <span className="text-sm font-semibold text-white/80 tracking-[1.5px]">
                      Income
                    </span>
                    <span className="text-lg font-semibold text-[#FDFDFF]">
                      $459.20
                    </span>
                  </div>
                  <button className="py-2.5 rounded-[10px] font-semibold text-white text-center bg-[#f9f9f94d] min-w-[150px] text-lg hover:scale-105">
                    Receive
                  </button>
                </div>
                <div className="flex flex-col gap-3 h-fit">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white/80 tracking-[1.5px]">
                      Income
                    </span>
                    <span className="text-lg font-semibold text-[#FDFDFF]">
                      $250.40
                    </span>
                  </div>
                  <button className="py-2.5 rounded-[10px] font-semibold text-white text-center bg-[#f9f9f94d] min-w-[150px] text-lg hover:scale-105">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" block md:hidden">
            <div className="flex flex-col gap-3.5 w-ful justify-between h-full">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-[#212B36]">
                  Assets
                </span>
                <span className="text-sm font-medium text-[#637381] cursor-pointer hover:text-[#7851BD] mr-2">
                  View All
                </span>
              </div>
              <div className="overflow-hidden overflow-x-auto flex gap-5 pb-2 scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin">
                <div className="py-5 px-3.5 flex gap-3.5 flex-col min-w-[183px] rounded-lg bg-white border border-[#7851bd33]">
                  <div className="flex gap-2.5 items-center">
                    <img src="/assets/admin/analytics-dashboard/btc.png" />
                    <span className="text-lg font-medium tracking-[1.8px] text-[#637381] uppercase">
                      btc
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-[#212B36] tracking-[1.8px]">
                    $224,300.40
                  </span>
                  <span className="text-sm font-medium text-[#DA1818] ">
                    7.2526
                  </span>
                </div>
                <div className="py-5 px-3.5 flex gap-3.5 flex-col min-w-[183px] rounded-lg bg-white border border-[#7851bd33]">
                  <div className="flex gap-2.5 items-center">
                    <img src="/assets/admin/analytics-dashboard/ust.png" />
                    <span className="text-lg font-medium tracking-[1.8px] text-[#637381] uppercase">
                      ust
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-[#212B36] tracking-[1.8px]">
                    $224,300.40
                  </span>
                  <span className="text-sm font-medium text-[#32A953] ">
                    7.2526
                  </span>
                </div>
                <div className="py-5 px-3.5 flex gap-3.5 flex-col min-w-[183px] rounded-lg bg-white border border-[#7851bd33]">
                  <div className="flex gap-2.5 items-center">
                    <img src="/assets/admin/analytics-dashboard/eth.png" />
                    <span className="text-lg font-medium tracking-[1.8px] text-[#637381] uppercase">
                      eth
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-[#212B36] tracking-[1.8px]">
                    $224,300.40
                  </span>
                  <span className="text-sm font-medium text-[#32A953] ">
                    7.2526
                  </span>
                </div>
                <div className="py-5 px-3.5 flex gap-3.5 flex-col min-w-[183px] rounded-lg bg-white border border-[#7851bd33]">
                  <div className="flex gap-2.5 items-center">
                    <img src="/assets/admin/analytics-dashboard/car.png" />
                    <span className="text-lg font-medium tracking-[1.8px] text-[#637381] uppercase">
                      car
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-[#212B36] tracking-[1.8px]">
                    $224,300.40
                  </span>
                  <span className="text-sm font-medium text-[#DA1818] ">
                    7.2526
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFF] rounded-md ">
            <div className="p-5 flex flex-col overflow-hidden overflow-x-auto gap-5 scrollbar-thin !scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] rounded-xl">
              <span className="text-[#212B36] text-lg font-semibold">
                Payment list
              </span>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-5 border border-[#7851bd33] p-5 rounded-xl w-full sm:max-w-xs">
                  <div className="flex justify-between w-full sm:min-w-[200px] items-center">
                    <span className="text-sm font-medium text-[#212B36] !capitalize">
                      Bitcoin
                    </span>
                    <img
                      src="/logo.png"
                      alt="dots"
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/admin/analytics-dashboard/graph1.svg"
                      alt="graph"
                      className="object-fill w-full"
                    />
                  </div>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex gap-2.5">
                      <img
                        src="/assets/admin/analytics-dashboard/btclist.svg"
                        alt="crypto image"
                        className="h-9 w-9"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#212B36]">
                          0.223245 BTC
                        </span>
                        <span className="text-xs font-medium text-[#637381]">
                          11,032,37 USD
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                      <img
                        src="/assets/admin/analytics-dashboard/uparrow.svg"
                        alt="arrow"
                        className="h-2.5 w-2.5"
                      />
                      <span className="font-inter text-xs font-medium text-[#45CB85]">
                        +12.05
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 border border-[#7851bd33] p-5 rounded-xl w-full sm:max-w-xs">
                  <div className="flex justify-between w-full sm:min-w-[200px] items-center">
                    <span className="text-sm font-medium text-[#212B36] !capitalize">
                      Ethereum
                    </span>
                    <img
                      src="/logo.png"
                      alt="dots"
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/admin/analytics-dashboard/graph2.svg"
                      alt="graph"
                      className="object-fill w-full"
                    />
                  </div>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex gap-2.5">
                      <img
                        src="/assets/admin/analytics-dashboard/etclist.svg"
                        alt="crypto image"
                        className="h-9 w-9"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#212B36]">
                          0.93245 ETH
                        </span>
                        <span className="text-xs font-medium text-[#637381]">
                          9,047,32 USD
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                      <img
                        src="/assets/admin/analytics-dashboard/uparrow.svg"
                        alt="arrow"
                        className="h-2.5 w-2.5"
                      />
                      <span className="font-inter text-xs font-medium text-[#45CB85]">
                        +8.05
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 border border-[#7851bd33] p-5 rounded-xl w-full sm:max-w-xs">
                  <div className="flex justify-between w-full sm:min-w-[200px] items-center">
                    <span className="text-sm font-medium text-[#212B36] !capitalize">
                      Litecoin
                    </span>
                    <img
                      src="/logo.png"
                      alt="dots"
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/admin/analytics-dashboard/graph3.svg"
                      alt="graph"
                      className="object-fill w-full"
                    />
                  </div>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex gap-2.5">
                      <img
                        src="/assets/admin/analytics-dashboard/ltclist.svg"
                        alt="crypto image"
                        className="h-9 w-9"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#212B36]">
                          0.64347 LTC
                        </span>
                        <span className="text-xs font-medium text-[#637381]">
                          3,059,02 USD
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                      <img
                        src="/assets/admin/analytics-dashboard/uparrow.svg"
                        alt="arrow"
                        className="h-2.5 w-2.5"
                      />
                      <span className="font-inter text-xs font-medium text-[#45CB85]">
                        +5.09
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 border border-[#7851bd33] p-5 rounded-xl w-full sm:max-w-xs">
                  <div className="flex justify-between w-full sm:min-w-[200px] items-center">
                    <span className="text-sm font-medium text-[#212B36] !capitalize">
                      Ripple
                    </span>
                    <img
                      src="/logo.png"
                      alt="dots"
                      className="cursor-pointer"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/admin/analytics-dashboard/graph4.svg"
                      alt="graph"
                      className="object-fill w-full"
                    />
                  </div>
                  <div className="flex justify-between flex-wrap sm:flex-nowrap">
                    <div className="flex gap-2.5">
                      <img
                        src="/assets/admin/analytics-dashboard/riplist.svg"
                        alt="crypto image"
                        className="h-9 w-9"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#212B36]">
                          0.53453 RIP
                        </span>
                        <span className="text-xs font-medium text-[#637381]">
                          1,082,19 USD
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 self-end">
                      <img
                        src="/assets/admin/analytics-dashboard/downarrow.svg"
                        alt="arrow"
                        className="h-2.5 w-2.5"
                      />
                      <span className="font-inter text-xs font-medium text-[#DC3545]">
                        +5.09
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FDFDFF] rounded-2xl block md:hidden">
            <div className="py-6 flex flex-col gap-5 ">
              <div className="flex flex-col gap-3 px-5">
                <div className="flex justify-between md:flex-col gap-3 lg:flex-row lg:justify-between">
                  <span className="text-lg font-semibold text-[#212B36] whitespace-nowrap">
                    Send Money
                  </span>
                  <button className="px-5 py-1.5 text-[#637381] hover:bg-gradient-to-tl hover:to-[#7851BD] hover:from-[#4E4BCF] text-base tracking-[1.6px] bg-[#EDEDED] rounded-[40px] text-center h-fit w-fi hover:text-white whitespace-nowrap self-end">
                    View All
                  </button>
                </div>
                <div className="flex justify-between flex-wrap gap-2 lg:gap-0 lg:flex-nowrap ">
                  <div className="flex gap-7 flex-wrap">
                    <img
                      src="/assets/admin/analytics-dashboard/user1.svg"
                      alt="user"
                      className="h-9 w-9"
                    />
                    <img
                      src="/assets/admin/analytics-dashboard/user2.svg"
                      alt="user"
                      className="h-9 w-9"
                    />
                    <img
                      src="/assets/admin/analytics-dashboard/user3.svg"
                      alt="user"
                      className="h-9 w-9"
                    />
                    <img
                      src="/assets/admin/analytics-dashboard/user4.svg"
                      alt="user"
                      className="h-9 w-9"
                    />
                    <img
                      src="/assets/admin/analytics-dashboard/user5.svg"
                      alt="user"
                      className="h-9 w-9"
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-[#7851bd33] px-5 pt-5 flex gap-7 flex-col">
                <div className="flex flex-col gap-2 xl:flex-row xl:justify-between w-full">
                  <span className="font-semibold text-lg text-[#212B36] tracking-[1px]">
                    Operations
                  </span>
                  <div className="p-2 bg-[#EDEDED] rounded-lg flex flex-wrap">
                    <span className="bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md tracking-[1.5px] cursor-pointer hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                      Buy
                    </span>
                    <span className="bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md tracking-[1.5px] cursor-pointer hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                      Sell
                    </span>
                    <span className="bg-[#EDEDED] hover:bg-white text-sm px-2.5 py-1.5 rounded-md cursor-pointer tracking-[1.5px] hover:shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]">
                      Exchange
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <span className="text-sm text-[#637381]">You pay</span>
                    <div className="py-2 pl-1.5 bg-[#EDEDED] flex justify-between flex-wrap gap-3 rounded-lg">
                      <div className="relative mt-1">
                        <button
                          className="flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase"
                          id="headlessui-listbox-button-:Rpja6l6:"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <img
                            src="/assets/admin/analytics-dashboard/ust.png"
                            className="h-5 w-5"
                          />
                          ust
                          <svg
                            width={7}
                            height={5}
                            viewBox="0 0 7 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-1.5"
                          >
                            <path
                              d="M0.420825 1.61555L2.84342 4.19964C3.19898 4.57891 3.80102 4.57891 4.15658 4.19964L6.57918 1.61555C7.11805 1.04075 6.71049 0.099999 5.92259 0.099999L1.07741 0.099999C0.289513 0.099999 -0.118049 1.04075 0.420825 1.61555Z"
                              fill="#212B36"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex gap-4 items-center mr-4 ml-1.5">
                        <span className="text-[#212B36] font-semibold text-sm tracking-[1.5px]">
                          $321.40
                        </span>
                        <button className="px-2 py-0.5 text-xs uppercase bg-[#7851BD] rounded-[20px] text-[#FDFDFF] font-bold tracking-[1px]">
                          Max
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <svg
                      width={12}
                      height={16}
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto"
                    >
                      <path
                        d="M8.32195 15.7694L11.7481 12.5688C11.828 12.4942 11.8913 12.4057 11.9345 12.3082C11.9778 12.2107 12 12.1062 12 12.0007C12 11.7876 11.9094 11.5833 11.7481 11.4326C11.5868 11.282 11.3681 11.1973 11.14 11.1973C10.9119 11.1973 10.6931 11.282 10.5318 11.4326L8.57034 13.273L8.57034 3.99927C8.57034 3.78706 8.4801 3.58354 8.31947 3.43349C8.15884 3.28343 7.94097 3.19913 7.71381 3.19913C7.48664 3.19913 7.26877 3.28343 7.10814 3.43349C6.94751 3.58354 6.85727 3.78706 6.85727 3.99927L6.85727 15.2013C6.85811 15.3593 6.90899 15.5135 7.0035 15.6445C7.098 15.7755 7.2319 15.8774 7.38832 15.9374C7.54431 15.9987 7.71622 16.0155 7.88238 15.9856C8.04854 15.9556 8.2015 15.8804 8.32195 15.7694ZM5.14419 12.0007L5.14419 0.798694C5.14335 0.640725 5.09247 0.486524 4.99796 0.355524C4.90346 0.224524 4.76956 0.122587 4.61314 0.0625601C4.45715 0.00128542 4.28524 -0.0154558 4.11908 0.014449C3.95292 0.0443537 3.79996 0.119564 3.67951 0.230591L0.253364 3.43117C0.173082 3.50556 0.109359 3.59405 0.0658735 3.69156C0.0223882 3.78906 3.81443e-07 3.89365 3.76826e-07 3.99927C3.72209e-07 4.1049 0.0223881 4.20949 0.0658734 4.30699C0.109359 4.4045 0.173082 4.49299 0.253364 4.56738C0.33299 4.64237 0.427723 4.7019 0.5321 4.74252C0.636477 4.78314 0.748431 4.80406 0.861505 4.80406C0.974578 4.80406 1.08653 4.78314 1.19091 4.74252C1.29529 4.7019 1.39002 4.64237 1.46965 4.56738L3.43112 2.72704L3.43112 12.0007C3.43112 12.2129 3.52136 12.4165 3.68199 12.5665C3.84262 12.7166 4.06049 12.8009 4.28766 12.8009C4.51482 12.8009 4.73269 12.7166 4.89332 12.5665C5.05395 12.4165 5.14419 12.2129 5.14419 12.0007Z"
                        fill="#212B36"
                      />
                    </svg>
                  </div>
                  <div className="mt-0.5">
                    <span className="text-sm text-[#637381]">You get</span>
                    <div className="py-2 pl-1.5 bg-[#EDEDED] flex justify-between flex-wrap gap-3 rounded-lg">
                      <div className="relative mt-1">
                        <button
                          className="flex p-1.5 bg-[#FDFDFF] gap-2 items-center w-fit rounded-lg tracking-[1.4px] uppercase"
                          id="headlessui-listbox-button-:Rpna6l6:"
                          type="button"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          <img
                            src="/assets/admin/analytics-dashboard/btc.png"
                            className="h-5 w-5"
                          />
                          btc
                          <svg
                            width={7}
                            height={5}
                            viewBox="0 0 7 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-1.5"
                          >
                            <path
                              d="M0.420825 1.61555L2.84342 4.19964C3.19898 4.57891 3.80102 4.57891 4.15658 4.19964L6.57918 1.61555C7.11805 1.04075 6.71049 0.099999 5.92259 0.099999L1.07741 0.099999C0.289513 0.099999 -0.118049 1.04075 0.420825 1.61555Z"
                              fill="#212B36"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex gap-4 items-center mr-4 ml-1.5">
                        <span className="text-[#212B36] font-semibold text-sm tracking-[1.5px]">
                          0.05BTC
                        </span>
                        <button className="px-2 py-0.5 text-xs uppercase bg-[#7851BD] rounded-[20px] text-[#FDFDFF] font-bold tracking-[1px]">
                          min
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="px-5 py-5 bg-gradient-to-tl to-[#7851BD] from-[#4E4BCF] rounded-xl text-lg font-semibold mt-3 text-white hover:scale-105">
                  Buy Bitcoin
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              <span className="text-lg font-semibold text-[#212B36]">
                Activity
              </span>
              <div className="w-full overflow-x-scroll scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin md:overflow-auto max-w-xl xs:max-w-xl sm:max-w-xl md:max-w-7xl 2xl:max-w-none mt-1">
                <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border-separate border-spacing-y-1.5">
                  <thead className="bg-[#222E3A]/[6%] rounded-lg text-base text-white font-semibold w-full">
                    <tr className="">
                      <th className="py-3 pl-3 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap rounded-l-lg">
                        Activity
                      </th>
                      <th className="py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                        Account
                      </th>
                      <th className="py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap">
                        Last Payment
                      </th>
                      <th className="py-3 pl-2 text-[#212B36] text-base sm:text-sm font-normal whitespace-nowrap  rounded-r-lg">
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Insurance
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              Property Coverage
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        LTC Wallet
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 20 May - 01:10
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        -$4.012
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Electricity
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              Utility Payment
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        BTC Wallet
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 20May - 01:10
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        -$2.092
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Omar Griffith{" "}
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              Utility Payment{" "}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        ETH Wallet{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 28 Apr - 01:10{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        +$1.089{" "}
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Electricity
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              Utility Payment{" "}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        BTC Wallet{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        {" "}
                        Mon, 28 Apr - 01:10
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        {" "}
                        -$833
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Insurance{" "}
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              {" "}
                              Property Coverage
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        BTC Wallet{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 28 Apr - 01:10{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        -$1.458{" "}
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Nettie Barnett{" "}
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              Property Coverage{" "}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        LTC Wallet{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 18 Apr - 01:10{" "}
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        {" "}
                        +$1.089
                      </td>
                    </tr>
                    <tr className="drop-shadow-[0_0_10px_rgba(34,46,58,0.02)] hover:drop-shadow-2xl cursor-pointer bg-[#f6f8fa]">
                      <td className="py-5 pl-3 text-sm font-normal text-[#637381] rounded-l-lg border-y border-l border-[#7851BD]/20">
                        <div className="relative flex gap-3 items-center">
                          <div className="">
                            <img
                              src="/logo.png"
                              alt="hepta-brown"
                              className="w-12 h-12"
                            />
                          </div>
                          <div className="flex flex-col whitespace-nowrap">
                            <span className="text-xs md:text-sm text-[#212B36]">
                              Junaid Horn{" "}
                            </span>
                            <span className="text-xs md:text-sm text-[#637381] mt-1">
                              {" "}
                              Property Coverage
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y  border-x-0 border-[#7851BD]/20">
                        ETH Wallet
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381]  border-y border-x-0 border-[#7851BD]/20">
                        Mon, 16 Apr - 01:10
                      </td>
                      <td className="py-5 px-2 text-xs md:text-sm font-normal text-[#637381] rounded-r-lg  border-y border-r border-[#7851BD]/20">
                        +$1.089{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl block md:hidden" style={{}}>
            <div className="py-5 pl-5 pr-10 flex flex-col gap-5 overflow-hidden overflow-x-auto scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin">
              <div className="flex gap-60">
                <div className="flex flex-col gap-2.5 ">
                  <span className="text-lg text-[#212B36 font-semibold">
                    Transactions
                  </span>
                  <span className="text-[#637381] text-xs font-medium whitespace-nowrap">
                    Lorem ipsum dolor sit amet, consectetur
                  </span>
                </div>
                <div className="">
                  <div className="relative mt-1">
                    <button
                      className="rounded-[40px] gap-10 border border-[#D5D5D8] text-[#000000] font-medium text-sm py-4 px-5 flex justify-center items-center"
                      id="headlessui-listbox-button-:Rd76l6:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Monthly
                      <svg
                        width={26}
                        height={24}
                        viewBox="0 0 26 24"
                        fill="none"
                        className="fill-[#363062] group-hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.97904 9L13.0911 15L19.2031 9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-[21rem] justify-between pr-5">
                <span className="text-sm font-medium text-[#212B36] whitespace-nowrap">
                  Last Month
                  <span className="text-sm font-medium text-[#32A953]">
                    {" "}
                    $42,443
                  </span>
                </span>
                <div className="text-[#000000] font-semibold text-xl gap-2.5 flex items-start pl-1">
                  <span> $48,525.21</span>
                  <span className="text-[#32A953] flex">
                    7%
                    <svg
                      width={26}
                      height={24}
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="ic_chevron">
                        <path
                          id="Vector"
                          d="M7.03275 15L13.1448 9L19.2568 15"
                          fill="#37D159"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-[630px]">
                <div data-highcharts-chart={0} style={{ overflow: "hidden" }}>
                  <div
                    id="highcharts-3zwpymu-0"
                    dir="ltr"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: 650,
                      height: 400,
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                      touchAction: "manipulation",
                      outline: "none",
                    }}
                    className="highcharts-container "
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "1rem",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={650}
                      height={400}
                      viewBox="0 0 650 400"
                      role="img"
                      aria-label=""
                    >
                      <desc>Created with Highcharts 11.1.0</desc>
                      <defs>
                        <filter id="highcharts-drop-shadow-0">
                          <feDropShadow
                            dx={1}
                            dy={1}
                            floodColor="#000000"
                            floodOpacity="0.75"
                            stdDeviation="2.5"
                          />
                        </filter>
                        <clipPath id="highcharts-3zwpymu-1-">
                          <rect
                            x={0}
                            y={0}
                            width={594}
                            height={304}
                            fill="none"
                          />
                        </clipPath>
                        <clipPath id="highcharts-3zwpymu-14-">
                          <rect
                            x={0}
                            y={0}
                            width={594}
                            height={304}
                            fill="none"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        fill="#ffffff"
                        className="highcharts-background"
                        filter="none"
                        x={0}
                        y={0}
                        width={650}
                        height={400}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={46}
                        y={10}
                        width={594}
                        height={304}
                        filter="none"
                      />
                      <g
                        className="highcharts-grid highcharts-xaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 95.5 10 L 95.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 144.5 10 L 144.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 194.5 10 L 194.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 243.5 10 L 243.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 293.5 10 L 293.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 342.5 10 L 342.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 392.5 10 L 392.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 441.5 10 L 441.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 491.5 10 L 491.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 540.5 10 L 540.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 590.5 10 L 590.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 639.5 10 L 639.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 45.5 10 L 45.5 314"
                          opacity={1}
                        />
                      </g>
                      <g
                        className="highcharts-grid highcharts-yaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 314.5 L 640 314.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 238.5 L 640 238.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 162.5 L 640 162.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 86.5 L 640 86.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 9.5 L 640 9.5"
                          opacity={1}
                        />
                      </g>
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        data-z-index={1}
                        stroke="#cccccc"
                        strokeWidth={0}
                        x={46}
                        y={10}
                        width={594}
                        height={304}
                      />
                      <g
                        className="highcharts-axis highcharts-xaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="#333333"
                          strokeWidth={1}
                          data-z-index={7}
                          d="M 46 314.5 L 640 314.5"
                        />
                      </g>
                      <g
                        className="highcharts-axis highcharts-yaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="#333333"
                          strokeWidth={0}
                          data-z-index={7}
                          d="M 46 10 L 46 314"
                        />
                      </g>
                      <g
                        className="highcharts-series-group"
                        data-z-index={3}
                        filter="none"
                      >
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="url(#highcharts-3zwpymu-14-)"
                        >
                          <path
                            fill="#7851BD"
                            d="M 15.5 200.5 L 17.5 200.5 A 5 5 0 0 1 22.5 205.5 L 22.5 304.5 A 0 0 0 0 1 22.5 304.5 L 10.5 304.5 A 0 0 0 0 1 10.5 304.5 L 10.5 205.5 A 5 5 0 0 1 15.5 200.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 65.5 114.5 L 67.5 114.5 A 5 5 0 0 1 72.5 119.5 L 72.5 304.5 A 0 0 0 0 1 72.5 304.5 L 60.5 304.5 A 0 0 0 0 1 60.5 304.5 L 60.5 119.5 A 5 5 0 0 1 65.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 114.5 76.5 L 116.5 76.5 A 5 5 0 0 1 121.5 81.5 L 121.5 304.5 A 0 0 0 0 1 121.5 304.5 L 109.5 304.5 A 0 0 0 0 1 109.5 304.5 L 109.5 81.5 A 5 5 0 0 1 114.5 76.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 164.5 57.5 L 166.5 57.5 A 5 5 0 0 1 171.5 62.5 L 171.5 304.5 A 0 0 0 0 1 171.5 304.5 L 159.5 304.5 A 0 0 0 0 1 159.5 304.5 L 159.5 62.5 A 5 5 0 0 1 164.5 57.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 213.5 152.5 L 215.5 152.5 A 5 5 0 0 1 220.5 157.5 L 220.5 304.5 A 0 0 0 0 1 220.5 304.5 L 208.5 304.5 A 0 0 0 0 1 208.5 304.5 L 208.5 157.5 A 5 5 0 0 1 213.5 152.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 263.5 114.5 L 265.5 114.5 A 5 5 0 0 1 270.5 119.5 L 270.5 304.5 A 0 0 0 0 1 270.5 304.5 L 258.5 304.5 A 0 0 0 0 1 258.5 304.5 L 258.5 119.5 A 5 5 0 0 1 263.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 312.5 200.5 L 314.5 200.5 A 5 5 0 0 1 319.5 205.5 L 319.5 304.5 A 0 0 0 0 1 319.5 304.5 L 307.5 304.5 A 0 0 0 0 1 307.5 304.5 L 307.5 205.5 A 5 5 0 0 1 312.5 200.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 362.5 114.5 L 364.5 114.5 A 5 5 0 0 1 369.5 119.5 L 369.5 304.5 A 0 0 0 0 1 369.5 304.5 L 357.5 304.5 A 0 0 0 0 1 357.5 304.5 L 357.5 119.5 A 5 5 0 0 1 362.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 411.5 76.5 L 413.5 76.5 A 5 5 0 0 1 418.5 81.5 L 418.5 304.5 A 0 0 0 0 1 418.5 304.5 L 406.5 304.5 A 0 0 0 0 1 406.5 304.5 L 406.5 81.5 A 5 5 0 0 1 411.5 76.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 461.5 57.5 L 463.5 57.5 A 5 5 0 0 1 468.5 62.5 L 468.5 304.5 A 0 0 0 0 1 468.5 304.5 L 456.5 304.5 A 0 0 0 0 1 456.5 304.5 L 456.5 62.5 A 5 5 0 0 1 461.5 57.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 510.5 152.5 L 512.5 152.5 A 5 5 0 0 1 517.5 157.5 L 517.5 304.5 A 0 0 0 0 1 517.5 304.5 L 505.5 304.5 A 0 0 0 0 1 505.5 304.5 L 505.5 157.5 A 5 5 0 0 1 510.5 152.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 560.5 114.5 L 562.5 114.5 A 5 5 0 0 1 567.5 119.5 L 567.5 304.5 A 0 0 0 0 1 567.5 304.5 L 555.5 304.5 A 0 0 0 0 1 555.5 304.5 L 555.5 119.5 A 5 5 0 0 1 560.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-column-series"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="none"
                        />
                        <g
                          className="highcharts-series highcharts-series-1 highcharts-column-series highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="url(#highcharts-3zwpymu-14-)"
                        >
                          <path
                            fill="#4549D0"
                            d="M 30.5 236.5 L 32.5 236.5 A 5 5 0 0 1 37.5 241.5 L 37.5 304.5 A 0 0 0 0 1 37.5 304.5 L 25.5 304.5 A 0 0 0 0 1 25.5 304.5 L 25.5 241.5 A 5 5 0 0 1 30.5 236.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 80.5 190.5 L 82.5 190.5 A 5 5 0 0 1 87.5 195.5 L 87.5 304.5 A 0 0 0 0 1 87.5 304.5 L 75.5 304.5 A 0 0 0 0 1 75.5 304.5 L 75.5 195.5 A 5 5 0 0 1 80.5 190.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 129.5 163.5 L 131.5 163.5 A 5 5 0 0 1 136.5 168.5 L 136.5 304.5 A 0 0 0 0 1 136.5 304.5 L 124.5 304.5 A 0 0 0 0 1 124.5 304.5 L 124.5 168.5 A 5 5 0 0 1 129.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 179.5 163.5 L 181.5 163.5 A 5 5 0 0 1 186.5 168.5 L 186.5 304.5 A 0 0 0 0 1 186.5 304.5 L 174.5 304.5 A 0 0 0 0 1 174.5 304.5 L 174.5 168.5 A 5 5 0 0 1 179.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 228.5 209.5 L 230.5 209.5 A 5 5 0 0 1 235.5 214.5 L 235.5 304.5 A 0 0 0 0 1 235.5 304.5 L 223.5 304.5 A 0 0 0 0 1 223.5 304.5 L 223.5 214.5 A 5 5 0 0 1 228.5 209.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 278.5 205.5 L 280.5 205.5 A 5 5 0 0 1 285.5 210.5 L 285.5 304.5 A 0 0 0 0 1 285.5 304.5 L 273.5 304.5 A 0 0 0 0 1 273.5 304.5 L 273.5 210.5 A 5 5 0 0 1 278.5 205.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 327.5 236.5 L 329.5 236.5 A 5 5 0 0 1 334.5 241.5 L 334.5 304.5 A 0 0 0 0 1 334.5 304.5 L 322.5 304.5 A 0 0 0 0 1 322.5 304.5 L 322.5 241.5 A 5 5 0 0 1 327.5 236.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 377.5 190.5 L 379.5 190.5 A 5 5 0 0 1 384.5 195.5 L 384.5 304.5 A 0 0 0 0 1 384.5 304.5 L 372.5 304.5 A 0 0 0 0 1 372.5 304.5 L 372.5 195.5 A 5 5 0 0 1 377.5 190.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 426.5 163.5 L 428.5 163.5 A 5 5 0 0 1 433.5 168.5 L 433.5 304.5 A 0 0 0 0 1 433.5 304.5 L 421.5 304.5 A 0 0 0 0 1 421.5 304.5 L 421.5 168.5 A 5 5 0 0 1 426.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 476.5 163.5 L 478.5 163.5 A 5 5 0 0 1 483.5 168.5 L 483.5 304.5 A 0 0 0 0 1 483.5 304.5 L 471.5 304.5 A 0 0 0 0 1 471.5 304.5 L 471.5 168.5 A 5 5 0 0 1 476.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 525.5 209.5 L 527.5 209.5 A 5 5 0 0 1 532.5 214.5 L 532.5 304.5 A 0 0 0 0 1 532.5 304.5 L 520.5 304.5 A 0 0 0 0 1 520.5 304.5 L 520.5 214.5 A 5 5 0 0 1 525.5 209.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 575.5 205.5 L 577.5 205.5 A 5 5 0 0 1 582.5 210.5 L 582.5 304.5 A 0 0 0 0 1 582.5 304.5 L 570.5 304.5 A 0 0 0 0 1 570.5 304.5 L 570.5 210.5 A 5 5 0 0 1 575.5 205.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-1 highcharts-column-series"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="none"
                        />
                      </g>
                      <text
                        x={10}
                        className="highcharts-title"
                        data-z-index={4}
                        y={25}
                        style={{ fontSize: "1.2em" }}
                      />
                      <text
                        x={325}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        data-z-index={4}
                        style={{
                          color: "rgb(102, 102, 102)",
                          fontSize: "0.8em",
                          fill: "rgb(102, 102, 102)",
                        }}
                        y={24}
                      />
                      <text
                        x={10}
                        textAnchor="start"
                        className="highcharts-caption"
                        data-z-index={4}
                        style={{
                          color: "rgb(102, 102, 102)",
                          fontSize: "0.8em",
                          fill: "rgb(102, 102, 102)",
                        }}
                        y={397}
                      />
                      <g
                        className="highcharts-legend highcharts-no-tooltip"
                        data-z-index={7}
                        transform="translate(239,355)"
                      >
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          stroke="#999999"
                          strokeWidth={0}
                          filter="none"
                          x={0}
                          y={0}
                          width={172}
                          height={30}
                        />
                        <g data-z-index={1}>
                          <g>
                            <g
                              className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-0"
                              data-z-index={1}
                              transform="translate(8,3)"
                            >
                              <text
                                x={21}
                                textAnchor="start"
                                data-z-index={2}
                                style={{
                                  color: "rgb(51, 51, 51)",
                                  cursor: "pointer",
                                  fontSize: "0.8em",
                                  textDecoration: "none",
                                  fill: "rgb(51, 51, 51)",
                                }}
                                y={17}
                              >
                                Bitcoin
                              </text>
                              <rect
                                x={2}
                                y={6}
                                rx={6}
                                ry={6}
                                width={12}
                                height={12}
                                fill="#7851BD"
                                className="highcharts-point"
                                data-z-index={3}
                              />
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-1"
                              data-z-index={1}
                              transform="translate(87.5,3)"
                            >
                              <text
                                x={21}
                                y={17}
                                textAnchor="start"
                                data-z-index={2}
                                style={{
                                  color: "rgb(51, 51, 51)",
                                  cursor: "pointer",
                                  fontSize: "0.8em",
                                  textDecoration: "none",
                                  fill: "rgb(51, 51, 51)",
                                }}
                              >
                                Ethereum
                              </text>
                              <rect
                                x={2}
                                y={6}
                                rx={6}
                                ry={6}
                                width={12}
                                height={12}
                                fill="#4549D0"
                                className="highcharts-point"
                                data-z-index={3}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-xaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x="70.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jan
                        </text>
                        <text
                          x="120.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Feb
                        </text>
                        <text
                          x="169.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Mar
                        </text>
                        <text
                          x="219.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Apr
                        </text>
                        <text
                          x="268.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          May
                        </text>
                        <text
                          x="318.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jun
                        </text>
                        <text
                          x="367.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jul
                        </text>
                        <text
                          x="417.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Aug
                        </text>
                        <text
                          x="466.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Sep
                        </text>
                        <text
                          x="516.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Oct
                        </text>
                        <text
                          x="565.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Nov
                        </text>
                        <text
                          x="615.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Dec
                        </text>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-yaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={319}
                          opacity={1}
                        >
                          0
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={243}
                          opacity={1}
                        >
                          20k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={167}
                          opacity={1}
                        >
                          40k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={91}
                          opacity={1}
                        >
                          60k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={15}
                          opacity={1}
                        >
                          80k
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl px-6">
            <div className="py-5 pl-5 pr-10 flex flex-col gap-5 overflow-hidden overflow-x-auto scrollbar-thumb-[#7851BD] scrollbar-track-[#EDEDED] scrollbar-thin">
              <div className="flex gap-60">
                <div className="flex flex-col gap-2.5 ">
                  <span className="text-lg text-[#212B36 font-semibold">
                    Transactions
                  </span>
                  <span className="text-[#637381] text-xs font-medium whitespace-nowrap">
                    Lorem ipsum dolor sit amet, consectetur
                  </span>
                </div>
                <div className="">
                  <div className="relative mt-1">
                    <button
                      className="rounded-[40px] gap-10 border border-[#D5D5D8] text-[#000000] font-medium text-sm py-4 px-5 flex justify-center items-center"
                      id="headlessui-listbox-button-:R6jql6:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      Monthly
                      <svg
                        width={26}
                        height={24}
                        viewBox="0 0 26 24"
                        fill="none"
                        className="fill-[#363062] group-hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.97904 9L13.0911 15L19.2031 9"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-[21rem] justify-between pr-5">
                <span className="text-sm font-medium text-[#212B36] whitespace-nowrap">
                  Last Month
                  <span className="text-sm font-medium text-[#32A953]">
                    {" "}
                    $42,443
                  </span>
                </span>
                <div className="text-[#000000] font-semibold text-xl gap-2.5 flex items-start pl-1">
                  <span> $48,525.21</span>
                  <span className="text-[#32A953] flex">
                    7%
                    <svg
                      width={26}
                      height={24}
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="ic_chevron">
                        <path
                          id="Vector"
                          d="M7.03275 15L13.1448 9L19.2568 15"
                          fill="#37D159"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="w-[630px]">
                <div data-highcharts-chart={1} style={{ overflow: "hidden" }}>
                  <div
                    id="highcharts-3zwpymu-27"
                    dir="ltr"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      width: 650,
                      height: 400,
                      textAlign: "left",
                      lineHeight: "normal",
                      zIndex: 0,
                      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none",
                      touchAction: "manipulation",
                      outline: "none",
                    }}
                    className="highcharts-container "
                  >
                    <svg
                      version="1.1"
                      className="highcharts-root"
                      style={{
                        fontFamily: "Helvetica, Arial, sans-serif",
                        fontSize: "1rem",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={650}
                      height={400}
                      viewBox="0 0 650 400"
                      role="img"
                      aria-label=""
                    >
                      <desc>Created with Highcharts 11.1.0</desc>
                      <defs>
                        <filter id="highcharts-drop-shadow-1">
                          <feDropShadow
                            dx={1}
                            dy={1}
                            floodColor="#000000"
                            floodOpacity="0.75"
                            stdDeviation="2.5"
                          />
                        </filter>
                        <clipPath id="highcharts-3zwpymu-28-">
                          <rect
                            x={0}
                            y={0}
                            width={594}
                            height={304}
                            fill="none"
                          />
                        </clipPath>
                        <clipPath id="highcharts-3zwpymu-41-">
                          <rect
                            x={0}
                            y={0}
                            width={594}
                            height={304}
                            fill="none"
                          />
                        </clipPath>
                      </defs>
                      <rect
                        fill="#ffffff"
                        className="highcharts-background"
                        filter="none"
                        x={0}
                        y={0}
                        width={650}
                        height={400}
                        rx={0}
                        ry={0}
                      />
                      <rect
                        fill="none"
                        className="highcharts-plot-background"
                        x={46}
                        y={10}
                        width={594}
                        height={304}
                        filter="none"
                      />
                      <g
                        className="highcharts-grid highcharts-xaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 95.5 10 L 95.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 144.5 10 L 144.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 194.5 10 L 194.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 243.5 10 L 243.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 293.5 10 L 293.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 342.5 10 L 342.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 392.5 10 L 392.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 441.5 10 L 441.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 491.5 10 L 491.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 540.5 10 L 540.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 590.5 10 L 590.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 639.5 10 L 639.5 314"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={0}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 45.5 10 L 45.5 314"
                          opacity={1}
                        />
                      </g>
                      <g
                        className="highcharts-grid highcharts-yaxis-grid"
                        data-z-index={1}
                      >
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 314.5 L 640 314.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 238.5 L 640 238.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 162.5 L 640 162.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 86.5 L 640 86.5"
                          opacity={1}
                        />
                        <path
                          fill="none"
                          stroke="#e6e6e6"
                          strokeWidth={1}
                          strokeDasharray="none"
                          data-z-index={1}
                          className="highcharts-grid-line"
                          d="M 46 9.5 L 640 9.5"
                          opacity={1}
                        />
                      </g>
                      <rect
                        fill="none"
                        className="highcharts-plot-border"
                        data-z-index={1}
                        stroke="#cccccc"
                        strokeWidth={0}
                        x={46}
                        y={10}
                        width={594}
                        height={304}
                      />
                      <g
                        className="highcharts-axis highcharts-xaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="#333333"
                          strokeWidth={1}
                          data-z-index={7}
                          d="M 46 314.5 L 640 314.5"
                        />
                      </g>
                      <g
                        className="highcharts-axis highcharts-yaxis"
                        data-z-index={2}
                      >
                        <path
                          fill="none"
                          className="highcharts-axis-line"
                          stroke="#333333"
                          strokeWidth={0}
                          data-z-index={7}
                          d="M 46 10 L 46 314"
                        />
                      </g>
                      <g
                        className="highcharts-series-group"
                        data-z-index={3}
                        filter="none"
                      >
                        <g
                          className="highcharts-series highcharts-series-0 highcharts-column-series highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="url(#highcharts-3zwpymu-41-)"
                        >
                          <path
                            fill="#7851BD"
                            d="M 15.5 200.5 L 17.5 200.5 A 5 5 0 0 1 22.5 205.5 L 22.5 304.5 A 0 0 0 0 1 22.5 304.5 L 10.5 304.5 A 0 0 0 0 1 10.5 304.5 L 10.5 205.5 A 5 5 0 0 1 15.5 200.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(120,81,189)"
                            d="M 65.5 114.5 L 67.5 114.5 A 5 5 0 0 1 72.5 119.5 L 72.5 304.5 A 0 0 0 0 1 72.5 304.5 L 60.5 304.5 A 0 0 0 0 1 60.5 304.5 L 60.5 119.5 A 5 5 0 0 1 65.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(120,81,189)"
                            d="M 114.5 76.5 L 116.5 76.5 A 5 5 0 0 1 121.5 81.5 L 121.5 304.5 A 0 0 0 0 1 121.5 304.5 L 109.5 304.5 A 0 0 0 0 1 109.5 304.5 L 109.5 81.5 A 5 5 0 0 1 114.5 76.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(120,81,189)"
                            d="M 164.5 57.5 L 166.5 57.5 A 5 5 0 0 1 171.5 62.5 L 171.5 304.5 A 0 0 0 0 1 171.5 304.5 L 159.5 304.5 A 0 0 0 0 1 159.5 304.5 L 159.5 62.5 A 5 5 0 0 1 164.5 57.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 213.5 152.5 L 215.5 152.5 A 5 5 0 0 1 220.5 157.5 L 220.5 304.5 A 0 0 0 0 1 220.5 304.5 L 208.5 304.5 A 0 0 0 0 1 208.5 304.5 L 208.5 157.5 A 5 5 0 0 1 213.5 152.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 263.5 114.5 L 265.5 114.5 A 5 5 0 0 1 270.5 119.5 L 270.5 304.5 A 0 0 0 0 1 270.5 304.5 L 258.5 304.5 A 0 0 0 0 1 258.5 304.5 L 258.5 119.5 A 5 5 0 0 1 263.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 312.5 200.5 L 314.5 200.5 A 5 5 0 0 1 319.5 205.5 L 319.5 304.5 A 0 0 0 0 1 319.5 304.5 L 307.5 304.5 A 0 0 0 0 1 307.5 304.5 L 307.5 205.5 A 5 5 0 0 1 312.5 200.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 362.5 114.5 L 364.5 114.5 A 5 5 0 0 1 369.5 119.5 L 369.5 304.5 A 0 0 0 0 1 369.5 304.5 L 357.5 304.5 A 0 0 0 0 1 357.5 304.5 L 357.5 119.5 A 5 5 0 0 1 362.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 411.5 76.5 L 413.5 76.5 A 5 5 0 0 1 418.5 81.5 L 418.5 304.5 A 0 0 0 0 1 418.5 304.5 L 406.5 304.5 A 0 0 0 0 1 406.5 304.5 L 406.5 81.5 A 5 5 0 0 1 411.5 76.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 461.5 57.5 L 463.5 57.5 A 5 5 0 0 1 468.5 62.5 L 468.5 304.5 A 0 0 0 0 1 468.5 304.5 L 456.5 304.5 A 0 0 0 0 1 456.5 304.5 L 456.5 62.5 A 5 5 0 0 1 461.5 57.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 510.5 152.5 L 512.5 152.5 A 5 5 0 0 1 517.5 157.5 L 517.5 304.5 A 0 0 0 0 1 517.5 304.5 L 505.5 304.5 A 0 0 0 0 1 505.5 304.5 L 505.5 157.5 A 5 5 0 0 1 510.5 152.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#7851BD"
                            d="M 560.5 114.5 L 562.5 114.5 A 5 5 0 0 1 567.5 119.5 L 567.5 304.5 A 0 0 0 0 1 567.5 304.5 L 555.5 304.5 A 0 0 0 0 1 555.5 304.5 L 555.5 119.5 A 5 5 0 0 1 560.5 114.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-0 highcharts-column-series"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="none"
                        />
                        <g
                          className="highcharts-series highcharts-series-1 highcharts-column-series highcharts-tracker"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="url(#highcharts-3zwpymu-41-)"
                        >
                          <path
                            fill="#4549D0"
                            d="M 30.5 236.5 L 32.5 236.5 A 5 5 0 0 1 37.5 241.5 L 37.5 304.5 A 0 0 0 0 1 37.5 304.5 L 25.5 304.5 A 0 0 0 0 1 25.5 304.5 L 25.5 241.5 A 5 5 0 0 1 30.5 236.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(69,73,208)"
                            d="M 80.5 190.5 L 82.5 190.5 A 5 5 0 0 1 87.5 195.5 L 87.5 304.5 A 0 0 0 0 1 87.5 304.5 L 75.5 304.5 A 0 0 0 0 1 75.5 304.5 L 75.5 195.5 A 5 5 0 0 1 80.5 190.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(69,73,208)"
                            d="M 129.5 163.5 L 131.5 163.5 A 5 5 0 0 1 136.5 168.5 L 136.5 304.5 A 0 0 0 0 1 136.5 304.5 L 124.5 304.5 A 0 0 0 0 1 124.5 304.5 L 124.5 168.5 A 5 5 0 0 1 129.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="rgb(69,73,208)"
                            d="M 179.5 163.5 L 181.5 163.5 A 5 5 0 0 1 186.5 168.5 L 186.5 304.5 A 0 0 0 0 1 186.5 304.5 L 174.5 304.5 A 0 0 0 0 1 174.5 304.5 L 174.5 168.5 A 5 5 0 0 1 179.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 228.5 209.5 L 230.5 209.5 A 5 5 0 0 1 235.5 214.5 L 235.5 304.5 A 0 0 0 0 1 235.5 304.5 L 223.5 304.5 A 0 0 0 0 1 223.5 304.5 L 223.5 214.5 A 5 5 0 0 1 228.5 209.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 278.5 205.5 L 280.5 205.5 A 5 5 0 0 1 285.5 210.5 L 285.5 304.5 A 0 0 0 0 1 285.5 304.5 L 273.5 304.5 A 0 0 0 0 1 273.5 304.5 L 273.5 210.5 A 5 5 0 0 1 278.5 205.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 327.5 236.5 L 329.5 236.5 A 5 5 0 0 1 334.5 241.5 L 334.5 304.5 A 0 0 0 0 1 334.5 304.5 L 322.5 304.5 A 0 0 0 0 1 322.5 304.5 L 322.5 241.5 A 5 5 0 0 1 327.5 236.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 377.5 190.5 L 379.5 190.5 A 5 5 0 0 1 384.5 195.5 L 384.5 304.5 A 0 0 0 0 1 384.5 304.5 L 372.5 304.5 A 0 0 0 0 1 372.5 304.5 L 372.5 195.5 A 5 5 0 0 1 377.5 190.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 426.5 163.5 L 428.5 163.5 A 5 5 0 0 1 433.5 168.5 L 433.5 304.5 A 0 0 0 0 1 433.5 304.5 L 421.5 304.5 A 0 0 0 0 1 421.5 304.5 L 421.5 168.5 A 5 5 0 0 1 426.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 476.5 163.5 L 478.5 163.5 A 5 5 0 0 1 483.5 168.5 L 483.5 304.5 A 0 0 0 0 1 483.5 304.5 L 471.5 304.5 A 0 0 0 0 1 471.5 304.5 L 471.5 168.5 A 5 5 0 0 1 476.5 163.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 525.5 209.5 L 527.5 209.5 A 5 5 0 0 1 532.5 214.5 L 532.5 304.5 A 0 0 0 0 1 532.5 304.5 L 520.5 304.5 A 0 0 0 0 1 520.5 304.5 L 520.5 214.5 A 5 5 0 0 1 525.5 209.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                          <path
                            fill="#4549D0"
                            d="M 575.5 205.5 L 577.5 205.5 A 5 5 0 0 1 582.5 210.5 L 582.5 304.5 A 0 0 0 0 1 582.5 304.5 L 570.5 304.5 A 0 0 0 0 1 570.5 304.5 L 570.5 210.5 A 5 5 0 0 1 575.5 205.5 Z"
                            stroke="#ffffff"
                            strokeWidth={1}
                            opacity={1}
                            filter="none"
                            className="highcharts-point"
                          />
                        </g>
                        <g
                          className="highcharts-markers highcharts-series-1 highcharts-column-series"
                          data-z-index="0.1"
                          opacity={1}
                          transform="translate(46,10) scale(1 1)"
                          clipPath="none"
                        />
                      </g>
                      <text
                        x={10}
                        className="highcharts-title"
                        data-z-index={4}
                        y={25}
                        style={{ fontSize: "1.2em" }}
                      />
                      <text
                        x={325}
                        textAnchor="middle"
                        className="highcharts-subtitle"
                        data-z-index={4}
                        style={{
                          color: "rgb(102, 102, 102)",
                          fontSize: "0.8em",
                          fill: "rgb(102, 102, 102)",
                        }}
                        y={24}
                      />
                      <text
                        x={10}
                        textAnchor="start"
                        className="highcharts-caption"
                        data-z-index={4}
                        style={{
                          color: "rgb(102, 102, 102)",
                          fontSize: "0.8em",
                          fill: "rgb(102, 102, 102)",
                        }}
                        y={397}
                      />
                      <g
                        className="highcharts-legend highcharts-no-tooltip"
                        data-z-index={7}
                        transform="translate(239,355)"
                      >
                        <rect
                          fill="none"
                          className="highcharts-legend-box"
                          rx={0}
                          ry={0}
                          stroke="#999999"
                          strokeWidth={0}
                          filter="none"
                          x={0}
                          y={0}
                          width={172}
                          height={30}
                        />
                        <g data-z-index={1}>
                          <g>
                            <g
                              className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-0"
                              data-z-index={1}
                              transform="translate(8,3)"
                            >
                              <text
                                x={21}
                                textAnchor="start"
                                data-z-index={2}
                                style={{
                                  color: "rgb(51, 51, 51)",
                                  cursor: "pointer",
                                  fontSize: "0.8em",
                                  textDecoration: "none",
                                  fill: "rgb(51, 51, 51)",
                                }}
                                y={17}
                              >
                                Bitcoin
                              </text>
                              <rect
                                x={2}
                                y={6}
                                rx={6}
                                ry={6}
                                width={12}
                                height={12}
                                fill="#7851BD"
                                className="highcharts-point"
                                data-z-index={3}
                              />
                            </g>
                            <g
                              className="highcharts-legend-item highcharts-column-series highcharts-color-undefined highcharts-series-1"
                              data-z-index={1}
                              transform="translate(87.5,3)"
                            >
                              <text
                                x={21}
                                y={17}
                                textAnchor="start"
                                data-z-index={2}
                                style={{
                                  color: "rgb(51, 51, 51)",
                                  cursor: "pointer",
                                  fontSize: "0.8em",
                                  textDecoration: "none",
                                  fill: "rgb(51, 51, 51)",
                                }}
                              >
                                Ethereum
                              </text>
                              <rect
                                x={2}
                                y={6}
                                rx={6}
                                ry={6}
                                width={12}
                                height={12}
                                fill="#4549D0"
                                className="highcharts-point"
                                data-z-index={3}
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-xaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x="70.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jan
                        </text>
                        <text
                          x="120.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Feb
                        </text>
                        <text
                          x="169.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Mar
                        </text>
                        <text
                          x="219.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Apr
                        </text>
                        <text
                          x="268.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          May
                        </text>
                        <text
                          x="318.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jun
                        </text>
                        <text
                          x="367.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Jul
                        </text>
                        <text
                          x="417.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Aug
                        </text>
                        <text
                          x="466.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Sep
                        </text>
                        <text
                          x="516.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Oct
                        </text>
                        <text
                          x="565.75"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Nov
                        </text>
                        <text
                          x="615.25"
                          textAnchor="middle"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={341}
                          opacity={1}
                        >
                          Dec
                        </text>
                      </g>
                      <g
                        className="highcharts-axis-labels highcharts-yaxis-labels"
                        data-z-index={7}
                      >
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={319}
                          opacity={1}
                        >
                          0
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={243}
                          opacity={1}
                        >
                          20k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={167}
                          opacity={1}
                        >
                          40k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={91}
                          opacity={1}
                        >
                          60k
                        </text>
                        <text
                          x={31}
                          textAnchor="end"
                          transform="translate(0,0)"
                          style={{
                            color: "rgb(51, 51, 51)",
                            cursor: "default",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                          y={15}
                          opacity={1}
                        >
                          80k
                        </text>
                      </g>
                      <g
                        className="highcharts-label highcharts-tooltip highcharts-color-undefined"
                        data-z-index={8}
                        filter="url(#highcharts-drop-shadow-1)"
                        style={{ cursor: "default", pointerEvents: "none" }}
                        transform="translate(106,37)"
                        opacity={0}
                        visibility="hidden"
                      >
                        <path
                          fill="#ffffff"
                          className="highcharts-label-box highcharts-tooltip-box"
                          d="M 3 0 L 109 0 A 3 3 0 0 1 112 3 L 112 40 A 3 3 0 0 1 109 43 L 62 43 L 56 49 L 50 43 L 3 43 A 3 3 0 0 1 0 40 L 0 3 A 3 3 0 0 1 3 0 Z"
                          strokeWidth={0}
                          stroke="#7851BD"
                        />
                        <text
                          x={8}
                          data-z-index={1}
                          y={18}
                          style={{
                            color: "rgb(51, 51, 51)",
                            fontSize: "0.8em",
                            fill: "rgb(51, 51, 51)",
                          }}
                        >
                          <tspan style={{ fontSize: "0.8em" }}>Mar</tspan>
                          <tspan className="highcharts-br" dy={15} x={8}>
                           {""} 
                          </tspan>
                          <tspan
                            style={{
                              color: "rgb(120, 81, 189)",
                              fill: "rgb(120, 81, 189)",
                            }}
                          >
                            ●
                          </tspan>{" "}
                          Bitcoin:{" "}
                          <tspan style={{ fontWeight: "bold" }}>60 000</tspan>
                          <tspan className="highcharts-br">5</tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default MyWallet