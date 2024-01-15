import { Outlet } from "react-router-dom";
import App from "../App";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
