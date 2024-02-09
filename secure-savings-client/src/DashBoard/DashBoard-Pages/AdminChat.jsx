import { Avatar, Badge, Button, Input } from "@material-tailwind/react";

const AdminChat = () => {
  
  return (
    <section className="lg:grid grid-cols-12 relative">
      <aside className="h-full 2xl:col-span-3 xl:col-span-4 lg:col-span-5 bg-white dark:bg-darkblack-600 border border-bgray-200 dark:border-darkblack-400 pr-7 pl-12 pt-6 pb-10 hidden lg:block">
        <header>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-bgray-900 dark:text-white">
              Messages
            </h3>
          </div>
          <div className="relative">
            <Input
              type="text"
              className=" w-full dark:placeholder:text-white dark:text-white bg-bgray-100 dark:bg-darkblack-500 border-0 focus:border focus:border-success-300 focus:ring-0 rounded-lg py-3.5 pl-12"
              label="Search Message"
            />
          </div>
        </header>
        <div className="pt-6">
          <div>
            <ul className="pt-2 divide-y divide-bgray-300 dark:divide-darkblack-400">
              <li className="p-3.5 flex justify-between hover:bg-bgray-100 hover:dark:bg-darkblack-500 hover:rounded-lg transition-all cursor-pointer">
                <div className="flex space-x-3 grow">
                  <div className="relative">
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
              src="https://lh3.googleusercontent.com/a/ACg8ocI9KP1WyhE4zyejd4hv7WgtMm4zKgDavXFqiTxByfZkorw=s96-c"
              alt=""
            />
            <span className="bg-gray-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
          <div className="w-14 h-14 relative">
            <img src="/assets/u-8-a1880bc7.png" alt="" />
            <span className="bg-success-300 dark:border-bgray-900 border-2 border-white block w-[14px] h-[14px] rounded-full absolute bottom-1 right-0" />
          </div>
        </div>
      </div>
      <div className="2xl:col-span-9 xl:col-span-8 dark:bg-darkblack-500 lg:col-span-7 col-span-12 relative h-[70svh]">
        <header className="bg-white dark:bg-darkblack-600 p-5 lg:pr-24 flex justify-between items-center border-t border-bgray-300 dark:border-darkblack-400">
          <div className="flex space-x-3">
            <div className="relative">
              <Badge color="green">
                <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocI9KP1WyhE4zyejd4hv7WgtMm4zKgDavXFqiTxByfZkorw=s96-c" />
              </Badge>
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
                <Avatar
                  src="https://lh3.googleusercontent.com/a/ACg8ocI9KP1WyhE4zyejd4hv7WgtMm4zKgDavXFqiTxByfZkorw=s96-c"
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
              <div className="p-3 bg-success-300 rounded-r-lg rounded-b-lg dark: text-sm font-medium max-w-sm">
                Hi, how can I help you with?
              </div>
              <div>
                <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocI9KP1WyhE4zyejd4hv7WgtMm4zKgDavXFqiTxByfZkorw=s96-c" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-11 px-5 lg:mb-0 mb-5 w-full">
          <div>
          </div>
          <div className="flex justify-end mt-4 gap-4">
            <Input labal="Type Message" type="text" />
            <Button
              aria-label="none"
              name="button"
              color="green"
              className="rounded-lg flex items-center justify-center px-4 py-2.5 font-semibold text-sm gap-1.5"
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminChat;
