import { useContext } from "react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/counterSlice";
import toast from "react-hot-toast";

const MyWallet = () => {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser } = authInfo;
  // , isAdmin

  // redux
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const idNumber = form.idNumber.value;
    const money = form.money.value;

    toast.success('Balance added Successfully!')

    console.log(idNumber, money);
    dispatch(increment())
    form.reset();
  }


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
                  <div
                    className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl"
                  >
                    <header className="flex flex-col justify-center items-center">
                      <div
                        className="relative"
                      >
                        <img
                          className="w-full h-auto"
                          src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
                          alt="front credit card"
                        />
                      </div>
                    </header>
                    <form className="p-4" onSubmit={handleSubmit}>
                      <div className="my-3">
                        <input
                          type="text"
                          name="idNumber"
                          className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                          placeholder="Card Image"
                          maxLength={19}
                        />
                      </div>
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
                        <button
                          className="submit-button px-4 py-3 rounded-full bg-[#2195f3] text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                        >
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

