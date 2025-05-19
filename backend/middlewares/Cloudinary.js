const { v2: cloudinary } = require("cloudinary"); // ✅ Fixed
const fs = require("fs");
// Configuration
const uploadCloudinary = async (filepath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
  });
  try {
    if (!filepath) {
      return null;
    }
    const result = await cloudinary.uploader.upload(filepath);
    fs.unlinkSync(filepath);
    return result.secure_url;
  } catch (error) {
    fs.unlinkSync(filepath);
    console.log("Error uploading to Cloudinary:", error);
  }
};

module.exports = uploadCloudinary;