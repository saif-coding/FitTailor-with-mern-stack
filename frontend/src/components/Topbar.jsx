import React, { useContext } from "react";
import { FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
function Topbar() {
  const { userData } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <button className="cursor-pointer px-4 py-2 bg-[#3CB4AC] hover:bg-[#16fef4] hover:text-black hover:border-black border transition text-white rounded-full">
            Add Customer
          </button>
        </Link>
        {/* <FiBell className="text-xl text-gray-600" /> */}
        <img
          src={userData.profileImage}
          alt="Admin"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Topbar;
