const express = require("express");
const auth = require("../middlewares/varifyToken");
const {
  addCustomer,
  getAllCustomer,
  getSingleCustomer,
  markAsComplete,
} = require("../controllers/customerController");
const customerRoute = express.Router();

customerRoute.post("/add", auth, addCustomer);
customerRoute.get("/getallcustomer", auth, getAllCustomer);
customerRoute.get("/getsinglecustomer/:id", auth, getSingleCustomer);
customerRoute.put("/status/:id", markAsComplete);

module.exports = customerRoute;
