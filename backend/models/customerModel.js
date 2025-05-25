const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    length: { type: String },
    chest: { type: String },
    shoulder: { type: String },
    neck: { type: String },
    sleeve: { type: String },
    shalwar: { type: String },
    pancha: { type: String },
    waist: { type: String },
    celler: { type: String },
    frontpocket: { type: String },
    leftpocket: { type: String },
    rightpocket: { type: String },
    jents: { type: String },
    daman: { type: String },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "complete"],
      default: "pending",
    },
    dressImages: {
      type: [String], // Array of image URLs
      default: [],
    },
    payments: {
      type: [Number], // Array of payment amounts
      default: [],
    },
  },
  { timestamps: true }
);
const CustomerModel = mongoose.model("Customer", customerSchema);
module.exports = CustomerModel;
