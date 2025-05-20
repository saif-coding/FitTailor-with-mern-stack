const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
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

    // Add status field to track progress
    status: {
      type: String,
      enum: ["pending", "complete"],
      default: "pending",
    },
  },
  { timestamps: true }
);
const CustomerModel = mongoose.model("Customer", customerSchema);
module.exports = CustomerModel;
