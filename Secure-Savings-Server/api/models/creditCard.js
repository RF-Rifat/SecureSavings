const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCardSchema = new Schema({
  cardType: {
    type: String,
    enum: ["Visa", "Mastercard", "American Express"],
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  creditLimit: {
    type: Number,
    required: true,
  },
  currentBalance: {
    type: Number,
    default: 0,
  },
  availableCredit: {
    type: Number,
    required: true,
  },
  dateOfIssuance: {
    type: Date,
    required: true,
  },
  cardStatus: {
    type: String,
    enum: ["Active", "Inactive", "Lost/Stolen"],
    default: "Active",
  },
  cardholderAgreementAcceptance: {
    type: Boolean,
    required: true,
  },
  additionalServices: {
    balanceTransferAuthorization: Boolean,
    autoPayAuthorization: Boolean,
    rewardsProgramEnrollment: Boolean,
    purchaseAlertsPreferences: Boolean,
  },
  securityInformation: {
    securityQuestions: [
      {
        question: String,
        answer: String,
      },
    ],
    pin: {
      type: String,
      required: true,
    },
  },
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
