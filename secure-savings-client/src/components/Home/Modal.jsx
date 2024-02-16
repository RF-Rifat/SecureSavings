/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { AdminDataContext } from "../../Context/AdminProvider";
import { modifyData } from "../../Hooks/Api";
import toast from "react-hot-toast";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { IoShieldCheckmark } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";

const data = [
  {
    label: "Saving",
    value: "Saving",
    icon: Square3Stack3DIcon,
    desc: `A savings account is designed for individuals who want to set aside money for future use.`,
  },
  {
    label: "Checking",
    value: "Checking",
    icon: IoShieldCheckmark,
    desc: `A checking account is a basic banking account that allows you to deposit and withdraw money for everyday transactions.`,
  },
  {
    label: "Money Market",
    value: "Money Market",
    icon: GiMoneyStack,
    desc: `A money market account is a type of savings account that usually offers higher interest rates than traditional savings accounts.`,
  },
];

export default function Modal({ open, handler }) {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser } = authInfo;
  const { _id, email, name } = LoggedUser[0] || {};

  const generateAccountID = () => {
    const firstFewLettersEmail = email.substring(0, 4);

    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${firstFewLettersEmail}${randomNumbers}`;
  };

  const [accountType, setAccountType] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");

  const handleCreateAccount = async () => {
    const newAcc = {
      accountType,
      accountId: generateAccountID(),
      userId: _id,
      balance: parseFloat(initialDeposit) || 500, // Default balance or user input
      status: "pending",
    };
    try {
      const res = await modifyData("/api/account", "POST", newAcc);
      if (res.accountId) {
        console.log(res && res.success);
        toast.success(`Your ${accountType} account created successfully`);
        handler(!open);
      }
    } catch (error) {
      // console.log(error);
      toast.error(
        `You Already have ${accountType} account so can't create another.`
      );
      handler(!open);
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
        <Tabs value="Saving">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
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
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-2 font-medium"
                    >
                      Initial Deposit
                    </Typography>
                    <Input
                      type="number"
                      color="blue"
                      placeholder="Initial Deposit"
                      onChange={(e) => setInitialDeposit(e.target.value)}
                    />
                  </div>
                  <Button className="col-span-2" onClick={handleCreateAccount}>
                    Create Account
                  </Button>
                </form>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}
