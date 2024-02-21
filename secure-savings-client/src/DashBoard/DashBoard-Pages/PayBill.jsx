import { MdGasMeter } from "react-icons/md";
import { FcElectricity } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
const PayBill = () => {
  return (
    <div>
      <section className="flex items-center  lg:h-screen font-poppins dark:bg-dark ">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap justify-center -mx-3 pt-11">
            <div className="w-full shadow-md  transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
              <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                >
                  13 march,2022
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Electricity Bill{" "}
                  <span className="inline-block ml-1 ">
                    <FcElectricity />
                  </span>
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  Pay your electricity bills from the comfort of your home
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                >
                  Pay Bill
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full shadow-md  transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
              <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                >
                  14 march,2022
                </a>

                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Gas Bill{" "}
                  <span className="inline-block ml-1">
                    <MdGasMeter />
                  </span>
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  Pay your gas bill easily, whenever needed
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                >
                  Pay Bill
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full shadow-md  transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
              <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                >
                  15 march,2022
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Telephone Bill{" "}
                  <span className="inline-block ml-1">
                    <BsFillTelephoneFill />
                  </span>
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  No more standing in queues or worrying about documents.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                >
                  Pay Bill
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full shadow-md  transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
              <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                >
                  15 march,2022
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Land Fee{" "}
                  <span className="inline-block ml-1">
                    <GiIsland />
                  </span>
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  Wherever you are, pay land development tax and e-mutation fees
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                >
                  Pay Bill
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full shadow-md  transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer px-3 mb-6 lg:px-2 md:w-1/2 lg:w-1/3">
              <div className="p-5 bg-white rounded-b shadow dark:bg-dark">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-blue-600 rounded-full dark:text-gray-400 dark:bg-gray-600 bg-blue-50"
                >
                  15 march,2022
                </a>
                <h2 className="my-3 text-2xl font-bold dark:text-gray-300">
                  Water Bill{" "}
                  <span className="inline-block ml-1">
                    <FaHandHoldingWater />
                  </span>
                </h2>
                <p className="mb-3 leading-loose text-gray-500 dark:text-gray-400">
                  Pay water bills anytime with the SecureSavings website
                  effortlessly.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-lg font-semibold text-blue-600 dark:hover:text-gray-300 dark:text-gray-400 hover:text-black"
                >
                  Pay Bill
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    fill="currentColor"
                    className="ml-2 bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayBill;
