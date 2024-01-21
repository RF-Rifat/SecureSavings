import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import ChatBox from "../components/ChatBox";
import DashboardNavbar from "../DashBoard/DashBoard_Shared/DashboardNavbar";
import SideNav from "../DashBoard/SideBar/SideBar";
import { IconButton } from "@material-tailwind/react";
import { setOpenConfigurator, useMaterialTailwindController } from "../Context";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { DashboardFooter } from "../DashBoard/DashBoard_Shared/DashboardFooter";

const Root = () => {
  const authInfo = useContext(AuthContext);
  const [dispatch] = useMaterialTailwindController();

  return (
    // toggle theme bg color
    <div className="min-h-screen bg-blue-gray-50/50 grid">
      <SideNav />

      <div className="p-4 border-2 xl:ml-[300px]">
        <div>
          <DashboardNavbar />
        </div>

        <div className="text-blue-gray-600">
          <DashboardFooter />
          {authInfo.user && <ChatBox />}
        </div>
      </div>
    </div>
  );
};

export default Root;
