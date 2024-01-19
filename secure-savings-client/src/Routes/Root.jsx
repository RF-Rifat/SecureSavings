import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";
import MyWallet from "../components/ChatBox";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const Root = () => {
  const authInfo = useContext(AuthContext);

  return (
    // toggle theme bg color
    <div className="dark:bg-[#003e5b]">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
      {authInfo.user && <MyWallet />}
    </div>
  );
};

export default Root;
