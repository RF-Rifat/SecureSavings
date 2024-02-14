import { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { AdminDataContext } from "../../Context/AdminProvider";

export default function Modal() {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser, isAdmin } = authInfo;
  const { name, email } = LoggedUser[0] || {};
  console.log(name, email);

  const generateAccountID = () => {
    const firstThreeLetters = email.substring(0, 3);
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${firstThreeLetters}${name}${randomNumbers}`;
  };

  const [accountType, setAccountType] = useState("");

  const handleCreateAccount = () => {
    console.log("Creating account...", accountType);
    // Now you can send userData to your backend for saving
  };

  return (
    <Card>
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <Typography variant="h5" color="white">
          Create Account
        </Typography>
      </CardHeader>
      <CardBody>
        <form className="mt-4 grid gap-4 grid-cols-2">
         
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Account Type
            </Typography>
            <Select
              color="blue"
              label="Select Version"
              onChange={(e) => setAccountType(e)}
            >
              <Option value="checking">Checking</Option>
              <Option value="savings">Savings</Option>
            </Select>
          </div>
          
          <Button className="col-span-2" onClick={handleCreateAccount}>
            Create Account
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
