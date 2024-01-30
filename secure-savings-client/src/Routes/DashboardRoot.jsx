import { useContext } from "react";

import ChatBox from "../components/ChatBox";
import DashboardNavbar from "../DashBoard/DashBoard_Shared/DashboardNavbar";
import SideNav from "../DashBoard/SideBar/SideBar";
import { DashboardFooter } from "../DashBoard/DashBoard_Shared/DashboardFooter";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../Authentication/AuthProvider";

const Root = () => {
  const authInfo = useContext(AuthProvider);

  return (
    // toggle theme bg color
    <div className="min-h-screen bg-blue-gray-50/50 grid dark:bg-dark dark:text-darkText !mx-auto w-full">
      <SideNav />

      <div className="p-4 xl:ml-[300px] max-w-7xl">
        <div className="h-44 md:h-28">
          <DashboardNavbar />
        </div>
        <Outlet />
        <div className="text-blue-gray-600">
          <DashboardFooter />
          {authInfo.user && <ChatBox />}
        </div>
      </div>
    </div>
  );
};

export default Root;
