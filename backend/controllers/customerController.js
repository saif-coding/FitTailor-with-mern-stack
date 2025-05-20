const customerModel = require("../models/customerModel");

const addCustomer = async (req, res) => {
  try {
    const {
      length,
      chest,
      shoulder,
      neck,
      sleeve,
      shalwar,
      pancha,
      waist,
      celler,
      frontpocket,
      leftpocket,
      rightpocket,
      jents,
      daman,
    } = req.body;
    const customer = new customerModel({
      length,
      chest,
      shoulder,
      neck,
      sleeve,
      shalwar,
      pancha,
      waist,
      celler,
      frontpocket,
      leftpocket,
      rightpocket,
      jents,
      daman,
    });
    await customer.save();
    return res.status(201).json({ message: "customer added successfuly" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "customer not created" });
  }
};

module.exports = { addCustomer };
