const express = require("express");
const auth = require("../middlewares/varifyToken");
const upload = require("../middlewares/multer");
const router = express.Router();
const {
  registeUser,
  loginUser,
  userLogout,
  getSingleUser,
  uploadProfilePicture,
} = require("../controllers/userController");

router.post("/register", registeUser);
router.post("/login", loginUser);
router.post("/logout", userLogout);
router.get("/singleuser", auth, getSingleUser);
router.put("/upload", auth, upload.single("profileImage"), uploadProfilePicture);

module.exports = router;
