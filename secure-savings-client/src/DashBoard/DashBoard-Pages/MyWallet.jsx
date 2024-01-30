const MyWallet = () => {

  return (
    <>
      {/* user credit details */}
      <div className="py-7 px-7 flex w-full gap-7 transition-all duration-1000 ease-in-out ">
        <div className="flex flex-col w-full gap-7">
          <div className="bg-gradient-to-tl flex flex-col md:flex-row to-[#7851BD] from-[#4E4BCF] rounded-xl dark:bg-dark p-5 relative overflow-hidden">

            <div className="flex flex-1 gap-4 sm:flex-wrap ssm:gap-12 xl:gap-6 flex-col xl:flex-row xl:justify-between xl:items-end lg:h-fit">
              <div className="flex flex-col gap-3">
                <span className="text-lg md:text-4xl font-semibold text-[#FDFDFF]">
                  Your Balance
                </span>
                <span className="text-[22px] font-bold text-[#FDFDFF]">
                  $31,300.40
                </span>
                <div className="flex gap-1 items-center">
                  <span className="text-lg md:text-4xl font-semibold text-[#FDFDFF]">
                    ID:
                  </span>
                  <span className="font-medium text-sm text-white/80">
                    jkjnkjojfowvpoweut6187189784
                  </span>
                </div>
              </div>
            </div>
            {/* Input Field */}
            <div className="flex flex-1 flex-col justify-center items-center">
              <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="text-lg font-semibold text-[#FDFDFF]"
                  >
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Transaction ID"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email2"
                    className="text-lg font-semibold text-[#FDFDFF]"
                  >
                    Send Amount
                  </label>
                  <input
                    type="text"
                    id="email2"
                    placeholder="Send Amount"
                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                  />
                </div>
                <button className="py-2.5 rounded-[10px] transition font-semibold text-white text-center bg-[#f9f9f94d] min-w-[150px] text-lg hover:scale-105">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWallet;
