import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CustomerContext } from "../context/CustomerContext";
function CustomerDetails() {
  const { getAllCustomer } = useContext(CustomerContext);
  const { id } = useParams(); // /customer/:id
  const navigate = useNavigate();
  const [customer, setCustomer] = useState([]);

  const fetchCustomer = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/customer/getsinglecustomer/${id}`,
        { withCredentials: true }
      );
      setCustomer(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch customer");
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  const handleStatusChange = async (customer, id) => {
    if (customer.status === "complete") {
      toast.error("Already marked as complete ");
      return; // Don't send request again
    }
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/customer/status/${id}`,
        {}, // empty body (status is set from backend)
        { withCredentials: true }
      );
      if (result.status === 200) {
        await fetchCustomer();
        toast.success(result.data.message);
      }

      // optionally update UI here
    } catch (error) {
      console.error("Frontend Error:", error.response?.data || error.message);
      toast.error("Failed to update status");
    }
  };

  const deleteCustomer = async () => {
    try {
      const result = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/customer/delete/${id}`,
        { withCredentials: true }
      );
      if (result.status === 200) {
        await getAllCustomer();
        navigate("/dashboard");
        toast.success(result.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.result.data.message);
    }
  };
  if (!customer) return <div className="p-6">Loading...</div>;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <Link to={"/dashboard"}>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-1 cursor-pointer capitalize ">
          back
        </button>
      </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Details</h2>

      <div className="mb-6 space-y-2 border md:flex items-center justify-between p-8">
        <div className=" flex flex-col gap-3">
          <p>
            <strong>Name:</strong> <span className="ml-7">{customer.name}</span>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <span className="ml-7">{customer.email}</span>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <span className="ml-7">{customer.phone}</span>
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            <span className="ml-7">
              {new Date(customer.createdAt).toLocaleDateString()}
            </span>
          </p>
          <p className="">
            <strong>Status:</strong>{" "}
            <span
              className={`px-3 py-1 ml-7 rounded-full text-white ${
                customer.status === "pending" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {customer.status}
            </span>
          </p>
        </div>
        <div className="w-52 text-center h-20 rounded-xl flex justify-between">
          <p className=" font-bold text-1xl mt-6">Dress Color</p>
          <div className="w-24 h-full">
            <img
              className="bg-fuchsia-600 w-full h-full rounded-xl object-cover"
              src=""
              alt=" "
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          "length",
          "chest",
          "shoulder",
          "neck",
          "sleeve",
          "shalwar",
          "pancha",
          "waist",
          "celler",
          "frontpocket",
          "leftpocket",
          "rightpocket",
          "jents",
          "daman",
        ].map((field) => (
          <div key={field}>
            <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>{" "}
            {customer[field]}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => navigate(`/customer/update/${customer._id}`)}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Update Details
        </button>
        <button
          onClick={() => handleStatusChange(customer, customer._id)}
          className={`${
            customer.status === "pending" ? "bg-red-600" : "bg-green-600"
          } hover:opacity-90 text-white py-2 px-4 rounded cursor-pointer`}
        >
          Mark as {customer.status === "pending" ? "pending" : "complete"}
        </button>
        <button
          onClick={deleteCustomer}
          className="bg-red-500 cursor-pointer hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Delete Details
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
