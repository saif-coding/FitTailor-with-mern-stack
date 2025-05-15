const express = require("express");
const router = express.Router();
const { registeUser, loginUser } = require("../controllers/userController");

router.post("/register", registeUser);
router.post("/login", loginUser);

module.exports = router;
