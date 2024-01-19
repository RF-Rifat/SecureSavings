import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";
import MyWallet from "../components/ChatBox";

const Root = () => {
  return (
    // toggle theme bg color
    <div className="dark:bg-[#003e5b]">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
      <MyWallet />
    </div>
  );
};

export default Root;
