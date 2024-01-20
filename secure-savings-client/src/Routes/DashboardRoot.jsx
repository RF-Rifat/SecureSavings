import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Outlet } from "react-router-dom";
import ChatBox from "../components/ChatBox";
import SideNav from "../DashBoard/SideBar/SideBar";

const DashboardRoot = () => {
  const authInfo = useContext(AuthContext);

  return (
    // toggle theme bg color
    <div className="dark:bg-[#003e5b] dark:text-white">
      <SideNav />
      <Outlet></Outlet>
      {authInfo.user && <ChatBox />}
    </div>
  );
};

export default DashboardRoot;
