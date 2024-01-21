import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import "./ClientsStyle.css";

const Clients = () => {
  const [ClientData, setClientData] = useState([]);

  useEffect(() => {
    fetch("clientsData.json")
      .then((res) => res.json())
      .then((data) => setClientData(data));
  }, []);

  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[80svh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80")',
            backgroundAttachment: "fixed",
          }}
        >
          <span className="w-full h-full absolute opacity-75 bg-black" />
        </div>
        <div className="container lg:px-20 relative mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
          {ClientData.map((person) => (
            <Card key={person.name} className="dark:bg-dark">
              <CardHeader floated={false} className="h-72">
                <img
                  className="object-cover w-full h-full"
                  src={person?.image}
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center ">
                <div className="mb-2 dark:text-darkText">{person.name}</div>
                <div className="font-medium dark:text-darkText">
                  {person.role}
                </div>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <div className="flex gap-4">
                  <ul className="wrapper">
                    <li className="icon facebook">
                      <a
                        href="https://www.facebook.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="tooltip">Facebook</span>
                        <span>
                          <i className="fab fa-facebook-f"></i>
                        </span>
                      </a>
                    </li>
                    <li className="icon instagram">
                      <a
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="tooltip">Instagram</span>
                        <span>
                          <i className="fab fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li className="icon youtube">
                      <a
                        href="https://www.youtube.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="tooltip">YouTube</span>
                        <span>
                          <i className="fab fa-youtube"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style={{ transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Clients;
