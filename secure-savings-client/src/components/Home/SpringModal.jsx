/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import {
  Input,
  Select,
  Option,
  Button,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaCopy, FaKey } from "react-icons/fa";
import useCreditCardGenerator from "../../Hooks/generateCardNumber";

const SpringModal = ({ setOpenModal, openModal }) => {
  const { generateCreditCardNumber } = useCreditCardGenerator();
  const [cardNumber, setCardNumber] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const data = [
    {
      label: "Master Card",
      value: "MasterCard",

      desc: {
        amount: [1000, 1500, 2250, 3000],
        desc: "A savings account is designed for individuals who want to set aside money for future use, such as emergencies, large purchases, or long-term goals.",
      },
    },
    {
      label: "Visa",
      value: "Visa",

      desc: {
        amount: [2000, 3000, 5000, 10000],
        desc: "A checking account is a basic banking account that allows you to deposit and withdraw money for everyday transactions.",
      },
    },
    {
      label: "American Express",
      value: "American Express",

      desc: {
        amount: [10000, 15000, 22500, 30000],
        desc: "A money market account is a type of savings account that usually offers higher interest rates than traditional savings accounts.",
      },
    },
  ];
  const [formData, setFormData] = useState({
    expiryDate: "",
    cvv: "",
    creditLimit: "",
    availableCredit: "",
    cardStatus: "Active",
    cardholderAgreementAcceptance: false,
  });

  useEffect(() => {
    setFormData({
      ...formData,
      cardNumber,
    });
  }, [cardNumber, formData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
      cardNumber,
    });
  };

  const handleGenerateNewNumbers = (type) => {
    if (type === "MasterCard") {
      setCardNumber(generateCreditCardNumber(4, 16));
    } else if (type === "Visa") {
      setCardNumber(generateCreditCardNumber(5, 16));
    } else {
      setCardNumber(generateCreditCardNumber(37, 15));
    }
  };
  const handleCopyCardNumber = () => {
    const tempInput = document.createElement("input");
    tempInput.value = cardNumber;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };
  useEffect(() => {
    if (copySuccess) {
      toast.success("Card Number Copied in your clipboard");
    }
  }, [copySuccess]);
  const handleFormSubmit = async (type) => {
    console.log(type, formData);
    // try {
    //   const response = await fetch("YOUR_BACKEND_API_URL", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ type, formData }),
    //   });

    //   if (response.ok) {
    //     console.log("Form submitted successfully!");
    //     // Optionally, you can handle success feedback or redirect the user
    //   } else {
    //     console.error("Failed to submit form.");
    //     // Optionally, you can handle error feedback to the user
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // Optionally, you can handle error feedback to the user
    // }
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
          openModal ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-black bg-opacity-50`}
      >
        <div
          className="bg-white rounded-lg overflow-hidden max-w-xl w-full"
          onClick={handleFormClick}
        >
          <div className="px-4 py-6">
            <CardHeader
              color="gray"
              floated={false}
              shadow={false}
              className="m-0 grid place-items-center px-4 py-8 text-center"
            >
              <Typography variant="h5" color="white">
                Credit Card Information
              </Typography>
            </CardHeader>

            <div>
              <CardBody className="px-2">
                <Tabs value="MasterCard">
                  <TabsHeader>
                    {data.map(({ label, value }) => (
                      <Tab key={value} value={value}>
                        <div className="flex items-center gap-2">{label}</div>
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody
                    animate={{
                      initial: { y: 250 },
                      mount: { y: 0 },
                      unmount: { y: 250 },
                    }}
                  >
                    {data.map(({ value }) => (
                      <div key={value}>
                        <TabPanel value={value}>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              handleFormSubmit(value);
                            }}
                          >
                            <div className="grid grid-cols-2 gap-4">
                              <Button
                                variant="outlined"
                                color="blue-gray"
                                name="cardNumber"
                                label="Card Number"
                                onChange={handleChange}
                                fullWidth
                                size="sm"
                                icon={FaCopy}
                                onClick={handleCopyCardNumber}
                              >
                                <div className="relative flex items-center gap-1 overflow-hidden pr-[60px]">
                                  <span className="text-base whitespace-nowrap md:ml-3">
                                    {/* {cardNumber
                                      ? cardNumber
                                      : "4455.............9191"} */}
                                    {cardNumber || "4455.............9191"}
                                  </span>
                                  <span className="absolute right-0 text-lg md:right-3 grid h-full w-8 place-items-center">
                                    <FaCopy />
                                  </span>
                                </div>
                              </Button>
                              <Button
                                size="sm"
                                variant="gradient"
                                color="light-blue"
                                className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                                onClick={() => handleGenerateNewNumbers(value)}
                              >
                                Generate Card Numbers
                                <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                                  <FaKey />
                                </span>
                              </Button>
                              <Input
                                name="expiryDate"
                                label="Expiry Date"
                                type="date"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                fullWidth
                              />
                              <Input
                                name="cvv"
                                label="CVV/CVC Code"
                                value={formData.cvv}
                                onChange={handleChange}
                                fullWidth
                              />
                              <Input
                                name="creditLimit"
                                label="Credit Limit"
                                value={formData.creditLimit}
                                onChange={handleChange}
                                fullWidth
                              />
                              <Input
                                name="availableCredit"
                                label="Available Credit"
                                value={formData.availableCredit}
                                onChange={handleChange}
                                fullWidth
                              />

                              <Select
                                name="cardStatus"
                                label="Card Status"
                                value={formData.cardStatus}
                                onChange={handleChange}
                                fullWidth
                              >
                                <Option value="Active">Active</Option>
                                <Option value="Inactive">Inactive</Option>
                                <Option value="Lost/Stolen">Lost/Stolen</Option>
                              </Select>
                              <div className="col-span-2 mb-3">
                                <label className="flex items-center">
                                  <input
                                    type="checkbox"
                                    name="cardholderAgreementAcceptance"
                                    checked={
                                      formData.cardholderAgreementAcceptance
                                    }
                                    onChange={handleChange}
                                    className="mr-2"
                                  />
                                  <span className="text-sm">
                                    I agree to the terms and conditions
                                  </span>
                                </label>
                              </div>
                            </div>

                            <Button type="submit" color="blue" fullWidth>
                              Submit
                            </Button>
                          </form>
                        </TabPanel>
                      </div>
                    ))}
                  </TabsBody>
                </Tabs>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringModal;
