const express = require("express");
const auth = require("../middlewares/varifyToken");
const router = express.Router();
const {
  registeUser,
  loginUser,
  userLogout,
  getSingleUser,
} = require("../controllers/userController");

router.post("/register", registeUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);
router.get("/singleuser", auth, getSingleUser);

module.exports = router;
