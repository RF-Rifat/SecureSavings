import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function DashboardFooter() {
  return (
    <footer className="flex px-3 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Secure-Savings
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <Link to={"aboutUs"}>
          <Typography
            as="div"
            
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </Link>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <Link to={"/contact"}>
          <Typography
            as="div"
        
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </Link>
      </ul>
    </footer>
  );
}
