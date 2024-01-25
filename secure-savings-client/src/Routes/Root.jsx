import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

import { useContext } from "react";

import ChatBox from "../components/ChatBox";
import { AuthProvider } from "../Authentication/AuthProvider";

const Root = () => {
  const authInfo = useContext(AuthProvider);

  return (
    // toggle theme bg color
    <div className="dark:bg-dark dark:text-darkText">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
      {authInfo.user && <ChatBox />}
    </div>
  );
};

export default Root;
