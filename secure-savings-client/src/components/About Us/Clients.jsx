import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

const Clients = () => {
  const [ClientData, setClientData] = useState([]);
  console.log(ClientData);

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
        <div className="container px-28 relative mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
          {ClientData.map((person) => (
            <Card  key={person.name}>
              <CardHeader floated={false} className="h-72">
                <img
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="profile-picture"
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {person.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {person.role}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <div className="flex gap-4">
                  <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <FaGoogle className="h-6 w-6" />
                  </IconButton>
                  <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                    <FaFacebook className="h-6 w-6" />
                  </IconButton>
                  <IconButton className="rounded bg-[#ea4c89] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10">
                    <FaLinkedin className="h-6 w-6" />
                  </IconButton>
                  <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
                    <FaInstagram className="h-6 w-6" />
                  </IconButton>
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
