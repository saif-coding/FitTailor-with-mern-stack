const express = require("express");
const dressRoutes = express.Router();
const { addDressAndPrice } = require("../controllers/dressController");
const upload = require("../middlewares/multer");
const auth = require("../middlewares/varifyToken");

dressRoutes.post("/added", auth, upload.single("dressImages"), addDressAndPrice);

module.exports = dressRoutes;
