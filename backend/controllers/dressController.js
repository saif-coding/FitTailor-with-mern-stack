const DressModel = require("../models/dressModel");
const uploadCloudinary = require("../middlewares/Cloudinary");
const path = require("path");

const addDressAndPrice = async (req, res) => {
  const { payments } = req.body;
  const userId = req.user.userId;

  try {
    const imagePath = await uploadCloudinary(req.file.path);
    const dress = new DressModel({
      dressImages: [imagePath],
      payments,
      user: userId,
    });
    await dress.save();
    return res
      .status(201)
      .json({ message: "dress and price added successfuly", dress });
  } catch (error) {
    res.status(500).json({ message: "Error of add dress and price " });
  }
};

module.exports = { addDressAndPrice };
