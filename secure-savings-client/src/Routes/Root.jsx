import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import ChatBox from "../components/ChatBox";

const Root = () => {
  const authInfo = useContext(AuthContext);

  return (
    // toggle theme bg color
    <div className="dark:bg-[#003e5b]">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
      {authInfo.user && <ChatBox />}
    </div>
  );
};

export default Root;
