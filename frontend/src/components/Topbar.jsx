import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { CustomerContext } from "../context/CustomerContext";
function Topbar() {
  const { userData } = useContext(UserContext);
  const { setSearch } = useContext(CustomerContext);
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          type="text"
          placeholder="Enter name OR phone"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.836 10.615 15 14.695"
            stroke="#7A7B7D"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            clip-rule="evenodd"
            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
            stroke="#7A7B7D"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center gap-4">
        <Link to={"/customer"}>
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
