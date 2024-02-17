/* eslint-disable react/prop-types */
import { useState } from "react";
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
const SpringModal = ({ setOpenModal, openModal }) => {
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
    cardType: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    creditLimit: "",
    availableCredit: "",
    dateOfIssuance: "",
    cardStatus: "Active",
    cardholderAgreementAcceptance: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // try {
    //   const response = await fetch("YOUR_BACKEND_ENDPOINT_HERE", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log("Form submitted successfully!");
    //   } else {
    //     console.error("Failed to submit form.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
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
                    {data.map(({ value, desc }) => (
                      <div key={value}>
                        <TabPanel value={value}>
                          {desc.desc}
                          <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                              <Input
                                name="cardType"
                                label="Card Type"
                                value={formData.cardType}
                                onChange={handleChange}
                                fullWidth
                              />
                              <Input
                                name="cardNumber"
                                label="Card Number"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                fullWidth
                              />
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
                              <Input
                                name="dateOfIssuance"
                                label="Date of Issuance"
                                type="date"
                                value={formData.dateOfIssuance}
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
                            <Button
                              type="submit"
                              onClick={() => handleFormSubmit(value)}
                              color="blue"
                              fullWidth
                            >
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
