const express = require("express");
const { addCustomer } = require("../controllers/customerController");
const customerRoute = express.Router();

customerRoute.post("/add", addCustomer);

module.exports = customerRoute;
