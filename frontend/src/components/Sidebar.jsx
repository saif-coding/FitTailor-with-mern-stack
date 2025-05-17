import React from "react";
import { FiHome, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="bg-gray-900 text-white h-screen w-64 p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-10">Tailor Admin</h1>
      <nav className="space-y-4">
        <a href="#" className="flex items-center gap-3 hover:text-indigo-500">
          <FiHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-indigo-500">
          <FiUsers /> Customers
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-indigo-500">
          <FiSettings /> Settings
        </a>
        <a
          href="#"
          className="flex items-center gap-3 hover:text-indigo-500 mt-10"
        >
          <FiLogOut /> Logout
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
