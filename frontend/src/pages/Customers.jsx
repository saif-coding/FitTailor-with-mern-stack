import React, { useContext, useState } from "react";
import one from "../assets/sizeone.png";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../context/CustomerContext";
function Customer() {
  const { customerData, setCustomerData } = useContext(CustomerContext);
  const navigate = useNavigate();

  const elements = [
    { label: "Name", name: "name", placeholder: "Name" },
    { label: "Email", name: "email", placeholder: "Email" },
    { label: "Phone", name: "phone", placeholder: "Phone" },
    { label: "Kameez Length", name: "length", placeholder: "e.g., 40 inches" },

    { label: "Chest", name: "chest", placeholder: "e.g., 38 inches" },
    {
      label: "Shoulder",
      name: "shoulder",
      placeholder: "e.g., 17 inches",
    },
    { label: "Neck", name: "neck", placeholder: "e.g., 15 inches" },
    {
      label: "Sleeve Length",
      name: "sleeve",
      placeholder: "e.g., 24 inches",
    },
    {
      label: "Waist Length",
      name: "waist",
      placeholder: "e.g., 24 inches",
    },
    {
      label: "Shalwar Length",
      name: "shalwar",
      placeholder: "e.g., 24 inches",
    },
    {
      label: "Pancha Length",
      name: "pancha",
      placeholder: "e.g., 24 inches",
    },
  ];
  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/customertwo");
  };

  return (
    <div className=" w-full md:flex items-top bg-gray-300 py-12 md:gap-3 p-6">
      <div className=" xl:w-[40%] h-96 mx-auto p-3 bg-white shadow-2xl rounded-2xl ">
        <img className=" w-full h-full object-cover" src={one} alt="" />
      </div>
      <div className="max-w-xl mt-4 md:mt-0 mx-auto p-6 bg-white shadow-2xl rounded-2xl ">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Shalwar Kameez Measurements
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-5 flex justify-center flex-wrap gap-4 gap-x-16"
        >
          {elements.map((field) => (
            <div key={field.name} className="">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type="text"
                name={field.name}
                value={customerData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-lg font-medium transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Customer;
