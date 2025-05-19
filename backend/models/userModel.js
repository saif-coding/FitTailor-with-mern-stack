const mongoose = require("mongoose");
const joi = require("joi");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, minLength: 4, required: true },
    email: { type: String, required: true },
    password: { type: String, minLength: 8, required: true },
    profileImage: {
      type: String,
      default: "", // path or url
    },
  },
  { timestamps: true }
);

function registeValidate(data) {
  let schema = joi.object({
    name: joi.string().min(4).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });
  const { error } = schema.validate(data);
  return error;
}
const UserModel = mongoose.model("User", userSchema);
module.exports = { UserModel, registeValidate };
