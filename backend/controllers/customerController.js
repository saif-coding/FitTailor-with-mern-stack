const customerModel = require("../models/customerModel");

const addCustomer = async (req, res) => {
  const userId = req.user.userId;
  try {
    const {
      name,
      email,
      phone,
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
      name,
      email,
      phone,
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
      user: userId,
    });
    await customer.save();
    return res.status(201).json({ message: "customer added successfuly" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "customer not created" });
  }
};

const getAllCustomer = async (req, res) => {
  const userId = req.user.userId;
  try {
    const allCustomer = await customerModel
      .find({ user: userId })
      .sort({ createdAt: -1 });
    return res.status(200).json(allCustomer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const getSingleCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await customerModel.findById(id);
    if (!customer)
      return res.status(404).json({ message: "customer not found" });
    res.json(customer);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const markAsComplete = async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const updatedCustomer = await customerModel.findByIdAndUpdate(
      id,
      { status: "complete" },
      { new: true }
    );

    res.status(200).json({
      message: "Customer marked as complete",
      customer: updatedCustomer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating status" });
  }
};

const updateSingleCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      email,
      phone,
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
    const update = await customerModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phone,
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
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Customer details updated", customer: update });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

const deleteSingleCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const deleting = await customerModel.findByIdAndDelete(id);
    if (!deleting) {
      return res.status(400).json({ message: "customer is not found" });
    }
    res.status(200).json({ message: "customer delete" });
  } catch (error) {
    res.status(500).json({ message: "delete failed" });
  }
};

module.exports = {
  addCustomer,
  getAllCustomer,
  getSingleCustomer,
  markAsComplete,
  updateSingleCustomer,
  deleteSingleCustomer,
};
