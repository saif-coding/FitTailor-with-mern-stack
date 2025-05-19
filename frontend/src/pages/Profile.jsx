import React, { useContext, useState, useRef } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
const Profile = () => {
  const imagef = useRef();
  const [file, setFile] = useState(null);
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
      alert("Profile picture updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed.");
    }
  };
  return (
    <div className="max-w-3xl mx-auto border mt-8 h-[400px] px-4 py-8">
      <div className="bg-white flex-col shadow-lg rounded-xl p-6 h-full sm:flex  gap-6">
        <div className=" relative flex items-center justify-between sm:mx-0 w-full">
          <img
            onClick={(e) => imagef.current.click()}
            src={userData?.profileImage}
            alt="Profile"
            className="h-32 w-32 rounded-full object-cover border-4 border-[#3CB4AC]"
          />
          <p className=" text-4xl font-bold absolute top-12 text-blue-600 left-22">
            +
          </p>
          <div className="w-40 h-32 text-white flex flex-col gap-8 justify-center rounded-lg">
            <input
              ref={imagef}
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="border px-4 py-2 "
            />
            <button
              disabled={!file}
              onClick={handleUpload}
              className="bg-[#3CB4AC] text-white px-1 w-36 text-sm py-2 rounded hover:bg-[#16fef4] hover:text-black"
            >
              Upload Profile Image
            </button>
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
