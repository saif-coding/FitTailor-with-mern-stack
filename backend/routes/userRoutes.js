const express = require("express");
const auth = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const sendEmail = require("../middlewares/nodemailer")
const router = express.Router();
const {
  registeUser,
  loginUser,
  userLogout,
  getSingleUser,
  uploadProfilePicture,
  forgotPassword,
  resetPassword
} = require("../controllers/userController");

router.post("/register", registeUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);
router.get("/singleuser", auth, getSingleUser);
router.put("/upload", auth, upload.single("profileImage"), uploadProfilePicture);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/email", sendEmail); //this api for email sender it working


module.exports = router;
