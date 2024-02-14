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

  const [userData, setUserData] = useState({
    email: email,
    fullName: name,
    dateOfBirth: "",
    address: "",
    account_id: generateAccountID(),
    account_type: "",
    balance: 0,
  });

  const handleCreateAccount = () => {
    console.log("Creating account...", userData);
    // Now you can send userData to your backend for saving
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith("accounts")) {
      const updatedAccounts = [...userData.accounts];
      updatedAccounts[index][name.split(".")[1]] = value;
      setUserData((prevData) => ({
        ...prevData,
        accounts: updatedAccounts,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
              Email
            </Typography>
            <Input
              type="email"
              name="email"
              placeholder="name@mail.com"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          {/* Other input fields */}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Account Type
            </Typography>
            <Select
              name="account_type"
              value={userData.account_type}
              onChange={handleInputChange}
            >
              <Option value="">Select Account Type</Option>
              <Option value="checking">Checking</Option>
              <Option value="savings">Savings</Option>
              {/* Add more account types as needed */}
            </Select>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Balance
            </Typography>
            <Input
              type="number"
              name="balance"
              placeholder="Balance"
              value={userData.balance}
              onChange={handleInputChange}
            />
          </div>
          <Button className="col-span-2" onClick={handleCreateAccount}>
            Create Account
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
