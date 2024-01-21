import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import ChatBox from "../components/ChatBox";
import DashboardNavbar from "../DashBoard/DashBoard_Shared/DashboardNavbar";
import SideNav from "../DashBoard/SideBar/SideBar";
import { IconButton } from "@material-tailwind/react";
import { setOpenConfigurator, useMaterialTailwindController } from "../Context";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

const Root = () => {
  const authInfo = useContext(AuthContext);
  const [controller, dispatch] = useMaterialTailwindController();

  return (
    // toggle theme bg color
    <div className="min-h-screen bg-blue-gray-50/50 grid">
      <SideNav />

      <div className="p-4 border-2 ">
        <div className="border-2 xl:ml-[300px]">
          <DashboardNavbar />
        </div>

        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>

        <div className="text-blue-gray-600">
          <Footer />
          {authInfo.user && <ChatBox />}
        </div>
      </div>
    </div>
  );
};

export default Root;
