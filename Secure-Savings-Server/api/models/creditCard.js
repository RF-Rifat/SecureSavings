const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const creditCardSchema = new Schema({
  expiryDate: { type: Date, required: true },
  cvv: { type: String, required: true },
  creditLimit: { type: Number, required: true },
  availableCredit: { type: Number, required: true },
  cardStatus: {
    type: String,
    enum: ["Active", "Inactive", "Lost/Stolen"],
    required: true,
  },
  cardholderAgreementAcceptance: { type: Boolean, required: true },
  cardNumber: { type: String, required: true },
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

module.exports = CreditCard;
