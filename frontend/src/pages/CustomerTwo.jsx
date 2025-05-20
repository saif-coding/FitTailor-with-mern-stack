import React, { useContext } from "react";
import two from "../assets/sizetwo.png";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../context/CustomerContext";
function CustomerTwo() {
  const navigate = useNavigate();
  const { setCustomerData, customerData, submitHandler } =
    useContext(CustomerContext);

  const elements = [
    { label: "Celler Design", name: "celler", placeholder: "Small / Big" },
    {
      label: "Front Pocket",
      name: "frontpocket",
      placeholder: " Yes / No",
    },

    {
      label: "Left Pocket",
      name: "leftpocket",
      placeholder: " Yes / No",
    },
    {
      label: "Right Pocket",
      name: "rightpocket",
      placeholder: " Yes / No",
    },
    {
      label: "Jents Design ",
      name: "jents",
      placeholder: "Sample / design",
    },
    {
      label: "Daman Design",
      name: "daman",
      placeholder: "Rounded / Corner",
    },
  ];
  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" w-full md:flex items-top bg-gray-300 py-12 md:gap-3 p-6">
      <div className=" xl:w-[40%] h-96 mx-auto p-3 bg-white shadow-2xl rounded-2xl ">
        <img className=" w-full h-full object-cover" src={two} alt="" />
      </div>
      <div className="max-w-xl mt-4 md:mt-0 mx-auto p-6 bg-white shadow-2xl rounded-2xl ">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Shalwar Kameez Design Types
        </h2>
        <form
          onSubmit={submitHandler}
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
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerTwo;
