import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import toast from "react-hot-toast";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const imagef = useRef();
  const [file, setFile] = useState(null);
  console.log(file, "file checking");
  const { userData, setUserData } = useContext(UserContext);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/users/upload`,
        formData,
        {
          withCredentials: true,
        }
      );
      setUserData(res.data.user); // Update user data with new image
      toast.success("Profile picture updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Upload failed.");
    }
  };
  return (
    <div className="max-w-3xl mx-auto border mt-8 h-[400px] px-4 py-8">
      <div className="bg-white flex-col shadow-lg rounded-xl p-6 h-full sm:flex  gap-6">
        <div className=" relative flex items-center justify-between sm:mx-0 w-full">
          <div className="relative w-40 h-40 group rounded-full overflow-hidden cursor-pointer">
            <img
              src={userData?.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />

            {/* Overlay with Camera Icon */}
            <div
              onClick={(e) => imagef.current.click()}
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            >
              <FaCamera className="text-white text-2xl" />
            </div>
          </div>
          <div className="w-40 h-32 text-white flex flex-col gap-8 justify-center rounded-lg">
            <input
              ref={imagef}
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="border px-4 py-2 "
            />

            {file && (
              <button
                disabled={!file}
                onClick={handleUpload}
                className="bg-[#3CB4AC] text-white px-1 w-36 text-sm py-2 rounded hover:bg-[#16fef4] hover:text-black"
              >
                Upload Profile Image
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 sm:mt-0 text-center sm:text-left w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {userData?.name || "Your Name"}
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span>{" "}
            {userData?.email || "your@email.com"}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Joined:</span>{" "}
            {new Date(userData?.createdAt).toLocaleDateString() || "N/A"}
          </p>
          {/* Add more user info here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
