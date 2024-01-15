import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "../Shared/Navbar";

const Root = () => {
  return (
    <div>
      <ComplexNavbar/>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
