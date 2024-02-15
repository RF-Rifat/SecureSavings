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

const data = [
  {
    label: "Saving",
    value: "Saving",
    icon: Square3Stack3DIcon,
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Checking",
    value: "Checking",
    icon: IoShieldCheckmark,
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Money Market",
    value: "Money Market",
    icon: Cog6ToothIcon,
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];

export default function Modal({ open, handler }) {
  const authInfo = useContext(AdminDataContext);
  const { LoggedUser } = authInfo;
  const { _id, email, name } = LoggedUser[0] || {};

  const generateAccountID = () => {
    const firstThreeLettersEmail = email.substring(0, 4);

    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${firstThreeLettersEmail}${randomNumbers}`;
  };

  const [accountType, setAccountType] = useState("");

  const handleCreateAccount = async () => {
    const newAcc = {
      accountType,
      accountId: generateAccountID(),
      userId: _id,
      balance: 500,
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
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        {/* <form className="mt-4 grid gap-4 grid-cols-2">
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
        </form> */}
      </CardBody>
    </Card>
  );
}
