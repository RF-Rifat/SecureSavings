import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    // toggle theme bg color
    <div className="dark:bg-[#003e5b]">
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
