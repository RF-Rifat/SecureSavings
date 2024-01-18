import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <ComplexNavbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
