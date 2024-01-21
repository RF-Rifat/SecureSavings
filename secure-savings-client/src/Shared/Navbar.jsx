import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Drawer,
  Badge,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  InboxArrowDownIcon,
  Bars3Icon,
  ChatBubbleLeftEllipsisIcon,
  CurrencyBangladeshiIcon,
  UserPlusIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import ToggleTheme from "../components/ToggleTheme";
import useAuth from "../Hooks/useAuth";
import { LuLayoutDashboard } from "react-icons/lu";

function ProfileMenu() {
  // const  authInfo  = useContext(AuthProvider);
  const { authInfo } = useAuth();

  const { logOut } = authInfo || {};

  const { displayName, photoURL, email } = authInfo?.user || {};

  const profileMenuItems = [
    {
      label: `${displayName}`,
      link: "/",
      icon: UserCircleIcon,
    },
    {
      label: `${email}`,
      link: "/",
      icon: InboxArrowDownIcon,
    },
    {
      label: "DashBoard",
      link: "/dashboard/home",
      icon: LuLayoutDashboard,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-sm py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Badge color="green" className="m-1">
            <Avatar
              variant="circular"
              size="sm"
              alt="Profile img"
              className="border border-gray-900 p-0.5 w-10 h-10"
              src={
                photoURL
                  ? photoURL
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }
            />
          </Badge>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, link }) => {
          return (
            <Link to={link} key={label}>
              <MenuItem
                onClick={closeMenu}
                className="flex items-center gap-2 rounded"
              >
                {React.createElement(icon, {
                  className: `h-4 w-4`,
                  strokeWidth: 2,
                })}
                <Typography as="span" variant="small" className="font-normal">
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
        <button
          onClick={logOut}
          role="menuitem"
          className="w-full pt-[9px] pb-2 px-3 text-start leading-tight cursor-pointer select-none transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none flex items-center gap-2  hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-4 w-4 text-red-500"
            strokeWidth="2"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="block antialiased font-sans text-sm leading-normal text-red-500 font-normal">
            Sign Out
          </span>
        </button>
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Home",
    link: "",
    icon: UserCircleIcon,
  },
  {
    label: "Saving",
    link: "saving",
    icon: CurrencyBangladeshiIcon,
  },
  {
    label: "About Us",
    link: "aboutUs",
    icon: UserPlusIcon,
  },
  {
    label: "Blog",
    link: "blog",
    icon: WalletIcon,
  },
  {
    label: "Contact",
    link: "contact",
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, link }) => (
        <NavLink
          to={`/${link}`}
          key={label}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active bg-dark text-white rounded"
              : ""
          }
        >
          <div className="font-medium text-lg text-center">
            <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
              {React.createElement(icon, {
                className:
                  "h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center",
              })}{" "}
              <span
                className={`pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full`}
              >
                {" "}
                {label}
              </span>
            </div>
          </div>
        </NavLink>
      ))}
    </ul>
  );
}

export function ComplexNavbar() {
  const { authInfo } = useAuth();
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <nav className="max-w-screen-2xl bg-white dark:bg-primary dark:text-darkText mx-auto z-50 w-full p-2 lg:pl-6 sticky h-20 top-0 rounded-b-md">
        <div className="mx-auto">
          <div className="mx-auto flex items-center justify-between gap-3">
            <Link
              as="a"
              to={"/"}
              className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
            >
              <img className="h-12" src="./logo.png" alt="logo" />
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              size="sm"
              // color="black-gray"
              variant="text"
              onClick={openDrawer}
              className="ml-auto mr-2 lg:hidden"
            >
              <Bars3Icon className={open ? "h-6 w-6 rotate-90" : "h-6 w-6"} />
            </IconButton>

            <div className="flex gap-3 items-center">
              {/* toggle button */}
              <ToggleTheme></ToggleTheme>
              <Link to={"/login"}>
                {!authInfo?.user && (
                  <Button color="green">
                    <span>Log In</span>
                  </Button>
                )}
              </Link>
              {authInfo?.user && <ProfileMenu />}
            </div>
          </div>
        </div>
      </nav>

      {/* drawer */}

      <Drawer
        open={open}
        onClose={closeDrawer}
        className={`p-4 lg:hidden dark:bg-blue-gray-700 dark:text-white`}
      >
        <div className="mb-6 flex items-center justify-between">
          <Link
            to={"/"}
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            <img className="h-20" src="/logo.png" alt="logo" />
          </Link>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* <NavList></NavList> */}
        {/* drawer navbar */}
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
          <NavLink
            aria-current="page"
            className="active bg-dark text-white rounded"
            href="/"
          >
            <div className="font-medium text-lg text-center">
              <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full">
                  {" "}
                  Home
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink className="" href="/saving">
            <div className="font-medium text-lg text-center">
              <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75ZM10.5 7.963a1.5 1.5 0 0 0-2.17-1.341l-.415.207a.75.75 0 0 0 .67 1.342L9 7.963V9.75h-.75a.75.75 0 1 0 0 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0 0 16.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 1 0 0 1.5h.656a3.002 3.002 0 0 1-4.327 1.893.113.113 0 0 1-.045-.051.336.336 0 0 1-.034-.154V11.25h5.25a.75.75 0 0 0 0-1.5H10.5V7.963Z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
                <span className="pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full">
                  {" "}
                  Saving
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink className="" href="/aboutUs">
            <div className="font-medium text-lg text-center">
              <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center"
                >
                  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>{" "}
                <span className="pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full">
                  {" "}
                  About Us
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink className="" href="/blog">
            <div className="font-medium text-lg text-center">
              <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center"
                >
                  <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                </svg>{" "}
                <span className="pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full">
                  {" "}
                  Blog
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink className="" href="/contact">
            <div className="font-medium text-lg text-center">
              <div className="flex items-center gap-1 lg:rounded-full hover:bg-none mt-2 mb-4  flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-[18px] w-[18px] antialiased font-sans text-gray-700 font-medium text-lg text-center"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="pt-[9px] pb-2 rounded-md text-start leading-tight cursor-pointer select-none transition-all outline-none items-center lg:rounded-full">
                  Contact
                </span>
              </div>
            </div>
          </NavLink>
        </ul>

        {/* drawer navbar */}

        {!authInfo?.user && (
          <div className="flex gap-2">
            <Button variant="outlined">SIGN UP</Button>
            <Button color="blue">
              <span>Log In</span>
            </Button>
          </div>
        )}
      </Drawer>
    </>
  );
}
