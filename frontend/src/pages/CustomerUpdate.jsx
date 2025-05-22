import React, { useContext, useState, useEffect } from "react";
import one from "../assets/sizeone.png";
import two from "../assets/sizetwo.png";
import { CustomerContext } from "../context/CustomerContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
function CustomerUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { allCustomer, setAllCustomer, getAllCustomer } =
    useContext(CustomerContext);

  const filterdCustomer = allCustomer.find((c) => c._id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    length: "",
    chest: "",
    shoulder: "",
    neck: "",
    sleeve: "",
    shalwar: "",
    pancha: "",
    waist: "",
    celler: "",
    frontpocket: "",
    leftpocket: "",
    rightpocket: "",
    jents: "",
    daman: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update formData once filterdCustomer is available
  useEffect(() => {
    if (filterdCustomer) {
      setFormData(filterdCustomer);
    }
  }, [filterdCustomer]);

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/customer/update/${id}`,
        formData,
        { withCredentials: true }
      );
      if (res.status === 200) {
        await getAllCustomer();
        navigate(`/customerdetails/${id}`);
        toast.success("Customer updated successfully");
      }
      // Optionally navigate or refetch data
    } catch (error) {
      console.error(error);
      toast.error("Failed to update customer");
    }
  };

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

  const elementstwo = [
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
  return (
    <div>
      <div className=" w-full md:flex items-top bg-gray-300 py-12 md:gap-3 p-6">
        <div className=" xl:w-[40%] relative flex flex-col items-center justify-center h- mx-auto p-3 bg-white shadow-2xl rounded-2xl ">
          <Link to={`/customerdetails/${id}`}>
            <button className="bg-blue-500 absolute top-8 left-6 text-white rounded-lg px-4 py-1 cursor-pointer capitalize ">
              back
            </button>
          </Link>
          <img className=" w-full object-cover " src={one} alt="" />
        </div>
        <div className="w-[60%] mt-4 md:mt-0 mx-auto p-6 bg-white shadow-2xl rounded-2xl ">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Shalwar Kameez Measurements
          </h2>
          <form className="space-y-4 flex justify- flex-wrap gap-6 gap-x-16">
            {formData &&
              elementstwo.map((field) => (
                <div key={field.name} className=" md:w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className=" px-4 py-2 w-52 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
              ))}
          </form>
        </div>
      </div>
      <div className=" w-full md:flex items-top bg-gray-300 py-1 md:gap-3 p-6 pb-10">
        <div className=" xl:w-[40%] flex flex-col items-center justify-center h- mx-auto p-3 bg-white shadow-2xl rounded-2xl ">
          <img className=" w-full object-cover " src={two} alt="" />
        </div>
        <div className="w-[60%] mt-4 md:mt-0 mx-auto p-6 bg-white shadow-2xl rounded-2xl ">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Shalwar Kameez Design Types
          </h2>
          <form
            onSubmit={updateHandler}
            className="space-y-5 flex justify-center flex-wrap gap-4 gap-x-16"
          >
            {formData &&
              elements.map((field) => (
                <div key={field.name} className=" md:w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className=" px-4 py-2 w-52 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>
              ))}

            <button
              type="submit"
              className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-lg font-medium transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerUpdate;
