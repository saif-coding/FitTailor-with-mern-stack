import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function CustomerDetails() {
  const { id } = useParams(); // /customer/:id
  const navigate = useNavigate();
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
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

    fetchCustomer();
  }, [id]);

  const handleStatusChange = async (customer, id) => {
    if (customer.status === "complete") {
      toast("Already marked as complete ✅");
      return; // Don't send request again
    }
    try {
      const result = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/customer/status/${id}`,
        {}, // empty body (status is set from backend)
        { withCredentials: true }
      );

      toast.success(result.data.message);
      // optionally update UI here
    } catch (error) {
      console.error("Frontend Error:", error.response?.data || error.message);
      toast.error("Failed to update status");
    }
  };

  if (!customer) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Details</h2>

      <div className="mb-6 space-y-2">
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Joined:</strong>{" "}
          {new Date(customer.createdAt).toLocaleDateString()}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              customer.status === "pending" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {customer.status}
          </span>
        </p>
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
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Update Details
        </button>
        <button
          onClick={() => handleStatusChange(customer, customer._id)}
          className={`${
            customer.status === "pending" ? "bg-red-600" : "bg-green-600"
          } hover:opacity-90 text-white py-2 px-4 rounded`}
        >
          Mark as {customer.status === "pending" ? "pending" : "complete"}
        </button>
      </div>
    </div>
  );
}

export default CustomerDetails;
