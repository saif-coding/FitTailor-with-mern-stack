const mongoose = require("mongoose");

const dressAndPriceSchema = new mongoose.Schema(
  {
    dressImages: {
      type: [String], // Array of image URLs or filenames
      default: [],
    },
    payments: {
      type: [Number], // Array of payments (prices)
      default: [],
    },
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
  },
  { timestamps: true }
);

const DressModel = mongoose.model("Dress", dressAndPriceSchema);
module.exports = DressModel;
