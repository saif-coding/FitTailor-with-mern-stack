const { UserModel, registeValidate } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const uploadCloudinary = require("../middlewares/Cloudinary");
const sendEmail = require("../middlewares/nodemailer");
const crypto = require("crypto");

const registeUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let error = registeValidate({ name, email, password });
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already avilable" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashpassword,
    });
    newUser.save();
    return res.status(201).json({ message: "user register succssfuly " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "failed to register user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email is wrong" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "password is wrong" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({ message: "login successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "login error" });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "logout error" });
  }
};

const getSingleUser = async (req, res) => {
  const userId = req.user.userId;
  try {
    const user = await UserModel.findById(userId).select("-password");
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log("Error getting user:", error.message);
    res.status(500).json({ message: "Server error while getting user" });
  }
};

const uploadProfilePicture = async (req, res) => {
  try {
    const userId = req.user.userId;
    const imagePath = await uploadCloudinary(req.file.path);
    const user = await UserModel.findByIdAndUpdate(
      userId,
      { profileImage: imagePath },
      { new: true }
    );
    res.status(200).json({
      message: "Profile picture uploaded successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Image upload failed" });
  }
};

// 🔑 Forgot Password Route
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    const html = `
      <h3>Password Reset Request</h3>
      <p>Click the link to reset your password:</p>
      <Link>${resetLink}</Link>
      <p>Link expires in 1 hour.</p>
    `;

    await sendEmail({ to: user.email, subject: "Reset Your Password", html });

    res.status(200).json({ message: "Password reset email sent!" });
  } catch (error) {
    console.error("Error in forgot-password:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;
  try {
    const user = await UserModel.findOne({
      resetToken: token,
      resetExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    user.password = newPassword; // Will be hashed automatically
    user.resetToken = undefined;
    user.resetExpires = undefined;
    await user.save();

    res.json({ message: "Password reset successful!" });
  } catch (error) {
    console.error("Error in reset-password:", error);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  registeUser,
  loginUser,
  userLogout,
  getSingleUser,
  uploadProfilePicture,
  forgotPassword,
  resetPassword,
};
